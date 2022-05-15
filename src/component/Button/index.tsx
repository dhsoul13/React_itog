/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/require-default-props */
/* eslint-disable react/no-unused-prop-types */
import React from 'react';
import { Button } from 'antd';

type ButtonComponentType = {
  style?: React.CSSProperties;
  onClick?: () => any;
  title?: string;
};

const ButtonComponent = ({ style, onClick, title }: ButtonComponentType) => {
  const a = 1;
  return (
    <Button className="header__button" style={style} onClick={onClick}>
      {title}
    </Button>
  );
};

export default ButtonComponent;
