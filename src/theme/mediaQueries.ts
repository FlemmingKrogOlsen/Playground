const customMediaQuery = (maxWidth: number) =>
  `@media (min-width: ${maxWidth}px)`;

const media = {
  custom: customMediaQuery,
  xl: customMediaQuery(1200),
  lg: customMediaQuery(992),
  md: customMediaQuery(768),
  sm: customMediaQuery(576),
};

export default media;
