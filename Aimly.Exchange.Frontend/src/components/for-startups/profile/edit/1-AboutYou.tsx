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
import { Field, Form, Formik, FormikHelpers } from 'formik';

const AboutYou = () => {
  const { user, userId } = useContext(PrivateContext);
  const navigateToPage = useNavigateToPage();
  const topRef = useRef<HTMLDivElement>(null);
  const currentStep = 'AboutYou';
  const getAboutYouQueryVariables = { id: userId };

  // Lazy load this query because it is only relevant to this component
  const data = useLazyLoadQuery<GetAboutYouQuery.getAboutYouQuery>(
    GetAboutYouQuery.default,
    getAboutYouQueryVariables,
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

  const onSubmit = (
    values: GetAboutYouModelInput
    // { setSubmitting }: FormikHelpers<GetAboutYouModelInput>
  ) => {
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

  return (
    <StartupQuestionnaireManager currentStep={currentStep}>
      <Formik initialValues={model} onSubmit={onSubmit}>
        {({ isSubmitting }) => (
          <Form className="space-y-8 divide-y divide-gray-200">
            <div className="space-y-8 divide-y divide-gray-200">
              <div className="pt-8">
                <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 text-gray-700 sm:grid-cols-6">
                  <div className="sm:col-span-6">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                    >
                      Email address
                    </label>
                    <div className="mt-1">
                      <label id="email" className="block text-sm text-gray-700 dark:text-gray-200">
                        {user?.email}
                      </label>
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label
                      htmlFor="givenName"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                    >
                      First name
                    </label>
                    <div className="mt-1">
                      <Field
                        type="text"
                        name="givenName"
                        id="givenName"
                        autoComplete="given-name"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label
                      htmlFor="familyName"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                    >
                      Last name
                    </label>
                    <div className="mt-1">
                      <Field
                        type="text"
                        name="familyName"
                        id="familyName"
                        autoComplete="family-name"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label
                      htmlFor="linkedInProfile"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                    >
                      LinkedIn Profile
                    </label>
                    <div className="mt-1">
                      <Field
                        type="text"
                        name="linkedInProfile"
                        id="linkedInProfile"
                        autoComplete="family-name"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label
                      htmlFor="phoneNumber"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                    >
                      Phone number
                    </label>
                    <div className="mt-1">
                      <Field
                        type="text"
                        id="phoneNumber"
                        name="phoneNumber"
                        autoComplete="tel"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="companyName"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                    >
                      Company name
                    </label>
                    <div className="mt-1">
                      <Field
                        type="text"
                        name="companyName"
                        id="companyName"
                        autoComplete="organization"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label
                      htmlFor="website"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                    >
                      Company website
                    </label>
                    <div className="mt-1">
                      <Field
                        type="text"
                        name="website"
                        id="website"
                        autoComplete="url"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-1">
                    <label
                      htmlFor="numberOfFounders"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                    >
                      Number of founders
                    </label>
                    <div className="mt-1">
                      <Field
                        type="number"
                        min="1"
                        name="numberOfFounders"
                        id="numberOfFounders"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-6">
                    <label
                      htmlFor="streetName"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                    >
                      Street address
                    </label>
                    <div className="mt-1">
                      <Field
                        type="text"
                        name="streetName"
                        id="streetName"
                        autoComplete="street-address"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="addressCity"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                    >
                      City
                    </label>
                    <div className="mt-1">
                      <Field
                        type="text"
                        name="addressCity"
                        id="addressCity"
                        autoComplete="address-level2"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="addressCity"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                    >
                      State / Province
                    </label>
                    <div className="mt-1">
                      <Field
                        type="text"
                        name="addressCity"
                        id="addressCity"
                        autoComplete="address-level1"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="postalCode"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                    >
                      ZIP / Postal code
                    </label>
                    <div className="mt-1">
                      <Field
                        type="text"
                        name="postalCode"
                        id="postalCode"
                        autoComplete="postal-code"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label
                      htmlFor="addressCountry"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                    >
                      Country
                    </label>
                    <div className="mt-1">
                      <Field
                        type="text"
                        id="addressCountry"
                        name="addressCountry"
                        autoComplete="country-name"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"

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
                <button disabled={isSubmitting} type="button" className="form-done">
                  Done
                </button>
                <button disabled={isSubmitting} type="submit" className="form-next ml-3">
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
