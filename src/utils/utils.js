export const randomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const colors = [
  { id: 1, color: "#292A2D", selected: false },
  { id: 2, color: "#F3ECE2", selected: false },
  { id: 3, color: "#24426A", selected: false },
  { id: 4, color: "#18574A", selected: false },
  { id: 5, color: "#666689", selected: false },
  { id: 6, color: "#C2BEB6", selected: false },
  { id: 7, color: "#AAABA7", selected: false },
  { id: 8, color: "#971E34", selected: false },
  { id: 9, color: "#CBA13E", selected: false },
  { id: 10, color: "#73513C", selected: false },
  { id: 11, color: "#DAB1B1", selected: false },
  { id: 12, color: "#2B9FA7", selected: false },
];

export function getRandomColors(num, selected) {
  const shuffledColors = colors.sort(() => Math.random() - 0.5);
  return shuffledColors.slice(0, num).map((color, i) => {
    if (selected === i + 1) {
      return {
        ...color,
        selected: true,
      };
    }
    return color;
  });
}

export function formatPrice(value, price) {
  const totalPrice = Math.round(value * price * 100) / 100;
  const formattedPrice = totalPrice.toLocaleString();
  return `${formattedPrice} Eur`;
}
