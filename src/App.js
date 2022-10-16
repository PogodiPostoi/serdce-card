import React from "react";
import axios from "axios";

import Header from "./components/Header"
// import Store from "./pages/Store"
import Favorites from "./pages/Favorites"

function App() {

  // const [CardListItems, setCardListItems] = React.useState([])
  const [favoriteListItems, setFavoriteListItems] = React.useState([]);
  const [cardDemoOpened, setCardDemoOpened] = React.useState(false);
  const [demoCardId, setDemoCardId] = React.useState("");

  // Запрос открыток с сервера
  React.useEffect(() => {
    async function fetchData() {
      try {
        // const cardListResponse = await axios.get(
        //   "https://634afa40d90b984a1e340df0.mockapi.io/cardListItems"
        //   )
        const favoriteListResponse = await axios.get(
          "https://634afa40d90b984a1e340df0.mockapi.io/favoriteListItems"
        );

        // setCardListItems(cardListResponse.data)
        setFavoriteListItems(favoriteListResponse.data);
        
      } catch (error) {
        alert("Ошибка при запросе данных :(")
        console.error(error)
      }
    }

    fetchData()
  }, [])

  const onToggleCardDemo = (id) => {
    setCardDemoOpened(!cardDemoOpened);
    setDemoCardId(id);
    console.log(cardDemoOpened);
  };

  return (
    <div className="app">
      
      <Header />
      {/* <Store 
        CardListItems = {CardListItems}
        onToggleCardDemo = {onToggleCardDemo}
        demoCardId = {demoCardId}
        cardDemoOpened = {cardDemoOpened}
      /> */}
      <Favorites 
        favoriteListItems = {favoriteListItems}
        onToggleCardDemo = {onToggleCardDemo}
        demoCardId = {demoCardId}
        cardDemoOpened = {cardDemoOpened}
      />
      
    </div>
  );
}

export default App;
