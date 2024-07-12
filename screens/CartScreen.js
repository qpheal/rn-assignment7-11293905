import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  ScrollView
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";


const CartScreen = ({ navigation }) => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const loadCart = async () => {
      try {
        const cartData = await AsyncStorage.getItem("cart");
        if (cartData !== null) {
          setCart(JSON.parse(cartData));
          calculateTotalPrice(JSON.parse(cartData));
        }
      } catch (error) {
        console.error("Error loading cart: ", error);
      }
    };

    loadCart();
  }, []);

  const removeFromCart = async (productId) => {
    try {
      const updatedCart = cart.filter((item) => item.id !== productId);
      setCart(updatedCart);
      await AsyncStorage.setItem("cart", JSON.stringify(updatedCart));
      calculateTotalPrice(updatedCart);
    } catch (error) {
      console.error("Error removing from cart: ", error);
    }
  };

  const calculateTotalPrice = (items) => {
    const totalPrice = items.reduce((total, item) => total + item.price, 0);
    setTotalPrice(totalPrice);
  };


  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.substring(0, maxLength) + "...";
  };

  return (
    <View style={{ flex: 1, padding: 10, backgroundColor: "#fff" }}>
      <ScrollView showsVerticalScrollIndicator={false}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          padding: 20,
          marginBottom: 5,
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
          
        </View>
      </View>

        <View style={{ alignItems: "center", marginBottom: 10 }}>
          <Text
            style={{
              color: "#000",
              fontSize: 22,
              marginBottom: 10,
              fontFamily: "Georgia",
            }}
          >
            CHECKOUT
          </Text>
          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: "#333",
              width: "10%",
            }}
          ></View>
        </View>

        <FlatList
          data={cart}
          keyExtractor={(item) => item.id.toString()} 
          renderItem={({ item }) => (
            <View
              style={{
                flexDirection: "row",
                gap: 10,
                alignItems: "center",
                justifyContent: "left",
                marginBottom: 10,
                marginLeft: 30
              }}
            >
              <View style={{ position: "relative", width: 112, height: 150 }}>
                <Image
                  source={item.image}
                  style={{
                    width: "100%",
                    height: "100%",
                    resizeMode: "cover",
                    borderRadius: 10,
                  }}
                />
              </View>
              <View>
                <Text style={{ fontSize: 22, fontWeight: "500" }}>
                  {item.category}
                </Text>
                <Text style={{ fontSize: 18, fontWeight: "300" }}>
                {truncateText(item.title, 28)}
                </Text>
                <Text
                  style={{ fontSize: 18, fontWeight: "300", color: "#FF5722" }}
                >
                  ${item.price}
                </Text>
              </View>
              <TouchableOpacity
                style={{
                  top: 50,
                  padding: 5,
                }}
                onPress={() => removeFromCart(item.id)}
              >
                <Image source={require("../assets/remove.png")} />
              </TouchableOpacity>
            </View>
          )}
          ListEmptyComponent={<Text>Your cart is empty</Text>}
        />

        <View
          style={{
            marginTop: 10,
            width: "80%",

            paddingVertical: 10,
            marginHorizontal: 20,
            alignItems: "center",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%",
              marginBottom: 20,
            }}
          >
            <Text
              style={{
                fontSize: 20,
                color: "#555",
                textTransform: "uppercase",
                fontWeight: "500",
              }}
            >
              EST. TOTAL
            </Text>
            <Text style={{ fontSize: 24, color: "#FF5722", fontWeight: "500" }}>
              ${totalPrice.toFixed(2)}
            </Text>
          </View>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              gap: 10,
              backgroundColor: "#999",
              width: "80%",
              padding: 10,
              alignContent: "center",
              justifyContent: "center",
              borderRadius: 5
            }}
            onPress={() => navigation.navigate("Home")}
          >
            <Image source={require("../assets/shoppingBag.png")} />
            <Text style={{ color: "#fff", fontSize: 20 }}>CHECKOUT</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default CartScreen;
