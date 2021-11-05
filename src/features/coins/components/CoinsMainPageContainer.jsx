import CoinsTable from "./CoinsTable";
import useCoins from "../hooks";

export default function CoinsMainPageContainer() {
  const { coinsState } = useCoins();

  return <CoinsTable trackedCoinsList={coinsState.trackedCoinsList} />;
}
