import FavoritIcon from '@src/assets/icons/Favorite_fill.svg';
import ForkIcon from '@src/assets/icons/fork_icon.svg';
import StarIcon from '@src/assets/icons/Star_fill.svg';
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

const profileImage = require('../../assets/image/airplane.png');
const backgroundImage = require('../../assets/image/tokyo.png');

const styles = StyleSheet.create({
  card: {
    width: '100%',
    height: 380,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 16,
    },
    shadowOpacity: 0.25,
    shadowRadius: 24,
    borderRadius: 30, // 이제 이 속성은 card에 직접 적용됩니다.
    overflow: 'hidden', // borderRadius 적용을 위해 필요합니다.
    marginBottom: 20,
  },
  subcard: {
    height: 100,
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    left: 20, // 좌측 정렬
    right: 20, // 우측 정렬
    top: 20,
    // marginHorizontal: 20, // 양쪽으로 20px 마진 적용
    backgroundColor: 'rgba(255, 255, 255, 0.70)',
    borderRadius: 20,
    // React Native doesn't support backdrop-filter, use an overlay Image or blur effect instead
  },
  textContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  countryAndRankContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
  },
  cityAndDateContainer: {
    alignSelf: 'flex-start',
    color: '#797979',
    fontSize: 16,
    fontWeight: '400',
    fontFamily: 'Inter',
  },
  profileImage: {
    width: 70, // Set the width as needed
    height: 70, // Set the height as needed
    borderRadius: 35, // Make it round
    borderWidth: 2, // Adjust as needed
    borderColor: 'white', // Adjust as needed
  },
  interactionContainer: {
    position: 'absolute',
    bottom: 20, // Set the interaction container to be 20 pixels from the bottom
    left: 20,
    right: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  interactionText: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 12,
    color: '#0989FF',
    fontSize: 14,
    fontWeight: '700',
    fontFamily: 'Inter',
    paddingHorizontal: 10,
    paddingVertical: 2,
  },
  price: {
    backgroundColor: '#0989FF',
    borderRadius: 12,
    color: 'white',
    fontSize: 14,
    fontWeight: '700',
    fontFamily: 'Inter',
    paddingHorizontal: 10,
    paddingVertical: 2,
  },
  countryAndRatingText: {
    color: 'black',
    fontSize: 24,
    fontWeight: '700',
    fontFamily: 'Inter',
  },
});

const PlanCardType1 = () => {
  const iconSize = 24;

  return (
    <ImageBackground source={backgroundImage} style={styles.card}>
      <View style={styles.subcard}>
        <View style={styles.textContainer}>
          <View style={styles.countryAndRankContainer}>
            <Text style={styles.countryAndRatingText}>일본</Text>
            <StarIcon width={iconSize} height={iconSize} />
            <Text style={styles.countryAndRatingText}>4.5</Text>
          </View>
          <Text style={styles.cityAndDateContainer}>도쿄 - 3박4일</Text>
        </View>
        <Image source={profileImage} style={styles.profileImage} />
      </View>

      <View style={styles.interactionContainer}>
        <TouchableOpacity style={styles.interactionText}>
          <FavoritIcon width={iconSize} height={iconSize} />
          <Text style={styles.interactionText}>637</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.interactionText}>
          <ForkIcon width={iconSize} height={iconSize} />
          <Text style={styles.interactionText}>2,853</Text>
        </TouchableOpacity>
        <Text style={styles.price}>160 만원</Text>
      </View>
    </ImageBackground>
  );
};

export default PlanCardType1;
