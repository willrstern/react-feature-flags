export default class GoogleOptimizeFeatureFlagAdapter {
  static emitEvent() {
    /*
    - pretend we've emitted some event that told Google Optimize we're eligible for something
    - pretend to enter user into "baseline" or "button"
    */
    const variation = !!Math.round(Math.random(1)) ? 'baseline' : 'button'
    /*
    - now Google Tag Manager will fire this JS tag on the page
    ...let's make it wait 1000ms for effect
    */
    setTimeout(() => {
      ;(() => {
        const featureFlag = {
          name: 'backButtonTest',
          data: {
            variation,
            decisionID: Date.now(),
          },
        }

        // push the event onto the queue in case the featureFlagsContext hasn't started up yet
        if (
          window.__YOUR_GLOBAL_NAMESPACE__ &&
          window.__YOUR_GLOBAL_NAMESPACE__.featureFlagsQueue
        ) {
          window.__YOUR_GLOBAL_NAMESPACE__.featureFlagsQueue[featureFlag.name] =
            featureFlag.data
        }

        // emit an event in case the featureFlagsContext has already started
        const buttonTest = new Event('globalNamespace.addFeatureFlag')
        buttonTest.featureFlag = featureFlag
        window.dispatchEvent(buttonTest)
      })()
    }, 1000)
  }
}
