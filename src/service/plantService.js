import axios from "axios";
import Notiflix from "notiflix-react";
export function getAllPlants() {
  const res = axios.get("http://localhost:5000/getAllPlantData");

  return res;
}

export function getCheckoutData(data) {
  const res = axios.post("http://localhost:5000/checkout", data);
  console.log("========>", res);
  if (res == "error") {
    Notiflix.Report.Failure("Order Fail", "Please Try Again", "OK");
  } else if (res == "Please Provide all Information") {
    Notiflix.Report.Warning("Please Provide all Information", "OK");
  } else {
    Notiflix.Report.Success(
      "Order Successfull",
      "Thanks Shopping with us.  Will notify you as your Order will process",
      "Click OK To Continue Shopping"
    );
  }
  return res;
}

export async function getShoppingData(data) {
  const res = await axios.post("http://localhost:5000/shopDetails", data);
  console.log("========>", res.data.message);

  return res;
}
export async function getAdminData(data) {
  const config = { headers: { "Content-Type": "multipart/form-data" } };
  const res = await axios.post("http://localhost:5000/uploadPlantData", data);
  const result = res.data.message;
  console.log("========>", result);
  if (result == "error") {
    Notiflix.Report.Failure(
      "Oops Something went wrong",
      "Please Try Again",
      "OK"
    );
  } else {
    Notiflix.Report.Success("Item Added Successfully", "Click OK To Continue");
  }
  return res;
}

export async function getUpdateData(data) {
  const config = { headers: { "Content-Type": "multipart/form-data" } };
  const res = await axios.post("http://localhost:5000/updatePlantData", data);
  const result = res.data.message;
  console.log("========>", result);
  if (result == "error") {
    Notiflix.Report.Failure(
      "Oops Something went wrong",
      "Please Try Again",
      "OK"
    );
  } else {
    Notiflix.Report.Success(
      "Update Added Successfully",
      "Click OK To Continue"
    );
  }
  return res;
}

export async function getregister(data) {
  const res = await axios.post("http://localhost:5000/register", data);
  const result = res.data.message;
  console.log("========>", result);
  if (result == "error") {
    Notiflix.Report.Failure(
      "Oops Something went wrong",
      "Please Try Again",
      "OK"
    );
  } else if (result == "Please provide all Information") {
    Notiflix.Report.Failure(
      "Email and Password is required",
      "Click OK To Continue"
    );
  } else {
    Notiflix.Report.Success(
      "Details Added Successfully",
      "Click OK To Continue"
    );
  }
  return res;
}

export async function getLogin(data) {
  const res = await axios.post("http://localhost:5000/login", data);
  const result = res.data.message;
  console.log("========>", result);
  if (result == "error") {
    Notiflix.Report.Failure(
      "Oops Something went wrong",
      "Please Try Again",
      "OK"
    );
  } else if (result == "Please provide all Information") {
    Notiflix.Report.Failure(
      "Email and Password is required",
      "Click OK To Continue"
    );
  }else if (result == "Incorrect Password") {
    Notiflix.Report.Failure(
      "Incorrect Password",
      "Click OK To Continue"
    );
  }
  else if(result=='Email is not registered with us, please register your email') {
    Notiflix.Report.Failure(
        "Email is not registered with us, please register your email",
        "Click OK To Continue"
      );
      
  }
  else {
    Notiflix.Report.Success(
      "Successfully Login",
      "Click OK To Continue"
    );
  }
  return res;
}

export default {
  getAllPlants,
  getCheckoutData,
  getShoppingData,
  getAdminData,
  getUpdateData,
  getregister,
  getLogin
};
