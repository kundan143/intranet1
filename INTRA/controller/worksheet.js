const Connection = require("../BaseConnection");

const {
  saveData,
  fetchData,
  deleteData,
  fetchDataByEmployee,
  api4,
  // searchDataFromUserTable
} = require("../model/worksheetModel");

const save_data = async function(req, res) {
  try {
    let data = "This is me Ankit gaud";
    const savedata = await saveData(req.body);

    res.send(savedata);
  } catch (error) {
    throw error;
  }
};

const fetch_data = async function(req, res) {
  try {
    console.log(Date());
    const fetchdata = await fetchData(req.body);

    res.send(fetchdata);
  } catch (error) {
    throw error;
  }
};

const delete_data = async function(req, res) {
  try {
    let deletedata = await deleteData(req.body);
    res.send(deletedata);
  } catch (error) {
    throw error;
  }
};

const fetch_data_for_employee = async function(req, res) {
  try {
    let data = await fetchDataByEmployee(req.body);
    //console.log(data);
    res.send(data);
  } catch (error) {
    throw error;
  }
};

// const searchData = async function(req, res) {
//   try {
//     let data = await searchDataFromUserTable(req.params);
//     //console.log(data);
//     res.send(data);
//   } catch (error) {
//     throw error;
//   }
// };
module.exports = {
  fetch_data,
  save_data,
  delete_data,
  fetch_data_for_employee,
  // searchData
};
