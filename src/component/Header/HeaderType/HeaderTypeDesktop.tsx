/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useCallback, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import PersonIcon from '../../../assets/Icon/person';
import ButtonComponent from '../../Button';
import SerchComponent from '../../Serch';
import MenuTypeOne from '../MenuType/MenuTypeOne';

type HeaderTypeDesktopType = {
  isAuth: boolean;
};

const HeaderTypeDesktop = ({ isAuth }: HeaderTypeDesktopType) => {
  const refEl = useRef<HTMLInputElement | null>(null);
  const activeEl = useCallback(() => {
    refEl.current?.classList.toggle('active');
  }, []);
  return (
    <div className="header-desktop__content">
      <div className="header-desktop__img">
        <NavLink to="/">
          <img src="../img/logo.png" alt="" />
        </NavLink>
      </div>
      <div className="header-desktop__serch ">
        <SerchComponent style={{ width: '100%' }} />
      </div>
      <div className="header-desktop__button">
        <ButtonComponent
          title="Подать объявление"
          style={{ width: '100%', background: 'rgba(255, 172, 40, 1' }}
        />
      </div>
      <div className="header-desktop__entrance">
        {isAuth ? (
          <>
            <div className="header-desktop__icon">
              <PersonIcon />
            </div>
            <h2 className="header-desktop__link" ref={refEl} onClick={activeEl}>
              Профиль
            </h2>
            <MenuTypeOne />
          </>
        ) : (
          <>
            <div className="header-desktop__icon">
              <PersonIcon />
            </div>
            <h2 className="header-desktop__link-v">
              <NavLink to="/form/auth">Войти</NavLink>
            </h2>
          </>
        )}
      </div>
    </div>
  );
};

export default HeaderTypeDesktop;
