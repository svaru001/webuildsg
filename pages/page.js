export default class Page {

  // HeadLine Page Objects
  get header() { return $('//h1[contains(text(),\'we build!\')]') }
  get headerLinkMain() { return $('//header//a[contains(.,\'main\')]') }
  get headerLinkApps() { return $('//header//a[contains(.,\'apps\')]') }
  get headerLinkLiveMusic() { return $('//header//a[contains(.,\'live\')]') }
  get headerLinkCalData() { return $('//header//a[contains(.,\'data\')]') }
  get headerLinkNotes() { return $('//header//a[contains(.,\'notes\')]') }
  get headerLinkApi() { return $('//header//a[contains(.,\'api\')]') }

  // SubTitle Page Objects
  get subTitleText() { return $('p.subtitle') }

  // Footers Info Boxes Objects
  get sourceNote() { return $('//p[contains(.,\'All graphs are generated based on \')]') }
  get openEventsDataLink() { return $('//a[contains(.,\'open events data\')]') }
  get openSourceDataLink() { return $('//a[contains(.,\'open source data\')]') }
  get openEventsPlaceholder() { return $('//p[contains(.,\'an open event is:\')]/parent::*') }
  get openSourceRepoPlaceholder() { return $('//p[contains(.,\'an open source repository has:\')]/parent::*') }

  // Footers links Page Objects
  get footerContainer() { return $('footer .container') }
  get suggestionLink() { return $('//footer//a[contains(text(),\'suggestions\')]') }
  get reportBugsLink() { return $('//footer//a[contains(text(),\'report bugs / send pull requests\')]') }
  // Footers Social icons
  get socialTwitter() { return $('$(\'//p[contains(.,\'Twitter\')]/preceding-sibling::*\')') }
  get socialFacebook() { return $('$(\'//p[contains(.,\'Facebook\')]/preceding-sibling::*\')') }
  get socialGithub() { return $('$(\'//p[contains(.,\'GitHub\')]/preceding-sibling::*\')') }
  get socialCalendar() { return $('$(\'//p[contains(.,\'Calendar\')]/preceding-sibling::*\')') }
  get socialRss() { return $('$(\'//p[contains(.,\'RSS\')]/preceding-sibling::*\')') }
  get socialItunes() { return $('$(\'//p[contains(.,\'iTunes\')]/preceding-sibling::*\')') }


  open(path) {
    browser.url(path)
  }
}