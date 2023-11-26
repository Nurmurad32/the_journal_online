import React from 'react';
import { Navigate, createBrowserRouter } from 'react-router-dom';
import Main from '../layouts/Main';
import Home from '../pages/Home/Home/Home';
import Category from '../pages/Home/Category/Category';
import NewsLayout from '../layouts/NewsLayout';
import News from '../pages/News/News/News';
import LoginLayout from '../layouts/LoginLayout';
import Login from '../pages/Login/Login/Login';
import Register from '../pages/Login/Register/Register';
import PrivateRoute from './PrivateRoute';
import Terms from '../pages/shared/terms/terms';
import About from '../pages/About/About';
import Career from '../pages/Career/Career';
import TodayNews from '../pages/TodayNews/TodayNews';
import TrendingNews from '../pages/TrendingNews/TrendingNews';

const router = createBrowserRouter([
    {
        path: '/',
        element: <LoginLayout></LoginLayout>,
        children: [
            {
                path: '/',
                element: <Navigate to="/category/0"></Navigate>,
            },
            
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/terms',
                element: <Terms></Terms>
            }
        ]
    },
    {
        path: 'category',
        element: <Main></Main>,
        children: [
            {
                path: ':id',
                element: <Category></Category>,
                loader: ({ params }) => fetch(`http://localhost:3000/category/${params.id}`)
            }

        ]
    },
    {
        path: 'news',
        element: <NewsLayout></NewsLayout>,
        children: [
            {
                path: ':id',
                element: <PrivateRoute><News></News></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:3000/news/${params.id}`)
            }
        ]
    },
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: 'today-news',
                element: <TodayNews></TodayNews>,

            },
            {
                path: 'trending-news',
                element: <TrendingNews></TrendingNews>,

            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/career',
                element: <Career></Career>
            },

        ]
    },
    {
        path: '*',
        element: <div style={{height:"100vh", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
            <h2>Page Not Found</h2>
            <button onClick={<Navigate to="/category/0"></Navigate>}>Go to Home</button>
        </div>
    },

])

export default router;