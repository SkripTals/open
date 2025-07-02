let userLanguage;

const translations = {
    en: {
        info: "Information",
        contacts: "Contacts",
        afterWipe: "After-wipe blocks",
        rules: "Rules",
        plugins: "Plugins",
        attention: "⚠️ Attention! Before purchasing privileges, you must select the server you are playing on. Please note that the purchased privilege will be activated immediately on the server selected prior to purchase.",
        tos: "User Agreement",
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
        kits: "Киты"
    }
};

function getTranslation(key) {
    const translation = translations[userLanguage]?.[key];
    if (!translation) console.warn(`Missing translation for key: ${key}`);
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
    userLanguage = (cookieLang?.toUpperCase() === 'RU') ? 'ru' : 'en';
}

function updateUI() {
    addStoreWarnings();
    updateDropdownMenu();
    replaceTosLink();
    hideProductsOnCondition();
    translateRightButtons();
    translateWidgetBlocks();
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
        storeWarnings.style.margin = '10px 0';
        storeWarnings.style.padding = '10px';
        storeWarnings.style.background = '#fff6e5';
        storeWarnings.style.border = '1px solid #ffc107';
        storeWarnings.style.borderRadius = '5px';
        storeWarnings.style.color = '#000';
        storeWarnings.style.fontSize = '14px';
        storeServers.insertAdjacentElement('beforebegin', storeWarnings);
    }

    storeWarnings.textContent = getTranslation('attention');
    storeWarnings.style.display = 'block';
}

function updateDropdownMenu() {
    document.querySelectorAll('.nav-item.dropdown').forEach(item => {
        const link = item.querySelector('.nav-link');
        const dropdown = item.querySelector('.dropdown-menu');
        if (!link || !dropdown) return;

        // Проверка по содержимому текста
        const text = link.textContent.trim().toLowerCase();
        const isInfo = text.includes('info') || text.includes('инф');
        const isContacts = text.includes('contacts') || text.includes('контакт');

        if (isInfo) {
            link.textContent = getTranslation("info");

            // Удалить старые кастомные
            dropdown.querySelectorAll('button[data-custom="added"]').forEach(el => el.remove());

            dropdown.insertAdjacentHTML("afterbegin", `
                <button type="button" class="dropdown-item" data-custom="added" data-open="plugins">${getTranslation("plugins")}</button>
                <button type="button" class="dropdown-item" data-custom="added" data-open="rules">${getTranslation("rules")}</button>
                <button type="button" class="dropdown-item" data-custom="added" data-open="block3">${getTranslation("afterWipe")}</button>
            `);
        }

        if (isContacts) {
            link.textContent = getTranslation("contacts");
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

function translateWidgetBlocks() {
    const widgetItems = document.querySelectorAll('.xbox_rules .rules');

    widgetItems.forEach(item => {
        const a = item.querySelector('a');
        if (!a) return;

        const content = a.textContent.trim().toUpperCase();
        if (content === 'ПРАВИЛА' || content === 'RULES') {
            a.textContent = getTranslation('rules');
        } else if (content === 'ВАЙПБЛОК' || content === 'AFTER-WIPE BLOCKS') {
            a.textContent = getTranslation('afterWipe');
        } else if (content === 'КИТЫ' || content === 'KITS') {
            a.textContent = getTranslation('kits');
        }
    });
}

function interceptLinks() {
    document.querySelectorAll('[data-open]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const blockId = link.getAttribute('data-open');
            if (blockId) Open(blockId);
        });
    });
}
