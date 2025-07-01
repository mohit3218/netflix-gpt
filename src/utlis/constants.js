export const LOGO = "/netflix-logo.png";
export const USER_AVATAR =
  "https://avatars.githubusercontent.com/u/83151065?s=48&v=4";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YWRiNDI5ODUwMjQ1NGMzMzBkYzc0NzkyNjhmYTUwNiIsIm5iZiI6MTc1MTM0NzQzMi4zMTAwMDAyLCJzdWIiOiI2ODYzNzBlOGI1MTNhODEyZmRiYjM4OTkiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.mWeaaGpPy-TsFcgAgS0CxXNduNIsZD7quK9OiO9bGAc'
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

<<<<<<< HEAD
export const OPENAI_KEY = `${process.env.REACT_APP_OPENAI_API_KEY}`;
=======
export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY;
>>>>>>> e94c598 (1.) Secure openAI and TMDB API key)
