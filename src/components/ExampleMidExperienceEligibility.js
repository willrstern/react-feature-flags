import React from 'react'
import { FeatureFlagContextConsumer } from '../contexts/FeatureFlagContext'
import featureFlagService from '../services/featureFlagService'

export default function ExampleMidExperienceEligibility() {
  return (
    <FeatureFlagContextConsumer>
      {(featureFlags) => {
        return (
          <>
            <p>
              If a user clicks this button, they're now "eligible" for a flag.
              And a third party testing framework will decide whether or not to
              add a flag to the app. (It will take 1000ms...watch the text area
              above for the test to get added to context when it does)
            </p>
            <button
              className="p-2 mb-8 bg-gray-600 rounded-lg text-white"
              onClick={() => {
                featureFlagService.eligibleForFlag('backButtonTest')
              }}
            >
              Click to become eligible for "Go Back" button flag
            </button>
            <p>
              {featureFlags.backButtonTest &&
                featureFlags.backButtonTest.variation === 'button' && (
                  <button className="p-2 mb-8 bg-gray-600 rounded-lg text-white">
                    Go Back
                  </button>
                )}
              {featureFlags.backButtonTest &&
                featureFlags.backButtonTest.variation === 'baseline' && (
                  <span>
                    You were eligible for the test, but you got the baseline,
                    but hey, we put this on the page anyway so you would know it
                    worked.
                  </span>
                )}
            </p>
          </>
        )
      }}
    </FeatureFlagContextConsumer>
  )
}
