import {useState} from "react";
import "./PopUp.css";

const AddMoneyTrackerItem = ({ trigger, setTrigger, users, setUsers }) => {
  
  const [formData, setFormData] = useState({
    user_id: "",
    name: "",
    cost: "",
    category: "",
    date: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    fetch("http://localhost:9292/users/items/new", {
      method: "POST",
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
    })
      .then((resp) => resp.json())
      .then((data) => addItem(data));
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

  const addItem = (item) => {
    const updateMyItems = [...users, item];
    setUsers(updateMyItems);
  };
  
  return trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <h3 style={{ color: "black" }}>Add Item</h3>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" name="name" value={formData.name} onChange={handleChange}/>
          </label>
          <label>
            Cost:
            <input type="text" name="cost" value={formData.cost} onChange={handleChange}/>
          </label>
          <label>
            Category:
            <input type="text" name="category" value={formData.category} onChange={handleChange}/>
          </label>
          <label>
            Date:
            <input type="text" name="date" value={formData.date} onChange={handleChange}/>
          </label>
          <label>
            User Id:
            <input type="text" name="user_id" value={formData.user_id} onChange={handleChange}/>
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