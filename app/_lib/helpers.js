const currentDate = new Date().getFullYear()

export const getCurrentYear = () => currentDate > 2024 ? `2024 - ${currentDate}` : currentDate

export function removeDuplicates(data){
    return data.filter((obj1, i, arr) => 
        arr.findIndex(obj2 => 
          ['title', 'slug'].every(key => obj2[key] === obj1[key])
        ) === i
      )
}

export const uniqueCount = (data) => data.reduce((acc, { title, slug }) => {
  if (!acc[slug]) {
    acc[slug] = { title, slug, count: 0 };
  }
  acc[slug].count += 1;
  return acc;
}, {});

export function setActive (pathname, actualPath) {
  return pathname === actualPath ? 'font-normal' : ''
}

export const separate = (array, index) => {
  return index + 1 === array.length ? " - " : ", ";
};
