import React from 'react';

export type ThemeProviderProps = {
  injectId?: string;
  linkId?: string;
  defaultTheme?: string;
  themeMap?: {
    [key: string]: string;
  };
};

interface RootComponent extends React.FC<ThemeProviderProps> {
  Theme: typeof Context;
}

export const CssThemeProvider: RootComponent;
export const useTheme = (ctx?: Context<any>) => any;
