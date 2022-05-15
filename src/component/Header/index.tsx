/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-expressions */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-undef */
/* eslint-disable react/style-prop-object */
import Search from 'antd/lib/input/Search';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ButtonComponent from '../Button';
import SerchComponent from '../Serch';
import { addAuth } from '../../store/slice/AuthSlice';
import HeaderTypeDesktop from './HeaderType/HeaderTypeDesktop';
import MenuTypeOne from './MenuType/MenuTypeOne';
import HeaderTypeLaptop from './HeaderType/HeaderTypeLaptop';
import HeaderTypeMobile from './HeaderType/HeaderTypeMobile';

const Header = () => {
  const Auth = useSelector((state: any) => state.Auth.Auth);
  const { isAuth, name } = Auth;
  const navigate = useNavigate();
  const handlerClick = () => {
    if (isAuth) {
      alert(1);
    } else {
      navigate('/form/auth');
    }
  };
  return (
    <header className="header">
      <div className="header__container container">
        <div className="header-desktop">
          <HeaderTypeDesktop isAuth={isAuth} />
        </div>
        <div className="header-laptop">
          <HeaderTypeLaptop isAuth={isAuth} />
        </div>
        <div className="header-mobile">
          <HeaderTypeMobile isAuth={isAuth} />
        </div>
      </div>
    </header>
  );
};

export default Header;
