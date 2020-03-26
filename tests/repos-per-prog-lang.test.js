import ReposPerProgLangPage from '../pages/repos-per-prog-lang.page';
import assert from 'assert';
const expect = require('chai').expect
import allureReporter from '@wdio/allure-reporter'

describe('Programming Language Repositories:', function () {

  before(() => {
    ReposPerProgLangPage.open()
  })

  afterEach(() => {
    if (!(browser.getUrl() == 'https://webuildsg.github.io/data/dataset/repos-per-programming-language/'))
      ReposPerProgLangPage.open()

    if (browser.getUrl().includes('#'))
      ReposPerProgLangPage.open()
  })

  it('Should display Header', function () {
    assert.equal(ReposPerProgLangPage.header.isDisplayed(), true)
  })

  it('Should go to main page if clicked on main icon', function () {
    ReposPerProgLangPage.headerLinkMain.click()
    assert.equal($('//h1[contains(.,\'404\')]').isDisplayed(), true)
  })

  it('Should go to apps page if clicked on apps icon', function () {
    ReposPerProgLangPage.headerLinkApps.click()
    assert.equal($('//h1[contains(.,\'404\')]').isDisplayed(), true)
  })

  it('Should go to live webuild page if clicked on live music icon', function () {
    ReposPerProgLangPage.headerLinkLiveMusic.click()
    assert.equal(browser.getUrl(), 'https://live.webuild.sg/')
  })

  it('Should go to api webuild page if clicked on api icon', function () {
    ReposPerProgLangPage.headerLinkApi.click()
    assert.equal(browser.getUrl(), 'https://api.webuild.sg/')
  })

  it('Should display Subtitle ', function () {
    assert.equal(ReposPerProgLangPage.subTitleText.isDisplayed(), true)
  })

  it('Should compute number of listed language ', function () {
    assert.equal(ReposPerProgLangPage.allProgLangSelector.length, 20)
  })

  it('Should show repos when click on language C++', function () {
    ReposPerProgLangPage.languageCPlus.click()
    assert.equal(ReposPerProgLangPage.openSourceRepoPlaceholder.isDisplayed(), true)
  })

  it('Should show repos when click on language Clojure', function () {
    ReposPerProgLangPage.languageClojure.click()
    assert.equal(ReposPerProgLangPage.openSourceRepoPlaceholder.isDisplayed(), true)
  })

  it('Should show repos when click on language CoffeScript', function () {
    ReposPerProgLangPage.languageCoffeescript.click()
    assert.equal(ReposPerProgLangPage.openSourceRepoPlaceholder.isDisplayed(), true)
  })

  it('Should show repos when click on language CSS', function () {
    ReposPerProgLangPage.languageCss.click()
    assert.equal(ReposPerProgLangPage.openSourceRepoPlaceholder.isDisplayed(), true)
  })

  it('Should show repos when click on language Go', function () {
    ReposPerProgLangPage.languageGo.click()
    assert.equal(ReposPerProgLangPage.openSourceRepoPlaceholder.isDisplayed(), true)
  })

  it('Should show repos when click on language Haskell', function () {
    ReposPerProgLangPage.languageHaskell.click()
    assert.equal(ReposPerProgLangPage.openSourceRepoPlaceholder.isDisplayed(), true)
  })

  it('Should show repos when click on language HTML', function () {
    ReposPerProgLangPage.languageHtml.click()
    assert.equal(ReposPerProgLangPage.openSourceRepoPlaceholder.isDisplayed(), true)
  })

  it('Should show repos when click on language Java', function () {
    ReposPerProgLangPage.languageJava.click()
    assert.equal(ReposPerProgLangPage.openSourceRepoPlaceholder.isDisplayed(), true)
  })

  it('Should show repos when click on language JavaScript', function () {
    ReposPerProgLangPage.languageJavascript.click()
    assert.equal(ReposPerProgLangPage.openSourceRepoPlaceholder.isDisplayed(), true)
  })

  it('Should show repos when click on language Julia', function () {
    ReposPerProgLangPage.languageJulia.click()
    assert.equal(ReposPerProgLangPage.openSourceRepoPlaceholder.isDisplayed(), true)
  })

  it('Should show repos when click on language Objective C', function () {
    ReposPerProgLangPage.languageObjectiveC.click()
    assert.equal(ReposPerProgLangPage.openSourceRepoPlaceholder.isDisplayed(), true)
  })

  it('Should show repos when click on language PHP', function () {
    ReposPerProgLangPage.languagePhp.click()
    assert.equal(ReposPerProgLangPage.openSourceRepoPlaceholder.isDisplayed(), true)
  })

  it('Should show repos when click on language Python', function () {
    ReposPerProgLangPage.languagePython.click()
    assert.equal(ReposPerProgLangPage.openSourceRepoPlaceholder.isDisplayed(), true)
  })

  it('Should show repos when click on language R', function () {
    ReposPerProgLangPage.languageR.click()
    assert.equal(ReposPerProgLangPage.openSourceRepoPlaceholder.isDisplayed(), true)
  })

  it('Should show repos when click on language Ruby', function () {
    ReposPerProgLangPage.languageRuby.click()
    assert.equal(ReposPerProgLangPage.openSourceRepoPlaceholder.isDisplayed(), true)
  })

  it('Should show repos when click on language Rust', function () {
    ReposPerProgLangPage.languageRust.click()
    assert.equal(ReposPerProgLangPage.openSourceRepoPlaceholder.isDisplayed(), true)
  })

  it('Should show repos when click on language Shell', function () {
    ReposPerProgLangPage.languageShell.click()
    assert.equal(ReposPerProgLangPage.openSourceRepoPlaceholder.isDisplayed(), true)
  })

  it('Should show repos when click on language Swift', function () {
    ReposPerProgLangPage.languageSwift.click()
    assert.equal(ReposPerProgLangPage.openSourceRepoPlaceholder.isDisplayed(), true)
  })

  it('Should show repos when click on language Tex', function () {
    ReposPerProgLangPage.languageTex.click()
    assert.equal(ReposPerProgLangPage.openSourceRepoPlaceholder.isDisplayed(), true)
  })

  it('Should open repository page when click on repo link', function () {
    ReposPerProgLangPage.languageC.click()
    ReposPerProgLangPage.repoArray.click()
    assert.equal(browser.getUrl().includes('https://github.com/'), true)
  })

  it('Should show Data Source note ', function () {
    assert.equal(ReposPerProgLangPage.sourceNote.isDisplayed(), true)
  })

  it('Should show Open Event Bottom Box ', function () {
    assert.equal(ReposPerProgLangPage.openEventsPlaceholder.isDisplayed(), true)
  })

  it('Should show Open Source Repository Explaination ', function () {
    assert.equal(ReposPerProgLangPage.openSourceRepoPlaceholder.isDisplayed(), true)
  })

  it('Should open Github Event Data page when click on link \'Open Events Data\'', function () {
    ReposPerProgLangPage.openEventsDataLink.click()
    assert.equal(browser.getUrl().includes('/data/events'), true)
  })

  it('Should open Github Repo Source page when click on link \'Open Source Data\'', function () {
    ReposPerProgLangPage.openSourceDataLink.click()
    assert.equal(browser.getUrl().includes('/data/repos'), true)
  })

  it('Should redirect to twitter handler when click on \'suggestion\' link ', function () {
    browser.refresh()
    ReposPerProgLangPage.suggestionLink.click()
    assert.equal(browser.getUrl().includes('https://twitter.com/webuildsg'), true)
  })

  it('Should redirect to GitHub Repo when clicked on  \'report bugs send pull requests\' link ', function () {
    ReposPerProgLangPage.socialGithub.click()
    assert.equal(browser.getUrl().includes('https://github.com'), true)
  })

  it('Should redirect to Twitter page when clicked on  \'Twitter social\' icon ', function () {
    ReposPerProgLangPage.socialTwitter.click()
    assert.equal(browser.getUrl().includes('https://twitter.com'), true)
  })

  it('Should redirect to Facebook page when clicked on  \'facebook social\' icon ', function () {
    ReposPerProgLangPage.socialFacebook.click()
    assert.equal(browser.getUrl().includes('https://www.facebook.com/webuildsg'), true)
  })

  it('Should redirect to GitHub page when clicked on  \'GitHub social\' icon ', function () {
    ReposPerProgLangPage.socialGithub.click()
    assert.equal(browser.getUrl().includes('https://github.com/webuildsg'), true)
  })

  it('Should redirect to WeBuildSg RSS feed when clicked on  \'RSS social\' icon ', function () {
    ReposPerProgLangPage.socialRss.click()
    assert.equal(browser.getUrl().includes('https://feeds.feedburner.com/WeBuildLive'), true)
  })

  it('Should redirect to Apple Podcast when clicked on  \'iTunes\' icon ', function () {
    ReposPerProgLangPage.socialItunes.click()
    assert.equal(browser.getUrl().includes('https://podcasts.apple.com/us/podcast/we-build-sg-live/id713804010'), true)
  })

})