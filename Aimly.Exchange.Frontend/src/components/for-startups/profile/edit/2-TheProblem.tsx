import React, { useCallback, useContext, useRef } from 'react';
import Loading from 'components/Loading';
import { withAuthenticationRequired } from '@auth0/auth0-react';
import StartupQuestionnaireManager from 'components/for-startups/profile/edit/StartupQuestionnaireManager';
import { useLazyLoadQuery } from 'react-relay/hooks';
import useSetTheProblemMutation from 'useSetTheProblemMutation';
import { GetTheProblemModelInput } from '__generated__/useSetTheProblemMutation.graphql';
import * as GetTheProblemQuery from '__generated__/getTheProblemQuery.graphql';
import { Pages } from 'components/shared/AppRoutes';
import useNavigateToPage from 'components/shared/useNavigateToPage';
import { PrivateContext } from 'components/private/PrivateContext';
import { Field, Form, Formik, FormikHelpers } from 'formik';

const TheProblem = () => {
  const { userId } = useContext(PrivateContext);
  const navigateToPage = useNavigateToPage();
  const topRef = useRef<HTMLDivElement>(null);
  const currentStep = 'TheProblem';
  const getTheProblemQueryVariables = {
    id: userId ?? '',
    companyProfileId: '21F299A9-DB01-45A2-13F3-08D9E422A60E',
  };

  // Lazy load this query because it is only relevant to this component
  const data = useLazyLoadQuery<GetTheProblemQuery.getTheProblemQuery>(
    GetTheProblemQuery.default,
    getTheProblemQueryVariables
  );

  console.log(data);

  const loadedData = data.getTheProblem;

  let model: GetTheProblemModelInput = {
    userId: userId,
    companyProfileId: loadedData?.companyProfileId,
    purposeDetails: loadedData?.purposeDetails ?? '',
    problemDetails: loadedData?.problemDetails ?? '',
  };

  const [setTheProblemMutation] = useSetTheProblemMutation();

  const handleSave = useCallback(
    (getTheProblemModel: GetTheProblemModelInput) => {
      setTheProblemMutation(getTheProblemModel);
    },
    [setTheProblemMutation, '']
  );

  const onSubmit = (
    values: GetTheProblemModelInput,
    { setSubmitting }: FormikHelpers<GetTheProblemModelInput>
  ) => {
    next(values);
    model = values; // Update the model for it the user goes backwards
    // *** TODO - set the company profile Id that comes back from the mutation and make available for the next steps
  };

  const next = (values: GetTheProblemModelInput) => {
    handleSave(values);
    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: 'smooth' });
    }
    navigateToPage(Pages.TheSolution);
  };

  return (
    <StartupQuestionnaireManager currentStep={currentStep}>
      <Formik initialValues={model} onSubmit={onSubmit}>
        <Form className="space-y-8 divide-y divide-gray-200">
          <div className="space-y-8 divide-y divide-gray-200">
            <div className="pt-8">
              <div className="text-gray-700 mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                <div className="sm:col-span-6">
                  <label
                    htmlFor="purposeDetails"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                  >
                    Your Why
                  </label>
                  <p className="mt-2 text-sm text-gray-500 dark:text-gray-300">
                    Why are you doing this?
                  </p>
                  <div className="mt-1">
                    <Field
                      id="purposeDetails"
                      name="purposeDetails"
                      as="textarea"
                      rows={8}
                      className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                <div className="sm:col-span-6">
                  <label
                    htmlFor="problemDetails"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                  >
                    The Problem
                  </label>
                  <p className="mt-2 text-sm text-gray-500 dark:text-gray-300">
                    What is the problem that you aim to solve?
                  </p>
                  <div className="mt-1">
                    <Field
                      id="problemDetails"
                      name="problemDetails"
                      as="textarea"
                      rows={8}
                      className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-md"

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

export default withAuthenticationRequired(TheProblem, {
  onRedirecting: () => <Loading />,
});
