import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ErrorReportingProvider } from '../core/contexts'
import Example from './src/components/Example'

export default function App() {
  return (
    <ErrorReportingProvider>
      <View style={styles.container}>
        <Text>Open up App.tsx to start working on your app! HERE</Text>
        <Example />
      </View>
    </ErrorReportingProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
