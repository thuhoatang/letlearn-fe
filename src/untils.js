function formatNumber(num = 0) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}
function formatDate(dateString) {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}

export { formatNumber, formatDate };
