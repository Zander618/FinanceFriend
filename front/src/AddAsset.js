import { useState } from "react";
import "./PopUp.css";

const AddAsset = ({ trigger, setTrigger, users, setUsers, selectedUserId }) => {
  let id = parseInt(selectedUserId);

  // userid 
  const [formData, setFormData] = useState({
    name: "",
    date_purchased: "",
    estimated_value: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    fetch(`http://localhost:9292/assets/new?user_id=${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.name,
        date_purchased: formData.date_purchased,
        estimated_value: formData.estimated_value,
      }),
    })
      .then((resp) => resp.json())
      .then((data) => addAsset(data));
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

  const addAsset = (asset) => {
  const updatedUsers = users.map((user) => {
    if (user.id === id){
      const userToUpdate = {...user}
      userToUpdate.assets.push(asset)
      return userToUpdate
    }
    return user
  })
    setUsers(updatedUsers);
  };

  return trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <h3 style={{ color: "black" }}>Add Asset</h3>
        <form onSubmit={handleSubmit}>
          <label>
            Assest:
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
          <br></br>
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

export default AddAsset;
