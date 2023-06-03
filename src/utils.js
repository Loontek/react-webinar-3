/**
 * Плюрализация
 * Возвращает вариант с учётом правил множественного числа под указанную локаль
 * @param value {Number} Число, под которое выбирается вариант формы.
 * @param variants {Object<String>} Варианты форм множественного числа.
 * @example plural(5, {one: 'товар', few: 'товара', many: 'товаров'})
 * @param [locale] {String} Локаль (код языка)
 * @returns {String}
 */
export function plural(value, variants = {}, locale = 'ru-RU') {
  // Получаем фурму кодовой строкой: 'zero', 'one', 'two', 'few', 'many', 'other'
  // В русском языке 3 формы: 'one', 'few', 'many', и 'other' для дробных
  // В английском 2 формы: 'one', 'other'
  const key = new Intl.PluralRules(locale).select(value);
  // Возвращаем вариант по ключу, если он есть
  return variants[key] || '';
}

/**
 * Генератор чисел с шагом 1
 * @returns {Function}
 */
export function codeGenerator(start = 0) {
  return () => ++start;
}

/**
 * Форматирование разрядов числа
 * @param value {Number}
 * @param options {Object}
 * @returns {String}
 */
export function numberFormat(value, locale = 'ru-RU', options = {}) {
  return new Intl.NumberFormat(locale, options).format(value);
}

/**
 * Создание структуры категорий
 * @param categories {Array}
 * @returns {Array}
 */
export const createCategories = (categories) => {
  const newCategories = []

  categories.forEach(category => {
    const childrens = categories.filter(children => category._id === children.parent?._id)

    if(!category.parent) {
      newCategories.push({
        value: category._id,
        title: category.title
      })

      if(childrens) {
        childrens.forEach(children => {
          newCategories.push({
            value: children._id,
            title: '- ' + children.title
          })

          const grandChildrens = categories.filter(grandChildren => children._id === grandChildren.parent?._id)

          if(grandChildrens) {
            grandChildrens.forEach(grandChildren => {
              newCategories.push({
                value: grandChildren._id,
                title: '-- ' + grandChildren.title
              })
            })
          }
        })
      }
    }
  })

  return newCategories
}