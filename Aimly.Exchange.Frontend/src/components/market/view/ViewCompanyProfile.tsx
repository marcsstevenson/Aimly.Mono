// The purpose of this component is to display a public readonly profile for a startup company

import React, { useContext, useMemo } from 'react';
import * as ViewCompanyProfileQuery from '__generated__/getViewCompanyProfileQuery.graphql';
import { useLazyLoadQuery } from 'react-relay/hooks';
import { useParams } from 'react-router-dom';
import { ViewProfileProps } from 'components/market/view/ViewProfileInterfaces';
import ViewProfile from 'components/market/view/ViewProfile';
import { PrivateContext } from 'components/PrivateContext';
import { GetCurrentTenant } from 'tenant/TenantValues';
import { BuildViewProfileProps } from 'components/market/view/CompanyProfileUtils';

const currentTenant = GetCurrentTenant();
const company = currentTenant.companyOptions.singularName;

const ViewCompanyProfile = () => {
  // Read the Id from the route context
  const { profileId } = useParams();
  const { checkedInUser } = useContext(PrivateContext);

  const viewCompanyProfileQueryVariables = {
    companyProfileId: profileId,
    userId: checkedInUser?.userId,
  };

  // Lazy load this query because it is only relevant to this component
  const data = useLazyLoadQuery<ViewCompanyProfileQuery.getViewCompanyProfileQuery>(
    ViewCompanyProfileQuery.default,
    viewCompanyProfileQueryVariables,
    {
      fetchPolicy: 'network-only',
    }
  );

  const viewProfileProps = useMemo<ViewProfileProps>(() => {
    return BuildViewProfileProps(company, data.getViewCompanyProfile);
  }, [BuildViewProfileProps, data]);

  return <>{data.getViewCompanyProfile && <ViewProfile model={viewProfileProps} />}</>;
};

export default ViewCompanyProfile;
