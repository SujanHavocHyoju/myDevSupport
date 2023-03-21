export default {
    requests(state, _, _2, rootGetters) {
        const supportId = rootGetters.userId;
        return state.requests.filter(
            req => req.supportId === supportId);
    },
    hasRequests(_, getters) {
        return getters.requests && getters.requests.length > 0;
    }
}