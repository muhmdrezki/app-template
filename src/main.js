import './public-path';
import { createApp } from 'vue'
import App from './App.vue'

const isQiankun = window.__POWERED_BY_QIANKUN__;

let instance = null 

function render(props = {}) {
  const {container} = props
  instance = createApp(App)
    .mount(container ? container.querySelector('#app') : '#app')
}

export async function bootstrap() {
  console.log('[ lifecycle ] vue app bootstraped');
}

export async function mount(props) {
  console.log('[ lifecycle ] props from main framework', props);
  render(props);
}

export async function unmount() {
  instance.$el.innerHTML = '';
  instance = null;
}

//  Directly mount the application when running independently 
if (!isQiankun) {
  render()
}
