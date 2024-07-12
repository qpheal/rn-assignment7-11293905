import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ScrollView,
} from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";

const ProductDetailScreen = ({ route, navigation }) => {
  const { product } = route.params;

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

  return (
    <SafeAreaView
      style={{ flex: 1, paddingTop: 20, paddingHorizontal: 30, width: "100%" }}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Image source={require("../assets/Menu.png")} />
          </TouchableOpacity>
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
            position: "relative",
            alignItems: "center",
            width: 250,
            height: 250,
            marginVertical: 20,
            padding: 5,
            borderRadius: 10,
            borderWidth: 1,
            borderColor: "#ddd",
            marginHorizontal: "auto",
          }}
        >
          <Image
            source={product.image}
            style={{
              width: "100%",
              height: "100%",
              borderRadius: 5,
            }}
          />
        </View>

        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={{ fontSize: 28, fontWeight: "600" }}>
            {product.category}
          </Text>
          <Image source={require("../assets/Export.png")} />
        </View>
        <Text style={{ fontSize: 16, marginTop: 5 }}>{product.title}</Text>

        <Text
          style={{
            fontSize: 20,
            color: "brown",
            fontWeight: "600",
            marginVertical: 5,
          }}
        >
          ${product.price}
        </Text>
        <Text
          style={{
            fontSize: 18,
            fontWeight: "600",
            letterSpacing: 2,
            marginTop: 5,
          }}
        >
          DESCRIPTION
        </Text>
        <Text>{product.description}</Text>

        <View style={{ marginVertical: 20, gap: 5 , marginBottom: 80}}>
          <View style={{ flexDirection: "row", gap: 8 }}>
            <Image source={require("../assets/Do Not Bleach.png")} />
            <Text style={{ fontSize: 16 }}>Do not use bleach</Text>
          </View>
          <View style={{ flexDirection: "row", gap: 8 }}>
            <Image source={require("../assets/Do Not Tumble Dry.png")} />
            <Text style={{ fontSize: 16 }}>Do not tumble dry</Text>
          </View>
          <View style={{ flexDirection: "row", gap: 8 }}>
            <Image source={require("../assets/Do Not Wash.png")} />
            <Text style={{ fontSize: 16 }}>Do not use bleach</Text>
          </View>
          <View style={{ flexDirection: "row", gap: 8 }}>
            <Image source={require("../assets/Iron Low Temperature.png")} />
            <Text style={{ fontSize: 16 }}>Do not use bleach</Text>
          </View>

          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: "#1e1e1e",
              width: "60%",
              marginTop: 5,
              alignItems: "center",
            }}
          ></View>

          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View style={{ flexDirection: "row", gap: 8 }}>
              <Image source={require("../assets/Shipping.png")} />
              <View>
                <Text style={{ fontSize: 16 }}>Free Flat Rate Shipping</Text>
                <Text style={{ fontSize: 16, color: "gray" }}>
                  Estimated to be delivered on
                </Text>
                <Text style={{ fontSize: 16, color: "gray" }}>
                  09/11/2024 - 12/11/2024.
                </Text>
              </View>
            </View>
            <Image source={require("../assets/Up.png")} />
          </View>

         
        </View>

        <TouchableOpacity
            style={{
              position: "absolute",
           marginVertical: 20,
              bottom: 0,
              flexDirection: "row",
              gap: 10,
              backgroundColor: "#999",
              width: "100%",
              padding: 10,
              alignContent: "center",
              justifyContent: "space-between",
              borderRadius: 20,
              paddingHorizontal: 10,
            }}
            onPress={() => addToCart(product)}
          >
            <View style={{ flexDirection: "row", gap: 8 }}>
              <Image source={require("../assets/Plus.png")} />
              <Text style={{ color: "#fff", fontSize: 20 }}>ADD TO BASKET</Text>
            </View>
            <Image source={require("../assets/Heart.png")} />
          </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProductDetailScreen;
