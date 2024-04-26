import React, { useState, useEffect } from "react";
import { View, Text, FlatList } from "react-native";

const CrazyRecipes = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetchRecipes();
  }, []);

  const fetchRecipes = () => {
    const crazyOfRecipes = [
      {
        id: 1,
        title: "Abóbora",
        ingredients: [
          "Sementes de abóbora",
          "Terra",
          "Água",
          "Juntar com criatividade",
        ],
      },
      {
        id: 2,
        title: "AR",
        ingredients: [
          "Oxignio",
          "Nitrogênio",
          "Atmosfera",
          "Faz a boa pra juntar tudokkkk",
        ],
      },
    ];

    setRecipes(crazyOfRecipes);
  };

  const renderRecipeItem = ({ item }) => (
    <View style={{ marginBottom: 20 }}>
      <Text style={{ fontSize: 18, fontWeight: "bold" }}>{item.title}</Text>
      <Text>Ingredientes: {item.ingredients.join(", ")}</Text>
    </View>
  );

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 20 }}>
        Receitas
      </Text>
      <FlatList
        data={recipes}
        renderItem={renderRecipeItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default CrazyRecipes;
