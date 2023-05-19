import React from "react";
import PropTypes from 'prop-types';
import './style.css';
import {calcCartAmount} from "../../utils";
import PrimaryButton from "../primary-button";

function Controls({cart, withButton, withDescription, onClick}){
  return (
    <div className='Controls'>
      {withDescription &&
        <span>В корзине: <b>{calcCartAmount(cart)}</b></span>
      }
      {withButton &&
        <PrimaryButton description={'Перейти'} onClick={onClick}/>
      }
    </div>
  )
}

Controls.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.shape({
    code: PropTypes.number
  })).isRequired,
  withButton: PropTypes.bool,
  withDescription: PropTypes.bool,
  onClick: PropTypes.func
};

Controls.defaultProps = {
  onClick: () => {}
}

export default React.memo(Controls);
