/*
Telegram: @perindu27
*/
const axios = require('axios');
const qs = require('qs');

async function checkRef(refValue) {
    const url = 'https://lordcoins.xyz/checkref.php';
    
    const headers = {
        'Host': 'lordcoins.xyz',
        'Cookie': 'flash=0; countNFT=0; getNFTRiward=0; timeUper=2024/5/3; mainRef=7503305; flash_time=06/03/2024; speed=1000; mywallet=0x668c1C620A715Ab85D4Bba89450DA280915B95E8; full=1; full_time=06/03/2024; limit=3500; coefficient=8; jhekub=1; lastclaimCoins=2016; secontimer=16617; lastClaim=2024/5/3 16:6:17; myminted=4040150; mintedAll=1389583779984; allplayers=19057; userclaim=4,040,494; userpack=574; cfz_google-analytics_v4=%7B%22NXOW_engagementDuration%22%3A%7B%22v%22%3A%220%22%2C%22e%22%3A1748941614139%7D%2C%22NXOW_engagementStart%22%3A%7B%22v%22%3A%221717405614139%22%2C%22e%22%3A1748941614139%7D%2C%22NXOW_counter%22%3A%7B%22v%22%3A%2273%22%2C%22e%22%3A1748941614139%7D%2C%22NXOW_session_counter%22%3A%7B%22v%22%3A%222%22%2C%22e%22%3A1748941614139%7D%2C%22NXOW_ga4%22%3A%7B%22v%22%3A%22d1a51cec-6906-4fba-bbb6-5ffa9b3f9033%22%2C%22e%22%3A1748941614139%7D%2C%22NXOW__z_ga_audiences%22%3A%7B%22v%22%3A%22d1a51cec-6906-4fba-bbb6-5ffa9b3f9033%22%2C%22e%22%3A1748937242826%7D%2C%22NXOW_let%22%3A%7B%22v%22%3A%221717405614139%22%2C%22e%22%3A1748941614139%7D%2C%22NXOW_ga4sid%22%3A%7B%22v%22%3A%224933279%22%2C%22e%22%3A1717407414139%7D%7D',
        'sec-ch-ua': '"Microsoft Edge";v="125", "Chromium";v="125", "Not.A/Brand";v="24", "Microsoft Edge WebView2";v="125"',
        'accept': '*/*',
        'x-requested-with': 'XMLHttpRequest',
        'sec-ch-ua-mobile': '?0',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36 Edg/125.0.0.0',
        'sec-ch-ua-platform': '"Windows"',
        'origin': 'https://lordcoins.xyz',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-mode': 'cors',
        'sec-fetch-dest': 'empty',
        'referer': 'https://lordcoins.xyz/base.html?tgWebAppStartParam=4165836',
        'accept-language': 'en-US,en;q=0.9',
        'priority': 'u=1, i',
        'pragma': 'no-cache',
        'cache-control': 'no-cache',
        'content-type': 'application/x-www-form-urlencoded'
    };

    const data = qs.stringify({
        'ref': refValue,
        'type': 2
    });

    try {
        const response = await axios.post(url, data, { headers });
		if(response.data == 1){
        console.log('Success Reff');
		}else{
		console.log('Failed Reff');
    } 
	}catch (error) {
        console.error('Error:', error.message);
    }
}

function startLoop(refValue) {
    async function loop() {
        while (true) {
            await checkRef(refValue);
        }
    }
    loop();
}

// Ini Ref lu cok
startLoop('5789218');