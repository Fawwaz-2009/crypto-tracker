import { useGetCoinsListQuery } from "../api";
import { useState, useMemo } from "react";
import FuzzySearch from "fuzzy-search";
import useCoins from "../hooks";
import {debounce} from '../helper';


export default function CoinsSelector() {
    const { data: coinsList, isLoading } = useGetCoinsListQuery();
    const { appendTrackedCoinsList } = useCoins();
    const [searchInput, setSearchInput] = useState("");
    const searcher = useMemo(()=> new FuzzySearch(coinsList, ["name", "symbol"]), [coinsList]);
    const [filteredCoinsList, setFilteredCoinsList] = useState([])
    const changeHandler = (input)=> setFilteredCoinsList(searcher.search(input))
    const debouncedChangeHandler = useMemo(
      () => debounce(changeHandler, 300)
    , [searcher]);

  
    if (isLoading) {
      return <h1>isLoading</h1>;
    }
  
    const isHidesSearchResults = searchInput.length === 0 ? "invisible" : "";
  
    return (
      <div>
        <p className="text-xs text-left text-gray-500">start typing to add new tracker</p>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          name="coinSearchInput"
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value)
            debouncedChangeHandler(e.target.value)
          }}
        />
        <ul className={`h-52 overflow-y-scroll mb-5 ${isHidesSearchResults}`}>
          {filteredCoinsList.map(({ id, name, symbol }) => (
            <li key={id}>
              <button
                type="button"
                onClick={() => {
                  appendTrackedCoinsList({ id, name });
                  setSearchInput("");
                }}
              >
                {name}, {symbol}
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  