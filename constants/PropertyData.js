export const propertyData = [
    PropertyData(
        1,
        '3 Bedroom 2 Bathroom House and Lot Testes stest',
        1500000,
        require('../assets/images/house1.jpeg'),
        {latitude: 14.597520, longitude: 121.097203},
        '830 Labanos, Pasig, Metro Manila',
        'For Sale'
    ),
    PropertyData(
        2,
        'Three story Luxury House and Lot',
        60000,
        require('../assets/images/house2.jpg'),
        {latitude: 14.657958, longitude: 121.133354},
        'Birmingham Heights, San Miguel, Marikina',
        'For Rent'
    ),
    PropertyData(
        3,
        '2 Bedroom Condo Unit For Sale',
        950000,
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
  image,
  coordinate,
  address,
  type,
) {
    return {
        id,
        name,
        price,
        image,
        coordinate,
        address,
        type,
    };
};