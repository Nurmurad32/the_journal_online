import { Helmet } from 'react-helmet-async';
import useData from '../../hook/useData';
import NewsCard from '../Home/NewsCard/NewsCard';

const TrendingNews = () => {

    const newsData = useData("http://localhost:3000/news");

    const trendyNewsFilter = newsData?.filter(news => news.others_info.is_trending === true);
    console.log(trendyNewsFilter);
    return (
        <div>
            <Helmet>
                <title>Tranding News || The Journal Online</title>
            </Helmet>
            {trendyNewsFilter &&
                trendyNewsFilter?.map(news => <NewsCard key={news._id}
                    news={news}
                ></NewsCard>)
            }
        </div>
    );
};

export default TrendingNews;