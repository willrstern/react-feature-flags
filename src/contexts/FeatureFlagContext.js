import React, { useState, useEffect } from 'react'

const FeatureFlagContext = React.createContext()

export const FeatureFlagContextProvider = ({ children }) => {
  const [featureFlags, setFeatureFlags] = useState({})

  useEffect(() => {
    // in case of racing conditions with third party scripts,
    // bootstrap any flags that were dropped on the page before the first app render
    // window.__YOUR_GLOBAL_NAMESPACE__ is defined in /public/index.html and should always exist, but best be safe
    if (
      window.__YOUR_GLOBAL_NAMESPACE__.featureFlagsQueue &&
      Object.keys(window.__YOUR_GLOBAL_NAMESPACE__.featureFlagsQueue).length
    ) {
      setFeatureFlags(window.__YOUR_GLOBAL_NAMESPACE__.featureFlagsQueue)
    }

    // any testing tools will use existing window events API to publish events
    // this allows them communicate with our app from the outside with tiny feature flags and JS assets
    window.addEventListener(
      'globalNamespace.addFeatureFlag',
      ({ featureFlag }) => {
        const { name, data } = featureFlag

        setFeatureFlags((oldFeatureFlags) => ({
          ...oldFeatureFlags,
          [name]: data,
        }))
      }
    )
  }, [])

  return (
    <FeatureFlagContext.Provider value={featureFlags}>
      {children}
    </FeatureFlagContext.Provider>
  )
}

export const { Consumer: FeatureFlagContextConsumer } = FeatureFlagContext
