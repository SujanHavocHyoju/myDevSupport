export default {
    registerSupport(state, payload){
        state.supports.push(payload);
    },
    setSupports(state, payload){
        state.supports = payload;
    },
    setFetchTimestamp(state){
        state.lastFetch = new Date().getTime();
    }
}