// Экспортируй функции используя экспорт по умолчанию

function firstElement(arr) {
  return arr[0];
}

function lastElement(arr) {
  return arr[arr.length - 1];
}

// оператор экспорта нужно прописать ниже
export default { firstElement, lastElement };
