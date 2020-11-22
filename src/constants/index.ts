// screen names defined to prevent typo
export const SCREENS = {
  home: 'home',
  splash: 'splash',
  connectionDetails: 'connectionDetails',
} as const;

// duration for which splash screen stays
export const SPLASH_TIMEOUT = 2000;

// preferable to put API endpoints and keys in a .env file
export const API = 'https://randomuser.me/api/?results={limit}';

// no of placeholder cards to be displayed while lazy loading
export const LAZY_LOAD_PLACEHOLDER_COUNT = 3;
