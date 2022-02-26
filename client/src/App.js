import axios from 'axios'
import { useState } from 'react';
import { useEffect } from 'react';
import Private from './Private'


const App = () => {

  const [state,setState] = useState({
    user:null,
    token:null
  })

  const  loginUser = async ()=>{
   try {
     const {data:{user,token}} = await axios.post('http://localhost:8001/login', {
       email: "kartik@gmail.com",
       password: "password"
     })

     setState({
       user,token
     })
   } catch (error) {
     console.log(error.message)
   }
  }

  useEffect(()=>{
    loginUser()
  },[])


  console.log(state)
  return ( 
    <div>
     <Private comp state={state} />

    </div>
   );
}
 
export default App;