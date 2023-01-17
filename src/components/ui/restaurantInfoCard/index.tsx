import React, { FC } from "react";
import { ImageSourcePropType, View, Text, StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';
interface RestaurantInfoCardProps {
   restaurant: Restaurant
};

export type Restaurant = {
    name: String,
    icon: String,
    photos: String[],
    address: String,
    openingHours: String,
    rating: number,
    isClosedTemporarily: boolean,
    isOpenNow: boolean
}

const RestaurantInfoCard: FC<RestaurantInfoCardProps> = ({ restaurant}) => {
    const {name, icon, photos, address, openingHours, rating, isClosedTemporarily} = restaurant;
    return (
        <View>
            <Card elevation={5} style={styles.card}>                
                <Card.Cover style={styles.cover} source={{ uri: photos?.[0] } as ImageSourcePropType} />
                    <Text style={styles.title}>{name}</Text>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white'
    },
    cover: {
        padding: 20,
        backgroundColor: 'white',
    },
    title: {
        padding: 16,
    }
})
export default RestaurantInfoCard;