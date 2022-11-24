import { StatusBar } from "expo-status-bar"
import { useRef, useEffect } from "react"
import { StyleSheet, View, BackHandler, SafeAreaView } from "react-native"

import WebView from "react-native-webview"

const HomeScreen = ({ navigation }) => {
  const URL_WEBVIEW = 'https://www.phuckhanggem.com/'

  const webViewRef = useRef()
  useEffect(() => {
    const backAction = () => {
      webViewRef?.current?.goBack()
      return true
    }

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    )

    return () => backHandler.remove()
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      {/* <StatusBar style={"auto"} /> */}
      <WebView
        ref={webViewRef}
        style={styles.container}
        source={{ uri: URL_WEBVIEW }}
      />
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: { flex: 1 }
})
