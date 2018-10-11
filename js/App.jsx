import React from 'react';
import ReactDOM from 'react-dom';

import './../scss/style.scss';// adres do głównego pliku SASS

import Header from './Header.jsx'
import Menu from './Menu.jsx'
import Article from './Article.jsx'
import About from './About.jsx'
import Follow from './Follow.jsx'
import RecentPosts from './RecentPosts.jsx'
import Categories from './Categories.jsx'
import PopularPosts from './PopularPosts.jsx'
import SocialIFrame from './SocialIFrame.jsx'
import SubscribeForm from './SubscribeForm.jsx'
import GalleryInsta from './GalleryInsta.jsx'
import MenuDesktop from './MenuDesktop.jsx'
import Tags from './Tags.jsx'

class Title extends React.Component {
    render() {
        return (
            <div className='title'>
                <h1>Lavender</h1>
            </div>
        )
    }
}
class App extends React.Component {
    render() {
        return (
            <div className='main'>
                <div className='nav'>
                    <Header/>
                    <Menu class='mobileMenu' show={true}/>
                    <Title/>
                    <Menu class='desktopMenu' show={false}/>
                </div>
                <div className='content'>
                    <div className='list'>
                        <Article/>
                        <Article/>
                        <Article/>
                    </div>
                    <div className='sidebar'>
                        <About/>
                        <Follow/>
                        <Categories/>
                        <PopularPosts/>
                        <SocialIFrame/>
                        <SubscribeForm/>
                        <GalleryInsta/>
                        <RecentPosts/>
                        <GalleryInsta/>
                    </div>
                </div>
            </div>
        )
    }
}
document.addEventListener('DOMContentLoaded', function () {
    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    )
});