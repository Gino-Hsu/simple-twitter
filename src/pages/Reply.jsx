import React from 'react'
import RelyList from '../components/relyList/RelyList'

export default function Reply() {
  return (
    <div>
      <RelyList
        userName="Gino"
        account="gino"
        tweet="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis dolores quaerat hic, assumenda numquam, facere, facilis rerum quod quo rem placeat dolorum incidunt sunt eveniet voluptatibus dolor neque ab? Ea."
        time="上午 10:05"
        data="2021年11月10日"
        replyCount="34"
        likeCount="808"
      />
    </div>
  )
}
