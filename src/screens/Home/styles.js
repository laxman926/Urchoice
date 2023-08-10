import { StyleSheet, Dimensions } from "react-native";  


const styles =StyleSheet.create({
image:{
    width: '100%',
    height: 500,
    resizeMode: 'cover' ,
    justifyContent: 'center' ,
},
title:{
    color: 'red',
    fontWeight: 'bold',
    width: '70%',
    fontSize: 80,
    marginLeft: 25
},
button: {
    backgroundColor: 'white',
    width: 200,
    marginLeft: 25,
    marginTop:25,
    height:40,
    borderRadius:10,
    justifyContent:"center",
    alignItems: "center",

},
buttonText: {
    fontSize:16,
    fontWeight:'bold',
},

searchButton: {
    backgroundColor: 'white',
    width: Dimensions.get('screen').width -20,
    
    marginHorizontal:10,
    height:60,
    borderRadius:30,
    flexDirection: 'row',
    justifyContent:"center",
    alignItems: "center",
    position: "absolute",
    top:20,
    zIndex:100,

},
searchButtonText: {
    fontSize:16,
    fontWeight:'bold',
},






});

export default styles;