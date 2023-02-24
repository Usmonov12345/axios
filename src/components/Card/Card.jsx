import { useEffect } from "react"
import { useState } from "react"
import Spiner from '../Spiner/Spiner'
import axios from "axios"
import List from "../List"
function Card() {
   
  let [state , setState] = useState({
      
    isLoding: true,
    user:null
  })
  
  let getUser = async () => {
    let data = await axios('https://reqres.in/api/users?page=2')
    return data
   }
   
   
   useEffect(() => {
      getUser().then((res) => {
          let user = res.data.data;
          setState({ user:user  , isLoding:false });
      })
   }, [])
  return (
    <div className="card" style={{display:'flex', flexWrap:'wrap', justifyContent:'space-between',gap:'40px', marginTop:'100px',textAlign:'center'}}>
        {
          state.isLoding ? 
          ( <Spiner/> ):
          (
            state.user.map((user) => {
              return <List key={user.id} user={user}/>
            })
          )
        }
    </div>
    
  )
}

export default Card