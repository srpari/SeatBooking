import React, { Component } from 'react';

class Seat extends Component {
    state = {  }    
    render() { 
        const seatStatus = this.props.seatColor ? this.props.seatColor : "seat-grey" 
        return (  
         <div className="col-md-2">
            <div className={`seat ${seatStatus}`}/>
         </div>
        );
    }
}
 
export default Seat;