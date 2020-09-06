const Connection = require("../BaseConnection");
const searchData = require("../model/userSearchModel");


const searchUserdata = async function(req, res){
    try{
        let data = await searchData(req.params);
        res.send(data);
    }catch(error){
        throw error;
    }
};

module.exports= searchUserdata;