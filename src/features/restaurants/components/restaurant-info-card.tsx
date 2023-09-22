import React, {FC} from 'react';
import {ImageSourcePropType, View} from 'react-native';
import {Card, Text} from 'react-native-paper';
import styled from 'styled-components/native';
import {RestaurantInfoCardProps} from '.';
import {SvgXml} from 'react-native-svg';
import star from '../../../../assets/star';
import open from '../../../../assets/open';

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

const Section = styled.View`
    flex-direction: row;
    align-items: center;
`;
const SectionEnd = styled.View`
    flex: 1;
    flex-direction: row;
    justify-content: flex-end;
`;

const Icon = styled.Image`
    width: 15px;
    height: 15px;
    margin-left: 8px;
`;

const ErrorText = styled.Text`
    color: ${props => props.theme.colors.text.error};
`;

const RestaurantInfoCard: FC<RestaurantInfoCardProps> = props => {
    const {
        name,
        icon,
        photos,
        address,
        openingHours,
        rating,
        isClosedTemporarily,
        isOpenNow,
    } = props.restaurant;

    const ratingArray = Array.from(new Array(Math.ceil(rating)));
    const ratingItem = ratingArray.map((_, index) => (
        <SvgXml key={`star-${index}`} height={20} width={20} xml={star} />
    ));
    console.log(props);
    return (
        <View>
            <RestaurantCard elevation={5}>
                <RestaurantCardCover
                    source={{uri: photos?.[0]} as ImageSourcePropType}
                />
                <Info>
                    <Title>{name}</Title>
                    <Section>
                        <RatingWrapper>{ratingItem}</RatingWrapper>
                        <SectionEnd>
                            {isClosedTemporarily && (
                                <>
                                    <ErrorText>CLOSED TEMPORARILY</ErrorText>
                                    <Icon
                                        source={
                                            {uri: icon} as ImageSourcePropType
                                        }
                                    />
                                </>
                            )}
                            {isOpenNow && (
                                <SvgXml xml={open} width={20} height={20} />
                            )}
                        </SectionEnd>
                    </Section>
                    <Address>{address}</Address>
                </Info>
            </RestaurantCard>
        </View>
    );
};

export default RestaurantInfoCard;
