import { useNavigate } from 'react-router-dom';
import Pages from 'components/shared/Pages';
import { GetPathForPage } from 'components/shared/AppRoutes';

// Takes a managed page enum value and navigates to it's matching path
const useNavigateToPage = () => {
  const navigate = useNavigate();

  const navigateToPage = (page: Pages, extras: string | null = null): void => {
    let path = GetPathForPage(page);
    if (extras) {
      path += `${extras}`;
    }

    navigate(path);
  };

  return navigateToPage;
};

export default useNavigateToPage;
