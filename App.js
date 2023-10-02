import { useState } from 'react';
import { StyleSheet, Text, Alert,View,Button,TextInput,ScrollView,FlatList ,TouchableOpacity,TouchableWithoutFeedback,Keyboard} from 'react-native';
import Header from './Componet/Header';
import ToDo from './Componet/ToDo';
import AddTODO from './Componet/AddToDo';
export default function App() {
  const [todo,setTodo]=useState([
    {Text:'Buy Coffee',key:1},
    {Text:'Creat app',key:2},
    {Text:'Play on the switch',key:3}

  ]);
  function pressHandler(key){
    setTodo((preTodo)=>{
      return preTodo.filter(todo=>todo.key!=key);
    })
  }
  function submitTodo(text){
    if(text!=='')
    {
      setTodo((prevTodo )=>{
        return [
          ...prevTodo,
          {Text:text,key:prevTodo.length+1}
        ]
      })
    }
    
  }
  return (
    <TouchableWithoutFeedback onPress={()=>{
      Keyboard.dismiss();
      console.log('dismise keyboard');
    }}>
    <View style={styles.container}>
      <Header/>
      <View style={styles.content}>
        <AddTODO submitTodo={submitTodo}/>
        <View style={styles.list}>
          <FlatList
          data={todo}
          renderItem={({item})=>(
            <ToDo item={item} pressHandler={pressHandler}/>
          )}
          />
        </View>
      </View>
    </View>
    </TouchableWithoutFeedback>
    
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content:{
    padding:40,
  },
  list:{
    marginTop:20
  }
});
