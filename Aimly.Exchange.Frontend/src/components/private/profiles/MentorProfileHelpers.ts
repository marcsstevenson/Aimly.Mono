import { getMentorProfileQuery$data } from '__generated__/getMentorProfileQuery.graphql';
import { GetMentorProfileModelInput } from '__generated__/useSetMentorProfileMutation.graphql';

export const PopulateInputModel = (mentorProfileId: string | null,
  userId: string | null,
  data: getMentorProfileQuery$data | null): GetMentorProfileModelInput => {

  const loadedData = data?.getMentorProfile;

  let model: GetMentorProfileModelInput = {
    userId: userId,
    id: mentorProfileId,
    about: loadedData?.about ?? '',
    industry: loadedData?.industry ?? '',
    listOnMarket: loadedData?.listOnMarket ?? true,
  };

  return model;
};