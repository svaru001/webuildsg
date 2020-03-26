import Page from './page'
class EventsPerGroupPage extends Page {

  // Main Page Objects
  get pageHeader3() { return $('//h3[contains(.,\'active user groups with > 5 events\')]') }

  // Main Content Page Objects
  get allBars() { return $$('.bar') }
  get barLabels() { return $$('.bar .graph-label a') }
  get barLabelContainer() { return $('.graph-label') }

  get barValues() { return $$('.bar .graph-bar') }


  //Methods
  open() {
    super.open('/data/dataset/events-per-group')
    this.waitForPageLoad()
  }

  waitForPageLoad() {
    if (!this.pageHeader3.isDisplayed()) {
      this.pageHeader3.waitForDisplayed()
    }
  }

  getdynamicGroupSelector(innerText) {
    let xpath = '//a[contains(.,\'' + innerText + '\')]'
    return $(xpath)
  }

} export default new EventsPerGroupPage()
