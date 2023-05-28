import {memo, useContext} from "react";
import PropTypes from 'prop-types';
import {cn as bem} from '@bem-react/classname';
import {numberFormat, translate} from "../../utils";
import {LanguageContext} from "../../store/context";
import './style.css';

function BasketTotal({sum}) {
  const cn = bem('BasketTotal');
  const activeLanguage = useContext(LanguageContext)

  return (
    <div className={cn()}>
      <span className={cn('cell')}>{translate('total', activeLanguage)}</span>
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
