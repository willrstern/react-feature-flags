import React from 'react'
import { FeatureFlagContextConsumer } from '../contexts/FeatureFlagContext'

export default function AvailableFeatureFlags() {
  return (
    <FeatureFlagContextConsumer>
      {(featureFlags) => (
        <>
          <h2 className="font-bold">Available Feature Flags:</h2>
          <textarea
            className="p-4 mb-8 h-64 w-2/3 bg-gray-200 rounded-lg"
            value={JSON.stringify(featureFlags, null, 2)}
            readOnly
          ></textarea>
        </>
      )}
    </FeatureFlagContextConsumer>
  )
}
