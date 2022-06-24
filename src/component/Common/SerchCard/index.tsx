import React from 'react';
import SpinCastom from '../Spin';

type SerchCardType = {
  el: any;
};

const SerchCard = ({ el }: SerchCardType) => {
  const a = 5;

  return (
    <div className="serch__item">
      <h3 className="serch__item-title">{el.title}</h3>
      <p className="serch__item-text">{el.text ? el.text : 'Нет текста'}</p>
      <h4 className="serch__item-date">{el.date}</h4>
    </div>
  );
};

export default SerchCard;
