import graphql from 'babel-plugin-relay/macro';

export const getTheProblemQuery = graphql`
  query getTheProblemQuery($id: UUID!, $companyProfileId: UUID!) {
    getTheProblem(command: { userId: $id, companyProfileId: $companyProfileId}) {
      userId
      companyProfileId
      purposeDetails
      problemDetails
    }
  }
`;