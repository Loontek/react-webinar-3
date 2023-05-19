import React from 'react';
import PopUp from "../pop-up";
import Head from "../head";
import PageLayout from "../page-layout";
import List from "../list";
import Controls from "../controls";
import {calcTotalPrice} from "../../utils";
import PropTypes from "prop-types";
import './style.css'

const Cart = ({cart, isShown, togglePopUp, onRemoveFromCart}) => {
  return (
    <PopUp isShown={isShown} onClick={togglePopUp}>
      <div className={'Cart'}>
        <PageLayout>
          <Head title={'Корзина'} withButton onClick={togglePopUp}/>
          <Controls cart={cart}/>
          <List list={cart} type={'cart'} onClick={onRemoveFromCart}/>
          <span className={'Cart-total-price'} style={{
            justifyContent: !cart.length ? 'center' : 'flex-end'
          }}>
            {cart.length
              ?
              <>
                <b>Итого</b>
                <b>{calcTotalPrice(cart)}</b>
              </>
              :
              <b>Корзина пуста</b>
            }
          </span>
        </PageLayout>
      </div>
    </PopUp>
  );
};

Cart.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.shape({
    code: PropTypes.number
  })).isRequired,
  isShown: PropTypes.bool,
  togglePopUp: PropTypes.func,
  onRemoveFromCart: PropTypes.func
};

export default Cart;