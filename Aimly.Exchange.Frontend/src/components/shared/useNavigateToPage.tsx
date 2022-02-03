import { useNavigate } from 'react-router-dom';
import { GetPathForPage, Pages } from "./AppRoutes"

// Takes a managed page enum value and navigates to it's matching path
const useNavigateToPage = () => {
  const navigate = useNavigate();

  const navigateToPage = (page: Pages): void => {
    navigate(GetPathForPage(page));
  }

  return navigateToPage;
}

export default useNavigateToPage;