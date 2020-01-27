import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Background from '../static/img/bg-img/24.jpg'
import Footer from './footer';
import axios from 'axios';
import queryString from 'query-string';
import Notiflix from "notiflix-react";

import Header from './Header';
const useStyles = makeStyles({
    card: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});


const PlantData = (props) => {
   
    var myPlant = JSON.parse(sessionStorage.getItem('myPlant'));
     if (myPlant == null) {
        myPlant = [];
     }
     
    const [plant, setplant] = useState([]);

    useEffect(() => {
        fetchdata()
    }
    )



    let params = queryString.parse(props.location.search, { ignoreQueryPrefix: true }).plant_type;
    // console.log("================>", params)

    async function fetchdata() {
        try {
            const res = await axios.post('http://localhost:5000/getPlantData', { plant_type: params })
            let list = res.data.message
            if (list == 'No Data Found') {
                // alert(data);
                Notiflix.Report.Info('Data Not Found', 'Please Try Again', 'OK');
            } else {
                setplant(list)
            }
        } catch (e) {
            Notiflix.Report.Warning('Network Issue', 'Please Check Your Connection', 'OK');
        }


    }
    function addToCart(photo, name, price) {
        let photos = photo
        let names = name
        let prices = price
        let jsonObj = {
            photos,
            names,
            prices
          };
          myPlant.push(jsonObj);

          sessionStorage.setItem("myPlant", JSON.stringify(myPlant));
    }





    const classes = useStyles();
    return (
        <div>
           <Header />
              
                
            <div className="breadcrumb-area">
                {/* <!-- Top Breadcrumb Area --> */}
                <div className="top-breadcrumb-area bg-img bg-overlay d-flex align-items-center justify-content-center"
                    style={{ backgroundImage: `url(${Background})` }}>
                    <h2>{params} Plants</h2>

                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="index.html"><i className="fa fa-home"></i> Home</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">{params} Plants</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>

            </div>
            {/* <!-- ##### Breadcrumb Area End ##### --> */}

            {/* <!-- ##### Shop Area Start ##### --> */}
            <section className="shop-page section-padding-0-100">
                <div className="container">

                    <div className="row">

                        <div className="col-md-12 col-lg-12">
                            <div className="shop-products-area">
                                <div className="row">
                                    {plant.map((plants) => {
                                        return (

                                            <div className="col-12 col-md-4 col-xs-6 col-sm-6 col-lg-4 my-3 store-item">

                                                <Card className={classes.card}>
                                                    <CardActionArea>
                                                        <CardMedia
                                                            className={classes.media}
                                                            image={`data:image/*;base64,${plants.plant_photo}`}
                                                            title="Contemplative Reptile"
                                                        />
                                                        <CardContent>


                                                            <Typography gutterBottom variant="h5" component="h2">
                                                                {plants.plant_name}
                                                            </Typography>
                                                            <Typography variant="body2" color="textSecondary" component="p">
                                                                {`\u20B9${plants.plant_price}`}
                                                            </Typography>

                                                        </CardContent>
                                                    </CardActionArea>
                                                    <CardActions>
                                                        <Button size="small" onClick={() => addToCart(plants.plant_photo, plants.plant_name, plants.plant_price)} color="primary">
                                                            Add To Card
                                                </Button>
                                                        <Button size="small" color="primary">
                                                            Learn More
                                                </Button>
                                                    </CardActions>
                                                </Card>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );

}

export default PlantData;