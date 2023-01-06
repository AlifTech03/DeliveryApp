import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import CatagoryCard from "./CatagoryCard";
import client, { urlFor } from "../sanity";

const Catagories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setTimeout(
      () =>
        client
          .fetch(
            `*[_type == "category"]
  `
          )
          .then((data) => setCategories(data)),
      200
    ),
      [];
  });

  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    >
      {categories.map((category) => (
        <CatagoryCard
          key={category._id}
          imgUrl={urlFor(category.image).url()}
          title={category.name}
        />
      ))}
    </ScrollView>
  );
};

export default Catagories;
