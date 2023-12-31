import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Loading from '../component/Loading/index';

interface routerType {
  name: string;
  path: string;
  hideMenu?: boolean;
  element?: any;
}

export const routersList: routerType[] = [
  {
    name: '主页',
    path: '/',
    element: React.lazy(() => import('../pages/studio/Studio')),
  },
  {
    name: '主页',
    path: '/studio',
    element: React.lazy(() => import('../pages/studio/Studio')),
  },
  {
    name: 'java',
    path: '/studio/java',
    element: React.lazy(() => import('../pages/studio/java/java')),
  },
  {
    name: 'fe',
    path: '/studio/fe',
    element: React.lazy(() => import('../pages/studio/fe/fe')),
  },
  {
    name: 'android',
    path: '/studio/android',
    element: React.lazy(() => import('../pages/studio/android/android')),
  },
  {
    name: 'new',
    path: '/new',
    element: React.lazy(() => import('../pages/new/new')),
  },
  {
    name: 'helper',
    path: '/helper',
    element: React.lazy(() => import('../pages/helper/helper')),
  },
  {
    name: 'download',
    path: '/download',
    element: React.lazy(() => import('../pages/download/wusthelper/download')),
  },
  {
    name: 'connect',
    path: '/connect',
    element: React.lazy(() => import('../pages/connect/connect')),
  },
  {
    name: 'ach',
    path: '/ach',
    element: React.lazy(() => import('../pages/ach/ach')),
  },
  {
    name: 'detail',
    path: '/ach/detail/:type',
    element: React.lazy(() => import('../pages/ach/detail/detail')),
  },
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
