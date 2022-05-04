import * as React from 'react';
import {
  StyleSheet, View, Text, SafeAreaView, Image, Dimensions,
} from 'react-native';
import { TextInput, TouchableOpacity, ScrollView, FlatList, TouchableHighlight } from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements';
import categories from '../../food/categories';
import foods from '../../food/foods';
const { width } = Dimensions.get('screen');
const cardWidth = width / 2 - 20;


const HomeScreen = ({ navigation }) => {
  const [selectedCategoryIndex, setSelectedCategoryIndex] = React.useState(0);

  const ListCatergories = () => {
    return (
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={style.categoriesListContainer}>

        {categories.map((category, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={0.8}
            onPress={() => setSelectedCategoryIndex(index)}>
            <View style={{
              backgroundColor:
                selectedCategoryIndex == index ? "salmon" : "#fccfc3",
              ...style.categoryBtn
            }}>
              <View style={style.categoryBtnImgCon}>
                <Image
                  source={category.image}
                  style={{ height: 35, width: 35, resizeMode: 'cover' }}
                />
              </View>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: 'bold',
                  marginLeft: 10,
                  color:
                    selectedCategoryIndex == index
                      ? 'white'
                      : 'salmon',
                }}>
                {category.name}
              </Text>
            </View>

          </TouchableOpacity>

        ))}
      </ScrollView>
    )
  }
  const Card = ({ food }) => {
    return (
      <TouchableHighlight
      underlayColor={'white'}
      activeOpacity={0.9}
      onPress={() => navigation.navigate('DetailsScreen', food)}
      >
      <View style={style.card}>
        <View style={{ alignItem: 'center', top: -10 }}>
          <Image source={food.image} style={{ height: 150, width: 120, borderRadius: 50, }} />
        </View>
        < View style={{ marginHorizontal: 20 }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{food.name}</Text>
          <Text style={{ fontSize: 12, color: 'grey', marginTop: 2 }}>
            {food.description}
          </Text>
        </View>
        <View
          style={{
            marginTop: 10,
            marginHorizontal: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
            ${food.price}
          </Text>
          <View style={style.addToCartBtn}>
            <Icon name="add" size={20} color={'white'} />
          </View>
        </View>
      </View>
      </TouchableHighlight>
    )
  }
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={style.header}>
        <View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ fontSize: 22, color: "salmon" }}>Welcome,</Text>
            <Text style={{ fontSize: 22, fontWeight: 'bold', marginLeft: 10, color: "salmon" }}>Susan</Text>
          </View>
          <Text style={{ marginTop: 5, fontSize: 12, color: "grey" }}>We're ready to serve you today</Text>
        </View>
        <Image source={require('../../food/images/categoryImage/person.png')}
          style={{ height: 50, width: 50, borderRadius: 25 }} />
      </View>
      <View
        style={{
          marginTop: 40,
          flexDirection: 'row',
          paddingHorizontal: 20,
        }}>
        <View style={style.inputContainer}>
          <Icon name="search" size={28} />
          <TextInput
            style={{ flex: 1, fontSize: 18 }}
            placeholder="Search for food"
          />
        </View>
        <View style={style.sortBtn}>
          <Icon name="tune" size={28} />
        </View>
      </View>
      <View>
        <ListCatergories />
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={foods}
        renderItem={({ item }) => <Card food={item} />}
      />
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  header: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  inputContainer: {
    flex: 1,
    height: 40,
    borderRadius: 10,
    flexDirection: 'row',
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  sortBtn: {
    width: 50,
    height: 40,
    marginLeft: 10,
    // backgroundColor: '#00ff7f',
    backgroundColor: 'salmon',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
  },
  categoriesListContainer: {
    paddingVertical: 30,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  categoryBtn: {
    height: 45,
    width: 120,
    marginRight: 7,
    borderRadius: 30,
    alignItems: 'center',
    paddingHorizontal: 5,
    flexDirection: 'row',
  },
  categoryBtnImgCon: {
    height: 35,
    width: 35,
    backgroundColor: 'white',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    height: 220,
    width: cardWidth,
    marginHorizontal: 10,
    marginBottom: 20,
    marginTop: 50,
    borderRadius: 15,
    elevation: 20,
    backgroundColor:'#f5f5f5',
    justifyContent: "center"
  },
  addToCartBtn: {
    height: 30,
    width: 30,
    borderRadius: 20,
    backgroundColor: 'salmon',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default HomeScreen;
