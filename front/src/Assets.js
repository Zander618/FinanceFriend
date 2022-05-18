import * as React from "react";
import { useState } from "react";
import AddAsset from "./AddAsset";
import AssetsData from "./AssetsData";

const Assets = ({ assets, setAssets}) => {

  const [buttonPopup, setButtonPopup] = useState(false);

  if (!assets) {
    return <h2>LOADING......</h2>;
  }

  function handleDeleteClick(e) {
    fetch(`http://localhost:9292/assets/${e.target.id}`, {
      method: "DELETE"
    })
    handleDeleteAsset(e.target.id)
  }

  function handleDeleteAsset(id) {
    const updatedAssets = assets.filter((asset) => asset.id !== parseInt(id));
    setAssets(updatedAssets);
  }

  return (
    <div>
      <button
        onClick={() => {
          setButtonPopup(true);
        }}
      >
        Add Asset
      </button>
      <AddAsset
        assets={assets}
        setAssets={setAssets}
        trigger={buttonPopup}
        setTrigger={setButtonPopup}
      />
      <AssetsData assets={assets} handleDeleteClick={handleDeleteClick}/>  
    </div>
  );
};

export default Assets;
