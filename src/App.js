import React from "react";

import Cards from "./pages/Cards";

import Header from "./components/Header";
import CustomCard from "./components/CustomCard";
import SimpleCard from "./components/SimpleCard";

// import CustomCardGrid from "./pages/CustomCardGrid";

export const AppContext = React.createContext({});

function App() {
  return (
    <AppContext.Provider value={1}>
      <div className="wrapper">
        <Header />
        <Cards />
      </div>
    </AppContext.Provider>
  );
}

export default App;
