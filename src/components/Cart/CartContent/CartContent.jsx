import React, { Component } from "react";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Paper from "@material-ui/core/Paper";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import TableBody from "@material-ui/core/TableBody";
import { connect } from "react-redux";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import * as actions from "../../../store/actions/index";
import CartTotal from "../CartTotal/CartTotal";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  iconPointer: {},
});

const StyledTableContainer = withStyles((theme) => ({
  root: {
    width: "70%",
    overflowX: "hidden",
  },
}))(TableContainer);

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.success.main,
    color: theme.palette.common.white,
    fontSize: 20,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const CartContent = (props) => {
  const classes = useStyles();

  return (
    <div style={{ "padding-bottom": "10%", "margin-top": "-5%" }}>
      <CartTotal totalPrice={props.totalPrice} />
      <StyledTableContainer>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <StyledTableRow>
              <StyledTableCell>Plant Photo</StyledTableCell>
              <StyledTableCell>Plant Name</StyledTableCell>
              <StyledTableCell>Plant Price&nbsp;</StyledTableCell>
              <StyledTableCell>Plant Type&nbsp;</StyledTableCell>
              <StyledTableCell>&nbsp;</StyledTableCell>
            </StyledTableRow>
          </TableHead>
          <TableBody>
            {props.cartData.map((plant, index) => {
              return (
                <StyledTableRow key={index}>
                  <StyledTableCell>
                    <img
                      src={plant.plant_photos[0]}
                      alt=""
                      height={50}
                      width={70}
                    />
                  </StyledTableCell>
                  <StyledTableCell>{plant.plant_name}</StyledTableCell>
                  <StyledTableCell>{plant.plant_price}</StyledTableCell>
                  <StyledTableCell>{plant.plant_type}</StyledTableCell>
                  <StyledTableCell>
                    <Tooltip title="Delete">
                      <IconButton
                        aria-label="delete"
                        onClick={() => props.onDeleteFromCart(index)}
                      >
                        <DeleteOutlineIcon />
                      </IconButton>
                    </Tooltip>
                  </StyledTableCell>
                </StyledTableRow>
              );
            })}
          </TableBody>
        </Table>
      </StyledTableContainer>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cartData: state.cart.cartValue,
    totalPrice: state.cart.totalPrice,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onDeleteFromCart: (index) => dispatch(actions.deleteFromCart(index)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartContent);
