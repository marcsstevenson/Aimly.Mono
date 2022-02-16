import React, { useCallback, useContext, useRef } from 'react';
import { useLazyLoadQuery } from 'react-relay/hooks';
import useSetPersonalProfileMutation from 'useSetPersonalProfileMutation';
import {
  GetPersonalProfileModelInput,
  useSetPersonalProfileMutation$data,
} from '__generated__/useSetPersonalProfileMutation.graphql';
import * as GetPersonalProfileQuery from '__generated__/getPersonalProfileQuery.graphql';
import { Pages } from 'components/shared/AppRoutes';
import useNavigateToPage from 'components/shared/useNavigateToPage';
import { PrivateContext } from 'components/private/PrivateContext';
import { Field, Form, Formik } from 'formik';
import validateRequiredString from 'validators/validateRequiredString';
// import TimezoneSelect from 'react-timezone-select';
import ProfilePhotoSelector from 'components/shared/ProfilePhotoSelector';
import { getLinkedInProfileFromAuthHelper } from 'components/shared/LinkedInProfileAuthHelper';
import { getUsersLanguage } from 'components/shared/UsersLanguageHelper';
import GenericHeader from 'components/shared/GenericHeader';
import { IndustrySelector } from 'components/shared/IndustrySelector';

const PersonalProfileEdit = () => {
  const { user, userId } = useContext(PrivateContext);
  const navigateToPage = useNavigateToPage();
  const topRef = useRef<HTMLDivElement>(null);
  const getPersonalProfileQueryVariables = {
    id: userId,
  };

  // Lazy load this query because it is only relevant to this component
  const data = useLazyLoadQuery<GetPersonalProfileQuery.getPersonalProfileQuery>(
    GetPersonalProfileQuery.default,
    getPersonalProfileQueryVariables,
    // Ideally we could use commitLocalUpdate to update the relay cache when setPersonalProfileMutation is called
    // However, for now, we'll simply always refresh this query when the component is mounted
    {
      fetchPolicy: 'network-only',
    }
  );

  const loadedData = data.getPersonalProfile;

  let model: GetPersonalProfileModelInput = {
    ...data.getPersonalProfile,
    userId: userId,
    about: loadedData?.about ?? '',
    personalProfilePictureUrl: loadedData?.personalProfilePictureUrl ?? user?.picture ?? '', // Note we are using the Auth profile values as the first fallback
    language: loadedData?.language ?? getUsersLanguage(),
    timezone: loadedData?.timezone ?? '',
    givenName: loadedData?.givenName ?? user?.given_name ?? '', // Note we are using the Auth profile values as the first fallback
    familyName: loadedData?.familyName ?? user?.family_name ?? '', // Note we are using the Auth profile values as the first fallback
    phoneNumber: loadedData?.phoneNumber ?? '',
    linkedInProfile: loadedData?.linkedInProfile ?? getLinkedInProfileFromAuthHelper(user) ?? '',
    industries: loadedData?.industries ?? [],
  };

  const SetPersonalProfile = useSetPersonalProfileMutation();

  const onSubmit = (getPersonalProfileModel: GetPersonalProfileModelInput) => {
    // Just relay the personal profile picture url to the backend for now (until we allow this to be updated)
    getPersonalProfileModel.personalProfilePictureUrl = model.personalProfilePictureUrl;

    // Just use the browser version of the timezone for now
    getPersonalProfileModel.timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    // Just use the browser version of the language for now
    getPersonalProfileModel.language = getUsersLanguage();

    handleSave(getPersonalProfileModel);
  };

  const handleSave = useCallback(
    (getPersonalProfileModel: GetPersonalProfileModelInput) => {
      return SetPersonalProfile(getPersonalProfileModel, handleSubmitCompleted);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [SetPersonalProfile]
  );

  // This is called once the SetPersonalProfile mutation has completed
  const handleSubmitCompleted = (response: useSetPersonalProfileMutation$data): void => {
    let queryString = `?$id=${response.setPersonalProfile?.updatedPersonalProfileId}`;

    scrollToTop();
    navigateToPage(Pages.Profiles, queryString);
  };

  /// Scroll the user to the top of the page
  const scrollToTop = () => {
    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div ref={topRef}>
        <GenericHeader title="Profile Builder" contextVal="Personal" />
        <Formik initialValues={model} onSubmit={onSubmit}>
          {({ errors, touched, isValidating, isSubmitting }) => (
            <Form className="space-y-8 divide-y divide-gray-200">
              <div className="mt-6 flex flex-col lg:flex-row">
                <div className="flex-grow space-y-6">
                  <div>
                    <label htmlFor="about" className="form-label">
                      About
                    </label>
                    <div className="mt-1">
                      <Field
                        id="about"
                        name="about"
                        as="textarea"
                        rows={4}
                        className="form-input"
                      />
                    </div>
                    <p className="form-input-description">
                      A brief description for your personal profile.
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex-grow lg:mt-0 lg:ml-6 lg:flex-shrink-0 lg:flex-grow-0">
                  <ProfilePhotoSelector
                    profilePictureUrl={model.personalProfilePictureUrl}
                    allowChange={false}
                  />
                </div>
              </div>

              <div className="space-y-8 divide-y divide-gray-200">
                <div className="pt-8">
                  <div className="sm:col-span-6">
                    <label htmlFor="email" className="form-label">
                      Email address
                    </label>
                    <div className="mt-1">
                      <label id="email" className="block text-sm text-gray-700 dark:text-gray-200">
                        {user?.email}
                      </label>
                    </div>
                  </div>

                  <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                      <label htmlFor="givenName" className="form-label">
                        First name *
                      </label>
                      <div className="mt-1">
                        <Field
                          type="text"
                          name="givenName"
                          id="givenName"
                          autoComplete="given-name"
                          validate={validateRequiredString}
                          className={errors.givenName ? 'form-input-error' : 'form-input'}
                        />
                        {errors.givenName && touched.givenName && (
                          <div className="form-input-validation">{errors.givenName}</div>
                        )}
                      </div>
                    </div>

                    <div className="sm:col-span-3">
                      <label htmlFor="familyName" className="form-label">
                        Last name *
                      </label>
                      <div className="mt-1">
                        <Field
                          type="text"
                          name="familyName"
                          id="familyName"
                          autoComplete="family-name"
                          validate={validateRequiredString}
                          className={errors.familyName ? 'form-input-error' : 'form-input'}
                        />
                        {errors.familyName && touched.familyName && (
                          <div className="form-input-validation">{errors.familyName}</div>
                        )}
                      </div>
                    </div>

                    <div className="sm:col-span-3">
                      <label htmlFor="linkedInProfile" className="form-label">
                        LinkedIn Profile
                      </label>
                      <div className="mt-1">
                        <Field
                          type="text"
                          name="linkedInProfile"
                          id="linkedInProfile"
                          autoComplete="family-name"
                          className="form-input"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-3">
                      <label htmlFor="phoneNumber" className="form-label">
                        Your phone number
                      </label>
                      <div className="mt-1">
                        <Field
                          type="text"
                          id="phoneNumber"
                          name="phoneNumber"
                          autoComplete="tel"
                          className="form-input"
                        />
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

export default PersonalProfileEdit;
