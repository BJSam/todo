import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import WebView from 'react-native-webview'
import { useSelector } from 'react-redux'
import global from '../g'
const view = (props:any) => {
    
    //console.log(props.route)
    const id = props.route?.params?.viewId
    const todos = useSelector((state:any) => state.data.todo)
    const title = todos.filter((x:any)=>x.date==id)[0].title
    const con= todos.filter((x:any)=>x.date==id)[0].content
    useEffect(() => {
        props.navigation.setParams({ edTitle: title.trim(), edContent:con}); // Where its being passed.
      }, [props.navigation]);
    console.log(con)
    return (
        <View style={styles.container}>
       <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
       <Text style={{
           fontSize:24,
           color:global.pc,
           paddingTop:10,
           alignSelf:'center'
       }}>
           {title}
           </Text>
        <WebView
        injectedJavaScript={`const meta = document.createElement('meta'); meta.setAttribute('content', 'width=device-width, initial-scale=0.5, maximum-scale=0.5, user-scalable=0'); meta.setAttribute('name', 'viewport'); document.getElementsByTagName('head')[0].appendChild(meta); `}
        scalesPageToFit={false}
          source={{html:con}}
          style={styles.video}
        />
       </ScrollView>
      </View>
    )
}

export default view

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-between',
  
    },
    video: {
      margin: 20,
      width: global.w,
      flex: 1
    }
  });
