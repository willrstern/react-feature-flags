import React from 'react'
import DisplayAvailableFeatureFlags from './components/DisplayAvailableFeatureFlags'
import ExampleFeatureFlagUsage from './components/ExampleFeatureFlagUsage'
import ExampleMidExperienceEligibility from './components/ExampleMidExperienceEligibility'
import { FeatureFlagContextProvider } from './contexts/FeatureFlagContext'
import './tailwind.output.css'

function App() {
  return (
    <FeatureFlagContextProvider>
      <div className="m-8 text-center">
        <h1 className="text-xl font-bold mb-4">Feature Flag Example</h1>
        {/* an example of fetching flags */}
        <DisplayAvailableFeatureFlags />
        {/* an example of using flags */}
        <ExampleFeatureFlagUsage />
        {/* an example of trigging mid-experience eligibility based on user action */}
        <ExampleMidExperienceEligibility />
      </div>
    </FeatureFlagContextProvider>
  )
}

export default App
