import Page from './page';

class HomePage extends Page {

  // Search Input 
  get searchText() { return $('input.search') }

  // Main Content 
  get allGraphs() {return $$('p.graph-name')}
  get reposPerWeek() { return $('//li[@data-index=\'repositories repos open source week weeks\']') }
  get eventsPerWeek() { return $('//li[@data-index=\'events meetup week weeks\']') }
  get activitiesPerProgrammingLanguages() { return $('//li[@data-index=\'repos repositories open source programming language\']') }
  get activeUserGroups() { return $('//li[@data-index=\'events meetups active user group\']') }
  get activeRepositories() { return $('//li[@data-index=\'repos repositories open source active\']') }
  get repositoriesPerProgrammingLanguage() { return $('//li[@data-index=\'repos repositories programming language\']') }
  get eventDayOfWeek() { return $('//li[@data-index=\'meetup day week events\']') }
  get eventPerWeekOfMonth() { return $('//li[@data-index=\'meetup day week month events\']') }
  get eventDuration() { return $('//li[@data-index=\'meetup event duration\']') }
  get eventTimeOfDay() { return $('//li[@data-index=\'time meetup event hour day\']') }
  get eventLocations() { return $('//li[@data-index=\'meetup event location venu\']') }

  // Page Objects for Boxes
  get allBoxes() {return $$('.boxes li')}
  //Generic for All Years Incase its Dynamic
  get openSourceReposUpdatedInYear() { return $('//p[contains(text(),\'open source repos updated in \')]') }
  get openSourceReposUpdatedInYear() { return $('//p[contains(text(),\'updates made to repos in \')]') }
  get openSourceReposUpdatedInYear() { return $('//p[contains(text(),\'open events held in \')]') }
  get openSourceReposUpdatedInYear() { return $('//p[contains(text(),\'user groups held events in 2017 \')]') }

  // Year 2017
  get openSourceReposUpdatedIn2017() { return $('//p[contains(text(),\'open source repos updated in \')]//strong[contains(text(),\'2017\')]') }
  get reposUpdatedIn2017() { return $('//p[contains(text(),\'updates made to repos in \')]//strong[contains(text(),\'2017\')]') }
  get openEventsIn2017() { return $('//p[contains(text(),\'open events held in \')]//strong[contains(text(),\'2017\')]') }
  get groupEventsIn2017() { return $('//p[contains(text(),\'user groups held events in 2017 \')]//strong[contains(text(),\'2017\')]') }

  // Year 2016
  get openSourceReposUpdatedIn2016() { return $('//p[contains(text(),\'open source repos updated in \')]//strong[contains(text(),\'2016\')]') }
  get reposUpdatedIn2016() { return $('//p[contains(text(),\'updates made to repos in \')]//strong[contains(text(),\'2016\')]') }
  get openEventsIn2016() { return $('//p[contains(text(),\'open events held in \')]//strong[contains(text(),\'2016\')]') }
  get groupEventsIn2016() { return $('//p[contains(text(),\'user groups held events in 2017 \')]//strong[contains(text(),\'2016\')]') }

  // Year 2015
  get openSourceReposUpdatedIn2015() { return $('//p[contains(text(),\'open source repos updated in \')]//strong[contains(text(),\'2015\')]') }
  get reposUpdatedIn2015() { return $('//p[contains(text(),\'updates made to repos in \')]//strong[contains(text(),\'2015\')]') }
  get openEventsIn2015() { return $('//p[contains(text(),\'open events held in \')]//strong[contains(text(),\'2015\')]') }
  get groupEventsIn2015() { return $('//p[contains(text(),\'user groups held events in 2017 \')]//strong[contains(text(),\'2015\')]') }


  get allGraphText() {
    const graphData = [
      'repos per week',
      'events per week',
      'activities per programming languages',
      'active user groups',
      'active repositories',
      'repositories per programming language',
      'event day of week',
      'event per week of month',
      'event duration',
      'event time of day',
      'event locations'
    ]
    return graphData
  }

  //Methods
  open() {
    super.open('https://webuildsg.github.io/data/')
    this.waitForPageLoad()
  }
  waitForPageLoad() {
    if (!this.searchText.isDisplayed()) {
      this.searchText.waitForDisplayed()
    }
  }

} export default new HomePage()