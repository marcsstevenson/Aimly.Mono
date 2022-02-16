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
import { classNames } from 'utils/classNames';

interface Props {
  model: GetMentorProfileModelInput;
}

const MentorProfileForm = (props: Props) => {
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

  // TEMP
  let listOnMarket = true;
  const setListOnMarket = (value: boolean) => {
    listOnMarket = value;
  };

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div ref={topRef}>
        <GenericHeader
          title="Mentor Profile Builder"
          contextVal={model.id ? model.industry : 'New'}
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
                          <Switch.Label
                            as="p"
                            className="text-sm font-medium text-gray-900 dark:text-gray-100"
                            passive
                          >
                            Available to hire
                          </Switch.Label>
                          <Switch.Description className="text-sm text-gray-500 dark:text-gray-400">
                            If you which to be visible on the market.
                          </Switch.Description>
                        </div>
                        <Switch
                          checked={listOnMarket}
                          onChange={setListOnMarket}
                          className={classNames(
                            listOnMarket ? 'bg-primary-500' : 'bg-gray-200',
                            'focus:ring-primary-500 relative ml-4 inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2'
                          )}
                        >
                          <span
                            aria-hidden="true"
                            className={classNames(
                              listOnMarket ? 'translate-x-5' : 'translate-x-0',
                              'inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
                            )}
                          />
                        </Switch>
                      </Switch.Group>
                    </div>

                    <div className="sm:col-span-3">
                      <label htmlFor="phoneNumber" className="form-label">
                        Industry *
                      </label>
                      <div className="mt-1">
                        <Field id="industry" name="industry" as="select" className="form-input">
                          <option value="Agriculture / Agtech Artificial">
                            Agriculture / Agtech Artificial
                          </option>
                          <option value="Augmented Reality">Augmented Reality</option>
                          <option value="B2B">B2B</option>
                        </Field>
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
      <div></div>
    </div>
  );
};

export default MentorProfileForm;
