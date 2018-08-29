import React from "react";
import { AppRegistry, Image, View, Alert, Linking, TouchableOpacity, Dimensions } from "react-native";
import {
  Text,
  Container,
  Card,
  CardItem,
  Body,
  Content,
  Header,
  Left,
  Right,
  Thumbnail,
  Title,
  Button,
  Grid,
  Col,
} from "native-base";

//======Import Stylesheet
import styles from "../css/style";
import { ProgressDialog } from 'react-native-simple-dialogs';
import Icon from 'react-native-vector-icons/EvilIcons'; 

const { width, height } = Dimensions.get('window');

class DailyNews extends React.Component{
constructor(){
    super()
    this.state ={
      newsList:[],
      showProgress: true,
      
    }
    
  }

componentWillMount(){

  navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null,
        });
        //alert(JSON.stringify(position));
        fetch('https://maps.googleapis.com/maps/api/geocode/json?address=' + position.coords.latitude + ',' + position.coords.longitude + '&key=' + 'AIzaSyCKwbZNUyUIx2X0XBBlWbhPu_unz5_1o3E')
          .then((response) => response.json())
          .then((responseJson) => {
              //alert('ADDRESS!! => ' + JSON.stringify(responseJson.results[0].formatted_address));
              this.setState({address: responseJson.results[0].formatted_address});
              this.newsApi();
        })
      },
      (error) => this.setState({ error: error.message }),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );

  this.newsApi();

  }



newsApi() {
  fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=b549d99591d345acba9b9f6c8a2a88d2')
  .then((response) => response.json())
  .then((json) => {
    //alert(JSON.stringify(json));
    this.setState({showProgress: false});
    if(json.status=='ok'){
        this.setState({newsList:json.articles});
    }else{
        alert("Something Wrong...");
    }
  })
  .catch(() => {
    reject('ERROR GETTING DATA FROM FACEBOOK')
  })
}




  renderList() {
    if(this.state.newsList.length){
      return this.state.newsList.map((lists) => {
        return(
              
          <Card style={styles.Card_margin_border}>
            <CardItem>
              <Body>
                <Text style={styles.headline}>{lists.title}</Text>
              </Body>                  
            </CardItem>

            <CardItem>
              <Body>
                <Image source={{uri: lists.urlToImage}} style={{height: 180, width: width-60}}/>
              </Body>
            </CardItem>

            <CardItem>
              <Body>
                <Text style={styles.fs_18}>{lists.description}</Text>
                <Text style={styles.link_color} onPress={() => Linking.openURL(lists.url)}>{lists.url}</Text>
                <Text style={styles.time}>{lists.publishedAt}</Text>
              </Body>                  
            </CardItem>
          </Card>

        )
      });
    }
  }

  render(){


    return (
        <Container style={styles.Container}>
          <Header style={{backgroundColor:"#0087E2"}} androidStatusBarColor="#000000">
            <Body>
              <Title style={styles.header_text}>{this.state.address}</Title>
            </Body> 
          </Header>

          <Content style={{paddingTop:5,}}>
            <View style={styles.padding_10}>    
              {this.renderList()}
            </View>
          </Content>

          <ProgressDialog
            visible={this.state.showProgress}
          //  title="Progress Dialog"
            message="Please, wait..."
            animationType="slide"
            activityIndicatorSize="large"
            activityIndicatorColor="blue"
          />
        </Container>
      );
  }
}
export default DailyNews;