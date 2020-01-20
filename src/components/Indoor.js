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
const useStyles = makeStyles({
    card: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});


const Indoor = () => {
    const [plant, setplant] = useState([]);
   
    // plantPhoto : pic.plant_photo
    // useEffect(()=>{
    async function fetchdata() {
        const res = await axios.get('http://localhost:5000/getAllPlantData')
        let list = res.data.message
        setplant(list)
        // console.log(this.props.location.query.plant_type) 

    }

   
    fetchdata()
    // });


    const classes = useStyles();
    return (
        <div>
            <div className="breadcrumb-area">
                {/* <!-- Top Breadcrumb Area --> */}
                <div className="top-breadcrumb-area bg-img bg-overlay d-flex align-items-center justify-content-center"
                    style={{ backgroundImage: `url(${Background})` }}>
                    <h2>Indoor Plants</h2>

                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="index.html"><i className="fa fa-home"></i> Home</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">Indoor Plants</li>
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
                                                        <Button size="small" color="primary">
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

export default Indoor;