import { useState, useEffect } from 'react';
import ProductsContext from './Context';

function Provider({ children }) {
  const [products, setProducts] = useState([
    {
      title: 'Little Armchair Sheepskin',
      description:
        'Tradition Little Petra VB1 Armchair Sheepskin Moonlight/ Walnut/ Brass Limited Edition | We give you a special discount when you put this product in the basket.',
      price: 986,
      image: {
        bigImg: 'https://minimalist-e-commerce.vercel.app/static/media/1.122c04e77ef5da9e8406.jpg',
        smallImgs: {
          smallImg1: 'https://minimalist-e-commerce.vercel.app/static/media/1.122c04e77ef5da9e8406.jpg',
          smallImg2: 'https://minimalist-e-commerce.vercel.app/static/media/other1.e7ce61a0c0006d1aadc7.jpg',
          smallImg3: 'https://minimalist-e-commerce.vercel.app/static/media/other2.c6414ba09324f944da2a.jpg',
        },
      },
      specs: {
        texture: 'Sheep Skin',
        weight: '15kg',
        size: '150cm x 70cm',
      },
      category: 5,
      id: '1',
    },
    {
      title: 'Pop-Up Toaster',
      description:
        'The rounded square design of the toaster allows it to fit neatly against a wall, or inside a corner. Excellent at defrosting, and with the perfect breadtoheater distance to give crunchy toast with a soft, spongey middle.',
      price: 45,
      image: {
        bigImg: 'https://minimalist-e-commerce.vercel.app/static/media/2.f312c91f99a2c3a60550.jpg',
        smallImgs: {
          smallImg1: 'https://minimalist-e-commerce.vercel.app/static/media/2.f312c91f99a2c3a60550.jpg',
          smallImg2: 'https://minimalist-e-commerce.vercel.app/static/media/toster1.5c2e82f256422651b822.jpg',
          smallImg3: 'https://minimalist-e-commerce.vercel.app/static/media/toster2.e516d42d430a0e13484d.jpg',
        },
      },
      specs: {
        texture: 'Plastic',
        weight: '3.5kg',
        size: '20cm x 10cm',
      },
      category: 4,
      id: '2',
    },
    {
      title: 'Lamp Light Blue',
      description:
        'The Verner Panton Flowerpot , designed in 1968, was originally intended for the restaurant industry and Verner Panton exhibitions.',
      price: 79,
      image: {
        bigImg: 'https://minimalist-e-commerce.vercel.app/static/media/3.4c8f91797d8ef5e0206c.png',
        smallImgs: {
          smallImg1: 'https://minimalist-e-commerce.vercel.app/static/media/3.4c8f91797d8ef5e0206c.png',
          smallImg2: 'https://minimalist-e-commerce.vercel.app/static/media/lampblue1.297e7e034d284bf7e41d.webp',
          smallImg3: 'https://minimalist-e-commerce.vercel.app/static/media/lampblue2.73f0400f46c05dc80cfb.webp',
        },
      },
      specs: {
        texture: 'Plastic',
        weight: '2kg',
        size: '15cm x 15cm',
      },
      category: 3,
      id: '3',
    },
    {
      title: 'Pulp Unit - 5 Compartments',
      description:
        'Pulp Units are lightweight and durable, and can be used horizontally or vertically. Designed with A4 paper in mind, MUJI angle files and ring binders fit neatly inside.',
      price: 254,
      image: {
        bigImg: 'https://img.muji.net/img/item/4945247549201_1260.jpg',
        smallImgs: {
          smallImg1: 'https://img.muji.net/img/item/4945247549201_1260.jpg',
          smallImg2: 'https://minimalist-e-commerce.vercel.app/static/media/pulpunit1.85932d86056d82d3eabd.jpg',
          smallImg3: 'https://minimalist-e-commerce.vercel.app/static/media/pulpunit2.c337848e0cea3027c76d.jpg',
        },
      },
      specs: {
        texture: 'Wood',
        weight: '45kg',
        size: '250cm x 60cm',
      },
      category: 1,
      id: '4',
    },
    {
      title: 'Golden Modern Light',
      description:
        'Tom Dixon and FRONT have created an incredibly beautiful pendant, in a completely unique design. The lamp is made using a special metallization technology that makes the look completely unique. The first of its kind. the lamp is transparent when its on and you can see the exciting play of colors.',
      price: 189,
      image: {
        bigImg: 'https://minimalist-e-commerce.vercel.app/static/media/5.e2e1c208d1932b2c0db0.jpg',
        smallImgs: {
          smallImg1: 'https://minimalist-e-commerce.vercel.app/static/media/5.e2e1c208d1932b2c0db0.jpg',
          smallImg2: 'https://minimalist-e-commerce.vercel.app/static/media/moderngold1.60be9610fe5d190805a9.webp',
          smallImg3: 'https://minimalist-e-commerce.vercel.app/static/media/moderngold2.cf3428fb0bf06d8cafd7.webp',
        },
      },
      specs: {
        texture: 'Plastic',
        weight: '3kg',
        size: '20cm x 20cm',
      },
      category: 3,
      id: '5',
    },
    {
      title: 'Body Oil 200ml',
      description:
        'Made from 100% plant-based oils with olive oil as the main ingredient, this cleansing oil is gentle on the skin. Free from fragrance, colours and, mineral oils, paraben free, alcohol free, allergy tested (we cannot guarantee that it will not cause allergies in any users) * How to use: Take a small amount in the palm of your hand, and massage into the face to remove make-up and dirt. Rinse well with cold or warm water',
      price: 67,
      image: {
        bigImg: 'https://minimalist-e-commerce.vercel.app/static/media/6.5644c4636f0b3f050bf7.jpg',
        smallImgs: {
          smallImg1: 'https://minimalist-e-commerce.vercel.app/static/media/6.5644c4636f0b3f050bf7.jpg',
          smallImg2: 'https://minimalist-e-commerce.vercel.app/static/media/cleaningoil1.6b8c8c36e2b8c0a43c77.jpg',
          smallImg3: 'https://minimalist-e-commerce.vercel.app/static/media/cleaningoil2.e622e2d3b8f3ffa0422a.jpg',
        },
      },
      specs: {
        texture: 'Liquid',
        weight: '200ml',
        size: '10cm x 5cm',
      },
      category: 6,
      id: '6',
    },
    {
      title: 'Black and White Lamp',
      description:
        'Concept: Dot is inspired by perforated metal and the patterns that light creates when it shines through the small holes. The contrast between the coarse perforated metal and the smooth opal glass makes the Dot a simple and meaningful pendant. With its elegant expression, Shine, whether the light is on or off.',
      price: 220,
      image: {
        bigImg:
          'https://cdn.shopify.com/s/files/1/0531/5962/4900/products/133011_DOTpendant_1_exposedkopier_800x.png?v=1618670517',
        smallImgs: {
          smallImg1:
            'https://cdn.shopify.com/s/files/1/0531/5962/4900/products/133011_DOTpendant_1_exposedkopier_800x.png?v=1618670517',
          smallImg2: 'https://minimalist-e-commerce.vercel.app/static/media/blackandwhite1.1149f05f13e7c8a3a13b.webp',
          smallImg3: 'https://minimalist-e-commerce.vercel.app/static/media/blackandwhite2.1dac1e8c88ee5d5f213b.webp',
        },
      },
      specs: {
        texture: 'Plastic',
        weight: '6kg',
        size: '20cm x 20cm',
      },
      category: 3,
      id: '7',
    },
    {
      title: 'Gejst Shelf A Black Ash/Black',
      description:
        'Designed by Böttcher & Kayser, Nivo is a minimalist wall shelf designed with functionality and aesthetics in mind. Without unnecessary details and clean lines, this collection hangs easily and elegantly on the wall, creating calm and an overview of the things you want to put on the shelf.',
      price: 115,
      image: {
        bigImg: 'https://minimalist-e-commerce.vercel.app/static/media/8.35f833ef20163491e804.jpg',
        smallImgs: {
          smallImg1: 'https://minimalist-e-commerce.vercel.app/static/media/8.35f833ef20163491e804.jpg',
          smallImg2: 'https://minimalist-e-commerce.vercel.app/static/media/shelf1.29d1155e0bfd0b86693f.webp',
          smallImg3: 'https://minimalist-e-commerce.vercel.app/static/media/shelf2.47102c665e47dc40e9d7.webp',
        },
      },
      specs: {
        texture: 'Wood',
        weight: '10kg',
        size: '60cm x 20cm',
      },
      category: 1,
      id: '8',
    },
    {
      title: 'Cube Lolo Vase Black',
      description:
        'Kubus Vase Lolo was originally designed by Søren Lassen in 2014, but was launched in connection with by Lassens 10 year anniversary 2018. The vase is a natural and sought-after extension of the series, which already counts the Kubus candlesticks and Kubus Bowl Bowl. Set it alone or in a still life, fill it with airy, colorful flowers for a feminine look or leave it alone in all its simplicity and precision.',
      price: 161,
      image: {
        bigImg: 'https://minimalist-e-commerce.vercel.app/static/media/9.c6d969e8587dd1042095.png',
        smallImgs: {
          smallImg1: 'https://minimalist-e-commerce.vercel.app/static/media/9.c6d969e8587dd1042095.png',
          smallImg2: 'https://minimalist-e-commerce.vercel.app/static/media/vase1.af7d9ab3bf6974242b2e.webp',
          smallImg3: 'https://minimalist-e-commerce.vercel.app/static/media/vase2.383a31080faaf215e3a8.webp',
        },
      },
      specs: {
        texture: 'Ceramics',
        weight: '12kg',
        size: '45cm x 15cm',
      },
      category: 1,
      id: '9',
    },
    {
      title: 'Traditional Armchair',
      description:
        "Concept: &Tradition's Boomerang lounge chair is a classic Danish design with a modern and minimalist expression. The chair was designed by Hvidt & Mølgaard in 1956, and with its stylish cushions and hand-polished wooden frame, it is an ideal Nordic design that gives a personal mark to the home.",
      price: 89,
      image: {
        bigImg: 'https://minimalist-e-commerce.vercel.app/static/media/10.01ad0d2d385553f6ea92.jpg',
        smallImgs: {
          smallImg1: 'https://minimalist-e-commerce.vercel.app/static/media/10.01ad0d2d385553f6ea92.jpg',
          smallImg2: 'https://minimalist-e-commerce.vercel.app/static/media/chairboom1.8a97723f0042d4d4ebcd.webp',
          smallImg3: 'https://minimalist-e-commerce.vercel.app/static/media/chairboom2.09e3433771f322ce5add.webp',
        },
      },
      specs: {
        texture: 'Wood',
        weight: '8kg',
        size: '60cm x 40cm',
      },
      category: 5,
      id: '10',
    },
    {
      title: 'The Sun Pendant',
      description:
        'The Here Comes The Sun pendant designed by Bertrand Balas is a quality lamp with a unique and magical look. The Here Comes The Sun series has a fantastic expression and especially when turned on it creates a very special atmosphere in the room it hangs in. The lamp fits perfectly above both dining room table, kitchen counter, and as living room lighting .',
      price: 160,
      image: {
        bigImg: 'https://lamptwist.com/cdn/shop/products/16572.jpg?v=1661382543&width=750',
        smallImgs: {
          smallImg1: 'https://lamptwist.com/cdn/shop/products/16572.jpg?v=1661382543&width=750',
          smallImg2: 'https://minimalist-e-commerce.vercel.app/static/media/blacklamp1.5fc35028ee200d6cc572.webp',
          smallImg3: 'https://minimalist-e-commerce.vercel.app/static/media/blacklamp2.c20103339a8cc41cc1e5.jpg',
        },
      },
      specs: {
        texture: 'Plastic',
        weight: '4kg',
        size: '20cm x 20cm',
      },
      category: 3,
      id: '11',
    },
    {
      title: 'Simple Golden Lamp',
      description:
        'Verner Panton Flowerpot, designed in 1968, was originally meant for the hospitality industry and Verner Panton displays and showrooms. The lamp then became popular in private homes, and due to its stylish design and many colour choices, it has made a major comeback in recent years.',
      price: 220,
      image: {
        bigImg: 'https://minimalist-e-commerce.vercel.app/static/media/12.ce8de8e38ff2dc475ed6.png',
        smallImgs: {
          smallImg1: 'https://minimalist-e-commerce.vercel.app/static/media/12.ce8de8e38ff2dc475ed6.png',
          smallImg2: 'https://minimalist-e-commerce.vercel.app/static/media/goldenlamp1.641199888a6ec389e625.webp',
          smallImg3: 'https://minimalist-e-commerce.vercel.app/static/media/goldenlamp2.02acac26f45f964730a9.webp',
        },
      },
      specs: {
        texture: 'Plastic',
        weight: '4kg',
        size: '15cm x 15cm',
      },
      category: 3,
      id: '12',
    },
    {
      title: 'Unbleached Cotton Pads 180',
      description: 'Cotton pads made from soft, unbleached cotton. These are made in Japan and made from 100% cotton.',
      price: 33,
      image: {
        bigImg: 'https://minimalist-e-commerce.vercel.app/static/media/13.3e405d8959216287316c.jpg',
        smallImgs: {
          smallImg1: 'https://minimalist-e-commerce.vercel.app/static/media/13.3e405d8959216287316c.jpg',
          smallImg2: 'https://minimalist-e-commerce.vercel.app/static/media/cotton1.62224d60b9907e292469.jpg',
          smallImg3: 'https://minimalist-e-commerce.vercel.app/static/media/cotton2.9880b5cf8e9b3c30e051.jpg',
        },
      },
      specs: {
        texture: 'Cotton',
        weight: '180g',
        size: '20cm x 10cm',
      },
      category: 6,
      id: '13',
    },
    {
      title: 'Oak Spanish Chair',
      description:
        'When talking about Børge Mogensen, The Spanish Chair is probably one of the first designs you would think of, which makes good sense as it is also one of his most recognized products around the world.',
      price: 520,
      image: {
        bigImg: 'https://minimalist-e-commerce.vercel.app/static/media/14.a674c36b5a4aa0bb7377.png',
        smallImgs: {
          smallImg1: 'https://minimalist-e-commerce.vercel.app/static/media/14.a674c36b5a4aa0bb7377.png',
          smallImg2: 'https://minimalist-e-commerce.vercel.app/static/media/woodchair1.3e7a6f7fce08b168d4c1.webp',
          smallImg3: 'https://minimalist-e-commerce.vercel.app/static/media/woodchair2.17808be844cfc13a31c0.webp',
        },
      },
      specs: {
        texture: 'Wood',
        weight: '15kg',
        size: '60cm x 30cm',
      },
      category: 5,
      id: '14',
    },
    {
      title: 'Copenhagen Armchair',
      description:
        'Concept: The Hyg series by Danish Normann Copenhagen is a series of chairs based on the Danish word Hygge. The designer Simon Legald has tried to embody the meaning of the word around security, warmth and convenience in a furniture series. This is expression in the fine organic shapes and hearty curves that provide a high degree of sitting comfort and well-being in the chairs.',
      price: 330,
      image: {
        bigImg: 'https://minimalist-e-commerce.vercel.app/static/media/15.34062d24a3b098cdc795.jpg',
        smallImgs: {
          smallImg1: 'https://minimalist-e-commerce.vercel.app/static/media/15.34062d24a3b098cdc795.jpg',
          smallImg2: 'https://minimalist-e-commerce.vercel.app/static/media/copenhagen1.39e6de3d2e09d6e5f7ef.webp',
          smallImg3: 'https://minimalist-e-commerce.vercel.app/static/media/copenhagen2.7d59736ad81db76fb73b.webp',
        },
      },
      specs: {
        texture: 'Wood',
        weight: '14kg',
        size: '65cm x 35cm',
      },
      category: 5,
      id: '15',
    },
    {
      title: 'Anti Dark Light',
      description:
        'Easy Mini W75 from Antidark lives fully up to its name. Simple design, comfortable light, easy to adjust. The Easy Wall Light has made it easy for the user to handle, well, everything! The Easy lamp can turn 360 degrees and be tipped. An ideal lamp that can be placed in connection with other lamps to achieve light in all corners of the room. Furthermore, the lamp can work as a wall light or ceiling.',
      price: 120,
      image: {
        bigImg: 'https://minimalist-e-commerce.vercel.app/static/media/16.9d0e830b5f094893fe86.jpg',
        smallImgs: {
          smallImg1: 'https://minimalist-e-commerce.vercel.app/static/media/16.9d0e830b5f094893fe86.jpg',
          smallImg2: 'https://minimalist-e-commerce.vercel.app/static/media/cam1.c5f0ce5320a509f59908.webp',
          smallImg3: 'https://minimalist-e-commerce.vercel.app/static/media/cam2.7fb41dcdb1c8f39c2271.jpg',
        },
      },
      specs: {
        texture: 'Metal',
        weight: '2kg',
        size: '15cm x 10cm',
      },
      category: 2,
      id: '16',
    },
    {
      title: 'Table Lamp',
      description:
        "The lamp has also become popular in private homes and has especially made a comeback in recent years. This is not least due to the lamp's stylish design and the many color options that make it fit everywhere.",
      price: 75,
      image: {
        bigImg: 'https://minimalist-e-commerce.vercel.app/static/media/17.b04524e5024f75206ab9.png',
        smallImgs: {
          smallImg1: 'https://minimalist-e-commerce.vercel.app/static/media/17.b04524e5024f75206ab9.png',
          smallImg2: 'https://minimalist-e-commerce.vercel.app/static/media/tablelamp1.a72be318c904424a03e1.webp',
          smallImg3: 'https://minimalist-e-commerce.vercel.app/static/media/tablelamp2.be1ad85184bdd73a75a2.webp',
        },
      },
      specs: {
        texture: 'Metal',
        weight: '5kg',
        size: '25cm x 15cm',
      },
      category: 3,
      id: '17',
    },
    {
      title: 'Mat Black Lamp',
      description:
        'Unique offer We give you a special discount when you put this product in the basket. *Only applies to specific products.',
      price: 175,
      image: {
        bigImg: 'https://minimalist-e-commerce.vercel.app/static/media/18.409250837a90245a30b9.png',
        smallImgs: {
          smallImg1: 'https://minimalist-e-commerce.vercel.app/static/media/18.409250837a90245a30b9.png',
          smallImg2: 'https://minimalist-e-commerce.vercel.app/static/media/mat1.d3f975d76800214607a8.webp',
          smallImg3: 'https://minimalist-e-commerce.vercel.app/static/media/mat2.bc7b1c3fe945cabb3bad.webp',
        },
      },
      specs: {
        texture: 'Metal',
        weight: '6kg',
        size: '20cm x 15cm',
      },
      category: 3,
      id: '18',
    },
    {
      title: 'Comfy Chair',
      description:
        "Sum is a series designed by the Danish designer Simon Legald, who is the epitome of modern elegance. Elegant and resolute as the tip of a wing, the armrests spread out invitingly, as if they want to embrace you in the armchair's soft, homely space.",
      price: 119,
      image: {
        bigImg: 'https://minimalist-e-commerce.vercel.app/static/media/19.1e5832c36583dbb804f2.jpg',
        smallImgs: {
          smallImg1: 'https://minimalist-e-commerce.vercel.app/static/media/19.1e5832c36583dbb804f2.jpg',
          smallImg2: 'https://minimalist-e-commerce.vercel.app/static/media/comfy1.71de615c822f82fa5060.webp',
          smallImg3: 'https://minimalist-e-commerce.vercel.app/static/media/comfy2.30dc70daece04724180b.webp',
        },
      },
      specs: {
        texture: 'Comfy Material',
        weight: '25kg',
        size: '60cm x 30cm',
      },
      category: 5,
      id: '19',
    },
    {
      title: 'Body Oil 50ml',
      description:
        'Made from 100% plant-based oils with olive oil as the main ingredient, this cleansing oil is gentle on the skin. Free from fragrance, colours and, mineral oils, paraben free, alcohol free, allergy tested (we cannot guarantee that it will not cause allergies in any users) * How to use: Take a small amount in the palm of your hand, and massage into the face to remove make-up and dirt. Rinse well with cold or warm water.',
      price: 45,
      image: {
        bigImg: 'https://minimalist-e-commerce.vercel.app/static/media/20r.8cde710dbf28ebd08941.jpg',
        smallImgs: {
          smallImg1: 'https://minimalist-e-commerce.vercel.app/static/media/20r.8cde710dbf28ebd08941.jpg',
          smallImg2: 'https://minimalist-e-commerce.vercel.app/static/media/bodyoil1.df87658baed4f2785f85.jpg',
          smallImg3: 'https://minimalist-e-commerce.vercel.app/static/media/bodyoil2.3169bbb872ee6a9bb9ad.jpg',
        },
      },
      specs: {
        texture: 'Liquid',
        weight: '50ml',
        size: '10cm x 5cm',
      },
      category: 6,
      id: '20',
    },
  ]);

  const [categoryProducts, setCategoryProducts] = useState(false);
  const [cartQuantVisible, setCartQuantVisible] = useState(false);
  const [updatedProducts, setUpdatedProducts] = useState(products);
  const [checkboxCategories, setCheckboxCategories] = useState([]);
  const [fromRange, setFromRange] = useState('');
  const [toRange, setToRange] = useState('');
  const [ascPrice, setAscPrice] = useState('');
  const [descPrice, setDescPrice] = useState('');

  useEffect(() => {
    fetch('https://6448a5c1e7eb3378ca32d196.mockapi.io/api/clean-ecommerce/products/')
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  const value = {
    productsContext: [products, setProducts],
    categoryProductsContext: [categoryProducts, setCategoryProducts],
    cartQuantVisibleContext: [cartQuantVisible, setCartQuantVisible],
    checkboxCategoriesContext: [checkboxCategories, setCheckboxCategories],
    fromRangeContext: [fromRange, setFromRange],
    toRangeContext: [toRange, setToRange],
    updatedProductsContext: [updatedProducts, setUpdatedProducts],
    ascPriceContext: [ascPrice, setAscPrice],
    descPriceContext: [descPrice, setDescPrice],
  };

  return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>;
}

export default Provider;
