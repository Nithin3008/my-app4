import React, { useContext } from 'react'
import { LeftPane1 } from './LeftPane'
import { RightPane1 } from './RightPane'
import { DataContext } from './Context1'
import { useNavigate } from 'react-router'

export const Home1 = () => {
  const {higherVotes,incrementUpVote,incrementDownVote,intialData}=useContext(DataContext)
  const forumData=intialData;
  console.log(intialData)
  const nav=useNavigate()
  return (
    <div><nav>
        <h2>MyForum</h2>
      </nav>
      <section className='mainSection'>
        <LeftPane1></LeftPane1>
        <section >
          <h3>Latest Posts</h3>
          <div className='postsData'>
            {forumData.posts.map((postData)=>
            <ul className='postsData__main'>
              <li className='postsData__votes'>
              <svg onClick={()=>incrementUpVote(postData.postId)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={higherVotes(postData.postId)==="upvote"?"purple":"black"} stroke-width="5" stroke-linecap="square" stroke-linejoin="round"><path d="M12 19V6M5 12l7-7 7 7"/></svg>
              {Math.abs(postData.downvotes)>postData.upvotes?<p>{postData.downvotes-postData.upvotes}</p>:<p>{postData.upvotes}</p>}
              {/* <p>{postData.upvotes<post}</p> */}
              <svg onClick={()=>incrementDownVote(postData.postId)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={higherVotes(postData.postId)==="downvote"?"purple":"black"} stroke-width="5" stroke-linecap="square" stroke-linejoin="round"><path d="M12 5v13M5 12l7 7 7-7"/></svg>
              </li>
              <li className='postsData__main2'>
              <li className='postsData__postedBy'>
                <img src={postData.picUrl}></img>
                Posted by @<span style={{color:"purple"}}>{postData.username}</span>
                <span>1m</span>
              </li>
              <li className='postsData__heading'>{postData.post}</li>
              <li className='postsData__tags'>{postData.tags.map((val)=><span style={{color:"purple",backgroundColor:"#f2e5f2",borderRadius:"5px"}}>{val}</span>)}</li>
              <li className='postsData__content'> {postData.postDescription}</li>
              <hr></hr>
              <li className='postsData__interaction'>
              <svg onClick={()=>nav(`/Comment1/${postData.postId}`)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>
              </li>
              </li>
            </ul>)}
          </div>
        </section>
        <RightPane1></RightPane1>
      </section>
      
      </div>
  )
}
