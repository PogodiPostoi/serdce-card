import React from 'react';

import CustomCardGrid from './pages/CustomCardGrid';

export const AppContext = React.createContext({})

function App() {

  return (
    <AppContext.Provider 
      value={ 1 }
      >
      <div className="wrapper">
        <CustomCardGrid />
      </div>
    </AppContext.Provider>
  );
}

export default App;
