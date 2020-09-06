const Connection = require("../BaseConnection");
const successRoute = require("../lib/index");
const {
    fetchData,
    saveData,
    editData} = require("../model/feedbackModel");


const fetch_data = async function(req, res){
    try{
        let url ="/v1/feedback/fetch";
        let data = await fetchData(req.params);
        res.send(successRoute(data, url));
    }catch(error){
        throw error;
    }
};

const save_data = async function(req, res){
    try{
        let url ="/v1/feedback/save";
        let data = await saveData(req.body);
        res.send(successRoute(data, url));
    }catch(error){
        throw error;
    }
};
const edit_data = async function(req, res){
    try{
        let url ="/v1/feedback/save";
        let data = await editData(req.body);
        res.send(successRoute(data, url));
    }catch(error){
        throw error;
    }
};
module.exports= {fetch_data, save_data,edit_data};