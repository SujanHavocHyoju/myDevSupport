import { createStore } from 'vuex'

import authModule from './modules/auth/index';
import postsModule from './modules/posts/index';
import profileModule from './modules/profile/index';
import requestsModule from './modules/requests/index';
import supportsModule from './modules/supports/index';

const store = createStore({
  modules: {
    auth: authModule,
    posts: postsModule,
    profile: profileModule,
    requests: requestsModule,
    supports: supportsModule
  },
});

export default store;
