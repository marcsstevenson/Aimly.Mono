import graphql from 'babel-plugin-relay/macro';

export const getAccountsStatusQuery = graphql`
  query getAccountsStatusQuery($userId: UUID! $companyProfileId: UUID) {
    accountsStatus(userId: $userId, companyProfileId: $companyProfileId) {
      getAccountResponse {
        accountId
        type
        payoutsEnabled
        errorMessage
        isSuccessful
      }
      errorMessage
      isSuccessful
    }
  }
`;