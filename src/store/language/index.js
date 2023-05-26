import StoreModule from "../module";

class Language extends StoreModule {

  constructor(store, name) {
    super(store, name);
  }

  initState() {
    return {
      activeLanguage: 'ru',
      variants: {
        shop: {
          en: 'Shop',
          ru: 'Магазин'
        },
        add: {
          en: 'Add',
          ru: 'Добавить'
        },
        delete: {
          en: 'Delete',
          ru: 'Удалить'
        },
        inCart: {
          en: 'In cart',
          ru: 'В корзине'
        },
        cart: {
          en: 'Cart',
          ru: 'Корзина'
        },
        empty: {
          en: 'empty',
          ru: 'пусто'
        },
        main: {
          en: 'Main',
          ru: 'Главная'
        },
        total: {
          en: 'Total',
          ru: 'Итого'
        },
        units: {
          en: 'un',
          ru: 'шт'
        },
        product: {
          en: {
            one: 'product',
            few: 'products',
            many: 'products'
          },
          ru: {
            one: 'товар',
            few: 'товара',
            many: 'товаров'
          }
        },
        goToCart: {
          en: 'Go to cart',
          ru: 'Перейти'
        },
        close: {
          en: 'Close',
          ru: 'Закрыть'
        }
      }
    }
  }

  changeLanguage(lang) {
    this.setState({
      ...this.getState(),
      activeLanguage: lang,
    })
  }
}

export default Language;
