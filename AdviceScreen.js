import * as React from 'react';
import { Text, View, Button,TouchableOpacity,StyleSheet} from 'react-native';
import { NavigationEvents } from 'react-navigation';
import AppHeader from './components/AppHeader';

export default class AdviceScreen extends React.Component {
 state = {
    a: 'value'
  }



   constructor(){
super();
this.state={
english:'',
math: '',
hindi:'',
social:'',
science:'',



}}
sum = () => {
  var engmarks = parseInt(this.state.english);
  var mathmarks = parseInt(this.state.math);
  var socialmarks = parseInt(this.state.social);
  var sciencemarks = parseInt(this.state.science);
  var hindimarks = parseInt(this.state.hindi);
  var total =
    (engmarks + mathmarks + socialmarks + sciencemarks + hindimarks) *3;
  alert('You Should Study For' + ' ' + total + ' ' + 'min' + ' a day'+' '+'per subject');
  ToastAndroid.show('You Should Study For' + ' ' + total + ' ' + 'min' + ' a day'+' '+'per subject', ToastAndroid.SHORT);
};
englishm = (text) => {
  this.setState({ english: text });
};
mathm = (text) => {
  this.setState({ math: text });
};
socialm = (text) => {
  this.setState({ social: text });
};
hindim = (text) => {
  this.setState({ hindi: text });
};
sciencem = (text) => {
  this.setState({ science: text });
};

 
   goToHome = () => {
    this.props.navigation.navigate('HomeScreen');
  };

  render() {
    return (
      <View>
      <AppHeader/>
  

   
        <Text>The Time You Should Study</Text>
        <Text>{this.sum}</Text>

        <Text 
        style={styles.buttonText2}>{this.state.a}</Text>
      
   <TouchableOpacity 
            style={styles.button} 
            onPress={this.goToHome}>
            <Text style={styles.buttonText2}>Go  Back</Text>
          </TouchableOpacity>
     
      </View>





 


    )
  }
}
const styles = StyleSheet.create({
    button:{
    justifyContent : 'center',
    alignSelf : 'center',
    borderWidth : 2,
    borderRadius : 15,
    marginTop:150,
    width : 200,
    height:50,
    backgroundColor:'blue'
  },
 
   buttonText2 : {
    
    textAlign : 'center',
    color : 'gold',
    fontSize:35,
  }
})