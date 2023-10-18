var curcontent = new Array();

curcontent["rules"] = {
	xhead: 'Правила',
	xcon: '<div class="xbox_custom_rules"><ul><p class="MsoNormal"><span>Информация</span></p>\
<p><span class="rules_rule"><i>[1.1]</i></span> - Не знание правил не освобождает Вас от ответственности.</p>\
<p><span class="rules_rule"><i>[1.2]</i></span> - Зайдя на сервер Вы автоматически соглашаетесь со всеми нижеперечисленными пунктами правил.</p>\
<p><span class="rules_rule"><i>[1.3]</i></span> - <b>Если Вы уже были замечены с читами / макросами или использованием просвета на другом сервере / проекте и на вас есть пруфы - мы имеем право забанить Вас без проверки.</b></p>\
<p><span class="rules_rule"><i>[1.4]</i></span> - Администрация сама выбирает наказание для игрока в зависимости от степени нарушения и обстоятельств. Нарушитель может получить как предупреждение, так и перманентный бан (временных блокировок нет). Блокировка выдаётся на всех серверах проекта, например, нарушив правила на серверах KRASNOYARSK RUST — вы получите блокировку на всех действующих серверах проекта.</p>\
<p><span class="rules_rule"><i>[1.5]</i></span> - Администрация не компенсирует игровые ценности, утраченные по причине вашей ошибки, технических проблем на сервере/хостинге, багов игры или контакта с нарушителями.</p>\
<p><span class="rules_rule"><i>[1.6]</i></span> - Администрация не вмешивается во взаимоотношения игроков, за тех с кем вы играете ответственны только Вы, поэтому в случае если игрок вас обманет — ему ничего за это не будет.</p>\
<p><span class="rules_rule"><i>[1.7]</i></span> - Вы несете ответственность за все свои аккаунты. Получив бан на одном аккаунте - Вы получите его и на последующих аккаунтах. То же самое будет если на одном из ваших аккаунтах имеется игровая блокировка (EAC).</p>\
<p><span class="rules_rule"><i>[1.8]</i></span> - Запрещено выдавать себя за Администратора, Модератора или Проверяющего.</p>\
<p class="MsoNormal"><span>Геймплей</span></li></p>\
<p><span class="rules_rule"><i>[2.1]</i></span> - Запрещено использовать/хранить/приобретать/распространять стороннее ПО или любые другие средства, позволяющие получить преимущество над другими игроками.</p>\
<p><span class="rules_rule"><i>[2.2]</i></span> - Запрещено использование услуг читеров.</p>\
<p><span class="rules_rule"><i>[2.3]</i></span> - Запрещено использование багов с целью или без цели получения преимущества над другими игроками. Кбагам относятся и дыры в текстурах.</p>\
<p><span class="rules_rule"><i>[2.4]</i></span> - Запрещено превышать лимит игроков в команде:</p>\
<p><div class="rules_rule_two"><p>× Нельзя устраивать альянсы и перемирия с соседями если в сумме вас больше указанного в названии сервера максимума<p>× Нельзя рейдить/антирейдить или убивать в 2+/3+<p>× Нельзя каким-либо образом кооперироваться с другими игроками если в вашей команде уже максимально возможное количество игроков<p>× Частая смена тиммейтов будет считаться за нарушения правила о лимите, тоже самое касается и игру с другим игроком пока тиммейт стоит афк или не находится рядом<p>× Запрещена смена тиммейта на время, если ваш основной тиммейт продолжит с вами играть<p>× Разрешено сменить напарника, если ваш предыдущий напарник в дальнейшем не будет с вами контактировать</div></p>\
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
</ul><div class="unban" style="background: white; border-radius: 10px; padding: 20px;"><p class="MsoNormal" style="font-weight: bold; margin-bottom: 5px;">Возможность разблокровки</p><span>Через месяц после блокировки можно подать апелляцию, но, только в случае если бан был получен не за читы или макросы. Писать апелляцию нужно в личные сообщения отдельной группы: <a href="https://vk.com/krsappeal">vk.com/krsappeal</a><div class="unbanwarn">⚠ Учтите, блокировки не обсуждаются, поэтому писать в основную группу, в чат дискорда/телеграма или куда-бы то ни было ещё - абсолютно бессмысленно, вне группы для апелляций разблокировку не получить, ни при каких обстоятельствах.<br><br>p.s. Купить разблокировку невозможно.</div></span></div></div></div>'
};
//<p style="text-align: center;"><u>При заходе на наши сервера вы автоматически соглашаетесь с правилами.</u></p>\

curcontent["skins"] = {
	xhead: 'Пополнение скинами напрямую',
	xcon: '<div class="x-spoiler">\
<input class="spoil-button" type="checkbox" tabindex="-1">\
     <div class="spoil-box"><span class="spoil-close fa"></span><span class="spoil-open fa"></span><span class="spoil-head">Что значит пополнение напрямую?</span><br><blockquote class="spoil-Untext">Обычно пополнение скинами происходит через сторонние сервисы (SkinPay или Skins.Cash), но в этом случае игрок который пополняет баланс теряет около ~50% от цены скинов. Мы же хотим предложить вам пополнение баланса скинами практически по ценам с торговой площадки, без каких-либо посредников.</span></blockquote>\
     </div></div>\
<div class="x-spoiler">\
<input class="spoil-button" type="checkbox" tabindex="-1">\
     <div class="spoil-box">\
         <span class="spoil-close fa"></span><span class="spoil-open fa"></span><span class="spoil-head">Ограничения при пополнении напрямую</span><span class="skin-warning"> обязательно прочти</span>\
         <blockquote class="spoil-Untext">\» У вас <b>не должно</b> быть задержки <b>15 дней</b> на обмены<br>» Принимаются скины только из <b>RUST</b>, <b>DOTA 2</b> и <b>CS:GO</b><br>» Если скинов в обмене много - лучше отправлять частями<br>» Баланс будет пополнен только того аккаунта, с которого были отправлены скины<br>» Зачисления <b>происходят</b> в <b>|9:00|12:00|16:00|</b> по МСК</li></ol>\
         </blockquote>\
     </div></div>\
<div class="x-spoiler">\
<input class="spoil-button" type="checkbox" tabindex="-1">\
     <div class="spoil-box"><span class="spoil-close fa"></span><span class="spoil-open fa"></span><span class="spoil-head">Хочу пополнить баланс скинами</span><br>\
	 <blockquote class="spoil-Untext">Чтобы пополнить баланс необходимо перейти на страницу обмена (нажав на кнопку снизу), выбрать скины которыми хотите пополнить, нажать кнопку "Предложить обмен" и подтвердить обмен через мобильное приложение Steam.<div class="btn-skins"><a class="btn-skin" href="https://steamcommunity.com/tradeoffer/new/?partner=337162106&token=OjLIuCLm" target="_blank">Начать обмен</a></blockquote>\
     </div></div><div class="row-skins"><a class="container-user" href="https://vk.com/im?sel=-203320496" target="_blank"><img alt="" src="https://i.imgur.com/Mf5iBn3.jpeg" class="icon-user"><div class="textContainer-user"><span class="name-user">Группа ВК</span><span class="category-user">Для связи</span></div></a><a class="container-user1" href="https://discord.com/invite/MHKxBRbZ8g" target="_blank"><img alt="" src="https://i.imgur.com/GA8l3vU.jpeg" class="icon-user1"><div class="textContainer-user1"><span class="name-user1">Дискорд сервер</span><span class="category-user1">Для связи</span></div></div></a>'
};

curcontent["skipqueue"] = {
	xhead: 'Пропуск очереди (Skip the queue)',
	xcon: '<div class="queue-text"><p><span class="rules_rule">[RU]</span><span> Вход без очереди работает сразу после покупки привилегии (как и написано в её описании), для этого не нужно ничего активировать на сервере, но после входа на сервер - необходимо забрать привилегию из корзины, иначе Вас кикнет. Если привилегия была приобретена пока Вы стояли в очереди - нужно выйти из очереди и подключится к серверу вновь.</p>\
	<span>Если вас не пропускает вне очереди - проверьте с того ли аккаунта Вы авторизировались и приобрели привилегию, а так-же учтите, привилегия работает только на сервере где была забрана из корзины.<p><br><span class="rules_rule">[EN]</span> Skipping the queue works immediately after purchasing the privilege (as it is written in its description), for this you do not need to activate anything on the server, but after entering the server, you need to take the privilege from the basket (/store), otherwise you will be kicked. If the privilege has been acquired, then you have joined the queue - you must exit the queue and reconnect to the server.</p><span>If you are not allowed out of the queue - check with the help of the account you have authorized and received the privilege, and also note that the privilege works only on the server where it was taken from the basket.</div></div>'
};

curcontent["kit-free"] = {
	xhead: 'Стартовые киты',
	xcon: '<div class="store-categories">\
	<button class="btn btn-secondary active">(X10) Стартовые</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-mvp\', false);">(X10) MVP</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-best\', false);">(X10) BEST</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-fast\', false);">(X10) FAST</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-boost\', false);">(X10) BOOST</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-free1\', false);">X5•Стартовые</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-mvp1\', false);">X5•MVP</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-best1\', false);">X5•BEST</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-fast1\', false);">X5•FAST</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-boost1\', false);">X5•BOOST</button>\
<div class="xbox_custom_kits" >\
<div class="serverheader">Кит "Еда" - <span>Откат 10М</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/black.raspberries.png">\
<div class="kit-item__quantity">x3</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/cactusflesh.png">\
<div class="kit-item__quantity">x3</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/pumpkin.png">\
<div class="kit-item__quantity">x4</div></div></div>\
</div></div>\
<div class="xbox_custom_kits" >\
<div class="serverheader">Кит "Дом" - <span>Откат 24Ч</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/stones.png">\
<div class="kit-item__quantity">x18000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/metal.fragments.png">\
<div class="kit-item__quantity">x5000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/wood.png">\
<div class="kit-item__quantity">x10000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/cupboard.tool.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/lock.code.png">\
<div class="kit-item__quantity">x2</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/door.hinged.metal.png">\
<div class="kit-item__quantity">x2</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/furnace.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/toolgun.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/building.planner.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/sleepingbag.png">\
<div class="kit-item__quantity">x1</div></div></div>\
</div></div>\
<div class="serverheader">Кит "Инструменты" - <span>Откат 15М</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/concretepickaxe.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/concretehatchet.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/torch.torch.skull.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/arrow.hv.png">\
<div class="kit-item__quantity">40%</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/bow.hunting.png">\
<div class="kit-item__quantity">40%</div></div></div>\
</div></div></div>'
};

curcontent["kit-mvp"] = {
	xhead: 'Платные киты',
	xcon: '<div class="store-categories">\
	<button class="btn btn-secondary" onclick="Open(\'kit-free\', false);">(X10) Стартовые</button>\
	<button class="btn btn-secondary active">(X10) MVP</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-best\', false);">(X10) BEST</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-fast\', false);">(X10) FAST</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-boost\', false);">(X10) BOOST</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-free1\', false);">X5•Стартовые</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-mvp1\', false);">X5•MVP</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-best1\', false);">X5•BEST</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-fast1\', false);">X5•FAST</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-boost1\', false);">X5•BOOST</button>\
	<div class="xbox_custom_kits" ><div class="serverheader">Кит "Ресурсы" - <span>Откат 3Д</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/wood.png">\
<div class="kit-item__quantity">x80000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/stones.png">\
<div class="kit-item__quantity">x95000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/metal.refined.png">\
<div class="kit-item__quantity">x2500</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/metal.fragments.png">\
<div class="kit-item__quantity">x80000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/gunpowder.png">\
<div class="kit-item__quantity">x20000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/lowgradefuel.png">\
<div class="kit-item__quantity">x3000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/cloth.png">\
<div class="kit-item__quantity">x3000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/leather.png">\
<div class="kit-item__quantity">x1500</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/metalspring.png">\
<div class="kit-item__quantity">x100</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/techparts.png">\
<div class="kit-item__quantity">x95</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/roadsigns.png">\
<div class="kit-item__quantity">x100</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/semibody.png">\
<div class="kit-item__quantity">x95</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/smgbody.png">\
<div class="kit-item__quantity">x95</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/metalblade.png">\
<div class="kit-item__quantity">x100</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/metalpipe.png">\
<div class="kit-item__quantity">x100</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/riflebody.png">\
<div class="kit-item__quantity">x95</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/gears.png">\
<div class="kit-item__quantity">x100</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/sewingkit.png">\
<div class="kit-item__quantity">x95</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/workbench3.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://pic.moscow.ovh/images/2023/05/08/614b43e9f1fe13e81a73002f4ea43b3c.png">\
<div class="kit-item__quantity">x8</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://pic.moscow.ovh/images/2023/05/08/e17e11ec3fc7c8b9d79366d10325a36b.png">\
<div class="kit-item__quantity">x8</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/QZ0noWp.png">\
<div class="kit-item__quantity">75%</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/jRBvIL7.png">\
<div class="kit-item__quantity">75%</div></div></div>\
</div></div></div>\
<div class="xbox_custom_kits" ><div class="serverheader">Кит "Снаряжение" - <span>Откат 2Ч</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/metal.facemask.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/pants.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/metal.plate.torso.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/roadsign.kilt.png">\
<div class="kit-item__quantity">x95</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/roadsign.gloves.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/hoodie.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/shoes.boots.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/weapon.mod.holosight.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/weapon.mod.lasersight.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/weapon.mod.small.scope.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/weapon.mod.muzzleboost.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/weapon.mod.simplesight.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/weapon.mod.flashlight.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/ammo.rifle.png">\
<div class="kit-item__quantity">x1200</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/rifle.lr300.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/rifle.l96.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/rifle.ak.ice.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/syringe.medical.png">\
<div class="kit-item__quantity">x10</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/largemedkit.png">\
<div class="kit-item__quantity">x10</div></div></div>\
</div></div></div>\
<div class="xbox_custom_kits" ><div class="serverheader">Кит "BOOM" - <span>Откат 3Д</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/ammo.rocket.basic.png">\
<div class="kit-item__quantity">x30</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/ammo.rocket.hv.png">\
<div class="kit-item__quantity">x45</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/ammo.rifle.explosive.png">\
<div class="kit-item__quantity">x500</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/lmg.m249.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/rocket.launcher.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/explosive.timed.png">\
<div class="kit-item__quantity">x15</div></div></div>\
</div></div></div>'
};

curcontent["kit-best"] = {
	xhead: 'Платные киты',
	xcon: '<div class="store-categories">\
	<button class="btn btn-secondary" onclick="Open(\'kit-free\', false);">(X10) Стартовые</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-mvp\', false);">(X10) MVP</button>\
	<button class="btn btn-secondary active">(X10) BEST</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-fast\', false);">(X10) FAST</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-boost\', false);">(X10) BOOST</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-free1\', false);">X5•Стартовые</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-mvp1\', false);">X5•MVP</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-best1\', false);">X5•BEST</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-fast1\', false);">X5•FAST</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-boost1\', false);">X5•BOOST</button>\
	<div class="xbox_custom_kits" ><div class="serverheader">Кит "Ресурсы" - <span>Откат 3Д</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/wood.png">\
<div class="kit-item__quantity">x43000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/stones.png">\
<div class="kit-item__quantity">x55000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/metal.refined.png">\
<div class="kit-item__quantity">x1300</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/metal.fragments.png">\
<div class="kit-item__quantity">x28000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/gunpowder.png">\
<div class="kit-item__quantity">x10000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/charcoal.png">\
<div class="kit-item__quantity">x16000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/lowgradefuel.png">\
<div class="kit-item__quantity">x2000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/cloth.png">\
<div class="kit-item__quantity">x1700</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/leather.png">\
<div class="kit-item__quantity">x1000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/sulfur.png">\
<div class="kit-item__quantity">x13000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/metalspring.png">\
<div class="kit-item__quantity">x70</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/techparts.png">\
<div class="kit-item__quantity">x65</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/roadsigns.png">\
<div class="kit-item__quantity">x70</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/semibody.png">\
<div class="kit-item__quantity">x70</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/smgbody.png">\
<div class="kit-item__quantity">x70</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/metalblade.png">\
<div class="kit-item__quantity">x80</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/metalpipe.png">\
<div class="kit-item__quantity">x80</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/riflebody.png">\
<div class="kit-item__quantity">x70</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/gears.png">\
<div class="kit-item__quantity">x80</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/sewingkit.png">\
<div class="kit-item__quantity">x70</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/workbench2.png">\
<div class="kit-item__quantity">x1</div></div></div>\
</div></div></div>\
<div class="xbox_custom_kits" ><div class="serverheader">Кит "Снаряжение" - <span>Откат 4Ч</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/coffeecan.helmet.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/metal.plate.torso.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/hoodie.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/pants.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/roadsign.kilt.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/ammo.rifle.png">\
<div class="kit-item__quantity">x500</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/weapon.mod.small.scope.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/weapon.mod.holosight.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/weapon.mod.lasersight.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/weapon.mod.8x.scope.png">\
<div class="kit-item__quantity">50%</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/rifle.ak.ice.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/largemedkit.png">\
<div class="kit-item__quantity">x6</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/syringe.medical.png">\
<div class="kit-item__quantity">x14</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/rifle.bolt.png">\
<div class="kit-item__quantity">x1</div></div></div>\
</div></div></div>\
<div class="xbox_custom_kits" ><div class="serverheader">Кит "Чайная трапиза" - <span>Откат 24ч</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://pic.moscow.ovh/images/2023/05/08/614b43e9f1fe13e81a73002f4ea43b3c.png">\
<div class="kit-item__quantity">x6</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://pic.moscow.ovh/images/2023/05/08/e17e11ec3fc7c8b9d79366d10325a36b.png">\
<div class="kit-item__quantity">x6</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/QZ0noWp.png">\
<div class="kit-item__quantity">50%</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/jRBvIL7.png">\
<div class="kit-item__quantity">50%</div></div></div>\
</div></div></div>'
};


curcontent["kit-fast"] = {
	xhead: 'Платные киты',
	xcon: '<div class="store-categories">\
	<button class="btn btn-secondary" onclick="Open(\'kit-free\', false);">(X10) Стартовые</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-mvp\', false);">(X10) MVP</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-best\', false);">(X10) BEST</button>\
	<button class="btn btn-secondary active">(X10) FAST</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-boost\', false);">(X10) BOOST</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-free1\', false);">X5•Стартовые</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-mvp1\', false);">X5•MVP</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-best1\', false);">X5•BEST</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-fast1\', false);">X5•FAST</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-boost1\', false);">X5•BOOST</button>\
	<div class="xbox_custom_kits" ><div class="serverheader">Кит "FAST ОРУЖИЕ" - <span>Откат 24ч</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/pants.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/shoes.boots.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/hoodie.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/roadsign.jacket.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/coffeecan.helmet.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/roadsign.kilt.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/ammo.rifle.png">\
<div class="kit-item__quantity">x500</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/rifle.ak.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/largemedkit.png">\
<div class="kit-item__quantity">x15</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/syringe.medical.png">\
<div class="kit-item__quantity">x30</div></div></div>\
</div></div></div>\
<div class="xbox_custom_kits" ><div class="serverheader">Кит "FAST КОМПОНЕНТЫ" - <span>Откат 72ч</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/metalspring.png">\
<div class="kit-item__quantity">x40</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/techparts.png">\
<div class="kit-item__quantity">x50</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/roadsigns.png">\
<div class="kit-item__quantity">x55</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/semibody.png">\
<div class="kit-item__quantity">x50</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/smgbody.png">\
<div class="kit-item__quantity">x50</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/metalblade.png">\
<div class="kit-item__quantity">x50</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/metalpipe.png">\
<div class="kit-item__quantity">x55</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/gears.png">\
<div class="kit-item__quantity">x50</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/sewingkit.png">\
<div class="kit-item__quantity">x45</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/workbench1.png">\
<div class="kit-item__quantity">x1</div></div></div>\
</div></div></div>\
<div class="xbox_custom_kits" ><div class="serverheader">Кит "FAST РЕСУРСЫ" - <span>Откат 72ч</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/wood.png">\
<div class="kit-item__quantity">x60000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/stones.png">\
<div class="kit-item__quantity">x40000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/metal.refined.png">\
<div class="kit-item__quantity">x1500</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/metal.fragments.png">\
<div class="kit-item__quantity">x30000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/gunpowder.png">\
<div class="kit-item__quantity">x5000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/charcoal.png">\
<div class="kit-item__quantity">x20000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/lowgradefuel.png">\
<div class="kit-item__quantity">x1000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/cloth.png">\
<div class="kit-item__quantity">x1500</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/leather.png">\
<div class="kit-item__quantity">x1000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/sulfur.png">\
<div class="kit-item__quantity">x10000</div></div></div>\
</div></div></div>'
};


curcontent["kit-boost"] = {
	xhead: 'Платные киты',
	xcon: '<div class="store-categories">\
	<button class="btn btn-secondary" onclick="Open(\'kit-free\', false);">(X10) Стартовые</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-mvp\', false);">(X10) MVP</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-best\', false);">(X10) BEST</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-fast\', false);">(X10) FAST</button>\
	<button class="btn btn-secondary active">(X10) BOOST</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-free1\', false);">X5•Стартовые</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-mvp1\', false);">X5•MVP</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-best1\', false);">X5•BEST</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-fast1\', false);">X5•FAST</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-boost1\', false);">X5•BOOST</button>\
	<div class="xbox_custom_kits" ><div class="serverheader">Кит "BOOST ОРУЖИЕ" - <span>Откат 6ч</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.ibb.co/56pXn9b/hazmat.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/smg.thompson.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/ammo.pistol.png">\
<div class="kit-item__quantity">x250</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/syringe.medical.png">\
<div class="kit-item__quantity">x15</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/blueberries.png">\
<div class="kit-item__quantity">x10</div></div></div>\
</div></div></div>'
};

curcontent["kit-free1"] = {
	xhead: 'Стартовые киты',
	xcon: '<div class="store-categories">\
	<button class="btn btn-secondary" onclick="Open(\'kit-free\', false);">(X10) Стартовые</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-mvp\', false);">(X10) MVP</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-best\', false);">(X10) BEST</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-fast\', false);">(X10) FAST</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-boost\', false);">(X10) BOOST</button>\
	<button class="btn btn-secondary active">X5•Стартовые</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-mvp1\', false);">X5•MVP</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-best1\', false);">X5•BEST</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-fast1\', false);">X5•FAST</button>\
    <button class="btn btn-secondary" onclick="Open(\'kit-boost1\', false);">X5•BOOST</button>\
	<div class="xbox_custom_kits" >\
<div class="serverheader">Кит "Стартовый" - <span>Откат 15м</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/stone.pickaxe.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/stonehatchet.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/knife.butcher.png">\
<div class="kit-item__quantity">x1</div></div></div>\
</div></div>\
<div class="xbox_custom_kits" >\
<div class="serverheader">Кит "ЕДА" - <span>Откат 10м</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/black.raspberries.png">\
<div class="kit-item__quantity">x8</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/chicken.cooked.png">\
<div class="kit-item__quantity">x6</div></div></div>\
</div></div>\
<div class="xbox_custom_kits" >\
<div class="serverheader">Кит "Дом" - <span>Откат 12ч</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/stones.png">\
<div class="kit-item__quantity">x13000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/metal.fragments.png">\
<div class="kit-item__quantity">x2500</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/wood.png">\
<div class="kit-item__quantity">x4500</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/door.hinged.metal.png">\
<div class="kit-item__quantity">x2</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/lock.code.png">\
<div class="kit-item__quantity">x2</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/cupboard.tool.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/hammer.png">\
<div class="kit-item__quantity">x1</div></div></div>\
</div></div>\
<div class="serverheader">Кит за "#krsrust" в нике - <span>Откат 48ч</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.ibb.co/56pXn9b/hazmat.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/pistol.revolver.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/ammo.pistol.png">\
<div class="kit-item__quantity">x250</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/syringe.medical.png">\
<div class="kit-item__quantity">x10</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/largemedkit.png">\
<div class="kit-item__quantity">x7</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/jackhammer.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/chainsaw.png">\
<div class="kit-item__quantity">x1</div></div></div>\
</div></div></div>'
};

curcontent["kit-mvp1"] = {
	xhead: 'Платные киты',
	xcon: '<div class="store-categories">\
	<button class="btn btn-secondary" onclick="Open(\'kit-free\', false);">(X10) Стартовые</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-mvp\', false);">(X10) MVP</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-best\', false);">(X10) BEST</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-fast\', false);">(X10) FAST</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-boost\', false);">(X10) BOOST</button>\</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-free1\', false);">X5•Стартовые</button>\
	<button class="btn btn-secondary active">X5•MVP</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-best1\', false);">X5•BEST</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-fast1\', false);">X5•FAST</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-boost1\', false);">X5•BOOST</button>\
	<div class="xbox_custom_kits" ><div class="serverheader">X5|Кит "MVP ОРУЖИЕ" - <span>Откат 2ч</span></div>\
	<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/pants.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/shoes.boots.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/hoodie.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/metal.plate.torso.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/metal.facemask.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/roadsign.kilt.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/ammo.rifle.png">\
<div class="kit-item__quantity">x700</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/rifle.ak.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/rifle.l96.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/largemedkit.png">\
<div class="kit-item__quantity">x15</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/syringe.medical.png">\
<div class="kit-item__quantity">x25</div></div></div>\
</div></div></div>\
<div class="xbox_custom_kits" ><div class="serverheader">X5|Кит "MVP КОМПОНЕНТЫ" - <span>Откат 72ч</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/metalspring.png">\
<div class="kit-item__quantity">x70</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/techparts.png">\
<div class="kit-item__quantity">x75</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/roadsigns.png">\
<div class="kit-item__quantity">x70</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/semibody.png">\
<div class="kit-item__quantity">x75</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/smgbody.png">\
<div class="kit-item__quantity">x70</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/metalblade.png">\
<div class="kit-item__quantity">x80</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/metalpipe.png">\
<div class="kit-item__quantity">x80</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/riflebody.png">\
<div class="kit-item__quantity">x75</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/gears.png">\
<div class="kit-item__quantity">x80</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/sewingkit.png">\
<div class="kit-item__quantity">x75</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/workbench3.png">\
<div class="kit-item__quantity">x1</div></div></div>\
</div></div></div>\
<div class="xbox_custom_kits" ><div class="serverheader">X5|Кит "MVP РЕСУРСЫ" - <span>Откат 48ч</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/wood.png">\
<div class="kit-item__quantity">x50000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/stones.png">\
<div class="kit-item__quantity">x65000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/metal.refined.png">\
<div class="kit-item__quantity">x1000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/metal.fragments.png">\
<div class="kit-item__quantity">x30000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/gunpowder.png">\
<div class="kit-item__quantity">x10000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/lowgradefuel.png">\
<div class="kit-item__quantity">x2200</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/cloth.png">\
<div class="kit-item__quantity">x2000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/leather.png">\
<div class="kit-item__quantity">x1000</div></div></div>\
</div></div></div>\
<div class="xbox_custom_kits" ><div class="serverheader">X5|Кит "MVP СПЕЦ" - <span>РАЗ В ВАЙП</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/lmg.m249.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/ammo.rifle.incendiary.png">\
<div class="kit-item__quantity">x500</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/rocket.launcher.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/ammo.rocket.basic.png">\
<div class="kit-item__quantity">x25</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/ammo.rocket.hv.png">\
<div class="kit-item__quantity">x30</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/explosive.timed.png">\
<div class="kit-item__quantity">x10</div></div></div>\
</div></div></div>'
};

curcontent["kit-best1"] = {
	xhead: 'Платные киты',
	xcon: '<div class="store-categories">\
	<button class="btn btn-secondary" onclick="Open(\'kit-free\', false);">(X10) Стартовые</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-mvp\', false);">(X10) MVP</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-best\', false);">(X10) BEST</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-fast\', false);">(X10) FAST</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-boost\', false);">(X10) BOOST</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-free1\', false);">X5•Стартовые</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-mvp1\', false);">X5•MVP</button>\
	<button class="btn btn-secondary active">X5•BEST</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-fast1\', false);">X5•FAST</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-boost1\', false);">X5•BOOST</button>\
	<div class="xbox_custom_kits" ><div class="serverheader">X5|Кит "BEST ОРУЖИЕ" - <span>Откат 8ч</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/pants.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/shoes.boots.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/hoodie.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/metal.plate.torso.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/coffeecan.helmet.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/roadsign.kilt.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/ammo.rifle.png">\
<div class="kit-item__quantity">x400</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/rifle.ak.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/rifle.bolt.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/largemedkit.png">\
<div class="kit-item__quantity">x11</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/syringe.medical.png">\
<div class="kit-item__quantity">x20</div></div></div>\
</div></div></div>\
<div class="xbox_custom_kits" ><div class="serverheader">X5|Кит "BEST КОМПОНЕНТЫ" - <span>Откат 72ч</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/metalspring.png">\
<div class="kit-item__quantity">x60</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/techparts.png">\
<div class="kit-item__quantity">x60</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/roadsigns.png">\
<div class="kit-item__quantity">x65</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/semibody.png">\
<div class="kit-item__quantity">x60</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/smgbody.png">\
<div class="kit-item__quantity">x60</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/metalblade.png">\
<div class="kit-item__quantity">x65</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/metalpipe.png">\
<div class="kit-item__quantity">x65</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/riflebody.png">\
<div class="kit-item__quantity">x60</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/gears.png">\
<div class="kit-item__quantity">x65</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/sewingkit.png">\
<div class="kit-item__quantity">x60</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/workbench2.png">\
<div class="kit-item__quantity">x1</div></div></div>\
</div></div></div>\
<div class="xbox_custom_kits" ><div class="serverheader">X5|Кит "BEST РЕСУРСЫ" - <span>Откат 72ч</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/wood.png">\
<div class="kit-item__quantity">x33000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/stones.png">\
<div class="kit-item__quantity">x40000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/metal.refined.png">\
<div class="kit-item__quantity">x800</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/metal.fragments.png">\
<div class="kit-item__quantity">x17000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/gunpowder.png">\
<div class="kit-item__quantity">x5000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/charcoal.png">\
<div class="kit-item__quantity">x13000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/lowgradefuel.png">\
<div class="kit-item__quantity">x1600</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/cloth.png">\
<div class="kit-item__quantity">x1100</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/leather.png">\
<div class="kit-item__quantity">x550</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/sulfur.png">\
<div class="kit-item__quantity">x9000</div></div></div>\
</div></div></div>\
<div class="xbox_custom_kits" ><div class="serverheader">Кит "Чайная трапиза" - <span>Откат 24ч</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/oretea.advanced.png">\
<div class="kit-item__quantity">x2</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/scraptea.advanced.png">\
<div class="kit-item__quantity">x2</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/woodtea.advanced.png">\
<div class="kit-item__quantity">x2</div></div></div>\
</div></div></div>'
};


curcontent["kit-fast1"] = {
	xhead: 'Платные киты',
	xcon: '<div class="store-categories">\
	<button class="btn btn-secondary" onclick="Open(\'kit-free\', false);">(X10) Стартовые</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-mvp\', false);">(X10) MVP</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-best\', false);">(X10) BEST</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-fast\', false);">(X10) FAST</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-boost\', false);">(X10) BOOST</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-free1\', false);">X5•Стартовые</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-mvp1\', false);">X5•MVP</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-best1\', false);">X5•BEST</button>\
	<button class="btn btn-secondary active">X5•FAST</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-boost1\', false);">X5•BOOST</button>\
	<div class="xbox_custom_kits" ><div class="serverheader">X5|Кит "FAST ОРУЖИЕ" - <span>Откат 24ч</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/pants.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/shoes.boots.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/hoodie.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/roadsign.jacket.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/coffeecan.helmet.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/roadsign.kilt.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/ammo.rifle.png">\
<div class="kit-item__quantity">x250</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/rifle.ak.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/largemedkit.png">\
<div class="kit-item__quantity">x7</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/syringe.medical.png">\
<div class="kit-item__quantity">x10</div></div></div>\
</div></div></div>\
<div class="xbox_custom_kits" ><div class="serverheader">Кит "FAST КОМПОНЕНТЫ" - <span>Откат 72ч</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/metalspring.png">\
<div class="kit-item__quantity">x35</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/techparts.png">\
<div class="kit-item__quantity">x30</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/roadsigns.png">\
<div class="kit-item__quantity">x40</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/semibody.png">\
<div class="kit-item__quantity">x35</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/smgbody.png">\
<div class="kit-item__quantity">x35</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/metalblade.png">\
<div class="kit-item__quantity">x40</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/metalpipe.png">\
<div class="kit-item__quantity">x40</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/gears.png">\
<div class="kit-item__quantity">x40</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/sewingkit.png">\
<div class="kit-item__quantity">x35</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/workbench1.png">\
<div class="kit-item__quantity">x1</div></div></div>\
</div></div></div>\
<div class="xbox_custom_kits" ><div class="serverheader">Кит "FAST РЕСУРСЫ" - <span>Откат 72ч</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/wood.png">\
<div class="kit-item__quantity">x30000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/stones.png">\
<div class="kit-item__quantity">x20000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/metal.refined.png">\
<div class="kit-item__quantity">x500</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/metal.fragments.png">\
<div class="kit-item__quantity">x15000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/gunpowder.png">\
<div class="kit-item__quantity">x2000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/charcoal.png">\
<div class="kit-item__quantity">x13000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/lowgradefuel.png">\
<div class="kit-item__quantity">x500</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/cloth.png">\
<div class="kit-item__quantity">x700</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/leather.png">\
<div class="kit-item__quantity">x350</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/sulfur.png">\
<div class="kit-item__quantity">x5000</div></div></div>\
</div></div></div>'
};

curcontent["kit-boost1"] = {
	xhead: 'Платные киты',
	xcon: '<div class="store-categories">\
	<button class="btn btn-secondary" onclick="Open(\'kit-free\', false);">(X10) Стартовые</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-mvp\', false);">(X10) MVP</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-best\', false);">(X10) BEST</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-fast\', false);">(X10) FAST</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-boost\', false);">(X10) BOOST</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-free1\', false);">X5•Стартовые</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-mvp1\', false);">X5•MVP</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-best1\', false);">X5•BEST</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-fast1\', false);">X5•FAST</button>\
	<button class="btn btn-secondary active">X5•BOOST</button>\
	<div class="xbox_custom_kits" ><div class="serverheader">X5|Кит "BOOST ОРУЖИЕ" - <span>Откат 6ч</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.ibb.co/56pXn9b/hazmat.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/smg.thompson.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/ammo.pistol.png">\
<div class="kit-item__quantity">x150</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/syringe.medical.png">\
<div class="kit-item__quantity">x7</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/blueberries.png">\
<div class="kit-item__quantity">x10</div></div></div>\
</div></div></div>'
};


curcontent["Oplata"] = {
	xhead: 'Способы пополнения баланса',
	xcon: '<div class="xbox oplata_info"><form onsubmit="return qiwiHandler(event)" id="qiwi-inp-form" method="get" target="_blank" action="https://oplata.qiwi.com/create">\
<div class="qiwi-inp-oplata">\
	<div class="qiwi-widget-title">Qiwi & Карты<br><p>минимальная комиссия</p></div>\
	<div class="qiwi-inp-box">\
			<label for="qiwi-donation-amount" class="qiwi-label">Cумма</label>\
			<div class="qiwi-rub">₽</div>\
			<input type="tel" placeholder="Сумма" id="qiwi-donation-amount" name="amount" required="" value="">\
			<input type="hidden" id="qiwi-donation-comment" name="comment" value="Пожертвование на krasnorask rust">\
			<input type="hidden" name="publicKey" value="48e7qUxn9T7RyYE1MVZswX1FRSbE6iyCj2gCRwwF3Dnh5XrasNTx3BGPiMsyXQFNKQhvukniQG8RTVhYm3iPs3gNggFKzubM8g7ocg4Mkz85xGXXT6YYjWFsEkk7WaPrB4oJgA6Y1qCGp92etzuwgGPM5gGeNoeN3qhTNgnmBGqPNfgvudVGJkS7yu4B4">\
			<input type="hidden" id="qiwi-donation-account" name="account" value="0">\
			<input type="hidden" name="customFields[themeCode]" value="Danyl-KSsYnA-Jn5">\
			<input type="hidden" id="qiwi-successUrl" name="successUrl" value="">\
			<div class="qiwi-error-box" id="qiwi-error-box"></div>\
	</div>\
	<div class="qiwi-button-box">\
		<button class="qiwi-submit-main" id="qiwi-submit-main" width="159px" type="submit">Оплатить</button>\
	</div>\
</div>\
</form>\
<div class="oplata_cont"><a class="container-oplata" id="qiwi-inp-other">\
	<img alt="" src="https://i.imgur.com/kb8M7vg.png" class="icon-user-oplata"><div class="textContainer-oplata"><span class="name-user">Пополнить картой</span><span class="category-user">Visa и Mastercard</span></div><a class="container-oplata" id="qiwi-inp-other2">\
	<img alt="" src="https://i.imgur.com/2ud2aUY.png" class="icon-user-oplata"><div class="textContainer-oplata"><span class="name-user">Пополнить через PayPal</span></div><a class="container-oplata" onclick="Open(\'skins\');" target="_blank">\
	<img alt="" src="https://i.imgur.com/iV8LCN1.png" class="icon-user-oplata"><div class="textContainer-oplata"><span class="name-user">Пополнить скинами</span><span class="category-user">По ценам с торговой площадки</span></div></div>'
};



var BlockListArrays = [
['shotgun.waterpipe', 'pistol.revolver'],
['flamethrower', 'pistol.python', 'pistol.semiauto', 'shotgun.double', 'pistol.prototype17'], 
['shotgun.pump', 'shotgun.spas12', 'pistol.m92', 'rifle.semiauto', 'coffeecan.helmet', 'roadsign.jacket', 'roadsign.kilt'],
['smg.2', 'smg.thompson', 'smg.mp5', 'rifle.m39', 'metal.facemask', 'metal.plate.torso'], 
['rifle.bolt', 'multiplegrenadelauncher', 'heavy.plate.helmet', 'heavy.plate.jacket', 'heavy.plate.pants'], 
['rifle.ak', 'rifle.lr300', 'rifle.l96', 'grenade.f1', 'grenade.beancan', 'hmlmg', 'explosive.satchel'],
['lmg.m249', 'ammo.rifle.explosive', 'explosive.timed', 'rocket.launcher', 'ammo.grenadelauncher.he']];


curcontent["block"] = {
	xhead: 'Блокировка предметов после вайпа', 
	xcon: '<div class="xbox_custom_block"><div class="kit-items">'
	
};



function Open(el, usefade = true, zind = false) {
	closepage();
	var div1 = document.createElement("div");
    div1.id = 'Modal';
	var div2 = document.createElement("div");
	div2.className = 'modal modal-service fade';
	if(!usefade) div2.classList.add("show");
	div2.style = 'display: block; z-index: 1100;';
	div2.id = 'closer';
	//div2.onclick = closepage;
	var div3 = document.createElement("div");
	div3.className = "modal-dialog modal-lg";
	if(el=="block")div3.className+=" modal-lg-block"
	var div4 = document.createElement("div");
	div4.className = "modal-content";
	var div5 = document.createElement("div");
	div5.className = "modal-header";
	div5.innerHTML = '<h4 class="modal-title">'+curcontent[el].xhead+'</h4>';
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
	if(usefade) setTimeout(()=> div2.classList.add("show"), 0);
	
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
  if (Modalparent == null) return;
  Modalparent.removeChild(Modal);
  document.getElementsByTagName('body')[0].className = "";
}

function search(e){
	if (e.offsetX < 1) { 
		console.log(e.target.innerText + ' | ' + e.clientX);
		if (document.selection) { // IE
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

window.onload = function () {
	document.body.onclick=function(event)
	{
		if(event.target.id == 'closer')closepage();
		if(event.target.className == 'MsoCommand')search(event);
	}
	
	for (var i = 0; i < BlockListArrays.length; i++) {
		curcontent["block"].xcon += '<div class="block_by_category block_category_'+ (i + 1) +'">';
		for (var b = 0; b < BlockListArrays[i].length; b++) {
			if(b == 5 && i == 4)
			curcontent["block"].xcon += '<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/surveycharge.png">\
										<div class="kit-item__quantity block-lvl-'+ (i + 1) +'"></div></div></div>';
			else
			curcontent["block"].xcon += '<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/'+ BlockListArrays[i][b] +'.png">\
										<div class="kit-item__quantity block-lvl-'+ (i + 1) +'"></div></div></div>';
		}
		curcontent["block"].xcon += '</div>';
	}
	curcontent["block"].xcon += '</div>\<br></i></div>';
}

function obtainShopSteamId(){
	if(CustomerSteamId != "0" && CustomerSteamId != ""){
		return;
	}
	var xmlHttp = new XMLHttpRequest();

        if(xmlHttp != null)
        {
            xmlHttp.open( "GET", "/api/index.php?modules=users&action=getData", true );
            xmlHttp.send( null );
        }
		xmlHttp.onload = function(gjson) {
			var gjson = JSON.parse(xmlHttp.response);
          console.log(gjson);
			var preSteam = gjson.data.steamID;
			OvhPayUrl = "https://pay.moscow.ovh/?"+gjson.data.pay;
			if(preSteam > 76561100000000000 || !isNaN(preSteam)){
				CustomerSteamId = preSteam.toString();
				//qiwiFormHandle();
				OvhUrlOverrite();
			}else{
				console.log("error obtainShopSteamId! "+ gjson);
			}
		}

}

function OpenOplata(){
	Open('Oplata');
			qiwiFormHandle();
	setTimeout(() => function () {
		try{
			qiwiFormHandle();
		}catch(e){
			console.log('element not found '+ e);
		}
	}, 3000);
}

var DOMReady = function(a,b,c){b=document,c='addEventListener';b[c]?b[c]('DOMContentLoaded',a):window.attachEvent('onload',a)}
window.addEventListener("load",function () {
	try{
		obtainShopSteamId();
	}catch(e){
		console.log('element not found '+ e);
	}
});
