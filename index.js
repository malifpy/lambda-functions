const exactMath = require('exact-math');

function calc(formula) {
    return exactMath.formula(formula);
}

exports.handler = async (event) => {
    // TODO implement
    const response = {
        statusCode: 200,
    };
    
    const params = JSON.parse(event.body);
    
    if (params.func === "Calculator") {
        response.body = JSON.stringify(calc(params.formula));
    } else {
        response.body = JSON.stringify("No Input");
    }
    
    
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