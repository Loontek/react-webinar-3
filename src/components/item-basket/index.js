import {memo, useCallback} from 'react';
import propTypes from 'prop-types';
import {numberFormat} from "../../utils";
import {cn as bem} from "@bem-react/classname";
import PropTypes from "prop-types";
import './style.css';
import {NavLink} from "react-router-dom";
import useSelector from "../../store/use-selector";

function ItemBasket(props) {

  const cn = bem('ItemBasket');

  const select = useSelector(state => ({
    delete: state.language.variants.delete,
    units: state.language.variants.units,
    activeLanguage: state.language.activeLanguage
  }));

  const callbacks = {
    onRemove: (e) => props.onRemove(props.item._id)
  };

  return (
    <div className={cn()}>
      {/*<div className={cn('code')}>{props.item._id}</div>*/}
      <div className={cn('title')}>
        <NavLink
          to={`articles/${props.item._id}`}
          className={({ isActive }) =>
            isActive ? cn('link_active') : cn('link')
          }
          onClick={() => props.onOpen()}
        >
          {props.item.title}
        </NavLink>
      </div>
      <div className={cn('right')}>
        <div className={cn('cell')}>{numberFormat(props.item.price)} ₽</div>
        <div className={cn('cell')}>{numberFormat(props.item.amount || 0)} {select.units[select.activeLanguage]}</div>
        <div className={cn('cell')}>
          <button onClick={callbacks.onRemove}>{select.delete[select.activeLanguage]}</button><
        /div>
      </div>
    </div>
  )
}

ItemBasket.propTypes = {
  item: PropTypes.shape({
    _id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    title: PropTypes.string,
    price: PropTypes.number,
    amount: PropTypes.number
  }).isRequired,
  onRemove: propTypes.func,
}

ItemBasket.defaultProps = {
  onRemove: () => {},
}

export default memo(ItemBasket);
