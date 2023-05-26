import {memo} from "react";
import PropTypes from "prop-types";
import {cn as bem} from '@bem-react/classname';
import {numberFormat} from "../../utils";
import './style.css';
import {NavLink} from "react-router-dom";
import useSelector from "../../store/use-selector";

function Item(props){

  const cn = bem('Item');

  const select = useSelector(state => ({
    add: state.language.variants.add,
    activeLanguage: state.language.activeLanguage
  }));

  const callbacks = {
    onAdd: (e) => props.onAdd(props.item._id)
  }

  return (
    <div className={cn()}>
      {/*<div className={cn('code')}>{props.item._id}</div>*/}
      <div className={cn('title')}>
        <NavLink
          to={`articles/${props.item._id}`}
          className={({ isActive }) =>
            isActive ? cn('link_active') : cn('link')
          }
        >
          {props.item.title}
        </NavLink>
      </div>
      <div className={cn('actions')}>
        <div className={cn('price')}>{numberFormat(props.item.price)} ₽</div>
        <button onClick={callbacks.onAdd}>{select.add[select.activeLanguage]}</button>
      </div>
    </div>
  );
}

Item.propTypes = {
  item: PropTypes.shape({
    _id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    title: PropTypes.string,
    price: PropTypes.number
  }).isRequired,
  onAdd: PropTypes.func,
};

Item.defaultProps = {
  onAdd: () => {},
}

export default memo(Item);
