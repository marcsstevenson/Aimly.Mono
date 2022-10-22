// The purpose of this component is to get the matching data for a GetCompanyProfileModelInput
// and allow the user to edit it.
// This is so existing company profiles can be edited.

import React, { useContext, useMemo } from 'react';
import { useLazyLoadQuery } from 'react-relay/hooks';
import { GetCompanyProfileModelInput } from '__generated__/useSetCompanyProfileMutation.graphql';
import * as GetCompanyProfileQuery from '__generated__/getCompanyProfileQuery.graphql';
import { PrivateContext } from 'components/PrivateContext';
import useLocationQuery from 'components/shared/useLocationQuery';
import CompanyProfileForm from 'components/profiles/company/CompanyProfileForm';
import { PopulateInputModel } from 'components/profiles/company/CompanyProfileHelpers';

const CompanyProfileEdit = () => {
  const { userId } = useContext(PrivateContext);
  let locationQuery = useLocationQuery();
  const companyProfileId = useMemo(() => {
    return locationQuery.get('id');
  }, [locationQuery]);

  const getCompanyProfileQueryVariables = {
    userId: userId,
    companyProfileId: companyProfileId,
  };

  // Lazy load this query because it is only relevant to this component
  const data = useLazyLoadQuery<GetCompanyProfileQuery.getCompanyProfileQuery>(
    GetCompanyProfileQuery.default,
    getCompanyProfileQueryVariables,
    // Ideally we could use commitLocalUpdate to update the relay cache when setCompanyProfileMutation is called
    // However, for now, we'll simply always refresh this query when the component is mounted
    {
      fetchPolicy: 'network-only',
    }
  );

  let model: GetCompanyProfileModelInput = PopulateInputModel(companyProfileId, userId, data);

  return <CompanyProfileForm model={model} allowDelete={true} />;
};

export default CompanyProfileEdit;
