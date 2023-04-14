export const colors = [
  "#292A2D",
  "#F3ECE2",
  "#24426A",
  "#18574A",
  "#666689",
  "#C2BEB6",
  "#AAABA7",
  "#971E34",
  "#CBA13E",
  "#73513C",
  "#DAB1B1",
  "#2B9FA7",
];

export const sizes = [
  "OSFA",
  "W26",
  "W27",
  "W28",
  "W29",
  "W30",
  "W31",
  "W32",
  "W33",
  "W34",
  "W35",
  "W36",
  "W38",
  "W40",
  "W42",
  "W44",
  "W46",
  "W48",
  "W50",
  "W52",
];

export const randomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

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

export function calcAndFormatTotalPrice(quantity, price) {
  const totalPrice = Math.round(quantity * price * 100) / 100;
  const formattedPrice = totalPrice.toLocaleString();
  return `${formattedPrice} EUR`;
}

export function formatPrice(price) {
  const totalPrice = Math.round(price * 100) / 100;
  const formattedPrice = totalPrice.toLocaleString();
  return `${formattedPrice} EUR`;
}

export function createColorArray(array, defaultSel) {
  return array.map((color, index) => {
    return {
      id: index + 1,
      color: color,
      selected: defaultSel === index + 1,
    };
  });
}

export function createSizeArray(array, defaultSel) {
  return array.map((size, index) => {
    return {
      id: index + 1,
      size: size,
      selected: defaultSel === index + 1,
      available: true,
    };
  });
}

export function markAvailableSizes(array, availableSizes) {
  for (let i = 0; i < array.length; i++) {
    if (availableSizes.includes(array[i].size)) {
      array[i].available = true;
      if (availableSizes[0] === array[i].size) {
        array[i].selected = true;
      }
    } else {
      array[i].available = false;
    }
  }

  return array;
}
