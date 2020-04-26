import * as React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { addCommasAndCurrencyToPrice } from '../helpers/formatter';
import { Bed } from '../assets/images/Bed';

export default function Property({ route }) {
    const property = route.params.property

    return (
        <ScrollView>
            <Image
                source={property.image}
                style={{
                    height: 300,
                    width: "100%",
                    resizeMode: 'cover'
                }}
            />
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
                    {addCommasAndCurrencyToPrice(property.price)}
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
                {/* <Bed /> */}
            </View>
        </ScrollView>
    );
}
