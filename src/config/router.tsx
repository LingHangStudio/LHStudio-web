import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Loading from '../component/Loading/index';
// import Loading from '@/component/Loading';

interface routerType {
  name: string;
  path: string;
  hideMenu?: boolean;
  element?: any;
}

export const routersList: routerType[] = [
  {
    name: '主页',
    path: '/studio',
    element: React.lazy(() => import('../pages/studio/Studio'))
  },
  {
    name: 'java',
    path: '/java',
    element: React.lazy(() => import('../pages/studio/java/java'))
  },
  {
    name: 'android',
    path: '/android',
    element: React.lazy(() => import('../pages/studio/android/android'))
  }
];

export const Router = () => {
  return (
    <React.Suspense fallback={<Loading />}>
      <Routes>
        {routersList.map((item) => {
          return <Route path={item.path} Component={item.element} />;
        })}
      </Routes>
    </React.Suspense>
  );
};
