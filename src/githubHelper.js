import githubInjection from 'github-injection';

gitHubInjection(() => {
  const el = window.document.getElementsByClassName('header')[0];
  const randomColor = '#' + ((1<<24) * Math.random()|0).toString(16);
  el.style.backgroundColor = randomColor;
  console.log('1111>>>');
});