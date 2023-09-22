import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {styled} from 'styled-components/native';
import Searchbar from '../../../components/business/searchbar';
import {RestaurantInfoCard, RestaurantInfoCardProps} from '../components';

const SafeArea = styled(SafeAreaView)`
    flex: 1;
    ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const SearchContainer = styled.View`
    padding: ${props => props.theme.space[3]};
`;

const RestaurantListContainer = styled.View`
    flex: 1;
    padding: ${props => props.theme.space[3]};
`;

const RestaurantsScreen = () => {
    const restaurantInfo: RestaurantInfoCardProps['restaurant'] = {
        name: 'Burger King',
        icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png',
        photos: [
            'https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg',
        ],
        address: 'asda sokak no:23',
        openingHours: '10am',
        rating: 4,
        isClosedTemporarily: true,
        isOpenNow: false,
    };

    return (
        <SafeArea>
            <SearchContainer>
                <Searchbar />
            </SearchContainer>
            <RestaurantListContainer>
                <RestaurantInfoCard restaurant={restaurantInfo} />
            </RestaurantListContainer>
        </SafeArea>
    );
};

export default RestaurantsScreen;
