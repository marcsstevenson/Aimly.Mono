import React, { useCallback, useContext, useRef } from 'react';
import useLocationQuery from 'components/shared/useLocationQuery';
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
import { Field, Form, Formik } from 'formik';

const TheProblem = () => {
  const { userId } = useContext(PrivateContext);
  const navigateToPage = useNavigateToPage();
  const topRef = useRef<HTMLDivElement>(null);
  let locationQuery = useLocationQuery();

  const currentStep = 'TheProblem';
  const getTheProblemQueryVariables = {
    id: userId ?? '',
    companyProfileId: locationQuery.get('companyProfileId'),
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

  const onSubmit = (values: GetTheProblemModelInput) => {
    next(values);
    model = values; // Update the model for it the user goes backwards
    // *** TODO - set the company profile Id that comes back from the mutation and make available for the next steps
  };

  const next = (values: GetTheProblemModelInput) => {
    handleSave(values);
    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: 'smooth' });
    }
    navigateToPage(Pages.TheSolution, '?companyProfileId=' + values.companyProfileId);
  };

  return (
    <StartupQuestionnaireManager currentStep={currentStep}>
      <Formik initialValues={model} onSubmit={onSubmit}>
        <Form className="space-y-8 divide-y divide-gray-200">
          <div className="space-y-8 divide-y divide-gray-200">
            <div className="pt-8">
              <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 text-gray-700 sm:grid-cols-6">
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
                      className="focus:border-primary-500 focus:ring-primary-500 block w-full rounded-md border border-gray-300 shadow-sm sm:text-sm"
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
                      className="focus:border-primary-500 focus:ring-primary-500 block w-full rounded-md border border-gray-300 shadow-sm sm:text-sm"
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
                className="focus:ring-primary-500 rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 dark:text-gray-200"
              >
                Done
              </button>
              <button
                type="submit"
                className="bg-primary-600 hover:bg-primary-700 focus:ring-primary-500 ml-3 inline-flex justify-center rounded-md border border-transparent py-2 px-4 text-sm font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2"
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
