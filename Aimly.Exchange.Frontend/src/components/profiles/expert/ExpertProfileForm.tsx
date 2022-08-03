// The purpose of this component is to receive a GetExpertProfileModelInput
// and allow the user to edit it.
// Both the ExpertProfileEdit and ExpertProfileNew components use this component.

import React, { useCallback } from 'react';
import Pages from 'components/shared/Pages';
import useSetExpertProfileMutation from 'useSetExpertProfileMutation';
import useDeleteExpertProfileMutation from 'useDeleteExpertProfileMutation';
import {
  GetExpertProfileModelInput,
  useSetExpertProfileMutation$data,
} from '__generated__/useSetExpertProfileMutation.graphql';
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
  useDeleteExpertProfileMutation$data,
  useDeleteExpertProfileMutationVariables,
} from '__generated__/useDeleteExpertProfileMutation.graphql';
import { SkillSelector } from 'components/shared/MetaData/SkillSelector';
import { getUrlForViewProfile } from 'components/market/view/UrlForViewProfile';
import { useNavigate } from 'react-router-dom';
import { ContentEditWrapper } from 'components/author/ContentEditWrapper';
import ContentEdit from 'components/author/ContentEdit';
import useDefaultEditor from 'components/author/useDefaultEditor';
import { GetCurrentTenant } from 'tenant/TenantValues';

const currentTenant = GetCurrentTenant();

const expert = currentTenant.expertOptions.singularName;

interface Props {
  model: GetExpertProfileModelInput;
  allowDelete: boolean;
}

const ExpertProfileForm = (props: Props) => {
  const navigate = useNavigate();
  const { getPromptForDeleteValue } = useUrlParser();
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(
    props.allowDelete && getPromptForDeleteValue()
  );
  const [isDeleting, setIsDeleting] = useState(false);
  const [viewAfterSave, setViewAfterSave] = useState(false);

  const navigateToPage = useNavigateToPage();

  let model: GetExpertProfileModelInput = props.model;

  const editor = useDefaultEditor(model.about);
  const SetExpertProfile = useSetExpertProfileMutation();
  const DeleteExpertProfile = useDeleteExpertProfileMutation();

  const onSubmit = (getExpertProfileModel: GetExpertProfileModelInput) => {
    getExpertProfileModel.about = editor?.getHTML() ?? '';

    handleSave(getExpertProfileModel);
  };

  const handleSave = useCallback(
    (getExpertProfileModel: GetExpertProfileModelInput) => {
      return SetExpertProfile(getExpertProfileModel, handleSubmitCompleted);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [SetExpertProfile]
  );

  // This is called once the SetExpertProfile mutation has completed
  const handleSubmitCompleted = (response: useSetExpertProfileMutation$data): void => {
    if (viewAfterSave) {
      // Take the user to see their profile in the market
      const path = getUrlForViewProfile(
        'EXPERT',
        response.setExpertProfile?.updatedExpertProfileId ?? ''
      );
      navigate(path);
    } else {
      const queryString = `?$id=${response.setExpertProfile?.updatedExpertProfileId}`;

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
      const variables: useDeleteExpertProfileMutationVariables = {
        userId: model.userId,
        profileId: model.id,
      };
      return DeleteExpertProfile(variables, handleDeleteCompleted);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [DeleteExpertProfile]
  );

  // This is called once the SetExpertProfile mutation has completed
  const handleDeleteCompleted = (response: useDeleteExpertProfileMutation$data): void => {
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
          title={expert + ' Profile Builder'}
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

export default ExpertProfileForm;
