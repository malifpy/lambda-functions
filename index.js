exports.handler = async (event) => {
    // TODO implement
    const response = {
        statusCode: 200,
    };
    
    const params = JSON.parse(event.body);
    
    response.body = JSON.stringify(params.param1);
    
    
    /*
    const params = event.queryStringParameters
    if (params == null) {
        response.body = JSON.stringify("No Parameters");
    } else {
        response.body = JSON.stringify(params);
    }
    */
    return response;
};