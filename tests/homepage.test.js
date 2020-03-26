import HomePage from '../pages/homepage.page';
import assert from 'assert';
const links = require('../data/homepage/links')

describe('HomePage:', function () {
    before(() => {
        HomePage.open()
    })

    afterEach(() => {
        if (!(browser.getUrl() == 'https://webuildsg.github.io/data/'))
            HomePage.open()
    })

    it('Should display Header', function () {
        assert.equal(HomePage.header.isDisplayed(), true)
    })

    it('Should display Subtitle', function () {
        assert.equal(HomePage.subTitleText.isDisplayed(), true)
    })

    it('Should display search input', function () {
        assert.equal(HomePage.searchText.isDisplayed(), true)
    })

    it('Should display graphs', function () {
        assert.equal(HomePage.allGraphs.length, 11)
    })

    it('Should display all analytic boxes ', function () {
        assert.equal(HomePage.allBoxes.length, 12)
    })

    it('Should display all footer links', function () {
        assert.equal(HomePage.footerContainer.isDisplayed(), true)
    })

    it('Should display all footer social icons', function () {
        assert.equal(HomePage.allSocialFooters.length, 6)
    })

    it('Should show all social footer icons ', function () {
        assert.equal(HomePage.allSocialFooters.length, 6)
    })

    it('Should search for keyword:repos', function () {
        HomePage.searchText.setValue('repos')
        assert.equal(HomePage.reposPerWeek.isDisplayed(), true)
        HomePage.searchText.clearValue()
    })

    it('Should search for keyword:active', function () {
        HomePage.searchText.setValue('active')
        assert.equal(HomePage.activeRepositories.isDisplayed(), true, 'Active Repositories Not Displayed')
        assert.equal(HomePage.activeUserGroups.isDisplayed(), true, 'Active User Groups Not Displayed')
        HomePage.searchText.clearValue()
        browser.refresh()

    })

    links.forEach(link => {
        it('Should redirect to link when clicked on graph-\'' + link.text + '\'', function () {
            switch (link.selector) {
                case 'HomePage.reposPerWeek':
                    HomePage.reposPerWeek.click()
                    assert.equal(browser.getUrl().includes(link.link), true)
                    break;
                case 'HomePage.eventsPerWeek':
                    HomePage.eventsPerWeek.click()
                    assert.equal(browser.getUrl().includes(link.link), true)
                    break;
                case 'HomePage.activitiesPerProgrammingLanguages':
                    HomePage.activitiesPerProgrammingLanguages.click()
                    assert.equal(browser.getUrl().includes(link.link), true)
                    break;
                case 'HomePage.activeUserGroups':
                    HomePage.activeUserGroups.click()
                    assert.equal(browser.getUrl().includes(link.link), true)
                    break;
                case 'HomePage.activeRepositories':
                    HomePage.activeRepositories.click()
                    assert.equal(browser.getUrl().includes(link.link), true)
                    break;
                case 'HomePage.repositoriesPerProgrammingLanguage':
                    HomePage.repositoriesPerProgrammingLanguage.click()
                    assert.equal(browser.getUrl().includes(link.link), true)
                    break;
                case 'HomePage.eventDayOfWeek':
                    HomePage.eventDayOfWeek.click()
                    assert.equal(browser.getUrl().includes(link.link), true)
                    break;
                case 'HomePage.eventPerWeekOfMonth':
                    HomePage.eventPerWeekOfMonth.click()
                    assert.equal(browser.getUrl().includes(link.link), true)
                    break;
                case 'HomePage.eventDuration':
                    HomePage.eventDuration.click()
                    assert.equal(browser.getUrl().includes(link.link), true)
                    break;
                case 'HomePage.eventTimeOfDay':
                    HomePage.eventTimeOfDay.click()
                    assert.equal(browser.getUrl().includes(link.link), true)
                    break;
                case 'HomePage.eventLocations':
                    HomePage.eventLocations.click()
                    assert.equal(browser.getUrl().includes(link.link), true)
                    break;

                default:
                // code block
            }

        })

    })

    it('Should redirect to twitter handler when click on \'suggestion\' link ', function () {
        browser.refresh()
        HomePage.suggestionLink.click()
        assert.equal(browser.getUrl().includes('https://twitter.com/webuildsg'), true)
    })

    it('Should redirect to GitHub Repo when clicked on  \'report bugs send pull requests\' link ', function () {
        HomePage.socialGithub.click()
        assert.equal(browser.getUrl().includes('https://github.com'), true)
    })

    it('Should redirect to Twitter page when clicked on  \'Twitter social\' icon ', function () {
        HomePage.socialTwitter.click()
        assert.equal(browser.getUrl().includes('https://twitter.com'), true)
    })

    it('Should redirect to Facebook page when clicked on  \'facebook social\' icon ', function () {
        HomePage.socialFacebook.click()
        assert.equal(browser.getUrl().includes('https://www.facebook.com/webuildsg'), true)
    })

    it('Should redirect to GitHub page when clicked on  \'GitHub social\' icon ', function () {
        HomePage.socialGithub.click()
        assert.equal(browser.getUrl().includes('https://github.com/webuildsg'), true)
    })

    it('Should redirect to WeBuildSg RSS feel when clicked on  \'RSS social\' icon ', function () {
        HomePage.socialRss.click()
        assert.equal(browser.getUrl().includes('https://feeds.feedburner.com/WeBuildLive'), true)
    })

    it('Should redirect to Apple Podcast when clicked on  \'iTunes\' icon ', function () {
        HomePage.socialItunes.click()
        assert.equal(browser.getUrl().includes('https://podcasts.apple.com/us/podcast/we-build-sg-live/id713804010'), true)
    })

})