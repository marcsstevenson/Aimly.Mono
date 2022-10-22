import { getExpertProfileQuery$data } from '__generated__/getExpertProfileQuery.graphql';
import { GetExpertProfileModelInput } from '__generated__/useSetExpertProfileMutation.graphql';

export const PopulateInputModel = (mentorProfileId: string | null,
  userId: string | null,
  data: getExpertProfileQuery$data | null): GetExpertProfileModelInput => {

  const loadedData = data?.getExpertProfile;

  let model: GetExpertProfileModelInput = {
    userId: userId,
    id: mentorProfileId,
    name: loadedData?.name ?? '',
    about: loadedData?.about ?? '',
    industries: loadedData?.industries ?? [],
    skills: loadedData?.skills ?? [],
    listOnMarket: loadedData?.listOnMarket ?? true,
  };

  return model;
};