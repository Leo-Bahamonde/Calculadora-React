import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button/Button'



//onClickOperation
//onCLickEqual


const MathOperations = ({onClickOperation,onCLickEqual}) => ( 
    <section className="math-operations">
        <Button text="+" clickHandler={onClickOperation}/>
        <Button text="-" clickHandler={onClickOperation}/>
        <Button text="*" clickHandler={onClickOperation}/>
        <Button text="/" clickHandler={onClickOperation}/>
        <Button text="=" clickHandler={onCLickEqual}/>
    </section>
 );

 
MathOperations.propTypes={
    onClickOperation:PropTypes.func.isRequired,
    onCLickEqual:PropTypes.func.isRequired
}
export default MathOperations;