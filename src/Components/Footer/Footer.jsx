import React from 'react';
import Container from '../../Utils/Container/Container';
import { FaMapMarkerAlt, FaPhoneAlt, FaTelegramPlane, FaFacebookF, FaInstagram } from "react-icons/fa";
import './Footer.scss';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='footer'>
            <Container>
                <div className='footer__wrap'>
                    <div>
                        <Link to='/' className='footer__logo'>
                            LOGO
                        </Link>
                    </div>
                    <div className='footer__loc-wrap'>
                        <div className='footer__icon-map'>
                            <FaMapMarkerAlt/>
                        </div>
                        <div>
                            <strong className='footer__location'>
                                Manzil: Toshkent shahri, Sergeli tumani, Navro’z ko’cha 3-uy. <br /> Mo’ljal:  “ASIA AUTO” avtosalon ichki qismi
                            </strong>
                        </div>
                    </div>
                    <div className='footer__tel-wrap'>
                        <div className='footer__tel-box'>
                            <Link to='tel: +998909014959' className='footer__tel'><FaPhoneAlt className='footer__tel-icon'/>+998 90 901 49 59</Link>
                        </div>
                        <div className='footer__tel-box'>
                            <Link to='tel: +998889004959' className='footer__tel'><FaPhoneAlt className='footer__tel-icon'/>+998 88 900 49 59</Link>
                        </div>
                    </div>
                    <div className='footer__sm'>
                        <Link to='https://web.telegram.org/k/' className='footer__sm-icon'>
                            <FaTelegramPlane/>
                        </Link>
                        <Link to='https://ru-ru.facebook.com/' className='footer__sm-icon'>
                            <FaFacebookF/>
                        </Link>
                        <Link to='https://www.instagram.com/?__coig_restricted=1' className='footer__sm-icon'>
                            <FaInstagram/>
                        </Link>
                    </div>
                </div>
            </Container>
        </footer>
    );
}

export default Footer;