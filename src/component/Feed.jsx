import React from 'react'
import { useSelector } from 'react-redux';
import { BASE_URL } from '../utils/constant';


const Feed = () => {
  const user= useSelector((store)=>store.user);
  return (
    
    <>
    
    <div className="card bg-base-100 w-96 shadow-xl">
  <figure className="px-10 pt-10">
    <img
      src={user.image}
      alt="{user.firstName}"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{user.firstName}</h2>
    <p>{user.email}</p>
    <p>{BASE_URL}</p>
    <div className="card-actions">
      <button className="btn btn-primary" >Buy Now</button>
    </div>
  </div>
</div>
    </>
  )
}

export default Feed