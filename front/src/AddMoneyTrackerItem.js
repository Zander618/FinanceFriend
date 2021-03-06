import { useState } from "react";
import "./PopUp.css";

const AddMoneyTrackerItem = ({
  trigger,
  setTrigger,
  users,
  setUsers,
  selectedUserId,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    cost: "",
    category: "",
    date: "",
  });

  let id = parseInt(selectedUserId);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    fetch(`http://localhost:9292/items/new?user_id=${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.name,
        cost: formData.cost,
        category: formData.category,
        date: formData.date,
      }),
    })
      .then((resp) => resp.json())
      .then((data) => addItem(data));
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

  const addItem = (item) => {
    const updatedUsers = users.map((user) => {
      if (user.id === id){
        const userToUpdate = {...user}
        userToUpdate.items.push(item)
        return userToUpdate
      }
      return user
    })
      setUsers(updatedUsers);
    };

  return trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <h3 style={{ color: "black" }}>Add Item</h3>
        <form onSubmit={handleSubmit}>
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

export default AddMoneyTrackerItem;
