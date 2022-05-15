/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-sequences */
/* eslint-disable react/jsx-one-expression-per-line */

import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Footer from './component/Footer';
import Header from './component/Header';
import Wrapper from './component/Wrapper';
import MainPage from './Page/Main';
import RegAndAuthContainer from './Container/RegAndAuthContainer';
import ErrorContainer from './Container/ErrorContainer';
import { fetchUser } from './store/slice/AsyncAuth';

/* eslint-disable react/react-in-jsx-scope */
const App = () => {
  const dispatch = useDispatch();
  return (
    <Routes>
      <Route path="/" element={<Wrapper />}>
        <Route index element={<MainPage />} />
        <Route path="form/*" element={<RegAndAuthContainer />} />
        <Route path="*" element={<ErrorContainer />} />
      </Route>
    </Routes>
  );
};

export default App;
