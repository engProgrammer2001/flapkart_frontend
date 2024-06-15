// export const color = [
//   "white",
//   "Black",
//   "Red",
//   "marun",
//   "Being",
//   "Pink",
//   "Green",
//   "Yellow",
// ];

export const filters = [
  {
    id: "color",
    name: "Color",
    options: [
      { value: "white", label: "White" },
      { value: "black", label: "Black" },
      { value: "beige", label: "Beige" },
      { value: "blue", label: "Blue" },
      { value: "brown", label: "Brown" },
      { value: "green", label: "Green" },
      { value: "purple", label: "Purple" },
      {value:"yellow",label:"Yellow"}
    ],
  },

  // {
  //   id: "size",
  //   name: "Size",
  //   options: [
  //     { value: "S", label: "S" },
  //     { value: "M", label: "M" },
  //     { value: "L", label: "L" },
  //   ],
  // },
  
];

export const singleFilter=[
  {
    id: "price",
    name: "Price",
    options: [
      { value: "80-599", label: "₹80 To ₹599" },
      { value: "599-999", label: "₹599 To ₹999" },
      { value: "999-5999", label: "₹999 To ₹5999" },
      { value: "5999-9999", label: "₹9999 To ₹9999" },
      { value: "9999-15999", label: "₹9999 To ₹15999" },
      { value: "15999-15999", label: "₹9999 To ₹15999" },
      { value: "15999-20999", label: "₹15999 To ₹20999" },
      { value: "20999-30999", label: "₹20999 To ₹30999" },
    ],
  },
  {
    id: "disccout",
    name: "Disccount Range",
    options: [
      {
        value: "10",
        label: "10% And Above",
      },
      { value: "20", label: "20% And Above" },
      { value: "30", label: "30% And Above" },
      { value: "40", label: "40% And Above" },
      { value: "50", label: "50% And Above" },
      { value: "60", label: "60% And Above" },
      { value: "70", label: "70% And Above" },
      { value: "80", label: "80% And Above" },
    ],
  },
  {
    id: "stock",
    name: "Availability",
    options: [
      { value: "in_stock", label: "In Stock" },
      { value: "out_of_stock", label: "Out Of Stock" },
      
    ],
  },
]

export const sortOptions = [
  
  { name: "Price: Low to High", query: "price_low", current: false },
  { name: "Price: High to Low", query: "price_high", current: false },
];


