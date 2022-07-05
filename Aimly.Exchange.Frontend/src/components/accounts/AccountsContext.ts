export interface AccountsContext {
  AccountId: string | null;

  UserId: string;

  CompanyProfileId: string | null;

  // The name of the context which either the user's name or the company's name
  Name: string;
}