import React from 'react';
import { Image } from 'react-native';
import MapView from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import {propertyData} from '../constants/PropertyData';
import { AntDesign } from '@expo/vector-icons';
import { shortenPrice } from '../helpers/formatter';

export default function Map({navigation}) {
  return (
    <View style={styles.container}>
      <MapView
        initialRegion={{
          latitude: 14.813327,
          longitude: 120.925216,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        style={styles.mapStyle}
      >
        {propertyData.map(property => 
          <MapView.Marker
            key={property.id}
            coordinate={property.coordinate}
            title={"title"}
            description={"description"}
          >
            <MapView.Callout
              style={{
                width: 300,
                position: 'relative'
              }}
              onPress={() => navigation.push("Property", {property})}
            >
              <View
                style={{
                  flexDirection: 'row',
                  alignContent: 'center'
                }}
              >
                <Text
                  style={{
                    flex: 1,
                  }}
                >
                  <Image
                    source={property.image}
                    style={{
                      width: 150,
                      height: 90,
                      resizeMode: 'cover'
                    }}
                  />
                </Text>
                <View
                  style={{
                    flexDirection: 'column',
                    justifyItems: 'center',
                    padding: 10,
                    height: 'auto',
                    width: 180
                  }}
                >
                  <Text
                    style={{
                      fontSize: 20,
                    }}
                  >
                    {shortenPrice(property.price)}
                  </Text>
                  <View
                    style={{
                      alignSelf: 'flex-start',
                      backgroundColor: property.type === 'For Sale' ? 'green' : 'rgb(9, 20, 232)',
                      paddingHorizontal: 8
                    }}
                  >
                    <Text
                      style={{
                        color: 'white',
                        fontSize: 14,
                      }}
                    >
                        {property.type}
                    </Text>
                  </View>
                  <Text
                    numberOfLines={2}
                    style={{
                      fontSize: 12,
                    }}
                  >
                    {property.address}
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'column',
                    justifyContent: 'center'
                  }}
                >
                  <AntDesign name="right" size={18} />
                </View>
              </View>
            </MapView.Callout>
          </MapView.Marker>
        )}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});