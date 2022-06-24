/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-sequences */
/* eslint-disable react/jsx-one-expression-per-line */
import { Routes, Route, useSearchParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Wrapper from './component/Common/Wrapper';
import RegAndAuthContainer from './Container/RegAndAuthContainer';
import MainContainer from './Container/MainContainer';
import ErrorContainer from './Container/ErrorContainer';
import AuthHOC from './component/HOC/AuthHock';
import OneAdvertisementContainer from './Container/OneAdvertisementContainer';
import AddAdvertisementContainer from './Container/AddAdvertisementContainer';
import FormAddAdvertisement from './Container/FormAddAdvertisement';
import SerchContainer from './Container/SerchContainer';
/* eslint-disable react/react-in-jsx-scope */

const App = () => (
  <Routes>
    <Route path="/" element={<Wrapper />}>
      <Route index element={<MainContainer />} />
      <Route path="advertisements/:id" element={<OneAdvertisementContainer />} />
      <Route path="form/*" element={<RegAndAuthContainer />} />
      <Route
        path="advertisement"
        element={
          <AuthHOC>
            <AddAdvertisementContainer />
          </AuthHOC>
        }
      />
      <Route
        path="advertisement/add/*"
        element={
          <AuthHOC>
            <FormAddAdvertisement />
          </AuthHOC>
        }
      />
      <Route
        path="advertisement/add/:id"
        element={
          <AuthHOC>
            <FormAddAdvertisement />
          </AuthHOC>
        }
      />
      <Route path="serch/:title" element={<SerchContainer />} />
      <Route path="*" element={<ErrorContainer />} />
    </Route>
  </Routes>
);
export default App;
