// The purpose of this component is to receive a GetMentorProfileModelInput
// and allow the user to edit it.
// Both the MentorProfileEdit and MentorProfileNew components use this component.

import React, { useCallback, useRef } from 'react';
import useSetMentorProfileMutation from 'useSetMentorProfileMutation';
import {
  GetMentorProfileModelInput,
  useSetMentorProfileMutation$data,
} from '__generated__/useSetMentorProfileMutation.graphql';
import { Pages } from 'components/shared/AppRoutes';
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

interface Props {
  model: GetMentorProfileModelInput;
}

const MentorProfileForm = (props: Props) => {
  const { getPromptForDeleteValue } = useUrlParser();
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(getPromptForDeleteValue());
  const [isDeleting, setIsDeleting] = useState(false);

  const navigateToPage = useNavigateToPage();
  const topRef = useRef<HTMLDivElement>(null);

  let model: GetMentorProfileModelInput = props.model;

  const SetMentorProfile = useSetMentorProfileMutation();

  const onSubmit = (getMentorProfileModel: GetMentorProfileModelInput) => {
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
    let queryString = `?$id=${response.setMentorProfile?.updatedMentorProfileId}`;

    scrollToTop();
    navigateToPage(Pages.Profiles, queryString);
  };

  // Scroll the user to the top of the page
  const scrollToTop = () => {
    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDeleteConfirm = () => {
    setIsDeleting(true);
  };

  const handleDeleteCancel = () => {
    setShowDeleteConfirmation(false);
  };

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div ref={topRef}>
        <GenericHeader title="Mentor Profile Builder" contextVal={model.id ? model.name : 'New'} />

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
                            If you which to be visible on the market.
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
                          maxLength={20}
                          validate={validateRequiredString}
                          className={errors.name ? 'form-input-error' : 'form-input'}
                        />
                        {errors.name && touched.name && (
                          <div className="form-input-validation">{errors.name}</div>
                        )}
                      </div>
                      <p className="form-input-description">
                        A short name for your profile (20 characters max).
                      </p>
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
                  <button
                    disabled={isSubmitting || isValidating}
                    type="button"
                    onClick={() => setShowDeleteConfirmation(true)}
                    className="form-delete"
                  >
                    Delete Profile
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

export default MentorProfileForm;
