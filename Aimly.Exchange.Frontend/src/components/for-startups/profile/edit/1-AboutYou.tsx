import React, { useCallback, useContext, useRef } from 'react';
import Loading from 'components/Loading';
import { withAuthenticationRequired } from '@auth0/auth0-react';
import StartupQuestionnaireManager from 'components/for-startups/profile/edit/StartupQuestionnaireManager';
import { useLazyLoadQuery } from 'react-relay/hooks';
import useSetAboutYouMutation from 'useSetAboutYouMutation';
import { GetAboutYouModelInput } from '__generated__/useSetAboutYouMutation.graphql';
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
    getAboutYouQueryVariables
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

  const [setAboutYouMutation] = useSetAboutYouMutation();

  const handleSave = useCallback(
    (getAboutYouModel: GetAboutYouModelInput) => {
      setAboutYouMutation(getAboutYouModel);
    },
    [setAboutYouMutation, '']
  );

  const onSubmit = (
    values: GetAboutYouModelInput,
    { setSubmitting }: FormikHelpers<GetAboutYouModelInput>
  ) => {
    next(values);
    model = values; // Update the model for it the user goes backwards
    // *** TODO - set the company profile Id that comes back from the mutation and make available for the next steps
  };

  const next = (values: GetAboutYouModelInput) => {
    console.log(values);
    handleSave(values);
    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: 'smooth' });
    }
    navigateToPage(Pages.TheProblem);
  };

  return (
    <StartupQuestionnaireManager currentStep={currentStep}>
      <Formik initialValues={model} onSubmit={onSubmit}>
        <Form className="space-y-8 divide-y divide-gray-200">
          <div className="space-y-8 divide-y divide-gray-200">
            <div className="pt-8">
              <div className="text-gray-700 mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
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
                      className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
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
                      className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
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
                      className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
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
                      className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
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
                      className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
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
                      className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
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
                      className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
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
                      className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
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
                      className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
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
                      className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
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
                      className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"

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
                type="button"
                className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Done
              </button>
              <button
                type="submit"
                className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Next
              </button>
            </div>
          </div>
        </Form>
      </Formik>
    </StartupQuestionnaireManager>
  );
};

export default withAuthenticationRequired(AboutYou, {
  onRedirecting: () => <Loading />,
});
