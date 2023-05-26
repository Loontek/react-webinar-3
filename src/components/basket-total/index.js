import {memo} from "react";
import PropTypes from 'prop-types';
import {cn as bem} from '@bem-react/classname';
import {numberFormat} from "../../utils";
import './style.css';
import useSelector from "../../store/use-selector";

function BasketTotal({sum}) {
  const cn = bem('BasketTotal');

  const select = useSelector(state => ({
    total: state.language.variants.total,
    activeLanguage: state.language.activeLanguage
  }));

  return (
    <div className={cn()}>
      <span className={cn('cell')}>{select.total[select.activeLanguage]}</span>
      <span className={cn('cell')}> {numberFormat(sum)} ₽</span>
      <span className={cn('cell')}></span>
    </div>
  );
}

BasketTotal.propTypes = {
  sum: PropTypes.number
};

BasketTotal.defaultProps = {
  sum: 0
}

export default memo(BasketTotal);
