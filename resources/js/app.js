window.$ = require('jquery');

import '../scss/app.scss';
import './questions.js';
import Vue from 'vue';


window.quiz = new Vue({
	el:'#app',
	data: {
		test: 'Hi',
		score: 0,
		active: 0,
		questions: questions
	},
	methods:{
		changeScore(index, value){
			this.score += value
			this.active += 1
		}
	}
});

