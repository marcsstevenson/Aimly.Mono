import graphql from 'babel-plugin-relay/macro';

export const checkInMutation = graphql`
  mutation checkInMutation($input: AuthProfileInput){
    checkIn2(input: $input){
      userId
      publicId
      fullName
      pictureUrl
    }
  }
`;