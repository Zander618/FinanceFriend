import {useState} from "react";
import "./PopUp.css";

const AddAsset = ({ trigger, setTrigger, assets, setAssets }) => {
  
  const [formData, setFormData] = useState({
    name: "",
    datePurchased: "",
    estimatedValue: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    fetch("http://localhost:3001/assets", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.name,
        datePurchased: formData.datePurchased,
        estimatedValue: formData.estimatedValue,
      }),
    })
      .then((resp) => resp.json())
      .then((data) => addAsset(data));
    setFormData({
      name: "",
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

  const addAsset = (asset) => {
    const updateMyAssets = [...assets, asset];
    setAssets(updateMyAssets);
  };
  
  return trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <h3 style={{ color: "black" }}>Add Asset</h3>
        <form onSubmit={handleSubmit}>
          <label>
            Assest:
            <input type="text" name="name" value={formData.name} onChange={handleChange}/>
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

export default AddAsset;
