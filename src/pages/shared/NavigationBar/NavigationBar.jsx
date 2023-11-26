import React, { useContext } from 'react';
import { Button, Container, Image, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import { FaRegUserCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProviders';
import "./NavigationBar.css"
import ActiveLink from '../../../components/ActiveLink/ActiveLink';
import LeftNav from '../LeftNav/LeftNav';
import { useEffect } from 'react';
import { FaBookmark } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";
import toast from 'react-hot-toast';
import { FaRegBookmark } from "react-icons/fa";

const NavigationBar = () => {

    const { user, logOut, bookmarkedList, setBookmarkedList } = useContext(AuthContext);

    useEffect(() => {
        // localStorage.setItem('recipes', JSON.stringify(bookmarkedList));
        const items = JSON.parse(localStorage.getItem('newses'));
        if (items) {
            setBookmarkedList(items);
        }
    }, []);

    const handleLogout = () => {
        logOut()
            .then()
            .catch(error => {
                console.log(error);
            })
    }

    const handleRemoveBookmarked = (book) => {
        // const items = JSON.parse(localStorage.getItem('recipes'));
        // if (items) {
        //     setItems(items);
        // }
        const removeMarked = bookmarkedList.filter(mark => mark._id !== book._id)
        setBookmarkedList(removeMarked);
        localStorage.setItem('newses', JSON.stringify(removeMarked));
        toast.error("Removed Successfully");
    }

    return (
        <>
            <Navbar className='navbar mb-4' collapseOnSelect expand="lg" style={{ backgroundColor: "#424649", color: "white" }}>
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Nav className='d-none mr-auto align-items-center phone-display-nav'>
                            {
                                user
                                    ?
                                    <div className='d-flex align-items-center '>
                                        {/* <div className='text-capitalize fw-semibold'>{user?.displayName}</div> */}
                                        <button className="position-relative mx-2 border-0 dropdown-bookmarked user-small-device" style={{ background: "none" }}>
                                            <FaRegBookmark style={{ color: "white", fontSize: "20px" }} />
                                            <span className="position-absolute translate-middle roundedCircle brand-color bg-white" style={{ border: "2px solid black", height: "20px", width: "20px", borderRadius: "50%", left: "85%", top: "10%", fontSize: "11px", fontWeight: "700", padding: "0px" }} >
                                                {bookmarkedList?.length}
                                                {/* <span className="visually-hidden">Total Bookmarked</span> */}
                                            </span>
                                            <div className="dropdown-bookmarked-content">
                                                {
                                                    bookmarkedList.length > 0
                                                        ? bookmarkedList?.map(bookmark => <p key={bookmark._id} className='bookmark-class mb-0'>
                                                            <div className='d-flex align-items-center justify-content-between '>
                                                                <div>
                                                                    <Image src={bookmark.image_url} rounded height={50} width={50}></Image>
                                                                </div>
                                                                <Link to={`/news/${bookmark._id}`} className='text-left text-decoration-none px-1 text-black'>
                                                                    <small className='text-left'>{bookmark.title}</small>
                                                                </Link>
                                                                <div>
                                                                    <button className='bg-white border-0 trash-icon' onClick={() => handleRemoveBookmarked(bookmark)}><FaRegTrashAlt /></button>
                                                                </div>
                                                            </div>
                                                        </p>)
                                                        : <p className='mb-0 p-3'>No news in your bookmark</p>
                                                }

                                            </div>
                                        </button>
                                        {/* <NavDropdown title={<FaRegUserCircle className='user-section text-white' />} id="nav-dropdown"> */}
                                            {/* <NavDropdown.Item eventKey="4.1">Dashboard</NavDropdown.Item> */}
                                            {/* <NavDropdown.Item eventKey="4.1" onClick={handleLogout}>Logout</NavDropdown.Item> */}
                                            <Button variant="light" onClick={handleLogout} ><span >Logout</span></Button>
                                        {/* </NavDropdown> */}
                                    </div>
                                    : <Link to="/login"><Button variant="light" >Login</Button></Link>
                            }

                        </Nav>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="nav-phone">
                            <ActiveLink to="/">Home</ActiveLink>
                            {/* <ActiveLink to="/about">About</ActiveLink> */}
                            {/* <ActiveLink to="/career">Career</ActiveLink> */}
                            <ActiveLink to="/trending-news">Trending News</ActiveLink>
                            <ActiveLink to="/today-news">Today News</ActiveLink>
                        </Nav>

                        <Nav className='mr-auto align-items-center lg-display-nav'>
                            {
                                user
                                    ?
                                    <div className='d-flex align-items-center '>
                                        <div className='text-capitalize fw-semibold'>{user?.displayName}</div>
                                        <button className="position-relative mx-2 border-0 dropdown-bookmarked user-small-device" style={{ background: "none" }}>
                                            <FaRegBookmark style={{ color: "white", fontSize: "20px" }} />
                                            <span className="position-absolute translate-middle roundedCircle brand-color bg-white" style={{ border: "2px solid black", height: "20px", width: "20px", borderRadius: "50%", left: "85%", top: "10%", fontSize: "11px", fontWeight: "700", padding: "0px" }} >
                                                {bookmarkedList?.length}
                                                {/* <span className="visually-hidden">Total Bookmarked</span> */}
                                            </span>
                                            <div className="dropdown-bookmarked-content">
                                                {
                                                    bookmarkedList.length > 0
                                                        ? bookmarkedList?.map(bookmark => <p key={bookmark._id} className='bookmark-class mb-0'>
                                                            <div className='d-flex align-items-center justify-content-between '>
                                                                <div>
                                                                    <Image src={bookmark.image_url} rounded height={50} width={50}></Image>
                                                                </div>
                                                                <Link to={`/news/${bookmark._id}`} className='text-left text-decoration-none px-1 text-black'>
                                                                    <small className='text-left'>{bookmark.title}</small>
                                                                </Link>
                                                                <div>
                                                                    <button className='bg-white border-0 trash-icon' onClick={() => handleRemoveBookmarked(bookmark)}><FaRegTrashAlt /></button>
                                                                </div>
                                                            </div>
                                                        </p>)
                                                        : <p className='mb-0 p-3'>No news in your bookmark</p>
                                                }

                                            </div>
                                        </button>
                                        <NavDropdown title={<FaRegUserCircle className='user-section text-white' />} id="nav-dropdown">
                                            {/* <NavDropdown.Item eventKey="4.1">Dashboard</NavDropdown.Item> */}
                                            <NavDropdown.Item eventKey="4.1" onClick={handleLogout} style={{color:"black"}}>Logout</NavDropdown.Item>
                                        </NavDropdown>
                                    </div>
                                    : <Link to="/login"><Button variant="light" >Login</Button></Link>
                            }

                        </Nav>
                    </Navbar.Collapse>

                </Container>
            </Navbar>
        </>
    );
};

export default NavigationBar;