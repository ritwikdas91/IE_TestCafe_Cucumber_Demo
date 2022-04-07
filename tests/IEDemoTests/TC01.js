import { Selector } from 'testcafe';

fixture`IEDemoTests`
    .page`https://start.duckduckgo.com/`;

test('AC1', async t => {
    console.log("Demo Qa")
    const duckLogo = Selector("#logo_homepage_link")
    await t
    .expect(duckLogo.visible).ok()
    .wait(2000)
});

test('AC2', async t => {
    console.log("Demo Qa2")
    const searchBox = Selector('#search_form_homepage')
    const lst_cnt = Selector('#search_form_homepage > div.search__autocomplete > div.acp-wrap.js-acp-wrap > div').count
    const magnifyButton = Selector('#search_button_homepage')
    console.log(lst_cnt)
    await t
    .typeText(searchBox, "Super")
    .wait(2000)
    .expect(lst_cnt).eql(10)
    .wait(2000)
});

test('AC3', async t => {
    console.log("Demo Qa3")
    const searchBox = Selector('#search_form_homepage')
    const firstSuggestion = Selector('#search_form_homepage > div.search__autocomplete > div.acp-wrap.js-acp-wrap > div:nth-child(1)').innerText
    await t
    .typeText(searchBox, "supercalafragalisticexpialadoshus")
    .wait(2000)
    .expect(firstSuggestion).eql("supercalafragalisticexpialadoshus")
    .wait(2000)
});

test('AC4', async t => {
    console.log("Demo Qa4")
    const hamburgerMenu = Selector('#pg-index > div > div.header-wrap--home.js-header-wrap > div > a')
    const themesLink = Selector('#pg-index > div > div.nav-menu--slideout.is-open > ul > ul.nav-menu--theme > li.nav-menu__item.clear')
    await t
    .click(hamburgerMenu)
    .wait(2000)
    .expect(themesLink.visible).ok()
    .takeElementScreenshot(themesLink)
    .wait(2000)
});

test('AC5', async t => {
    console.log("Demo Qa5")
    const hamburgerMenu = Selector('#pg-index > div > div.header-wrap--home.js-header-wrap > div > a')
    const themesLink = Selector('#pg-index > div > div.nav-menu--slideout.is-open > ul > ul.nav-menu--theme > li.nav-menu__item.clear')
    const darkModeButton = Selector('#content_internal > div.settings-page-wrapper > div.set-main > div.set-detail.js-set-detail > form > div > div > div:nth-child(4)')
    const notification = Selector('#pg-settings > div.notification > div > div')
    await t
    .click(hamburgerMenu)
    .wait(2000)
    .click(themesLink)
    .wait(2000)
    .click(darkModeButton)
    .expect(notification.visible).ok()
    .expect(notification.innerText).eql("Settings updated")
    .takeScreenshot()
    
});