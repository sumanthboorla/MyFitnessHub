export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    // For safety we have put our API key inside env folder
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
  },
};

export const youtubeOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
    "X-RapidAPI-Key": '02002c9639mshb430a989bc617c2p1af693jsn4e86ab93ee6d',
  },
};

export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();

  return data;
};
