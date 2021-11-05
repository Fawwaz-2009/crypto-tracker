import { appendTrackedCoinsList } from "../slice";
import { useDispatch, useSelector } from "react-redux";

export default function useCoins() {
  const coinsState = useSelector((state) => state.coinsSlice);
  const dispatch = useDispatch();
  return {
    appendTrackedCoinsList: ({ id, name }) => dispatch(appendTrackedCoinsList({ id, name })),
    coinsState,
  };
}
