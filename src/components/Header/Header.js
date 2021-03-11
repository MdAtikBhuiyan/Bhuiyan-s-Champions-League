import React from 'react';
import './Header.css';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = (props) => {
    let teamLogo = props.teamLogo;
    console.log(typeof teamLogo)
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
            <div className="header-bg">
                {
                    (teamLogo !== undefined) ? <img src={teamLogo} alt="" /> : <h1> Bhuiyan's Champoins League</h1>
                }
            </div>
        </div>
    );
};

export default Header;