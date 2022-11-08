export const getRegNumber = (str: string | number): string => {
  return Number(str)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};
