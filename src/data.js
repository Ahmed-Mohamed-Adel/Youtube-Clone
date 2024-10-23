export const API_KEY = "AIzaSyBLMBf8Ohlk5VgDN6Hh8G5TvGA741UWlDM";

export const value_converter = (value) => {
  if (value >= 1000000) {
    return Math.floor(value / 1000000) + "M";
  } else if (value >= 1000) {
    return Math.floor(value / 1000) + "K";
  } else {
    return value;
  }
};
