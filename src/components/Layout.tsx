'use client';

import { type FC, type PropsWithChildren } from 'react';
import container from 'styles/container.module.scss';
import NavBar from 'components/navBar/NavBar';

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <div className={container.container}>
        <NavBar />
        {children}
      </div>
    </>
  );
};

export default Layout;
