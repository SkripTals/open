var curcontent = new Array();

curcontent["rules"] = {
    xhead: 'Правила',
    xcon: '<div class="xbox_custom_rules"><ul><p class="MsoNormal"><span>Информация</span></p>\
<p><span class="rules_rule"><i>[1.1]</i></span> - Не знание правил не освобождает Вас от ответственности.</p>\
<p><span class="rules_rule"><i>[1.2]</i></span> - Зайдя на сервер Вы автоматически соглашаетесь со всеми нижеперечисленными пунктами правил.</p>\
<p><span class="rules_rule"><i>[1.3]</i></span> - <b>Если Вы уже были замечены с читами / макросами или использованием просвета на другом сервере / проекте и на вас есть пруфы - мы имеем право забанить Вас без проверки.</b></p>\
<p><span class="rules_rule"><i>[1.4]</i></span> - Администрация сама выбирает наказание для игрока в зависимости от степени нарушения и обстоятельств. Нарушитель может получить как предупреждение, так и перманентный бан (временных блокировок нет). Блокировка выдаётся на всех серверах проекта, например, нарушив правила на Purple сервере — не получится пойти спокойно играть на Red.</p>\
<p><span class="rules_rule"><i>[1.5]</i></span> - Администрация не компенсирует игровые ценности, утраченные по причине вашей ошибки, технических проблем на сервере/хостинге, багов игры или контакта с нарушителями.</p>\
<p><span class="rules_rule"><i>[1.6]</i></span> - Администрация не вмешивается во взаимоотношения игроков, за тех с кем вы играете ответственны только Вы, поэтому в случае если игрок вас обманет — ему ничего за это не будет.</p>\
<p><span class="rules_rule"><i>[1.7]</i></span> - Вы несете ответственность за все свои аккаунты. Получив бан на одном аккаунте - Вы получите его и на последующих аккаунтах. То же самое будет если на одном из ваших аккаунтах имеется игровая блокировка (EAC).</p>\
<p><span class="rules_rule"><i>[1.8]</i></span> - Запрещено выдавать себя за Администратора, Модератора или Проверяющего.</p>\
<p class="MsoNormal"><span>Геймплей</span></li></p>\
<p><span class="rules_rule"><i>[2.1]</i></span> - Запрещено использовать/хранить/приобретать/распространять стороннее ПО или любые другие средства, позволяющие получить преимущество над другими игроками.</p>\
<p><span class="rules_rule"><i>[2.2]</i></span> - Запрещено использование услуг читеров.</p>\
<p><span class="rules_rule"><i>[2.3]</i></span> - Запрещено использование багов с целью или без цели получения преимущества над другими игроками. Кбагам относятся и дыры в текстурах.</p>\
<p><span class="rules_rule"><i>[2.4]</i></span> - Запрещено превышать лимит игроков в команде:</p>\
<p><div class="rules_rule_two"><p>× Нельзя устраивать альянсы и перемирия с соседями если в сумме вас больше указанного в названии сервера максимума<p>× Нельзя рейдить/антирейдить или убивать в 1+/2+/3+<p>× Нельзя каким-либо образом кооперироваться с другими игроками если в вашей команде уже максимально возможное количество игроков<p>× Частая смена тиммейтов будет считаться за нарушения правила о лимите, тоже самое касается и игру с другим игроком пока тиммейт стоит афк или не находится рядом<p>× Запрещена смена тиммейта на время, если ваш основной тиммейт продолжит с вами играть<p>× Разрешено сменить напарника, если ваш предыдущий напарник в дальнейшем не будет с вами контактировать</div></p>\
<p class="MsoNormal"><span>Игровой Чат</span></li></p>\
<p><span class="rules_rule"><i>[3.1]</i></span> - Запрещены ссылки в чате на сторонние сервисы и сайты.</p>\
<p><span class="rules_rule"><i>[3.2]</i></span> - Запрещен флуд (многократное повторение бессмысленных фраз, символов) или многократное отправление одинаковых фраз за короткий промежуток времени.</p>\
<p><span class="rules_rule"><i>[3.3]</i></span> - Запрещено продавать или делать вид что вы продаёте читы/макросы.</p>\
<p><span class="rules_rule"><i>[3.4]</i></span> - Запрещено предлагать сделать действия, приводящие к нежеланному выходу с сервера. К таким действиям относится например нажатие "alt+f4", прописывание "disconnect" в консоль и прочие подобные действия, о значении которых другие игроки могут не знать.</p>\
<p><span class="rules_rule"><i>[3.5]</i></span> - Администрация оставляет за собой право выдать мут или заблокировать игроку в чате если тот ведёт себя неадекватно или некорректно по отношению к другим игрокам.</p>\
<p><span class="rules_rule"><i>[3.6]</i></span> - Запрещена продажа/покупка игровых ценностей за реальную валюту и скины (RMT).</p>\
<p class="MsoNormal"><span>Проверки</span></li></p>\
<p><span class="rules_rule"><i>[4.1]</i></span> - Проверки проходят только через программу «DISCORD». Каждый игрок на нашем проекте, в обязательном порядке должен иметь эту программу на своём пк (или хотя-бы аккаунт, чтобы зайти в дискорд через браузер).</p>\
<p><span class="rules_rule"><i>[4.2]</i></span> - Вызов на проверку осуществляется только через табличку на экране и ни в коем случае не через голосовой/текстовый чат.</p>\
<p><span class="rules_rule"><i>[4.3]</i></span> - Если игрок покинул сервер, предоставил некорректные контактные данные, игнорировал проверку или отказался от неё и после блокировки просит проверить его ПК на наличие стороннего ПО — ему будет отказано.</p>\
<p><span class="rules_rule"><i>[4.4]</i></span> - Запрещено чистить ПК перед проверкой.</p>\
<p><span class="rules_rule"><i>[4.5]</i></span> - За отказ показывать нужную для проверки информацию или неадекватное поведение — вы будете заблокированы.</p>\
<p><span class="rules_rule"><i>[4.6]</i></span> - Если по итогам (итогом считается и блокировка за отказ/игнор/дисконект и предоставление некорректных данных для связи) проверки игрок блокируется — вся его команда блокируется вместе с ним.</p>\
<p>— Вы имеете полное право отказаться проходить проверку, но в этом случае Вы и ваши тиммейты будут заблокированы.</p>\
<p>— Так-же отказом от проверки будет считаться выход с сервера, предоставление некорректных контактных данных и игнорирование проверки.</p>\
<p>— Если Вы согласны пройти проверку - то автоматически разрешаете устанавливать сторонние программы нужные администрации для проверки вашего PC (AnyDesk, RCC и т.д).</p>\
</ul><div class="unban" style="background: white; border-radius: 10px; padding: 20px;"><p class="MsoNormal" style="font-weight: bold; margin-bottom: 5px;">Возможность разблокровки</p><span>Через месяц после блокировки можно подать апелляцию, но, только в случае если бан был получен не за читы или макросы. Писать апелляцию нужно в личные сообщения отдельной группы: <a href="https://vk.com/bloodappeal">vk.com/bloodappeal</a><div class="unbanwarn">⚠ Учтите, блокировки не обсуждаются, поэтому писать в основную группу, в чат дискорда/телеграма или куда-бы то ни было ещё - абсолютно бессмысленно, вне группы для апелляций разблокировку не получить, ни при каких обстоятельствах.<br><br>p.s. Купить разблокировку невозможно.</div></span></div></div></div>'
};

//<p style="text-align: center;"><u>При заходе на наши сервера вы автоматически соглашаетесь с правилами.</u></p>\

curcontent["skins"] = {
    xhead: 'Пополнение скинами напрямую',
    xcon: '<div class="skin-content"><div class="spoiler"><div class="x-spoiler">\
<input class="spoil-button" type="checkbox" tabindex="-1">\
     <div class="spoil-box"><span class="spoil-close fa"></span><span class="spoil-open fa"></span><span class="spoil-head">Что значит пополнение напрямую?</span><br><blockquote class="spoil-Untext">Обычно пополнение скинами происходит через сторонние сервисы (SkinPay или Skins.Cash), но в этом случае игрок который пополняет баланс теряет около ~40% от цены скинов. Мы же хотим предложить вам пополнение баланса скинами практически по ценам с торговой площадки, без каких-либо посредников.</span></blockquote>\
     </div></div>\
<div class="x-spoiler">\
<input class="spoil-button" type="checkbox" tabindex="-1">\
     <div class="spoil-box">\
         <span class="spoil-close fa"></span><span class="spoil-open fa"></span><span class="spoil-head">Требования к обмену при пополнении напрямую</span><span class="skin-warning">обязательно прочти</span>\
         <blockquote class="spoil-Untext">\» У вас не должно быть <a href="https://i.imgur.com/7M5iEfV.jpg" target="_blank">удержания</a> обмена<br>» Принимаются скины только из <b>RUST</b> и <b>CS:GO</b><br>» В обмене не должно быть скинов из CS:GO дешевле <b>5 рублей</b><br>» Если скинов в обмене много - лучше отправлять частями<br>» Баланс будет пополнен только того аккаунта, с которого были отправлены скины</li></ol>\
         </blockquote>\
     </div></div>\
<div class="x-spoiler">\
<input class="spoil-button" type="checkbox" tabindex="-1">\
     <div class="spoil-box"><span class="spoil-close fa"></span><span class="spoil-open fa"></span><span class="spoil-head">Хочу пополнить баланс скинами</span><br>\
	 <blockquote class="spoil-Untext">Чтобы пополнить баланс необходимо перейти на страницу обмена (нажав на кнопку снизу), выбрать скины которыми хотите пополнить, нажать кнопку "Предложить обмен" и подтвердить обмен через мобильное приложение Steam.<br><br>Если обмен соответствует требованиям - наш бот примет его в течение нескольких минут.<div class="btn-skins"><a class="btn-skin" href="https://steamcommunity.com/tradeoffer/new/?partner=1277966266&token=tFyax4VJ" target="_blank">Начать обмен</a></blockquote>\
     </div></div></div><div class="warnings_skin">⚠️ Перед тем как отправлять скины обязательно ознакомьтесь с <b>требованиями к обмену</b> и <b>авторизируйтесь на сайте</b>, а так-же учтите, средства за скины будут зачислены только на баланс аккаунта с которого они были отправлены.</div></div>'
};

curcontent["skipqueue"] = {
    xhead: 'Вход без очереди',
    xcon: '<div class="queue-text">\
		<div>\
			<span>Вход без очереди работает сразу после покупки привилегии (как и написано в её описании), для этого не нужно ничего активировать на сервере, но после входа на сервер - необходимо забрать привилегию из корзины, иначе Вас кикнет. Если привилегия была приобретена пока Вы стояли в очереди - нужно выйти из очереди и подключится к серверу вновь.<br><br>Если вас не пропускает вне очереди - проверьте с того ли аккаунта Вы авторизировались и приобрели привилегию, а так-же учтите, привилегия работает только на сервере где была забрана из корзины.<br><br><b>⚠️ Настоятельно рекомендуем всегда активировать привилегию перед вайпом, потому-что первые минуты (~10 минут) после вайпа - вход без очереди (при неактивированной привилегии) может работать нестабильно из-за большой нагрузки на сайт.</b></span>\
		</div>\
	</div>'
};

curcontent["enskipqueue"] = {
    xhead: 'Skip the queue',
    xcon: '<div class="queue-text">\
		<div>\
			<span>Skipping the queue works immediately after purchasing the privilege (as it is written in its description), for this you do not need to activate anything on the server, but after entering the server, you need to take the privilege from the basket (/store), otherwise you will be kicked. If the privilege has been acquired, then you have joined the queue - you must exit the queue and reconnect to the server.<br><br>If you are not allowed out of the queue - check with the help of the account you have authorized and received the privilege, and also note that the privilege works only on the server where it was taken from the basket.<br><br><b>⚠️ It is strongly recommended to always activate the privilege before the wipe, because the first minutes (~10 minutes) after wipe - skip queue queue (with unactivated privilege) can work unstable due to heavy load on the site.</b></span>\
		</div>\
	</div>'
};

curcontent["kit-kaban"] = {
    xhead: 'Платные киты',
    xcon: '<div class="store-categories">\
	<button class="btn btn-secondary" onclick="Open(\'kit-free\', false);">Стартовые</button>\
	<button class="btn btn-secondary active">Кабанчик</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-joker\', false);">Джокер</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-masnik\', false);">Мясник</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-smert\', false);">Смэрть</button>\
	<div class="xbox_custom_kits" ><div class="serverheader">Кит "Ресурсы" - <span>Откат 24ч</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/stones.png">\
<div class="kit-item__quantity">x6000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/wood.png">\
<div class="kit-item__quantity">x6000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/metal.fragments.png">\
<div class="kit-item__quantity">x3000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/gunpowder.png">\
<div class="kit-item__quantity">x1000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/sulfur.png">\
<div class="kit-item__quantity">x1000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/charcoal.png">\
<div class="kit-item__quantity">x1000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/lowgradefuel.png">\
<div class="kit-item__quantity">x400</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/cloth.png">\
<div class="kit-item__quantity">x400</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/leather.png">\
<div class="kit-item__quantity">x400</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/metal.refined.png">\
<div class="kit-item__quantity">x100</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/gears.png">\
<div class="kit-item__quantity">x5</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/sewingkit.png">\
<div class="kit-item__quantity">x10</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/metalpipe.png">\
<div class="kit-item__quantity">x10</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/metalspring.png">\
<div class="kit-item__quantity">x10</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/smgbody.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/riflebody.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/semibody.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/roadsigns.png">\
<div class="kit-item__quantity">x10</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/rope.png">\
<div class="kit-item__quantity">x10</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/tarp.png">\
<div class="kit-item__quantity">x10</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/scrap.png">\
<div class="kit-item__quantity">x100</div></div></div>\
</div></div></div>\
<div class="xbox_custom_kits" ><div class="serverheader">Кит "Снаряжение" - <span>Откат 24ч</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/rifle.semiauto.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/ammo.rifle.png">\
<div class="kit-item__quantity">x100</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/wood.armor.helmet.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/wood.armor.jacket.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/wood.armor.pants.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/tshirt.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/pants.shorts.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/shoes.boots.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/largemedkit.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/syringe.medical.png">\
<div class="kit-item__quantity">x4</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/pickaxe.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/hatchet.png">\
<div class="kit-item__quantity">x1</div></div></div>\
</div></div></div>\
<div class="xbox_custom_kits" ><div class="serverheader">Кит "Дом" - <span>Откат 72ч</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/workbench1.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/coffin.storage.png">\
<div class="kit-item__quantity">x1</div></div></div>\
</div></div></div>'
};

curcontent["kit-joker"] = {
    xhead: 'Платные киты',
    xcon: '<div class="store-categories">\
	<button class="btn btn-secondary" onclick="Open(\'kit-free\', false);">Стартовые</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-kaban\', false);">Кабанчик</button>\
	<button class="btn btn-secondary active">Джокер</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-masnik\', false);">Мясник</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-smert\', false);">Смэрть</button>\
	<div class="xbox_custom_kits" ><div class="serverheader">Кит "Ресурсы" - <span>Откат 24ч</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/stones.png">\
<div class="kit-item__quantity">x8000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/wood.png">\
<div class="kit-item__quantity">x8000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/metal.fragments.png">\
<div class="kit-item__quantity">x4000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/gunpowder.png">\
<div class="kit-item__quantity">x2000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/sulfur.png">\
<div class="kit-item__quantity">x2000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/charcoal.png">\
<div class="kit-item__quantity">x2000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/lowgradefuel.png">\
<div class="kit-item__quantity">x600</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/cloth.png">\
<div class="kit-item__quantity">x600</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/leather.png">\
<div class="kit-item__quantity">x600</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/metal.refined.png">\
<div class="kit-item__quantity">x200</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/gears.png">\
<div class="kit-item__quantity">x10</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/sewingkit.png">\
<div class="kit-item__quantity">x15</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/metalpipe.png">\
<div class="kit-item__quantity">x15</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/metalspring.png">\
<div class="kit-item__quantity">x15</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/smgbody.png">\
<div class="kit-item__quantity">x2</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/riflebody.png">\
<div class="kit-item__quantity">x2</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/semibody.png">\
<div class="kit-item__quantity">x2</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/roadsigns.png">\
<div class="kit-item__quantity">x15</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/rope.png">\
<div class="kit-item__quantity">x15</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/tarp.png">\
<div class="kit-item__quantity">x15</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/scrap.png">\
<div class="kit-item__quantity">x200</div></div></div>\
</div></div></div>\
<div class="xbox_custom_kits" ><div class="serverheader">Кит "Снаряжение" - <span>Откат 24ч</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/rifle.m39.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/ammo.rifle.png">\
<div class="kit-item__quantity">x100</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/coffeecan.helmet.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/roadsign.jacket.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/roadsign.kilt.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/hoodie.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/pants.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/shoes.boots.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/largemedkit.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/syringe.medical.png">\
<div class="kit-item__quantity">x6</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/icepick.salvaged.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/axe.salvaged.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/explosive.satchel.png">\
<div class="kit-item__quantity">x4</div></div></div>\
</div></div></div>\
<div class="xbox_custom_kits" ><div class="serverheader">Кит "Дом" - <span>Откат 72ч</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/workbench2.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/small.oil.refinery.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/coffin.storage.png">\
<div class="kit-item__quantity">x1</div></div></div>\
</div></div></div>\
<div class="xbox_custom_kits" ><div class="serverheader">Кит "Магический" (один на все привилегии) - <span>Откат 24ч</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://pic.moscow.ovh/images/2023/05/08/a09fbaa344230b0cb32acf00c542d654.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://pic.moscow.ovh/images/2023/05/08/614b43e9f1fe13e81a73002f4ea43b3c.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://pic.moscow.ovh/images/2023/05/08/e17e11ec3fc7c8b9d79366d10325a36b.png">\
<div class="kit-item__quantity">x2</div></div></div>\
</div></div></div>'
};

curcontent["kit-masnik"] = {
    xhead: 'Платные киты',
    xcon: '<div class="store-categories">\
	<button class="btn btn-secondary" onclick="Open(\'kit-free\', false);">Стартовые</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-kaban\', false);">Кабанчик</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-joker\', false);">Джокер</button>\
	<button class="btn btn-secondary active">Мясник</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-smert\', false);">Смэрть</button>\
	<div class="xbox_custom_kits" ><div class="serverheader">Кит "Ресурсы" - <span>Откат 24ч</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/stones.png">\
<div class="kit-item__quantity">x10000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/wood.png">\
<div class="kit-item__quantity">x10000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/metal.fragments.png">\
<div class="kit-item__quantity">x5000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/gunpowder.png">\
<div class="kit-item__quantity">x3000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/sulfur.png">\
<div class="kit-item__quantity">x3000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/charcoal.png">\
<div class="kit-item__quantity">x3000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/lowgradefuel.png">\
<div class="kit-item__quantity">x800</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/cloth.png">\
<div class="kit-item__quantity">x800</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/leather.png">\
<div class="kit-item__quantity">x800</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/metal.refined.png">\
<div class="kit-item__quantity">x300</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/gears.png">\
<div class="kit-item__quantity">x15</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/sewingkit.png">\
<div class="kit-item__quantity">x20</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/metalpipe.png">\
<div class="kit-item__quantity">x20</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/metalspring.png">\
<div class="kit-item__quantity">x20</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/smgbody.png">\
<div class="kit-item__quantity">x3</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/riflebody.png">\
<div class="kit-item__quantity">x3</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/semibody.png">\
<div class="kit-item__quantity">x3</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/roadsigns.png">\
<div class="kit-item__quantity">x20</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/rope.png">\
<div class="kit-item__quantity">x20</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/tarp.png">\
<div class="kit-item__quantity">x20</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/scrap.png">\
<div class="kit-item__quantity">x300</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/supply.signal.png">\
<div class="kit-item__quantity">x1</div></div></div>\
</div></div></div>\
<div class="xbox_custom_kits" ><div class="serverheader">Кит "Снаряжение" - <span>Откат 24ч</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/rifle.ak.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/rifle.bolt.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/ammo.rifle.png">\
<div class="kit-item__quantity">x200</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/metal.facemask.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/metal.plate.torso.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/roadsign.kilt.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/hoodie.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/pants.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/shoes.boots.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/largemedkit.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/syringe.medical.png">\
<div class="kit-item__quantity">x8</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/jackhammer.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/chainsaw.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/explosive.timed.png">\
<div class="kit-item__quantity">x2</div></div></div>\
</div></div></div>\
<div class="xbox_custom_kits" ><div class="serverheader">Кит "Дом" - <span>Откат 72ч</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/workbench3.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/furnace.large.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/small.oil.refinery.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/coffin.storage.png">\
<div class="kit-item__quantity">x2</div></div></div>\
</div></div></div>\
<div class="xbox_custom_kits" ><div class="serverheader">Кит "Магический" (один на все привилегии) - <span>Откат 24ч</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://pic.moscow.ovh/images/2023/05/08/a09fbaa344230b0cb32acf00c542d654.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://pic.moscow.ovh/images/2023/05/08/614b43e9f1fe13e81a73002f4ea43b3c.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://pic.moscow.ovh/images/2023/05/08/e17e11ec3fc7c8b9d79366d10325a36b.png">\
<div class="kit-item__quantity">x2</div></div></div>\
</div></div></div>'
};

curcontent["kit-smert"] = {
    xhead: 'Платные киты',
    xcon: '<div class="store-categories">\
	<button class="btn btn-secondary" onclick="Open(\'kit-free\', false);">Стартовые</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-kaban\', false);">Кабанчик</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-joker\', false);">Джокер</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-masnik\', false);">Мясник</button>\
	<button class="btn btn-secondary active">Смэрть</button>\
	<div class="xbox_custom_kits" ><div class="serverheader">Кит "Ресурсы" - <span>Откат 24ч</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/stones.png">\
<div class="kit-item__quantity">x12000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/wood.png">\
<div class="kit-item__quantity">x12000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/metal.fragments.png">\
<div class="kit-item__quantity">x6000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/gunpowder.png">\
<div class="kit-item__quantity">x4000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/sulfur.png">\
<div class="kit-item__quantity">x4000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/charcoal.png">\
<div class="kit-item__quantity">x4000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/lowgradefuel.png">\
<div class="kit-item__quantity">x1000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/cloth.png">\
<div class="kit-item__quantity">x1000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/leather.png">\
<div class="kit-item__quantity">x1000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/metal.refined.png">\
<div class="kit-item__quantity">x400</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/gears.png">\
<div class="kit-item__quantity">x20</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/sewingkit.png">\
<div class="kit-item__quantity">x25</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/metalpipe.png">\
<div class="kit-item__quantity">x25</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/metalspring.png">\
<div class="kit-item__quantity">x25</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/smgbody.png">\
<div class="kit-item__quantity">x4</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/riflebody.png">\
<div class="kit-item__quantity">x4</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/semibody.png">\
<div class="kit-item__quantity">x4</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/roadsigns.png">\
<div class="kit-item__quantity">x25</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/rope.png">\
<div class="kit-item__quantity">x25</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/tarp.png">\
<div class="kit-item__quantity">x25</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/scrap.png">\
<div class="kit-item__quantity">x400</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/supply.signal.png">\
<div class="kit-item__quantity">x2</div></div></div>\
</div></div></div>\
<div class="xbox_custom_kits" ><div class="serverheader">Кит "Снаряжение" - <span>Откат 24ч</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/rifle.ak.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/rifle.l96.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/ammo.rifle.png">\
<div class="kit-item__quantity">x200</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/metal.facemask.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/metal.plate.torso.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/roadsign.kilt.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/hoodie.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/pants.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/shoes.boots.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/largemedkit.png">\
<div class="kit-item__quantity">x2</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/syringe.medical.png">\
<div class="kit-item__quantity">x10</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/jackhammer.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/chainsaw.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/explosive.timed.png">\
<div class="kit-item__quantity">x2</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/rocket.launcher.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/ammo.rocket.basic.png">\
<div class="kit-item__quantity">x4</div></div></div>\
</div></div></div>\
<div class="xbox_custom_kits" ><div class="serverheader">Кит "Дом" - <span>Откат 72ч</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/workbench3.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/furnace.large.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/small.oil.refinery.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/coffin.storage.png">\
<div class="kit-item__quantity">x3</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/bed.png">\
<div class="kit-item__quantity">x1</div></div></div>\
</div></div></div>\
<div class="xbox_custom_kits" ><div class="serverheader">Кит "Магический" (один на все привилегии) - <span>Откат 24ч</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://pic.moscow.ovh/images/2023/05/08/a09fbaa344230b0cb32acf00c542d654.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://pic.moscow.ovh/images/2023/05/08/614b43e9f1fe13e81a73002f4ea43b3c.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://pic.moscow.ovh/images/2023/05/08/e17e11ec3fc7c8b9d79366d10325a36b.png">\
<div class="kit-item__quantity">x2</div></div></div>\
</div></div></div>'
};

curcontent["kit-free"] = {
    xhead: 'Стартовые киты',
    xcon: '<div class="store-categories">\
	<button class="btn btn-secondary active">Стартовые</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-kaban\', false);">Кабанчик</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-joker\', false);">Джокер</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-masnik\', false);">Мясник</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-smert\', false);">Смэрть</button>\
<div class="xbox_custom_kits" >\
<div class="serverheader">Кит "Стартовый" - <span>Откат 15м</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/stone.pickaxe.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/stonehatchet.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/knife.butcher.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://pic.moscow.ovh/images/2023/05/08/f20f1e507da7559c9b61ea579b95d6e2.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/bow.hunting.png">\
<div class="kit-item__quantity">2%</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/pistol.nailgun.png">\
<div class="kit-item__quantity">2%</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/pistol.eoka.png">\
<div class="kit-item__quantity">2%</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/hatchet.png">\
<div class="kit-item__quantity">4%</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/pickaxe.png">\
<div class="kit-item__quantity">4%</div></div></div>\
</div></div>\
<div class="xbox_custom_kits" >\
<div class="serverheader">Кит "Дом" - <span>Откат 1ч</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/box.wooden.large.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/sleepingbag.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/door.hinged.wood.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/lock.code.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/building.planner.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/hammer.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/furnace.png">\
<div class="kit-item__quantity">25%</div></div></div>\
</div></div>\
<div class="serverheader">Кит за "#bloodrust" в нике - <span>Откат 48ч</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/deer.skull.mask.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/bone.armor.suit.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/candycaneclub.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/workbench1.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/furnace.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/jackhammer.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/axe.salvaged.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/pistol.nailgun.png">\
<div class="kit-item__quantity">x1</div></div></div>\
</div></div></div>'
};

curcontent["Oplata2"] = {
    xhead: 'Выберите метод (Choose method)',
    xcon: '<div class="xbox oplata_info">\
<div class="forms-oplata-grid">\
<form onsubmit="return freekassaHandler(event)" class="qiwi-inp-form" id="fk-inp-form" method="get" target="_blank" action="https://pay.bloodrust.io/api/integrations/enot/pay-link">\
<div class="qiwi-inp-oplata" id="qiwi-inp-other">\
	<div class="qiwi-widget-title">Qiwi & Карты<br><p>Crypto, ЮMoney, Perfect Money</p></div>\
	<div class="qiwi-inp-box">\
		<label for="fk-donation-amount" class="qiwi-label">Amount</label>\
		<div class="qiwi-rub">₽</div>\
		<input type="number" placeholder="Сумма" id="fk-donation-amount" name="sum" required="" value="">\
		<input type="hidden" id="fk-donation-account" name="acc" value="">\
		<div class="qiwi-error-box" id="fk-error-box"></div>\
	</div>\
	<div class="qiwi-button-box">\
		<button class="qiwi-submit-main" id="fk-submit-main" width="159px" type="submit">Оплатить</button>\
	</div>\
	<div class="payment-block">\
        <div class="payment-type payment-block-crypto"></div><div class="payment-type payment-block-visa"></div><div class="payment-type payment-block-mastercard"></div>\
	</div>\
</div>\
</form>\
<form onsubmit="return centHandler(event)" class="qiwi-inp-form" id="cent-inp-form" method="get" target="_blank" action="https://pay.bloodrust.io/api/integrations/card-link/pay-link">\
<div class="qiwi-inp-oplata" id="qiwi-inp-other">\
	<div class="qiwi-widget-title">Cardlink<br><p>иностранные карты (eu)</p></div>\
	<div class="qiwi-inp-box">\
		<label for="cent-donation-amount" class="qiwi-label">Amount</label>\
		<div class="qiwi-rub">₽</div>\
		<input type="number" placeholder="Amount" id="cent-donation-amount" name="sum" required="" value="">\
		<input type="hidden" id="cent-donation-account" name="acc" value="">\
		<div class="qiwi-error-box" id="cent-error-box"></div>\
	</div>\
	<div class="qiwi-button-box">\
		<button class="qiwi-submit-main" id="cent-submit-main" width="159px" type="submit">Pay</button>\
	</div>\
	<div class="payment-block">\
        <div class="payment-type payment-block-visa"></div><div class="payment-type payment-block-mastercard"></div>\
	</div>\
</div>\
</form>\
<form onsubmit="return qiwiHandler(event)" id="qiwi-inp-form" method="get" target="_blank" action="https://oplata.qiwi.com/create">\
<div class="qiwi-inp-oplata">\
	<div class="qiwi-widget-title">Qiwi<br><p>минимальная комиссия</p></div>\
	<div class="qiwi-inp-box">\
			<label for="qiwi-donation-amount" class="qiwi-label">Cумма</label>\
			<div class="qiwi-rub">₽</div>\
			<input type="number" placeholder="Сумма" id="qiwi-donation-amount" name="amount" required="" value="">\
			<input type="hidden" id="qiwi-donation-comment" name="comment" value="Пожертвование на bloodrust.ru">\
			<input type="hidden" name="publicKey" value="48e7qUxn9T7RyYE1MVZswX1FRSbE6iyCj2gCRwwF3Dnh5XrasNTx3BGPiMsyXQFNKQhvukniQG8RTVhYm3iP41L5FeJwQwwonvju9Y4nW8D1XD4UnFfdfn1ixQEW6PzikZpL1a3sXxdhX2E92EpLgpKjQkxY9kzqDLX8JgZoxbdReH6dfmTDy7YsSDmkX">\
			<input type="hidden" id="qiwi-donation-account" name="account" value="0">\
			<input type="hidden" name="customFields[themeCode]" value="Danyl-Kzv6jl9NlE">\
			<input type="hidden" id="qiwi-successUrl" name="successUrl" value="https://bloodrust.store">\
			<div class="qiwi-error-box" id="qiwi-error-box"></div>\
	</div>\
	<div class="qiwi-button-box">\
		<button class="qiwi-submit-main" id="qiwi-submit-main" width="159px" type="submit">Оплатить</button>\
	</div>\
	<div class="payment-block">\
        <div class="payment-type payment-block-visa"></div><div class="payment-type payment-block-mastercard"></div><div class="payment-type payment-block-mir"></div>\
	</div>\
</div>\
</form>\
<a class="container-oplata" id="qiwi-inp-other2"><img alt="" src="https://i.imgur.com/kb8M7vg.png" class="icon-user-oplata"><div class="textContainer-oplata"><span class="name-user">Пополнить картой</span><span class="category-user">Visa, Mastercard и Мир</span></div></a><a class="container-oplata" id="qiwi-inp-other-skin" href="https://bloodstore.tebex.io/checkout/packages/add/5507691/single" target="_blank"><img alt="" src="https://i.imgur.com/bSNmagw.jpg" class="icon-user-oplata"><div class="textContainer-oplata"><span class="name-user">Tebex (ua/eu/снг)</span><span class="category-user">Visa, Mastercard, PayPal</span></div></a><a class="container-oplata" id="qiwi-inp-other-skin" onclick="Open(\'skins\');" target="_blank"><img alt="" src="https://i.imgur.com/CQzYJlG.png" class="icon-user-oplata"><div class="textContainer-oplata"><span class="name-user">Пополнить скинами</span><span class="category-user">Deposit with skins</span></div></a>\
</div>\
<div class="spoiler" style="margin-top: 10px;"><div class="x-spoiler">\
<input class="spoil-button" type="checkbox" tabindex="-1">\
     <div class="spoil-box"><span class="spoil-close fa"></span><span class="spoil-open fa"></span><span class="spoil-head">Бонусы при пополнении</span><br><blockquote class="spoil-Untext">от <b>100₽</b> - бонус <b>+10%</b> к сумме пополнения<br>от <b>300₽</b> - бонус <b>+15%</b> к сумме пополнения<br>от <b>1000₽</b> - бонус <b>+20%</b> к сумме пополнения<br>от <b>2000₽</b> - бонус <b>+25%</b> к сумме пополнения<br><br>⚠️ Бонусы не действуют при пополнении скинами</span></blockquote>\
     </div></div>\
<div class="warnings_skin2">⚠ Перед тем как пополнять банковской картой через QIWI - нужно авторизироваться в своём кошельке, а если его нет - зарегистрировать.</div>'
};

curcontent["Oplata"] = {
    xhead: 'Выберите метод (Choose method)',
    xcon: '<div class="xbox oplata_info">\
<div class="forms-oplata-grid">\
	<form onsubmit="return freekassaHandler(event)" class="qiwi-inp-form" id="fk-inp-form" method="get" target="_blank" action="https://pay.bloodrust.io/api/integrations/enot/pay-link">\
		<div class="qiwi-inp-oplata" id="qiwi-inp-other">\
			<div class="qiwi-widget-title">Карты & Qiwi<br><p>Cryptocurrency, Perfect Money</p></div>\
			<div class="qiwi-inp-box">\
				<label for="fk-donation-amount" class="qiwi-label">Amount</label>\
				<div class="qiwi-rub">₽</div>\
				<input type="number" placeholder="Сумма" id="fk-donation-amount" name="sum" required="" value="">\
				<input type="hidden" id="fk-donation-account" name="acc" value="">\
				<div class="qiwi-error-box" id="fk-error-box"></div>\
			</div>\
			<div class="qiwi-button-box">\
				<button class="qiwi-submit-main" id="fk-submit-main" width="159px" type="submit">Оплатить</button>\
			</div>\
			<div class="payment-block">\
		        <div class="payment-type payment-block-mastercard"></div><div class="payment-type payment-block-visa"></div><div class="payment-type payment-block-crypto"></div>\
			</div>\
		</div>\
	</form>\
	<div class="container-oplata-btn">\
		<a class="container-oplata-box" id="qiwi-inp-other2">\
			<img alt="" src="https://i.imgur.com/kb8M7vg.png" class="icon-user-oplata">\
			<div class="textContainer-oplata">\
				<span class="name-user">Пополнить картой</span>\
				<span class="category-user">Visa, Mastercard и Мир</span>\
			</div>\
		</a>\
		<a class="container-oplata-box" href="https://bloodstore.tebex.io/checkout/packages/add/5507691/single" target="_blank">\
			<img alt="" src="https://i.imgur.com/bSNmagw.jpg" class="icon-user-oplata">\
			<div class="textContainer-oplata">\
				<span class="name-user">Tebex (ua/eu/снг)</span>\
				<span class="category-user">Visa, Mastercard, PayPal</span>\
			</div>\
		</a>\
		<a class="container-oplata-box" id="qiwi-inp-other-skin" onclick="Open(\'skins\');" target="_blank">\
			<img alt="" src="https://i.imgur.com/CQzYJlG.png" class="icon-user-oplata">\
			<div class="textContainer-oplata">\
				<span class="name-user">Пополнить скинами</span>\
				<span class="category-user">Deposit with skins</span>\
			</div>\
		</a>\
	</div>\
	<form onsubmit="return centHandler(event)" class="qiwi-inp-form" id="cent-inp-form" method="get" target="_blank" action="https://pay.bloodrust.io/api/integrations/card-link/pay-link">\
		<div class="qiwi-inp-oplata" id="qiwi-inp-other">\
			<div class="qiwi-widget-title">Cardlink<br><p>иностранные карты (eu)</p></div>\
				<div class="qiwi-inp-box">\
					<label for="cent-donation-amount" class="qiwi-label">Amount</label>\
					<div class="qiwi-rub">₽</div>\
					<input type="number" placeholder="Amount" id="cent-donation-amount" name="sum" required="" value="">\
					<input type="hidden" id="cent-donation-account" name="acc" value="">\
					<div class="qiwi-error-box" id="cent-error-box"></div>\
				</div>\
				<div class="qiwi-button-box">\
					<button class="qiwi-submit-main" id="cent-submit-main" width="159px" type="submit">Pay</button>\
				</div>\
				<div class="payment-block">\
			        <div class="payment-type payment-block-visa"></div><div class="payment-type payment-block-mastercard"></div>\
			</div>\
		</div>\
	</form>\
	<form onsubmit="return qiwiHandler(event)" id="qiwi-inp-form" method="get" target="_blank" action="https://oplata.qiwi.com/create" style="display: none;">\
	<div class="qiwi-inp-oplata">\
		<div class="qiwi-widget-title">Qiwi<br><p>минимальная комиссия</p></div>\
		<div class="qiwi-inp-box">\
				<label for="qiwi-donation-amount" class="qiwi-label">Cумма</label>\
				<div class="qiwi-rub">₽</div>\
				<input type="number" placeholder="Сумма" id="qiwi-donation-amount" name="amount" required="" value="">\
				<input type="hidden" id="qiwi-donation-comment" name="comment" value="Пожертвование на bloodrust.ru">\
				<input type="hidden" name="publicKey" value="48e7qUxn9T7RyYE1MVZswX1FRSbE6iyCj2gCRwwF3Dnh5XrasNTx3BGPiMsyXQFNKQhvukniQG8RTVhYm3iP41L5FeJwQwwonvju9Y4nW8D1XD4UnFfdfn1ixQEW6PzikZpL1a3sXxdhX2E92EpLgpKjQkxY9kzqDLX8JgZoxbdReH6dfmTDy7YsSDmkX">\
				<input type="hidden" id="qiwi-donation-account" name="account" value="0">\
				<input type="hidden" name="customFields[themeCode]" value="Danyl-Kzv6jl9NlE">\
				<input type="hidden" id="qiwi-successUrl" name="successUrl" value="https://bloodrust.store">\
				<div class="qiwi-error-box" id="qiwi-error-box"></div>\
		</div>\
		<div class="qiwi-button-box">\
			<button class="qiwi-submit-main" id="qiwi-submit-main" width="159px" type="submit">Оплатить</button>\
		</div>\
		<div class="payment-block">\
	        <div class="payment-type payment-block-visa"></div><div class="payment-type payment-block-mastercard"></div><div class="payment-type payment-block-mir"></div>\
		</div>\
	</div>\
	</form>\
</div>\
	<div class="spoiler" style="margin-top: 10px;"><div class="x-spoiler">\
	<input class="spoil-button" type="checkbox" tabindex="-1">\
     <div class="spoil-box">\
     	<span class="spoil-close fa"></span>\
     	<span class="spoil-open fa"></span>\
     	<span class="spoil-head">Бонусы при пополнении</span>\
     	<br>\
     	<blockquote class="spoil-Untext">от <b>100₽</b> - бонус <b>+10%</b> к сумме пополнения<br>от <b>300₽</b> - бонус <b>+15%</b> к сумме пополнения<br>от <b>1000₽</b> - бонус <b>+20%</b> к сумме пополнения<br>от <b>2000₽</b> - бонус <b>+25%</b> к сумме пополнения<br><br>⚠️ Бонусы не действуют при пополнении скинами</span>\
     	</blockquote>\
	</div>\
</div>'
};

var BlockListArrays = [['shotgun.waterpipe', 'pistol.revolver'], ['flamethrower', 'pistol.python', 'pistol.semiauto', 'shotgun.double'], ['shotgun.pump', 'shotgun.spas12', 'pistol.m92', 'rifle.semiauto', 'coffeecan.helmet', 'roadsign.jacket', 'roadsign.kilt', 'pookie.bear'], ['smg.2', 'smg.thompson', 'smg.mp5', 'rifle.m39', 'metal.facemask', 'metal.plate.torso'], ['rifle.bolt', 'multiplegrenadelauncher', 'heavy.plate.helmet', 'heavy.plate.jacket', 'heavy.plate.pants'], ['rifle.ak', 'rifle.lr300', 'rifle.l96', 'grenade.f1', 'grenade.beancan', 'explosive.satchel'], ['lmg.m249', 'ammo.rifle.explosive', 'explosive.timed', 'rocket.launcher', 'ammo.grenadelauncher.he']];

curcontent["block"] = {
    xhead: 'Блокировка предметов после вайпа',
    xcon: '<div class="xbox_custom_block"><div class="kit-items">'

};

curcontent["block2"] = {
    xhead: 'Блокировка предметов после вайпа',
    xcon: '<div class="wb-body"> <div class="wb-main"> <div class="wb-items"> <div class="wb-item"> <img src="https://static.moscow.ovh/images/games/rust/icons/shotgun.waterpipe.png"> <p class="wb-time">2ч</p> </div> <div class="wb-item"> <img src="https://static.moscow.ovh/images/games/rust/icons/pistol.revolver.png"> <p class="wb-time">2ч</p> </div> <div class="wb-item"> <img src="https://static.moscow.ovh/images/games/rust/icons/flamethrower.png"> <p class="wb-time">4ч</p> </div> <div class="wb-item"> <img src="https://static.moscow.ovh/images/games/rust/icons/pistol.python.png"> <p class="wb-time">4ч</p> </div> <div class="wb-item"> <img src="https://static.moscow.ovh/images/games/rust/icons/pistol.semiauto.png"> <p class="wb-time">4ч</p> </div> <div class="wb-item"> <img src="https://static.moscow.ovh/images/games/rust/icons/shotgun.double.png"> <p class="wb-time">4ч</p> </div> <div class="wb-item"> <img src="https://pic.moscow.ovh/images/2022/10/18/8a16e1b40c23f4d1a203814970c70c70.png"> <p class="wb-time">4ч</p> </div> <div class="wb-item"> <img src="https://static.moscow.ovh/images/games/rust/icons/shotgun.pump.png"> <p class="wb-time">6ч</p> </div> <div class="wb-item"> <img src="https://static.moscow.ovh/images/games/rust/icons/shotgun.spas12.png"> <p class="wb-time">6ч</p> </div> <div class="wb-item"> <img src="https://static.moscow.ovh/images/games/rust/icons/pistol.m92.png"> <p class="wb-time">6ч</p> </div> <div class="wb-item"> <img src="https://pic.moscow.ovh/images/2022/11/04/a8b3b8a6e7a076f8c7361b0bf6aa0784.png"> <p class="wb-time">6ч</p> </div> <div class="wb-item"> <img src="https://static.moscow.ovh/images/games/rust/icons/rifle.semiauto.png"> <p class="wb-time">6ч</p> </div> <div class="wb-item"> <img src="https://static.moscow.ovh/images/games/rust/icons/coffeecan.helmet.png"> <p class="wb-time">6ч</p> </div> <div class="wb-item"> <img src="https://static.moscow.ovh/images/games/rust/icons/roadsign.jacket.png"> <p class="wb-time">6ч</p> </div> <div class="wb-item"> <img src="https://static.moscow.ovh/images/games/rust/icons/roadsign.kilt.png"> <p class="wb-time">6ч</p> </div> <div class="wb-item"> <img src="https://static.moscow.ovh/images/games/rust/icons/smg.2.png"> <p class="wb-time">10ч</p> </div> <div class="wb-item"> <img src="https://static.moscow.ovh/images/games/rust/icons/smg.thompson.png"> <p class="wb-time">10ч</p> </div> <div class="wb-item"> <img src="https://static.moscow.ovh/images/games/rust/icons/smg.mp5.png"> <p class="wb-time">10ч</p> </div> <div class="wb-item"> <img src="https://static.moscow.ovh/images/games/rust/icons/rifle.m39.png"> <p class="wb-time">10ч</p> </div> <div class="wb-item"> <img src="https://static.moscow.ovh/images/games/rust/icons/metal.facemask.png"> <p class="wb-time">10ч</p> </div> <div class="wb-item"> <img src="https://static.moscow.ovh/images/games/rust/icons/metal.plate.torso.png"> <p class="wb-time">10ч</p> </div> <div class="wb-item"> <img src="https://static.moscow.ovh/images/games/rust/icons/rifle.bolt.png"> <p class="wb-time">18ч</p> </div> <div class="wb-item"> <img src="https://static.moscow.ovh/images/games/rust/icons/multiplegrenadelauncher.png"> <p class="wb-time">18ч</p> </div> <div class="wb-item"> <img src="https://static.moscow.ovh/images/games/rust/icons/heavy.plate.helmet.png"> <p class="wb-time">18ч</p> </div> <div class="wb-item"> <img src="https://static.moscow.ovh/images/games/rust/icons/heavy.plate.jacket.png"> <p class="wb-time">18ч</p> </div> <div class="wb-item"> <img src="https://static.moscow.ovh/images/games/rust/icons/heavy.plate.pants.png"> <p class="wb-time">18ч</p> </div> <div class="wb-item"> <img src="https://static.moscow.ovh/images/games/rust/icons/grenade.f1.png"> <p class="wb-time">18ч</p> </div> <div class="wb-item"> <img src="https://pic.moscow.ovh/images/2023/12/06/585c536eccee1af3b8e4e33f6074b3e2.png"> <p class="wb-time">18ч</p> </div> <div class="wb-item"> <img src="https://static.moscow.ovh/images/games/rust/icons/rifle.ak.png"> <p class="wb-time">24ч</p> </div> <div class="wb-item"> <img src="https://pic.moscow.ovh/images/2022/10/18/b756b2c5aa6ccb23ec8b7f6f21ae340a.png"> <p class="wb-time">24ч</p> </div> <div class="wb-item"> <img src="https://static.moscow.ovh/images/games/rust/icons/rifle.lr300.png"> <p class="wb-time">24ч</p> </div> <div class="wb-item"> <img src="https://static.moscow.ovh/images/games/rust/icons/rifle.l96.png"> <p class="wb-time">24ч</p> </div> <div class="wb-item"> <img src="https://static.moscow.ovh/images/games/rust/icons/grenade.beancan.png"> <p class="wb-time">24ч</p> </div> <div class="wb-item"> <img src="https://static.moscow.ovh/images/games/rust/icons/explosive.satchel.png"> <p class="wb-time">24ч</p> </div> <div class="wb-item"> <img src="https://pic.moscow.ovh/images/2023/06/03/171f540248b3945c62996be9b98df284.png"> <p class="wb-time">24ч</p> </div> <div class="wb-item"> <img src="https://static.moscow.ovh/images/games/rust/icons/ammo.grenadelauncher.he.png"> <p class="wb-time">24ч</p> </div> <div class="wb-item"> <img src="https://static.moscow.ovh/images/games/rust/icons/lmg.m249.png"> <p class="wb-time">28ч</p> </div> <div class="wb-item"> <img src="https://static.moscow.ovh/images/games/rust/icons/ammo.rifle.explosive.png"> <p class="wb-time">28ч</p> </div> <div class="wb-item"> <img src="https://static.moscow.ovh/images/games/rust/icons/explosive.timed.png"> <p class="wb-time">28ч</p> </div> <div class="wb-item"> <img src="https://static.moscow.ovh/images/games/rust/icons/rocket.launcher.png"> <p class="wb-time">28ч</p> </div> <div class="wb-item"> <img src="https://pic.moscow.ovh/images/2022/10/18/7b869410e93ad96eb9ea6fe9476c4620.png"> <p class="wb-time">28ч</p> </div> </div> </div> </div>'
};

function Open(el, usefade=true, zind=false) {
    closepage();
    var div1 = document.createElement("div");
    div1.id = 'Modal';
    var div2 = document.createElement("div");
    div2.className = 'modal modal-xacku fade';
    if (!usefade)
        div2.classList.add("show");
    div2.style = 'display: block; z-index: 1100;';
    div2.id = 'closer';
    //div2.onclick = closepage;
    var div3 = document.createElement("div");
    div3.className = "modal-dialog modal-lg";
    if (el == "block")
        div3.className += " modal-lg-block"
    var div4 = document.createElement("div");
    div4.className = "modal-content";
    var div5 = document.createElement("div");
    div5.className = "modal-header";
    div5.innerHTML = '<h4 class="modal-title">' + curcontent[el].xhead + '</h4>';
    var div6 = document.createElement("div");
    div6.className = "modal-body";
    div6.innerHTML = curcontent[el].xcon;
    var div7 = document.createElement("div");
    div7.className = "modal-footer";
    div7.innerHTML = '<button type="button" class="btn btn-secondary" id="closer" onclick="closepage()">Закрыть</button>';
    var div8 = document.createElement("div");
    div8.className = "modal-backdrop fade show";
    div8.style = 'z-index: 1050;';

    div1.appendChild(div2);
    //div2.appendChild(div2_5);
    div2.appendChild(div3);
    div3.appendChild(div4);
    div4.appendChild(div5);
    div4.appendChild(div6);
    div4.appendChild(div7);
    div1.appendChild(div8);
    if (usefade)
        setTimeout(()=>div2.classList.add("show"), 0);

    var body = document.getElementsByTagName('body')[0];
    body.appendChild(div1);
    body.className = "modal-open";
}

function closepage() {
    var Modal = document.getElementById('Modal');
    var Modalparent = null;
    try {
        Modalparent = ((Modal.parentElement) ? Modal.parentElement : ((Modal.parentNode) ? Modal.parentNode : null));
    } catch (error) {
        return;
    }
    if (Modalparent == null)
        return;
    Modalparent.removeChild(Modal);
    document.getElementsByTagName('body')[0].className = "";
}

function search(e) {
    if (e.offsetX < 1) {
        console.log(e.target.innerText + ' | ' + e.clientX);
        if (document.selection) {
            // IE
            var range = document.body.createTextRange();
            range.moveToElementText(e.target);
            range.select();
        } else if (window.getSelection) {
            var range = document.createRange();
            range.selectNode(e.target);
            window.getSelection().removeAllRanges();
            window.getSelection().addRange(range);
        }
        try {
            var successful = document.execCommand('copy');
            var msg = successful ? 'successful' : 'unsuccessful';
            console.log('успешно скопирован, нажмите CTRL + V чтобы вставить в консоль F1 в игре.');
        } catch (err) {
            console.log('Oops, unable to copy' + err);
        }
    }
}

window.onload = function() {
    document.body.onclick = function(event) {
        if (event.target.id == 'closer')
            closepage();
        if (event.target.className == 'MsoCommand')
            search(event);
    }

    for (var i = 0; i < BlockListArrays.length; i++) {
        curcontent["block"].xcon += '<div class="block_by_category block_category_' + (i + 1) + '">';
        for (var b = 0; b < BlockListArrays[i].length; b++) {
            if (b == 5 && i == 4)
                curcontent["block"].xcon += '<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/metal.facemask.png">\
										<div class="kit-item__quantity block-lvl-' + (i + 1) + '"></div></div></div>';
            else
                curcontent["block"].xcon += '<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/' + BlockListArrays[i][b] + '.png">\
										<div class="kit-item__quantity block-lvl-' + (i + 1) + '"></div></div></div>';
        }
        curcontent["block"].xcon += '</div>';
    }
    curcontent["block"].xcon += '</div>\<br></i></div>';
}

var CustomerSteamId = "0";
var OvhPayUrl = "";

var now = new Date();

function freekassaHandler(e) {
    qiwiFormHandle();
    var inputval = document.getElementById('fk-donation-amount').value;
    var inputfloat = parseFloat(inputval);
    if (inputfloat < 50 || inputfloat > 15000 || isNaN(inputfloat)) {
        document.getElementById('fk-error-box').innerText = "От 50 до 15000 RUB";
        e.preventDefault();
        return false;
    } else {
        document.getElementById('fk-error-box').innerText = "";
    }
    document.getElementById('fk-donation-amount').value = inputfloat;
    //document.getElementById('enot-donation-id').value = CustomerSteamId;
    //document.getElementById('fk-donation-sign').value = MD5('37757:' + inputfloat + ':bloodsec:' + document.getElementById('enot-donation-id').value);
    if (CustomerSteamId == "0" || CustomerSteamId == "") {
        document.getElementById('fk-error-box').innerText = "Пожалуйста авторизуйтесь в магазине!";
        e.preventDefault();
        return false;
    }

    return null;
}

function qiwiHandler(e) {
    //e.preventDefault();
    var inputval = document.getElementById('qiwi-donation-amount').value;
    var inputfloat = parseFloat(inputval);
    if (inputfloat < 300 || inputfloat > 15000 || isNaN(inputfloat)) {
        document.getElementById('qiwi-error-box').innerText = "От 300 до 15000 RUB";
        e.preventDefault();
        return false;
    } else {
        document.getElementById('qiwi-error-box').innerText = "";
    }
    document.getElementById('qiwi-donation-amount').value = inputfloat;
    if (CustomerSteamId == "0" || CustomerSteamId == "") {
        document.getElementById('qiwi-error-box').innerText = "Пожалуйста авторизуйтесь в магазине!";
        e.preventDefault();
        return false;
    }
    qiwiFormHandle();

    return null;
}

function centHandler(e) {
    qiwiFormHandle();
    var inputval = document.getElementById('cent-donation-amount').value;
    var inputfloat = parseFloat(inputval);
    if (inputfloat < 600 || inputfloat > 10000 || isNaN(inputfloat)) {
        document.getElementById('cent-error-box').innerText = "От 600 до 10000 RUB";
        e.preventDefault();
        return false;
    } else {
        document.getElementById('cent-error-box').innerText = "";
    }
    document.getElementById('cent-donation-amount').value = inputfloat;
    if (CustomerSteamId == "0" || CustomerSteamId == "") {
        document.getElementById('cent-error-box').innerText = "Пожалуйста авторизуйтесь в магазине!";
        e.preventDefault();
        return false;
    }

    return null;
}

function qiwiFormHandle() {
    var qiwi_comment = document.getElementById('qiwi-donation-comment');
    qiwi_comment.value = CustomerSteamId;
    document.getElementById('qiwi-donation-account').value = CustomerSteamId;
    document.getElementById('qiwi-inp-other').setAttribute("href", OvhPayUrl);
    document.getElementById('qiwi-inp-other2').setAttribute("href", OvhPayUrl);
    document.getElementById('qiwi-successUrl').value = 'https://' + window.location.hostname;
    var b2 = document.getElementById('cent-donation-account');
    if (b2 != null)
        b2.value = CustomerSteamId;
    var a3 = document.getElementById('fk-donation-comment');
    if (a3 != null)
        a3.value = CustomerSteamId;
    var a4 = document.getElementById('fk-donation-account');
    if (a4 != null)
        a4.value = CustomerSteamId;
}

function OvhUrlOverrite() {
    var slides = document.getElementsByClassName("nav-link");
    for (var i = 0; i < slides.length; i++) {
        var elelink = slides.item(i);
        var urlelelink = elelink.getAttribute("href");
        if (urlelelink.startsWith('https://pay.moscow.ovh')) {
            OvhPayUrl = urlelelink;
            console.log(OvhPayUrl);
            elelink.setAttribute("href", "javascript:;");
            elelink.setAttribute("onclick", "OpenOplata()");
        }
    }
}

function SkinPayment() {
    alert("Данный метод пополнения отключен на неопределённый срок.");
}

setInterval(()=>{
    OvhUrlOverrite();
}
, 1000)

function obtainShopSteamId() {
    if (CustomerSteamId != "0" && CustomerSteamId != "") {
        return;
    }
    var xmlHttp = new XMLHttpRequest();

    if (xmlHttp != null) {
        xmlHttp.open("GET", "/api/index.php?modules=users&action=getData", true);
        xmlHttp.send(null);
    }
    xmlHttp.onload = function(gjson) {
        var gjson = JSON.parse(xmlHttp.response);
        console.log(gjson);
        var preSteam = gjson.data.steamID;
        OvhPayUrl = "https://pay.moscow.ovh/?" + gjson.data.pay;
        if (preSteam > 76561100000000000 || !isNaN(preSteam)) {
            CustomerSteamId = preSteam.toString();
            //qiwiFormHandle();
            OvhUrlOverrite();
        } else {
            console.log("error obtainShopSteamId! " + gjson);
        }
    }

}

function OpenOplata() {
    Open('Oplata');
    qiwiFormHandle();
    setTimeout(()=>function() {
        try {
            qiwiFormHandle();
        } catch (e) {
            console.log('element not found ' + e);
        }
    }
    , 3000);
}

function getCookie(name="_id") {
    let matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));
    return matches ? decodeURIComponent(matches[1]) : "";
}

var MD5 = function(d) {
    result = M(V(Y(X(d), 8 * d.length)));
    return result.toLowerCase()
};
function M(d) {
    for (var _, m = "0123456789ABCDEF", f = "", r = 0; r < d.length; r++)
        _ = d.charCodeAt(r),
        f += m.charAt(_ >>> 4 & 15) + m.charAt(15 & _);
    return f
}
function X(d) {
    for (var _ = Array(d.length >> 2), m = 0; m < _.length; m++)
        _[m] = 0;
    for (m = 0; m < 8 * d.length; m += 8)
        _[m >> 5] |= (255 & d.charCodeAt(m / 8)) << m % 32;
    return _
}
function V(d) {
    for (var _ = "", m = 0; m < 32 * d.length; m += 8)
        _ += String.fromCharCode(d[m >> 5] >>> m % 32 & 255);
    return _
}
function Y(d, _) {
    d[_ >> 5] |= 128 << _ % 32,
    d[14 + (_ + 64 >>> 9 << 4)] = _;
    for (var m = 1732584193, f = -271733879, r = -1732584194, i = 271733878, n = 0; n < d.length; n += 16) {
        var h = m
          , t = f
          , g = r
          , e = i;
        f = md5_ii(f = md5_ii(f = md5_ii(f = md5_ii(f = md5_hh(f = md5_hh(f = md5_hh(f = md5_hh(f = md5_gg(f = md5_gg(f = md5_gg(f = md5_gg(f = md5_ff(f = md5_ff(f = md5_ff(f = md5_ff(f, r = md5_ff(r, i = md5_ff(i, m = md5_ff(m, f, r, i, d[n + 0], 7, -680876936), f, r, d[n + 1], 12, -389564586), m, f, d[n + 2], 17, 606105819), i, m, d[n + 3], 22, -1044525330), r = md5_ff(r, i = md5_ff(i, m = md5_ff(m, f, r, i, d[n + 4], 7, -176418897), f, r, d[n + 5], 12, 1200080426), m, f, d[n + 6], 17, -1473231341), i, m, d[n + 7], 22, -45705983), r = md5_ff(r, i = md5_ff(i, m = md5_ff(m, f, r, i, d[n + 8], 7, 1770035416), f, r, d[n + 9], 12, -1958414417), m, f, d[n + 10], 17, -42063), i, m, d[n + 11], 22, -1990404162), r = md5_ff(r, i = md5_ff(i, m = md5_ff(m, f, r, i, d[n + 12], 7, 1804603682), f, r, d[n + 13], 12, -40341101), m, f, d[n + 14], 17, -1502002290), i, m, d[n + 15], 22, 1236535329), r = md5_gg(r, i = md5_gg(i, m = md5_gg(m, f, r, i, d[n + 1], 5, -165796510), f, r, d[n + 6], 9, -1069501632), m, f, d[n + 11], 14, 643717713), i, m, d[n + 0], 20, -373897302), r = md5_gg(r, i = md5_gg(i, m = md5_gg(m, f, r, i, d[n + 5], 5, -701558691), f, r, d[n + 10], 9, 38016083), m, f, d[n + 15], 14, -660478335), i, m, d[n + 4], 20, -405537848), r = md5_gg(r, i = md5_gg(i, m = md5_gg(m, f, r, i, d[n + 9], 5, 568446438), f, r, d[n + 14], 9, -1019803690), m, f, d[n + 3], 14, -187363961), i, m, d[n + 8], 20, 1163531501), r = md5_gg(r, i = md5_gg(i, m = md5_gg(m, f, r, i, d[n + 13], 5, -1444681467), f, r, d[n + 2], 9, -51403784), m, f, d[n + 7], 14, 1735328473), i, m, d[n + 12], 20, -1926607734), r = md5_hh(r, i = md5_hh(i, m = md5_hh(m, f, r, i, d[n + 5], 4, -378558), f, r, d[n + 8], 11, -2022574463), m, f, d[n + 11], 16, 1839030562), i, m, d[n + 14], 23, -35309556), r = md5_hh(r, i = md5_hh(i, m = md5_hh(m, f, r, i, d[n + 1], 4, -1530992060), f, r, d[n + 4], 11, 1272893353), m, f, d[n + 7], 16, -155497632), i, m, d[n + 10], 23, -1094730640), r = md5_hh(r, i = md5_hh(i, m = md5_hh(m, f, r, i, d[n + 13], 4, 681279174), f, r, d[n + 0], 11, -358537222), m, f, d[n + 3], 16, -722521979), i, m, d[n + 6], 23, 76029189), r = md5_hh(r, i = md5_hh(i, m = md5_hh(m, f, r, i, d[n + 9], 4, -640364487), f, r, d[n + 12], 11, -421815835), m, f, d[n + 15], 16, 530742520), i, m, d[n + 2], 23, -995338651), r = md5_ii(r, i = md5_ii(i, m = md5_ii(m, f, r, i, d[n + 0], 6, -198630844), f, r, d[n + 7], 10, 1126891415), m, f, d[n + 14], 15, -1416354905), i, m, d[n + 5], 21, -57434055), r = md5_ii(r, i = md5_ii(i, m = md5_ii(m, f, r, i, d[n + 12], 6, 1700485571), f, r, d[n + 3], 10, -1894986606), m, f, d[n + 10], 15, -1051523), i, m, d[n + 1], 21, -2054922799), r = md5_ii(r, i = md5_ii(i, m = md5_ii(m, f, r, i, d[n + 8], 6, 1873313359), f, r, d[n + 15], 10, -30611744), m, f, d[n + 6], 15, -1560198380), i, m, d[n + 13], 21, 1309151649), r = md5_ii(r, i = md5_ii(i, m = md5_ii(m, f, r, i, d[n + 4], 6, -145523070), f, r, d[n + 11], 10, -1120210379), m, f, d[n + 2], 15, 718787259), i, m, d[n + 9], 21, -343485551),
        m = safe_add(m, h),
        f = safe_add(f, t),
        r = safe_add(r, g),
        i = safe_add(i, e)
    }
    return Array(m, f, r, i)
}
function md5_cmn(d, _, m, f, r, i) {
    return safe_add(bit_rol(safe_add(safe_add(_, d), safe_add(f, i)), r), m)
}
function md5_ff(d, _, m, f, r, i, n) {
    return md5_cmn(_ & m | ~_ & f, d, _, r, i, n)
}
function md5_gg(d, _, m, f, r, i, n) {
    return md5_cmn(_ & f | m & ~f, d, _, r, i, n)
}
function md5_hh(d, _, m, f, r, i, n) {
    return md5_cmn(_ ^ m ^ f, d, _, r, i, n)
}
function md5_ii(d, _, m, f, r, i, n) {
    return md5_cmn(m ^ (_ | ~f), d, _, r, i, n)
}
function safe_add(d, _) {
    var m = (65535 & d) + (65535 & _);
    return (d >> 16) + (_ >> 16) + (m >> 16) << 16 | 65535 & m
}
function bit_rol(d, _) {
    return d << _ | d >>> 32 - _
}

var DOMReady = function(a, b, c) {
    b = document,
    c = 'addEventListener';
    b[c] ? b[c]('DOMContentLoaded', a) : window.attachEvent('onload', a)
}
window.addEventListener("load", function() {
    try {
        obtainShopSteamId();
    } catch (e) {
        console.log('element not found ' + e);
    }
});
