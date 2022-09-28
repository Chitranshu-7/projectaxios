import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import './style.css'
function AxiosDemo() {

    const [apiData, setapiData] = useState(0);

    let url = `https://jsonplaceholder.typicode.com`

    async function getApidata() {
        const res = await axios.get(`${url}/comments`);
        // console.log(res.data[0].name);
        setapiData(res.data);


    }

    useEffect(() => {
        getApidata();

    }, []);


    return (<>
        {apiData.map((comments) =>{
            const {name,email,body}= comments;

            return (
                
                <>
                <h1>{name}</h1>
                <h2>{email}</h2>
                </>
                
            );
            }
          
        )};
    
    
    
    </>
     
    );


};

export default AxiosDemo;