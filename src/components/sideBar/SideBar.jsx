import React, { useContext } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import NavItem from '../../UIComponents/layout/NavItem'
import TweetModal from '../tweetModal/TweetModal'
import style from './SideBar.module.scss'
import {
  TweetModelIsShow,
  ShowTweetModel,
  HideTweetModel,
} from '../../contexts/modalControlContext/ModalControlContext'
import {
  StepContext,
  ChangeTabContext,
} from '../../contexts/sideBarControlContext/SideBarControlContext'

export default function SideBar() {
  const tweetModelIsShow = useContext(TweetModelIsShow)
  const handleShowTweetModel = useContext(ShowTweetModel)
  const handleHideTweetModel = useContext(HideTweetModel)
  const step = useContext(StepContext)
  const handleChangeTab = useContext(ChangeTabContext)
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
    localStorage.removeItem('tweetId')
    localStorage.removeItem('token')
    localStorage.removeItem('userId')
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
          <Link to="/alphitter/home">
            <div className={style.logo}>
              <img alt="logo" />
            </div>
          </Link>
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
                title="??????"
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
                title="????????????"
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
                title="??????"
              />
            </NavLink>
          </div>
          <div onClick={handleShowTweetModel} className={style.tweet}>
            <img alt="tweet" />
            <div className={style.tweet__btn}>??????</div>
          </div>
        </div>
        <div onClick={() => handelSignOut()} className={style.signOut}>
          <img alt="sign-out" />
          <div className={style.btn__name}>??????</div>
        </div>
      </div>
      {tweetModelIsShow && <TweetModal onHideModel={handleHideTweetModel} />}
    </>
  )
}
