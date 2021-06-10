import React from 'react'
import { useContext } from 'react'
import { Button } from 'react-native'
import { ErrorReportingContext } from '../../../core/contexts'

export default function Example() {
  const { recordError } = useContext(ErrorReportingContext)
  return <Button title="TEST" onPress={() => recordError(new Error('MY WEB APP ERROR'))} />
}

