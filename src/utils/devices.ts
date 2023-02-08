const sizes = {
  mobile: "390px",
  tablet: "768px",
  pricing: "1000px",
  desktop: "1440px",
};

export const devices = {
  mobile: `(min-width: ${sizes.mobile})`,
  tablet: `(min-width: ${sizes.tablet})`,
  tabletMax: `(max-width: ${sizes.tablet})`,
  pricing: `(max-width: ${sizes.pricing})`,
  pricingMin: `(min-width: ${sizes.pricing})`,
  desktop: `(min-width: ${sizes.desktop})`,
};
