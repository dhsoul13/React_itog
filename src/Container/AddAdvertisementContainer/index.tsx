import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import AddAdvertisementPage from '../../component/Page/AddAdvertisementPage';
import { useSelectorGet } from '../../hooks/useDateAdd';

const AddAdvertisementContainer = () => {
  const dispatch = useDispatch();
  const data = useSelectorGet('Data', 'Data');
  return <AddAdvertisementPage data={data} />;
};

export default AddAdvertisementContainer;
