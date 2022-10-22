import graphql from 'babel-plugin-relay/macro';

export const getPotentialQuery = graphql`
  query getPotentialQuery($id: UUID!, $companyProfileId: UUID!) {
    getPotential(command: { userId: $id, companyProfileId: $companyProfileId}) {
      userId
      companyProfileId
      value
      potentialSize
      potentialValue
    }
  }
`;