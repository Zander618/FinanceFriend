import {useState} from "react";
import "./PopUp.css";

const AddAssest = ({ trigger, setTrigger, assests, setAssests }) => {
  
  const [formData, setFormData] = useState({
    assest: "",
    datePurchased: "",
    estimatedValue: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    fetch("http://localhost:3001/assests", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        assest: formData.assest,
        datePurchased: formData.datePurchased,
        estimatedValue: formData.estimatedValue,
      }),
    })
      .then((resp) => resp.json())
      .then((data) => addAssest(data));
    setFormData({
      assest: "",
      datePurchased: "",
      estimatedValue: "",
    });
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const addAssest = (assest) => {
    const updateMyAssests = [...assests, assest];
    setAssests(updateMyAssests);
  };
  
  return trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <h3 style={{ color: "black" }}>Add Assest</h3>
        <form onSubmit={handleSubmit}>
          <label>
            Assest:
            <input type="text" name="assest" value={formData.assest} onChange={handleChange}/>
          </label>
          <br></br>
          <label>
            Date Purchased:
            <input type="text" name="datePurchased" value={formData.datePurchased} onChange={handleChange}/>
          </label>
          <label>
            Estimated Value:
            <input type="text" name="estimatedValue" value={formData.estimatedValue} onChange={handleChange}/>
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

export default AddAssest;
