import CoinRow from './CoinRow';

const DEFAULT_COINS = [
    {id:"bitcoin", name:"bitcoin"},
    {id:"ethereum", name:"ethereum"},
    {id:"tether", name:"tether"},
    {id:"usd-coin", name:"usd coin"},
    {id:"shiba-inu", name:"shiba inu"},
]

export default function CoinsTable() {
  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Coin</th>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">% Change</th>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Market Cap</th>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Volume</th>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price Chart</th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {DEFAULT_COINS.map(({ id, name }) => (
          <CoinRow key={id} id={id} name={name} timeRange={"7"} />
        ))}
      </tbody>
    </table>
  );
}