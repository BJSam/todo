import { StackActions } from '@react-navigation/routers';
import React, { useRef, useState } from 'react'
import { Alert, Animated, FlatList, Image, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableHighlight,  TouchableOpacity,  View } from 'react-native'
import { useSelector } from 'react-redux';
import global from '../g'
import { stateInterface } from '../store/reducers';
  
const home = (props:any) => {
    const todos = useSelector((state:any) => state.data.todo)
    const openCardInp = useRef(new Animated.Value(-1*global.h)).current;
    const shakeIt = useRef(new Animated.Value(0)).current;
    const [disableFlatList, set_disableFlatList] = useState<boolean>(false);
    const [checked,setChecked]= useState(0)
    const [title,setTitle]= useState<string>('')
    const Item = ({ item}:any) => (
        
        <TouchableOpacity onPress={()=>{
            const pushAction = StackActions.push('View', {viewId:item.date});
           
            props.navigation.dispatch(pushAction);
        }}
        disabled={disableFlatList} 
        style={{
            width:'100%',
            height:80,
            backgroundColor:'white',
            shadowColor: '#000',
                shadowOffset: { width: 0, height: 5 },
                shadowOpacity: 0.8,
                shadowRadius: 2,  
                elevation: 3,
                marginBottom:15,
                borderRadius:10,
                
        }}
        >
          <View style={{
              justifyContent:'center',
              padding:5
          }}>
          <Text style={{color:global.pc,fontSize:20}}>{item.title}</Text>
          <Text >{item.lv}</Text>
          </View>
        </TouchableOpacity>
      );
      const radioBtnsData= ['Low', 'Medium', 'Heigh'];
    const renderItem = ({ item }:any) => {
        const backgroundColor = true ? "#6e3b6e" : "#f9c2ff";
        const color = true ? 'white' : 'black';
    
        return (
          <Item
            item={item}
            
            textColor={{ color }}
          />
        );
      };
    return (
           <View style={
               {
                   justifyContent:'flex-end',
                   alignItems:'center',
                   height:"100%",
               }
           }>
               {/* <View style={{
                   width:global.w,
                   height:80,
                   borderBottomRightRadius:25,
                   borderBottomLeftRadius:25,
                   backgroundColor:'red',
                   elevation:15,
                   shadowOffset: { width: 0, height: 15 },
                shadowOpacity: 0.8,
                shadowRadius: 25,  
                flexDirection:'row',
                
               }}>

               </View> */}
             <FlatList
             scrollEnabled={!disableFlatList}
             style={{
                 width:"100%",
                 padding:15
             }}
        showsVerticalScrollIndicator={false}
        data={todos}
        renderItem={renderItem}
        keyExtractor={(item) => item.date}
        ListEmptyComponent={()=>{
            return <View style={{justifyContent:'center',alignItems:'center', }}>
                <Text style={{
                    color:'red',
                    fontSize:25
                }}>
                    No Todo's
                </Text>
            </View>
        }}
      />
           <TouchableHighlight style={{
               borderRadius:15,
               backgroundColor: global.pc,
               justifyContent:'center',
               alignItems:'center',
               height:60,
                width:150,
                position:'absolute',
                bottom:0,
                marginBottom:15
           }}
           onPress={()=>{
            set_disableFlatList(true)
            Animated.spring(openCardInp,{
                useNativeDriver:false,
                toValue: -15
            }).start()
           }}
           >
            <Text style={{
                textAlign:'center',
                color:'white'
            }}>
                Create
            </Text>
           </TouchableHighlight>
           <KeyboardAvoidingView
           style={
               {
                   width:global.w
               }
           }>

          
           <Animated.View style={
               {
                   backgroundColor:global.pc,
                   width:'100%',
                   height:global.h/2,
                   borderTopRightRadius:15,
                   borderTopLeftRadius:15,
                   justifyContent:'center',
                   alignItems:'center',
                   position:'absolute',
                   bottom:openCardInp
               }
           }>
               <TouchableOpacity
               style={{
                   width:20,
                   height:20,
                   position:'absolute',
                   top:25,
                   right:30
               }}
               onPress={()=>{
                set_disableFlatList(false)
                   Animated.timing(openCardInp,{
                       useNativeDriver:false,
                       toValue:-1*global.h
                   }).start()
               }}
               >
                  <Image
                  style={{
                      width:"100%",
                      height:'100%'
                  }}
                  source={require('../asset/x.png')}
                  />
               </TouchableOpacity>
              {
                  disableFlatList?
                  <Animated.View
                  style={{ transform: [{translateX: shakeIt}] }}
                  >
                      <TextInput
                  style={{
                      height: 60,
                      margin: 12,
                      borderWidth: 1,
                      padding: 10,
                      width:global.w/1.5,
                      borderColor:global.scol,
                      color:'white',
                    
                  }}
                  placeholder="Title for your todo"
                  placeholderTextColor="white"
                  selectionColor="white"
                  onChangeText={(txt)=>{setTitle(txt)}}
                  value={title}
                />
                  </Animated.View>
                
                  :null
              }
              
              <View
              style={{
                  justifyContent:'center',
              }}
              >
                  <Text style={{color:'white', marginBottom:5,marginTop:10}}>
                      Priority:
                  </Text>
                  <View style={
                  {
                      flexDirection:'row'
                  }
              }>
              {disableFlatList && radioBtnsData.map((data, key) => {
    return (
        <View key={key}>
            {checked == key ?
                <TouchableOpacity style={{
                    backgroundColor:'green',
                    width:80,
                    height:30,
                    margin:5,
                    justifyContent:'center',
                    alignItems:'center',
                    borderRadius:25,

                }}>
                    <Text style={{
                        color:'white'
                    }}>{data}</Text>
                </TouchableOpacity>
                :
                <TouchableOpacity onPress={()=>{setChecked(key)}} style={{
                    
                    width:80,
                    height:30,
                    margin:5,
                    justifyContent:'center',
                    alignItems:'center',
                    borderRadius:25,
                }}>
                    <Text style={{
                        color:'white'
                    }}>{data}</Text>
                </TouchableOpacity>
            }
        </View>
    )
})

}

              </View>
             {
                 disableFlatList?
                 <TouchableHighlight style={{
                    borderRadius:15,
                    backgroundColor: global.scol,
                    justifyContent:'center',
                    alignItems:'center',
                    height:60,
                     width:150,
                     alignSelf:'center',
                     marginTop:25
                }}
                onPress={()=>{
                    if(title.trim().length==0){
                        Animated.sequence([
                            Animated.timing(shakeIt, { toValue: 10, duration: 100, useNativeDriver: true }),
                            Animated.timing(shakeIt, { toValue: -10, duration: 100, useNativeDriver: true }),
                            Animated.timing(shakeIt, { toValue: 10, duration: 100, useNativeDriver: true }),
                            Animated.timing(shakeIt, { toValue: 0, duration: 100, useNativeDriver: true })
                          ]).start();
                    }else{
                            const pushAction = StackActions.push('Edit', { title: title,pp:radioBtnsData[checked].toLowerCase() });
                            setTitle('')
                            set_disableFlatList(false)
                   Animated.timing(openCardInp,{
                       useNativeDriver:false,
                       toValue:-1*global.h
                   }).start()
                            props.navigation.dispatch(pushAction);
                    }
                
                }}
                >
                 <Text style={{
                     textAlign:'center',
                     color:'black'
                 }}>
                     Next
                 </Text>
                </TouchableHighlight>
                 :null
             }
              </View>
           </Animated.View>
           </KeyboardAvoidingView>
           </View>
    )
}

export default home

const styles = StyleSheet.create({
    
})
