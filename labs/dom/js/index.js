"use strict";

var boxOne = document.querySelector('#one'),
	boxTwo = document.querySelector('#two'),
	boxThree = document.querySelector('#three'),
	boxFour = document.querySelector('#four'),
	boxFive = document.querySelector('#five'),
	boxSix = document.querySelector('#six');

boxOne.addEventListener('click', function (evt) {
	if (this.classList.contains('spin')) {
		this.classList.remove('spin');
	} else {
		this.classList.add('spin');		
	}
});


boxTwo.addEventListener('mouseover', function(event) {
	this.classList.add('fade-to-white');
	this.classList.add('white');
});

boxTwo.addEventListener('mouseout', function(event) {
	this.classList.add('fade-to-red');
	this.classList.remove('white');
	this.classList.add('red');
});

boxThree.addEventListener('dblclick', function(event) {
	this.classList.add('explode');
});

boxFour.addEventListener('click', function (evt) {
	if (this.classList.contains('click')) {
		this.classList.remove('fall');
		this.classList.add('float');
		this.classList.remove('click');		
	} else {
		this.classList.remove('float');
		this.classList.add('fall');
		this.classList.add('click');
	}	
});

boxFive.addEventListener('mouseover', function (evt) {
	this.classList.add('shake');
	this.classList.remove('red');
	this.classList.add('black');
});
boxSix = document.querySelector('#six');
