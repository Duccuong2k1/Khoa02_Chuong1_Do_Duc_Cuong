import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addNumber, removeNumber } from '../../redux/actions/burgerActions'

class Menu extends Component {

    renderMenuFood = ()=>{
        let {menuBurger}= this.props
        return (
            menuBurger.map((item, index)=>{
                return (
                    <tr key={index}>
                        <td className="font-weight-bold">{item.name}</td>
                        <td className="text-center">
                            <button className="btn btn-outline-success "
                                onClick = {()=> this.props.dispatch(addNumber(item))}
                            >
                                +
                            </button>
                            <span className="m-2">{item.amount}</span>
                            <button className="btn btn-outline-danger "
                                onClick = {()=> this.props.dispatch(removeNumber(item))}
                            >
                                -
                            </button>
                        </td>
                        <td>{item.price}</td>
                        <td className="text-success">{item.amount > 0 ? item.price * item.amount : '0'}</td>
                    </tr>
                )
            })
        )
    }

    render() {
        return (
            <table className="table" border="1">
                <thead>
                    <tr>
                        <th>thức ăn</th>
                        <th></th>
                        <th>đơn giá</th>
                        <th>thành tiền</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderMenuFood()}
                </tbody>
                <tfoot>
                    <tr className="text-warning font-weight-bold">
                        <td colSpan="3">Tổng Tiền :</td>
                        <td>
                            {
                                this.props.menuBurger.reduce((total,item,index)=>{
                                    return total += item.amount * item.price
                                },0).toLocaleString()
                            }
                        </td>
                    </tr>
                </tfoot>
            </table>
        )
    }
}
const mapStateToProps = (state)=>{
    return {
        menuBurger:state.burger.menu
    }
}

export default connect(mapStateToProps)(Menu)