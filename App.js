import * as React from 'react';
import { Text, View, Button, TouchableOpacity, StyleSheet } from 'react-native';
import { Audio } from 'expo-av';

class SoundButton extends React.Component {
       playSound = async () => {
      await Audio.Sound.createAsync(
         {uri:'https://dight310.byu.edu/media/audio/FreeLoops.com/3/3/Drip%20Sound-22095-Free-Loops.com.mp3'},
         {shouldPlay:true}
      );
    }

  render() {
    return(
      <TouchableOpacity style={{
        backgroundColor:'purple',
        borderRadius:100,
        borderWidth:3,
        borderColor:'lightgrey',
        alignItems:'center',
        justifyContent:'center',
        width:150, 
        height:90, 
        marginTop:100, 
        marginLeft:130}} onPress={this.playSound}>

       <Text style={{
         fontFamily:'Algerian',
        fontSize:20,
        fontStyle:'italic',
        fontWeight:'thick'}}>Press Me</Text>
      </TouchableOpacity>
         );
       }
}

class SoundButton1 extends React.Component {
    playSound = async () => {
      await Audio.Sound.createAsync(
         {uri:'http://www.synthmania.com/Roland%20R-8/Audio/08%20DISCO2.mp3'},
         {shouldPlay:true}
      );
    }

  render() {
    return(
      <TouchableOpacity style={{
        backgroundColor:'yellow',
        borderRadius:100,
        borderWidth:3,
        borderColor:'lightgrey',
        alignItems:'center',
        justifyContent:'center',
        width:150, 
        height:90, 
        marginTop:1, 
        marginLeft:130}} onPress={this.playSound}>

       <Text style={{
         fontFamily:'Calibri Math',
         fontStyle:'Italic',
        fontSize:25,
        fontWeight:'thick'}}>Press Me</Text>
      </TouchableOpacity>
         );
       }
}

class SoundButton2 extends React.Component {
      playSound = async () => {
      await Audio.Sound.createAsync(
         {uri:'http://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/music/start.ogg'},
         {shouldPlay:true}
      );
    }

  render() {
    return(
      <TouchableOpacity style={{
        backgroundColor:'green',
        borderRadius:100,
        borderWidth:3,
        borderColor:'lightgrey',
        alignItems:'center',
        justifyContent:'center',
        width:150, 
        height:90, 
        marginTop:1, 
        marginLeft:130}} onPress={this.playSound}>

       <Text style={{
         fontFamily:'Arial Black',
        fontSize:20,
        fontWeight:'thick'}}>Press Me</Text>
      </TouchableOpacity>
         );
       }
}

class SoundButton3 extends React.Component {
       playSound = async () => {
      await Audio.Sound.createAsync(
         {uri:'http://codeskulptor-demos.commondatastorage.googleapis.com/descent/background%20music.mp3'},
         {shouldPlay:true}
      );
    }

  render() {
    return(
      <TouchableOpacity style={{
        backgroundColor:'blue',
        borderRadius:100,
        borderWidth:3,
        borderColor:'lightgrey',
        alignItems:'center',
        justifyContent:'center',
        width:150, 
        height:90, 
        marginTop:1, 
        marginLeft:130}} onPress={this.playSound}>

       <Text style={{
         fontFamily:'Cursive',
         fontStyle:'Italic',
        fontSize:25,
        fontWeight:'thick'}}>Press Me</Text>
      </TouchableOpacity>
         );
       }
}

class StopSound extends React.Component{
    
  render(){
      return(
         <TouchableOpacity style={{backgroundColor:'red',
        borderRadius:100,
        borderWidth:3,
        borderColor:'lightgrey',
        alignItems:'center',
        justifyContent:'center',
        width:240, 
        height:70, 
        marginTop:1, 
        marginLeft:90}} onPress={() => {
          Audio.setIsEnabledAsync(false);
        }}>
       
          <Text style={{
           fontSize:20 
          }}
          >Stop Music</Text>   
         </TouchableOpacity>
      );
  }
}

class StartSound extends React.Component{
    
  render(){
      return(
         <TouchableOpacity style={{backgroundColor:'red',
        borderRadius:100,
        borderWidth:3,
        borderColor:'lightgrey',
        alignItems:'center',
        justifyContent:'center',
        width:240, 
        height:70, 
        marginTop:1, 
        marginLeft:90}} onPress={() => {
          Audio.setIsEnabledAsync(true);
        }}>
       
          <Text style={{
           fontSize:20 
          }}
          >Start Music</Text>   
         </TouchableOpacity>
      );
  }
}

export default class App extends React.Component {
 render() {
   return(
 
     <View style={styles.mainContainer}>
        <Text style={styles.text}>🎧 DJ WhiteHat 🎧</Text>
        <SoundButton/>
        <SoundButton1/>
        <SoundButton2/>
        <SoundButton3/>
        <StopSound/>
        <StartSound/>
     </View>
   );
   
 }
}

const styles=StyleSheet.create({
  mainContainer:{
    flex:1,
  backgroundColor: 'white',
  },

  text:{
    backgroundColor:'blue',
    color:'white',
    fontWeight:'bold',
    marginBottom:-100,
    padding:20,
    marginTop:30,
    fontSize:20,
    textAlign:'center',
    
  }
})
