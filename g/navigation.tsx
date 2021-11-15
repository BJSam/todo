import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import edit from '../screens/edit';
import home from '../screens/home';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Alert, Image, Text, View } from 'react-native';
import { StackActions, useRoute } from '@react-navigation/native';
import global from '.';
import { useDispatch } from 'react-redux';
import { fn_setData } from '../store/actions';
import view from '../screens/view';
const Stack = createStackNavigator();
function rootStack() {
  const dispatch = useDispatch()
  
  return (
    <Stack.Navigator
    initialRouteName="Home"
    screenOptions={{
      header:(p:any)=>{
        //console.log(p.route)
        const paramms=p.route.params
        return <View style={{
          width:global.w,
          height:80,
          borderBottomRightRadius:25,
          borderBottomLeftRadius:25,
          backgroundColor:'white',
          elevation:15,
          shadowOffset: { width: 0, height: 15 },
       shadowOpacity: 0.8,
       shadowRadius: 25,  
       flexDirection:'row',
       justifyContent:'space-between',
       alignItems:'center',
       padding:15
      }}>
        <Text style={{
          color:global.pc,
          fontSize:18
        }}>
      {p.route.name}
        </Text>
        {
          p.route.name =='Edit'? <TouchableOpacity
          onPress={()=>{
            if(paramms && paramms.isContent.length!=0&&paramms.isTitle.trim().length!=0){
             if(){

             }else{
              dispatch(fn_setData({
                date:new Date().getTime(),
                content:paramms.isContent,
                title:paramms.isTitle,
                lv:paramms.pp
              }));
             }
             p.navigation.setParams(undefined);
             p.navigation.goBack();
            }else{
              Alert.alert('all bad')
            }
          }}
          >
                <Image
                source={require('../asset/save.png')}
                />
                
              </TouchableOpacity>:null
        }
        {
           p.route.name =='View'? <TouchableOpacity
           style={{
             width:40,
             height:40
           }}
           onPress={()=>{
           p.navigation.push('Edit')
           }}
           >
                 <Image
                 style={{
                   height:'100%',
                   width:'100%'
                 }}
                 source={require('../asset/editing.png')}
                 />
                 
               </TouchableOpacity>:null
        }
      </View>
      }
    }}
    >
      <Stack.Screen name="Home" component={home}
     
      />
      <Stack.Screen name="Edit" component={edit}
      />
      <Stack.Screen name="View" component={view}
      />
    </Stack.Navigator>
  );
}
export default rootStack

function UseNavigation() {
  throw new Error('Function not implemented.');
}
