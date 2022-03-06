import { getMentorProfileQuery$data } from '__generated__/getMentorProfileQuery.graphql';
import { GetMentorProfileModelInput } from '__generated__/useSetMentorProfileMutation.graphql';

export const PopulateInputModel = (mentorProfileId: string | null,
  userId: string | null,
  data: getMentorProfileQuery$data | null): GetMentorProfileModelInput => {

  const loadedData = data?.getMentorProfile;

  let model: GetMentorProfileModelInput = {
    userId: userId,
    id: mentorProfileId,
    name: loadedData?.name ?? '',
    about: loadedData?.about ?? '',
    industries: loadedData?.industries ?? [],
    listOnMarket: loadedData?.listOnMarket ?? true,
  };

  return model;
};