import { View, Text } from "react-native";
import CrazyRecipes from "./CrazyRecipes";

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Craziest APP</Text>
      <Text>Este é um App de noticias do balaco baco ☝🤓</Text>
      <Button
        title="Crazy Recipes"
        onPress={() => navigation.navigate("CrazyRecipes")}
      />
    </View>
  );
}
