import graphql from 'babel-plugin-relay/macro';

export const getTheSolutionQuery = graphql`
  query getTheSolutionQuery($id: UUID!, $companyProfileId: UUID!) {
    getTheSolution(command: { userId: $id, companyProfileId: $companyProfileId}) {
      userId
      companyProfileId
      solutionNovelty
      stateOfValidation
      competition
      positionVsCompetition
      businessModel
      traction
      founders
      currentAnnualRevenue
      externalFunding
    }
  }
`;