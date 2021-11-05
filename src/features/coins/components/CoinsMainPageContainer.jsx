import CoinsTable from "./CoinsTable";
import useCoins from "../hooks";
import CoinsSelector from './CoinsSelector';

export default function CoinsMainPageContainer() {
  const { coinsState } = useCoins();

  return (
    <div>
      <h1 className="text-5xl my-10">Crypto Tracker</h1>
      <CoinsSelector />
      <CoinsTable trackedCoinsList={coinsState.trackedCoinsList} />
    </div>
  );
}
