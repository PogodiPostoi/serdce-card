import React, { Fragment } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import html2canvas from "html2canvas";

import CustomCard from "../components/CustomCard";
import RenderCard from "../components/RenderCard";
import ExportCard from "../components/ExportCard";

const CheckOut = ({ setIsLoading, isLoading }) => {
  const { cardId } = useParams();

  const [checkoutCardData, setCheckoutCardData] = React.useState(cardId);
  const [recipient, setRecipient] = React.useState("");
  const [sender, setSender] = React.useState("");
  const [text, setText] = React.useState("");
  const [exportCardOpened, setExportCardOpened] = React.useState("");

  // Запрос на конкретную открытку для order
  React.useEffect(() => {
    async function getCheckoutCard(cardId) {
      try {
        setIsLoading(true);
        const orderCardResponse = await axios.get(
          `https://634afa40d90b984a1e340df0.mockapi.io/cardListItems/${cardId}`
        );

        setCheckoutCardData(orderCardResponse.data);
        setIsLoading(false);
      } catch (error) {
        alert("Ошибка при запросе данных :(");
        console.error(error);
      }
    }

    getCheckoutCard(cardId);
  }, [cardId, setIsLoading]);

  // Для html2canvas
  const exportRef = React.useRef();
  const exportAsImage = async (element, imageFileName) => {
    const canvas = await html2canvas(element);
    const image = canvas.toDataURL("image/png", 1.0);
    downloadImage(image, imageFileName);
  };

  const downloadImage = (blob, fileName) => {
    const fakeLink = window.document.createElement("a");
    fakeLink.style = "display:none;";
    fakeLink.download = fileName;

    fakeLink.href = blob;

    document.body.appendChild(fakeLink);
    fakeLink.click();
    document.body.removeChild(fakeLink);

    fakeLink.remove();
  };

  const onChangeSender = (event) => {
    setSender(event.target.value);
  };

  const onChangeRecipient = (event) => {
    setRecipient(event.target.value);
  };

  const onChangeText = (event) => {
    setText(event.target.value);
  };

  const onToggleExportCard = () => {
    setExportCardOpened(!exportCardOpened)
  }

  return (
    <div className="page">
      {exportCardOpened && (
        <div className={exportCardOpened ? `bg--blur show` : `bg--blur hide`}>
          <div className="export__popup">
            <div className="export__popup-content">
              <img
                className="export__popup-close-btn"
                src="/img/close.svg"
                alt="close"
                onClick={() => onToggleExportCard()}
              />
              <div className="export__popup-content-img" ref={exportRef}>
                <ExportCard
                  customCardData={checkoutCardData}
                  customTextRecipient={recipient}
                  customText={text}
                  customTextSender={sender}
                />
              </div>
              <button
                className="export__popup-content-btn btn__buy"
                onClick={() => exportAsImage(exportRef.current, "serdce card")}
              >
                Скачать
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="checkout__body">
        <div className="checkout__card-block">
          <div className="checkout__card-block-title">
            <h2>Предпросмотр открытки</h2>
          </div>
          <div className="checkout__card-block-demo">
            <span className="flipper-hint">Нажми, чтобы перевернуть</span>
            {isLoading ? (
              <RenderCard location={"demo"} />
            ) : (
              <>
                <div>
                  <CustomCard
                    customCardData={checkoutCardData}
                    customTextRecipient={recipient}
                    customText={text}
                    customTextSender={sender}
                  />
                </div>
                <h3 className="page__list-item-title">
                  {checkoutCardData.title}
                </h3>
              </>
            )}
          </div>
        </div>
        <div className="line__mobile" style={{ width: 300 }}></div>
        <div className="checkout__customizing-block">
          <span className="flipper-hint">
            Подпись отобразится на обратной стороне
          </span>
          <div className="checkout__customizing-block-from">
            <h3 className="checkout__customizing-block-title">От кого:</h3>
            <label className="form__label" htmlFor="from">
              Ваше имя
              <input
                className="form__input"
                type="text"
                id="from"
                value={sender}
                onChange={onChangeSender}
              />
            </label>
          </div>
          <div className="checkout__customizing-block-to">
            <h3 className="checkout__customizing-block-title">Кому:</h3>
            <label className="form__label" htmlFor="to">
              Имя получателя
              <input
                className="form__input"
                type="text"
                id="to"
                value={recipient}
                onChange={onChangeRecipient}
              />
            </label>
            <label className="form__label" htmlFor="wishes">
              Пожелания
              <textarea
                className="form__textarea"
                type="textarea"
                id="wishes"
                value={text}
                onChange={onChangeText}
                maxLength={150}
              />
            </label>
            <button
                  className={`form__btn btn__buy`}
                  onClick={() => onToggleExportCard()}
                >
                  Получить открытку
                </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
