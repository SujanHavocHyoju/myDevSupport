export default {
    supports(state){
        return state.supports;
    },
    hasSupports(state){
        return state.supports && state.supports.length > 0;
    }
    
}