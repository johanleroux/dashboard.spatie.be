import './bootstrap.js';

import Echo from 'laravel-echo';
import Vue from 'vue';

import Vue2Filters from 'vue2-filters';

Vue.use(Vue2Filters);

import Dashboard from './components/Dashboard';
import Calendar from './components/Calendar';
import Github from './components/Github';
import InternetConnection from './components/InternetConnection';
import Music from './components/Music';
import Npm from './components/Npm';
import Packagist from './components/Packagist';
import Tasks from './components/Tasks';
import TimeWeather from './components/TimeWeather';
import Twitter from './components/Twitter';
import Uptime from './components/Uptime';
import CryptoCoin from './components/CryptoCoin';
import Speedtest from './components/Speedtest';

new Vue({

    el: '#dashboard',

    components: {
        Dashboard,
        Calendar,
        Github,
        InternetConnection,
        Music,
        Npm,
        Packagist,
        Tasks,
        TimeWeather,
        Twitter,
        Uptime,
        CryptoCoin,
        Speedtest,
    },

    created() {

        let options = {
            broadcaster: 'pusher',
            key: window.dashboard.pusherKey,
            cluster: window.dashboard.pusherCluster,
        };

        if (window.dashboard.usingNodeServer) {
            options = {
                broadcaster: 'socket.io',
                host: 'http://dashboard.test:6001',
            };
        }

        this.echo = new Echo(options);
    },
});
