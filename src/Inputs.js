import React from 'react'
import chip from './chip.png'
import logo from './logo.jpg'

const Inputs = (props) =>{
    return(
        <div className="Card">
                    <h1 className='title Thick-White' >CREDIT CARD</h1>
                    <img src={chip} width='100px' alt='Ora' />
                    <div className='Bottom'>
                        <div className='Info'>
                            <p className='Golden-Text'> {props.number.toString().padEnd(16,'*')} </p>
                            <div className='Middle-Info'>
                                <p className="Thick-White"> 5422 </p>
                                <div className='Dates'>
                                    <p id='Valid'>VALID <br /> THRU</p>
                                    <div >
                                        <p id='M-Y'>MONTH/YEAR  </p>

                                        <p className="Thick-White"> {props.validThru.slice(0,2) > 12 ? 12 + '/' + props.validThru.slice(3,5)  : props.validThru  }</p>
                                    </div>

                                </div>


                            </div>
                            <p className='Thick-White'>{props.name}</p>
                        </div>

                        <img alt='' src={logo} width='100px' height='150px' />



                    </div>


                </div>
    )
}
export default Inputs