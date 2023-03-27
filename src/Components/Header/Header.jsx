import React from 'react';
import Container from '../../Utils/Container/Container';
import './Header.scss';
import Hero from './Hero/Hero';
import Navbar from './Navbar/Navbar';

const Header = () => {
    return (
        <div className='header'>
            <Navbar/>
            <Container>
                <Hero/>
            </Container>
        </div>
    );
}

export default Header;