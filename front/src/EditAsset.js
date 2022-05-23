import React, {useState} from "react";


const EditAsset = ({users, setUsers, trigger, setTrigger, id}) => {

  const [formData, setFormData] = useState({
    user_id: "",
    name: "",
    date_purchased: "",
    estimated_value: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.parentElement.parentNode.parentElement.firstElementChild.id)
    fetch(`http://localhost:9292/users/assets/${e.target.parentElement.parentNode.parentElement.firstElementChild.id}`, {
      method: "PATCH",
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
      .then((data) => editAsset(data));
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

  const editAsset = (asset) => {
    const updateMyAssets = [...users, asset];
    setUsers(updateMyAssets);
  };
  
  return trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <form onSubmit={handleSubmit} id={id}>
          <label>
            Expense:
            <input type="text" name="name" value={formData.name} onChange={handleChange}/>
          </label>
          <label>
            Monthly Cost:
            <input type="text" name="date_purchased" value={formData.date_purchased} onChange={handleChange}/>
          </label>
          <label>
              User Id:
          <input type="text" name="estimated_value" value={formData.estimated_value} onChange={handleChange}/>
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

export default EditAsset;