import graphql from 'babel-plugin-relay/macro';

export const getAccountsStatusForUserQuery = graphql`
  query getAccountsStatusForUserQuery($userId: UUID!) {
    accountsStatusForUser(userId: $userId) {
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