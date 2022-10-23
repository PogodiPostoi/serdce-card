import React from "react";
import axios from "axios";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Header from "./components/Header";
import Store from "./pages/Store";
import Favorites from "./pages/Favorites";

function App() {
  const [CardListItems, setCardListItems] = React.useState([]);
  const [favoriteListItems, setFavoriteListItems] = React.useState([]);
  const [cardDemoOpened, setCardDemoOpened] = React.useState(false);
  const [demoCardId, setDemoCardId] = React.useState("");

  const onToggleCardDemo = (id) => {
    setCardDemoOpened(!cardDemoOpened);
    setDemoCardId(id);
  };

  const onSetFavorites = async (obj) => {
    try {
      if (
        favoriteListItems.find((favObj) => Number(favObj.id) === Number(obj.id))
      ) {
        axios.delete(
          `https://634afa40d90b984a1e340df0.mockapi.io/favoriteListItems/${obj.id}`
        );
        setFavoriteListItems((prev) =>
          prev.filter((item) => Number(item.id) !== Number(obj.id))
        );
      } else {
        const { data } = await axios.post(
          "https://634afa40d90b984a1e340df0.mockapi.io/favoriteListItems",
          obj
        );
        setFavoriteListItems((prev) => [...prev, data]);
      }
    } catch (error) {
      alert("Не удалось добавить в фавориты");
      console.error(error);
    }
  };

  const isItemFavorited = (id) => {
    return favoriteListItems.some(obj => Number(obj.parentId) === Number(id))
  }

  console.log(isItemFavorited)

  // const onSetFavorites = async (obj) => {
  //   try {
  //     if (favoriteListItems.find(favObj => Number(favObj.id) === Number(obj.id))) {
  //       axios.delete(`https://634afa40d90b984a1e340df0.mockapi.io/favoriteListItems/${obj.id}`)
  //       setFavoriteListItems(prev => prev.filter(item => Number(item.id) !== Number(obj.id)))
  //     } else {
  //       const { data } = await axios.post("https://634afa40d90b984a1e340df0.mockapi.io/favoriteListItems", obj)
  //       setFavoriteListItems(prev => [...prev, data])
  //     }
  //   } catch (error) {
  //     alert("Не удалось добавить в фавориты")
  //     console.error(error)
  //   }
  // }

  // Запрос открыток с сервера
  React.useEffect(() => {
    async function fetchData() {
      try {
        const cardListResponse = await axios.get(
          "https://634afa40d90b984a1e340df0.mockapi.io/cardListItems"
        );
        const favoriteListResponse = await axios.get(
          "https://634afa40d90b984a1e340df0.mockapi.io/favoriteListItems"
        );

        setCardListItems(cardListResponse.data);
        setFavoriteListItems(favoriteListResponse.data);
      } catch (error) {
        alert("Ошибка при запросе данных :(");
        console.error(error);
      }
    }

    fetchData();
  }, []);

  // Router
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Header />,
      children: [
        {
          path: "/",
          element: (
            <Store
              CardListItems={CardListItems}
              onToggleCardDemo={onToggleCardDemo}
              demoCardId={demoCardId}
              cardDemoOpened={cardDemoOpened}
              onSetFavorites={onSetFavorites}
              favoriteListItems={favoriteListItems}
              isItemFavorited={isItemFavorited}
            />
          ),
          // Для случаев, когда нужно добавить страницу errorPage - errorElement: <Компонент />
        },
        {
          path: "/favorites",
          element: (
            <Favorites
              favoriteListItems={favoriteListItems}
              onToggleCardDemo={onToggleCardDemo}
              demoCardId={demoCardId}
              cardDemoOpened={cardDemoOpened}
            />
          ),
        },
      ],
    },
  ]);

  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
