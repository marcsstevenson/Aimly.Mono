import React, { useContext, useMemo } from 'react';
import * as ViewTenantCompanyProfileQuery from '__generated__/getViewTenantCompanyProfileQuery.graphql';
import { useLazyLoadQuery } from 'react-relay/hooks';
import { useParams } from 'react-router-dom';
import { LongFormElement, ViewProfileProps } from 'components/market/view/ViewProfileInterfaces';
import ViewProfile from 'components/market/view/ViewProfile';
import { ProfileTypeOption } from '__generated__/marketSearchQuery.graphql';
import { PrivateContext } from 'components/PrivateContext';
import { GetCurrentTenant } from 'tenant/TenantValues';
import { BuildViewProfileProps } from 'components/market/view/CompanyProfileUtils';

const currentTenant = GetCurrentTenant();
const company = currentTenant.companyOptions.singularName;

const AboutUs = () => {
  // Lazy load this query because it is only relevant to this component
  const data = useLazyLoadQuery<ViewTenantCompanyProfileQuery.getViewTenantCompanyProfileQuery>(
    ViewTenantCompanyProfileQuery.default,
    {
      fetchPolicy: 'network-only',
    }
  );
  // Build the ViewProfileProps
  const viewProfileProps = useMemo<ViewProfileProps>(() => {
    return BuildViewProfileProps(company, data.getViewTenantCompanyProfile);
  }, [BuildViewProfileProps, data]);

  return <>{data.getViewTenantCompanyProfile && <ViewProfile model={viewProfileProps} />}</>;
};

export default AboutUs;
