import {useState} from "react";
import "./PopUp.css";

const AddAsset = ({ trigger, setTrigger, friends, setFriends, userId }) => {
  
  const [formData, setFormData] = useState({
    user_id: "",
    name: "",
    date_purchased: "",
    estimated_value: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    fetch(`http://localhost:9292/assets`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: formData.user_id,
        name: formData.name,
        date_purchased: formData.date_purchased,
        estimated_value: formData.estimated_value,
      }),
    })
      .then((resp) => resp.json())
      .then((data) => addAsset(data));
    setFormData({
      user_id: "",
      name: "",
      date_purchased: "",
      estimated_value: ""  
    });
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const addAsset = (asset) => {
    const updateMyAssets = [...friends, asset];
    setFriends(updateMyAssets);
  };
  
  return trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <h3 style={{ color: "black" }}>Add Asset</h3>
        <h2> Your User Id is {userId}</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Assest:
            <input type="text" name="name" value={formData.name} onChange={handleChange}/>
          </label>
          <label>
            Date Purchased:
            <input type="text" name="date_purchased" value={formData.date_purchased} onChange={handleChange}/>
          </label>
          <label>
            Estimated Value:
            <input type="text" name="estimated_value" value={formData.estimated_value} onChange={handleChange}/>
          </label>
          <br></br>
          <label>
            Enter User Id
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


export default AddAsset;
