import React from "react";

const text1 = 'Modulo 1'
const text2 = 'Modulo 2'

class Botones extends React.Component{
    constructor(props){
    super(props)
    }
    render(){
        return(
            <>
            <div>
            <button onClick={() => alert(this.props.alertas.m1)}>{text1}</button>
            <button onClick={() => alert(this.props.alertas.m2)}>{text2}</button>
            </div>
            </>
        )
    }
}

export default Botones