import React, { useState, useEffect } from "react";

import service from "../service/plantService";
import Notiflix from "notiflix-react";

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
  async function onEdit() {

  }
  async function onDelete() {
    
  }


  useEffect(() => {
    getdata();
    onEdit()
  }, []);
  console.log(plant);

  return (
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
          {plant.map((plants)=>{
            return(
              <tr>
   <td>{plants.plant_no}</td>
   <td>{plants.plant_name}</td>
   <td>{plants.plant_price}</td>
   <td>{plants.plants_status}</td>
   <td>{plants.plant_desc}</td>
   <td>{`<a onClick=${this.onEdit}>Edit</a>/<a onClick=${this.onDelete}>Delete</a>`}</td>
  </tr>
            )
   
          })}
         
          
        </tbody>
      </table>
      </div>
    </>
  );
};



export default DatatablePage;
