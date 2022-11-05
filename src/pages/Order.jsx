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
            <span className="flipper-hint">Нажми, чтобы перевернуть</span>
            <CustomCard customCardData={cardDemoData} />
          </div>
        </div>
        <div className="order__customizing-block">
          <div className="order__customizing-block-from">
            <h3 className="order__customizing-block-title">От кого:</h3>
            <label className="form__label" htmlFor="from">
              Ваше имя
              <input className="form__input" type="text" id="from" />
            </label>
          </div>
          <div className="order__customizing-block-to">
            <h3 className="order__customizing-block-title">Кому:</h3>
            <label className="form__label" htmlFor="to">
              Имя получателя
              <input className="form__input" type="text" id="to" />
            </label>
            <label className="form__label" htmlFor="wishes">
              Пожелания
              <textarea className="form__textarea" type="textarea" id="wishes" maxLength={100}/>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
