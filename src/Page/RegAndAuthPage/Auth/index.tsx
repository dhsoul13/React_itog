/* eslint-disable react/jsx-indent */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-cond-assign */
/* eslint-disable no-param-reassign */
/* eslint-disable array-callback-return */
/* eslint-disable no-shadow */
/* eslint-disable object-curly-newline */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable eqeqeq */
/* eslint-disable react/no-unknown-property */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-props-no-spreading */
import { Checkbox } from 'antd';
import { Formik, Form } from 'formik';
import React, { useCallback, useState } from 'react';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { validateAuth } from '../../../assets/validate';
import Show from '../../../component/Button/ShowInput';
import NavLinks from '../common/NavLinks';
import { users } from '../../../helpers/data';
import { addAuth } from '../../../store/slice/AuthSlice';

interface MyFormValues {
  password: string;
  email: string;
}

const Auth = () => {
  const dispatch = useDispatch();
  const Auth = useSelector((state: any) => state.Auth.Auth);
  const { isAuth } = Auth;
  const initialValues: MyFormValues = {
    email: '',
    password: '',
  };
  const [showPass, setShowPass] = useState(false);
  const [showError, setShowError] = useState(false);
  const showPassHandler = useCallback(() => {
    setShowPass(!showPass);
  }, [showPass]);
  return (
    <div className="form__body">
      <div className="form__header">
        <h2>Hello world</h2>
        <span>Создайте аккаунт</span>
      </div>
      <NavLinks />
      <Formik
        initialValues={initialValues}
        validateOnBlur
        onSubmit={(value: MyFormValues) => {
          const user = users.filter(
            (el) => el.email === value.email && el.password === value.password
          );
          if (user.length) {
            setShowError(true);
            dispatch(
              addAuth({
                isAuth: true,
                isAdmin: user[0].admin,
                name: user[0].name,
                email: user[0].email,
              })
            );
            console.log(user);
            console.log(value);
            <Navigate to="/" />;
          } else {
            setShowError(false);
          }
        }}
        validationSchema={validateAuth}>
        {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
          <Form className="form" onSubmit={handleSubmit}>
            <p>{!showError ? '' : 'Неправильный пароль/email'}</p>
            <p className={`p email ${values.email == '' ? '' : 'act'}`}>
              <input
                type="text"
                name="email"
                className={`form__input ${touched.email && errors.email && 'err'}`}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                placeholder="Email"
              />
            </p>
            <p className={`p password ${values.password == '' ? '' : 'act'}`}>
              <input
                className={`form__input ${touched.password && errors.password && 'err'}`}
                type={showPass ? 'text' : 'password'}
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                placeholder="Пароль"
              />
              <Show onClick={showPassHandler} />
            </p>
            <button
              disabled={isValid && !dirty}
              type="submit"
              className={`form__button ${isValid && dirty ? '' : 'err'}`}>
              Войти
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Auth;
