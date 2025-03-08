import { useDispatch } from 'react-redux';
import type { AppDispatch } from './store';

// Custom hook to infer correct type for dispatch
export const useAppDispatch: () => AppDispatch = useDispatch;
