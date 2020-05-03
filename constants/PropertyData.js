export const propertyData = [
    PropertyData(
        1,
        '3 Bedroom 2 Bathroom House and Lot',
        1500000,
        'The living is easy in this impressive, generously proportioned contemporary residence with lake and ocean views, located within a level stroll to the sand and surf.\n\nThe floor plan encompasses four spacious bedrooms with plenty of room for study, sleep and storage, three luxurious bathrooms, and a sleek and stylish kitchen that flows through to the dining room and private rear patio. The master bedroom, complete with walk-in robe and ensuite, ensures parents have a private space where they can enjoy the view.\n\nPerfect for a family or as a holiday retreat, this home is ideally positioned to enjoy the proximity to beaches, cafes and restaurants, shopping centre, and a selection of premier schools.',
        require('../assets/images/house1.jpeg'),
        {latitude: 14.597520, longitude: 121.097203},
        '830 Labanos, Pasig, Metro Manila',
        'For Sale'
    ),
    PropertyData(
        2,
        'Three story Luxury House and Lot',
        60000,
        'It won’t be easy to click out of holiday mode in this stylishly contemporary residence for the modern pleasure-seeker.\n\nCool, calm and sophisticated with a youthful edge, this functional home is enveloped in light and comfort. Crisp white walls, timber floors and high ceilings create a style as timeless as the sparkling ocean view. The calming sea vista, captured through the extensive use of glass, will help you forget your city stress.\n\nThis house screams ‘designer’ and will reflect the personality and taste of those accustomed to the best in quality design, finishes and lifestyle.',
        require('../assets/images/house2.jpg'),
        {latitude: 14.657958, longitude: 121.133354},
        'Birmingham Heights, San Miguel, Marikina',
        'For Rent'
    ),
    PropertyData(
        3,
        '2 Bedroom Condo Unit For Sale',
        850000,
        'This immaculately presented apartment is set amongst manicured grounds within a private and secure complex. As a resident you will have access to lifestyle amenities including a lap pool, gymnasium, communal terraces, concierge service and basement parking.\n\nThe floorplan incorporates 2 bedrooms, the main with built-in robe and ensuite, a study nook, modern kitchen with quality appliances, luxurious bathroom, a cleverly concealed laundry and a spacious living/dining area. The generously proportioned interior flows effortlessly from the open-plan living space to the private covered balcony from which you can admire the views of the garden and beyond.\n\nWith its warm sense of community, and only moments to shops, eateries and transport this home provides all the elements for relaxing, comfortable and easycare living.',
        require('../assets/images/house3.jpg'),
        {latitude: 14.905410, longitude: 120.960824},
        'Cacarong Bata, Bulacan',
        'For Sale'
    ),
];

function PropertyData(
  id,
  name,
  price,
  description,
  image,
  coordinate,
  address,
  type,
) {
    return {
        id,
        name,
        price,
        description,
        image,
        coordinate,
        address,
        type,
    };
};