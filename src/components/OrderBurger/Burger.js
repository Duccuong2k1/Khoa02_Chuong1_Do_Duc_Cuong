import React, { Component } from 'react';
import { connect } from 'react-redux';

class Burger extends Component {
    
    renderSalad = ()=>{
        return (
            this.props.CakeBurger.salad.map((item,index)=>(
                <div className="salad" key={index}></div>
                
            ))
        )
    }
    renderCheese = ()=>{
        return(

            this.props.CakeBurger.cheese.map((item,index)=>(
                    <div className="cheese" key={index}></div> 
                ))
        )
    }
    renderBeef = ()=>{
        return (

            this.props.CakeBurger.beef.map((item,index)=>(
                    <div className="beef" key={index}></div>
                    
                ))
        )
    }
    render() {
        return (
            <div className="burger text-center">
                <div className="cake-header"></div>
                {/* salad */}
                {this.renderSalad()}
                {/* cheese */}
                {this.renderCheese()}
                {/* beef */}
                {this.renderBeef()}
                <div className="cake-footer"></div>
            </div>
        );
    }
}
const mapStateToProps = (state) =>{
    return {
        CakeBurger: state.burger.CakeBurger,
    }
}

export default connect(mapStateToProps)(Burger);
