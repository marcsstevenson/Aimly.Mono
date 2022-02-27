// The purpose of this component is to receive a GetExpertProfileModelInput
// and allow the user to edit it.
// Both the ExpertProfileEdit and ExpertProfileNew components use this component.

import React, { useCallback, useRef } from 'react';
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
import GenericHeader from 'components/shared/GenericHeader';
import { Switch } from '@headlessui/react';
import { SwitchWrapper } from 'components/shared/SwitchWrapper';
import { IndustrySelector } from 'components/shared/IndustrySelector';
import { useState } from 'react';
import { ConfirmDelete } from 'components/shared/ConfirmDelete';
import { useUrlParser } from 'components/shared/useUrlParser';
import {
  useDeleteExpertProfileMutation$data,
  useDeleteExpertProfileMutationVariables,
} from '__generated__/useDeleteExpertProfileMutation.graphql';

interface Props {
  model: GetExpertProfileModelInput;
  allowDelete: boolean;
}

const ExpertProfileForm = (props: Props) => {
  const { getPromptForDeleteValue } = useUrlParser();
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(
    props.allowDelete && getPromptForDeleteValue()
  );
  const [isDeleting, setIsDeleting] = useState(false);

  const navigateToPage = useNavigateToPage();
  const topRef = useRef<HTMLDivElement>(null);

  let model: GetExpertProfileModelInput = props.model;

  const SetExpertProfile = useSetExpertProfileMutation();
  const DeleteExpertProfile = useDeleteExpertProfileMutation();

  const onSubmit = (getExpertProfileModel: GetExpertProfileModelInput) => {
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
    let queryString = `?$id=${response.setExpertProfile?.updatedExpertProfileId}`;

    outro(queryString);
  };

  // Head back to profiles
  const outro = (queryString: string | null = null) => {
    scrollToTop();
    navigateToPage(Pages.Profiles, queryString);
  };

  // Scroll the user to the top of the page
  const scrollToTop = () => {
    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: 'smooth' });
    }
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
      <div ref={topRef}>
        <GenericHeader title="Expert Profile Builder" contextVal={model.id ? model.name : 'New'} />

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
          {({ errors, touched, isValidating, isSubmitting }) => (
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
                      <label htmlFor="familyName" className="form-label">
                        Profile name *
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
                      <p className="form-input-description">A short name for your profile.</p>
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
                        About *
                      </label>
                      <div className="mt-1">
                        <Field
                          id="about"
                          name="about"
                          as="textarea"
                          rows={4}
                          validate={validateRequiredString}
                          className={errors.about ? 'form-input-error' : 'form-input'}
                        />
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
                    disabled={isSubmitting || isValidating}
                    type="submit"
                    className="form-next ml-3"
                  >
                    Save
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
