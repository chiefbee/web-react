import { css, ThemedCssFunction } from "styled-components";

enum Device {
  MOBILE = "mobile",
  TABLET = "tablet",
  DESKTOP = "desktop",
  WIDESCREEN = "widescreen",
}

const sizes: { [key in Device]: number } = {
  mobile: 576,
  tablet: 768,
  desktop: 992,
  widescreen: 1200,
};

export const media = (Object.keys(sizes) as (keyof typeof sizes)[]).reduce(
  (acc, label) => {
    acc[label] = (first: any, ...interpolations: any[]) => css`
      @media (min-width: ${sizes[label] / 16}em) {
        ${css(first, ...interpolations)}
      }
    `;

    return acc;
  },
  {} as {
    [key in keyof typeof sizes]: ThemedCssFunction<{ [key in Device]: number }>;
  }
);
