import React, { useState } from "react";
import axios from "axios";
import UpdateAccount from "./updateAccount";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [selectedAccount, setSelectedAccount] = useState(null);
  const [updatedAccount, setUpdatedAccount] = useState(null);

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

  const handleUpdateAccount = async (updatedAccount) => {
    if (selectedAccount) {
      //api logic hre please
      setSelectedAccount(null);
      setUpdatedAccount(null);
    }
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
          <input
            type="text"
            value={updatedAccount?.name || ""}
            onChange={(e) =>
              setUpdatedAccount({...updatedAccount, name: e.target.value })
            }
          />
          <button onClick={() => handleUpdateAccount(updatedAccount)}>
            Update Account
          </button>
          <button onClick={handleViewAccount}>View Account</button>
          <button onClick={handleSuspendAccount}>Suspend Account</button>
          <UpdateAccount
            selectedAccount={selectedAccount}
            updatedAccount={updatedAccount}
            setUpdatedAccount={setUpdatedAccount}
            handleUpdateAccount={handleUpdateAccount}
          />
        </div>
      )}
    </div>
  );
};

export default SearchBar;