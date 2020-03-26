import Page from './page'

class ReposPerProgLangPage extends Page {

  // Headline Page Objects
  get pageHeader3() { return $('//h3[contains(.,\'repositories per programming languages\')]') }

  // Content Page Objects
  get languageC() { return $('#language-c') }
  get languageCPlus() { return $('//label[@id=\'language-c++\']') }
  get languageClojure() { return $('#language-clojure') }
  get languageCoffeescript() { return $('#language-coffeescript') }
  get languageCss() { return $('#language-css') }
  get languageGo() { return $('#language-go') }
  get languageHaskell() { return $('#language-haskell') }
  get languageHtml() { return $('#language-html') }
  get languageJava() { return $('#language-java') }
  get languageJavascript() { return $('#language-javascript') }
  get languageJulia() { return $('#language-julia') }
  get languageObjectiveC() { return $('#language-objective-c') }
  get languagePhp() { return $('#language-php') }
  get languagePython() { return $('#language-python') }
  get languageR() { return $('#language-r') }
  get languageRuby() { return $('#language-ruby') }
  get languageRust() { return $('#language-rust') }
  get languageShell() { return $('#language-shell') }
  get languageSwift() { return $('#language-swift') }
  get languageTex() { return $('#language-tex') }
  get allProgLangSelector() { return $$('ul#select-language label') }


  // Repositories
  get repositories() { return $('#repos-per-programming-language') }
  get repoArray() {return $('//div[@id=\'repos-per-programming-language\']//a')}
  //Methods
  open() {
    super.open('/data/dataset/repos-per-programming-language')
    this.waitForPageLoad()
  }
  waitForPageLoad() {
    if (!this.pageHeader3.isDisplayed()) {
      this.pageHeader3.waitForDisplayed()
    }
  }

} export default new ReposPerProgLangPage()