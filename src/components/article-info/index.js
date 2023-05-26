import React, {memo} from 'react';
import {numberFormat} from "../../utils";
import './style.css';

const ArticleInfo = ({ article, onAdd }) => {
  console.log(article)

  return (
    <div className={'Article'}>
      <p>{article.description}</p>
      <p>Страна производитель: <b>{article.country}</b></p>
      <p>Категория: <b>{article.category}</b></p>
      <p>Год выпуска: <b>{article.edition}</b></p>
      <h2><b>Цена: {numberFormat(article.price)} ₽</b></h2>
      <button type={"button"} onClick={() => onAdd(article._id)}>Добавить</button>
    </div>
  );
};

export default memo(ArticleInfo);