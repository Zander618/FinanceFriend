import React, { useState } from "react";

const EditMoneyTrackerItem = ({ users, setUsers, trigger, setTrigger, itemId, selectedUserId, setSelectedUser }) => {
  const [formData, setFormData] = useState({
    name: "",
    cost: "",
    category: "",
    date: "",
  });

  let id = parseInt(selectedUserId);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      e.target.parentElement.parentNode.parentElement.firstElementChild.id
    );
    fetch(
      `http://localhost:9292/items/${e.target.parentElement.parentNode.parentElement.firstElementChild.id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          cost: formData.cost,
          category: formData.category,
          date: formData.date,
        }),
      }
    )
      .then((resp) => resp.json())
      .then((data) => editItem(data));
    setFormData({
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

  const editItem = (data) => {
    let updatedAttributes;
    const updatedUsers = users.map((user) => {
      if (user.id === id) {
        const userToUpdate = { ...user };
        updatedAttributes = userToUpdate.items.map((item) => {
          if (item.id === data.id) {
            return {
              ...item,
              name: data.name,
              cost: data.cost,
              category: data.category,
              date: data.date
            };
          } else {
            return item;
          }
        });
        userToUpdate.items = updatedAttributes;
        setSelectedUser(userToUpdate);
        return userToUpdate;
      }
      return user;
    });
    setUsers(updatedUsers);
  };

  return trigger ? (
    <div className="edit-popup">
      <div className="edit-popup-inner">
        <form onSubmit={handleSubmit} id={itemId}>
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
              name="cost"
              value={formData.cost}
              onChange={handleChange}
            />
          </label>
          <label>
            Category:
            <input
              type="text"
              name="category"
              value={formData.category}
              onChange={handleChange}
            />
          </label>
          <label>
            Date:
            <input
              type="text"
              name="date"
              value={formData.date}
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
