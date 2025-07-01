export const LOGO = "/netflix-logo.png";
export const USER_AVATAR =
  "https://avatars.githubusercontent.com/u/83151065?s=48&v=4";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: 'Bearer ' + `${process.env.REACT_APP_TMDB_KEY}`
  },
};

export const IMG_URL_CDN = "https://image.tmdb.org/t/p/w780";

export const BG_URL = "/netflix-bg-img.jpg";

export const SUPPORTED_LANGUAGES = [
  { identifier: "en", name: "English" },
  { identifier: "hindi", name: "Hindi" },
  { identifier: "spanish", name: "Spanish" },
  { identifier: "fn", name: "French" },
];

export const OPENAI_KEY = `${process.env.REACT_APP_OPENAI_KEY}`
