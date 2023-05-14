export const getFromLocalStorage = (item) => {
  return localStorage.getItem(item);
};

export const saveToLocalStorage = (time, rolls) => {
  localStorage.setItem('time', time);
  localStorage.setItem('rolls', rolls);
};
