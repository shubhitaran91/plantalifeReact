import React, { Component, useState, useEffect  } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Background from '../static/img/bg-img/24.jpg'
import  Footer  from './footer';
const useStyles = makeStyles({
    card: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});








const Indoor =()=>{
const [plantPhoto,setplantPhoto]= useState('');
    // plantPhoto : pic.plant_photo
    useEffect(()=>{
        async function fetchData() {
       const res=await fetch('http://ec2-13-232-51-230.ap-south-1.compute.amazonaws.com:5000/getAllPlantData')
      res.json().then(res=>setplantPhoto(res))
            
        }
        fetchData();
    });
    
  
         const classes = useStyles();
        return (
            <div>
                <div className="breadcrumb-area">
                    {/* <!-- Top Breadcrumb Area --> */}
                    <div className="top-breadcrumb-area bg-img bg-overlay d-flex align-items-center justify-content-center"
                        style={{backgroundImage:`url(${Background})`}}>
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

                                    <Card className={classes.card}>
                                        <CardActionArea>
                                            <CardMedia
                                                className={classes.media}
                                                image="/static/images/cards/contemplative-reptile.jpg"
                                                title="Contemplative Reptile"
                                            />
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="h2">
                                                    {plantPhoto}
                                                 </Typography>
                                                <Typography variant="body2" color="textSecondary" component="p">
                                                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                                    across all continents except Antarctica
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
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        );
    
}

export default Indoor;