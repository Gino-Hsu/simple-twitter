import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import NavItem from '../../UIComponents/layout/NavItem'
import TweetModal from '../tweetModal/TweetModal'
import style from './SideBar.module.scss'

export default function SideBar({
  step,
  handleChangeTab,
  handleShowTweetModel,
  handleHideModel,
  tweetModelIsShow,
}) {
  const navigate = useNavigate()
  const handelClickHome = () => {
    handleChangeTab('home')
  }

  const handelClickUser = () => {
    handleChangeTab('user')
  }

  const handelClickSetting = () => {
    handleChangeTab('setting')
  }

  const handelSignOut = () => {
    localStorage.removeItem('token')
    navigate('/login')
  }

  return (
    <>
      <div className={style.mobile}>
        <NavLink
          onClick={handelClickHome}
          className={style.btn__link}
          to="/alphitter/home"
        >
          <NavItem
            iconStyle={step === 'home' ? 'icon__home__action' : 'icon__home'}
            altName="home"
            onClick={() => handelClickHome()}
          />
        </NavLink>
        <NavItem
          handleShowTweetModel={handleShowTweetModel}
          handleHideModel={handleHideModel}
          tweetModelIsShow={tweetModelIsShow}
          iconStyle="icon__tweet"
          altName="tweet"
        />
        <NavLink
          onClick={handelClickUser}
          className={style.btn__link}
          to="/alphitter/user/self/tweet"
        >
          <NavItem
            iconStyle={step === 'user' ? 'icon__user__action' : 'icon__user'}
            onClick={() => handelClickUser()}
          />
        </NavLink>

        <NavLink
          onClick={handelClickSetting}
          className={style.btn__link}
          to="/setting"
        >
          <NavItem
            iconStyle={
              step === 'setting' ? 'icon__setting__action' : 'icon__setting'
            }
            onClick={() => handelClickSetting()}
          />
        </NavLink>
      </div>
      <div className={style.nav__container}>
        <div className={style.main}>
          <div className={style.logo}>
            <img alt="logo" />
          </div>
          <div className={style.menu}>
            <NavLink
              onClick={handelClickHome}
              className={style.btn__link}
              to="/alphitter/home"
            >
              <NavItem
                iconStyle={
                  step === 'home' ? 'icon__home__action' : 'icon__home'
                }
                textStyle={step === 'home' ? 'title__action' : 'title'}
                altName="home"
                title="首頁"
              />
            </NavLink>
            <NavLink
              onClick={handelClickUser}
              className={style.btn__link}
              to="/alphitter/user/self/tweet"
            >
              <NavItem
                iconStyle={
                  step === 'user' ? 'icon__user__action' : 'icon__user'
                }
                textStyle={step === 'user' ? 'title__action' : 'title'}
                altName="user"
                title="個人資料"
              />
            </NavLink>
            <NavLink
              onClick={handelClickSetting}
              className={style.btn__link}
              to="/setting"
            >
              <NavItem
                iconStyle={
                  step === 'setting' ? 'icon__setting__action' : 'icon__setting'
                }
                textStyle={step === 'setting' ? 'title__action' : 'title'}
                altName="setting"
                title="設定"
              />
            </NavLink>
          </div>
          <div onClick={handleShowTweetModel} className={style.tweet}>
            <img alt="tweet" />
            <div className={style.tweet__btn}>推文</div>
          </div>
          {tweetModelIsShow && (
            <TweetModal onHideTweetModel={handleHideModel} />
          )}
        </div>
        <div onClick={() => handelSignOut()} className={style.signOut}>
          <img alt="sign-out" />
          <div className={style.btn__name}>登出</div>
        </div>
      </div>
    </>
  )
}
