const Users = require("../classModel/usersClass").Users;
const {getConnection,
getRepository,
getManager
} = require("typeorm");

const searchData = async function(empData)
{
    try
    {
        var data = await getRepository(Users)
        .createQueryBuilder("user")
        .where("user.name like :name",{name: "%" + empData.name + "%" })
        .orWhere("user.email like :email",{email:"%" + empData.name + "%"})
        .orWhere("user.designation like :designation",{designation: "%" + empData.name +"%"})
        .orWhere("user.branch_id like :branch_id",{branch_id: "%" + empData.name +"%"})
        .getMany();
        if(data!=null){
            console.log(data);
            return data;
        }else{
            // console.log("data is not found");
            return "data is not found";
        }     
    }catch(error)
    {
        throw error;
    }
};
module.exports= searchData;