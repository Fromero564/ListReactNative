import React,{useState} from "react";
import {ScrollView, View, TextInput,Button,StyleSheet, SafeAreaView,FlatList, Text} from 'react-native';

const TodoListScreen = ()=>{
  const [todoListData,setTodoListData]=useState([]);
  const [todoText,setTodoText]=useState("");

  const handleChangeText= (text)=>{
    setTodoText(text);
  };

  const handleButtonPress= () =>{
     if(todoText.trim().length >0){
        setTodoListData((value)=> value.concat(todoText));
        setTodoText("");
     }
  };

  const handlerRenderListItem = ({item})=>{
    return <Text>{item}</Text>;
  };
    return(
    <SafeAreaView style={{flex:1}}>
     <ScrollView style={styles.container}>
      <View>
        <TextInput 
        placeholder="Escribe tu palabra" 
        style={styles.textInput}
        placeholderTextColor="#C4C4C4"
        value={todoText}
        onChangeText={handleChangeText}
        />
        <Button title="Enter" style={styles.button} onPress={handleButtonPress} />
       </View>
       <View>
        <FlatList
        data={todoListData}
        renderItem={handlerRenderListItem}
        keyExtractor={(item)=>item}
        />
       </View>
     </ScrollView>
     </SafeAreaView>
    );
};

const styles= StyleSheet.create({
   container:{
    flex:1,
    backgroundColor:"#FFFBFB",
    paddingTop:16,
    paddingBottom:16,
    paddingLeft:12,
    paddingRight:12,

   },
   textInput:{
    backgroundColor:"#F5F5F5",
    color: "#212121",
    fontSize:16,
    marginBottom:16,
   }
});
export default TodoListScreen;