const currentDate = new Date().getFullYear()

export const getCurrentYear = () => currentDate > 2024 ? `2024 - ${currentDate}` : currentDate

export function removeDuplicates(data){
    return data.filter((obj1, i, arr) => 
        arr.findIndex(obj2 => 
          ['title', 'category'].every(key => obj2[key] === obj1[key])
        ) === i
      )
}

export function setActive (pathname, actualPath) {
  return pathname === actualPath ? 'font-normal' : ''
}

export const separate = (array, index) => {
  return index + 1 === array.length ? "" : ", ";
};
