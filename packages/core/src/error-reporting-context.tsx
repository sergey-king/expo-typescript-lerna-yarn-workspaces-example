import React, { createContext } from 'react'

export type ErrorReportingContextProps = {
  setErrorReportingUserId: (userId: string, username: string, email: string) => void
  recordError: (error: Error, extra?: Record<string, unknown>) => void
}

export const ErrorReportingContext = createContext<ErrorReportingContextProps>({
  setErrorReportingUserId: () => undefined,
  recordError: () => undefined,
})

export const ErrorReportingProvider: React.FC = ({ children }) => {
  const setErrorReportingUserId = (userId: string, username: string, email: string) => {
    try {
      console.log('Not Implemented')
      //Sentry.setUser({ id: userId, username, email })
    } catch (error) {
      recordError(error)
    }
  }

  const recordError = (error: Error, extra?: Record<string, unknown>) => {
    try {
      if (__DEV__) {
        console.log('recordError: '+  error)
      } else {
        console.log(error, { extra })
      }
    } catch (error) {
      console.log('ErrorReportingProvider: Error while recording the error')
    }
  }

  return (
    <ErrorReportingContext.Provider
      value={{
        setErrorReportingUserId,
        recordError,
      }}
    >
      {children}
    </ErrorReportingContext.Provider>
  )
}
