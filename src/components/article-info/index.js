import React, {memo} from 'react';
import {numberFormat} from "../../utils";
import './style.css';
import useSelector from "../../store/use-selector";

const ArticleInfo = ({ article, onAdd }) => {
  const select = useSelector(state => ({
    add: state.language.variants.add,
    country: state.language.variants.country,
    category: state.language.variants.category,
    edition: state.language.variants.edition,
    price: state.language.variants.price,
    activeLanguage: state.language.activeLanguage
  }));

  return (
    <div className={'Article'}>
      <p>{article.description}</p>
      <p>{select.country[select.activeLanguage]}: <b>{article.country}</b></p>
      <p>{select.category[select.activeLanguage]}: <b>{article.category}</b></p>
      <p>{select.edition[select.activeLanguage]}: <b>{article.edition}</b></p>
      <h2><b>{select.price[select.activeLanguage]}: {numberFormat(article.price)} ₽</b></h2>
      <button type={"button"} onClick={() => onAdd(article._id)}>{select.add[select.activeLanguage]}</button>
    </div>
  );
};

export default memo(ArticleInfo);