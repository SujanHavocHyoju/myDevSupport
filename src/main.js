import { createApp, defineAsyncComponent } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BaseCard from './components/ui/BaseCard';
import BaseButton from './components/ui/BaseButton';
import BaseBadge from './components/ui/BaseBadge';
import BaseSpinner from './components/ui/BaseSpinner';
import BaseSearch from './components/ui/BaseSearch';
import BaseContainer from './components/ui/BaseContainer';

const BaseDialog = defineAsyncComponent(() => 
    import('./components/ui/BaseDialog'));

// createApp(App).use(store).use(router).mount('#app')
const app = createApp(App);

app.use(router);
app.use(store);

app.component('base-card', BaseCard);
app.component('base-button', BaseButton);
app.component('base-badge', BaseBadge);
app.component('base-spinner', BaseSpinner);
app.component('base-dialog', BaseDialog);
app.component('base-search', BaseSearch);
app.component('base-container', BaseContainer);

app.mount('#app');
