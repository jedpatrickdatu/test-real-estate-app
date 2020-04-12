export const propertyData = [
    PropertyData(
        1,
        '₱1.5M',
        require('../assets/images/house1.jpeg'),
        {latitude: 14.597520, longitude: 121.097203},
        '830 Labanos, Pasig, Metro Manila',
        'For Sale'
    ),
    PropertyData(
        2,
        '₱60K',
        require('../assets/images/house2.jpg'),
        {latitude: 14.657958, longitude: 121.133354},
        'Birmingham Heights, San Miguel, Marikina',
        'For Rent'
    ),
    PropertyData(
        3,
        '₱950K',
        require('../assets/images/house3.jpg'),
        {latitude: 14.905410, longitude: 120.960824},
        'Cacarong Bata, Bulacan',
        'For Sale'
    ),
];

function PropertyData(
  id,
  price,
  image,
  coordinate,
  address,
  type,
) {
    return {
        id,
        price,
        image,
        coordinate,
        address,
        type,
    };
};