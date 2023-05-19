import React, {useCallback, useState} from 'react';
import List from "./components/list";
import Controls from "./components/controls";
import Head from "./components/head";
import PageLayout from "./components/page-layout";
import PopUp from "./components/pop-up";
import Cart from "./components/cart";

/**
 * Приложение
 * @param store {Store} Хранилище состояния приложения
 * @returns {React.ReactElement}
 */
function App({store}) {
  const [isShown, setIsShown] = useState(false)

  const list = store.getState().list;
  const cart = store.getState().cart;

  const callbacks = {
    onAddToCart: useCallback((item) => {
      store.addToCart(item);
    }, [store]),
    onRemoveFromCart: useCallback((item) => {
      store.removeFromCart(item)
    }, [store]),
    togglePopUp: useCallback(() => {
      setIsShown(prevState => !prevState);
    }, [])
  }

  return (
    <>
      <Cart cart={cart} isShown={isShown} togglePopUp={callbacks.togglePopUp} onRemoveFromCart={callbacks.onRemoveFromCart}/>
      <PageLayout fullscreen>
        <Head title='Магазин'/>
        <Controls cart={cart} withButton withDescription onClick={callbacks.togglePopUp}/>
        <List list={list} onClick={callbacks.onAddToCart}/>
      </PageLayout>
    </>
  );
}

export default App;
