import React, { useEffect, useRef, useState } from 'react'
import { View, Text, TextInput, ScrollView } from 'react-native'
import { actions,RichEditor, RichToolbar } from 'react-native-pell-rich-editor'
import global from '../g'
const edit = ({ route, navigation }:any) => {
  
    const {title,edTitle,edContent}=route.params
    const [titlee, settitle] = useState<string>(title.trim()||edTitle||'')
    const [content, setcontent] = useState<string>(edContent||'')
    const rText = useRef<any>()
    useEffect(() => {
        navigation.setParams({ isTitle: titlee.trim(), isContent:content}); // Where its being passed.
      }, [titlee, navigation,content]);
    return (
    <ScrollView
    keyboardDismissMode={'none'}
    nestedScrollEnabled={true}
    scrollEventThrottle={20}
    stickyHeaderIndices={[1]}
    >
         <View >
            <Text >Title: </Text>
            <TextInput
                autoCorrect={false}
                value={titlee}
                placeholder={'stulip@126.com'}
                onChangeText={(txt)=>{settitle(txt)}}
            />
        </View>
    <RichToolbar
         actions={[
            actions.undo,
            actions.redo,
            actions.setStrikethrough,
            actions.checkboxList,
            actions.insertOrderedList,
            actions.blockquote,
            actions.alignLeft,
            actions.alignCenter,
            actions.alignRight,
            actions.code,
            actions.line,

            actions.foreColor,
            actions.hiliteColor,
            actions.heading1,
            actions.heading4,
            'insertEmoji',
            'insertHTML',
            'fontSize',
        ]} 
        editor={rText}
        selectedIconTint={'#2095F2'}
        disabledIconTint={'#bfbfbf'}
    />
    <RichEditor
        // initialFocus={true} // default light style
        ref={rText}
        initialContentHTML={content}
        useContainer={true}
        initialHeight={400}
        // containerStyle={{borderRadius: 24}}
        placeholder={'please input content'}
       onChange={(data)=>{
        setcontent(data)
       }}
        pasteAsPlainText={true}
    />
    
</ScrollView>
    )
}

export default edit
