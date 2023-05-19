import React, {useState} from "react";
import PropTypes from "prop-types";
import {convertPrice, plural} from "../../utils";
import './style.css';

function Item({ item, onAddToCart }){
  const callbacks = {}

  return (
    <div className={'Item'}>
      <div className='Item-code'>{item.code}</div>
      <div className='Item-title'>
        {item.title}
      </div>
      <div className={'Item-price'}>
        {convertPrice(item.price)}
      </div>
      <div className='Item-actions'>
        <button onClick={() => onAddToCart(item)}>
          Добавить
        </button>
      </div>
    </div>
  );
}

Item.propTypes = {
  item: PropTypes.shape({
    code: PropTypes.number,
    title: PropTypes.string,
    selected: PropTypes.bool,
    count: PropTypes.number
  }).isRequired,
  onAddToCart: PropTypes.func
};

Item.defaultProps = {
  onAddToCart: () => {},
}

export default React.memo(Item);
