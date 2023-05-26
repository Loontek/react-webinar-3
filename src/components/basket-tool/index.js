import {memo} from "react";
import PropTypes from 'prop-types';
import {cn as bem} from '@bem-react/classname';
import {numberFormat, plural} from "../../utils";
import './style.css';
import {NavLink} from "react-router-dom";
import useSelector from "../../store/use-selector";

function BasketTool({sum, amount, onOpen, onLangChange}) {
  const cn = bem('BasketTool');

  const select = useSelector(state => ({
      product: state.language.variants.product,
      inCart: state.language.variants.inCart,
      main: state.language.variants.main,
      empty: state.language.variants.empty,
      goToCart: state.language.variants.goToCart,
      activeLanguage: state.language.activeLanguage
  }))

  return (
    <div className={cn()}>
      <NavLink
        to={'/'}
        className={cn('link')}
      >
        {select.main[select.activeLanguage]}
      </NavLink>
      <div className={cn('language')}>
        <button type={"button"} onClick={() => onLangChange('en')}>EN</button>
        <button type={"button"} onClick={() => onLangChange('ru')}>RU</button>
      </div>
      <span className={cn('label')}>{select.inCart[select.activeLanguage]}:</span>
      <span className={cn('total')}>
        {amount
          ? `${amount} ${plural(amount, {
            one: select.product[select.activeLanguage].one,
            few: select.product[select.activeLanguage].few,
            many: select.product[select.activeLanguage].many})} / ${numberFormat(sum)} ₽`
          : select.empty[select.activeLanguage]
        }
      </span>
      <button onClick={onOpen}>{select.goToCart[select.activeLanguage]}</button>
    </div>
  );
}

BasketTool.propTypes = {
  onOpen: PropTypes.func.isRequired,
  sum: PropTypes.number,
  amount: PropTypes.number
};

BasketTool.defaultProps = {
  onOpen: () => {},
  sum: 0,
  amount: 0
}

export default memo(BasketTool);
