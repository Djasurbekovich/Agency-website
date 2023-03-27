import React from 'react';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import Suggestions from '../../Components/Suggestions/Suggestions';
import Team from '../../Components/Team/Team';
import BlogNews from '../BlogNews/BlogNews';

const Home = () => {
    return (
        <div>
            <Header/>
            <BlogNews/>
            <Team/>
            <Suggestions/>
            <Footer/>
        </div>
    );
}

export default Home;