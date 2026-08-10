import React, { useState } from 'react'
import axios from 'axios'

function App() {

  // using fetchAPI : replacement for this is axios
//   async function getRes(){
//   const res = await fetch("http://localhost:8000/")
//   let data = await res.json()
//   .catch((e) => {
//     console.log(e)
//   })
// }

// axios get used to get data from server

// axios.get("http://localhost:8000/")
// .then((e) => {
//   console.log(e.data)
// })
// .catch((e)=>{
//   console.log(e)
// })



// axios post
// data send from here will be stored in the req.body

let [username,setUsername] = useState(null)
  let [age, setAge] = useState(null)
  let [city, setCity ] = useState(null)
  let [employment , setEmployment] = useState(null)



async function getRes() {
axios.post("http://localhost:8000/",{
  username:username,
  city:city,
  age: age,
  employment: employment   //can also write it once so it will know that key and value both are same
})
.then((e) => {
  console.log(e.data)
})
.catch((e)=>{
  console.log(e)
})
}
  return (
    <>
    <input type="text" placeholder='usename' value={username} onChange={(e)=> setUsername(e.target.value)} />
    <input type="text" placeholder='city' value={city} onChange={(e)=> setCity(e.target.value)} />
    <input type="text" placeholder='age' value={age} onChange={(e)=> setAge(e.target.value)}/>
    <input type="text" placeholder='employment status' value={employment} onChange={(e) => setEmployment(e.target.value)}/>
<button onClick={()=>getRes()}>send</button>
    </>
  )
}

export default App
