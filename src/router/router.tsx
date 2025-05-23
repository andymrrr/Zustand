import { createBrowserRouter } from 'react-router-dom';

import { Root } from '../Root';
import { AuthLayout, DashboardLayout } from '../layouts';
import {  Dashboard, JiraPage, LoginPage, OsosPagina, PersonPage, WeddingInvitationPage } from '../pages';


export const router = createBrowserRouter( [
  {
    path: '/',
    element: <Root />,
    children: [
      /// Dashboard Routes
      {
        path: 'dashboard',
        element: <DashboardLayout />,
        children: [
          {
            path: '',
            element: <Dashboard />
          },
          {
            path: 'bears',
            element: <OsosPagina />
          },
          {
            path: 'person',
            element: <PersonPage />
          },
          {
            path: 'tasks',
            element: <JiraPage />
          },
          {
            path: 'wedding-invitation',
            element: <WeddingInvitationPage />
          }

        ]
      },

      /// Auth Routes
      {
        path: 'auth',
        element: <AuthLayout />,
        children: [
          {
            path: 'login',
            element: <LoginPage />
          }
        ]

      },

    ],
  },
] );