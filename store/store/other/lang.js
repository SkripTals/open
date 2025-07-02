let userLanguage = 'ru';

const translations = {
    en: {
        info: "Information",
        contacts: "Contacts",
        afterWipe: "After-wipe blocks",
        rules: "Rules",
        plugins: "Plugins",
        attention: "⚠️ Attention! Before purchasing privileges, you must select the server you are playing on. Please note that the purchased privilege will be activated immediately on the server selected prior to purchase.",
        tos: "User Agreement",
        selectServer: "Select a server:",
        kits: "Kits"
    },
    ru: {
        info: "Информация",
        contacts: "Контакты",
        afterWipe: "Вайпблок",
        rules: "Правила",
        plugins: "Плагины",
        attention: "⚠️ Обратите внимание! Перед покупкой привилегий необходимо выбрать сервер, на котором вы играете. Помните, что купленная привилегия будет активирована на выбранном сервере сразу после покупки.",
        tos: "Пользовательское соглашение",
        selectServer: "Выберите сервер:",
        kits: "Киты"
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
        userLanguage = cookieLang.toUpperCase() === 'RU' ? 'ru' : 'en';
    } else {
        userLanguage = 'ru';
    }
}

function updateUI() {
    addStoreWarnings();
    replaceChooseServerText();
    addButtonToDropdown();
    replaceTosLink();
    hideProductsOnCondition();
    translateRightButtons();
    interceptLinks();
}

document.addEventListener('DOMContentLoaded', () => {
    detectLanguage();
    updateUI();

    const observer = new MutationObserver(() => {
        clearTimeout(debounceTimeout);
        debounceTimeout = setTimeout(updateUI, 100);
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
});

let debounceTimeout;

function addStoreWarnings() {
    const storeServers = document.querySelector('.store-servers');
    if (!storeServers) return;

    let storeWarnings = document.querySelector('.store-warnings');
    if (!storeWarnings) {
        storeWarnings = document.createElement('div');
        storeWarnings.className = 'store-warnings';
        storeServers.insertAdjacentElement('beforebegin', storeWarnings);
    }

    storeWarnings.textContent = getTranslation('attention');
    storeWarnings.style.display = 'block';
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

        const text = link.textContent.trim();
        if (text === "Информация" || text === "Information") {
            link.textContent = getTranslation('info');
            const dropdown = item.querySelector('.dropdown-menu');
            if (dropdown && !dropdown.querySelector('button[data-custom="added"]')) {
                dropdown.insertAdjacentHTML('afterbegin', `
                    <button type="button" class="dropdown-item" data-custom="added" data-open="plugins">${getTranslation('plugins')}</button>
                    <button type="button" class="dropdown-item" data-custom="added" data-open="rules">${getTranslation('rules')}</button>
                    <button type="button" class="dropdown-item" data-custom="added" data-open="block3">${getTranslation('afterWipe')}</button>
                `);
            }
        } else if (text === "Контакты" || text === "Contacts") {
            link.textContent = getTranslation('contacts');
        }
    });
}

function replaceTosLink() {
    const linkElement = document.querySelector('a.footer-link__item[href="/tos"]');
    if (linkElement) {
        linkElement.removeAttribute('href');
        linkElement.setAttribute('data-open', 'tos');
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

function translateRightButtons() {
    const items = document.querySelectorAll('.pd-block__item');
    items.forEach(item => {
        const text = item.textContent.trim().toUpperCase();
        if (text === 'ПРАВИЛА' || text === 'RULES') item.textContent = getTranslation('rules');
        else if (text === 'ВАЙПБЛОК' || text === 'AFTER-WIPE BLOCKS') item.textContent = getTranslation('afterWipe');
        else if (text === 'КИТЫ' || text === 'KITS') item.textContent = getTranslation('kits');
    });
}

function interceptLinks() {
    document.querySelectorAll('[data-open]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const blockId = link.getAttribute('data-open');
            if (blockId) {
                Open(blockId);
            }
        });
    });
}
