import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import type { Routes } from './types';

export const useRouter = () => {
  const navigate = useNavigate();

  const goTo = useCallback((path: Routes) => {
    navigate(path);
  }, [navigate]);

  return { navigate: goTo };
};
