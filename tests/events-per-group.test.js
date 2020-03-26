import EventsPerGroupPage from '../pages/events-per-group.page';
import assert from 'assert';
const linkdata = require('../data/event-per-groups/data')
const expect = require('chai').expect
const fetch = require('node-fetch')
import allureReporter from '@wdio/allure-reporter'

describe('Test Events Per Group Page', function () {

    before(() => {
        EventsPerGroupPage.open()
    })

    afterEach(() => {
        if (!(browser.getUrl() == 'https://webuildsg.github.io/data/dataset/events-per-group/'))
            EventsPerGroupPage.open()
    })
//Header Test Cases
    it('Should display Header', function () {
        assert.equal(EventsPerGroupPage.header.isDisplayed(), true)
    })

    it('Should go to main page if clicked on main icon', function () {
        EventsPerGroupPage.headerLinkMain.click()
        assert.equal($('//h1[contains(.,\'404\')]').isDisplayed(), true)
    })

    it('Should go to apps page if clicked on apps icon', function () {
        EventsPerGroupPage.headerLinkApps.click()
        assert.equal($('//h1[contains(.,\'404\')]').isDisplayed(), true)
    })

    it('Should go to live webuild page if clicked on live music icon', function () {
        EventsPerGroupPage.headerLinkLiveMusic.click()
        assert.equal(browser.getUrl(), 'https://live.webuild.sg/')
    })

    it('Should go to api webuild page if clicked on api icon', function () {
        EventsPerGroupPage.headerLinkApi.click()
        assert.equal(browser.getUrl(), 'https://api.webuild.sg/')
    })

    it('Should display Subtitle ', function () {
        assert.equal(EventsPerGroupPage.subTitleText.isDisplayed(), true)
    })

//Page Content Test Cases

it('Check if all groups listed have atleast 1 event scheduled', function () {
        let check = true
        EventsPerGroupPage.barValues.forEach(value => {
            if (isNaN(value.getText()))
                check = false
        })
        assert.equal(check, true)
    })

    it('should open event links in new tab and come back to origin', function () {
        let selector = EventsPerGroupPage.getdynamicGroupSelector('.NET Developers Singapore')
        selector.click()
        let handles = browser.getWindowHandles()
        console.log('XXXX' + handles)
        if (handles.length > 1) {
            browser.switchToWindow(handles[1]);
            browser.closeWindow();
            browser.switchToWindow(handles[0]);
        }
        assert.equal(browser.getUrl(), 'https://webuildsg.github.io/data/dataset/events-per-group/')
    })

    linkdata.forEach(data => {
        it('Check if \'' + data.text + '\' has correct link', function () {
            let selector = EventsPerGroupPage.getdynamicGroupSelector(data.text)
            console.log('sss' + selector.getAttribute('href').toLowerCase())
            console.log('ttt' + data.link.toLowerCase())
            assert.equal(selector.getAttribute('href').toLowerCase(), data.link.toLowerCase())
        })

    })

    it('Should look for broken Third party Event links', async function () {
        //let selector = EventsPerGroupPage.getdynamicGroupSelector(data.text)
        const urls = linkdata.map(data => data.link.toLowerCase())
        const requests = urls.map(url => fetch(url))
        const responses = await Promise.all(requests)
        const statusCodes = responses.map(response => response.status)
        statusCodes.forEach(statusCode => {
            expect(statusCode).to.be.below(400)
        })
        console.log('sss' + selector.getAttribute('href').toLowerCase())
        console.log('ttt' + data.link.toLowerCase())
        assert.equal(selector.getAttribute('href').toLowerCase(), data.link.toLowerCase(),'Found Broken Link')
    })

    // Footer Test Cases
    it('Should show Data Source note ', function () {
        assert.equal(EventsPerGroupPage.sourceNote.isDisplayed(), true)
    })
    
    it('Should show Open Event Bottom Box ', function () {
        assert.equal(EventsPerGroupPage.openEventsPlaceholder.isDisplayed(), true)
    })
    
    it('Should show Open Source Repository Explaination ', function () {
        assert.equal(EventsPerGroupPage.openSourceRepoPlaceholder.isDisplayed(), true)
    })
    
    it('Should open Github Event Data page when click on link \'Open Events Data\'', function () {
        EventsPerGroupPage.openEventsDataLink.click()
        assert.equal(browser.getUrl().includes('/data/events'), true)
    })
    
    it('Should open Github Repo Source page when click on link \'Open Source Data\'', function () {
        EventsPerGroupPage.openSourceDataLink.click()
        assert.equal(browser.getUrl().includes('/data/repos'), true)
    })
    
    it('Should redirect to twitter handler when click on \'suggestion\' link ', function () {
        browser.refresh()
        EventsPerGroupPage.suggestionLink.click()
        assert.equal(browser.getUrl().includes('https://twitter.com/webuildsg'), true)
    })

    it('Should redirect to GitHub Repo when clicked on  \'report bugs send pull requests\' link ', function () {
        EventsPerGroupPage.socialGithub.click()
        assert.equal(browser.getUrl().includes('https://github.com'), true)
    })
    
    it('Should redirect to Twitter page when clicked on  \'Twitter social\' icon ', function () {
        EventsPerGroupPage.socialTwitter.click()
        assert.equal(browser.getUrl().includes('https://twitter.com'), true)
    })
    
    it('Should redirect to Facebook page when clicked on  \'facebook social\' icon ', function () {
        EventsPerGroupPage.socialFacebook.click()
        assert.equal(browser.getUrl().includes('https://www.facebook.com/webuildsg'), true)
    })
    
    it('Should redirect to GitHub page when clicked on  \'GitHub social\' icon ', function () {
        EventsPerGroupPage.socialGithub.click()
        assert.equal(browser.getUrl().includes('https://github.com/webuildsg'), true)
    })
    
    it('Should redirect to WeBuildSg RSS feel when clicked on  \'RSS social\' icon ', function () {
        EventsPerGroupPage.socialRss.click()
        assert.equal(browser.getUrl().includes('https://feeds.feedburner.com/WeBuildLive'), true)
    })
    
    it('Should redirect to Apple Podcast when clicked on  \'iTunes\' icon ', function () {
        EventsPerGroupPage.socialItunes.click()
        assert.equal(browser.getUrl().includes('https://podcasts.apple.com/us/podcast/we-build-sg-live/id713804010'), true)
    })
})