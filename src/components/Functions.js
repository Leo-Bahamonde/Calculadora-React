import React from 'react'
import Button from './Button/Button'
import Proptypes from 'prop-types'

const Functions = ({onContentCrear,onDelete}) => {
    return ( 
        <section className="functions">
            <Button type="Button-long-text" text="limpiar" clickHandler={onContentCrear}/> 
            <Button text="&larr;" clickHandler={onDelete}/> 
        </section>
     );
}

Function.propType={
    onContentCrear:Proptypes.func.isRequired,
    onDelete:Proptypes.func.isRequired
}
 
export default Functions;