import React from "react";
import Loading from '../../components/Loading';
import { withAuthenticationRequired } from '@auth0/auth0-react';
import StartupQuestionnaireSteps from "../../components/StartupQuestionnaireSteps";

const AboutYou = () => (
  <div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto py-6 sm:py-4 lg:py-8 lg:max-w-none">
        <h2 className="text-2xl font-extrabold text-gray-900 dark:text-gray-100">Get Started!</h2>
      </div>
      <div>
        <StartupQuestionnaireSteps currentStep="AboutYou"></StartupQuestionnaireSteps>
      </div>
    </div>
  </div>
);

export default withAuthenticationRequired(AboutYou, {
  onRedirecting: () => <Loading />,
});
