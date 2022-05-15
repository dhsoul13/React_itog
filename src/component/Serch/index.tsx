/* eslint-disable react/require-default-props */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react';
import Search from 'antd/lib/input/Search';

type SerchComponentType = {
  style?: React.CSSProperties;
  placeholder?: string;
};
const SerchComponent = ({ style, placeholder = '' }: SerchComponentType) => (
  <>
    <Search placeholder={placeholder} allowClear style={style} enterButton="Искать" />
  </>
);

export default SerchComponent;
