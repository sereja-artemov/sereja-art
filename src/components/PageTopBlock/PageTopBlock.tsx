import React from 'react';
import s from './PageTopBlock.module.scss';

function PageTopBlock({pageTitle, children}) {
  return (
    <div className={`container`}>
      <h1 className={s.title}>{pageTitle}</h1>
      {...children}
    </div>
  );
}

export default PageTopBlock;
