import { useState } from "react";
import "./PopUp.css";

const AddExpense = ({ trigger, setTrigger, users, setUsers, userId }) => {
  const [formData, setFormData] = useState({
    name: "",
    monthly_cost: "",
  });

  let id = parseInt(userId);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    fetch(`http://localhost:9292/expenses/new?user_id=${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.name,
        monthly_cost: formData.monthly_cost,
      }),
    })
      .then((resp) => resp.json())
      .then((data) => addExpense(data));
    setFormData({
      name: "",
      monthly_cost: "",
    });
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const addExpense = (expense) => {
    const updateMyExpenses = [...users, expense];
    setUsers(updateMyExpenses);
  };

  return trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <h3 style={{ color: "black" }}>Add Expense</h3>
        <form onSubmit={handleSubmit}>
          <label>
            Expense:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </label>
          <br></br>
          <label>
            Monthly Cost:
            <input
              type="text"
              name="monthly_cost"
              value={formData.monthly_cost}
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

export default AddExpense;
