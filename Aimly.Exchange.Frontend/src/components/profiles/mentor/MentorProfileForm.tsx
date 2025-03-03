// The purpose of this component is to receive a GetMentorProfileModelInput
// and allow the user to edit it.
// Both the MentorProfileEdit and MentorProfileNew components use this component.

import React, { useCallback } from 'react';
import Pages from 'components/shared/Pages';
import useSetMentorProfileMutation from 'useSetMentorProfileMutation';
import useDeleteMentorProfileMutation from 'useDeleteMentorProfileMutation';
import {
  GetMentorProfileModelInput,
  useSetMentorProfileMutation$data,
} from '__generated__/useSetMentorProfileMutation.graphql';
import useNavigateToPage from 'components/shared/useNavigateToPage';
import { Field, Form, Formik } from 'formik';
import validateRequiredString from 'validators/validateRequiredString';
import validateRequiredHtml from 'validators/validateRequiredHtml';
import GenericHeader from 'components/shared/GenericHeader';
import { Switch } from '@headlessui/react';
import { SwitchWrapper } from 'components/shared/SwitchWrapper';
import { IndustrySelector } from 'components/shared/MetaData/IndustrySelector';
import { useState } from 'react';
import { ConfirmDelete } from 'components/shared/ConfirmDelete';
import { useUrlParser } from 'components/shared/useUrlParser';
import {
  useDeleteMentorProfileMutation$data,
  useDeleteMentorProfileMutationVariables,
} from '__generated__/useDeleteMentorProfileMutation.graphql';
import { SkillSelector } from 'components/shared/MetaData/SkillSelector';
import { getUrlForViewProfile } from 'components/market/view/UrlForViewProfile';
import { useNavigate } from 'react-router-dom';
import ContentEdit from 'components/author/ContentEdit';
import useDefaultEditor from 'components/author/useDefaultEditor';

import { GetCurrentTenant } from 'tenant/TenantValues';

const currentTenant = GetCurrentTenant();

const mentor = currentTenant.mentorOptions.singularName;

interface Props {
  model: GetMentorProfileModelInput;
  allowDelete: boolean;
}

const MentorProfileForm = (props: Props) => {
  const navigate = useNavigate();
  const { getPromptForDeleteValue } = useUrlParser();
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(
    props.allowDelete && getPromptForDeleteValue()
  );
  const [isDeleting, setIsDeleting] = useState(false);
  const [viewAfterSave, setViewAfterSave] = useState(false);

  const navigateToPage = useNavigateToPage();

  let model: GetMentorProfileModelInput = props.model;

  const editor = useDefaultEditor(model.about);
  const SetMentorProfile = useSetMentorProfileMutation();
  const DeleteMentorProfile = useDeleteMentorProfileMutation();

  const onSubmit = (getMentorProfileModel: GetMentorProfileModelInput) => {
    getMentorProfileModel.about = editor?.getHTML() ?? '';

    handleSave(getMentorProfileModel);
  };

  const handleSave = useCallback(
    (getMentorProfileModel: GetMentorProfileModelInput) => {
      return SetMentorProfile(getMentorProfileModel, handleSubmitCompleted);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [SetMentorProfile]
  );

  // This is called once the SetMentorProfile mutation has completed
  const handleSubmitCompleted = (response: useSetMentorProfileMutation$data): void => {
    if (viewAfterSave) {
      // Take the user to see their profile in the market
      const path = getUrlForViewProfile(
        'MENTOR',
        response.setMentorProfile?.updatedMentorProfileId ?? ''
      );
      navigate(path);
    } else {
      const queryString = `?$id=${response.setMentorProfile?.updatedMentorProfileId}`;

      outro(queryString);
    }
  };

  // Head back to profiles
  const outro = (queryString: string | null = null) => {
    navigateToPage(Pages.MyProfiles, queryString);
  };

  const handleDelete = useCallback(
    () => {
      if (model.id === null) return;

      setIsDeleting(true);
      const variables: useDeleteMentorProfileMutationVariables = {
        userId: model.userId,
        profileId: model.id,
      };
      return DeleteMentorProfile(variables, handleDeleteCompleted);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [DeleteMentorProfile]
  );

  // This is called once the SetMentorProfile mutation has completed
  const handleDeleteCompleted = (response: useDeleteMentorProfileMutation$data): void => {
    outro();
  };

  const handleDeleteConfirm = () => {
    handleDelete();
  };

  const handleDeleteCancel = () => {
    setShowDeleteConfirmation(false);
  };

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div>
        <GenericHeader
          title={mentor + ' Profile Builder'}
          contextVal={model.id ? model.name : 'New'}
        />

        <ConfirmDelete
          show={showDeleteConfirmation}
          working={isDeleting}
          Title="Delete Profile"
          Message="Are you sure that you want to delete this profile? This action cannot be undone!"
          ConfirmButtonText="Confirm Delete"
          onConfirm={handleDeleteConfirm}
          onCancel={handleDeleteCancel}
        />

        <Formik initialValues={model} onSubmit={onSubmit}>
          {({ errors, touched, isValidating, isSubmitting, isValid }) => (
            <Form className="space-y-8 divide-y divide-gray-200">
              <div className="space-y-8 divide-y divide-gray-200">
                <div className="pt-8">
                  <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                    <div className="sm:col-span-6">
                      <Switch.Group as="li" className="flex items-center justify-between py-4">
                        <div className="flex flex-col">
                          <Switch.Label as="p" className="form-label" passive>
                            Available to hire
                          </Switch.Label>
                          <Switch.Description className="form-input-description">
                            If you wish to be visible on the market.
                          </Switch.Description>
                        </div>

                        <Field
                          className="form-input"
                          component={SwitchWrapper}
                          id="listOnMarket"
                          name="listOnMarket"
                        />
                      </Switch.Group>
                    </div>

                    <div className="sm:col-span-6">
                      <label htmlFor="name" className="form-label">
                        Profile Title *
                      </label>
                      <div className="mt-1">
                        <Field
                          id="name"
                          name="name"
                          type="text"
                          validate={validateRequiredString}
                          className={errors.name ? 'form-input-error' : 'form-input'}
                        />
                        {errors.name && touched.name && (
                          <div className="form-input-validation">{errors.name}</div>
                        )}
                      </div>
                      <p className="form-input-description">
                        A short title for your profile. Examples "Copy Writer", "Marketing
                        Specialist" or "Entrepreneur Mentor".
                      </p>
                    </div>
                    <div className="sm:col-span-6">
                      <label
                        htmlFor="industries"
                        className="text-xl font-extrabold text-gray-900 dark:text-gray-100"
                      >
                        Industries
                      </label>
                      <div className="mt-1">
                        <Field
                          className="form-input"
                          component={IndustrySelector}
                          id="industries"
                          name="industries"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-6">
                      <label
                        htmlFor="skills"
                        className="text-xl font-extrabold text-gray-900 dark:text-gray-100"
                      >
                        Skills
                      </label>
                      <div className="mt-1">
                        <Field
                          className="form-input"
                          component={SkillSelector}
                          id="skills"
                          name="skills"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-6">
                      <label className="form-label">About *</label>
                      <div className="mt-1">
                        <ContentEdit inputEditor={editor} />
                        {/* <Field
                          component={ContentEditWrapper}
                          id="about"
                          name="about"
                          required={true}
                          validate={validateRequiredHtml}
                        /> */}
                        {errors.about && touched.about && (
                          <div className="form-input-validation">{errors.about}</div>
                        )}
                      </div>
                      <p className="form-input-description">
                        A brief description of why you would make a great mentor for this industry.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="py-5">
                <div className="flex justify-end">
                  {props.allowDelete && (
                    <button
                      disabled={isSubmitting || isValidating}
                      type="button"
                      onClick={() => setShowDeleteConfirmation(true)}
                      className="form-delete"
                    >
                      Delete Profile
                    </button>
                  )}
                  <button
                    disabled={isSubmitting || isValidating}
                    type="button"
                    onClick={() => outro()}
                    className="form-button-flat"
                  >
                    Cancel
                  </button>
                  <button
                    disabled={isSubmitting || isValidating || !isValid}
                    type="submit"
                    onClick={() => setViewAfterSave(false)}
                    className="form-next-dark ml-3"
                  >
                    Save
                  </button>
                  <button
                    disabled={isSubmitting || isValidating || !isValid}
                    type="submit"
                    onClick={() => setViewAfterSave(true)}
                    className="form-next ml-3"
                  >
                    Save and View
                  </button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default MentorProfileForm;
