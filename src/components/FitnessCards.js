import { Pressable, StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react'
import fitness from '../data/fitness'
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
const FitnessCards = () => {
    const fitnessData=fitness;
    const navigation= useNavigation();
  return (
    <View>
    {fitnessData.map((item,index)=>(
        <Pressable onPress={()=> navigation.navigate('Workout',{
          image:item.image,
          excersises :item.excersises,
          id:item.id,
        })}  key={index} style={{alignItems:"center",margin:14,borderRadius:7}}>
          <Image style={{width:"90%",height:140}} source={{uri: item.image}} />

          <Text
            style={{
               position: "absolute",
               color: "white",
              fontSize: 16,
              fontWeight: "bold",
              left: 20,
              top: 20,
            }}
          >
            {item.name}
          </Text>
          <MaterialCommunityIcons
            style={{ position: "absolute", color: "white", bottom: 15,left:20 }}
            name="lightning-bolt"
            size={24}
            color="black"
          />
        </Pressable>
        
       
    ))}
     
    </View>
  )
}

export default FitnessCards

const styles = StyleSheet.create({})