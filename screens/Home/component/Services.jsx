import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Pressable,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import { db } from "../../../firebase";
import { getTypeService } from "../../../slice/TypeServiceSlice";
import { collection, getDocs } from "firebase/firestore";
import { useDispatch, useSelector } from "react-redux";
import {
  getProduct,
  incrementQty,
  decrementQty,
} from "../../../slice/ProductSlice";
const Services = () => {
  // const services = [
  //   {
  //     id: 0,
  //     image: "https://cdn-icons-png.flaticon.com/128/3003/3003984.png",
  //     name: "Washing"
  //   },
  //   {
  //     id: 1,
  //     image: "https://cdn-icons-png.flaticon.com/128/2975/2975175.png",
  //     name: "Laundry"
  //   },
  //   {
  //     id: 2,
  //     image: "https://cdn-icons-png.flaticon.com/128/9753/9753675.png",
  //     name: "Wash & Iron"
  //   },
  //   {
  //     id: 3,
  //     image: "https://cdn-icons-png.flaticon.com/128/995/995016.png",
  //     name: "Cleaning"
  //   },
  //   {
  //     id: 4,
  //     image: "https://cdn-icons-png.flaticon.com/512/2890/2890981.png",
  //     name: "Dry"
  //   }
  // ]
  const [service, setService] = useState([]);
  const dispatch = useDispatch();
  const typeService = useSelector((state) => state.type.type);

  useEffect(() => {
    fetchService();
  }, []);

  const fetchService = async () => {
    const array = [];
    const colRef = collection(db, "services");
    const docsSnap = await getDocs(colRef);
    docsSnap.forEach((doc) => {
      array.push(doc.data());
    });
    setService(array);
  };
  return (
    <View style={styles.Service}>
      <Text style={{ fontWeight: 500, fontSize: 20,marginLeft: 10}}>
        Service Available
      </Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {service.map((item, i) => (
          <Pressable
            key={i}
            style={
              typeService == item.name
                ? {
                    margin: 5,
                    padding: 10,
                    borderRadius: 10,
                    backgroundColor: "white",
                    borderColor: "black",
                    borderWidth: 1,
                  }
                : {
                    margin: 5,
                    padding: 10,
                    borderRadius: 10,
                    backgroundColor: "white",
                  }
            }
            onPress={() => dispatch(getTypeService(item.name))}
          >
            <Image
              style={{ width: 80, height: 80 }}
              source={{ uri: item.image }}
            ></Image>
            <Text>{item.title}</Text>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
};

export default Services;

const styles = StyleSheet.create({
  Service: {
    margin: 5,
  },
});
