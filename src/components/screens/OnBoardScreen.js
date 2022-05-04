import React from 'react';
import {Text, StyleSheet, View, Image } from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {SecondaryButton} from "../colors/Button"
const OnBoardScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: "#ffffff"}}>
      <View style={{height: 350}}>
        <Image
          style={{
            width: '100%',
            resizeMode: 'contain',
            top: -200,
          }}
          source={require('../../food/images/vegetable-plate-2.png')}
        />
      </View>
      <View style={style.textContainer}>
        <View>
          <Text style={{fontSize: 22, fontWeight: 'bold', textAlign: 'center'}}>
            Delicious Food
          </Text>
          <Text
            style={{
              marginTop: 10,
              fontSize: 14,
              textAlign: 'center',
              color: 'grey',
              marginBottom: 15,
            }}>
            We help you find best and delicious food
          </Text>
        </View>
        <View style={style.indicatorContainer}>
          <View style={style.currentIndicator} />
          <View style={style.indicator} />
          <View style={style.indicator} />
        </View>
        <SecondaryButton style={{marginHorizontal: 30, backgroundColor: 'grey'}}
          onPress={() => navigation.navigate('Home')}
          title="Get Started"
        />
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  textContainer: {
    flex: 1,
    paddingHorizontal: 50,
    justifyContent: 'space-between',
    paddingBottom: 40,
  },
  indicatorContainer: {
    height: 10,
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  currentIndicator: {
    height: 10,
    width: 30,
    borderRadius: 10,
    backgroundColor: 'salmon',
    marginHorizontal: 5,
  },
  indicator: {
    height: 10,
    width: 12,
    borderRadius: 6,
    backgroundColor: 'grey',
    marginHorizontal: 5,
  },
});

export default OnBoardScreen;