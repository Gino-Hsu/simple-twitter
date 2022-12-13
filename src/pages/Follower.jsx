import React from "react";
import Follower from "../components/follow/Follower";
import UserHeader from "../UIComponents/headers/UserHeader"


// import style from "./Follower.module.scss"

export default function FollowerPage() {
  return (
    <div>
      <UserHeader name="jeff" tweetCount="20" />
      <Follower />
    </div>
  )
}