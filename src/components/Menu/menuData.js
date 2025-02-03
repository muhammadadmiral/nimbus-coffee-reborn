// src/components/menu/menuData.js
export const MENU_CATEGORIES = [
    { id: 'signature', name: 'Signature' },
    { id: 'special-blend', name: 'Special Blend' },
    { id: 'cold-brew', name: 'Cold Brew' }
  ];
  
  export const MENU_ITEMS = [
    {
      id: 'kopi-susu',
      name: 'Kopi Susu',
      image: '/nimbus-kopi-susu.jpg',
      description: 'Kopi susu khas Nimbus Coffee dengan rasa creamy dan seimbang.',
      category: 'signature',
      recommended: true,
      rating: 4.5,
      variants: [
        { size: '200 ML', price: 20000 },
        { size: '250 ML', price: 23000 },
        { size: '500 ML', price: 44000 },
        { size: '1000 ML', price: 90000 }
      ],
      ingredients: ['Kopi Robusta', 'Susu Segar', 'Gula Pasir'],
      whatsappLink: 'https://wa.me/+6282111742636?text=Saya%20ingin%20memesan%20Kopi%20Susu'
    },
    {
      id: 'butterscotch',
      name: 'Butterscotch',
      image: '/nimbus-coffee-butterscotch.jpg',
      description: 'Kopi dengan sentuhan butterscotch yang manis dan lembut.',
      category: 'special-blend',
      recommended: false,
      rating: 4.2,
      variants: [
        { size: '200 ML', price: 25000 },
        { size: '250 ML', price: 28000 },
        { size: '500 ML', price: 52000 },
        { size: '1000 ML', price: 100000 }
      ],
      ingredients: ['Kopi Arabica', 'Sirup Butterscotch', 'Susu'],
      whatsappLink: 'https://wa.me/+6282111742636?text=Saya%20ingin%20memesan%20Butterscotch'
    },
    {
      id: 'cold-brew-original',
      name: 'Cold Brew Original',
      image: '/cold-brew.jpg',
      description: 'Kopi dingin dengan rasa khas yang smooth dan rendah asam.',
      category: 'cold-brew',
      recommended: true,
      rating: 4.7,
      variants: [
        { size: '250 ML', price: 30000 },
        { size: '500 ML', price: 55000 },
        { size: '1000 ML', price: 105000 }
      ],
      ingredients: ['Kopi Arabica', 'Air Dingin'],
      whatsappLink: 'https://wa.me/+6282111742636?text=Saya%20ingin%20memesan%20Cold%20Brew%20Original'
    }
  ];