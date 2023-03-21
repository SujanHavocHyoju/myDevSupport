export default {
    async registerSupport(context, data){
        const userId = context.rootGetters.userId;
        const supportData = {
            //id: 's3',
            //id: context.rootGetters.userId,
            firstName: data.first,
            lastName: data.last,
            fullName: data.first + ' ' + data.last,
            areas: data.areas,
            skills: data.skills,
            description: data.description,
            position: data.position,
            yearsOfExperience: data.yearsOfExperience,
            hourlyRate: data.hourlyRate,
            social: data.social,
            portfolio: data.portfolio
        };
        const token = context.rootGetters.token;
        const url = `https://mydevsupport-default-rtdb.asia-southeast1.firebasedatabase.app/supports/${userId}.json?auth=`+token;
        const response = await fetch(url, {
            method: 'PUT',
            body: JSON.stringify(supportData)
        });
        if(!response.ok){
            // error handling
        }
        //context.commit('registerSupport', supportData);
        context.commit('registerSupport', {
            ...supportData,
            id: userId
        });
    },
    async loadSupports(context, payload){
        if(!payload.forceRefresh && !context.getters.shouldUpdate){
            return;
        }
        const url = `https://mydevsupport-default-rtdb.asia-southeast1.firebasedatabase.app/supports.json`;
        const response = await fetch(url);
        const responseData = await response.json();
        if(!response.ok){
            const error = new Error(responseData.message || 'Failed to fetch!');
            throw error;
        }
        const supports = [];
        for(const key in responseData) {
            const support = {
                id: key,
                firstName: responseData[key].firstName,
                lastName: responseData[key].lastName,
                areas: responseData[key].areas,
                skills: responseData[key].skills,
                description: responseData[key].description,
                position: responseData[key].position,
                yearsOfExperience: responseData[key].yearsOfExperience,
                hourlyRate: responseData[key].hourlyRate,
                social: responseData[key].social,
                portfolio: responseData[key].portfolio
            };
            supports.push(support);
        }
        context.commit('setSupports', supports);
        context.commit('setFetchTimestamp');
    }
};