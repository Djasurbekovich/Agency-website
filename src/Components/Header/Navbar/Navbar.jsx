import React, { useState } from 'react';
import { FiSun, FiMoon } from "react-icons/fi";
import '../Header.scss';
import { Button } from '../../../Utils/Components';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='header__nav'>
            <div>
                <Link to='/' className='header__logo'>Logo</Link>
            </div>
            <ul className='header__list'>
                <Link to='/aboutCompany' className='header__item-link'>
                    О компании
                </Link>
                <Link to='/portfolio' className='header__item-link'>
                    Портфолио
                </Link>
                <Link to='/services' className='header__item-link'>
                    Услуги
                </Link>
                <Link to='/' className='header__item-link'>
                    Контакты
                </Link>
            </ul>
            <div className='header__Box'>
                <div className='header__icons'>
                    <button className='header__icon'>
                        <FiSun/>
                    </button>
                    <button className='header__icon'>
                        <FiMoon/>
                    </button>
                </div>
                <div className='header__box'>
                    <Link to='tel: +998907777777' className='header__tel'>+998 90 777-77-77</Link>
                    <br />
                    <Link to='email: chotatam@gmail.com' className='header__email'>chotatam@gmail.com</Link>
                </div>
                <div className='header__box'>
                    <Button text='Заказать звонок'/>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;