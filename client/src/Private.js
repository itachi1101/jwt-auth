import axios from 'axios'
import { useEffect } from 'react'

const Private = ({state:{token}}) => {

    const fetchUserData = async()=>{
        const res = await axios.get('http://localhost:8001/userData',{
            headers:{
                authorisation:`bearer ${token}`
            }
        })
    }

    useEffect(()=>{
        fetchUserData()
    },[token])

    return ( 
       <>
            {token ? <div>
                <h1>Private COmp</h1>
            </div> : <h1>Redirectt</h1> }
       </>
     );
}
 
export default Private;