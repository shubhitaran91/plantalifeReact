
import axios from 'axios';

export async function getAllPlants(){
    const res = await axios.get('http://localhost:5000/getAllPlantData')
    console.log("========>",res)
    return res;
}

export default {
    getAllPlants
};
