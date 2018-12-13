import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Todolist from "./components/Todolist/Todolist";

// var images1 = ['http://indifound.com/wp-content/uploads/2016/09/kartinki-uspokaivayushchie-nervy.jpg',
//     'https://lj-top.ru/proxyimage/https://ic.pics.livejournal.com/arbitr57/22667896/1712753/1712753_original.jpg',
//     'http://www.wallpapers13.com/wp-content/uploads/2016/07/Sydney-Australia-Circular-Quay-skyline-downtown-opera-house-Wallpaper-HD-for-Desktop-915x515.jpg',
//     'http://www.aljanh.net/data/archive/img/2679746140.jpeg'];
//
// var images2 = ['https://kor.ill.in.ua/m/610x385/2012827.jpeg',
//     'https://www.segodnya.ua/img/article/11356/1_ls.1525411693.jpg',
//     'https://prm.ua/wp-content/uploads/2018/02/YEvro.jpg',
//     'http://www.satdep.lv/wp-content/uploads/2018/06/Lainaa-Viikonloppuna.jpg'];

ReactDOM.render(
    <div>
        <App/>
        {/*<CalculatorV2/>*/}

        <Todolist/>
    </div>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
