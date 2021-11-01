import React, { PureComponent } from 'react';

class Modalcheckout extends PureComponent {
    render() {
        return (
            <div>

                
                <div className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Thông Tin Thanh Toán</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body text-center">
                                <h3 className="text-success"><i className="far fa-check-circle"></i></h3>
                                <p className="text-success">thanh Toán thành công</p>
                                <h5 className="text-danger">
                                <i className="fas fa-smile-wink m-2"></i>
                                Chúc Bạn ăn ngon Miệng
                                <i className="fas fa-smile-wink m-2"></i>
                                </h5>
                            </div>
                           
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Modalcheckout;
