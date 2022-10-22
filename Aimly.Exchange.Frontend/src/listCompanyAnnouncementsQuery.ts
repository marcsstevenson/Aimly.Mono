import graphql from 'babel-plugin-relay/macro';

export const listCompanyAnnouncementsQuery = graphql`
query listCompanyAnnouncementsQuery($listCompanyAnnouncementsCommand: ListCompanyAnnouncementsCommandInput!) {
  listCompanyAnnouncements(command: $listCompanyAnnouncementsCommand){
    results {
      id
      title
      message
      created
    }
    totalResultCount
    currentPage
    totalPageCount
  }
}
`;