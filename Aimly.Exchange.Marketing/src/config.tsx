/**
 * Configuration for the application
 */
interface IConfig {
  /**
   * This is the URI of the Exchange App
   * eg, https://app.aimly.io/
   */
  exchangeAppUri: string;
}

/**
 * A provider of IConfig
 * Currently uses environment variables
 */
export function getConfig(): IConfig {
  // Return from the environment variables
  return {
    exchangeAppUri: getFromEnvOrThrow('APP_URL'),
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
