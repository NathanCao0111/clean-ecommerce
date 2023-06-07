import images from '../assets/images';

const products = [
  {
    id: 1,
    title: 'Little Armchair Sheepskin',
    description:
      'Tradition Little Petra VB1 Armchair Sheepskin Moonlight/ Walnut/ Brass Limited Edition | We give you a special discount when you put this product in the basket.',
    price: 986,
    image: `${images.sheepArmchair}`,
  },
  {
    id: 2,
    title: 'Pop-Up Toaster',
    description:
      'The rounded square design of the toaster allows it to fit neatly against a wall, or inside a corner. Excellent at defrosting, and with the perfect breadtoheater distance to give crunchy toast with a soft, spongey middle.',
    price: 45,
    image: `${images.toaster}`,
  },
  {
    id: 3,
    title: 'Lamp Light Blue',
    description:
      'The Verner Panton Flowerpot , designed in 1968, was originally intended for the restaurant industry and Verner Panton exhibitions.',
    price: 79,
    image: `${images.blueLamp}`,
  },
  {
    id: 4,
    title: 'Pulp Unit - 5 Compartments',
    description:
      'Pulp Units are lightweight and durable, and can be used horizontally or vertically. Designed with A4 paper in mind, MUJI angle files and ring binders fit neatly inside.',
    price: 254,
    image: `${images.compartments}`,
  },
  {
    id: 5,
    title: 'Golden Modern Light',
    description:
      'Tom Dixon and FRONT have created an incredibly beautiful pendant, in a completely unique design. The lamp is made using a special metallization technology that makes the look completely unique. The first of its kind. the lamp is transparent when its on and you can see the exciting play of colors.',
    price: 189,
    image: `${images.light}`,
  },
  {
    id: 6,
    title: 'Body Oil 200ml',
    description:
      'Made from 100% plant-based oils with olive oil as the main ingredient, this cleansing oil is gentle on the skin. Free from fragrance, colours and, mineral oils, paraben free, alcohol free, allergy tested (we cannot guarantee that it will not cause allergies in any users) * How to use: Take a small amount in the palm of your hand, and massage into the face to remove make-up and dirt. Rinse well with cold or warm water',
    price: 67,
    image: `${images.bodyOil200}`,
  },
  {
    id: 7,
    title: 'Black and White Lamp',
    description:
      'Concept: Dot is inspired by perforated metal and the patterns that light creates when it shines through the small holes. The contrast between the coarse perforated metal and the smooth opal glass makes the Dot a simple and meaningful pendant. With its elegant expression, Shine, whether the light is on or off.',
    price: 220,
    image: `${images.monochromeLamp}`,
  },
  {
    id: 8,
    title: 'Gejst Shelf A Black Ash/Black',
    description:
      'Designed by Böttcher & Kayser, Nivo is a minimalist wall shelf designed with functionality and aesthetics in mind. Without unnecessary details and clean lines, this collection hangs easily and elegantly on the wall, creating calm and an overview of the things you want to put on the shelf.',
    price: 115,
    image: `${images.shelf}`,
  },
  {
    id: 9,
    title: 'Cube Lolo Vase Black',
    description:
      'Kubus Vase Lolo was originally designed by Søren Lassen in 2014, but was launched in connection with by Lassens 10 year anniversary 2018. The vase is a natural and sought-after extension of the series, which already counts the Kubus candlesticks and Kubus Bowl Bowl. Set it alone or in a still life, fill it with airy, colorful flowers for a feminine look or leave it alone in all its simplicity and precision.',
    price: 161,
    image: `${images.vase}`,
  },
  {
    id: 10,
    title: 'Traditional Armchair',
    description:
      "Concept: &Tradition's Boomerang lounge chair is a classic Danish design with a modern and minimalist expression. The chair was designed by Hvidt & Mølgaard in 1956, and with its stylish cushions and hand-polished wooden frame, it is an ideal Nordic design that gives a personal mark to the home.",
    price: 89,
    image: `${images.traditionalArmchair}`,
  },
  {
    id: 11,
    title: 'The Sun Pendant Black',
    description:
      'The Here Comes The Sun pendant designed by Bertrand Balas is a quality lamp with a unique and magical look. The Here Comes The Sun series has a fantastic expression and especially swhen turned on it creates a very special atmosphere in the room it hangs in. The lamp fits perfectly above both dining room table, kitchen counter, and as living room lighting .',
    price: 160,
    image: `${images.pendantLamp}`,
  },
  {
    id: 12,
    title: 'Simple Golden Lamp',
    description:
      'Verner Panton Flowerpot, designed in 1968, was originally meant for the hospitality industry and Verner Panton displays and showrooms. The lamp then became popular in private homes, and due to its stylish design and many colour choices, it has made a major comeback in recent years.',
    price: 220,
    image: `${images.goldenLamp}`,
  },
  {
    id: 13,
    title: 'Unbleached Cotton Pads 180',
    description: 'Cotton pads made from soft, unbleached cotton. These are made in Japan and made from 100% cotton.',
    price: 33,
    image: `${images.cottonPad}`,
  },
  {
    id: 14,
    title: 'Oak Spanish Chair',
    description:
      'When talking about Børge Mogensen, The Spanish Chair is probably one of the first designs you would think of, which makes good sense as it is also one of his most recognized products around the world.',
    price: 520,
    image: `${images.spanishChair}`,
  },
  {
    id: 15,
    title: 'Copenhagen Armchair',
    description:
      'Concept: The Hyg series by Danish Normann Copenhagen is a series of chairs based on the Danish word Hygge. The designer Simon Legald has tried to embody the meaning of the word around security, warmth and convenience in a furniture series. This is expression in the fine organic shapes and hearty curves that provide a high degree of sitting comfort and well-being in the chairs.',
    price: 330,
    image: `${images.copenhagenChair}`,
  },
  {
    id: 16,
    title: 'Anti Dark Light',
    description:
      'Easy Mini W75 from Antidark lives fully up to its name. Simple design, comfortable light, easy to adjust. The Easy Wall Light has made it easy for the user to handle, well, everything! The Easy lamp can turn 360 degrees and be tipped. An ideal lamp that can be placed in connection with other lamps to achieve light in all corners of the room. Furthermore, the lamp can work as a wall light or ceiling.',
    price: 120,
    image: `${images.antiDark}`,
  },
  {
    id: 17,
    title: 'Table Lamp',
    description:
      "The lamp has also become popular in private homes and has especially made a comeback in recent years. This is not least due to the lamp's stylish design and the many color options that make it fit everywhere.",
    price: 75,
    image: `${images.tableLamp}`,
  },
  {
    id: 18,
    title: 'Mat Black Lamp',
    description:
      'Unique offer We give you a special discount when you put this product in the basket. *Only applies to specific products.',
    price: 175,
    image: `${images.blackLamp}`,
  },
  {
    id: 19,
    title: 'Comfy Chair',
    description:
      "Sum is a series designed by the Danish designer Simon Legald, who is the epitome of modern elegance. Elegant and resolute as the tip of a wing, the armrests spread out invitingly, as if they want to embrace you in the armchair's soft, homely space.",
    price: 119,
    image: `${images.comfyChair}`,
  },
  {
    id: 20,
    title: 'Body Oil 50ml',
    description:
      'Made from 100% plant-based oils with olive oil as the main ingredient, this cleansing oil is gentle on the skin. Free from fragrance, colours and, mineral oils, paraben free, alcohol free, allergy tested (we cannot guarantee that it will not cause allergies in any users) * How to use: Take a small amount in the palm of your hand, and massage into the face to remove make-up and dirt. Rinse well with cold or warm water.',
    price: 45,
    image: `${images.bodyOil50}`,
  },
];

export default products;
