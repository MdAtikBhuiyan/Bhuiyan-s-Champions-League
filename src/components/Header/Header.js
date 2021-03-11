import React from 'react';
import './Header.css';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import img from '../../image/header-bg.jpg'

const Header = (props) => {

    let {teamLogo,stadiumImg} = props;

    let headerBg = {
        backgroundImage: `url('${stadiumImg}')`
    }   
    let headerBg2 = {
        backgroundImage: `url('${img}')`
    }  
    return (
        <div className='header-area'>
            <Navbar className='navbar-bg'>
                <div className="container">
                    <Navbar.Brand as={Link} to='/'>BCL</Navbar.Brand>
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to='/home'>Home</Nav.Link>
                    </Nav>
                </div>
            </Navbar>
            <div style={(stadiumImg === undefined) ? headerBg2 : headerBg} className="header-bg">
                {
                    (teamLogo !== undefined) ? <img src={teamLogo} alt="" /> : <h1> Bhuiyan's Champoins League</h1>
                }
            </div>
        </div>
    );
};

export default Header;