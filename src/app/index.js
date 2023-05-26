import Main from "./main";
import Basket from "./basket";
import useSelector from "../store/use-selector";
import {Route, Routes} from "react-router-dom";
import Article from "./article";

/**
 * Приложение
 * @returns {React.ReactElement}
 */
function App() {

  const activeModal = useSelector(state => state.modals.name);

  return (
    <Routes>
      <Route path={'/'} element={
        <>
          <Main/>
          {activeModal === 'basket' && <Basket/>}
        </>
      }
      />
      <Route path={'articles/:articleId'} element={
        <>
          <Article/>
          {activeModal === 'basket' && <Basket/>}
        </>
      }/>
    </Routes>

  );
}

export default App;
