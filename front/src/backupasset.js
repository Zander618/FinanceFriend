import React from "react";

const Assets = ({ friends, userId }) => {
  const assets = friends.map((friend) => {
    if (`${friend.users[0].id}` === userId) {
      return friend.users[0].assets.map((asset) => {
        return (
          <div>
            <h1>{asset.name}</h1>
            <h2>{asset.date_purchased}</h2>
            <h2>{asset.estimated_value}</h2>
          </div>
        );
      });
    }
  });
  return (
    <div>
      <h1>Assets</h1>
      <div>{assets}</div>
    </div>
  );
};

export default Assets;

