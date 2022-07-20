const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export const getToday = () =>{
  const date = new Date();
  return `${days[date.getDay()].slice(0,3)}, ${date.getDate()} ${months[date.getMonth()].slice(0,3)}`;
}

export const transformDate = (selectedDate) =>{
  const date = new Date (selectedDate + 'T00:00:00');
  return `${days[date.getDay()].slice(0,3)}, ${date.getDate()} ${months[date.getMonth()].slice(0,3)}`;
}

export default getToday;