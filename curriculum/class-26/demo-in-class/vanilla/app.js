'use strict';

let state = {};

let button = document.getElementById('clicker');
button.addEventListener('click', handleClick);

let input = document.getElementById('words-input');
input.addEventListener('input', handleInput);

function handleClick(e) {
  e.preventDeault();
  state.clicks += 1;
  document.getElementById('words').textContent = state.words;
}

function handleInput(e) {
  state.words = e.target.value;
  document.getElementById('words').textContent = state.words;
}

function init() {
  state.clicks = 0;
  state.words = 'type to change';
  document.getElementById('words').textContent = state.words;
}

init();