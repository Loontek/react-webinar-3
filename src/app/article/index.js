import {memo, useCallback, useEffect} from 'react';
import useStore from "../../store/use-store";
import useSelector from "../../store/use-selector";
import Head from "../../components/head";
import BasketTool from "../../components/basket-tool";
import PageLayout from "../../components/page-layout";
import ArticleInfo from "../../components/article-info";
import {useParams} from "react-router-dom";

function Article() {
  const params = useParams();

  const store = useStore();

  const select = useSelector(state => ({
    article: state.article.article,
    amount: state.basket.amount,
    sum: state.basket.sum,
    activePage: state.catalog.activePage
  }));

  useEffect(() => {
    store.actions.article.load(params.articleId);
    store.actions.catalog.load(select.activePage);
  }, []);

  const callbacks = {
    // Добавление в корзину
    addToBasket: useCallback(_id => store.actions.basket.addToBasket(_id), [store]),
    openModalBasket: useCallback(() => store.actions.modals.open('basket'), [store]),
    changeLanguage: useCallback((lang) => store.actions.language.changeLanguage(lang), [store])
  }

  return (
    <PageLayout>
      <Head title={select.article.title}/>
      <BasketTool onOpen={callbacks.openModalBasket} onLangChange={callbacks.changeLanguage} amount={select.amount} sum={select.sum}/>
      <ArticleInfo article={select.article} onAdd={callbacks.addToBasket}/>
    </PageLayout>
  );
}

export default memo(Article);
