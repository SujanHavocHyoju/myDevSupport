export default {
    async contactSupport(context, data){
        const newRequest = {
            //id: new Date().toISOString(),
            //supportId: data.supportId,
            userName: data.name,
            userEmail: data.email,
            userPhone: data.phone,
            message: data.message
        };
        
        const response = fetch(`https://mydevsupport-default-rtdb.asia-southeast1.firebasedatabase.app/requests/${data.supportId}.json`, {
            method: 'POST',
            body: JSON.stringify(newRequest)
        });

        const responseData = await response.json();

        if(!response.ok){
            const error = new Error(responseData.message || 'Failed to send request.');
            throw error;
        }

        newRequest.id = responseData.name;
        newRequest.supportId= data.supportId;
        context.commit('addRequest', newRequest);
    },
    async fetchRequests(context){
        const supportId = context.rootGetters.userId;
        const token = context.rootGetters.token;
        const response = await fetch(`https://mydevsupport-default-rtdb.asia-southeast1.firebasedatabase.app/requests/${supportId}.json?auth=`+token);
        const responseData = await response.json();
        if(!response.ok){
            const error = new Error(responseData.message || 'Failed to fetch request.');
            throw error;
        }
        const requests = [];
        for(const key in responseData){
            const request = {
                id: key,
                supportId: supportId,
                userName: responseData[key].userName,
                userEmail: responseData[key].userEmail,
                userPhone: responseData[key].userPhone,
                message: responseData[key].message
            };
            requests.push(request); 
        }
        context.commit('setRequests', requests);
    }
}