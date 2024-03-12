import { useSelector } from "react-redux";

const SearchHistory = () => {
  const searchHistory = useSelector((state) => state.searchHistory);

  return (
    <div class="my-4">
      <h3>Search History</h3>
      {searchHistory.map((item, i) => (
        <p class="fs-6 mb-2" key={i}>{item}</p>
      ))}
    </div>
  );
};

export default SearchHistory;
