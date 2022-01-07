import React, { createContext, useEffect, useState } from 'react';

interface ThemeContextType {
  theme: ThemeOption;
  requestThemeChange: (themeOption: ThemeOption) => void;
}

export const ThemeContext = createContext<ThemeContextType | null>(null);

interface Props {
  children: JSX.Element;
}

export enum ThemeOption {
  light,
  dark,
  system,
}

export const ThemeProvider = ({ children }: Props) => {
  const [theme, setTheme] = useState<ThemeOption>(ThemeOption.system);
  const themeStorageItemName = 'color-theme';

  /// We need to ensure that the root element of the window has
  /// the tailwind dark class if the theme is dark mode
  /// In all other cases we want to ensure that this class is removed
  const applyTheme = (themeOption: ThemeOption) => {
    const root = window.document.documentElement;
    const darkClass = 'dark';
    const isDark =
      themeOption === ThemeOption.dark ||
      (themeOption === ThemeOption.system &&
        window.matchMedia('(prefers-color-scheme: dark)').matches);

    root.classList.remove(darkClass);

    if (isDark) {
      // Only add if needed
      if (!root.classList.contains(darkClass)) root.classList.add(darkClass);
    } else {
      // Only remove if needed
      if (root.classList.contains(darkClass)) root.classList.remove(darkClass);
    }
  };

  const persistThemeOption = (themeOption: ThemeOption) => {
    // console.log(`*** persistThemeOption ${themeOption.toString()}`);
    localStorage.setItem(themeStorageItemName, themeOption.toString());
  };

  const getStoredThemeOption = (): ThemeOption => {
    const localStorageValue = localStorage.getItem(themeStorageItemName);
    // console.log(`Stored localStorageValue ${localStorageValue}`);

    if (!localStorageValue) return ThemeOption.system; // System is default

    // // console.log(
    //   `localStorageValue === light.toString() ${ThemeOption.light.toString() === localStorageValue}`
    // );
    // // console.log(`ThemeOption.light.toString() ${ThemeOption.light.toString()}`);
    // // console.log(`ThemeOption.dark.toString() ${ThemeOption.dark.toString()}`);

    switch (localStorageValue) {
      case ThemeOption.light.toString():
        // console.log('getStoredThemeOption matched light');
        return ThemeOption.light;
      case ThemeOption.dark.toString():
        // console.log('getStoredThemeOption matched dark');
        return ThemeOption.dark;
      default:
        // console.log('getStoredThemeOption matched system');
        return ThemeOption.system;
    }
  };

  // Set the initial theme value on load
  useEffect(() => {
    // console.log(`component loading`);
    const storedThemeOption = getStoredThemeOption();
    setTheme(storedThemeOption);
  }, []); // [] means that this effect will only run once

  // Handle when the theme changes
  useEffect(() => {
    // console.log(`applying theme ${theme}`);
    applyTheme(theme);
  }, [theme]);

  const requestThemeChange = (themeOption: ThemeOption): void => {
    setTheme(themeOption);

    // Remember for next time page loads
    persistThemeOption(themeOption);
  };

  return (
    <ThemeContext.Provider value={{ theme, requestThemeChange }}>{children}</ThemeContext.Provider>
  );
};
