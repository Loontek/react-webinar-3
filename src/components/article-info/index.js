import React, {memo} from 'react';
import {numberFormat} from "../../utils";
import './style.css';
import useSelector from "../../store/use-selector";

const ArticleInfo = ({ article, onAdd }) => {
  const select = useSelector(state => ({
    add: state.language.variants.add,
    activeLanguage: state.language.activeLanguage
  }));

  return (
    <div className={'Article'}>
      <p>{article.description}</p>
      <p>Страна производитель: <b>{article.country}</b></p>
      <p>Категория: <b>{article.category}</b></p>
      <p>Год выпуска: <b>{article.edition}</b></p>
      <h2><b>Цена: {numberFormat(article.price)} ₽</b></h2>
      <button type={"button"} onClick={() => onAdd(article._id)}>{select.add[select.activeLanguage]}</button>
    </div>
  );
};

export default memo(ArticleInfo);