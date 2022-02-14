import React, { useCallback, useContext, useRef } from 'react';
import Loading from 'components/Loading';
import { withAuthenticationRequired } from '@auth0/auth0-react';
import StartupQuestionnaireManager from 'components/for-startups/profile/edit/StartupQuestionnaireManager';
import { useLazyLoadQuery } from 'react-relay/hooks';
import useSetAboutYouMutation from 'useSetAboutYouMutation';
import {
  GetAboutYouModelInput,
  useSetAboutYouMutation$data,
} from '__generated__/useSetAboutYouMutation.graphql';
import * as GetAboutYouQuery from '__generated__/getAboutYouQuery.graphql';
import { Pages } from 'components/shared/AppRoutes';
import useNavigateToPage from 'components/shared/useNavigateToPage';
import { PrivateContext } from 'components/private/PrivateContext';
import { Field, Form, Formik } from 'formik';
import useLocationQuery from 'components/shared/useLocationQuery';
import validateRequiredString from 'validators/validateRequiredString';
import { companyProfileId, context } from 'components/for-startups/UrlConstants';
// import TimezoneSelect from 'react-timezone-select';
import ProfilePhotoSelector from 'components/shared/ProfilePhotoSelector';
import { getLinkedInProfileFromAuthHelper } from 'components/shared/LinkedInProfileAuthHelper';
import { getUsersLanguage } from 'components/shared/UsersLanguageHelper';

const AboutYou = () => {
  const { user, userId } = useContext(PrivateContext);
  const navigateToPage = useNavigateToPage();
  const topRef = useRef<HTMLDivElement>(null);
  let locationQuery = useLocationQuery();
  const currentStep = 'AboutYou';
  const getAboutYouQueryVariables = {
    id: userId,
    companyProfileId: locationQuery.get(companyProfileId),
  };

  // Lazy load this query because it is only relevant to this component
  const data = useLazyLoadQuery<GetAboutYouQuery.getAboutYouQuery>(
    GetAboutYouQuery.default,
    getAboutYouQueryVariables,
    // Ideally we could use commitLocalUpdate to update the relay cache when setAboutYouMutation is called
    // However, for now, we'll simply always refresh this query when the component is mounted
    {
      fetchPolicy: 'network-only',
    }
  );

  const loadedData = data.getAboutYou;

  let model: GetAboutYouModelInput = {
    ...data.getAboutYou,
    userId: userId,
    about: loadedData?.about ?? '',
    personalProfilePictureUrl: loadedData?.personalProfilePictureUrl ?? user?.picture ?? '', // Note we are using the Auth profile values as the first fallback
    language: loadedData?.language ?? getUsersLanguage(),
    timezone: loadedData?.timezone ?? '',
    givenName: loadedData?.givenName ?? user?.given_name ?? '', // Note we are using the Auth profile values as the first fallback
    familyName: loadedData?.familyName ?? user?.family_name ?? '', // Note we are using the Auth profile values as the first fallback
    phoneNumber: loadedData?.phoneNumber ?? '',
    linkedInProfile: loadedData?.linkedInProfile ?? getLinkedInProfileFromAuthHelper(user) ?? '',
    companyProfileId: loadedData?.companyProfileId ?? '',
    companyName: loadedData?.companyName ?? '',
    website: loadedData?.website ?? '',
    numberOfFounders: loadedData?.numberOfFounders ?? 1,
    floor: loadedData?.floor ?? '',
    streetNumber: loadedData?.streetNumber ?? '',
    streetName: loadedData?.streetName ?? '',
    addressLocality: loadedData?.addressLocality ?? '',
    addressCity: loadedData?.addressCity ?? '',
    addressRegion: loadedData?.addressRegion ?? '',
    addressCountry: loadedData?.addressCountry ?? '',
    postalCode: loadedData?.postalCode ?? '',
    postOfficeBoxNumber: loadedData?.postOfficeBoxNumber ?? '',
  };

  const SetAboutYou = useSetAboutYouMutation();

  const onSubmit = (getAboutYouModel: GetAboutYouModelInput) => {
    // Just relay the personal profile picture url to the backend for now (until we allow this to be updated)
    getAboutYouModel.personalProfilePictureUrl = model.personalProfilePictureUrl;

    // Just use the browser version of the timezone for now
    getAboutYouModel.timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    // Just use the browser version of the language for now
    getAboutYouModel.language = getUsersLanguage();

    handleSave(getAboutYouModel);
  };

  const handleSave = useCallback(
    (getAboutYouModel: GetAboutYouModelInput) => {
      return SetAboutYou(getAboutYouModel, handleSubmitCompleted);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [SetAboutYou]
  );

  // This is called once the SetAboutYou mutation has completed
  const handleSubmitCompleted = (
    response: useSetAboutYouMutation$data,
    companyName: string | null | undefined
  ): void => {
    const companyProfileIdVal = response.setAboutYou?.updatedCompanyProfileId;

    if (!companyProfileIdVal) {
      console.log('Cannot navigate forward without a company profile Id');
    }

    let queryString = `?${companyProfileId}=${companyProfileIdVal}`;

    // Add a context so that our title component knows what to display
    // and the user can see at a glance what profile they are editing
    if (companyName) {
      queryString += `&${context}=${companyName}`;
    }

    scrollToTop();
    navigateToPage(Pages.TheProblem, queryString);
  };

  /// Scroll the user to the top of the page
  const scrollToTop = () => {
    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <StartupQuestionnaireManager currentStep={currentStep}>
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
                    <Field id="about" name="about" as="textarea" rows={4} className="form-input" />
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
                  <div className="sm:col-span-2">
                    <label htmlFor="companyName" className="form-label">
                      Company name *
                    </label>
                    <div className="mt-1">
                      <Field
                        type="text"
                        name="companyName"
                        id="companyName"
                        autoComplete="organization"
                        validate={validateRequiredString}
                        className={errors.companyName ? 'form-input-error' : 'form-input'}
                      />
                      {errors.companyName && touched.companyName && (
                        <div className="form-input-validation">{errors.companyName}</div>
                      )}
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label htmlFor="website" className="form-label">
                      Company website
                    </label>
                    <div className="mt-1">
                      <Field
                        type="text"
                        name="website"
                        id="website"
                        autoComplete="url"
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-1">
                    <label htmlFor="numberOfFounders" className="form-label">
                      Number of founders
                    </label>
                    <div className="mt-1">
                      <Field
                        type="number"
                        min="1"
                        name="numberOfFounders"
                        id="numberOfFounders"
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-6">
                    <label htmlFor="streetName" className="form-label">
                      Company Street address
                    </label>
                    <div className="mt-1">
                      <Field
                        type="text"
                        name="streetName"
                        id="streetName"
                        autoComplete="street-address"
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="addressCity" className="form-label">
                      Company City
                    </label>
                    <div className="mt-1">
                      <Field
                        type="text"
                        name="addressCity"
                        id="addressCity"
                        autoComplete="address-level2"
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="addressCity" className="form-label">
                      State / Province
                    </label>
                    <div className="mt-1">
                      <Field
                        type="text"
                        name="addressCity"
                        id="addressCity"
                        autoComplete="address-level1"
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="postalCode" className="form-label">
                      ZIP / Postal code
                    </label>
                    <div className="mt-1">
                      <Field
                        type="text"
                        name="postalCode"
                        id="postalCode"
                        autoComplete="postal-code"
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label htmlFor="addressCountry" className="form-label">
                      Country
                    </label>
                    <div className="mt-1">
                      <Field
                        type="text"
                        id="addressCountry"
                        name="addressCountry"
                        autoComplete="country-name"
                        className="form-input"

                        // <option>United States</option>
                        // <option>Canada</option>
                        // <option>Mexico</option>
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
                  Next
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </StartupQuestionnaireManager>
  );
};

export default withAuthenticationRequired(AboutYou, {
  onRedirecting: () => <Loading />,
});
