import React from 'react';
import { Button } from '../../Utils/Components';
import Container from '../../Utils/Container/Container';
import './Suggestions.scss';

const Suggestions = () => {
    return (
        <main className='offers'>
            <Container>
                <section className='offers__wrap'>
                    <div className='offers__left'>
                        <h3 className='offers__title'>Sizni bir finjon qahva ustida loyihangizni batafsil muhokama qilishga mamnuniyat ila taklif qilamiz.</h3>
                        <div className='offers__inputs-wrap'>
                            <input className='offers__input' type="text" placeholder="Ismingiz"/>
                            <input className='offers__input' type="tel" placeholder="Telefon raqamingiz"/>
                            <input className='offers__input' type="text" placeholder="G'oyangiz xaqida qisqacha (Muhim emas)"/>
                        </div>
                        <h4 className='offers__title2'>Qanday xizmatlardan foydalanishni xoxlaysiz?</h4>
                        <div className='offers__checkbox-wrap'>
                            <ul className='offers__list'>
                                <li className='offers__item'>
                                    <input className='offers__checkbox' type="checkbox"/>
                                    <strong className='offers__text'>Backend</strong>
                                </li>
                                <li className='offers__item'>
                                    <input className='offers__checkbox' type="checkbox"/>
                                    <strong className='offers__text'>CRM ishlab chiqish</strong>
                                </li>
                                <li className='offers__item'>
                                    <input className='offers__checkbox' type="checkbox"/>
                                    <strong className='offers__text'>Internet magazin ishlab chiqish</strong>
                                </li>
                                <li className='offers__item'>
                                    <input className='offers__checkbox' type="checkbox"/>
                                    <strong className='offers__text'>Logotip va Brandbook</strong>
                                </li>
                                <li className='offers__item'>
                                    <input className='offers__checkbox' type="checkbox"/>
                                    <strong className='offers__text'>Portal ishlab chiqish</strong>
                                </li>
                                <li className='offers__item'>
                                    <input className='offers__checkbox' type="checkbox"/>
                                    <strong className='offers__text'>Veb dizayn</strong>
                                </li>
                                <li className='offers__item'>
                                    <input className='offers__checkbox' type="checkbox"/>
                                    <strong className='offers__text'>Mobilograf</strong>
                                </li>
                            </ul>
                            <ul className='offers__list'>
                                <li className='offers__item'>
                                    <input className='offers__checkbox' type="checkbox"/>
                                    <strong className='offers__text'>Frontend</strong>
                                </li>
                                <li className='offers__item'>
                                    <input className='offers__checkbox' type="checkbox"/>
                                    <strong className='offers__text'>Grafik dizayn</strong>
                                </li>
                                <li className='offers__item'>
                                    <input className='offers__checkbox' type="checkbox"/>
                                    <strong className='offers__text'>Motion dizayn</strong>
                                </li>
                                <li className='offers__item'>
                                    <input className='offers__checkbox' type="checkbox"/>
                                    <strong className='offers__text'>Mobil ilova ishlab chiqish</strong>
                                </li>
                                <li className='offers__item'>
                                    <input className='offers__checkbox' type="checkbox"/>
                                    <strong className='offers__text'>Veb sayt ishlab chiqish</strong>
                                </li>
                                <li className='offers__item'>
                                    <input className='offers__checkbox' type="checkbox"/>
                                    <strong className='offers__text'>SMM dizayn</strong>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='offers__right'>
                        <ul className='offers__right-list'>
                            <h4 className='offers__right-title'>NIMANI MA'QUL KO'RASIZ?</h4>
                            <li className='offers__right-item'>
                                <img className='offers__right-img' src="src/assets/Imgs/coffee.svg" alt="Coffee" />
                                <strong className='offers__right-name'>Achchiq kofe</strong>
                            </li>
                            <li className='offers__right-item'>
                                <img className='offers__right-img' src="src/assets/Imgs/milkcoffee.svg" alt="Milk-coffee" />
                                <strong className='offers__right-name'>Sutli kofe</strong>
                            </li>
                            <li className='offers__right-item'>
                                <img className='offers__right-img' src="src/assets/Imgs/water.svg" alt="Water" />
                                <strong className='offers__right-name'>Suv</strong>
                            </li>
                            <li className='offers__right-item'>
                                <img className='offers__right-img' src="src/assets/Imgs/tea.svg" alt="Tea" />
                                <strong className='offers__right-name'>Choy</strong>
                            </li>
                        </ul>
                        <Button text='Mijoz bo’lish'/>
                    </div>
                </section>
            </Container>
        </main>
    );
}

export default Suggestions;