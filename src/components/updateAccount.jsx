import React from "react";

const UpdateAccount = ({
  selectedAccount,
  updatedAccount,
  setUpdatedAccount,
  handleUpdateAccount,
}) => {
  const handleUpdateAccountSubmit = (e) => {
    e.preventDefault();
    handleUpdateAccount(updatedAccount);
  };

  return (
    <div>
      <h2>Update Account: {selectedAccount.name}</h2>
      <form onSubmit={handleUpdateAccountSubmit}>
        <input
          type="text"
          value={updatedAccount?.name || ""}
          onChange={(e) => setUpdatedAccount({...updatedAccount, name: e.target.value })}
        />
        <button type="submit">Update Account</button>
      </form>
    </div>
  );
};

export default UpdateAccount;