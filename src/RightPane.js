import React, { useContext } from 'react'
import { DataContext } from './Context1'

export const RightPane1 = () => {
    const {sortByTime,sortByVotes}=useContext(DataContext)
    const filterFunc=(event)=>{
        console.log(event.target.value)
        if(event.target.value==="Latest Posts")
        {
            sortByTime()
        }
        else if(event.target.value==="Most Upvoted")
        {
            sortByVotes()
        }
    }
  return (
    <div>
        <div >
           <p>Sort By</p>
           <select onClick={(e)=>filterFunc(e)}>
            <option></option>
            <option >Latest Posts</option>
            <option>Most Upvoted</option>
            </select> 
        </div>
    </div>
  )
}
