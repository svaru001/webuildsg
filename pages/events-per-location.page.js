import Page from './page'

class EventsPerLocationPage extends Page {


  // Main Page Objects
  get pageHeader3() { return $('//h3[contains(.,\'popular event locations\')]') }

  // Main Content Page Objects

  get mapEventDetailsPopup() { return $('.leaflet-popup-content-wrapper') }
  get mapLocationPins() { return $$('img.leaflet-marker-icon') }
  get mapZoomInButton() { return $('a.leaflet-control-zoom-in') }
  get mapZoomOutButton() { return $('a.leaflet-control-zoom-in') }
  get mapTiles() { return $$('.leaflet-tile-loaded') }
  get mapBoxLink() { return $('//a[contains(text(),\'© Mapbox\')]') }
  get openStreetMapLink() { return $('//a[contains(text(),\'© OpenStreetMap\')]') }
  get mapBoxImproveLink() { return $('.mapbox-improve-map') }
  get renderMessage() { return $('.render-message') }
  get zoomAnimation() { return $('.leaflet-zoon-anime') }
  //Methods
  open() {
    super.open('/events-per-location')
  }

  waitForPageLoad() {
    if (!this.pageHeader3.isDisplayed()) {
      this.pageHeader3.waitForDisplayed()
    }

  }
  checkIfZoomAnimationDisplayed() {
    if (!this.zoomAnimation.isDisplayed()) {
      this.zoomAnimation.waitForDisplayed(3000)
    }
  }


} export default new EventsPerLocationPage()