const React = require("react-native");
const { StyleSheet, Platform,Dimensions } = React;
const screenWidth = Dimensions.get('window').width; 

export default {

  Container: {
    backgroundColor: '#ffffff',
  },
  header_text : {
    fontSize: 14,
    fontWeight: "600",
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "center",
    color: "#ffffff",
    alignSelf: 'stretch',
  },
  padding_10: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  Card_margin_border: {
    marginBottom: 15,
  },
  fs_18_center: {
    fontSize: 18,
    alignSelf: 'center',
    textAlign: 'center',
  },
  headline:{
    fontSize: 16,
    fontWeight: "600",
    fontStyle: "normal",
    letterSpacing: 0,
    color: "#000000",
    alignSelf: 'stretch',
  },
  link_color:{
    color: "#0000ff",
  },
  time:{
    color: "#000000",
    fontSize: 15,
  },
  search_block:{ 
    borderWidth: 1,
    height:50, 
    width:screenWidth-20,
    borderColor:'rgb(241, 241, 241)',
    borderRadius:5,
    backgroundColor:"#ffffff",
    borderStyle: "solid",
    justifyContent:'center',
    marginTop:10,
    fontFamily: "Avenir",
    fontSize: 15,
    fontStyle: "normal",
    letterSpacing: 0,
    color: "#0000ff",
    position:'relative',
    marginLeft:10,
    paddingLeft:10

   },
    search_text : {
    fontFamily: "Avenir",
    fontSize: 14,
    fontStyle: "normal",
    letterSpacing: 0,
    color: "#0000ff",
    justifyContent:'center',
},

};
