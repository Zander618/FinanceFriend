import React, { useState } from "react";

const EditMoneyTrackerItem = ({ users, setUsers, trigger, setTrigger, id }) => {
  const [formData, setFormData] = useState({
    user_id: "",
    name: "",
    cost: "",
    category: "",
    date: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      e.target.parentElement.parentNode.parentElement.firstElementChild.id
    );
    fetch(
      `http://localhost:9292/users/items/${e.target.parentElement.parentNode.parentElement.firstElementChild.id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_id: formData.user_id,
          name: formData.name,
          cost: formData.cost,
          category: formData.category,
          date: formData.date,
        }),
      }
    )
      .then((resp) => resp.json())
      .then((data) => editAsset(data));
    setFormData({
      user_id: "",
      name: "",
      cost: "",
      category: "",
      date: "",
    });
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const editAsset = (asset) => {
    const updateMyAssets = [...users, asset];
    setUsers(updateMyAssets);
  };

  return trigger ? (
    <div className="edit-popup">
      <div className="edit-popup-inner">
        <form onSubmit={handleSubmit} id={id}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </label>
          <label>
            Cost:
            <input
              type="text"
              name="date_purchased"
              value={formData.cost}
              onChange={handleChange}
            />
          </label>
          <label>
            Category:
            <input
              type="text"
              name="estimated_value"
              value={formData.category}
              onChange={handleChange}
            />
          </label>
          <label>
            Date:
            <input
              type="text"
              name="user_id"
              value={formData.date}
              onChange={handleChange}
            />
          </label>
          <label>
            User Id:
            <input
              type="text"
              name="user_id"
              value={formData.user_id}
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

export default EditMoneyTrackerItem;
