import React, { useState } from "react";
import axios from "axios";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [selectedAccount, setSelectedAccount] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    const response = await axios.get(
      `api-logic-here-please`
    );
    setResults(response.data.results);
  };

  const handleAccountSelect = (account) => {
    setSelectedAccount(account);
  };

  const handleViewAccount = () => {
    // Add logic pls
  };

  const handleSuspendAccount = () => {
    // Add logic pls
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <ul>
        {results.map((result) => (
          <li key={result.id} onClick={() => handleAccountSelect(result)}>
            {result.name}
          </li>
        ))}
      </ul>
      {selectedAccount && (
        <div>
          <h2>Selected Account: {selectedAccount.name}</h2>
          <button onClick={handleViewAccount}>View Account</button>
          <button onClick={handleSuspendAccount}>Suspend Account</button>
        </div>
      )}
    </div>
  );
};

export default SearchBar;