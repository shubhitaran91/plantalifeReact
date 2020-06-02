/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const plantCard = (props) => {
  const classes = useStyles();
  return (
    <div
      unique={props.key}
      className="col-12 col-md-4 col-xs-6 col-sm-6 col-lg-4 my-3 store-item"
    >
      <Card className={classes.card}>
        <CardActionArea>
          <Link to={"/plant-details/" + props.id}>
            <CardMedia
              className={classes.media}
              image={props.photo[0]}
              onClick={props.details}
            />
          </Link>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {`\u20B9${props.price}`}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" onClick={props.clicked}>
            Add To Card
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default plantCard;
