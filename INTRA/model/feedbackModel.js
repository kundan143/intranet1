const Feedback = require("../classModel/feedbackClass").Feedback;

const {
    getConnection,
    getRepository,
    createQueryBuilder
} = require("typeorm");

const fetchData = async function(xelpData){
    try{
        let data = await getRepository(Feedback)
        .createQueryBuilder("feedback")
        .where("feedback.title Like :title", {title: "%" +xelpData.name+ "%"})
        .getMany();
        return data;
    }catch(error){
        throw error;
    }
};

const saveData = async function(xelpData){
    try{
        const data = await getConnection()
        .createQueryBuilder()
        .insert()
        .into(Feedback)
        .values([{
            title: xelpData.title,
            desc: xelpData.desc,
            feedback_by: xelpData.feedback_by,
            worksheet_id:   xelpData.worksheet_id,
            rating: xelpData.rating,
            is_accepted: xelpData.is_accepted,
            status: xelpData.status,
            created_at: xelpData.created_at
        }]).execute();
        return data;
    }catch(error){
        throw error;
    }
};

const editData = async function(xelpData){
    try{
        const data = await getConnection()
        .createQueryBuilder()
        .update()
        .into()
    }catch(error){
        throw error;
    }
};

module.exports = {fetchData, saveData};
