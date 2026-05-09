import { ScrollView, StyleSheet, Text, View ,Image, TextInput, Pressable, KeyboardAvoidingView, Platform,} from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Ionicons } from "@expo/vector-icons";


const index = () => {
  return (
    <ScrollView style={{flex: 1}}>
      <View style={{padding:16,alignItems: 'center'}}>
        <Image
        source={require('@/assets/images/logo2-preview.png')}
        style={{
          height: 40,
          width: 40,
          margin: 15
        }}
      />
      <Text style={{fontSize: 32,fontWeight:'bold'}}>Sign In</Text>
      <Text style={{color: 'grey'}}>Let's experience the joy of telecare AI</Text>
      </View>
      <KeyboardAvoidingView 
      style={{flex:1}}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
      <View style={{padding: 16}}>
        <Text style={{fontWeight: 'bold'}}>Email Address</Text>

        <View style={{
          flexDirection:'row',
          alignItems:'center',
          borderWidth: 1,
          borderColor: "#ddd",
          borderRadius: 20,
          marginTop: 2,
          padding: 6,
          marginBottom: 12,}}>
        <Icon name="envelope" size={15} style={{marginLeft: 8, marginRight: 6}}/>
        <TextInput 
        placeholder='elementary221b@gmail.com' 
        >
        </TextInput>
        </View>
        <Text style={{fontWeight: 'bold'}}>Password</Text>
        <View 
        style={{
          flexDirection:'row',
          alignItems:'center',
          borderWidth: 1,
          borderColor: "#ddd",
          borderRadius: 20,
          marginTop: 2,
          padding: 6,
          marginBottom: 12,}}
        >
          <Icon name="lock" size={20} style={{marginLeft: 8, marginRight: 6}} />
        <TextInput 
        placeholder='Enter your password...' 
        secureTextEntry
        style={{
      flex: 1,
      marginLeft: 2
    }}
        >
        </TextInput>
        <Ionicons name="eye-off-outline" size={24} color="#bdb8b8"/>
        </View>
        <Pressable
        style={{
          backgroundColor: "#8DB600",
          paddingVertical: 16,
          borderRadius: 18,
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection:'row',
          gap: 8
        }}
        >
        <Text style={{color: 'white',fontWeight:'bold',fontSize:14,}}>Sign In 
        </Text>
        <Ionicons name="arrow-forward" size={20} color="white" />
        </Pressable>
      </View>
      </KeyboardAvoidingView>

      <View style={{padding:16,justifyContent:'center',flexDirection:'row',gap: 8}}>
        <Pressable
          style={{
            padding: 12,
            borderWidth: 1,
            borderColor: "#d3cfcf",
            borderRadius: 14,
          }}
        >
        <Icon name="facebook" size={24} color="#030405" />
        </Pressable>
        <Pressable
          style={{
            padding: 12,
            borderWidth: 1,
            borderColor: "#d3cfcf",
            borderRadius: 14,
          }}
        >
        <Icon name="google" size={24} color="#030405" />
        </Pressable>
        <Pressable
          style={{
            padding: 12,
            borderWidth: 1,
            borderColor: "#d3cfcf",
            borderRadius: 14,
          }}
        >
        <Icon name="instagram" size={24} color="#030405" />
        </Pressable>
      </View>

      <View style={{padding:16,alignItems:'center'}}>
        <Text>Don't have an account? <Text style={{color: "#8DB600",textDecorationLine: 'underline'}}>Sign up</Text> </Text>
        <Text style={{color:"#8DB600", textDecorationLine: 'underline'}}>Forgot your password?</Text>
      </View>
      
    </ScrollView>
  )
}

export default index

const styles = StyleSheet.create({})