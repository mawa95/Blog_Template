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
            <div>
                <Header/>
                <Menu/>
                <Title/>
                <Article/>
                <About/>
                <Follow/>
                <RecentPosts/>
                <Categories/>
                <PopularPosts/>
                <SocialIFrame/>
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