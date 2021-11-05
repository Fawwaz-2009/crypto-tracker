import { useGetCoinMarketDataQuery } from '../api';

export default function CoinRow({ id, timeRange, name }) {
    const { data, isLoading } = useGetCoinMarketDataQuery({ id, timeRange, vsCurrency: "usd" });
  
    if (isLoading) {
      return (
        <tr className="text-left">
          <td className="px-6 py-4 whitespace-nowrap">isLoading</td>
        </tr>
      );
    }
  
    const formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    });
  
    const price = data.prices[data.prices.length - 1][1];
    const percentageOfChange = parseFloat((price - data.prices[0][1]) / data.prices[0][1] * 100).toFixed(2).replace('-0.00', '0.00');
    const marketCap = data.market_caps[data.market_caps.length - 1][1];
    const totalVolume = data.total_volumes[data.total_volumes.length - 1][1];
    //   const priceChartData = data.prices;
  
    return (
      <tr className="text-left">
        <td className="px-6 py-4 whitespace-nowrap capitalize">{name}</td>
        <td className="px-6 py-4 whitespace-nowrap">{formatter.format(price)}</td>
        <td className={`px-6 py-4 whitespace-nowrap ${getCorrespondingColorToPercentageChange(percentageOfChange)}`}>{percentageOfChange + "%"}</td>
        <td className="px-6 py-4 whitespace-nowrap">{formatter.format(marketCap)}</td>
        <td className="px-6 py-4 whitespace-nowrap">{formatter.format(totalVolume)}</td>
        <td className="px-6 py-4 whitespace-nowrap">chart</td>
      </tr>
    );
  }

  function getCorrespondingColorToPercentageChange(percentageOfChange){
    if(percentageOfChange>0) return 'text-green-600'
    if(percentageOfChange<0) return "text-red-600"
    return ""
}
