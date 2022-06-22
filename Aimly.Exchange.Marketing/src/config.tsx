import { Auth0ProviderOptions } from "@auth0/auth0-react";

/**
 * Auth configuration
 */
interface IAuthConfig {
  /** The domain prefix of your OAuth account
   * eg, dev-36yp2r0f.us.auth0.com
   */
  domain: string;
  /**
   * The client id of your oAuth account
   * eg, gHx11QtS68JBn3cnyQ5M3RA3L3j9QPM5
   */
  clientId: string;

  /**
   * The audience of the exchange API which is the client id/identifier
   * of the 0Auth application for the exchange API
   */
  exchangeApiAudience: string | undefined;
}

/**
 * Configuration for the application
 */
interface IConfig {
  /**
   * Auth configuration
   */
  Auth: IAuthConfig;
  /**
   * This is the URI of the Exchange API
   * eg, https://api.aimly.io/graphql/
   */
  exchangeApiUri: string;
  exchangeAppUri: string;
}

/**
 * A provider of IConfig
 * Currently uses environment variables
 */
export function getConfig(): IConfig {
  // Return from the environment variables
  return {
    Auth: {
      domain: getFromEnvOrThrow("OAUTH_DOMAIN"),
      clientId: getFromEnvOrThrow("OAUTH_CLIENT_ID"),
      exchangeApiAudience: getFromEnv("OAUTH_EXCHANGE_API_AUDIENCE"),
    },
    exchangeApiUri: getFromEnvOrThrow("EXCHANGE_API_URI"),
    exchangeAppUri: getFromEnvOrThrow("REACT_APP_APP_URL"),
  };
}

function getFromEnv(variable: string): string | undefined {
  const variableFullName = `REACT_APP_${variable}`;
  return process.env[variableFullName];
}

function getFromEnvOrThrow(variable: string): string {
  const variableFullName = `REACT_APP_${variable}`;
  const value = getFromEnv(variable);

  if (!value) {
    throw new Error(`${variableFullName} environment variable is not set`);
  }

  return value;
}

/** Returns a Auth0ProviderOptions object populated from environment variables */
export function getProviderConfig(onRedirectCallback: any): Auth0ProviderOptions {
  const config = getConfig();

  // Please see https://auth0.github.io/auth0-react/interfaces/auth0_provider.auth0provideroptions.html
  // for a full list of the available properties on the provider
  const providerConfig: Auth0ProviderOptions = {
    domain: config.Auth.domain,
    clientId: config.Auth.clientId,
    ...(config.Auth.exchangeApiAudience ? { audience: config.Auth.exchangeApiAudience } : null),
    redirectUri: window.location.origin,
    onRedirectCallback,
  };

  return providerConfig;
}
