import React from 'react';
import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/Header/Navbar/Navbar';
import { Button } from '../../Utils/Components';
import Container from '../../Utils/Container/Container';
import './Portfolio.scss';

const Portfolio = () => {
    return (<>
        <Navbar/>
        <section className='portfolio'>
            <Container>
                <h3 className='portfolio__title'>Bajargan loyihalarimiz</h3>
                <center>
                    <ul className='portfolio__list'>
                        <li className='portfolio__item'>
                            <button className='portfolio__btn'>Barchasi</button>
                        </li>
                        <li className='portfolio__item'>
                            <button className='portfolio__btn'>Veb sayt</button>
                        </li>
                        <li className='portfolio__item'>
                            <button className='portfolio__btn'>Veb dizayn</button>
                        </li>
                        <li className='portfolio__item'>
                            <button className='portfolio__btn'>SMM</button>
                        </li>
                        <li className='portfolio__item'>
                            <button className='portfolio__btn'>Mobil ilova</button>
                        </li>
                    </ul>
                </center>
                <ul className='portfolio__imgs-list'>
                    <li className='portfolio__imgs-item'>
                        <img className='portfolio__img' src="src/assets/Imgs/Portfolio1.svg" alt="Image" />
                    </li>
                    <li className='portfolio__imgs-item'>
                        <img className='portfolio__img' src="src/assets/Imgs/Portfolio2.svg" alt="Image" />
                    </li>
                    <li className='portfolio__imgs-item'>
                        <img className='portfolio__img' src="src/assets/Imgs/Portfolio3.svg" alt="Image" />
                    </li>
                    <li className='portfolio__imgs-item'>
                        <img className='portfolio__img' src="src/assets/Imgs/Portfolio4.svg" alt="Image" />
                    </li>
                    <li className='portfolio__imgs-item'>
                        <img className='portfolio__img' src="src/assets/Imgs/Portfolio5.svg" alt="Image" />
                    </li>
                    <li className='portfolio__imgs-item'>
                        <img className='portfolio__img' src="src/assets/Imgs/Portfolio6.svg" alt="Image" />
                    </li>
                    <Button text='Barchasini ko’rish' />
                </ul>
            </Container>
        </section>
        <Footer/>
    </>);
}

export default Portfolio;