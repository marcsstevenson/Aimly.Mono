/// The purpose of this component is to show the user a delete
/// confirmation dialog. There are two callbacks, one for cancel and one for confirmation.

import React, { useCallback, useContext, useMemo, useRef, useState } from 'react';
import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { ChatBubbleLeftEllipsisIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { Field, Form, Formik } from 'formik';
import { ProfileTypeOption } from '__generated__/marketSearchQuery.graphql';
import { PrivateContext } from 'components/PrivateContext';
import validateRequiredString from 'validators/validateRequiredString';
import validateTrue from 'validators/validateTrue';
import {
  MarketEnquiryModelInput,
  useMarketEnquiryMutation$data,
} from '__generated__/useMarketEnquiryMutation.graphql';
import useMarketEnquiryMutation from 'useMarketEnquiryMutation';
import { BudgetOptions } from 'components/shared/BudgetOptions';
import { ComboboxOption, GenericCombobox } from 'components/shared/GenericCombobox';
import { GenericComboboxWrapper } from 'components/shared/GenericComboboxWrapper';
import { myProfilesQuery, default as node } from '__generated__/myProfilesQuery.graphql';
import { useLazyLoadQuery } from 'react-relay/hooks';
import { notEmpty } from 'utils/NotEmpty';

interface Props {
  show: boolean;
  // working: boolean;

  onDone: () => void;

  readonly profileId: string;
  readonly profileType: ProfileTypeOption;
}

interface modelType extends MarketEnquiryModelInput {
  agreed: boolean;
}

interface ProfileDetails {
  readonly id: any;
  readonly profileId: any;
  readonly name: string | null;
  readonly type: ProfileTypeOption;
}

const MarketEnquiry = ({ profileId, profileType, show, onDone }: Props) => {
  // const [open, setOpen] = useState(true);
  const { userId } = useContext(PrivateContext);
  // const [working, setWorking] = useState(false);
  const MarketEnquiry = useMarketEnquiryMutation();
  let model = useMemo<modelType>(() => {
    return {
      fromProfileId: null,
      fromProfileType: null,
      toProfileId: profileId,
      toProfileType: profileType,
      servicesNeeded: '',
      comments: '',
      projectBudget: '',
      agreed: false,
    };
  }, [profileId, profileType]);

  const budgetComboboxOptions = useMemo<ComboboxOption<string>[]>(() => {
    return ['', ...BudgetOptions].map((option, i) => ({ id: i, value: option, label: option }));
  }, []);

  // Lazy load this query because it is only relevant to this component
  const myProfilesData = useLazyLoadQuery<myProfilesQuery>(node, {
    userId: userId,
  });

  const profileComboboxOptions = useMemo<ComboboxOption<ProfileDetails>[]>(() => {
    return (myProfilesData?.myProfiles ? myProfilesData.myProfiles?.filter(notEmpty) : [])
      .filter(notEmpty)
      .map((option, i) => ({
        id: i,
        value: option,
        label: `${option.type} - ${option?.name}`,
      }));
  }, [myProfilesData.myProfiles]);

  const cancelButtonRef = useRef(null);

  const onSubmit = (model: MarketEnquiryModelInput) => {
    // console.log('projectBudget', model.projectBudget);
    // setWorking(true);

    // Use the selected profile
    if (selectedProfileOption) {
      model.fromProfileId = selectedProfileOption.value.profileId;
      model.fromProfileType = selectedProfileOption.value.type;
    }

    handleSave(model);
  };

  const [selectedProfileOption, setSelectedProfileOption] =
    useState<ComboboxOption<ProfileDetails> | null>(
      profileComboboxOptions && profileComboboxOptions.length > 0 ? profileComboboxOptions[0] : null
    );

  const handleSave = useCallback(
    (marketContactModelInput: MarketEnquiryModelInput) => {
      return userId ? MarketEnquiry(userId, marketContactModelInput, handleSubmitCompleted) : null;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [MarketEnquiry]
  );

  // This is called once the SetPersonalProfile mutation has completed
  const handleSubmitCompleted = (
    marketContactModel: MarketEnquiryModelInput,
    response: useMarketEnquiryMutation$data
  ): void => {
    // setWorking(false);
    onDone();
  };

  //profileCombobox

  // const profileComboboxOnChange = (option: ComboboxOption<ProfileDetails>) => {
  //   setValue(option.value);
  //   setSelectedOption(option);
  //   };

  return (
    <Transition.Root show={show} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto"
        initialFocus={cancelButtonRef}
        onClose={onDone}
      >
        <div className="flex min-h-screen items-end justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span className="hidden sm:inline-block sm:h-screen sm:align-middle" aria-hidden="true">
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <Dialog.Panel className="inline-block transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left align-bottom shadow-xl transition-all dark:bg-gray-800 sm:my-8 sm:w-full sm:max-w-lg sm:p-6 sm:align-middle">
              <div className="absolute top-0 right-0 hidden pt-4 pr-4 sm:block">
                <button
                  type="button"
                  className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:ring-offset-2 dark:bg-gray-800"
                  onClick={() => onDone()}
                >
                  <span className="sr-only">Close</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="sm:flex sm:items-start">
                <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-secondary-100 sm:mx-0 sm:h-10 sm:w-10">
                  <ChatBubbleLeftEllipsisIcon
                    className="h-6 w-6 text-secondary-600"
                    aria-hidden="true"
                  />
                </div>
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900 dark:text-gray-100"
                  >
                    Market Enquiry
                  </Dialog.Title>
                </div>
              </div>
              {/* Form */}
              <Formik initialValues={model} onSubmit={onSubmit}>
                {({ errors, touched, isValidating, isSubmitting }) => (
                  <Form>
                    <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                      <div className="sm:col-span-6">
                        <label htmlFor="servicesNeeded" className="form-label">
                          Services Needed *
                        </label>
                        <div className="mt-1">
                          <Field
                            type="text"
                            name="servicesNeeded"
                            id="servicesNeeded"
                            as="textarea"
                            rows={8}
                            validate={validateRequiredString}
                            className={errors.servicesNeeded ? 'form-input-error' : 'form-input'}
                          />
                          {errors.servicesNeeded && touched.servicesNeeded && (
                            <div className="form-input-validation">{errors.servicesNeeded}</div>
                          )}
                        </div>
                        <p className="form-input-comments">What services are you looking for?</p>
                      </div>

                      <div className="sm:col-span-3">
                        <label htmlFor="projectBudget" className="form-label">
                          Project Budget (US$) *
                        </label>
                        <div className="mt-1">
                          <Field
                            component={GenericComboboxWrapper}
                            comboboxOptions={budgetComboboxOptions}
                            id="projectBudget"
                            name="projectBudget"
                            validate={validateRequiredString}
                            className={errors.projectBudget ? 'form-input-error' : ''}
                          />
                        </div>
                        {errors.projectBudget && touched.projectBudget && (
                          <div className="form-input-validation">{errors.projectBudget}</div>
                        )}
                      </div>
                      <div className="sm:col-span-6">
                        <label htmlFor="comments" className="form-label">
                          Your Related Profile
                        </label>
                        <div className="mt-1">
                          <GenericCombobox
                            options={profileComboboxOptions}
                            initiallySelected={selectedProfileOption}
                            onChange={(option) => {
                              setSelectedProfileOption(option);
                            }}
                          />
                        </div>
                        <p className="form-input-comments">
                          Your message will include a link to this profile for context and to
                          expedite a discussion.
                        </p>
                      </div>
                      <div className="sm:col-span-6">
                        <label htmlFor="comments" className="form-label">
                          Comments
                        </label>
                        <div className="mt-1">
                          <Field
                            type="text"
                            name="comments"
                            id="comments"
                            as="textarea"
                            rows={8}
                            className="form-input"
                          />
                        </div>
                        <p className="form-input-comments">
                          Additional details like what you need help with, expected timelines,
                          preferred communication method, etc.
                        </p>
                      </div>
                      <div className="sm:col-span-6">
                        <div className="flex items-center">
                          <Field
                            type="checkbox"
                            name="agreed"
                            id="agreed"
                            validate={validateTrue}
                            // className="text-validation-600 border-validation-300"
                            // className={errors.agreed ? 'form-checkbox-error' : ''}
                          />
                          <label
                            htmlFor="agreed"
                            className="ml-3 text-sm text-gray-700 dark:text-gray-100"
                          >
                            I acknowledge and agree that my profile information will be included
                            with this message (but limited to what can usually be displayed on the
                            market by listing a profile).
                          </label>
                        </div>
                        {errors.agreed && touched.agreed && (
                          <div className="form-input-validation">{errors.agreed}</div>
                        )}
                      </div>
                    </div>
                    {/* Modal footer */}
                    <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                      <button
                        type="submit"
                        className="inline-flex w-full justify-center rounded-md border border-transparent bg-secondary-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-secondary-700 focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:ring-offset-2 disabled:bg-secondary-300 sm:ml-3 sm:w-auto sm:text-sm"
                        disabled={isValidating || isSubmitting}
                      >
                        Send
                        <ChatBubbleLeftEllipsisIcon
                          className="ml-2 -mr-1 h-5 w-5"
                          aria-hidden="true"
                        />
                      </button>
                      <button
                        type="button"
                        className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-100 focus:outline-none  focus:ring-2 focus:ring-secondary-500 focus:ring-offset-2 disabled:text-gray-400 disabled:hover:bg-white sm:mt-0 sm:w-auto sm:text-sm"
                        onClick={() => onDone()}
                        ref={cancelButtonRef}
                        disabled={isValidating || isSubmitting}
                      >
                        Cancel
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default MarketEnquiry;
