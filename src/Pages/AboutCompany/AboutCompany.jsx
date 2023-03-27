import React from 'react';
import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/Header/Navbar/Navbar';
import Container from '../../Utils/Container/Container';
import './AboutCompany.scss';

const AboutCompany = () => {
    return (<>
        <Navbar/>
        <main className='sects__wrap'>
            <Container>
                <section className='about'>
                    <div className='about__box'>
                        <h2 className='about__title'>Kompaniya haqida</h2>
                        <p className='about__text'>Agentlik-bu mijozlarga o'z bizneslari uchun sifatli va innovatsion echimlarni taqdim etish maqsadida tashkil etilgan veb-agentlik. Bizning jamoamiz mijozlarga moslashtirilgan va sifatli mahsulotni taklif qilish uchun yaqin hamkorlikda ishlaydigan tajribali veb-dizayn, ishlab chiqish va marketing mutaxassislaridan iborat.
                            <br /><br />
                        Biz veb-dizayn, veb-sayt va mobil ilovalarni ishlab chiqish, SEO optimallashtirish, kontent yaratish va reklama kampaniyalarini o'z ichiga olgan keng ko'lamli xizmatlarni taklif etamiz. Biz eng yangi texnologiyalar va innovatsion usullardan foydalangan holda brendni rivojlantirish va sotishni ko'paytirish bilan shug'ullanamiz.</p>
                    </div>
                    <ul className='about__list'>
                        <li className='about__item'>
                            <strong className='about__num'>20+</strong>
                            <small className='about__desc'>Проектов запустил</small>
                        </li>
                        <li className='about__item'>
                            <strong className='about__num'>4 года</strong>
                            <small className='about__desc'>Опыта разработки</small>
                        </li>
                        <li className='about__item'>
                            <strong className='about__num'>12+</strong>
                            <small className='about__desc'>Профессионалов</small>
                        </li>
                        <li className='about__item'>
                            <strong className='about__num'>4 года</strong>
                            <small className='about__desc'>Опыта разработки</small>
                        </li>
                    </ul>
                </section>
                <section className='advantages'>
                    <h3 className='advantages__title'>Bizning afzalliklarimiz</h3>
                    <ul className='advantages__list'>
                        <li className='advantages__item'>
                            <img className='advantages__img' src="src/assets/Imgs/AboutCompany1.svg" alt="Image" />
                            <h4 className='advantages__text'>Individual yondashuv</h4>
                            <div className='advantages__line'></div>
                            <p className='advantages__desc'>Biz har bir mijozga g'amxo'rlik qilamiz va ularning ehtiyojlariga javob beradigan echimlarni yaratamiz</p>
                        </li>
                        <li className='advantages__item'>
                            <img className='advantages__img' src="src/assets/Imgs/AboutCompany2.svg" alt="Image" />
                            <h4 className='advantages__text'>Individual yondashuv</h4>
                            <div className='advantages__line'></div>
                            <p className='advantages__desc'>Biz har bir mijozga g'amxo'rlik qilamiz va ularning ehtiyojlariga javob beradigan echimlarni yaratamiz</p>
                        </li>
                        <li className='advantages__item'>
                            <img className='advantages__img' src="src/assets/Imgs/AboutCompany3.svg" alt="Image" />
                            <h4 className='advantages__text'>Individual yondashuv</h4>
                            <div className='advantages__line'></div>
                            <p className='advantages__desc'>Biz har bir mijozga g'amxo'rlik qilamiz va ularning ehtiyojlariga javob beradigan echimlarni yaratamiz</p>
                        </li>
                        <li className='advantages__item'>
                            <img className='advantages__img' src="src/assets/Imgs/AboutCompany1.svg" alt="Image" />
                            <h4 className='advantages__text'>Individual yondashuv</h4>
                            <div className='advantages__line'></div>
                            <p className='advantages__desc'>Biz har bir mijozga g'amxo'rlik qilamiz va ularning ehtiyojlariga javob beradigan echimlarni yaratamiz</p>
                        </li>
                        <li className='advantages__item'>
                            <img className='advantages__img' src="src/assets/Imgs/AboutCompany2.svg" alt="Image" />
                            <h4 className='advantages__text'>Individual yondashuv</h4>
                            <div className='advantages__line'></div>
                            <p className='advantages__desc'>Biz har bir mijozga g'amxo'rlik qilamiz va ularning ehtiyojlariga javob beradigan echimlarni yaratamiz</p>
                        </li>
                        <li className='advantages__item'>
                            <img className='advantages__img' src="src/assets/Imgs/AboutCompany3.svg" alt="Image" />
                            <h4 className='advantages__text'>Individual yondashuv</h4>
                            <div className='advantages__line'></div>
                            <p className='advantages__desc'>Biz har bir mijozga g'amxo'rlik qilamiz va ularning ehtiyojlariga javob beradigan echimlarni yaratamiz</p>
                        </li>
                    </ul>
                </section>
            </Container>
        </main>
        <Footer/>
    </>);
}

export default AboutCompany;