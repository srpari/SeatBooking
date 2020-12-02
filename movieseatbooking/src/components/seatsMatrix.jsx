import React, { Component } from 'react';
import Seat from "./seat.jsx"

const GenerateSeats = (seatNumbers) => {
	return (
		<div className="row col-md-2">
			{
				seatNumbers.map((seatNumber) => {
					return <Seat seatno={seatNumber} key={seatNumber}/>
				})
			}
		</div>
	)
}

class SeatsMatrix extends Component {
    state = {  }
    render() { 
        return ( 
            
            <div className="container row movie-layout">
               <div className="seat-column-1">
					{GenerateSeats([1,2])}
					{GenerateSeats([3,4])}
					{GenerateSeats([5,6])}
					{GenerateSeats([7,8])}
					{GenerateSeats([9,10])}
				</div>
                <div className="seat-column-2">
					{GenerateSeats([11,12,13,14])}
					{GenerateSeats([15,16,17,18])}
					{GenerateSeats([19,20,21,22])}
					{GenerateSeats([23,24,25,26])}
					{GenerateSeats([27,28,29,30])}
				</div>
                <div className="seat-column-3">
					{GenerateSeats([31,32])}
					{GenerateSeats([33,34])}
					{GenerateSeats([35,36])}
					{GenerateSeats([37,38])}
					{GenerateSeats([39,40])}
				</div>
            </div>
         );
    }
}
 
export default SeatsMatrix;