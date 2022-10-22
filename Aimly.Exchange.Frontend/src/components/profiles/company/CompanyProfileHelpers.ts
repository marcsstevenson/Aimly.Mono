import { getCompanyProfileQuery$data } from '__generated__/getCompanyProfileQuery.graphql';
import { GetCompanyProfileModelInput } from '__generated__/useSetCompanyProfileMutation.graphql';

export const PopulateInputModel = (companyProfileId: string | null,
  userId: string | null,
  data: getCompanyProfileQuery$data | null): GetCompanyProfileModelInput => {

  const loadedData = data?.getCompanyProfile;

  let model: GetCompanyProfileModelInput = {
    id: companyProfileId,

    companyName: loadedData?.companyName ?? '',
    listOnMarket: loadedData?.listOnMarket ?? true,
    profilePictureUrl: loadedData?.profilePictureUrl ?? '',
    type: loadedData?.type ?? '',
    website: loadedData?.website ?? '',
    numberOfFounders: loadedData?.numberOfFounders ?? 1,
    industries: loadedData?.industries ?? [],
    floor: loadedData?.floor ?? '',
    streetNumber: loadedData?.streetNumber ?? '',
    streetName: loadedData?.streetName ?? '',
    addressLocality: loadedData?.addressLocality ?? '',
    addressCity: loadedData?.addressCity ?? '',
    addressRegion: loadedData?.addressRegion ?? '',
    addressCountry: loadedData?.addressCountry ?? '',
    postalCode: loadedData?.postalCode ?? '',
    postOfficeBoxNumber: loadedData?.postOfficeBoxNumber ?? '',
    problemDetails: loadedData?.problemDetails ?? '',
    solutionDescription: loadedData?.solutionDescription ?? '',
  };

  return model;
};