let timer;

export default {
    async signup(context, payload){
        return context.dispatch('auth', {
            ...payload,
            mode: 'signup'
        });
    },

    async login(context, payload){
        return context.dispatch('auth', {
            ...payload,
            mode: 'login'
        });
    },

    async auth(context, payload){
        const mode = payload.mode;
        let key = 'AIzaSyAY0c5lr4jW_xR7d6hN4gCKKbSSgNbq-NQ';
        let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' + key;
        if (mode === 'signup') {
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + key;
        }
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                email: payload.email,
                password: payload.password,
                returnSecureToken: true
            })
        });
        const responseData = await response.json();

        if(!response.ok){
            const error = new Error(responseData.message || 'Failed to Authenticate.');
            throw error;
        }

        // local storage cache
        // Calculate the expiration time
        const expiresIn = +responseData.expiresIn * 1000;
        // the + prefix converts to a number
        const expirationDate = new Date().getTime() + expiresIn;

        localStorage.setItem('token', responseData.idToken);
        localStorage.setItem('userId', responseData.localId);
        localStorage.setItem('tokenExpiration', expirationDate);

        // Set timer
        timer = setTimeout(function(){
            context.dispatch('autoLogout');
        }, expiresIn);

        // Storing in Vuex store
        context.commit('setUser', {
            token: responseData.idToken,
            userId: responseData.localId,
            //tokenExpiration: expirationDate
        });
    },

    autoLogin(context){
        const token = localStorage.getItem('token');
        const userId = localStorage.getItem('userId');
        const tokenExpiration = localStorage.getItem('tokenExpiration');
        const expiresIn = +tokenExpiration -new Date().getTime();
        if(expiresIn < 0){
            // return id token is expired
            return;
        }
        timer = setTimeout(function(){
            context.dispatch('autoLogout');
        }, expiresIn);

        if(token && userId){
            context.commit('setUser', {
                token: token,
                userId: userId,
                //tokenExpiration: null
            });
        }
    },
    
    logout(context){
        localStorage.removeItem('token');
        localStorage.removeItem('userId');
        localStorage.removeItem('tokenExpiration');
        //clear the timeout
        clearTimeout(timer);
        context.commit('setUser', {
            token: null,
            userId: null,
            //tokenExpiration: null
        });
    },

    autoLogout(context){
        context.dispatch('logout');
        context.commit('setAutoLogout');
    }
};