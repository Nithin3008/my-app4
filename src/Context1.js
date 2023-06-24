import React, { createContext, useState } from "react";
import {forumData} from "./data"
export const DataContext = createContext();
export function DataProvider({ children }) {

    const [intialData,setData]=useState(forumData)
    function higherVotes(id)
    {
       const x= intialData.posts.find((val)=>val.postId===id)
       return x.upvotes>x.downvotes?"upvote":"downvote"
    }
    function incrementUpVote(id)
    {
        const x=intialData.posts.map((val)=>val.postId===id?{...val,upvotes:val.upvotes+1}:val)
        const z={...intialData,posts:x}
        setData(z)
    }
    function incrementDownVote(id)
    {
        const x=intialData.posts.map((val)=>val.postId===id?{...val,downvotes:val.downvotes-1}:val)
        const z={...intialData,posts:x}
        setData(z)
    }
    function sortByTime()
    {
        console.log("hello")
        const x=intialData.posts.sort((a,b)=>new Date(b.createdAt)-new Date(a.createdAt))
        const z={...intialData,posts:x}
        setData(z)
    }
    return(<>
        <DataContext.Provider value={{higherVotes,incrementUpVote,incrementDownVote,intialData,sortByTime}}>{children}</DataContext.Provider>
    </>)
}
