const Worksheet = require("../classModel/worksheetClass").Worksheet;
const Users = require("../classModel/usersClass").Users;
const Projects = require("../classModel/projectClass").Projects;
const {
  getConnection,
  getRepository,
  getManager,
  createQueryBuilder,
  QueryRunner
} = require("typeorm");

const saveData = async function(clientData) {
  try {
    console.log(clientData);

    const data = await getConnection()
      .createQueryBuilder()
      .insert()
      .into(Worksheet)
      .values([
        {
          user_id: clientData.user_id,
          project_id: clientData.project_id,
          title: clientData.title,
          desc: clientData.desc,
          hours_spend: clientData.hours_spend,
          created_at: Date()
        }
      ])
      .execute();
    return data;
  } catch (error) {
    throw error;
  }
};

const fetchData = async function(clientData) {
  try {
    console.log(clientData.id);
    const data1 = await getConnection()
      .createQueryBuilder()
      .select("worksheet")
      .from(Worksheet, "worksheet")
      .where("worksheet.id = :id AND worksheet.deleted_at is null", {
        id: clientData.id
      })
      .getRawOne();

    if (data1 != null) {
      console.log(data1);
      return data1;
    } else {
      return "Data is not found";
    }
  } catch (error) {
    throw error;
  }
};

const deleteData = async function(clientData) {
  try {
    let data = await getConnection()
      .createQueryBuilder()
      .update(Worksheet)
      .set({ deleted_at: Date() })
      .where("id = :id", { id: clientData.id })
      .execute();
    return data;
  } catch (error) {
    throw error;
  }
};

const fetchDataByEmployee = async function(clientData) {
  try {
    let data = await getRepository(Worksheet)
      .createQueryBuilder("worksheet")
      .innerJoin(Users, "user", "user.id = worksheet.user_id")
      .innerJoin(Projects, "project", "project.id = worksheet.project_id")
      .where("worksheet.user_id = :user_id", { user_id: clientData.user_id })
      .select(["user.name", "worksheet", "project.title"])
      .getRawMany();

    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const api4 = async function(clientData) {
  try {
    const data = await getConnection()
      .getRepository(Worksheet)
      .createQueryBuilder("wk")
      .select("wk")
      .addSelect(qb => {
        const subQuery = qb
          .subQuery()
          .select("user.name")
          .from(Users, "user")
          .where("user.id= :id")
          .name.getQuery();
        return subQuery;
      })
      .setParameter("id", 8)
      .getMany();

    const wk = await getConnection().manager.findOne(Worksheet, 1);

    wk.id = await getConnection()
      .createQueryBuilder()
      .relation(Worksheet, "id")
      .of(wk)
      .loadMany();

    return data;
  } catch (error) {
    throw error;
  }
};

// const searchDataFromUserTable = async function(clientData) {
//   try {
//     var data = await getRepository(Users)
//       .createQueryBuilder("user")
//       .where("user.address like :address", {
//         address: "%" + clientData.name + "%"
//       })
//       .getMany();
//     return data;
//   } catch (error) {
//     throw error;
//   }
// };

const fetchDataByHR = async function(clientData) {
  try {
    let data = "data";
    return data;
  } catch (error) {
    throw error;
  }
};

const fetchDataByJM = async function(clientData) {
  try {
    let data = "data";
    return data;
  } catch (error) {
    throw error;
  }
};

const api8 = async function(clientData) {
  try {
    let data = "data";
    return data;
  } catch (error) {
    throw error;
  }
};

const api9 = async function(clientData) {
  try {
    let data = "data";
    return data;
  } catch (error) {
    throw error;
  }
};

const api10 = async function(clientData) {
  try {
    let data = "data";
    return data;
  } catch (error) {
    throw error;
  }
};

const api11 = async function(clientData) {
  try {
    let data = "data";
    return data;
  } catch (error) {
    throw error;
  }
};
module.exports = {
  fetchData,
  saveData,
  deleteData,
  fetchDataByEmployee,
  api4,
  // searchDataFromUserTable
};
