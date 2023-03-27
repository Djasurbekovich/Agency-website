import React from 'react';
import { Link } from 'react-router-dom';
import App from '../../../Utils/Cobe/Cobe';
import { Button } from '../../../Utils/Components';
import '../Header.scss';

const Hero = () => {
    return (
        <div className='header__hero'>
            <div className='header__left'>
                <h1 className='header__title'>Biz veb-saytlar,  ilovalarni ishlab chiqamiz</h1>
                <p className='header__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                <Link to='/portfolio'>
                    <Button text='Портфолио' />
                </Link>
            </div>
            <div className='header__right'>
                <App/>
            </div>
        </div>
    );
}

export default Hero;