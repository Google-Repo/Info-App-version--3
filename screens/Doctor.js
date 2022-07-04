import * as React from 'react';
import {View, Text, Image, StyleSheet, ImageBackground, Dimensions} from 'react-native';


export default function Doctor ({navigation}){
  return(
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        {/* This for background👇 */}
          <ImageBackground source={require('../assets/Background.png')}  style={styles.image}>

             {/* This for Logo👇 */}
            <Image source = {require('../assets/Logo.png')} style = {styles.LogoImage}></Image>

             {/* This for Title👇 */}
            <Image source={require('../assets/Title.png')} style = {styles.TitleImage}></Image>
             
             {/* This for CategoriesBg👇 */}
             <View  style = {styles.CategoriesContainer}>
                <Image source={require('../assets/CategoriesPanel.png')}></Image>
             </View>

             {/* This for all icons inside the Categories Container */}
              <View style = {styles.CateIconContioner}>
                <View style = {styles.CardioIcon}>
                    <Image source={require("../assets/CardioIcon.png")}></Image>
                </View>

                <View style = {styles.DenIcon}>
                    <Image source = {require("../assets/DenIcon.png")}></Image>
                </View>

                <View style = {styles.PediaIcon}>
                  <Image source = {require("../assets/PediaIcon.png")}></Image>
                </View>

                <View style = {styles.DermaIcon}>
                  <Image source={require("../assets/DermaIcon.png")}></Image>
                </View>

                <View style = {styles.GastroIcon}>
                  <Image source={require("../assets/GastroIcon.png")}></Image>
                </View>


             </View>
             



           
           
                
            

          </ImageBackground>
             
        </View>
  );
}

const styles = StyleSheet.create({
  text:{
    fontSize: 26, 
    fontWeight: 'bold',
    justifyContent:'center'
  },
  LogoImage:{
      marginTop:15,
      marginLeft:41
  },
  TitleImage:{
      marginTop:5,
      marginLeft:-29,
      justifyContent:'center',
      alignItems:'center'
      
  },
  image:{
    height:766,
    width:390,
    marginLeft:10,
    marginBottom:50
    
  },
  
  CategoriesContainer:{
    marginLeft:-16,
    marginRight:20
  },
  CateContainer:{
    alignItems:"center",
    justifyContent:"center"
  },
  CardioIcon:{
    marginTop:-250,
    marginLeft:43,
  },
  DenIcon:{
    marginLeft:160,
    marginTop:-80.80
  },
  PediaIcon:{
    marginLeft:260,
    marginTop:-84.80,
  },
  DermaIcon:{
    marginTop:25
  }
  

  
 

   
 

  
})