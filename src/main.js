import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import vRipple from './directives/vRipple';
import imgFallback from './directives/img-fallback';

const app = createApp(App);

app.directive('ripple', vRipple);
app.directive('img-fallback', imgFallback);

app.use(store).use(router).mount('#app');
