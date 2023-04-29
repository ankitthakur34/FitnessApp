import React,{useContext} from "react";
import { View, Text, Image, ScrollView } from "react-native";
import FitnessCards from "../components/FitnessCards";
import { FitnessItems } from "../../Context";
const HomeScreen = () => {

  const {
   
    minutes,
  
    calories,

    workout,
  } = useContext(FitnessItems);
  return (
   
    <ScrollView style={{marginTop:30,}}>
      <View
        style={{
          backgroundColor: "grey",
        //    height: 200,
          width: "100%",
          padding: 10,
        }}
      >
        <Text style={{ color: "white", fontWeight: "bold", fontSize: 18 }}>
          HOME WORKOUT
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            padding: 10,
            marginTop: 25,
          }}
        >
          <View>
            <Text
              style={{
                textAlign: "center",
                color: "white",
                fontWeight: "bold",
                fontSize: 18,
              }}
            >
              {workout}
            </Text>
            <Text style={{ color: "white", fontWeight: "bold" }}>WORKOUT</Text>
          </View>

          <View>
            <Text
              style={{
                textAlign: "center",
                color: "white",
                fontWeight: "bold",
                fontSize: 18,
              }}
            >
              {calories}
            </Text>
            <Text style={{ color: "white", fontWeight: "bold" }}>KCAL</Text>
          </View>

          <View>
            <Text
              style={{
                textAlign: "center",
                color: "white",
                fontWeight: "bold",
                fontSize: 18,
              }}
            >
              {minutes}
            </Text>
            <Text style={{ color: "white", fontWeight: "bold" }}>MINUTES</Text>
          </View>
        </View>

        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Image
            style={{
              width: "90%",
              height: 120,
              marginTop: 20,
              borderRadius: 7,
            }}
            source={{
              uri: "https://tse1.mm.bing.net/th?id=OIP.woMk4nRj2NQEfhTSVhZaaQHaEn&pid=Api&P=0",
            }}
          />
        </View>

        <FitnessCards />
      </View>
      </ScrollView>
     
  );
};

export default HomeScreen;
