import {  createBrowserRouter } from 'react-router-dom';
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
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: 'category/:id',
                element: <Category></Category>,
                loader: ({ params }) => fetch(`https://the-journal-online-server-nurmurad32.vercel.app/category/${params.id}`)
            },
            
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
        path: '/',
        element: <LoginLayout></LoginLayout>,
        children: [
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
        path: 'news',
        element: <NewsLayout></NewsLayout>,
        children: [
            {
                path: ':id',
                element: <PrivateRoute><News></News></PrivateRoute>,
                loader: ({ params }) => fetch(`https://the-journal-online-server-nurmurad32.vercel.app/news/${params.id}`)
            }
        ]
    },
    {
        path: '*',
        element: <div style={{ height: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <h2>Page Not Found</h2>
        </div>
    },

])

export default router;