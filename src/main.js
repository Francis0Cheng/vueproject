import Vue from 'vue'
import app from './App.vue'

import { Header } from 'mint-ui';

Vue.component(Header.name, Header);

import './lib/mui/css/mui.css'

var vm = new Vue({

    el: '#app',
    data: {

    },
    method:{
        
    },
    data:{

    },
    render: c=> c(app)
})