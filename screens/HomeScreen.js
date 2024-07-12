import React from "react";
import {
  View,
  Text,
  FlatList,
  ScrollView,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";

const HomeScreen = ({ navigation }) => {
  const addToCart = async (product) => {
    try {
      const cartData = await AsyncStorage.getItem("cart");
      const cart = cartData ? JSON.parse(cartData) : [];
      const updatedCart = [...cart, product];
      await AsyncStorage.setItem("cart", JSON.stringify(updatedCart));
      Alert.alert(
        "Added to Cart",
        `${product.name} has been added to your cart.`
      );
    } catch (error) {
      console.error("Error adding to cart: ", error);
    }
  };

  const [data, setData] = useState([]);
  const [loading, setloading] = useState(true);

  const url = "https://fakestoreapi.com/products";

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setloading(false));
  }, []);

  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.substring(0, maxLength) + "...";
  };

  return (
    <SafeAreaView
      style={{ flex: 1, paddingTop: 40, paddingHorizontal: 30, width: "100%" }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            
            <Image source={require("../assets/Menu.png")} />
          </TouchableOpacity>
        </View>
        <View style={{ alignItems: "center" }}>
          <Image source={require("../assets/Logo.png")} />
        </View>
        <View style={{ flexDirection: "row", gap: 15 }}>
          <TouchableOpacity>
            <Image source={require("../assets/Search.png")} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
            <Image source={require("../assets/shoppingBag.png")} />
          </TouchableOpacity>
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 20,
        }}
      >
        <View>
          <Text style={{ fontSize: 20, fontWeight: "500", marginBottom: 10 }}>
            OUR STORY
          </Text>
        </View>
        <View style={{ flexDirection: "row", gap: 15 }}>
          <Image source={require("../assets/Listview.png")} />
          <Image source={require("../assets/Filter.png")} />
        </View>
      </View>

      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          numColumns={2}
          contentContainerStyle={{
            paddingHorizontal: 10,
            alignItems: "center",
          }}
          columnWrapperStyle={{
            justifyContent: "space-between",
            marginBottom: 10,
          }}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("ProductDetail", { product: item })
              }
            >
              <View
                key={item.id}
                style={{
                  marginBottom: 10,
                  marginHorizontal: 35,
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    position: "relative",
                    alignItems: "center",
                    width: 200,
                    height: 200,
                    marginBottom: 5,
                    padding: 15,
                    borderRadius: 10,
                    borderWidth: 1,
                    borderColor: "#ddd",
                  }}
                >
                  <Image
                    source={item.image}
                    style={{
                      width: "100%",
                      height: "100%",

                      borderRadius: 5,
                    }}
                  />

                  <TouchableOpacity
                    style={{
                      position: "absolute",
                      bottom: 5,
                      right: 5,
                      padding: 5,
                      backgroundColor: "#fff",
                      borderRadius: 50,
                    }}
                    onPress={() => addToCart(item)}
                  >
                    <Image source={require("../assets/add_circle.png")} />
                  </TouchableOpacity>
                </View>

                <View>
                  <Text style={{ fontSize: 22, fontWeight: "500" }}>
                    {item.category}
                  </Text>
                  <Text style={{ fontSize: 18, fontWeight: "300" }}>
                    {truncateText(item.title, 20)}
                  </Text>
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: "300",
                      color: "#FF5722",
                    }}
                  >
                    ${item.price}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      )}
    </SafeAreaView>
  );
};

export default HomeScreen;
