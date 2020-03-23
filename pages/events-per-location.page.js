import Page from './page'

class DataPage extends Page() {

 
  // Main Page Objects
  get pageHeader3() { return $('div.graph-section h3') }

      // Main Content Page Objects

  get mapEventDetailsPopup() {return $('.leaflet-popup-content-wrapper')}
  get mapLocationPins() {return $$('img.leaflet-marker-icon')}
  get mapZoomInButton() {return $('a.leaflet-control-zoom-in')}
  get mapZoomOutButton() {return $('a.leaflet-control-zoom-in')}
  get mapTiles() {return $$('.leaflet-tile-loaded')}

  //Methods
  open() {
    super.open('/events-per-location')
  }

}