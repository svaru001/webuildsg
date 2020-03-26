import Page from './page'

class EventsPerLocationPage extends Page {


  // Main Page Objects
  get pageHeader3() { return $('//h3[contains(.,\'popular event locations\')]') }

  // Main Content Page Objects

  get mapEventDetailsPopup() { return $('.leaflet-popup-content-wrapper') }
  get mapLocationPins() { return $$('img.leaflet-marker-icon') }
  get mapZoomInButton() { return $('a.leaflet-control-zoom-in') }
  get mapZoomOutButton() { return $('a.leaflet-control-zoom-out') }
  get mapTiles() { return $$('.leaflet-tile-loaded') }
  get mapBoxLink() { return $('//a[contains(text(),\'© Mapbox\')]') }
  get openStreetMapLink() { return $('//a[contains(text(),\'© OpenStreetMap\')]') }
  get mapBoxImproveLink() { return $('.mapbox-improve-map') }
  get renderMessage() { return $('.render-message') }
  get zoomAnimation() { return $('.leaflet-zoon-anime') }
  get iFrame(){return $('//iframe[@title=\'events-per-location.geojson\']')}
  get locationAddressLabel() { return $('//th[contains(.,\'address\')]')}
  //Methods
  open() {
    super.open('/data/dataset/events-per-location')
    this.waitForPageLoad()
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