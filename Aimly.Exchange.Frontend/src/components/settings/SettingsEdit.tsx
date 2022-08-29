import React, { useCallback, useContext, useState } from 'react';
import { useLazyLoadQuery } from 'react-relay/hooks';
import useSetUserSettingsMutation from 'useSetUserSettingsMutation';
import {
  SetUserSettingsCommandInput,
  useSetUserSettingsMutation$data,
} from '__generated__/useSetUserSettingsMutation.graphql';
import * as GetUserSettingsQuery from '__generated__/userSettingsQuery.graphql';
import { PrivateContext } from 'components/PrivateContext';
import { Field, Form, Formik, FormikHelpers } from 'formik';
import validateRequiredString from 'validators/validateRequiredString';
import validateEmail from 'validators/validateEmail';
import GenericHeader from 'components/shared/GenericHeader';
import { userSettingsQuery$variables } from '__generated__/userSettingsQuery.graphql';
import ProfilePhotoViewer from 'components/shared/ProfilePhotoViewer';
import { CheckIcon } from '@heroicons/react/20/solid';

const SettingsEdit = () => {
  const { userId, checkedInUser, checkInUser } = useContext(PrivateContext);
  const userSettingsQueryVariables: userSettingsQuery$variables = {
    userId: userId,
  };

  // Lazy load this query because it is only relevant to this component
  const data = useLazyLoadQuery<GetUserSettingsQuery.userSettingsQuery>(
    GetUserSettingsQuery.default,
    userSettingsQueryVariables,
    // Ideally we could use commitLocalUpdate to update the relay cache when setUserSettingsMutation is called
    // However, for now, we'll simply always refresh this query when the component is mounted
    {
      fetchPolicy: 'network-only',
    }
  );

  let model: SetUserSettingsCommandInput = {
    ...data.userSettings,
    userId: userId,
  };

  const SetUserSettings = useSetUserSettingsMutation();
  const [profilePictureUrl, setProfilePictureUrl] = useState(model.profilePictureUrl);
  const [saved, setSaved] = useState<boolean>(false);
  // const [formikHelpers, setFormikHelpers] =
  //   useState<FormikHelpers<SetUserSettingsCommandInput> | null>(null);

  let formikHelpers: FormikHelpers<SetUserSettingsCommandInput> | null = null;

  const onSubmit = (
    userSettingsModel: SetUserSettingsCommandInput,
    actions: FormikHelpers<SetUserSettingsCommandInput>
  ) => {
    handleSave(userSettingsModel);
    setSaved(false);
    formikHelpers = actions;

    if (formikHelpers) {
      console.log('has formikHelpers');
    }
    console.log('actions', actions);
    console.log('formikHelpers', formikHelpers);
  };

  const handleSave = useCallback(
    (userSettingsModel: SetUserSettingsCommandInput) => {
      // Refresh the checkedInUser values
      checkInUser({
        fullName: checkedInUser?.fullName ?? '',
        pictureUrl: profilePictureUrl ?? '',
        publicId: checkedInUser?.publicId ?? '',
        userId: userId ?? '',
      });
      return SetUserSettings(userSettingsModel, handleSubmitCompleted);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [SetUserSettings]
  );

  // This is called once the SetUserSettings mutation has completed
  const handleSubmitCompleted = (response: useSetUserSettingsMutation$data): void => {
    if (formikHelpers) {
      console.log('setSubmitting(false)');
      formikHelpers.setSubmitting(false);
    }
    setSaved(true);
  };

  // Run this when the form values change to handle profile picture
  const getData = (values: SetUserSettingsCommandInput) => {
    if (values.profilePictureUrl !== profilePictureUrl) {
      setProfilePictureUrl(values.profilePictureUrl);
    }
  };

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div>
        <GenericHeader title="" contextVal="Edit Settings" />
        <Formik initialValues={model} onSubmit={onSubmit}>
          {({ errors, touched, isValidating, isSubmitting, values }) => {
            getData(values);

            return (
              <Form className="default-divide space-y-8">
                <div className="default-divide space-y-8">
                  <div className="pt-8">
                    <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                      <div className="sm:col-span-6">
                        <label htmlFor="email" className="form-label">
                          Email Address *
                        </label>
                        <div className="mt-1">
                          <Field
                            type="text"
                            name="email"
                            id="email"
                            validate={validateEmail}
                            className={errors.email ? 'form-input-error' : 'form-input'}
                          />
                          {errors.email && touched.email && (
                            <div className="form-input-validation">{errors.email}</div>
                          )}
                        </div>
                      </div>

                      <div className="sm:col-span-4">
                        <label htmlFor="profilePictureUrl" className="form-label">
                          Profile Picture URL *
                        </label>
                        <p className="form-input-description">
                          This needs to be a square ratio image and ideally small (less than 100KB)
                        </p>
                        <div className="mt-1">
                          <Field
                            type="text"
                            name="profilePictureUrl"
                            id="profilePictureUrl"
                            as="textarea"
                            rows={4}
                            validate={validateRequiredString}
                            // onChange={setProfilePictureUrl(form.values.profilePictureUrl)}
                            className={errors.profilePictureUrl ? 'form-input-error' : 'form-input'}
                          />
                          {errors.profilePictureUrl && touched.profilePictureUrl && (
                            <div className="form-input-validation">{errors.profilePictureUrl}</div>
                          )}
                        </div>
                      </div>
                      <div className="flex justify-end sm:col-span-2">
                        <ProfilePhotoViewer
                          profilePictureUrl={profilePictureUrl}
                          imageRoundnessClass={'rounded-full'}
                        />
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
                      {saved && <>d</>}
                      {saved && <CheckIcon className="ml-3 -mr-1 h-5 w-5" aria-hidden="true" />}
                    </button>
                  </div>
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
};

export default SettingsEdit;
