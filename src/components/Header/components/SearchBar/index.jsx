import "./style.css";

export const SearchBar = ({ MagnifyingGlass, handleSearch, setSearch }) => {
  return (
    <form method="GET" className="searchBar" onSubmit={handleSearch}>
      <input
        className="searchInput"
        type="text"
        placeholder="Pesquisar"
        required
        onChange={({ target }) => setSearch(target.value)}
      />

      <button className="searchBtn">
        <MagnifyingGlass size={22} />
      </button>
    </form>
  );
};
