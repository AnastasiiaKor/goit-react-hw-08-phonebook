import { Outlet } from 'react-router-dom';
import { AppBar } from '../AppBar/AppBar';
import { Suspense } from 'react';
import { Wrapper } from './Layout.styled';

export const Layout = () => {
  return (
    <>
      <AppBar />
      <Wrapper>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </Wrapper>
    </>
  );
};
