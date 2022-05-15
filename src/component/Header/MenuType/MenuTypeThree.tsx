import React, { useCallback, useRef } from 'react';

const MenuTypeThree = () => {
  const refEl = useRef<HTMLInputElement | null>(null);
  const activeEl = useCallback(() => {
    refEl.current?.classList.toggle('active');
  }, []);
  return (
    <div className="header-mobile__content">
      <div>fdfd</div>
    </div>
  );
};

export default MenuTypeThree;
