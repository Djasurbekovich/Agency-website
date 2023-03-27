import React from 'react';
import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/Header/Navbar/Navbar';
import Container from '../../Utils/Container/Container';
import './Services.scss';

const Services = () => {
    return (<>
        <Navbar/>
        <main className='services'>
            <Container>
                <section className='services__wrap'>
                    <h3 className='services__title'>Bizning xizmatlar</h3>
                    <ul className='services__list'>
                        <li className='services__item'>
                            <img className='services__img' src="src/assets/Imgs/Services-icon1.svg" alt="Icon" />
                            <h4 className='services__text'>Veb saytlar</h4>
                            <p className='services__desc'>Bizdan eng yaxshi va eng zo'r sifatga ega platforma yarating.</p>
                        </li>
                        <li className='services__item'>
                            <img className='services__img' src="src/assets/Imgs/Services-icon2.svg" alt="Icon" />
                            <h4 className='services__text'>UI/UX Dizayn</h4>
                            <p className='services__desc'>Biz UI/UX dizayn xizmatlarini taqdim etamiz</p>
                        </li>
                        <li className='services__item'>
                            <img className='services__img' src="src/assets/Imgs/Services-icon3.svg" alt="Icon" />
                            <h4 className='services__text'>Mobil ilovalar</h4>
                            <p className='services__desc'>Biz eng yaxshi dizaynerlar  xizmatlarini taqdim etamiz</p>
                        </li>
                        <li className='services__item'>
                            <img className='services__img' src="src/assets/Imgs/Services-icon4.svg" alt="Icon" />
                            <h4 className='services__text'>SMM</h4>
                            <p className='services__desc'>Bizdan eng yaxshi va eng zo'r sifatga ega platforma yarating.</p>
                        </li>
                        <li className='services__item'>
                            <img className='services__img' src="src/assets/Imgs/Services-icon5.svg" alt="Icon" />
                            <h4 className='services__text'>Grafik dizayn</h4>
                            <p className='services__desc'>Biz fotografiya xizmatlarini taqdim etamiz</p>
                        </li>
                        <li className='services__item'>
                            <img className='services__img' src="src/assets/Imgs/Services-icon6.svg" alt="Icon" />
                            <h4 className='services__text'>Motion dizayn</h4>
                            <p className='services__desc'>Bizdan eng yaxshi va eng zo'r sifatga ega platforma yarating.</p>
                        </li>
                    </ul>
                </section>
            </Container>
        </main>
        <Footer/>
    </>);
}

export default Services;