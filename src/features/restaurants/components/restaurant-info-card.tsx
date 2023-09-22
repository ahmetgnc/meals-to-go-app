import React, {FC} from 'react';
import {ImageSourcePropType, View} from 'react-native';
import {Card, Text} from 'react-native-paper';
import styled from 'styled-components/native';
import {RestaurantInfoCardProps} from '.';
import {SvgXml} from 'react-native-svg';
import star from '../../../../assets/star';

const RestaurantCard = styled(Card)`
    background-color: ${props => props.theme.colors.bg.primary};
`;

const RestaurantCardCover = styled(Card.Cover)`
    padding: ${props => props.theme.space[3]};
    background-color: ${props => props.theme.colors.bg.primary};
`;

const Address = styled(Text)`
    font-family: ${props => props.theme.fonts.body};
    font-size: ${props => props.theme.fontSizes.caption};
`;

const Title = styled(Text)`
    font-family: ${props => props.theme.fonts.heading};
    font-size: ${props => props.theme.fontSizes.body};
    color: ${props => props.theme.colors.ui.primary};
`;

const Info = styled.View`
    padding: ${props => props.theme.space[3]};
`;

const RatingWrapper = styled.View`
    flex-direction: row;
    padding: ${props => props.theme.space[2]} 0;
`;

const RestaurantInfoCard: FC<RestaurantInfoCardProps> = ({restaurant}) => {
    const {
        name,
        icon,
        photos,
        address,
        openingHours,
        rating,
        isClosedTemporarily,
    } = restaurant;

    const ratingArray = Array.from(new Array(Math.ceil(rating)));
    const ratingItem = ratingArray.map(() => (
        <SvgXml height={20} width={20} xml={star} />
    ));

    return (
        <View>
            <RestaurantCard elevation={5}>
                <RestaurantCardCover
                    source={{uri: photos?.[0]} as ImageSourcePropType}
                />
                <Info>
                    <Title>{name}</Title>
                    <RatingWrapper>{ratingItem}</RatingWrapper>
                    <Address>{address}</Address>
                </Info>
            </RestaurantCard>
        </View>
    );
};

export default RestaurantInfoCard;
