import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import CustomCard from "../components/CustomCard";

const CheckOut = () => {

  const {cardId} = useParams()

  const [checkOutCardData, setCheckOutCardData] = React.useState(cardId)


    // Запрос на конкретную открытку для order
    React.useEffect(() => {
      async function getCheckOutCard(cardId) {
        try {
          const orderCardResponse = await axios.get(
            `https://634afa40d90b984a1e340df0.mockapi.io/cardListItems/${cardId}`
          );
  
          setCheckOutCardData(orderCardResponse.data);
        } catch (error) {
          alert("Ошибка при запросе данных :(");
          console.error(error);
        }
      }
  
      getCheckOutCard(cardId)
    }, [cardId]);

  
  return (
    <div className="page">
      <div className="checkout__body">
        <div className="checkout__card-block">
          <div className="checkout__card-block-title">
            <h2>Предпросмотр открытки</h2>
          </div>
          <div className="checkout__card-block-demo">
            <span className="flipper-hint">Нажми, чтобы перевернуть</span>
            <CustomCard customCardData={checkOutCardData} />
          </div>
        </div>
        <div className="checkout__customizing-block">
          <div className="checkout__customizing-block-from">
            <h3 className="checkout__customizing-block-title">От кого:</h3>
            <label className="form__label" htmlFor="from">
              Ваше имя
              <input className="form__input" type="text" id="from" />
            </label>
          </div>
          <div className="checkout__customizing-block-to">
            <h3 className="checkout__customizing-block-title">Кому:</h3>
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

export default CheckOut;
