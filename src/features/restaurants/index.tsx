import React, { FC, Fragment } from "react";
import { View, Text, StyleSheet } from 'react-native';
import Searchbar from "../../components/business/searchbar";
import RestaurantInfoCard, { Restaurant } from "../../components/ui/restaurantInfoCard";

const RestaurantsScreen = () => {
    const restaurantInfo: Restaurant = {
        name: 'Burger King',
        icon: 'a.jpg',
        photos: ['https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg'],
        address: 'asda sokak no:23',
        openingHours: '10am',
        rating: 4,
        isClosedTemporarily: false,
        isOpenNow: true,
    }
 
    return (
        <View style={styles.container}>
             <View style={styles.search}>
            <Searchbar />
            </View>
            <View style={styles.list}>
                <RestaurantInfoCard restaurant={restaurantInfo}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    search: {
        padding: 16,
    },
    list: {
        flex: 1,
        padding: 16,
        backgroundColor: '#03C988',
    },
});

export default RestaurantsScreen;