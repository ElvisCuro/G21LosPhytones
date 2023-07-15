export const formatCurrency = (amount) => {
  return amount.toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 2 });
};

export const convertToStars = (rating) => {
  let stars = '';
  let wholeStars = Math.floor(rating);
  let halfStar = rating - wholeStars;
  for (let index = 0; index < wholeStars; index++) {
    stars += '⭐';
  }
  (halfStar > 0) && (stars += '✨')

  return stars;
};

export const setTienditaFelizCart = (data) => window.localStorage.setItem('tienditaFelizCart', JSON.stringify(data));