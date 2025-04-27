// other.js - логика магазина
function paymentFormHandle() {
    let attempts = 0;
    const maxAttempts = 20;
    const interval = setInterval(() => {
        const steamID = getCookie('steamid');
        const paymentLink = document.getElementById('qiwi-inp-other2');
        if (steamID && paymentLink) {
            const storeID = 15212;
            const token = '17a7a480497d756f0259';
            paymentLink.href = `https://pay.moscow.ovh/?userID=${steamID}&storeID=${storeID}&token=${token}&language=ru`;
            clearInterval(interval);
        }
        attempts++;
        if (attempts >= maxAttempts) {
            clearInterval(interval);
        }
    }, 100);
}

function getCookie(name) {
    const matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([.$?*|{}()\[\]\/\+^])/g, '\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

function OpenTradeSkins() {
    window.open('https://steamcommunity.com/tradeoffer/new/?partner=1876222817&token=1A1PMWAN', '_blank');
    closePaymentModal();
}
