import axios from 'axios';

const Tabs = (topics) => {
  const topicsDiv = document.createElement('div');
  topicsDiv.classList.add('topics');
  for(let i = 0; i < topics.length; i++) {
    const tabDiv = document.createElement('div');
    tabDiv.classList.add('tab');
    tabDiv.textContent = topics[i];
    topicsDiv.appendChild(tabDiv);
  }
  return topicsDiv;
}

const tabsAppender = (selector) => {
  axios.get('http://localhost:5000/api/topics')
    .then(resp => {
      const arr = resp.data.topics;
      const entryPoint = document.querySelector(selector);
      entryPoint.appendChild(Tabs(arr));
    })
    .catch(error => {
      console.error(error);
    })
    .finally(() => {
      console.log('DONE');
    });
}

export { Tabs, tabsAppender }
