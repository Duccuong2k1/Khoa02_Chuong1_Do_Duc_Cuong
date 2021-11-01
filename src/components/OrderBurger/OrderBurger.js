import React, { Component } from 'react'
import Burger from './Burger'
import Menu from './Menu'
import Modalcheckout from './ModalCheckout'
import './OrderBurger.css'

export default class OrderBurger extends Component {
    render() {
        return (
            <div className="container">
                <div className="row mt-5 my-5">
                    <div className="col-md-7">
                        <div className="text-center">
                            <h3>Bánh burger của bạn</h3>
                        </div>
                        <Burger />                        
                    </div>
                    <div className="col-md-5 mt-5">
                        <div className="text-center">
                            <h4 className="text-success">Chọn thức ăn</h4>
                        </div>
                        <Menu />
                        <button className="btn btn-success"
                            data-toggle="modal" data-target="#modelId"
                           
                        >
                        Thanh toán  
                        </button>
                    </div>
                </div>
                <Modalcheckout />
            </div>
        )
    }
}


