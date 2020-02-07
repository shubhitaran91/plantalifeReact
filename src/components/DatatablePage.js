import React, { useState, useEffect } from "react";
import Loader from "./Loader";
import service from "../service/plantService";
import Notiflix from "notiflix-react";
import axios from 'axios';
import $ from 'jquery';
const DatatablePage = () => {
  const [plant, setplant] = useState([]);
  async function getdata() {
    try {
      const res = await service.getAllPlants();
      var result = res.data.message;

      if (result == "No Data Found") {
        // alert(data);
        Notiflix.Report.Info("Data Not Found", "Please Try Again", "OK");
      } else {
        setplant(result);
      }
    } catch (e) {
      Notiflix.Report.Warning(
        "Network Issue",
        "Please Check Your Connection",
        "OK"
      );
    }
  }
  async function editProduct(plant_no) {
    $('#loading').hide();
    
    const res =await axios.post('http://localhost:5000/searchPlantData',{plant_no:plant_no})
    const result=res.data.message
    
    var jsonObj = {
      plant_type: result.plant_type,
      plant_name: result.plant_name,
      plant_price: result.plant_price,
      plant_status: result.plant_status,
      plant_desc: result.plant_desc,
      
    };
    var b=window.btoa(JSON.stringify(jsonObj));
    console.log(b)
     window.location.assign(`admin?plantno=${plant_no}&plantInfo=${b}`)
     
  }
  async function deleteProduct(plant_no) {
    console.log("delete",plant_no)
    const res =await axios.post('http://localhost:5000/removePlantData',{plant_no:plant_no})
    const result=res.data.message
    if(result == "error"){
      Notiflix.Report.Failure( 'Oops Something went wrong', 'Please Try Again', 'OK' );
  }else{
      Notiflix.Report.Success( 'Item Deleted Successfully', 'Click OK To Continue' );
  }
  }

  useEffect(() => {
    getdata();
  }, []);
  console.log(plant);

  return plant.length ? (
    <>
      <div class="container">
        <table class="table table-striped bordered">
          <thead>
            <tr>
              <th>Plant No</th>
              <th>Plant Name</th>
              <th>Plant Price</th>
              <th>Plant Status</th>
              <th>Plant Desc</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {plant.map(plants => {
              return (
                <tr>
                  <td>{plants.plant_no}</td>
                  <td>{plants.plant_name}</td>
                  <td>{plants.plant_price}</td>
                  <td>{plants.plants_status}</td>
                  <td>{plants.plant_desc}</td>
                  <td>
                    <i class="fa fa-edit" id="loading"
                      
                      onClick={() => editProduct(plants.plant_no)}
                    >
                     
                      </i>
                    &nbsp;
                    <i class="fa fa-trash"
                      
                      onClick={() => deleteProduct(plants.plant_no)}
                    >
                     
                      </i>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  ) : (
    <Loader />
  );
};

export default DatatablePage;
