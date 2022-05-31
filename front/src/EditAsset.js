import React, { useState } from "react";

const EditAsset = ({
  users,
  setUsers,
  trigger,
  setTrigger,
  assetId,
  selectedUserId,
  setSelectedUser,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    date_purchased: "",
    estimated_value: "",
  });

  let id = parseInt(selectedUserId);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      e.target.parentElement.parentNode.parentElement.firstElementChild.id
    );
    fetch(
      `http://localhost:9292/assets/${e.target.parentElement.parentNode.parentElement.firstElementChild.id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          date_purchased: formData.date_purchased,
          estimated_value: formData.estimated_value,
        }),
      }
    )
      .then((resp) => resp.json())
      .then((data) => handleEditAsset(data));
    setFormData({
      name: "",
      date_purchased: "",
      estimated_value: "",
    });
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleEditAsset = (data) => {
    let updatedAttributes;
    const updatedUsers = users.map((user) => {
      if (user.id === id) {
        const userToUpdate = { ...user };
        updatedAttributes = userToUpdate.assets.map((asset) => {
          if (asset.id === data.id) {
            return {
              ...asset,
              name: data.name,
              date_purchased: data.date_purchased,
              estimated_value: data.estimated_value,
            };
          } else {
            return asset;
          }
        });
        userToUpdate.assets = updatedAttributes;
        setSelectedUser(userToUpdate);
        return userToUpdate;
      }
      return user;
    });
    console.log("Updated Attributes", updatedAttributes)
    console.log("Updated Users", updatedUsers)
    setUsers(updatedUsers);
  };

  return trigger ? (
    <div className="edit-popup">
      <div className="edit-popup-inner">
        <form onSubmit={handleSubmit} id={assetId}>
          <label>
            Asset:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </label>
          <label>
            Date Purchased:
            <input
              type="text"
              name="date_purchased"
              value={formData.date_purchased}
              onChange={handleChange}
            />
          </label>
          <label>
            Estimated Value:
            <input
              type="text"
              name="estimated_value"
              value={formData.estimated_value}
              onChange={handleChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <button className="close-btn" onClick={() => setTrigger(false)}>
          close
        </button>
      </div>
    </div>
  ) : (
    ""
  );
};

export default EditAsset;
