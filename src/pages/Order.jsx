import React from "react";

import CustomCard from "../components/CustomCard";

const Order = ({ cardDemoData }) => {
    return (
        <div className="page">
            <div className="order__body">
                <div className="order__card-block">
                    <div className="order__card-block-title">
                        <h2>Предпросмотр открытки</h2>
                    </div>
                    <div className="order__card-block-demo">
                        <CustomCard customCardData={cardDemoData} />
                    </div>
                </div>
                <div className="order__customizing-block">
                    <div className="order__customizing-block-from">
                        <h3 className="order__customizing-block-from-title">От кого:</h3>
                    </div>
                    <div className="order__customizing-block-to">
                        <h3 className="order__customizing-block-to-title">Кому:</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Order;
