import React from 'react';
import { StyleSheet, View } from 'react-native';
import { WebView, WebViewProps } from 'react-native-webview';

const MyWebComponent: React.FC = () => {
  return(
    <>
      <WebView source={{ uri: 'https://bengalbusinesscouncil.com/login.php' }} style={styles.webView} />
    </>
  ) 
}

const styles = StyleSheet.create({
  webView: {
    flex: 1
  }
});

export default MyWebComponent;
