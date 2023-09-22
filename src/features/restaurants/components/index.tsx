import RestaurantInfoCard from './restaurant-info-card';

type Restaurant = {
    name: String;
    icon: String;
    photos: String[];
    address: String;
    openingHours: String;
    rating: number;
    isClosedTemporarily: boolean;
    isOpenNow: boolean;
};

export interface RestaurantInfoCardProps {
    restaurant: Restaurant;
}

export {RestaurantInfoCard};
