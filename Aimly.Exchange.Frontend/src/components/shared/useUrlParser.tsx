// The purpose of this hook is to parse the URL and return
// values for known system variables

import { useSearchParams } from 'react-router-dom';
import { promptDeleteValue } from 'components/shared/UrlConstants';

const useUrlParser = () => {
  const [searchParams] = useSearchParams();

  const getPromptForDeleteValue = (): boolean => {
    return searchParams?.get(promptDeleteValue) === 'true';
  };

  return { getPromptForDeleteValue };
};

export { useUrlParser };
