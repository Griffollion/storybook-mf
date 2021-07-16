//Убирает запятые, которые генерятся при мультиселекте в аддоне optionKnobs
export function prepareParams (arr) {
  return arr.toString().replace(/\,/gm, ' ')
}

//рендер иконки
export const renderIcon = (iconClass, modificator = '', fontSize = '') => {
  return `<i class="${iconClass} ${modificator}  ${fontSize}" ></i>`
}

//рендер Картинки
export const renderImg = (source, altText) => {
  return `<img src="${source}" alt="${altText}" />`
}

//Получить список всех иконок
export const getIconsList = (icons) => {
  var els = []
  for (let i = 0; i < icons.length; i++) {
    els.push(icons[i].iconName.replace(/\:/gi, ''))
  }

  return els
}

//Получить список всех модификаторов (шрифтов или отступов)
//В качестве модификатора передается массив модификаторов из соответствующего
// JSON файла. (JSON файлы лежат в корне проекта, в одноименной папке)
export const getModificatorsList = (
  modificator, modificatorName = 'modificatorName') => {
  var els = []

  for (let i = 0; i < modificator.length; i++) {
    els.push(modificator[i][modificatorName])
  }

  return els
}

//Рендер описания к модификатору компонента
export const renderDescription = (description) => {
  return {
    docs: {
      description: {
        story: description,
      },
    },
  }
}

//Генерация однотипных элементов без параметров
export const generateStaticItems = (template, amount) => {
  let str = ''

  for (let i = 0; i < amount; i++) {
    str += `${template}`
  }

  return str
}

  