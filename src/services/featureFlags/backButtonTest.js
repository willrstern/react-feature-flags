import GoogleOptimizeAdapter from '../featureFlagAdapters/GoogleOptimizeAdapter'

export default function backButtonTest() {
  GoogleOptimizeAdapter.emitEvent(
    'some.event.name.that.GoogleOptimize.cares.about'
  )
  // The idea here is that we talk to an adapter, which does the service-specific work
  // in this case, we're faking that Google Optimize just:
  // - got an event
  // - made a decision
  // - told Google Tag Manager to drop a JS flag on the page that FeatureFlagContext will pick up on
}
