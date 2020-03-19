import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';
import { Linking, WebView } from 'react-native-webview';

export default class Homologation extends Component {
  render() {
    return (
      <WebView
        source={{uri: 'https://www.arcotel.gob.ec/homologacion2/'}}
        style={{marginTop: 20}}
      />
    );
  }
}