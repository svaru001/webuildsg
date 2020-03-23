import Page from './page'

class DataPage extends Page() {

  // Headline Page Objects
  get pageHeader3() { return $('div.graph-section h3') }

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
  get resultDiv() { return $('#repos-per-programming-language') }

  //Methods
  open() {
    super.open('/repos-per-programming-language')
  }

}