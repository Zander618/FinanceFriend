import React, { useState } from "react";

const EditExpense = ({ users, setUsers, trigger, setTrigger, id }) => {
  const [formData, setFormData] = useState({
    name: "",
    monthly_cost: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      e.target.parentElement.parentNode.parentElement.firstElementChild.id
    );
    fetch(
      `http://localhost:9292/expenses/${e.target.parentElement.parentNode.parentElement.firstElementChild.id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          monthly_cost: formData.monthly_cost,
        }),
      }
    )
      .then((resp) => resp.json())
      .then((data) => editExpense(data));
    setFormData({
      user_id: "",
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

  const editExpense = (expense) => {
    const updateMyExpenses = [...users, expense];
    setUsers(updateMyExpenses);
  };

  return trigger ? (
    <div className="edit-popup">
      <div className="edit-popup-inner">
        <form onSubmit={handleSubmit} id={id}>
          <label>
            Expense:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </label>
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

export default EditExpense;
