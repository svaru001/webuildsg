import Page from './page'
class DataPage extends Page() {

  // Main Page Objects
  get pageHeader3() { return $('div.graph-section h3') }

  // Main Content Page Objects
  get allBars() { return $$('.bar') }
  get barLabels() { return $$('.bar .graph-label a') }
  get barValues() { return $$('.bar .graph-bar') }

  //Methods
  open() {
    super.open('/events-per-group')
  }

}