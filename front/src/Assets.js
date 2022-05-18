import * as React from "react";
import { useEffect, useState } from "react";
import AddAsset from "./AddAsset";
import AssetsData from "./AssetsData";

const Assets = () => {

  const [assets, setAssets] = useState();
  const [buttonPopup, setButtonPopup] = useState(false);

  useEffect(() => {
    fetch("http://localhost:9292/assets")
      .then((resp) => resp.json())
      .then((data) => setAssets(data));
  }, []);

  if (!assets) {
    return <h2>LOADING......</h2>;
  }

  function handleDeleteClick(e) {
    fetch(`http://localhost:9292/assets/${e.target.innerText}`, {
      method: "DELETE"
    })
      handleDeleteAsset(e.target.innerText)
  }

  function handleDeleteAsset(e = e.target.innerText) {
    const updatedAssets = assets.filter((asset) => asset.id !== e);
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
