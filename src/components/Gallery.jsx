import { View, Image } from "react-native";

const imageUrl = "https://picsum.photos";

export default function Gallery() {
  return (
    <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
      <Image source={{ uri: imageUrl }} style={{ width: 100, height: 100 }} />
      <Image source={{ uri: imageUrl }} style={{ width: 100, height: 100 }} />
    </View>
  );
}
