import { useState, useEffect } from "react";
import "./pnrstatus.css";

export default function Railway() {
  const [pnrStatus, setPnrStatus] = useState(null);
  const [searchPNR, setSearchPNR] = useState("");

  const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '4fdfb50b70msh47a1fad035c9255p147676jsn7c5810e2f0e9',
		'X-RapidAPI-Host': 'pnr-status-indian-railway.p.rapidapi.com'
	}
};

  useEffect(() => {
    const fetchPNRApi = async () => {
      const res = await fetch(`https://pnr-status-indian-railway.p.rapidapi.com/pnr-check/8531575878`, options)
      const jsonData = await res.json();
      console.log(jsonData);
      setPnrStatus(jsonData.main);
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


