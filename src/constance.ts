import granEspresso from "./assets/home/desktop/image-gran-espresso.png";
import planalto from "./assets/home/desktop/image-planalto.png";
import piccollo from "./assets/home/desktop/image-piccollo.png";
import danche from "./assets/home/desktop/image-danche.png";
import coffeeBean from "./assets/home/desktop/icon-coffee-bean.svg";
import gift from "./assets/home/desktop/icon-gift.svg";
import truck from "./assets/home/desktop/icon-truck.svg";
import uk from "./assets/about/desktop/illustration-uk.svg";
import canada from "./assets/about/desktop/illustration-canada.svg";
import australia from "./assets/about/desktop/illustration-australia.svg";
import arrowDown from "./assets/plan/desktop/icon-arrow.svg";

export const dataProcedure = [
  {
    step: "01",
    header: "Pick your coffee",
    text: "Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out.",
  },
  {
    step: "02",
    header: "Choose the frequency",
    text: "Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal.",
  },
  {
    step: "03",
    header: "Receive and enjoy!",
    text: "We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning world-class coffees curated to provide a distinct tasting experience.",
  },
];

export const collectionData = [
  {
    img: granEspresso,
    header: "Gran Espresso",
    text: "Light and flavorful blend with cocoa and black pepper for an intense experience",
  },
  {
    img: planalto,
    header: "Planalto",
    text: "Brazilian dark roast with rich and velvety body, and hints of fruits and nuts",
  },
  {
    img: piccollo,
    header: "Piccollo",
    text: "Mild and smooth blend featuring notes of toasted almond and dried cherry ",
  },
  {
    img: danche,
    header: "Danche",
    text: "Ethiopian hand-harvested blend densely packed with vibrant fruit notes",
  },
];

export const whyChooseUsData = [
  {
    icon: coffeeBean,
    header: "Best quality",
    text: "Discover an endless variety of the world’s best artisan coffee from each of our roasters.",
  },
  {
    icon: gift,
    header: "Exclusive benefits",
    text: "Special offers and swag when you subscribe, including 30% off your first shipment.",
  },
  {
    icon: truck,
    header: "Free shipping",
    text: "We cover the cost and coffee is delivered fast. Peak freshness: guaranteed.",
  },
];

export const headquartersData = [
  {
    img: uk,
    name: "United Kingdom",
    address: ["68 Asfordby Rd", "Alcaston", "SY6 1YA", "+44 1241918425"],
  },
  {
    img: canada,
    name: "Canada",
    address: [
      "1528  Eglinton Avenue",
      "Toronto",
      "Ontario M4P 1A6",
      "+1 416 485 2997",
    ],
  },
  {
    img: australia,
    name: "Australia",
    address: ["36 Swanston Street", "Kewell", "Victoria", "+61 4 9928 3629"],
  },
];

export const coffeeQuestions = [
  {
    question: "How do you drink your coffee?",
    icon: arrowDown,
    isOpen: false,
    answers: [
      {
        type: "preferences",
        answer: {
          name: "Capsule",
          text: "Compatible with Nespresso systems and similar brewers",
        },
      },
      {
        type: "preferences",
        answer: {
          name: "Filter",
          text: "For pour over or drip methods like Aeropress, Chemex, and V60",
        },
      },
      {
        type: "preferences",
        answer: {
          name: "Espresso",
          text: "Dense and finely ground beans for an intense, flavorful experience",
        },
      },
    ],
  },
  {
    question: "What type of coffee?",
    icon: arrowDown,
    isOpen: false,
    answers: [
      {
        type: "beanType",
        answer: {
          name: "Single Origin",
          text: "Distinct, high quality coffee from a specific family-owned farm",
        },
      },
      {
        type: "beanType",
        answer: {
          name: "Decaf",
          text: "Just like regular coffee, except the caffeine has been removed",
        },
      },
      {
        type: "beanType",
        answer: {
          name: "Blended",
          text: "Combination of two or three dark roasted beans of organic coffeesd",
        },
      },
    ],
  },
  {
    question: "How much would you like?",
    icon: arrowDown,
    isOpen: false,
    answers: [
      {
        type: "quantity",
        answer: {
          name: "250g",
          text: "Perfect for the solo drinker. Yields about 12 delicious cups.",
        },
      },
      {
        type: "quantity",
        answer: {
          name: "500g",
          text: "Perfect option for a couple. Yields about 40 delectable cups.",
        },
      },
      {
        type: "quantity",
        answer: {
          name: "1000g",
          text: "Perfect for offices and events. Yields about 90 delightful cups.",
        },
      },
    ],
  },
  {
    question: "Want us to grind them?",
    icon: arrowDown,
    isOpen: false,
    answers: [
      {
        type: "grindOption",
        answer: {
          name: "Wholebean",
          text: "Best choice if you cherish the full sensory experience",
        },
      },
      {
        type: "grindOption",
        answer: {
          name: "Filter",
          text: "For drip or pour-over coffee methods such as V60 or Aeropress",
        },
      },
      {
        type: "grindOption",
        answer: {
          name: "Cafetiére",
          text: " Course ground beans specially suited for french press coffee",
        },
      },
    ],
  },
  {
    question: "How often should we deliver?",
    icon: arrowDown,
    isOpen: false,
    answers: [
      {
        type: "deliveries",
        answer: {
          name: "Every week",
          text: "$7.20 per shipment. Includes free first-class shipping.",
        },
      },
      {
        type: "deliveries",
        answer: {
          name: "Every 2 weeks",
          text: "$9.60 per shipment. Includes free priority shipping.",
        },
      },
      {
        type: "deliveries",
        answer: {
          name: "Every month",
          text: "$12.00 per shipment. Includes free priority shipping.",
        },
      },
    ],
  },
];
