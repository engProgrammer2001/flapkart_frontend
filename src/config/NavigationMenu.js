export const navigation = {
    categories: [
      {
        id: 'product',
        name: 'Product',
        featured: [
          {
            name: 'New Arrivals',
            href: '/product/mobile/apple',
            imageSrc: 'https://m.media-amazon.com/images/I/81CgtwSII3L._SX679_.jpg',
            imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
          },
          {
            name: 'Basic Tees',
            href: '/',
            imageSrc: 'https://m.media-amazon.com/images/I/51X8mZPbb0L._AC_UY436_FMwebp_QL65_.jpg',
            imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
          },
        ],
        sections: [
          {
            id: 'mobile',
            name: 'Mobiles',
            items: [
              { name: 'Vivo', id:"vivo", href: `{/product/mobile/vivo}` },
              { name: 'Apple', id:"apple", href: '#' },
              { name: 'Sumsung', id: 'sumsung' },
              { name: 'Redmi', id: 'redmi' },
              { name: 'Realme', id: 'realme' },
              { name: 'Oppo', id: 'oppo' },
              { name: 'Infinix', id: 'infinix' },
              { name: 'OnePlus', id: 'oneplus' },
              { name: 'Sony', id: 'sony' },
              { name: 'Other', id: 'other' },
            ],
          },
          {
            id: 'chargers',
            name: 'Chargers',
            items: [
              { name: 'Sumsung', id: 'sumsung' },
              { name: 'Iphone', id: 'iphone' },
              { name: 'Vivo', id: 'vivo' },
              { name: 'Oppo', id: 'oppo' },
              { name: 'Nokia', id: 'nokia' },
              { name: 'Sony', id: 'sony' },
            ],
          },
          {
            id: 'brands',
            name: 'Brands',
            items: [
              { name: 'Apple', id: '#' },
              { name: 'Nokia', id: '#' },
              { name: 'Sumsung', id: '#' },
              { name: 'Realme', id: '#' },
              { name: 'Vivo', id: '#' },
              { name: 'Redmi', id: '#' },
              { name: 'Other', id: '#' },
            ],
          },
        ],
      },
      {
        id: 'otherproducts',
        name: 'Other_Products',
        featured: [
          {
            name: 'New Arrivals',
            id: '#',
            imageSrc: 'https://m.media-amazon.com/images/I/516lVkS243L._AC_UY436_FMwebp_QL65_.jpg',
            imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.',
          },
          {
            name: 'Artwork Tees',
            id: '#',
            imageSrc: 'https://m.media-amazon.com/images/I/61-JcMFfOEL._AC_UY436_FMwebp_QL65_.jpg',
            imageAlt:
              'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
          },
        ],
        sections: [
          {
            id: 'cover',
            name: 'Cover',
            items: [
              { name: 'Iphone Cover', id: 'iphone_cover' },
              { name: 'Redmi Cover', id: 'redmi_cover' },
              { name: 'Nokia Cover', id: 'nokia_cover' },
              { name: 'Vivo Cover', id: 'vivo_cover' },
              { name: 'Sumsung Cover', id: 'sumsung_cover' },
              { name: 'Oppo Cover', id: 'oppo_cover' },
              { name: 'Realme Cover', id: 'realme_cover' },
              { name: 'Other Cover', id: 'other_cover' },
              
            ],
          },
          {
            id: 'earphon',
            name: 'Ear-Phones',
            items: [
              { name: 'JBL Ear-Phones', id: 'jbl_earphon' },
              { name: 'Sumsung Ear-Phones', id: 'sumsung_earphon' },
              { name: 'Apple Ear-Phones', id: 'apple_earphon' },
              { name: 'Vivo Ear-Phones', id: 'vivo_earphon' },
              { name: 'boAt Ear-Phones', id: 'boAt_earphon' },
              { name: 'Sony Ear-Phones', id: 'sony_earphon' },
              { name: 'Other Ear-Phones', id: 'other_earphon' },
            ],
          },
          {
            id: 'brands',
            name: 'Brands',
            items: [
              { name: 'Apple', id: 'apple' },
              { name: 'JBL', id: 'jbl' },
              { name: 'boAt', id: 'boAt' },
              { name: 'Other', id: 'others' },
            ],
          },
        ],
      },
    ],
    pages: [
        { name: "About", href: "/about" },
        { name: "Contact Us", href: "/contact" },
    ],
  }