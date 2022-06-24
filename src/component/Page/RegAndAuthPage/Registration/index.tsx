/* eslint-disable no-unused-expressions */
/* eslint-disable object-curly-newline */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable eqeqeq */
/* eslint-disable react/no-unknown-property */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-props-no-spreading */
import { Checkbox } from 'antd';
import { Formik, Form } from 'formik';
import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { validate } from '../../../../helpers/validate';
import Show from '../../../Common/Button/ShowInput/index';
import { addAuth, removeAuth } from '../../../../store/slice/AuthSlice';
import NavLinks from '../common/NavLinks';

interface MyFormValues {
  name: string;
  lastname: string;
  password: string;
  confirmPassword: string;
  email: string;
  check: string;
}

const Registration = () => {
  const dispatch = useDispatch();
  const [showPass, setShowPass] = useState(false);
  const [showPassConfig, setShowPassConfig] = useState(false);
  const showPassHandler = useCallback(() => {
    setShowPass(!showPass);
  }, [showPass]);
  const showPassConfigHandler = useCallback(() => {
    setShowPassConfig(!showPassConfig);
  }, [showPassConfig]);
  const initialValues: MyFormValues = {
    name: '',
    lastname: '',
    password: '',
    confirmPassword: '',
    email: '',
    check: '',
  };
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
          dispatch(addAuth(value.name));
          dispatch(removeAuth(null));
          console.log(value);
        }}
        validationSchema={validate}>
        {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
          <Form className="form" onSubmit={handleSubmit}>
            <p className={`p name ${values.name == '' ? '' : 'act'}`}>
              <input
                className={`form__input name ${touched.name && errors.name && 'err'}`}
                type="text"
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                placeholder="Имя"
              />
            </p>
            <p className={`p lastname ${values.lastname == '' ? '' : 'act'}`}>
              <input
                className={`form__input ${touched.lastname && errors.lastname && 'err'}`}
                type="text"
                name="lastname"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.lastname}
                placeholder="Фамилия"
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
            <p className={`p configpassword ${values.confirmPassword == '' ? '' : 'act'}`}>
              <input
                className={`form__input ${
                  touched.confirmPassword && errors.confirmPassword && 'err'
                }`}
                type={showPassConfig ? 'text' : 'password'}
                name="confirmPassword"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.confirmPassword}
                placeholder="Повторите пароль"
              />
              <Show onClick={showPassConfigHandler} />
            </p>
            <p className={`p email ${values.email == '' ? '' : 'act'}`}>
              <input
                className={`form__input ${touched.email && errors.email && 'err'}`}
                type="text"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                placeholder="Email"
              />
            </p>
            <p>
              <Checkbox onChange={handleChange} name="check" className="form__terms">
                Принимаю условия <br />
                <a href="/">Пользовательского соглашения</a>
              </Checkbox>
            </p>
            <button
              disabled={isValid && !dirty}
              type="submit"
              className={`form__button ${isValid && dirty ? '' : 'err'}`}>
              Создать аккаунт
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Registration;
