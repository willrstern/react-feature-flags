import React from 'react'
import { FeatureFlagContextConsumer } from '../contexts/FeatureFlagContext'

export default function ExampleFeatureFlagUsage() {
  return (
    <FeatureFlagContextConsumer>
      {(featureFlags) => {
        const { cancelButtonTest, coloredButtonTest } = featureFlags
        const buttonStyle = {
          background: coloredButtonTest
            ? coloredButtonTest.buttonColor
            : '#777',
        }

        return (
          <>
            <p>
              This button is in a multi-armed bandit test. The default is gray,
              but if you see a different color, a third-party testing framework
              dropped a feature flag.
            </p>
            <button
              style={buttonStyle}
              className="p-2 mb-8 rounded-lg text-white"
            >
              My awesome CTA
            </button>
            <p>This button won't even appear unless a feature flag is set.</p>
            {cancelButtonTest && (
              <button className="bg-gray-600 p-2 mb-8 rounded-lg text-white">
                Cancel
              </button>
            )}
          </>
        )
      }}
    </FeatureFlagContextConsumer>
  )
}
