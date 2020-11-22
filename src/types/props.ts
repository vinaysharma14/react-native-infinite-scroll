// common prop types across the app

export interface Navigation {
  replace: (screenName: string) => void;
  navigate: (screenName: string) => void;
}
