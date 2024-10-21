import './App.css'
import { useEffect, useMemo, useState } from 'react';

function App() {
let [date,setDate]=useState(new Date().toLocaleTimeString())

 let[product,updateProduct] =useState([
    {id:1,name:"Realme 10 Pro", price:"20,000"},
    {id:2,name:"Realme 12 Pro", price:"25,000"},
    {id:3,name:"Redmi 13 Pro plus", price:"29,000"}
  ])

  let[searchKey,updateSearchKey]=useState("")

  let filteredProducts = useMemo(()=>{
    return product.filter((p)=>{
    return p.name.toLowerCase().includes(searchKey.toLowerCase())
    })
  },[product,searchKey])

  useEffect(
    ()=>{
      setInterval(()=>{
        setDate(new Date().toLocaleTimeString())
      })
    },[]
  )

  return (
  <>
    <div className='Container'>
      <h1>Date: </h1>
      <p>{date}</p>
      <input type='text' value={searchKey} onChange={(e)=>{
        updateSearchKey(e.target.value)
      }}/>
      <table>
        <tr>
          <th>ID</th>
          <th>NAME</th>
          <th>PRICE</th>
        </tr>
        {
          filteredProducts.map((p)=>{
            return(
              <tr key={p.id}>

                <td>{p.id}</td>
                <td>{p.name}</td>
                <td>{p.price}</td>

              </tr>
            )
          })
        }
      </table>
    </div>

  </>
  )
}

export default App;
