// ---------------------------------------------------------------------------
// Edit here. Every editable fact about the cafe lives in this one file.
// ---------------------------------------------------------------------------

// The single most important line to check: where "View Menu" sends people.
// Swap this for a PDF link, a Google Drive menu, or a dedicated menu page
// whenever you have one — everything else updates automatically.
export const MENU_URL = "https://www.zomato.com/hyderabad/livi-cafe-kitchen-medipally/menu";

export const DIRECTIONS_URL =
  "https://www.google.com/maps/search/?api=1&query=Livi+Cafe+%26+Kitchen+Sark+Green+Fields+White+Palazzo+Hno+12-258+Shankarpalle+Mokila+Hyderabad+Telangana+501203";

export const MAP_EMBED_URL =
  "https://www.google.com/maps?q=Livi+Cafe+%26+Kitchen+Sark+Green+Fields+White+Palazzo+Hno+12-258+Shankarpalle+Mokila+Hyderabad+Telangana+501203&output=embed";

export const PHONE_DISPLAY = "077708 77738";
export const PHONE_TEL = "+917770877738";

export const ADDRESS_LINES = [
  "Sark Green Fields, White Palazzo",
  "Hno 12-258, Shankarpalle, Mokila",
  "Hyderabad, Telangana 501203",
];

export const HOURS = "Open daily · 10:00 AM – 11:30 PM";

export const RATING_SOURCES = [
  { name: "Google", rating: "4.7", count: "188 reviews", url: "https://www.google.com/search?q=livi+cafe+%26+kitchen" },
  { name: "Justdial", rating: "4.5", count: "211 votes", url: "https://www.justdial.com/Rangareddy/Livi-Cafe-Kitchen-Shankarpalli/040PXX40-XX40-251218031825-P8V8_BZDET" },
  { name: "Zomato", rating: "4.1", count: "540 votes", url: "https://www.zomato.com/hyderabad/livi-cafe-kitchen-medipally" },
  { name: "Swiggy", rating: "4.1", count: "54 reviews", url: "https://www.swiggy.com/city/hyderabad/livi-cafe-and-kitchen-shankarpalli-rest1305956" },
];

export type Review = {
  name: string;
  when: string;
  meal?: string;
  text: string;
};

export const REVIEWS: Review[] = [
  {
    name: "Saurabh Shetkar",
    when: "2 months ago · Dinner",
    text: "Called out the ambience and food quality as top notch, with special thanks to Roshan for fast, attentive service.",
  },
  {
    name: "Vasantha Manthena",
    when: "2 months ago",
    text: "Loved the spacious, chill setting — says the butter garlic prawns are a standout and Roshan looked after their table well.",
  },
  {
    name: "Udaykiran Alli",
    when: "6 months ago",
    text: "Says every dish arrives fresh and full of flavour, with ingredients that are clearly well sourced and well kept.",
  },
  {
    name: "Anil Kumar",
    when: "7 months ago",
    text: "Sums it up as excellent food and outstanding hospitality — everything tasted genuinely fresh.",
  },
  {
    name: "Linith Diaries",
    when: "5 months ago",
    text: "Describes a pleasant atmosphere with music and fresh air, and thanks Ganesh Kumar for service worth coming back for.",
  },
  {
    name: "Viwhan Raj G",
    when: "4 months ago · Dinner",
    text: "Calls it the place to go whatever your mood — the menu stretches wide enough to fit any craving.",
  },
  {
    name: "Aksa Lovely",
    when: "2 weeks ago",
    text: "Raves about the food and says the whole group had fun with the cafe's friendly resident pets.",
  },
  {
    name: "Biswanath Das",
    when: "3 months ago · Dinner",
    text: "Praises the food's taste and presentation, and says the service left a strong impression.",
  },
];

export type GalleryImage = { src: string; alt: string; caption: string };

export const GALLERY: GalleryImage[] = [
  {
    src: "https://b.zmtcdn.com/data/pictures/4/22408794/cbef845a503616a75a06f11dd399adbc.jpeg",
    alt: "Garden-style cafe seating under trees",
    caption: "Garden seating",
  },
  {
    src: "https://b.zmtcdn.com/data/pictures/chains/4/22408794/21a9be60dcdd5c76ae06dd2e87c0245e.jpeg",
    alt: "Wood-fired pizza fresh from the oven",
    caption: "Wood-fired pizza",
  },
  {
    src: "https://b.zmtcdn.com/data/pictures/chains/4/22408794/14d60e64e273b64ebaf802330ef7c48f.jpeg",
    alt: "Plated dinner with garnish",
    caption: "From the kitchen",
  },
  {
    src: "https://content.jdmagicbox.com/v2/comp/rangareddy/v8/040pxx40.xx40.251218031825.p8v8/catalogue/livi-cafe-and-kitchen-shankarpalle-rangareddy-restaurants-f3rkwmkn82.jpg",
    alt: "Cafe table set for two with warm lighting",
    caption: "Evening tables",
  },
  {
    src: "https://b.zmtcdn.com/data/pictures/chains/4/22408794/7904de56476cf2bfc172f9db07fe7839.jpeg",
    alt: "Latte art in a ceramic cup",
    caption: "Slow coffee",
  },
  {
    src: "https://b.zmtcdn.com/data/pictures/4/22408794/426c5ca15629350593792c8c836a6479.jpeg",
    alt: "String lights over an outdoor dining area at dusk",
    caption: "String-lit evenings",
  },
];
