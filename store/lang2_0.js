let userLanguage = 'ru';

const translations = {
    en: {
        info: "Information",
        contacts: "Contacts",
        afterWipe: "After-wipe blocks",
        rules: "Rules",
        attention: "⚠️ Attention! Select your server before purchasing privileges.",
        tos: "User Agreement",
        selectServer: "Select a server:"
    },
    ru: {
        info: "Информация",
        contacts: "Контакты",
        afterWipe: "Вайпблок",
        rules: "Правила",
        attention: "⚠️ Обратите внимание! Перед покупкой привилегий необходимо выбрать сервер.",
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
    if (cookieLang) {
        userLanguage = cookieLang === 'RU' ? 'en' : 'ru';
    } else {
        userLanguage = 'ru';
    }
}

function updateUI() {
    replaceChooseServerText();
    addButtonToDropdown();
    replaceTosLink();
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

        const isInfo = link.textContent.trim().toLowerCase().includes("информация");
        const isContacts = link.textContent.trim().toLowerCase().includes("контакты");

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
