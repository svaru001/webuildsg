import EventsPerGroupPage from '../pages/events-per-group.page';
import assert from 'assert';
const linkdata = require('../data/event-per-groups/data')
const expect = require('chai').expect
const fetch = require('node-fetch')

describe('Test Events Per Group Page', function () {
    before(() => {
        EventsPerGroupPage.open()
    })


    it('Should display Header: "we build!" ', function () {
        assert.equal(EventsPerGroupPage.header.isDisplayed(), true)
    })

    it('Should go to main page if clicked on :main icon', function () {
        EventsPerGroupPage.headerLinkMain.click()
        assert.equal($('//h1[contains(.,\'404\')]').isDisplayed(), true)
        EventsPerGroupPage.open()
    })
    it('Should go to apps page if clicked on :apps icon', function () {
        EventsPerGroupPage.headerLinkApps.click()
        assert.equal($('//h1[contains(.,\'404\')]').isDisplayed(), true)
        EventsPerGroupPage.open()
    })
    it('Should go to live webuild page if clicked on :live music icon', function () {
        EventsPerGroupPage.headerLinkLiveMusic.click()
        assert.equal(browser.getUrl(), 'https://live.webuild.sg/')
        EventsPerGroupPage.open()
    })
    it('Should go to api webuild page if clicked on :api icon', function () {
        EventsPerGroupPage.headerLinkApi.click()
        assert.equal(browser.getUrl(), 'https://api.webuild.sg/')
        EventsPerGroupPage.open()
    })




    it('Should display :Subtitle ', function () {
        assert.equal(EventsPerGroupPage.subTitleText.isDisplayed(), true)
    })

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
        it('Check if \'' + data.text + '\' has link : \'' + data.link + '\'', function () {
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
        assert.equal(selector.getAttribute('href').toLowerCase(), data.link.toLowerCase())
    })




})