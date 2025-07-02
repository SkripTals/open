let userLanguage = 'ru';

const translations = {
    en: {
        info: "Information",
        contacts: "Contacts",
        afterWipe: "After-wipe blocks",
        rules: "Rules",
        attention: "⚠️ Attention! Before purchasing privileges, you must select the server you are playing on. Please note that the purchased privilege will be activated immediately on the server selected prior to purchase.",
        tos: "User Agreement",
        selectServer: "Select a server:"
    },
    ru: {
        info: "Информация",
        contacts: "Контакты",
        afterWipe: "Вайпблок",
        rules: "Правила",
        attention: "⚠️ Обратите внимание! Перед покупкой привилегий необходимо выбрать сервер, на котором вы играете. Помните, что купленная привилегия будет активирована на выбранном сервере сразу после покупки.",
        tos: "Пользовательское соглашение",
        selectServer: "Выберите сервер:"
    }
};

function getTranslation(key) {
    const translation = translations[userLanguage]?.[key];
    if (!translation) {
        console.warn(`Missing translation for key: ${key} in language: ${userLanguage}`);
    }
    return translation || key;
}

function getCookie(name) {
    const matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([.$?*|{}()\[\]\\/+^])/g, "\\$1") + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

function detectLanguage() {
    const cookieLang = getCookie('_lang');
    console.log('Cookie _lang:', cookieLang);
    if (cookieLang) {
        userLanguage = cookieLang === 'RU' ? 'en' : 'ru';
        console.log('Language set from cookie:', userLanguage);
    } else {
        userLanguage = 'ru';
        console.log('Cookie _lang not found, defaulting to:', userLanguage);
    }
}

function updateUI() {
    addStoreWarnings();
    replaceChooseServerText();
    addButtonToDropdown();
    replaceTosLink();
    hideProductsOnCondition();
}

let debounceTimeout;
const observer = new MutationObserver(() => {
    clearTimeout(debounceTimeout);
    debounceTimeout = setTimeout(() => {
        updateUI();
    }, 100);
});

document.addEventListener('DOMContentLoaded', () => {
    detectLanguage();
    updateUI();

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
});

function addStoreWarnings() {
    const storeServers = document.querySelector('.store-servers');
    if (!storeServers) return;

    const firstButton = storeServers.querySelector('.nav .nav-link:first-child');
    const activeButton = storeServers.querySelector('.nav .nav-link.active');

    let storeWarnings = document.querySelector('.store-warnings');

    if (!storeWarnings) {
        storeWarnings = document.createElement('div');
        storeWarnings.className = 'store-warnings';
        storeServers.insertAdjacentElement('afterend', storeWarnings);
    }

    storeWarnings.textContent = getTranslation('attention');
    storeWarnings.style.display = firstButton?.classList.contains('active') ? 'block' : 'none';

    /*const pdBlock = document.querySelector('.pd-block');
    if (pdBlock) {
        pdBlock.style.display = activeButton?.textContent.trim() === 'Black' ? 'flex' : 'none';
    }*/
}

function replaceChooseServerText() {
    const serverButton = document.querySelector('.store-servers .nav .nav-link');
    if (serverButton) {
        serverButton.textContent = getTranslation('selectServer');
    }
}

function addButtonToDropdown() {
    document.querySelectorAll('.nav-item.dropdown').forEach(item => {
        const link = item.querySelector('.nav-link');
        if (!link) return;

        const isInfo = link.textContent.trim() === "Информация";
        const isContacts = link.textContent.trim() === "Контакты";

        if (isInfo) {
            link.textContent = getTranslation('info');
            const infoDropdown = item.querySelector('.dropdown-menu');
            if (infoDropdown && !infoDropdown.querySelector('button[data-custom="added"]')) {
                infoDropdown.insertAdjacentHTML('afterbegin', `
                    <button type="button" class="dropdown-item" data-custom="added" onclick="Open('block3')">
                        ${getTranslation('afterWipe')}
                    </button>
                    <button type="button" class="dropdown-item" data-custom="added" onclick="Open('rules')">
                        ${getTranslation('rules')}
                    </button>
                `);
            }
        } else if (isContacts) {
            link.textContent = getTranslation('contacts');
        }
    });
}

function replaceTosLink() {
    const linkElement = document.querySelector('a.footer-link__item[href="/tos"]');
    if (linkElement) {
        linkElement.removeAttribute('href');
        linkElement.setAttribute('onclick', "Open('tos')");
        linkElement.textContent = getTranslation('tos');
    }
}

function hideProductsOnCondition() {
    const activeButton = document.querySelector('.store-servers .nav .nav-link.active');
    if (activeButton && activeButton.textContent.trim() === 'Black') {
        document.querySelectorAll('.store-products__item').forEach(item => {
            const productLink = item.querySelector('.product')?.getAttribute('href');
            if (productLink !== '/products/1176265') {
                item.style.display = 'none';
            }
        });
    } else {
        document.querySelectorAll('.store-products__item').forEach(item => {
            item.style.display = '';
        });
    }
}
