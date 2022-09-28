import { useState, useEffect } from "react";
import "./pnrstatus.css";

export default function PnrStatus() {
  const [pnrStatus, setPnrStatus] = useState(null);
  const [searchPNR, setSearchPNR] = useState("");

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'ab47d69698mshf4b7ec672ad8d79p1b56cbjsnd6c4d96fbe2a',
      'X-RapidAPI-Host': 'pnr-status-indian-railway.p.rapidapi.com'
    }
  };

  useEffect(() => {
    const fetchPNRApi = async () => {
      const res = await fetch(`https://pnr-status-indian-railway.p.rapidapi.com/pnr-check/${searchPNR}`, options)
      const jsonData = await res.json();
      console.log(jsonData.data);
      setPnrStatus(jsonData);
    }

    fetchPNRApi();
  }, [searchPNR])

  return (
    <div className="main">
      <div className="search">
        <input type="search"
          placeholder="Enter PNR Number"
          value={searchPNR}
          onChange={(event) => { setSearchPNR(event.target.value) }}
        />
      </div>

      <div className="displayData">
        <span>PNR Number: {searchPNR} </span>
        <span>Train Number: 5478962570</span> 
      </div>

      <div className="displayData">
        <span>PNR Number: {searchPNR} </span>
        <span>Train Number: 5478962570</span> 
      </div>
    </div>
  );
}


