import EventsPerLocationPage from '../pages/events-per-location.page';
import assert from 'assert';
const expect = require('chai').expect
import allureReporter from '@wdio/allure-reporter'

describe('Event Locations:', function () {

  before(() => {
    EventsPerLocationPage.open()
    // Switch to Map Frame
    browser.switchToFrame(EventsPerLocationPage.iFrame)

  })
  
  afterEach(() => {
    if (!(browser.getUrl() == 'https://webuildsg.github.io/data/dataset/events-per-location/'))
      EventsPerLocationPage.open()
  })


  it('Should load entire map', function () {
    while (EventsPerLocationPage.mapTiles.length < 8) {
      browser.pause(500)
    }
    assert.equal(EventsPerLocationPage.mapTiles.length, 8)
  })

  it('Should Zoom In Map', function () {
    EventsPerLocationPage.mapZoomInButton.click()
    //assert.equal(EventsPerLocationPage.zoomAnimation.isDisplayed(),true)    -- Unfinished
  })

  it('Should Zoom Out Map', function () {
    EventsPerLocationPage.mapZoomOutButton.click()
    //assert.equal(EventsPerLocationPage.zoomAnimation.isDisplayed(),true)   -- Unfinished
  })

  it('Should click on Blue Location Pin', function () {
    EventsPerLocationPage.mapLocationPins[0].click()
    browser.pause(500)
    assert.equal(EventsPerLocationPage.locationAddressLabel.isDisplayed(), true)
  })

  it('Should show Location Address when click on Blue Pin', function () {
    console.log('Address Found:' + $('//table[@class=\'marker-properties\']//td').getText())
    assert.equal(EventsPerLocationPage.locationAddressLabel.isDisplayed(), true)
    browser.keys('\uE00C')
  })

  // Switch to Parent Frame

  // Test Footer links
  it('Should Switch to Parent Frame', function () {
    browser.switchToParentFrame()
  })

  it('Should open Github Event Data page when click on link \'Open Events Data\'', function () {
    EventsPerLocationPage.openEventsDataLink.click()
    assert.equal(browser.getUrl().includes('/data/events'), true)
  })

  it('Should open Github Repo Source page when click on link \'Open Source Data\'', function () {
    EventsPerLocationPage.openSourceDataLink.click()
    assert.equal(browser.getUrl().includes('data/repos/v1'), true)
  })

  it('Should redirect to twitter handler when click on \'suggestion\' link ', function () {
    EventsPerLocationPage.suggestionLink.click()
    assert.equal(browser.getUrl().includes('https://twitter.com/webuildsg'), true)
  })

  it('Should redirect to GitHub Repo when clicked on  \'report bugs send pull requests\' link ', function () {
    EventsPerLocationPage.socialGithub.click()
    assert.equal(browser.getUrl().includes('https://github.com'), true)
  })

  it('Should redirect to Twitter page when clicked on  \'Twitter social\' icon ', function () {
    EventsPerLocationPage.socialTwitter.click()
    assert.equal(browser.getUrl().includes('https://twitter.com'), true)
  })

  it('Should redirect to Facebook page when clicked on  \'facebook social\' icon ', function () {
    EventsPerLocationPage.socialFacebook.click()
    assert.equal(browser.getUrl().includes('https://www.facebook.com/webuildsg'), true)
  })

  it('Should redirect to GitHub page when clicked on  \'GitHub social\' icon ', function () {
    EventsPerLocationPage.socialGithub.click()
    assert.equal(browser.getUrl().includes('https://github.com/webuildsg'), true)
  })

  it('Should redirect to WeBuildSg RSS feel when clicked on  \'RSS social\' icon ', function () {
    EventsPerLocationPage.socialRss.click()
    assert.equal(browser.getUrl().includes('https://feeds.feedburner.com/WeBuildLive'), true)
  })

  it('Should redirect to Apple Podcast when clicked on  \'iTunes\' icon ', function () {
    EventsPerLocationPage.socialItunes.click()

    assert.equal(browser.getUrl().includes('https://podcasts.apple.com/us/podcast/we-build-sg-live/id713804010'), true)
  })
})