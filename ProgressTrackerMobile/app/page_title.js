import React, { Component } from 'react';
import { View, Text, StatusBar } from 'react-native';
import { styleText, styleTitle, styleStatus } from './styles/page_title';

class PageTitle extends React.Component {

  constructor(props){
    super(props);
  }

  render() {
    return (
      <View style={styleTitle}>
        <View style={styleStatus}>
          <StatusBar barStyle='light-content'/>
        </View>
        <Text style={styleText}>{this.props.title}</Text>
      </View>
    );
  }
}

export default PageTitle;
