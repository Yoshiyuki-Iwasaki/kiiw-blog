import React, { FC } from 'react';
import Header from '../header';
import Meta from '../head';
import { LayoutType } from './type';
import style from './layout.module.scss';

const Presenter: FC<LayoutType> = ({ children }) => {
  return (
    <>
      <Meta />
      <Header />
      <main className={style.inner}>{children}</main>
    </>
  );
};

export default Presenter;
