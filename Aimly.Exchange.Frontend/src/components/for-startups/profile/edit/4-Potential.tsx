import React, { useCallback, useContext } from 'react';
import Pages from 'components/shared/Pages';
import useLocationQuery from 'components/shared/useLocationQuery';
import Loading from 'components/Loading';
import { withAuthenticationRequired } from '@auth0/auth0-react';
import StartupQuestionnaireManager from 'components/for-startups/profile/edit/StartupQuestionnaireManager';
import { useLazyLoadQuery } from 'react-relay/hooks';
import useSetPotentialMutation from 'useSetPotentialMutation';
import {
  GetPotentialModelInput,
  useSetPotentialMutation$data,
} from '__generated__/useSetPotentialMutation.graphql';
import * as GetPotentialQuery from '__generated__/getPotentialQuery.graphql';
import useNavigateToPage from 'components/shared/useNavigateToPage';
import { PrivateContext } from 'components/PrivateContext';
import { Field, Form, Formik } from 'formik';
import { useSearchParams } from 'react-router-dom';

const Potential = () => {
  const { userId } = useContext(PrivateContext);
  const navigateToPage = useNavigateToPage();
  let locationQuery = useLocationQuery();
  const [searchParams] = useSearchParams();

  const currentStep = 'Potential';
  const getPotentialQueryVariables = {
    id: userId,
    companyProfileId: locationQuery.get('companyProfileId'),
  };

  // Lazy load this query because it is only relevant to this component
  const data = useLazyLoadQuery<GetPotentialQuery.getPotentialQuery>(
    GetPotentialQuery.default,
    getPotentialQueryVariables,
    // Ideally we could use commitLocalUpdate to update the relay cache when setAboutYouMutation is called
    // However, for now, we'll simply always refresh this query when the component is mounted
    {
      fetchPolicy: 'network-only',
    }
  );

  const loadedData = data.getPotential;

  let model: GetPotentialModelInput = {
    userId: userId,
    companyProfileId: loadedData?.companyProfileId,
    value: loadedData?.value ?? '',
    potentialSize: loadedData?.potentialSize ?? '',
    potentialValue: loadedData?.potentialValue ?? '',
  };

  const SetPotential = useSetPotentialMutation();

  const onSubmit = (getAboutYouModel: GetPotentialModelInput) => {
    handleSave(getAboutYouModel);
  };

  const handleSave = useCallback(
    (getPotentialModel: GetPotentialModelInput) => {
      return SetPotential(getPotentialModel, handleSubmitCompleted);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [SetPotential]
  );

  // This is called once the SetPotential mutation has completed
  const handleSubmitCompleted = (response: useSetPotentialMutation$data): void => {
    let queryString = '';

    if (searchParams) {
      queryString += `?${searchParams}`;
    }

    navigateToPage(Pages.MyProfiles, queryString);
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
                    <label htmlFor="value" className="form-label">
                      Value
                    </label>
                    <p className="form-input-description">
                      How would you value your movement today?
                    </p>
                    <div className="mt-1">
                      <Field
                        id="value"
                        name="value"
                        as="textarea"
                        rows={4}
                        className="form-input"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-6">
                    <label htmlFor="potentialSize" className="form-label">
                      Potential Size
                    </label>
                    <p className="form-input-description">How big could your movement be?</p>
                    <div className="mt-1">
                      <Field
                        id="potentialSize"
                        name="potentialSize"
                        as="textarea"
                        rows={4}
                        className="form-input"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-6">
                    <label htmlFor="potentialValue" className="form-label">
                      Potential value
                    </label>
                    <p className="form-input-description">
                      Have you thought about what your movement would be valued in the future? If
                      so, what?
                    </p>
                    <div className="mt-1">
                      <Field
                        id="potentialValue"
                        name="potentialValue"
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
                  type="submit"
                  className="form-next ml-3"
                >
                  Complete
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </StartupQuestionnaireManager>
  );
};

export default withAuthenticationRequired(Potential, {
  onRedirecting: () => <Loading />,
});
