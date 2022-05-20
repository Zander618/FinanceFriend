import {useState} from "react";
import "./PopUp.css";

const AddExpense = ({ trigger, setTrigger, expenses, setExpenses }) => {
  
  const [formData, setFormData] = useState({
    name: "",
    monthlyCost: ""
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    fetch("http://localhost:9292/users/1/expenses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.name,
        monthlyCost: formData.monthlyCost,
      }),
    })
      .then((resp) => resp.json())
      .then((data) => addExpense(data));
    setFormData({
      name: "",
      monthlyCost: "",
    });
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const addExpense = (expense) => {
    const updateMyExpenses = [...expenses, expense];
    setExpenses(updateMyExpenses);
  };
  
  return trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <h3 style={{ color: "black" }}>Add Expense</h3>
        <form onSubmit={handleSubmit}>
          <label>
            Expense:
            <input type="text" name="name" value={formData.name} onChange={handleChange}/>
          </label>
          <br></br>
          <label>
            Monthly Cost:
            <input type="text" name="monthlyCost" value={formData.monthlyCost} onChange={handleChange}/>
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
