import React, { Component } from 'react';

class Seat extends Component {
  

    seatClickHandler = (event, seatNumber) => {
        // event.stopPropagation()
        alert(seatNumber);
           
      }
 
    render() { 
        const seatNumber = this.props.seatno;
        const seatStatus = this.props.seatColor ? this.props.seatColor : "seat-grey";
       
        return (  
        <div className="col-md-2">
            <div className={`seat seat-${seatNumber} ${seatStatus}`}
              onClick={(e) => this.seatClickHandler(e,seatNumber)}/>
            
            </div>

        );
    }
}
 
export default Seat;