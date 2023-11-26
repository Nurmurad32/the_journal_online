import { Helmet } from 'react-helmet-async';
import NewsCard from '../NewsCard/NewsCard';
import { useLoaderData } from 'react-router-dom';
import useData from '../../../hook/useData';

const Home = () => {
    const allData = useData('https://the-journal-online-server-nurmurad32.vercel.app/news')
    
    console.log(allData)
    return (
        <div>
             <Helmet>
                <title>Home || The Journal Online</title>
            </Helmet>
            {/* {allData && <h2>Welcome to category section: {allData.length}</h2>} */}
            {
                allData?.map(news => <NewsCard
                key={news._id}
                news={news}
                ></NewsCard>)
            }
        </div>
    );
};

export default Home;