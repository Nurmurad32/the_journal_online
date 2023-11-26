import moment from 'moment';
import { useContext, useState } from 'react';
import { Button, Card, Image } from 'react-bootstrap';
import { FaEye, FaRegStar, FaShareAlt, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProviders';
import toast from 'react-hot-toast';
import { MdBookmarkAdded } from "react-icons/md";
import { MdOutlineBookmarkAdd } from "react-icons/md";
import { ShareSocial } from 'react-share-social'
import "./NewsCard.css"

const NewsCard = ({ news }) => {

    const { _id, title, details, image_url, author, total_view, rating } = news;
    const { bookmarkedList, setBookmarkedList } = useContext(AuthContext);
    const [bookmarked, setBookmarked] = useState(false);

    const handleBookmarked = (news) => {
        let newBookMarked = [...bookmarkedList, news]
        setBookmarkedList(newBookMarked)
        localStorage.setItem('newses', JSON.stringify(newBookMarked));

        setBookmarked(!bookmarked)
        if (bookmarked) {
            toast.error("You removed from bookmarked")
        } else { toast.success("You bookmarked successfully") }
    }
    return (
        <Card className="mb-4">
            <Card.Header className='d-flex align-items-center'>
                <Image style={{ height: '40px' }} src={author?.img} roundedCircle />
                <div className='ps-2 flex-grow-1'>
                    <p className='mb-0'>{author?.name}</p>
                    <p className='mb-0'><small>{moment(author?.published_date).format('yyyy-MM-D')}</small></p>
                </div>
                <div className='d-flex'>
                    {/* <FaRegBookmark></FaRegBookmark>  */}
                    {/* <Button className="card-text d-flex align-items-center mb-0 bg-white border-0" onClick={() => */}
                    <Button className="card-text d-flex align-items-center mb-0 border-0" style={{ backgroundColor: "#F7F7F7" }} onClick={() => handleBookmarked(news)} disabled={bookmarked === true}>
                        {bookmarked
                            ? <MdBookmarkAdded style={{ color: "black", fontSize: "25px" }} />
                            : <MdOutlineBookmarkAdd style={{ color: "black", fontSize: "25px" }} />}
                    </Button>
                    <div>
                        <Button className="mb-0 border-0 social-share-dropdown" style={{ backgroundColor: "#F7F7F7" }}>
                            <FaShareAlt style={{ color: "black", fontSize: "20px" }} className='' />
                            <div className="social-share-dropdown-content">
                                <ShareSocial
                                    title={'Share this news in your feed'}
                                    url={`http://localhost:5173/news/${_id}`}
                                    socialTypes={['facebook', 'twitter', 'linkedin', 'reddit']}
                                />
                            </div>
                        </Button>

                    </div>
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img variant="top" src={image_url} />
                <Card.Text>
                    {
                        details?.length < 250
                            ? <>{details}</>
                            : <>{details.slice(0, 250)}... <Link to={`/news/${_id}`}>Read More</Link></>
                    }
                </Card.Text>
            </Card.Body>
            {/* <Card.Footer className="text-muted d-flex">
                <div className='flex-grow-1'>
                    <Rating
                        placeholderRating={rating?.number}
                        readonly
                        emptySymbol={<FaRegStar></FaRegStar>}
                        placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                        fullSymbol={<FaStar></FaStar>}
                    />
                    <small style={{ marginTop: "2px", marginLeft: "5px" }}>{rating?.number}</small>
                </div>
                <div>
                    <FaEye></FaEye><small style={{ marginTop: "3px", marginLeft: "5px" }}>{total_view}</small>
                </div>

            </Card.Footer> */}
        </Card>
    );
};

export default NewsCard;