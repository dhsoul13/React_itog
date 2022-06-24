import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import RegAndAuthPage from '../../component/Page/RegAndAuthPage';

const RegAndAuthContainer = () => {
  const navigate = useNavigate();
  const { isAuth } = useSelector((state: any) => state.Auth.Auth);
  useEffect(() => {
    if (isAuth) {
      navigate('/');
    }
  }, [isAuth]);
  return (
    <div>
      <RegAndAuthPage />
    </div>
  );
};

export default RegAndAuthContainer;
