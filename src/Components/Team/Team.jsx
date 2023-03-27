import { useState } from 'react';
import ReactSimplyCarousel from 'react-simply-carousel';
import './Team.scss';

function Team() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  return (
    <div className='team'>
      <h3 className='team__title'>Bizning jamoa</h3>
      <ReactSimplyCarousel
        activeSlideIndex={activeSlideIndex}
        onRequestChange={setActiveSlideIndex}
        itemsToShow={1}
        itemsToScroll={1}
        forwardBtnProps={{
          style: {
            position: 'absolute',
            width: '70px',
            height: '70px',
            display: 'flex',
            alignSelf: 'center',
            justifyContent: 'center',
            border: 'none',
            borderRadius: '50%',
            color: '#FFFFFF',
            backgroundColor: 'rgba(68, 68, 68, 0.7)',
            backdropFilter: 'blur(2px)',
            cursor: 'pointer',
            fontSize: '50px',
            textAlign: 'center',
            zIndex: '1',
            paddingTop: '7px',
            paddingLeft: '10px',
            right: '30px',
            boxShadow: '1px 1px 10px #FFFFFF'
          },
          children: <span>{`>`}</span>,
        }}
        backwardBtnProps={{
          style: {
            position: 'absolute',
            width: '70px',
            height: '70px',
            display: 'flex',
            alignSelf: 'center',
            justifyContent: 'center',
            border: 'none',
            borderRadius: '50%',
            color: '#FFFFFF',
            backgroundColor: 'rgba(68, 68, 68, 0.7)',
            backdropFilter: 'blur(2px)',
            cursor: 'pointer',
            fontSize: '50px',
            textAlign: 'center',
            zIndex: '1',
            paddingTop: '7px',
            paddingRight: '10px',
            left: '30px',
            boxShadow: '1px 1px 10px #FFFFFF'
          },
          children: <span>{`<`}</span>,
        }}
        responsiveProps={[
          {
            itemsToShow: 4,
            itemsToScroll: 1
          },
        ]}
        speed={300}
        easing="linear"
      >
        <ul className='team__list'>
            <li className='team__item'>
                <img className='team__img' src="src/assets/Imgs/Team-person1.svg" alt="Image" />
                <div className='team__box'>
                    <h4 className='team__name'>Isroilov Akbar</h4>
                    <div className='team__line'></div>
                    <p className='team__text'>Frontend dasturchi</p>
                </div>
            </li>
        </ul>
        <ul className='team__list'>
            <li className='team__item'>
                <img className='team__img' src="src/assets/Imgs/Team-person2.svg" alt="Image" />
                <div className='team__box'>
                    <h4 className='team__name'>Nayimov Umidjon</h4>
                    <div className='team__line'></div>
                    <p className='team__text'>Frontend dasturchi</p>
                </div>
            </li>
        </ul>
        <ul className='team__list'>
            <li className='team__item'>
                <img className='team__img' src="src/assets/Imgs/Team-person3.svg" alt="Image" />
                <div className='team__box'>
                    <h4 className='team__name'>Karimjonov Ismoil</h4>
                    <div className='team__line'></div>
                    <p className='team__text'>Frontend dasturchi</p>
                </div>
            </li>
        </ul>
        <ul className='team__list'>
            <li className='team__item'>
                <img className='team__img' src="src/assets/Imgs/Team-person4.svg" alt="Image" />
                <div className='team__box'>
                    <h4 className='team__name'>Ziyovuddinov Jobir</h4>
                    <div className='team__line'></div>
                    <p className='team__text'>Frontend dasturchi</p>
                </div>
            </li>
        </ul>
        <ul className='team__list'>
            <li className='team__item'>
                <img className='team__img' src="src/assets/Imgs/Team-person5.jpg" alt="Image" />
                <div className='team__box'>
                    <h4 className='team__name'>Ziyovuddinov Elmurod</h4>
                    <div className='team__line'></div>
                    <p className='team__text'>Frontend dasturchi</p>
                </div>
            </li>
        </ul>
      </ReactSimplyCarousel>
    </div>
  );
}

export default Team;