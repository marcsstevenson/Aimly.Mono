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

const AboutYou = () => {
  const { user, userId } = useContext(PrivateContext);
  const navigateToPage = useNavigateToPage();
  const topRef = useRef<HTMLDivElement>(null);
  let locationQuery = useLocationQuery();
  const currentStep = 'AboutYou';
  const getAboutYouQueryVariables = {
    id: userId,
    companyProfileId: locationQuery.get('companyProfileId'),
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
    givenName: loadedData?.givenName ?? '',
    familyName: loadedData?.familyName ?? '',
    phoneNumber: loadedData?.phoneNumber ?? '',
    linkedInProfile: loadedData?.linkedInProfile ?? '',
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

  // const [setAboutYouMutation] = useSetAboutYouMutation();
  const { SetAboutYou } = useSetAboutYouMutation();

  const handleSave = useCallback(
    (getAboutYouModel: GetAboutYouModelInput) => {
      return SetAboutYou(getAboutYouModel, handleSaveCompleted);
    },
    [SetAboutYou, '']
  );

  const handleSaveCompleted = (response: useSetAboutYouMutation$data): void => {
    goNext(response.setAboutYou?.updatedCompanyProfileId);
  };

  const onSubmit = (values: GetAboutYouModelInput) => {
    handleSave(values);
  };

  const goNext = (companyProfileId: string) => {
    if (!companyProfileId) {
      console.log('Cannot navigate forward without a company profile Id');
    }

    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: 'smooth' });
    }
    navigateToPage(Pages.TheProblem, '?companyProfileId=' + companyProfileId);
  };

  const validateRequiredString = (value: string): string | undefined => {
    let error: string | undefined;
    if (!value) {
      error = 'Required';
    }
    return error;
  };

  return (
    <StartupQuestionnaireManager currentStep={currentStep}>
      <Formik initialValues={model} onSubmit={onSubmit}>
        {({ errors, touched, isValidating, isSubmitting }) => (
          <Form className="space-y-8 divide-y divide-gray-200">
            <div className="space-y-8 divide-y divide-gray-200">
              <div className="pt-8">
                <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 text-gray-700 sm:grid-cols-6">
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
                      Phone number
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
                      Street address
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
                      City
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
                <button disabled={isSubmitting || isValidating} type="button" className="form-done">
                  Done
                </button>
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
