import Page from './page'
class EventsPerGroup extends Page {

  // Main Page Objects
  get pageHeader3() { return $('//h3[contains(.,\'active user groups with > 5 events\')]') }

  // Main Content Page Objects
  get allBars() { return $$('.bar') }
  get barLabels() { return $$('.bar .graph-label a') }
  get barValues() { return $$('.bar .graph-bar') }


  //Methods
  open() {
    super.open('/events-per-group')
  }

  waitForPageLoad() {
    if (!this.pageHeader3.isDisplayed()) {
      this.pageHeader3.waitForDisplayed()
    }
  }

} export default new EventsPerGroup()
