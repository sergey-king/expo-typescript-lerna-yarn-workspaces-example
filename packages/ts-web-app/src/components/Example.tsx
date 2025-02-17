import React from 'react'
import { useContext } from 'react'
import { ErrorReportingContext } from "core/contexts"

export default function Example() {
  const { recordError } = useContext(ErrorReportingContext)
  return <button title="TEST" onSubmit={() => recordError(new Error('MY WEB APP ERROR'))} />
}
