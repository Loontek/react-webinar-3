import React, {useState} from "react";
import PropTypes from "prop-types";
import {convertPrice, plural} from "../../utils";
import './style.css';
import PrimaryButton from "../primary-button";

function Item({ item, onClick, withItemAmount, type }){
  return (
    <div className={'Item'}>
      <div className='Item-code'>{item.code}</div>
      <div className='Item-title'>
        {item.title}
      </div>
      <div className={'Item-info'}>
        <div className={'Item-price'}>
          {convertPrice(item.price)}
        </div>
        {withItemAmount &&
          <div>
            {item.count} шт
          </div>
        }
      </div>
      <div className='Item-actions'>
        <PrimaryButton description={type === 'cart' ? 'Удалить' : 'Добавить'} onClick={() => onClick(item)}/>
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
  onClick: PropTypes.func,
  withItemAmount: PropTypes.bool,
  type: PropTypes.string
};

Item.defaultProps = {
  onClick: () => {},
}

export default React.memo(Item);
