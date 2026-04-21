import { useDispatch } from "react-redux";

export const useDashboard = () => {
  const dispatch = useDispatch();

  return {
    dispatch,
  };
};
