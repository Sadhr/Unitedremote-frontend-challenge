export default dateFrom => {
  const start = new Date(dateFrom),
    end = new Date();
  let diff = 0,
    days = 1000 * 60 * 60 * 24;

  diff = end - start;
  return Math.floor(diff / days);
};
