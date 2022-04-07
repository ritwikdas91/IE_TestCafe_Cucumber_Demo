const assert = require('assert');
const {Given, When, Then} = require('cucumber');

const Selector = require('testcafe').Selector;


Given('I am on the homepage', async function() {
    
    await testController
    .navigateTo('https://start.duckduckgo.com/');

});

Given('I am on the traffic page', async function() {
    
    await testController
    .navigateTo('https://start.duckduckgo.com/traffic');

});

When('I look at the page', async function () {
    
    console.log("Demo Qa")

});

Then('I expect to see the duckduckgo logo on the page', async function () {
    
    const duckLogo = Selector("#logo_homepage_link").with({boundTestRun: testController})
    await testController
    .expect(duckLogo.visible).ok()
    .wait(2000);

});

When('I type {string} into the search box', async function(searchText){

    console.log("Demo Qa2")
    const searchBox = Selector('#search_form_homepage').with({boundTestRun: testController})
    
    const magnifyButton = Selector('#search_button_homepage').with({boundTestRun: testController})
    
    await testController
    .typeText(searchBox, searchText)
    .wait(2000)

});

Then('I expect to see exactly {int} suggestions in the typeahead dropdown', async function(number){

    const lst_cnt = Selector('#search_form_homepage > div.search__autocomplete > div.acp-wrap.js-acp-wrap > div').with({boundTestRun: testController}).count
    console.log(lst_cnt)

    await testController
    .expect(lst_cnt).eql(number)
    .wait(2000)

});

Then('I expect the first result to be {string}', async function(expected){

    const firstSuggestion = Selector('#search_form_homepage > div.search__autocomplete > div.acp-wrap.js-acp-wrap > div:nth-child(1)').with({boundTestRun: testController}).innerText
    await testController
    .expect(firstSuggestion).eql(expected)
    .wait(2000)

});

When('I click on the hamburger menu in the top right', async function(){

    console.log("Demo Qa4")
    const hamburgerMenu = Selector('#pg-index > div > div.header-wrap--home.js-header-wrap > div > a').with({boundTestRun: testController})
    await testController
    .click(hamburgerMenu)
    .wait(2000)

});
        
Then('I expect to see a themes link', async function(){

    const themesLink = Selector('#pg-index > div > div.nav-menu--slideout.is-open > ul > ul.nav-menu--theme > li.nav-menu__item.clear').with({boundTestRun: testController})
    await testController
    .expect(themesLink.visible).ok()
    .takeElementScreenshot(themesLink)
    .wait(2000)


});

When('I click on the themes link then click on the dark mode theme button', async function(){


    console.log("Demo Qa5")
    const hamburgerMenu = Selector('#pg-index > div > div.header-wrap--home.js-header-wrap > div > a').with({boundTestRun: testController})
    const themesLink = Selector('#pg-index > div > div.nav-menu--slideout.is-open > ul > ul.nav-menu--theme > li.nav-menu__item.clear').with({boundTestRun: testController})
    const darkModeButton = Selector('#content_internal > div.settings-page-wrapper > div.set-main > div.set-detail.js-set-detail > form > div > div > div:nth-child(4)').with({boundTestRun: testController})
    
    await testController
    .click(hamburgerMenu)
    .wait(2000)
    .click(themesLink)
    .wait(2000)
    .click(darkModeButton)

});

Then('My page background should change colour', async function(){

    const notification = Selector('#pg-settings > div.notification > div > div').with({boundTestRun: testController})
    await testController
    .expect(notification.visible).ok()
    .expect(notification.innerText).eql("Settings updated")
    .takeScreenshot()

});

When('I go to the homepage and type {}', async function(moviename){
    
    console.log("Demo Qa6")
    const searchBox = Selector('#search_form_homepage').with({boundTestRun: testController})

    await testController
    .typeText(searchBox, moviename)
    .wait(2000)
    

});

Then('click the magnifying glass', async function(){

    const magnifyButton = Selector('#search_button_homepage').with({boundTestRun: testController})

    await testController
    .click(magnifyButton)
    .wait(2000)

});

Then('I should get {int} results on the results page', async function(countExp){

    const resultsList = Selector('#links > div').withAttribute('data-testid','result').with({boundTestRun: testController}).count
    
    console.log(resultsList)
    // #links > div:nth-child(1)

    await testController
    .expect(resultsList).eql(countExp)
    .wait(2000)



});

When('I click on the {string} Traffic section', async function(year){

    
    console.log("Demo Qa7")
    const trafficYearTab = Selector("#content_wrapper > div:nth-child(2) > div").with({boundTestRun: testController})
    const cnt = Selector("#content_wrapper > div:nth-child(2) > div").with({boundTestRun: testController}).count
    for(var i = 0; i<await cnt; i++){

        await testController.click(trafficYearTab.nth(i).with({boundTestRun: testController}))
        const textInner=await (await trafficYearTab.nth(i).with({boundTestRun: testController}).innerText).toString()
        if(textInner.includes(year)){

            var totalQueries = parseInt(await (await trafficYearTab.nth(i).child('div').child('div').child('div.traffic__year__right').child('h2').with({boundTestRun: testController}).innerText).replace(/,/g, ''))
            console.log(totalQueries)
            const mnthCol=await trafficYearTab.nth(i).child('div').child('div').with({boundTestRun: testController}).count
            var mnthqueriesTotal=0;
            for(var j=1; j< await mnthCol; j++){

                var monthlyTotal = await trafficYearTab.nth(i).child('div').child('div').nth(j).child('div').child('div.traffic__month__right').child('h2').with({boundTestRun: testController}).innerText
                mnthqueriesTotal=mnthqueriesTotal+parseInt(await monthlyTotal.replace(/,/g, ''))
                
            }
            console.log(await mnthqueriesTotal)
            await testController.expect(mnthqueriesTotal).eql(totalQueries)

            break;

        } 

    }


});

Then('the Total Direct Queries should be equal to the sum of all the total directs from each month', async function(){

    console.log("The Values are Equal")


});

