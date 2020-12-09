import React, { Component } from 'react';

class SeatsMatrix extends Component {

    render() { 
    const seatStatus = "seat-grey";

    const GenerateSeats = (seatNumbers) => {
	return (        
		<div className="row col-md-2">
			{
            seatNumbers.map((seatNumber) => {
            // return <Seat seatno={seatNumber} key={seatNumber}/>
              return <div key={seatNumber} className="col-md-2"><div className={`seat seat-${seatNumber} ${seatStatus}`} onClick={(e) =>this.props.seatClickHandler(e,seatNumber)}/></div>
            })
			}
		</div>
	)
}

// const seatClickHandler = (event, seatNumber) => {

//         const seatColor = document.querySelector(`.seat-${seatNumber}`).classList    

//         if (this.props.arrseatNumbers.includes(seatNumber)) {
//             // const newMovieSeats = this.props.arrseatNumbers.filter((seat) => {
//             //     return seat !== seatNumber
//             // })
//             // alert(newMovieSeats)
//             seatColor.remove("seat-black")
//             seatColor.add("seat-grey") 
//             let index = this.props.arrseatNumbers.indexOf(seatNumber);
//            // alert(index)
//             if (index !== -1) {
//                 this.props.arrseatNumbers.splice(index, 1); 
//                 // this.setState({this.props.arrseatNumbers:arr});             
//             }  
//         } else {
//             seatColor.remove("seat-grey")
//             seatColor.add("seat-black")
//             this.props.arrseatNumbers.push(seatNumber);
//             this.setState({...this.props.arrseatNumbers,seatNumber})               
//         }
//    //return 0;
//   }

        return ( 
            <React.Fragment>
            {/* <div className="row">
                Unoccupied : <Seat seatColor="seat-grey"/> Occupied : <Seat seatColor="seat-black"/>            
                <Seat arrseatNumbers={this.props.arrseatNumbers}/>
            </div>    */}
            <div className="row">
            <div className="seat seat-grey"/>
            <div className="col-md-2">Unoccupied</div>
            <div className="seat seat-black"/>
            <div className="col-md-2">Occupied</div>
            </div>   
            <div className="screen"></div>               
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
            </React.Fragment>
         );
    }
}
 
export default SeatsMatrix;