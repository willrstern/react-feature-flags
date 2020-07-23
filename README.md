# React abstracted-feature-flags

## Core Ideas

- The View layer should not be aware of any feature flag provider(s)
- The app should be able to support multiple feature flag and A/B testing services e.g. LaunchDarkly, Google Optimize, etc.
- The View should only care about:
  - Are feature flags set on the app?
  - Has the user performed an action mid-experience that makes them eligible for new tests/feature flags?

## Implementation

- App is wrapped with a `<FeatureFlagContextProvider/>` that provides flags to the component tree
  - Components leverage the `<FeatureFlagContextConsumer/>` for easy access to feature flags
- Nested components can fire eligibility actions on a `featureFlagService`, while the UI remains agnostic to the implementation details
- Adapters for each third party feature flag provider are created to handle the specific details for that service e.g. Google Optimize
- The `FeatureFlagContext` listens for `globalNamespace.addFeatureFlag` events as a way for third party providers to communicate with the app when they drop JS flags on the page
  - This allows providers to drop minimal copy/paste JS onto a page...just use the existing JS events API
