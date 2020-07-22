/*
 The real purpose of this "service" is to allow the view layer of the app to not know or care about
 the implementation details of how feature flags are handled.
 The API is simple: View => a user is eligible...I'll look to FeatureFlagsContext for the rest
*/

// Mid-Experience tests either have to have configuration that lives in the View  layer (yuck)
// or it lives in pre-defined featureFlags, which is what we're importing here
import featureFlags from './featureFlags'

export default class FeatureFlagService {
  static eligibleForFlag(testName, data) {
    const featureFlag = featureFlags[testName]

    if (featureFlag) {
      featureFlag(testName, data)
    }
  }
}
