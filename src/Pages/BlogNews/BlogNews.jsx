import { useState } from 'react';
import ReactSimplyCarousel from 'react-simply-carousel';
import './BlogNews.scss';

function BlogNews() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  return (
    <div className='blog'>
      <h3 className='blog__title-list'>Blog yangiliklarimiz</h3>
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
            itemsToShow: 3,
            itemsToScroll: 1
          },
        ]}
        speed={300}
        easing="linear"
      >
        <ul className='blog__list'>
            <li className='blog__item'>
                <img className='blog__img' src="src/assets/Imgs/BlogNews1.svg" alt="Image" />
                <div className="blog__msgs">
                    <h4 className='blog__title'>«QA» mutaxassisi qanday bo'lishi kerak?</h4>
                    <p className='blog__text'>🔥 Ma'lumki, «Najot Ta'lim»dagi kurslar qatoriga «QA», ya'ni «Dasturiy ta'minotni testlash» kursi ham qo'shilgan.</p>
                    <div className='blog__box'>
                        <span className='blog__hashtag'>#hi_tech</span>
                        <input className='blog__input' type="datetime-local" />
                    </div>
                </div>
            </li>
        </ul>
        <ul className='blog__list'>
            <li className='blog__item'>
                <img className='blog__img' src="src/assets/Imgs/BlogNews2.svg" alt="Image" />
                <div className='blog__msgs'>
                    <h4 className='blog__title'>«Najot Ta'lim» logosi haqida nimalarni bilasiz?</h4>
                    <p className='blog__text'>«Najot Ta'lim» logosi Abstrac t logo mark turdagi logo hisoblanadi. Bu kabi logolarning ma'nosini bir martada ilg'ash qiyin bo'lishi mumkin.</p>
                    <div className='blog__box'>
                        <span className='blog__hashtag'>#hi_tech</span>
                        <input className='blog__input' type="datetime-local" />
                    </div>
                </div>
            </li>
        </ul>
        <ul className='blog__list'>
            <li className='blog__item'>
                <img className='blog__img' src="src/assets/Imgs/BlogNews3.svg" alt="Image" />
                <div className='blog__msgs'>
                    <h4 className='blog__title'>🙌 «TechJobs» kompaniyasi Java dasturchilarni maxsus «Deep interview»ga taklif qiladi! </h4>
                    <p className='blog__text'>Intervyuda sizning oʻz sohangizdagi boʻshliqlaringiz, kamchiliklaringiz aniqlanib...</p>
                    <div className='blog__box'>
                        <span className='blog__hashtag'>#hi_tech</span>
                        <span className='blog__hashtag'>#apple</span>
                        <input className='blog__input' type="datetime-local" />
                    </div>
                </div>
            </li>
        </ul>
        <ul className='blog__list'>
            <li className='blog__item'>
                <img className='blog__img' src="https://mir-s3-cdn-cf.behance.net/projects/max_808/bde9c482589903.Y3JvcCw4MDgsNjMyLDAsMA.jpg" alt="Image" />
                <div className='blog__msgs'>
                    <h4 className='blog__title'>«Najot Ta'lim» logosi haqida nimalarni bilasiz?</h4>
                    <p className='blog__text'>«Najot Ta'lim» logosi Abstrac t logo mark turdagi logo hisoblanadi. Bu kabi logolarning ma'nosini bir martada ilg'ash qiyin bo'lishi mumkin.</p>
                    <div className='blog__box'>
                        <span className='blog__hashtag'>#hi_tech</span>
                        <input className='blog__input' type="datetime-local" />
                    </div>
                </div>
            </li>
        </ul>
      </ReactSimplyCarousel>
    </div>
  );
}

export default BlogNews;