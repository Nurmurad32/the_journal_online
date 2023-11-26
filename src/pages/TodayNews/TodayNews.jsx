import useData from '../../hook/useData';
import NewsCard from '../Home/NewsCard/NewsCard';
import { Helmet } from 'react-helmet-async';

const TodayNews = () => {
    const newsData = useData("https://the-journal-online-server-nurmurad32.vercel.app/news");
    const todyNewsFilter = newsData?.filter(news => news.others_info.is_todays_pick === true);
    console.log(todyNewsFilter);
    return (
        <div>
            <Helmet>
                <title>Today News || The Journal Online</title>
            </Helmet>
            {todyNewsFilter &&
                todyNewsFilter?.map(news => <NewsCard
                    key={news._id}
                    news={news}
                ></NewsCard>)
            }
        </div>
    );
};

export default TodayNews;