const successRoute = function(data,url){
    if(data && data.error){
        return{
            data:{},
            message:data.error.message,
            requestUrl:url,
            statusCode: data.error.errorCode
        };
    }
    return{
        message:"success",
        statusCode:200,
        requestUrl: url,
        data: data
    };
};
module.exports= successRoute;