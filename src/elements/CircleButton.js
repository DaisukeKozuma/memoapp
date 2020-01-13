import React from 'react';
import { StyleSheet, View , Text} from 'react-native';
import * as Font from 'expo-font';
import fontAwsome from '../../assets/fonts/fa-solid-900.ttf';

class CircleButton extends React.Component {
  state = {
    fontLoaded: false,
  }
  async componentWillMount() {
    await Font.loadAsync({
      FontAwsome: fontAwsome,
    });
    this.setState({ fontLoaded: true });
  }

  render() {
    const { style, color }= this.props;

let bgColor='#E31676';
let textColor='#fff';

if(color === 'white') {
  bgColor = '#fff';
  textColor = '#E31767';
}

    return(
      <View style={[styles.circleButton, style, {backgroundColor: bgColor}]}>
          {
            this.state.fontLoaded ? (
            <Text style={[styles.circleButtonTitile, {color: textColor}]}>
              {this.props.children}
            </Text>
          ) : null
        }
      </View>
              );
            }
}

const styles = StyleSheet.create({

  circleButton: {
    position: 'absolute',
    bottom: 32,
    right: 32,
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2},
    shadowOpacity: 0.9,
    shadowRadius: 3,
  },

  circleButtontitile: {
    fontFamily: 'FontAwsome',
    fontSize: 32,
    lineHeight: 32,
  },

});

export default CircleButton;