import StoreModule from "../module";

class Article extends StoreModule {

  constructor(store, name) {
    super(store, name);
  }

  initState() {
    return {
      article: {}
    }
  }

  async load(id) {
    const response = await fetch(`/api/v1/articles/${id}`);
    const json = await response.json();
    this.setState({
      ...this.getState(),
      article: {
        ...this.getState().article,
        _id: json.result._id,
        title: json.result.title,
        description: json.result.description,
        price: json.result.price,
        edition: json.result.edition
      }
    }, 'Загружен товар из АПИ');

    this.loadCountry(json.result.madeIn._id);
    this.loadCategory(json.result.category._id);
  }

  async loadCountry(id) {
    const response = await fetch(`/api/v1/countries/${id}`);
    const json = await response.json();
    this.setState({
      ...this.getState(),
      article: {
        ...this.getState().article,
        country: json.result.title
      }
    }, 'Загружена страна из АПИ');
  }

  async loadCategory(id) {
    const response = await fetch(`/api/v1/categories/${id}`);
    const json = await response.json();
    this.setState({
      ...this.getState(),
      article: {
        ...this.getState().article,
        category: json.result.title
      }
    }, 'Загружена категория из АПИ');
  }
}

export default Article;
