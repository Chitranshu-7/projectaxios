import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import './style.css'
function AxiosPost() {

    const [apiData, setapiData] = useState(0);

    let url = `https://jsonplaceholder.typicode.com`

    async function getApidata() {
        const res = await axios.get(`${url}/posts`);
        console.log(res.data[0]);
        setapiData(res.data[0].body);


        
    }

    useEffect(() => {
        getApidata();

    }, []);

  


    return ( <> 
    <h1>{apiData}</h1>
                {/* {apiData.map((posts)=>{
                    const {userId,id,title,body}=posts;

                    return(
                       
                        <>
                            <h1>{userId}</h1>
                        </>
                        

                    );
                })} */}


                </>
  
     
    );


};

export default AxiosPost;