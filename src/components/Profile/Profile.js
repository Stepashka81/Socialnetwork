import React from "react";
import Myposts from "./Myposts/Myposts.js"


const Profile=()=>{
    return (
      <>
        <div>
          <img src='https://picsum.photos/id/11/1000/250' ></img>
        </div>
        <div>
          <img src="https://picsum.photos/id/64/50/50"></img>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
          </p>
        </div>
        <Myposts/>
        
      </>
    )
}
export default Profile