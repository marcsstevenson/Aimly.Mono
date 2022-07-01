// The purpose of this component is to receive a GetCompanyProfileModelInput
// and allow the user to edit it.
// Both the CompanyProfileEdit and CompanyProfileNew components use this component.

import React, { useCallback, useContext } from 'react';
import Pages from 'components/shared/Pages';
import useSetCompanyProfileMutation from 'useSetCompanyProfileMutation';
import useDeleteCompanyProfileMutation from 'useDeleteCompanyProfileMutation';
import {
  GetCompanyProfileModelInput,
  useSetCompanyProfileMutation$data,
} from '__generated__/useSetCompanyProfileMutation.graphql';
import useNavigateToPage from 'components/shared/useNavigateToPage';
import { Field, Form, Formik } from 'formik';
import validateRequiredString from 'validators/validateRequiredString';
import validateRequiredHtml from 'validators/validateRequiredHtml';
import GenericHeader from 'components/shared/GenericHeader';
import { Switch } from '@headlessui/react';
import { SwitchWrapper } from 'components/shared/SwitchWrapper';
import { IndustrySelector } from 'components/shared/IndustrySelector';
import { useState } from 'react';
import { ConfirmDelete } from 'components/shared/ConfirmDelete';
import { useUrlParser } from 'components/shared/useUrlParser';
import {
  useDeleteCompanyProfileMutation$data,
  useDeleteCompanyProfileMutationVariables,
} from '__generated__/useDeleteCompanyProfileMutation.graphql';
import { SkillSelector } from 'components/shared/SkillSelector';
import { getUrlForViewProfile } from 'components/market/view/UrlForViewProfile';
import { useNavigate } from 'react-router-dom';
import { ContentEditWrapper } from 'components/author/ContentEditWrapper';
import ContentEdit from 'components/author/ContentEdit';
import useDefaultEditor from 'components/author/useDefaultEditor';
import { PrivateContext } from 'components/PrivateContext';

interface Props {
  model: GetCompanyProfileModelInput;
  allowDelete: boolean;
}

const CompanyProfileForm = (props: Props) => {
  const { checkedInUser } = useContext(PrivateContext);
  const navigate = useNavigate();
  const { getPromptForDeleteValue } = useUrlParser();
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(
    props.allowDelete && getPromptForDeleteValue()
  );
  const [isDeleting, setIsDeleting] = useState(false);
  const [viewAfterSave, setViewAfterSave] = useState(false);

  const navigateToPage = useNavigateToPage();

  let model: GetCompanyProfileModelInput = props.model;

  const problemDetailsEditor = useDefaultEditor(model.problemDetails);

  const SetCompanyProfile = useSetCompanyProfileMutation();
  const DeleteCompanyProfile = useDeleteCompanyProfileMutation();

  const onSubmit = (getCompanyProfileModel: GetCompanyProfileModelInput) => {
    getCompanyProfileModel.problemDetails = problemDetailsEditor?.getHTML() ?? '';

    handleSave(getCompanyProfileModel);
  };

  const handleSave = useCallback(
    (getCompanyProfileModel: GetCompanyProfileModelInput) => {
      return SetCompanyProfile(
        checkedInUser?.userId ?? '',
        getCompanyProfileModel,
        handleSubmitCompleted
      );
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [SetCompanyProfile]
  );

  // This is called once the SetCompanyProfile mutation has completed
  const handleSubmitCompleted = (response: useSetCompanyProfileMutation$data): void => {
    if (viewAfterSave) {
      // Take the user to see their profile in the market
      const path = getUrlForViewProfile(
        'EXPERT',
        response.setCompanyProfile?.updatedCompanyProfileId ?? ''
      );
      navigate(path);
    } else {
      const queryString = `?$id=${response.setCompanyProfile?.updatedCompanyProfileId}`;

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
      const variables: useDeleteCompanyProfileMutationVariables = {
        userId: checkedInUser?.userId ?? '',
        profileId: model.id,
      };
      return DeleteCompanyProfile(variables, handleDeleteCompleted);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [DeleteCompanyProfile]
  );

  // This is called once the SetCompanyProfile mutation has completed
  const handleDeleteCompleted = (response: useDeleteCompanyProfileMutation$data): void => {
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
          title="Company Profile Builder"
          contextVal={model.id ? model.companyName : 'New'}
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
                            List on market
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
                      <label htmlFor="familyName" className="form-label">
                        Company Name *
                      </label>
                      <div className="mt-1">
                        <Field
                          id="name"
                          name="name"
                          type="text"
                          validate={validateRequiredString}
                          className={errors.companyName ? 'form-input-error' : 'form-input'}
                        />
                        {errors.companyName && touched.companyName && (
                          <div className="form-input-validation">{errors.companyName}</div>
                        )}
                      </div>
                    </div>
                    <div className="sm:col-span-6">
                      <label htmlFor="phoneNumber" className="form-label">
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
                      <label htmlFor="familyName" className="form-label">
                        Your Problem
                      </label>
                      <div className="mt-1">
                        <ContentEdit inputEditor={problemDetailsEditor} />
                        {/* <Field
                          component={ContentEditWrapper}
                          id="about"
                          name="about"
                          required={true}
                          validate={validateRequiredHtml}
                        /> */}
                      </div>
                      <p className="form-input-description">
                        What is the problem that you aim to solve?
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

export default CompanyProfileForm;
