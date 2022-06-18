import React from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import theme from '@/theme';

interface Props {
  children: React.ReactNode;
}
export default function ThemeProvider({ children }: Props) {
  return <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>;
}
