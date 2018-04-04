window.$ = require('jquery');
window._ = require('lodash');

import '../scss/app.scss';
import './questions.js';
import Vue from 'vue';


window.quiz = new Vue({
	el:'#app',
	data: {
		test: 'Hi',
		active: 0,
		questions: questions
	},
	methods:{
		changeScore(index, value){
			this.questions[index].score = value;
			this.active = index + 1;
		}
	},
	computed:{
		score(){
			var that = this;
			var total = 0;
			_.forEach(that.questions, function(val){
				total += val.score;
			});
			return total;
		}
	}
});

