import React, { useCallback, useContext, useRef } from 'react';
import useLocationQuery from 'components/shared/useLocationQuery';
import Loading from 'components/Loading';
import { withAuthenticationRequired } from '@auth0/auth0-react';
import StartupQuestionnaireManager from 'components/for-startups/profile/edit/StartupQuestionnaireManager';
import { useLazyLoadQuery } from 'react-relay/hooks';
import useSetTheProblemMutation from 'useSetTheProblemMutation';
import {
  GetTheProblemModelInput,
  useSetTheProblemMutation$data,
} from '__generated__/useSetTheProblemMutation.graphql';
import * as GetTheProblemQuery from '__generated__/getTheProblemQuery.graphql';
import { Pages } from 'components/shared/AppRoutes';
import useNavigateToPage from 'components/shared/useNavigateToPage';
import { PrivateContext } from 'components/private/PrivateContext';
import { Field, Form, Formik } from 'formik';
import validateRequiredString from 'validators/validateRequiredString';

const TheProblem = () => {
  const { userId } = useContext(PrivateContext);
  const navigateToPage = useNavigateToPage();
  const topRef = useRef<HTMLDivElement>(null);
  let locationQuery = useLocationQuery();

  const currentStep = 'TheProblem';
  const getTheProblemQueryVariables = {
    id: userId,
    companyProfileId: locationQuery.get('companyProfileId'),
  };

  // Lazy load this query because it is only relevant to this component
  const data = useLazyLoadQuery<GetTheProblemQuery.getTheProblemQuery>(
    GetTheProblemQuery.default,
    getTheProblemQueryVariables,
    // Ideally we could use commitLocalUpdate to update the relay cache when setAboutYouMutation is called
    // However, for now, we'll simply always refresh this query when the component is mounted
    {
      fetchPolicy: 'network-only',
    }
  );

  const loadedData = data.getTheProblem;

  let model: GetTheProblemModelInput = {
    userId: userId,
    companyProfileId: loadedData?.companyProfileId,
    purposeDetails: loadedData?.purposeDetails ?? '',
    problemDetails: loadedData?.problemDetails ?? '',
  };

  const SetTheProblem = useSetTheProblemMutation();

  const onSubmit = (getAboutYouModel: GetTheProblemModelInput) => {
    handleSave(getAboutYouModel);
  };

  const handleSave = useCallback(
    (getTheProblemModel: GetTheProblemModelInput) => {
      return SetTheProblem(getTheProblemModel, handleSubmitCompleted);
    },
    [SetTheProblem, '']
  );

  // This is called once the SetTheProblem mutation has completed
  const handleSubmitCompleted = (response: useSetTheProblemMutation$data): void => {
    const companyProfileId = response.setTheProblem?.updatedCompanyProfileId;

    if (!companyProfileId) {
      console.log('Cannot navigate forward without a company profile Id');
    }

    scrollToTop();
    navigateToPage(Pages.TheSolution, '?companyProfileId=' + companyProfileId);
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
            <div className="space-y-8 divide-y divide-gray-200">
              <div className="pt-8">
                <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 text-gray-700 sm:grid-cols-6">
                  <div className="sm:col-span-6">
                    <label htmlFor="purposeDetails" className="form-label">
                      Your Why *
                    </label>
                    <p className="form-input-description">Why are you doing this?</p>
                    <div className="mt-1">
                      <Field
                        id="purposeDetails"
                        name="purposeDetails"
                        as="textarea"
                        rows={8}
                        validate={validateRequiredString}
                        className={errors.purposeDetails ? 'form-input-error' : 'form-input'}
                      />
                      {errors.purposeDetails && touched.purposeDetails && (
                        <div className="form-input-validation">{errors.purposeDetails}</div>
                      )}
                    </div>
                  </div>
                  <div className="sm:col-span-6">
                    <label htmlFor="problemDetails" className="form-label">
                      The Problem *
                    </label>
                    <p className="form-input-description">
                      What is the problem that you aim to solve?
                    </p>
                    <div className="mt-1">
                      <Field
                        id="problemDetails"
                        name="problemDetails"
                        as="textarea"
                        rows={8}
                        validate={validateRequiredString}
                        className={errors.problemDetails ? 'form-input-error' : 'form-input'}
                      />
                      {errors.problemDetails && touched.problemDetails && (
                        <div className="form-input-validation">{errors.problemDetails}</div>
                      )}
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

export default withAuthenticationRequired(TheProblem, {
  onRedirecting: () => <Loading />,
});
