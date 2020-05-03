import * as React from 'react';
import { Image, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { addCommasAndCurrencyToPrice } from '../helpers/formatter';

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
                }}
            >
                <Text
                    style={{
                        fontSize: 26,
                        fontWeight: '900'
                    }}
                >
                    {addCommasAndCurrencyToPrice(property.price)}
                </Text>
                <View
                    style={{
                        alignSelf: 'flex-start',
                        backgroundColor: property.type === 'For Sale' ? 'green' : 'rgb(9, 20, 232)',
                        paddingHorizontal: 8,
                        marginTop: 4
                    }}
                >
                    <Text
                        style={{
                        color: 'white',
                        fontSize: 14
                    }}
                    >
                        {property.type}
                    </Text>
                </View>
                <Text
                    numberOfLines={2}
                    style={{
                        fontSize: 14,
                        marginTop: 4
                    }}
                >
                    {property.address}
                </Text>
                <Text
                    style={{
                        fontSize: 18,
                        marginTop: 24,
                        fontWeight: '900',
                        color: 'rgb(61, 64, 61)',
                    }}
                >
                    DESCRIPTION
                </Text>
                <Text
                    style={{
                        fontSize: 14,
                        marginTop: 12,
                        width: '100%',
                    }}
                >
                    {property.description}
                </Text>
            </View>
        </ScrollView>
    );
}
