import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { styleText, styleTitle } from './styles/page_title';

class PageTitle extends React.Component {

  constructor(props){
    super(props);
  }

  render() {
    return (
      <View style={styleTitle}>
        <Text style={styleText}>{this.props.title}</Text>
      </View>
    );
  }
}

export default PageTitle;
