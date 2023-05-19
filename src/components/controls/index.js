import React from "react";
import PropTypes from 'prop-types';
import './style.css';
import {calcCartAmount, plural} from "../../utils";

function Controls({cart}){
  return (
    <div className='Controls'>
      <span>В корзине: <b>{calcCartAmount(cart)}</b></span>
      <button>Перейти</button>
    </div>
  )
}

Controls.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.shape({
    code: PropTypes.number
  })).isRequired,
};

Controls.defaultProps = {
}

export default React.memo(Controls);
