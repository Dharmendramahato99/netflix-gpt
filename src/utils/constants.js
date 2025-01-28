export const LOGO = "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"

export const USER_AVATAR = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7Kx-vplluOaYeII5PbHMg86NQRRs3AEMrj1i2-J_UFvOOrC-q0tgKDqVSlg&s"

export const API_OPTIONS = {
    method: "GET",
    headers: {
        accept: "application/json",
        Authorization:
         "Bearer " + process.env.REACT_APP_TMDB_KEY,
    }, 
};

export const IMG_CDN_URL ="https://image.tmdb.org/t/p/w500";

export const BG_URL = "https://i.redd.it/zjgs096khv591.jpg";

export const SUPPORTED_LANGUAGES = [
    {identifier:"en",name:"English"},
    {identifier:"hindi",name:"Hindi"},
    {identifier:"spanish",name:"Spanish"},
];

export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY;