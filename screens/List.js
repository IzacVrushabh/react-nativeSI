import React, { useState } from "react";
import {
  Text,
  View,
  Button,
  Image,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
// import moduleName from "module";
import { images, COLORS, SIZES, FONTS } from "../constants";

function List({ navigation:{navigate} }) {
  const [list, setList] = useState([
    { id: 1, image: images.img1, Title: " Bundle" },
    { id: 2, image: images.img2, Title: "Rubber bush" },
    { id: 3, image: images.img3, Title: "Connnector" },
    { id: 4, image: images.img4, Title: "Bundle " },
    { id: 5, image: images.img5, Title: "HDPE Pipe" },
    { id: 6, image: images.img6, Title: "HDPE Pipe" },
  ]);
  return (
    <View
      style={{
        height: 700,
        backgroundColor: "#74FA9E",
      }}
    >
      <FlatList
        keyExtractor={(item) => item.id}
        data={list}
        renderItem={({ item }) => (
          <TouchableOpacity>
            <View
              style={{
                width: "90%",
                height: 100,
                margin: SIZES.padding,
                borderRadius: 10,
                backgroundColor: COLORS.white,
                flexDirection: "row",
              }}
            >
              <Image
                source={item.image}
                resizeMode="contain"
                style={{
                  borderRadius: 14,
                  height: 100,
                  width: 100,
                  padding: 5,
                }}
              />
              <View style={styles.cardBody}>
                <Text style={{ fontSize: FONTS.body3 }}>{item.Title}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
export const styles = StyleSheet.create({
  cardBody: {
    padding: 20,
  },
});
export default List;
