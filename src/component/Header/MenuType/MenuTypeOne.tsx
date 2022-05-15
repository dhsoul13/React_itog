/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Book from '../../../assets/Icon/book';
import Exit from '../../../assets/Icon/exit';
import Grid from '../../../assets/Icon/grid';
import { nameSlice } from '../../../helpers/NameSlice';
import { removeAuth } from '../../../store/slice/AuthSlice';

const MenuTypeOne = () => {
  const dispatch = useDispatch();
  const handlerClick = (e: React.MouseEvent): void => {
    dispatch(removeAuth(''));
  };
  const { name, isAdmin } = useSelector((state: any) => state.Auth.Auth);
  return (
    <div className="header__menu-1">
      <ul className="header__menu-1__list">
        <li className="header__menu-1__item">
          <div className="header__menu-1__item-icon">{nameSlice(name)}</div>
          <h3 className="header__menu-1__item-text">{name}</h3>
        </li>
        <li className="header__menu-1__item">
          <div className="header__menu-1__item-icon">
            <Book />
          </div>
          <h3 className="header__menu-1__item-text">Мои объявления</h3>
        </li>
        {isAdmin ? (
          <li className="header__menu-1__item">
            <div className="header__menu-1__item-icon">
              <Grid />
            </div>
            <h3 className="header__menu-1__item-text">Админ Панель</h3>
          </li>
        ) : (
          ''
        )}
        <li className="header__menu-1__item" onClick={handlerClick}>
          <div className="header__menu-1__item-icon">
            <Exit />
          </div>
          <h3 className="header__menu-1__item-text">Выход</h3>
        </li>
      </ul>
    </div>
  );
};

export default MenuTypeOne;
