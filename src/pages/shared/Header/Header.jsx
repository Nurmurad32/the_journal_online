import logo from '../../../assets/logo.png'
import moment from 'moment';
import Marquee from "react-fast-marquee";
import { Button, Container } from 'react-bootstrap';
import './Header.css'

const Header = () => {

    return (
        <Container>
            <div className='d-flex justify-content-between align-items-center header-section'>
                <div>
                    <p className='text-secondary header-section-journal-text'>Journalism Without Fear or Favour</p>
                </div>
                <div className='logo-text'>
                    <img src={logo} alt="" style={{height:"90px"}} />
                </div>
                <div>
                    <p className='text-secondary'>
                        {moment().format("dddd, MMMM D, YYYY")}
                    </p>
                </div>
            </div>
            <div className='d-flex header-marquee'>
                <Button className="header-btn" variant="danger" >Latest</Button>
                <Marquee>
                    Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain. and also  Match Highlights: Brazil vs Spain — as it happened   !   Match Highlights: argentina vs Spain
                </Marquee>
            </div>

        </Container>
    );
};

export default Header;