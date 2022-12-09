import React from "react";
import style from './TweetListItem.module.scss'


export default function TweetListItem() {
  return (
    <div className={style.listItem__container}>
      <div className={style.listItem__avatar}>
        <div>
          <img src="" alt="user avatar" />
        </div>
      </div>
      <div className={style.listItem__info}>
        <div className={style.info__account}>
          <p>Apple</p>
          <span>@apple . 3小時</span>
        </div>
        <div className={style.info__tweet}>
          <p>
            hdjksfhsdajkghfkljas dkfjdj djvlksdjdlkajl; djfldksajflkdsjfl;
            dfdsklfjlds dsjflkdsfjkld dsfjlsdjfl;
            dsfldsafjla;hvljashfgldhslgkjhdsjkahdjsahgjadshvldsjfd;sjfouevdshvhasdo;fhhadhgvosagh;
          </p>
        </div>
        <div className={style.info__icons}>
          <div className={style.icon__reply}>
            <div>
              <img className="" alt="reply button" />
            </div>
            <span>25</span>
          </div>
          <div className={style.icon__like}>
            <div>
              <img className="" alt="like button" />
            </div>
            <span>56</span>
          </div>
        </div>
      </div>
    </div>
  )
}