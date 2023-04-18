import Router from "./Router/Router";
import { GlobalStyle } from "./GlobalStyle";
import {GlobalContext} from "./context/GlobalContext"
import {GlobalState} from "./context/GlobalState"
function App() {
  const context = GlobalState()

  return (
    <>
 
    <GlobalStyle/>
    <GlobalContext.Provider value={context}>
      <Router/>
    </GlobalContext.Provider>
    </>
  );
}

export default App;
