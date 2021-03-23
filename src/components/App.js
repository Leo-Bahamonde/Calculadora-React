import React from 'react'
import Functions from '../components/Functions'
import MathOperations from '../components/MathOperations.js';
import Numbers from '../components/Numbers'
import Result from '../components/Result.js';
import '../components/App.css'

// Función Flecha o Arrow Function
const App = () => {
    // Lo que ejecuta la función
    //console.log("Renderización de App")

    //Lo que controla las operaciones
    return (
    <main className='react-calculator'>
        <Result value={undefined}/>
            <Numbers 
                onClickNumber={number=>{
                    console.log(number)
                }}
                />
        
                <Functions
                onContentCrear={()=>{
                    console.log("Clear");
                }}
                onDelete={()=>{
                    console.log("C");
                }}
                />

        <MathOperations 
        onClickOperation ={operation=>console.log(operation)}
        onCLickEqual = {operation=>console.log(operation)}
 
        />
    </main>)
}

export default App

