
import axios from 'axios';
import Notiflix from "notiflix-react";


export function getAllPlants(){
    const res = axios.get('http://localhost:5000/getAllPlantData')
    console.log("========>",res)
    return res;
}

export function getCheckoutData(data){
    const res = axios.post('http://localhost:5000/checkout',data)
        console.log("========>",res)
        if(res == "error"){
            Notiflix.Report.Failure( 'Order Fail', 'Please Try Again', 'OK' );
        }else{
            Notiflix.Report.Success( 'Order Successfull', 'Thanks Shopping with us.  Will notify you as your Order will process', 'Click OK To Continue Shopping' );
        }
        return res;
 
    
}

export default {
    getAllPlants,
    getCheckoutData
};
