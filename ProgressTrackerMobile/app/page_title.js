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
        <View>
          <Text style={styleText}>{this.props.title}</Text>
        </View>
      </View>
    );
  }
}

export default PageTitle;
