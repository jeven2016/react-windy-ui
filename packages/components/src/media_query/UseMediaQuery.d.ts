export type ResponsiveProps = {
  xs: { max: string };
  sm: {
    min: string;
    max: string;
    exact: string;
  };
  md: {
    min: string;
    max: string;
    exact: string;
  };
  lg: {
    min: string;
    max: string;
    exact: string;
  };
  xg: {
    min: string;
    max: string;
    exact: string;
  };
};

export const Responsive: ResponsiveProps;

declare const useMediaQuery: (query?: string | object) => any;

export default useMediaQuery;
