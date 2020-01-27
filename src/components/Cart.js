import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            myPlant:[]
        }
    }

    componentDidMount() {
       
        this.setState({
            myPlant: JSON.parse(sessionStorage.getItem('myPlant'))
           
        })
       
    }
    render() {
        if(this.state.myPlant==null){
            this.state.myPlant=[];
        }
 
        return (<div>
            <TableContainer>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>{this.state.myPlant.plant_photo}</TableCell>
                            <TableCell>Cart SubTotal</TableCell>
                            <TableCell><button className="btn btn-basic">Cart</button></TableCell>
                            <TableCell><button className="btn btn-warning">Proceed To Buy</button></TableCell>

                        </TableRow>
                    </TableHead>
                    {/* <TableBody>
                       
                            <TableRow>
                                <TableCell component="th" scope="row">
                                    
                                </TableCell>
                                <TableCell align="right"></TableCell>
                                
                            </TableRow>
                    
                    </TableBody> */}
                </Table>
            </TableContainer>
        </div>);
    }
}

export default Cart;