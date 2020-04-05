const colors = {
  primaryColor: "#AF9A7D",
  white: "#FFF",
  grey: "#ECECEC",
  lightGrey: "#F7F7F7",
};

const fonts = {
  roboto: "font-family: 'Roboto', sans-serif;",
};

const flex = (x: string, y: string) => {
  return `
    display: flex;
    align-items: ${y};
    justify-content: ${x};
  `;
};

const background = (img: string, color: string) => {
  return `
  background: linear-gradient(${color}, ${color}),
  url(${img}) center/cover fixed no-repeat;`;
};

const rem = (pixels: number = 16) => {
  return `${pixels / 16}rem`;
};

export const theme = {
  colors,
  fonts,
  flex,
  background,
  rem,
};
