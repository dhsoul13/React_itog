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

const MenuTypeTwo = () => {
  const dispatch = useDispatch();
  const handlerClick = (e: React.MouseEvent): void => {
    dispatch(removeAuth(''));
  };
  const { name, isAdmin } = useSelector((state: any) => state.Auth.Auth);
  return (
    <div className="header__menu-2">
      <ul className="header__menu-2__list">
        <li className="header__menu-2__item">
          <div className="header__menu-2__item-icon">{nameSlice(name)}</div>
          <h3 className="header__menu-2__item-text">{name}</h3>
        </li>
        <li className="header__menu-2__item">
          <div className="header__menu-2__item-icon">
            <Book />
          </div>
          <h3 className="header__menu-2__item-text">Мои объявления</h3>
        </li>
        {isAdmin ? (
          <li className="header__menu-2__item">
            <div className="header__menu-2__item-icon">
              <Grid />
            </div>
            <h3 className="header__menu-2__item-text">Админ Панель</h3>
          </li>
        ) : (
          ''
        )}
        <li className="header__menu-2__item" onClick={handlerClick}>
          <div className="header__menu-2__item-icon">
            <Exit />
          </div>
          <h3 className="header__menu-2__item-text">Выход</h3>
        </li>
      </ul>
    </div>
  );
};

export default MenuTypeTwo;
