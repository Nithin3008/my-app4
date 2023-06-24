import React, { useContext } from 'react'
import { DataContext } from './Context1'

export const RightPane1 = () => {
    const {sortByTime}=useContext(DataContext)
    const filterFunc=(event)=>{
        console.log(event.target.value)
        if(event.target.value==="Latest Posts")
        {
            sortByTime()
        }
    }
  return (
    <div>
        <div >
           <p>Sort By</p>
           <select onClick={(e)=>filterFunc(e)}>
            <option></option>
            <option >Latest Posts</option>
            <option>Most Voted</option>
            </select> 
        </div>
    </div>
  )
}
