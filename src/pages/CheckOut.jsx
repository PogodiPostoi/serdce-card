import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import CustomCard from "../components/CustomCard";
import RenderCard from "../components/RenderCard";

const CheckOut = ({setIsLoading, isLoading}) => {

  const {cardId} = useParams()

  const [checkoutCardData, setCheckoutCardData] = React.useState(cardId)


    // Запрос на конкретную открытку для order
    React.useEffect(() => {
      async function getCheckoutCard(cardId) {
        try {
          setIsLoading(true)
          const orderCardResponse = await axios.get(
            `https://634afa40d90b984a1e340df0.mockapi.io/cardListItems/${cardId}`
          );
  
          setCheckoutCardData(orderCardResponse.data);
          setIsLoading(false)
        } catch (error) {
          alert("Ошибка при запросе данных :(");
          console.error(error);
        }
      }
  
      getCheckoutCard(cardId)
    }, [cardId, setIsLoading]);

    

  
  return (
    <div className="page">
      <div className="checkout__body">
        <div className="checkout__card-block">
          <div className="checkout__card-block-title">
            <h2>Предпросмотр открытки</h2>
          </div>
          <div className="checkout__card-block-demo">
            {/* <span className="flipper-hint">Нажми, чтобы перевернуть</span> */}
            {
              isLoading 
              ? <RenderCard location={"demo"} />
              : <>
                  <CustomCard customCardData={checkoutCardData} />
                  <h3 className="page__list-item-title">{checkoutCardData.title}</h3>
                </>
            }
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
