import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from '../NewsCard/NewsCard';
import { Helmet } from 'react-helmet-async';

const Category = () => {
    const {id} = useParams();

    const categoryNews = useLoaderData();
    return (
        <div>
            <Helmet>
                <title>News || The Journal Online</title>
            </Helmet>
            {/* {id && <h2>Welcome to category section: {categoryNews.length}</h2>} */}
            {
                categoryNews?.map(news => <NewsCard
                key={news._id}
                news={news}
                ></NewsCard>)
            }
        </div>
    );
};

export default Category;