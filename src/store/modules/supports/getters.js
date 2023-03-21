export default {
    supports(state){
        // return state.supports.slice().reverse();
        return state.supports;
    },
    hasSupports(state){
        return state.supports && state.supports.length > 0;
    },
    // isSupport(state, getters, rootState, rootGetters){
    isSupport(_, getters, _2, rootGetters){
        const supports = getters.supports;
        const userId = rootGetters.userId;
        return supports.some(support => support.id === userId);
    },
    shouldUpdate(state){
        const lastFetch = state.lastFetch;
        if(!lastFetch){
            //lastFetch has not been set &  we have to update.
            return true; 
        }
        const currentTimeStamp = new Date().getTime;
        return (currentTimeStamp - lastFetch) / 1000 > 60;
    }
    
}