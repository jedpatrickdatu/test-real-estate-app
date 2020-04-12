import * as React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import {propertyData} from '../constants/PropertyData';
import { LinearGradient } from 'expo-linear-gradient';

export default function PropertyList() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        {propertyData.map(data => PropertyCard(data))}
    </ScrollView>
  );
}

function PropertyCard({ id, price, image, type }) {
  const purchaseLabelBackground = type === 'For Sale' ? 'green' : 'rgb(9, 20, 232)';

  return (
    <TouchableOpacity
      key={id}
      style={{
        height: '100%',
      }}
      style={{
        flexDirection: 'row',
      }}
    >
      <ImageBackground
        source={image}
        style={{
          width: '100%',
          height: 240,
          justifyContent: 'flex-end',
        }}
      >
        <LinearGradient
          colors={['transparent', 'rgba(0,0,0,0.8)']}
          start={[0, 0.5]}
          end={[0, 0.7]}
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            height: 300,
          }}
        />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginHorizontal: 6,
            }}
          >
            <View>
              <Text
                style={{
                  color: 'white',
                  fontSize: 30,
                }}>
                  {`${price}`}
              </Text>
            </View>
            <View
              style={{
                backgroundColor: purchaseLabelBackground,
                paddingHorizontal: 8,
              }}
            >
              <Text
                style={{
                  color: 'white',
                  fontSize: 12,
                }}>
                  {type}
              </Text>
            </View>
          </View>
      </ImageBackground>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  contentContainer: {
    paddingTop: 15,
  },
  optionIconContainer: {
    marginRight: 12,
  },
  option: {
    backgroundColor: '#fdfdfd',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: 0,
    borderColor: '#ededed',
  },
  lastOption: {
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  optionText: {
    fontSize: 15,
    alignSelf: 'flex-start',
    marginTop: 1,
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});
