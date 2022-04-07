import { Selector } from 'testcafe';

fixture`IEDemoTests`
    .page`https://start.duckduckgo.com/traffic`;

test('AC7', async t => {
    console.log("Demo Qa7")
    const trafficYearTab = Selector("#content_wrapper > div:nth-child(2) > div")
    const cnt = Selector("#content_wrapper > div:nth-child(2) > div").count
    for(var i = 0; i<await cnt; i++){

        await t.click(trafficYearTab.nth(i))
        const textInner=await (await trafficYearTab.nth(i).innerText).toString()
        if(textInner.includes("2018")){

            var totalQueries = parseInt(await (await trafficYearTab.nth(i).child('div').child('div').child('div.traffic__year__right').child('h2').innerText).replace(/,/g, ''))
            console.log(totalQueries)
            const mnthCol=await trafficYearTab.nth(i).child('div').child('div').count
            var mnthqueriesTotal=0;
            for(var j=1; j< await mnthCol; j++){

                var monthlyTotal = await trafficYearTab.nth(i).child('div').child('div').nth(j).child('div').child('div.traffic__month__right').child('h2').innerText
                mnthqueriesTotal=mnthqueriesTotal+parseInt(await monthlyTotal.replace(/,/g, ''))
                
            }
            console.log(await mnthqueriesTotal)
            await t.expect(mnthqueriesTotal).eql(totalQueries)

            break;

        } 

    }

});