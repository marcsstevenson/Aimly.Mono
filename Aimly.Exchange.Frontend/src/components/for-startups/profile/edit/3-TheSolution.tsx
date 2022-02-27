import React, { useCallback, useContext, useRef } from 'react';
import Pages from 'components/shared/Pages';
import useLocationQuery from 'components/shared/useLocationQuery';
import Loading from 'components/Loading';
import { withAuthenticationRequired } from '@auth0/auth0-react';
import StartupQuestionnaireManager from 'components/for-startups/profile/edit/StartupQuestionnaireManager';
import { useLazyLoadQuery } from 'react-relay/hooks';
import useSetTheSolutionMutation from 'useSetTheSolutionMutation';
import {
  GetTheSolutionModelInput,
  useSetTheSolutionMutation$data,
} from '__generated__/useSetTheSolutionMutation.graphql';
import * as GetTheSolutionQuery from '__generated__/getTheSolutionQuery.graphql';
import useNavigateToPage from 'components/shared/useNavigateToPage';
import { PrivateContext } from 'components/private/PrivateContext';
import { Field, Form, Formik } from 'formik';
import { useSearchParams } from 'react-router-dom';

const TheSolution = () => {
  const { userId } = useContext(PrivateContext);
  const navigateToPage = useNavigateToPage();
  const topRef = useRef<HTMLDivElement>(null);
  let locationQuery = useLocationQuery();
  const [searchParams] = useSearchParams();

  const currentStep = 'TheSolution';
  const getTheSolutionQueryVariables = {
    id: userId,
    companyProfileId: locationQuery.get('companyProfileId'),
  };

  // Lazy load this query because it is only relevant to this component
  const data = useLazyLoadQuery<GetTheSolutionQuery.getTheSolutionQuery>(
    GetTheSolutionQuery.default,
    getTheSolutionQueryVariables,
    // Ideally we could use commitLocalUpdate to update the relay cache when setAboutYouMutation is called
    // However, for now, we'll simply always refresh this query when the component is mounted
    {
      fetchPolicy: 'network-only',
    }
  );

  const loadedData = data.getTheSolution;

  let model: GetTheSolutionModelInput = {
    userId: userId,
    companyProfileId: loadedData?.companyProfileId,
    solutionNovelty: loadedData?.solutionNovelty ?? '',
    solutionDescription: loadedData?.solutionDescription ?? '',
    stateOfValidation: loadedData?.stateOfValidation ?? '',
    competition: loadedData?.competition ?? '',
    positionVsCompetition: loadedData?.positionVsCompetition ?? '',
    businessModel: loadedData?.businessModel ?? '',
    traction: loadedData?.traction ?? '',
    founders: loadedData?.founders ?? '',
    currentAnnualRevenue: loadedData?.currentAnnualRevenue ?? '',
    externalFunding: loadedData?.externalFunding ?? '',
  };

  const SetTheSolution = useSetTheSolutionMutation();

  const onSubmit = (getAboutYouModel: GetTheSolutionModelInput) => {
    handleSave(getAboutYouModel);
  };

  const handleSave = useCallback(
    (getTheSolutionModel: GetTheSolutionModelInput) => {
      return SetTheSolution(getTheSolutionModel, handleSubmitCompleted);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [SetTheSolution]
  );

  // This is called once the SetTheSolution mutation has completed
  const handleSubmitCompleted = (response: useSetTheSolutionMutation$data): void => {
    let queryString = '';

    if (searchParams) {
      queryString += `?${searchParams}`;
    }

    scrollToTop();
    navigateToPage(Pages.Potential, queryString);
  };

  /// Scroll the user to the top of the page
  const scrollToTop = () => {
    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const onFinishHere = () => {
    scrollToTop();
    navigateToPage(Pages.Profiles);
  };

  return (
    <StartupQuestionnaireManager currentStep={currentStep}>
      <Formik initialValues={model} onSubmit={onSubmit}>
        {({ isValidating, isSubmitting }) => (
          <Form className="space-y-8 divide-y divide-gray-200">
            <div className="space-y-8 divide-y divide-gray-200">
              <div className="pt-8">
                <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 text-gray-700 sm:grid-cols-6">
                  <div className="sm:col-span-6">
                    <label htmlFor="solutionNovelty" className="form-label">
                      Solution novelty
                    </label>
                    <p className="form-input-description">
                      Why is your solution the best solution and what makes it unique?
                    </p>
                    <div className="mt-1">
                      <Field
                        id="solutionNovelty"
                        name="solutionNovelty"
                        as="textarea"
                        rows={4}
                        className="form-input"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-6">
                    <label htmlFor="solutionDescription" className="form-label">
                      Solution description
                    </label>
                    <p className="form-input-description">Describe your solution</p>
                    <div className="mt-1">
                      <Field
                        id="solutionDescription"
                        name="solutionDescription"
                        as="textarea"
                        rows={4}
                        className="form-input"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-6">
                    <label htmlFor="stateOfValidation" className="form-label">
                      State of validation
                    </label>
                    <p className="form-input-description">Idea, MVP, generating revenue etc</p>
                    <div className="mt-1">
                      <Field
                        id="stateOfValidation"
                        name="stateOfValidation"
                        as="textarea"
                        rows={4}
                        className="form-input"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-6">
                    <label htmlFor="competition" className="form-label">
                      Competition
                    </label>
                    <p className="form-input-description">
                      What competitors are trying to solve a similar problem? (Name, location, URL)
                    </p>
                    <div className="mt-1">
                      <Field
                        id="competition"
                        name="competition"
                        as="textarea"
                        rows={4}
                        className="form-input"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-6">
                    <label htmlFor="positionVsCompetition" className="form-label">
                      Position vs Competition
                    </label>
                    <p className="form-input-description">
                      Why are you better positioned to succeed?
                    </p>
                    <div className="mt-1">
                      <Field
                        id="positionVsCompetition"
                        name="positionVsCompetition"
                        as="textarea"
                        rows={4}
                        className="form-input"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-6">
                    <label htmlFor="businessModel" className="form-label">
                      Business model
                    </label>
                    <p className="form-input-description">Tell us about your business model</p>
                    <div className="mt-1">
                      <Field
                        id="businessModel"
                        name="businessModel"
                        as="textarea"
                        rows={4}
                        className="form-input"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-6">
                    <label htmlFor="traction" className="form-label">
                      Traction
                    </label>
                    <p className="form-input-description">
                      Tell us about your plans to attract clients or consumers of your movement
                    </p>
                    <div className="mt-1">
                      <Field
                        id="traction"
                        name="traction"
                        as="textarea"
                        rows={4}
                        className="form-input"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-6">
                    <label htmlFor="founders" className="form-label">
                      Founders
                    </label>
                    <p className="form-input-description">
                      Tell us more about the founding members of your team?
                    </p>
                    <div className="mt-1">
                      <Field
                        id="founders"
                        name="founders"
                        as="textarea"
                        rows={4}
                        className="form-input"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-6">
                    <label htmlFor="currentAnnualRevenue" className="form-label">
                      Current annual revenue
                    </label>
                    <p className="form-input-description">
                      Please indicate your current revenue status
                    </p>
                    <div className="mt-1">
                      <Field
                        id="currentAnnualRevenue"
                        name="currentAnnualRevenue"
                        as="select"
                        className="form-input"
                      >
                        <option value="Pre-Revenue">Pre-Revenue</option>
                        <option value="Less than $500K/annum">Less than $500K/annum</option>
                        <option value="Less than $2 Million/annum">
                          Less than $2 Million/annum
                        </option>
                        <option value="Greater than $2 million/annum">
                          Greater than $2 million/annum
                        </option>
                      </Field>
                    </div>
                  </div>
                  <div className="sm:col-span-6">
                    <label htmlFor="externalFunding" className="form-label">
                      External Funding
                    </label>
                    <p className="form-input-description">
                      Have you received external funding from government grants, incubation labs,
                      angel investors, ect.?
                    </p>
                    <div className="mt-1">
                      <Field
                        id="externalFunding"
                        name="externalFunding"
                        as="textarea"
                        rows={4}
                        className="form-input"
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
                  type="button"
                  className="form-done"
                  onClick={() => onFinishHere()}
                >
                  Finish here
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

export default withAuthenticationRequired(TheSolution, {
  onRedirecting: () => <Loading />,
});
