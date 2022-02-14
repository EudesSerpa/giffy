export const breakpoints = {
  greaterThanTablet: "@media screen and (min-width: 770px)",
  smallerThanDesktop: "@media screen and (max-width: 45rem)",
};

export const theme = {
  colors: {
    textColor: "var(--theme-body-txt)",
    primary: "var(--brand-color_3)",
  },
  fontSizes: {
    medium: "var(--fz)",
  },
  paddings: {
    xs: "4px",
    s: "8px",
    m: "16px",
    l: "32px",
  },
};

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

let colorIndex = getRandomInt(1, 6);

export function generateMultiColor(props) {
  /**
   * Background and text color generator.
   */
  const NEED_WHITE_COLOR = [3, 4];

  if (props.index) {
    colorIndex = (props.index % 5) + 1;
  } else {
    colorIndex = getRandomInt(1, 6);
  }

  const needWhite = NEED_WHITE_COLOR.includes(colorIndex);
  const colorText = needWhite ? "#FFF" : "var(--theme-body-bg)";

  return `
    color: ${colorText};
    background-color: var(--brand-color_${colorIndex});
  `;
}

export function generateBoxShadow() {
  return `box-shadow: 0 0 0 var(--gridList-gap) var(--brand-color_${colorIndex});`;
}
