import React, { useCallback, useContext } from 'react';
import Pages from 'components/shared/Pages';
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
import useNavigateToPage from 'components/shared/useNavigateToPage';
import { PrivateContext } from 'components/PrivateContext';
import { Field, Form, Formik } from 'formik';
import validateRequiredHtml from 'validators/validateRequiredHtml';
import { useSearchParams } from 'react-router-dom';
import { ContentEditWrapper } from 'components/author/ContentEditWrapper';
import ContentEdit from 'components/author/ContentEdit';
import useDefaultEditor from 'components/author/useDefaultEditor';

const TheProblem = () => {
  const { userId } = useContext(PrivateContext);
  const navigateToPage = useNavigateToPage();
  let locationQuery = useLocationQuery();
  const [searchParams] = useSearchParams();

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

  const purposeDetailsEditor = useDefaultEditor(model.purposeDetails);
  const problemDetailsEditor = useDefaultEditor(model.problemDetails);

  const SetTheProblem = useSetTheProblemMutation();

  const onSubmit = (getAboutYouModel: GetTheProblemModelInput) => {
    getAboutYouModel.purposeDetails = purposeDetailsEditor?.getHTML() ?? '';
    getAboutYouModel.problemDetails = problemDetailsEditor?.getHTML() ?? '';

    handleSave(getAboutYouModel);
  };

  const handleSave = useCallback(
    (getTheProblemModel: GetTheProblemModelInput) => {
      return SetTheProblem(getTheProblemModel, handleSubmitCompleted);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [SetTheProblem]
  );

  // This is called once the SetTheProblem mutation has completed
  const handleSubmitCompleted = (response: useSetTheProblemMutation$data): void => {
    let queryString = '';

    if (searchParams) {
      queryString += `?${searchParams}`;
    }

    navigateToPage(Pages.TheSolution, queryString);
  };

  return (
    <StartupQuestionnaireManager currentStep={currentStep}>
      <Formik initialValues={model} onSubmit={onSubmit}>
        {({ errors, touched, isValidating, isSubmitting, isValid }) => (
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
                      <ContentEdit inputEditor={purposeDetailsEditor} />
                      {/* <Field
                        component={ContentEditWrapper}
                        id="purposeDetails"
                        name="purposeDetails"
                        required={true}
                        validate={validateRequiredHtml}
                      /> */}
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
                      <ContentEdit inputEditor={problemDetailsEditor} />
                      {/* <Field
                        component={ContentEditWrapper}
                        id="problemDetails"
                        name="problemDetails"
                        required={true}
                        validate={validateRequiredHtml}
                      /> */}
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
                  disabled={isSubmitting || isValidating || !isValid}
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
