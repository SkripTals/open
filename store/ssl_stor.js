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

curcontent["skins_ru"] = {
    xhead: 'Пополнение скинами',
    xcon: `<div class="skin-content">
	    <div class="warnings_skin">
	        ⚠️ Перед отправкой скинов, пожалуйста, ознакомьтесь с требованиями к обмену. Обратите внимание, что средства за скины будут зачислены исключительно на баланс того аккаунта, с которого они были отправлены.
	    </div>
	    <div class="spoiler">
	        <div class="x-spoiler">
	            <input class="spoil-button" type="checkbox" tabindex="-1">
	            <div class="spoil-box">
	                <span class="spoil-close fa"></span>
	                <span class="spoil-open fa"></span>
	                <span class="spoil-head">Как определяется стоимость скинов?</span><br>
	                <blockquote class="spoil-Untext">
	                    После отправки обмена нашему боту, он определит цену каждого скина и зачислит на баланс пользователя сумму, составляющую 98% от средней стоимости скинов за последний месяц на торговой площадке Steam. Например, если средняя стоимость скинов в обмене составляет 100 рублей, то на баланс пользователя будет зачислено 98 рублей.
	                </blockquote>
	            </div>
	        </div>
	        <div class="x-spoiler">
	            <input class="spoil-button" type="checkbox" tabindex="-1">
	            <div class="spoil-box">
	                <span class="spoil-close fa"></span>
	                <span class="spoil-open fa"></span>
	                <span class="spoil-head">Требования к обмену</span>
	                <blockquote class="spoil-Untext">
	                    » У вас не должно быть <a href="https://i.imgur.com/a8Q2jE3.jpeg" target="_blank">удержания</a> обмена<br>
	                    » Принимаются скины только из <b>RUST</b> и <b>CS2</b><br>
	                    » В одном обмене не должно быть более 12-и предметов<br>
	                    » В обмене не должно быть скинов из CS2 дешевле <b>15-и рублей</b><br>
	                    » Баланс будет пополнен только того аккаунта, с которого были отправлены скины
	                </blockquote>
	            </div>
	        </div>
	        <div class="x-spoiler">
	            <input class="spoil-button" type="checkbox" tabindex="-1">
	            <div class="spoil-box">
	                <span class="spoil-close fa"></span>
	                <span class="spoil-open fa"></span>
	                <span class="spoil-head">Начать пополнение скинами</span><br>
	                <blockquote class="spoil-Untext">
	                    Чтобы пополнить баланс необходимо перейти на страницу обмена (нажав на кнопку снизу), выбрать скины которыми хотите пополнить, нажать кнопку "Предложить обмен" и подтвердить обмен через мобильное приложение Steam.<br><br>
	                    Если обмен соответствует требованиям - наш бот примет его в течение нескольких минут.
	                    <div class="btn-skins">
	                        <a class="btn-skin" onclick="openNewWindow('https://steamcommunity.com/tradeoffer/new/?partner=1876222817&token=1A1PMWAN');">Начать обмен</a>
	                    </div>
	                </blockquote>
	            </div>
	        </div>
	        <div class="x-spoiler">
	            <input class="spoil-button" type="checkbox" tabindex="-1">
	            <div class="spoil-box">
	                <span class="spoil-close fa"></span>
	                <span class="spoil-open fa"></span>
	                <span class="spoil-head">Ошибка "Вы не можете обмениваться (34)"</span><br>
	                <blockquote class="spoil-Untext">
	                    Steam блокирует обмен на ~2 часа для аккаунтов, которые недавно сменили свой ник. Чтобы избежать этой проблемы, не меняйте ник в Steam, если собираетесь пополнить баланс скинами.
	                </blockquote>
	            </div>
	        </div>
	    </div>
	</div>`
};

curcontent["skins_en"] = {
	xhead: 'Deposit with skins',
	xcon: '<div class="skin-content"><div class="warnings_skin">⚠️ Before sending skins, please review the trade requirements. Please note that the funds for the skins will be credited only to the account from which they were sent.</div><div class="spoiler"><div class="x-spoiler">\
<input class="spoil-button" type="checkbox" tabindex="-1">\
     <div class="spoil-box"><span class="spoil-close fa"></span><span class="spoil-open fa"></span><span class="spoil-head">How skin prices are determined</span><br><blockquote class="spoil-Untext">After sending a trade offer to our bot, it will determine the price of each skin and credit the user balance with an amount equal to 80% of the average skin value over the last month on the Steam marketplace. For example, if the average skin value in the trade offer is 100 rubles, the user balance will be credited with 80 rubles.</span></blockquote>\
     </div></div>\
<div class="x-spoiler">\
<input class="spoil-button" type="checkbox" tabindex="-1">\
     <div class="spoil-box">\
         <span class="spoil-close fa"></span><span class="spoil-open fa"></span><span class="spoil-head">Trade requirements</span>\
         <blockquote class="spoil-Untext">\» You must not have any <a href="https://help.steampowered.com/ru/faqs/view/34A1-EA3F-83ED-54AB" target="_blank">trade hold</a><br>» Only skins from <b>RUST</b> and <b>CS2</b> are accepted<br>» There should not be more than 12 items in one exchange<br>» The trade offer must not contain CS skins cheaper than <b>5₽</b><br>» The balance will only be replenished for the account from which the skins were sent</li></ol>\
         </blockquote>\
     </div></div>\
<div class="x-spoiler">\
<input class="spoil-button" type="checkbox" tabindex="-1">\
     <div class="spoil-box"><span class="spoil-close fa"></span><span class="spoil-open fa"></span><span class="spoil-head">Start deposit with skins</span><br>\
	 <blockquote class="spoil-Untext">To refill the balance, you need to go to the trade page (by clicking the button below), select the skins you want to use for refill, click the "Start trade" button, and confirm the trade through the Steam mobile app.<br><br>If the trade meets the requirements, our bot will accept it within a few minutes.<div class="btn-skins"><a class="btn-skin" onclick="openNewWindow(\'https://steamcommunity.com/tradeoffer/new/?partner=1876222817&token=1A1PMWAN\');">Start trade</a></blockquote>\
     </div></div></div></div>'
};

curcontent["skipqueue"] = {
	xhead: 'Вход без очереди',
	xcon: '<div class="queue-text">\
		<div>\
			<span>Вход без очереди работает сразу после покупки привилегии (как и написано в её описании). Для этого не нужно ничего активировать на сервере. Однако, после входа на сервер необходимо забрать привилегию из корзины, иначе вас кикнет. Если привилегия была приобретена, пока вы стояли в очереди, нужно выйти из очереди и подключиться к серверу вновь.<br><br>Если вас не пропускает вне очереди, проверьте, с того ли аккаунта вы авторизировались и приобрели привилегию. Также учтите, что привилегия работает только на сервере, где была забрана из корзины.<br><br><b>⚠️ Настоятельно рекомендуем всегда активировать привилегию перед вайпом, потому что первое время после вайпа (~10 минут) вход без очереди (при неактивированной привилегии) может работать нестабильно из-за большой нагрузки на сайт.</b></span>\
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

curcontent["kit-free"] = {
	xhead: 'Стартовые киты',
	xcon: '<div class="store-categories">\
	<button class="btn btn-secondary active">(X10) Стартовые</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-mvp\', false);">(X10) MVP</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-best\', false);">(X10) BEST</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-fast\', false);">(X10) FAST</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-boost\', false);">(X10) BOOST</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-free1\', false);">(X5) Стартовые</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-mvp1\', false);">(X5) MVP</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-best1\', false);">(X5) BEST</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-fast1\', false);">(X5) FAST</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-boost1\', false);">(X5) BOOST</button>\
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
	<button class="btn btn-secondary" onclick="Open(\'kit-free1\', false);">(X5) Стартовые</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-mvp1\', false);">(X5) MVP</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-best1\', false);">(X5) BEST</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-fast1\', false);">(X5) FAST</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-boost1\', false);">(X5) BOOST</button>\
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
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/QZ0noWp.png">\
<div class="kit-item__quantity">75%</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/jRBvIL7.png">\
<div class="kit-item__quantity">75%</div></div></div>\
</div></div></div>\
<div class="xbox_custom_kits" ><div class="serverheader">Кит "Снаряжение" - <span>Откат 2Ч</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/r6ch0hd.png">\
<div class="kit-item__quantity">x1</div></div></div>\
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
<div class="xbox_custom_kits" ><div class="serverheader">Кит "BOOM" - <span>Откат 5Д</span></div>\
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
	<button class="btn btn-secondary" onclick="Open(\'kit-free1\', false);">(X5) Стартовые</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-mvp1\', false);">(X5) MVP</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-best1\', false);">(X5) BEST</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-fast1\', false);">(X5) FAST</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-boost1\', false);">(X5) BOOST</button>\
	<div class="xbox_custom_kits" ><div class="serverheader">Кит "Ресурсы" - <span>Откат 3Д</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/wood.png">\
<div class="kit-item__quantity">x43000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/stones.png">\
<div class="kit-item__quantity">x55000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/metal.refined.png">\
<div class="kit-item__quantity">x1300</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/metal.fragments.png">\
<div class="kit-item__quantity">x40000</div></div></div>\
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
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/r6ch0hd.png">\
<div class="kit-item__quantity">x1</div></div></div>\
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
<div class="xbox_custom_kits" ><div class="serverheader">Кит "Прочее" - <span>Откат 24ч</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://pic.moscow.ovh/images/2023/05/08/614b43e9f1fe13e81a73002f4ea43b3c.png">\
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
	<button class="btn btn-secondary" onclick="Open(\'kit-free1\', false);">(X5) Стартовые</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-mvp1\', false);">(X5) MVP</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-best1\', false);">(X5) BEST</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-fast1\', false);">(X5) FAST</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-boost1\', false);">(X5) BOOST</button>\
    <div class="xbox_custom_kits" ><div class="serverheader">Кит "Ресурсы" - <span>Откат 3Д</span></div>\
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
<div class="xbox_custom_kits" ><div class="serverheader">Кит "Снаряжение" - <span>Откат 6Ч</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/r6ch0hd.png">\
<div class="kit-item__quantity">x1</div></div></div>\
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
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/ammo.pistol.png">\
<div class="kit-item__quantity">x500</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/smg.mp5.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/largemedkit.png">\
<div class="kit-item__quantity">x15</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/syringe.medical.png">\
<div class="kit-item__quantity">x30</div></div></div>\
</div></div></div>\
<div class="xbox_custom_kits" ><div class="serverheader">Кит "Прочее" - <span>Откат 3Д</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://pic.moscow.ovh/images/2023/05/08/614b43e9f1fe13e81a73002f4ea43b3c.png">\
<div class="kit-item__quantity">x4</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/QZ0noWp.png">\
<div class="kit-item__quantity">30%</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/jRBvIL7.png">\
<div class="kit-item__quantity">30%</div></div></div>\
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
	<button class="btn btn-secondary" onclick="Open(\'kit-free1\', false);">(X5) Стартовые</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-mvp1\', false);">(X5) MVP</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-best1\', false);">(X5) BEST</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-fast1\', false);">(X5) FAST</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-boost1\', false);">(X5) BOOST</button>\
	<div class="xbox_custom_kits" ><div class="serverheader">Кит "Снаряжение" - <span>Откат 24Ч</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/1RJYGqV.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/hazmatsuit_scientist_arctic.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/smg.thompson.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/ammo.pistol.png">\
<div class="kit-item__quantity">x350</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/syringe.medical.png">\
<div class="kit-item__quantity">x10</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/black.raspberries.png">\
<div class="kit-item__quantity">x10</div></div></div>\
</div></div></div>\
<div class="xbox_custom_kits" ><div class="serverheader">Кит "Фарм" - <span>Откат 6ч</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.ibb.co/56pXn9b/axe.salvaged.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/axe.salvaged.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/icepick.salvaged.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/lowgradefuel.png">\
<div class="kit-item__quantity">x300</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/jackhammer.png">\
<div class="kit-item__quantity">50%</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/chainsaw.png">\
<div class="kit-item__quantity">50%</div></div></div>\
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
	<button class="btn btn-secondary active">(X5) Стартовые</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-mvp1\', false);">(X5) MVP</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-best1\', false);">(X5) BEST</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-fast1\', false);">(X5) FAST</button>\
    <button class="btn btn-secondary" onclick="Open(\'kit-boost1\', false);">(X5) BOOST</button>\
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
    <div class="kit-item__quantity">x9000</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/metal.fragments.png">\
    <div class="kit-item__quantity">x2500</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/wood.png">\
    <div class="kit-item__quantity">x5000</div></div></div>\
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

curcontent["kit-mvp1"] = {
	xhead: 'Платные киты',
	xcon: '<div class="store-categories">\
	<button class="btn btn-secondary" onclick="Open(\'kit-free\', false);">(X10) Стартовые</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-mvp\', false);">(X10) MVP</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-best\', false);">(X10) BEST</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-fast\', false);">(X10) FAST</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-boost\', false);">(X10) BOOST</button>\</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-free1\', false);">(X5) Стартовые</button>\
	<button class="btn btn-secondary active">(X5) MVP</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-best1\', false);">(X5) BEST</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-fast1\', false);">(X5) FAST</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-boost1\', false);">(X5) BOOST</button>\
	<div class="xbox_custom_kits" ><div class="serverheader">Кит "Ресурсы" - <span>Откат 3Д</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/wood.png">\
<div class="kit-item__quantity">x40000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/stones.png">\
<div class="kit-item__quantity">x47000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/metal.refined.png">\
<div class="kit-item__quantity">x1750</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/metal.fragments.png">\
<div class="kit-item__quantity">x40000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/gunpowder.png">\
<div class="kit-item__quantity">x10000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/lowgradefuel.png">\
<div class="kit-item__quantity">x1500</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/cloth.png">\
<div class="kit-item__quantity">x1500</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/leather.png">\
<div class="kit-item__quantity">x750</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/metalspring.png">\
<div class="kit-item__quantity">x50</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/techparts.png">\
<div class="kit-item__quantity">x42</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/roadsigns.png">\
<div class="kit-item__quantity">x50</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/semibody.png">\
<div class="kit-item__quantity">x47</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/smgbody.png">\
<div class="kit-item__quantity">x47</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/metalblade.png">\
<div class="kit-item__quantity">x50</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/metalpipe.png">\
<div class="kit-item__quantity">x50</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/riflebody.png">\
<div class="kit-item__quantity">x47</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/gears.png">\
<div class="kit-item__quantity">x50</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/sewingkit.png">\
<div class="kit-item__quantity">x47</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/workbench3.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://pic.moscow.ovh/images/2023/05/08/614b43e9f1fe13e81a73002f4ea43b3c.png">\
<div class="kit-item__quantity">x8</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/QZ0noWp.png">\
<div class="kit-item__quantity">75%</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/jRBvIL7.png">\
<div class="kit-item__quantity">75%</div></div></div>\
</div></div></div>\
<div class="xbox_custom_kits" ><div class="serverheader">Кит "Снаряжение" - <span>Откат 2Ч</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/r6ch0hd.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/metal.facemask.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/pants.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/metal.plate.torso.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/roadsign.kilt.png">\
<div class="kit-item__quantity">x1</div></div></div>\
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
<div class="kit-item__quantity">x600</div></div></div>\
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
<div class="xbox_custom_kits" ><div class="serverheader">Кит "BOOM" - <span>Откат 5Д</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/ammo.rocket.basic.png">\
<div class="kit-item__quantity">x15</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/ammo.rocket.hv.png">\
<div class="kit-item__quantity">x22</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/ammo.rifle.explosive.png">\
<div class="kit-item__quantity">x250</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/lmg.m249.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/rocket.launcher.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/explosive.timed.png">\
<div class="kit-item__quantity">x15</div></div></div>\
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
	<button class="btn btn-secondary" onclick="Open(\'kit-free1\', false);">(X5) Стартовые</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-mvp1\', false);">(X5) MVP</button>\
	<button class="btn btn-secondary active">(X5) BEST</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-fast1\', false);">(X5) FAST</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-boost1\', false);">(X5) BOOST</button>\
	<div class="xbox_custom_kits" ><div class="serverheader">Кит "Ресурсы" - <span>Откат 3Д</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/wood.png">\
<div class="kit-item__quantity">x21000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/stones.png">\
<div class="kit-item__quantity">x22000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/metal.refined.png">\
<div class="kit-item__quantity">x750</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/metal.fragments.png">\
<div class="kit-item__quantity">x20000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/gunpowder.png">\
<div class="kit-item__quantity">x5000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/charcoal.png">\
<div class="kit-item__quantity">x8000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/lowgradefuel.png">\
<div class="kit-item__quantity">x1000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/cloth.png">\
<div class="kit-item__quantity">x850</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/leather.png">\
<div class="kit-item__quantity">x500</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/sulfur.png">\
<div class="kit-item__quantity">x6500</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/metalspring.png">\
<div class="kit-item__quantity">x35</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/techparts.png">\
<div class="kit-item__quantity">x32</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/roadsigns.png">\
<div class="kit-item__quantity">x35</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/semibody.png">\
<div class="kit-item__quantity">x35</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/smgbody.png">\
<div class="kit-item__quantity">x35</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/metalblade.png">\
<div class="kit-item__quantity">x40</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/metalpipe.png">\
<div class="kit-item__quantity">x40</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/riflebody.png">\
<div class="kit-item__quantity">x35</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/gears.png">\
<div class="kit-item__quantity">x40</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/sewingkit.png">\
<div class="kit-item__quantity">x35</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/workbench2.png">\
<div class="kit-item__quantity">x1</div></div></div>\
</div></div></div>\
<div class="xbox_custom_kits" ><div class="serverheader">Кит "Снаряжение" - <span>Откат 4Ч</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/r6ch0hd.png">\
<div class="kit-item__quantity">x1</div></div></div>\
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
<div class="kit-item__quantity">x250</div></div></div>\
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
<div class="xbox_custom_kits" ><div class="serverheader">Кит "Прочее" - <span>Откат 24ч</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://pic.moscow.ovh/images/2023/05/08/614b43e9f1fe13e81a73002f4ea43b3c.png">\
<div class="kit-item__quantity">x6</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/QZ0noWp.png">\
<div class="kit-item__quantity">50%</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/jRBvIL7.png">\
<div class="kit-item__quantity">50%</div></div></div>\
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
	<button class="btn btn-secondary" onclick="Open(\'kit-free1\', false);">(X5) Стартовые</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-mvp1\', false);">(X5) MVP</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-best1\', false);">(X5) BEST</button>\
	<button class="btn btn-secondary active">(X5) FAST</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-boost1\', false);">(X5) BOOST</button>\
    <div class="xbox_custom_kits" ><div class="serverheader">Кит "Ресурсы" - <span>Откат 3Д</span></div>\
    <div class="kit_set"><div class="kit-items">\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/wood.png">\
    <div class="kit-item__quantity">x30000</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/stones.png">\
    <div class="kit-item__quantity">x20000</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/metal.refined.png">\
    <div class="kit-item__quantity">x750</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/metal.fragments.png">\
    <div class="kit-item__quantity">x15000</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/gunpowder.png">\
    <div class="kit-item__quantity">x2500</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/charcoal.png">\
    <div class="kit-item__quantity">x10000</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/lowgradefuel.png">\
    <div class="kit-item__quantity">x500</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/cloth.png">\
    <div class="kit-item__quantity">x750</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/leather.png">\
    <div class="kit-item__quantity">x500</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/sulfur.png">\
    <div class="kit-item__quantity">x5000</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/metalspring.png">\
    <div class="kit-item__quantity">x20</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/techparts.png">\
    <div class="kit-item__quantity">x25</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/roadsigns.png">\
    <div class="kit-item__quantity">x22</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/semibody.png">\
    <div class="kit-item__quantity">x25</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/smgbody.png">\
    <div class="kit-item__quantity">x25</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/metalblade.png">\
    <div class="kit-item__quantity">x25</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/metalpipe.png">\
    <div class="kit-item__quantity">x22</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/gears.png">\
    <div class="kit-item__quantity">x25</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/sewingkit.png">\
    <div class="kit-item__quantity">x22</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/workbench1.png">\
    <div class="kit-item__quantity">x1</div></div></div>\
    </div></div></div>\
    <div class="xbox_custom_kits" ><div class="serverheader">Кит "Снаряжение" - <span>Откат 6Ч</span></div>\
    <div class="kit_set"><div class="kit-items">\
	<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/r6ch0hd.png">\
	<div class="kit-item__quantity">x1</div></div></div>\
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
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/ammo.pistol.png">\
    <div class="kit-item__quantity">x250</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/smg.mp5.png">\
    <div class="kit-item__quantity">x1</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/largemedkit.png">\
    <div class="kit-item__quantity">x15</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/syringe.medical.png">\
    <div class="kit-item__quantity">x30</div></div></div>\
    </div></div></div>\
    <div class="xbox_custom_kits" ><div class="serverheader">Кит "Прочее" - <span>Откат 3Д</span></div>\
    <div class="kit_set"><div class="kit-items">\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://pic.moscow.ovh/images/2023/05/08/614b43e9f1fe13e81a73002f4ea43b3c.png">\
    <div class="kit-item__quantity">x4</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/QZ0noWp.png">\
    <div class="kit-item__quantity">30%</div></div></div>\
    <div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/jRBvIL7.png">\
    <div class="kit-item__quantity">30%</div></div></div>\
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
	<button class="btn btn-secondary" onclick="Open(\'kit-free1\', false);">(X5) Стартовые</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-mvp1\', false);">(X5) MVP</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-best1\', false);">(X5) BEST</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-fast1\', false);">(X5) FAST</button>\
	<button class="btn btn-secondary active">(X5) BOOST</button>\
	<div class="xbox_custom_kits" ><div class="serverheader">Кит "Снаряжение" - <span>Откат 24Ч</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.imgur.com/1RJYGqV.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/hazmatsuit_scientist_arctic.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/smg.thompson.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/ammo.pistol.png">\
<div class="kit-item__quantity">x175</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/syringe.medical.png">\
<div class="kit-item__quantity">x10</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/black.raspberries.png">\
<div class="kit-item__quantity">x10</div></div></div>\
</div></div></div>\
<div class="xbox_custom_kits" ><div class="serverheader">Кит "Фарм" - <span>Откат 6ч</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://i.ibb.co/56pXn9b/axe.salvaged.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/axe.salvaged.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/icepick.salvaged.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/lowgradefuel.png">\
<div class="kit-item__quantity">x150</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/jackhammer.png">\
<div class="kit-item__quantity">50%</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://raw.githubusercontent.com/rostov114/rust-items/main/chainsaw.png">\
<div class="kit-item__quantity">50%</div></div></div>\
</div></div></div>'
};

// //Vanilla kits удалить


// function generateCategoryButtons(kits, activeKitId) {
//     return kits.map(kit => `
//         <button class="btn btn-secondary ${kit.id === activeKitId ? "active" : ""}" 
//                 onclick="Open('${kit.id}', false);">
//             ${kit.title}
//         </button>
//     `).join("");
// }

// function generateKitItems(items) {
//     return items.map(item => `
//         <div class="kit-items__item">
//             <div class="kit-item">
//                 <img class="kit-item__image" src="https://s3.bloodrust.io/items/${item.image}.png">
//                 <div class="kit-item__quantity">x${item.quantity}</div>
//             </div>
//         </div>
//     `).join("");
// }

// function generateKitSections(categories) {
//     return categories.map(category => `
//         <div class="xbox_custom_kits">
//             <div class="serverheader">${category.name} - <span class="kit_cooldown">${category.cooldown}</span><span class="kit_wipeblock">${category.wipeblock}</span></div>
//             <div class="kit_set">
//                 <div class="kit-items">
//                     ${generateKitItems(category.items)}
//                 </div>
//             </div>
//         </div>
//     `).join("");
// }

// function generateKitContent(kit, kits) {
//     return `
//         <div class="store-categories">
//             ${generateCategoryButtons(kits, kit.id)}
//             ${generateKitSections(kit.categories)}
//         </div>
//     `;
// }

// kitsData.forEach(kit => {
//     curcontent[kit.id] = {
//         xhead: "Vanilla Kits",
//         xcon: generateKitContent(kit, kitsData)
//     };
// });

//end


curcontent["Oplata_RU"] = {
xhead: 'Выберите способ оплаты',
xcon: '<div class="xbox oplata_info">\
<div class="account-warning">⚠️ Внимание! Перед пополнением баланса обязательно проверьте, с какого аккаунта вы авторизованы на сайте, чтобы избежать ошибок.</div>\
<div class="">\
	<div class="container-oplata-btn">\
		<a class="container-oplata-box" id="qiwi-inp-other2">\
			<img alt="" src="https://i.imgur.com/izriuxq.png" class="icon-user-oplata">\
			<div class="textContainer-oplata">\
				<span class="name-user">Карты (рф)</span>\
				<span class="category-user">Visa, Mastercard и Мир</span>\
			</div>\
		</a>\
        </div>\
		<a class="container-oplata-box" id="qiwi-inp-other-skin" onclick="OpenXL(\'skins_ru\');" target="_blank">\
			<img alt="" src="https://i.imgur.com/k3JqyXs.png" class="icon-user-oplata">\
			<div class="textContainer-oplata">\
				<span class="name-user">Steam (скины)</span>\
				<span class="category-user">RUST и CS2</span>\
			</div>\
		</a>\
	</div>\
 </div>\
</div>\
	<div class="spoiler" style="margin-top: 10px;"><div class="x-spoiler">\
	<input class="spoil-button" type="checkbox" tabindex="-1">\
     <div class="spoil-box">\
     	<span class="spoil-close fa"></span>\
     	<span class="spoil-open fa"></span>\
     	<span class="spoil-head">Бонусы при пополнении</span>\
     	<br>\
     	<blockquote class="spoil-Untext">от <b>200₽</b> - бонус <b>+10%</b> к сумме пополнения<br>от <b>300₽</b> - бонус <b>+15%</b> к сумме пополнения<br>от <b>400₽</b> - бонус <b>+20%</b> к сумме пополнения<br>от <b>500₽</b> - бонус <b>+25%</b> к сумме пополнения<br><br>⚠️ Бонусы не действуют при пополнении скинами!</span>\
     	</blockquote>\
	</div>\
</div>'
};

curcontent["Oplata_EN"] = {
xhead: 'Choose a payment method',
xcon: '<div class="xbox oplata_info">\
<div class="account-warning">⚠️ Attention! Before depositing, please make sure you are logged in with the correct Steam account to avoid errors.</div>\
<div class="">\
		<a class="container-oplata-box" id="qiwi-inp-other2">\
			<img alt="" src="https://i.imgur.com/izriuxq.png" class="icon-user-oplata">\
			<div class="textContainer-oplata">\
				<span class="name-user">Card (ru)</span>\
				<span class="category-user">Visa, Mastercard и Мир</span>\
			</div>\
		</a>\
		<a class="container-oplata-box" id="qiwi-inp-other-skin" onclick="OpenXL(\'skins_en\');" target="_blank">\
			<img alt="" src="https://i.imgur.com/k3JqyXs.png" class="icon-user-oplata">\
			<div class="textContainer-oplata">\
				<span class="name-user">Steam (skins)</span>\
				<span class="category-user">RUST and CS2</span>\
			</div>\
		</div>\
	</div>\
</div>\
	<div class="spoiler" style="margin-top: 10px;"><div class="x-spoiler">\
	<input class="spoil-button" type="checkbox" tabindex="-1">\
     <div class="spoil-box">\
     	<span class="spoil-close fa"></span>\
     	<span class="spoil-open fa"></span>\
     	<span class="spoil-head">Deposit bonuses</span>\
     	<br>\
     	<blockquote class="spoil-Untext">from <b>200₽</b> - bonus <b>+10%</b> to the deposit amount<br>from <b>300₽</b> - bonus <b>+15%</b> to the deposit amount<br>from <b>400₽</b> - bonus <b>+20%</b> to the deposit amount<br>from <b>500₽</b> - bonus <b>+25%</b> to the deposit amount<br><br>⚠️ Bonuses are not valid when depositing with skins!</span>\
     	</blockquote>\
	</div>\
</div>'
};

const weapons = [
    { image: 'shotgun.waterpipe', time: '2h' },
    { image: 'pistol.revolver', time: '2h' },
    { image: 'flamethrower', time: '4h' },
    { image: 'military%20flamethrower', time: '4h' },
    { image: 'pistol.python', time: '4h' },
    { image: 'revolver.hc', time: '4h' },
    { image: 'pistol.semiauto', time: '4h' },
    { image: 'shotgun.double', time: '4h' },
    { image: 'grenade.molotov', time: '4h' },
    { image: 'blunderbuss', time: '4h' },
    { image: 't1_smg', time: '4h' },
    { image: 'shotgun.pump', time: '6h' },
    { image: 'shotgun.spas12', time: '6h' },
    { image: 'pistol.m92', time: '6h' },
    { image: 'pistol.prototype17', time: '6h' },
    { image: 'rifle.semiauto', time: '6h' },
    { image: 'rifle.sks', time: '8h' },
    { image: 'smg.2', time: '8h' },
    { image: 'smg.thompson', time: '8h' },
    { image: 'smg.mp5', time: '8h' },
    { image: 'rifle.m39', time: '8h' },
    { image: 'rifle.ak', time: '22h' },
    { image: 'rifle.lr300', time: '22h' },
    { image: 'rifle.bolt', time: '22h' },
    { image: 'rifle.l96', time: '22h' },
    { image: 'homingmissile.launcher', time: '22h' },
    { image: 'batteringram', time: '22h' },
    { image: 'ballista.static', time: '22h' },
    { image: 'ballista.mounted', time: '22h' },
    { image: 'multiplegrenadelauncher', time: '24h' },
    { image: 'hmlmg', time: '24h' },
    { image: 'lmg.m249', time: '24h' },
    { image: 'minigun', time: '24h' },
    { image: 'catapult', time: '24h' },
    { image: 'rocket.launcher', time: '28h' },
];

const ammoAndExplosives = [
    { image: 'grenade.f1', time: '22h' },
    { image: 'grenade.beancan', time: '24h' },
    { image: 'surveycharge', time: '24h' },
    { image: 'explosive.satchel', time: '24h' },
    { image: 'submarine.torpedo.straight', time: '24h' },
    { image: 'ammo.grenadelauncher.he', time: '24h' },
    { image: 'catapult.ammo.explosive', time: '24h' },
    { image: 'ammo.rifle.explosive', time: '28h' },
    { image: 'explosive.timed', time: '28h' },
    { image: 'ammo.rocket.hv', time: '28h' },
    { image: 'ammo.rocket.fire', time: '28h' },
    { image: 'ammo.rocket.basic', time: '28h' },
    { image: 'ammo.rocket.mlrs', time: '28h' },
];

const clothing = [
    { image: 'coffeecan.helmet', time: '6h' },
    { image: 'roadsign.jacket', time: '6h' },
    { image: 'roadsign.kilt', time: '6h' },
    { image: 'metal.facemask', time: '8h' },
    { image: 'metal.plate.torso', time: '8h' },
    { image: 'heavy.plate.helmet', time: '22h' },
    { image: 'heavy.plate.jacket', time: '22h' },
    { image: 'heavy.plate.pants', time: '22h' },
];

curcontent["block3"] = {
    xhead: 'After-wipe blocks',
    xcon: (() => {
        const categories = [
            { title: 'Weapons', items: weapons },
            { title: 'Ammo and explosives', items: ammoAndExplosives },
            { title: 'Clothes', items: clothing }
        ];

        const warning = `<div class="block-warning">⚠️ This blocks apply only to servers categorized as "Modded".</div>`;

        const blocks = categories.map(category => `
            <div class="xbox_custom_kits">
                <div class="serverheader">${category.title}</div>
                <div class="kit_set">
                    <div class="kit-items">
                        ${category.items.map(item => `
                            <div class="kit-items__item">
                                <div class="kit-item">
                                    <img class="kit-item__image" src="https://s3.bloodrust.io/items/${item.image}.png">
                                    <div class="kit-item__quantity">${item.time}</div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        `).join('');

        return warning + blocks;
    })()
};

curcontent["tos"] = {
	xhead: 'Пользовательское соглашение', 
	xcon: '<div class="tos-body"><p>Настоящий договор является публичной офертой (далее — Оферта). В соответствии с Гражданским кодексом Российской Федерации, акцептом условий настоящей Оферты является оплата Заказчиком услуг, предлагаемых Исполнителем.</p><p>Оферта заключается в электронном виде и не требует двустороннего подписания. Использование Сервиса означает полное согласие Заказчика с условиями настоящей Оферты и обязательство соблюдать их.</p><br><h4>1. Термины и определения</h4><p><b>Сервис</b>— веб-сайт в сети Интернет, расположенный по адресу bloodrust.store, который предоставляет доступ к услугам и информации о них.</p><p><b>Заказчик</b>— физическое или юридическое лицо, воспользовавшееся Сервисом и оплатившее предоставляемые Исполнителем Услуги.</p><p><b>Услуги</b>— платные услуги, оказываемые Исполнителем посредством Сервиса, в том числе предоставление бонусов (donate) для лицензионной игры Rust на проекте "Blood Rust".</p><br><h4>2. Предмет Оферты</h4><p>Исполнитель предоставляет Заказчику услуги по приобретению дополнительных бонусов (donate) для лицензионной игры Rust на проекте "Blood Rust". Описание предоставляемых услуг, их стоимость и условия оказания размещены в Сервисе на странице bloodrust.store/products и действуют на момент оформления Заказчиком заказа.</p><p>Заказчик принимает на себя обязательства по оплате заказанных Услуг в соответствии с условиями, изложенными в Сервисе, и ценами, актуальными на момент оформления заказа.</p><br><h4>3. Порядок оказания Услуг</h4><p>3.1. Перед оказанием Услуг Заказчик выбирает желаемую услугу на Сервисе и оплачивает её. Услуги считаются оказанными в момент зачисления средств на счет Исполнителя.</p><p>3.2. В случае если Заказчик не произведет оплату или оплатит услугу не в полном объеме, Исполнитель вправе приостановить или прекратить оказание услуг до момента полного погашения Заказчиком финансовых обязательств.</p><br><h4>4. Стоимость и порядок оплаты</h4><p>4.1. Стоимость предоставляемых Услуг указана в Сервисе на момент оформления заказа и может изменяться Исполнителем в одностороннем порядке. Изменение цен не распространяется на Услуги, оплаченные ранее.</p><p>4.2. Оплата Услуг осуществляется через доступные на Сервисе платежные системы. Заказчик самостоятельно выбирает удобный способ оплаты из предложенных.</p><p>4.3. Все расчеты между Заказчиком и Исполнителем производятся в рублях Российской Федерации. Услуги Сервиса НДС не облагаются.</p><br><h4>5. Права и обязанности сторон</h4><p><b>Исполнитель обязуется:</b></p><p>5.1. Надлежащим образом оказать Заказчику Услуги в соответствии с условиями настоящей Оферты.</p><p>5.2. Обеспечивать актуальность информации о предоставляемых Услугах и их стоимости, размещаемой в Сервисе.</p><p><b>Исполнитель вправе:</b></p><p>5.3. Вносить изменения в настоящую Оферту, условия оказания Услуг, а также их стоимость, уведомляя об этом Заказчика посредством публикации новой версии Оферты в Сервисе.</p><p>5.4. Приостановить или прекратить оказание Услуг в случае нарушения Заказчиком условий оплаты или предоставления недостоверных данных при регистрации или оформлении заказа.</p><p><b>Заказчик обязуется:</b></p><p>5.5. Своевременно и в полном объеме производить оплату выбранных Услуг.</p><p>5.6. Ознакомиться с условиями настоящей Оферты до момента её акцепта, а также регулярно следить за изменениями в условиях предоставления Услуг, публикуемыми на Сервисе.</p><p>5.7. Не предпринимать действия, нарушающие нормальную работу Сервиса, и соблюдать конфиденциальность данных, полученных в процессе использования Сервиса.</p><br><h4>6. Приемка-сдача Услуг. Условия возврата</h4><p>6.1. Услуги считаются оказанными Исполнителем и принятыми Заказчиком в момент заказа Услуг.</p><p>6.2. Если Заказчик в течение 1 (одного) рабочего дня с момента принятия Услуг не направит Исполнителю мотивированный отказ от их приемки, Услуги считаются оказанными качественно и в полном объеме.</p><p>6.3. В случае отказа от Услуг, Заказчик должен направить мотивированное обоснование отказа на электронную почту Исполнителя:<a href="mailto:help@bloodrust.io">help@bloodrust.io</a>. Исполнитель обязан рассмотреть запрос в течение 10 (десяти) рабочих дней и уведомить Заказчика о принятом решении.</p><p>6.4. При принятии отказа Исполнитель обязуется вернуть денежные средства в виде донатов, эквивалентных сумме оплаты Услуг.</p><p>6.5. Возврат средств не осуществляется, если Заказчик не предоставил мотивированный отказ в срок, предусмотренный настоящей Офертой.</p><p>6.6. Возврат денежных средств производится на тот же счет, с которого была произведена оплата, и в той же валюте.</p><p>6.7. Возврат денежных средств не осуществляется, если Заказчик был заблокирован на серверах проекта "Blood Rust" за нарушение правил или получил блокировку античитом Easy Anti-Cheat (EAC).</p><br><h4>7. Ответственность сторон</h4><p>7.1. Стороны несут ответственность за неисполнение или ненадлежащее исполнение своих обязательств по Оферте в соответствии с её условиями и действующим законодательством Российской Федерации.</p><p>7.2. Исполнитель не несет ответственности за перебои в работе Сервиса, вызванные техническими причинами, находящимися вне его контроля.</p><br><h4>8. Форс-мажор</h4><p>8.1. Стороны освобождаются от ответственности за частичное или полное неисполнение обязательств по настоящей Оферте, если такое неисполнение явилось следствием обстоятельств непреодолимой силы, которые невозможно было предвидеть или предотвратить.</p><br><h4>9. Споры и разногласия</h4><p>9.1. Все споры и разногласия, возникающие в связи с настоящей Офертой, решаются путём переговоров между Сторонами.</p><p>9.2. В случае невозможности достижения соглашения, споры подлежат рассмотрению в судебном порядке по месту нахождения Исполнителя.</p><br><h4>10. Заключительные положения</h4><p>10.1. Оферта вступает в силу с момента её акцепта Заказчиком и действует до момента её отзыва Исполнителем.</p><p>10.2. Заказчик подтверждает, что достиг возраста 18 лет, и что он полностью ознакомился с условиями настоящей Оферты и согласен с ними.</p><p>10.3. Исполнитель оставляет за собой право вносить изменения в содержание настоящей Оферты, публикуя новую редакцию в Сервисе.</p><p>e-Mail:<a href="mailto:help@bloodrust.io">help@bloodrust.io</a></p></div>'
};

function Open(el, usefade = true, zind = false) {
	closepage();
	var div1 = document.createElement("div");
    div1.id = 'Modal';
	var div2 = document.createElement("div");
	div2.className = 'modal modal-xacku fade';
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
	div7.innerHTML = `<button type="button" class="btn btn-secondary" id="closer" onclick="closepage()">Закрыть</button>`;
	//div7.innerHTML = `<button type="button" class="btn btn-secondary" id="closer" onclick="closepage()">${UserLang == "EN" ? "Закрыть" : "Close"}</button>`;
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

function OpenXL(el, usefade = true, zind = false) {
	closepage();
	var div1 = document.createElement("div");
    div1.id = 'Modal';
	var div2 = document.createElement("div");
	div2.className = 'modal modal-xacku fade';
	if(!usefade) div2.classList.add("show");
	div2.style = 'display: block; z-index: 1100;';
	div2.id = 'closer';
	//div2.onclick = closepage;
	var div3 = document.createElement("div");
	div3.className = "modal-dialog modal-xl";
	if(el=="block")div3.className+=" modal-xl-block"
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
	div7.innerHTML = `<button type="button" class="btn btn-secondary" id="closer" onclick="closepage()">Закрыть</button>`;
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

window.onload = function () {
	document.body.onclick=function(event)
	{
		if(event.target.id == 'closer')closepage();
		if(event.target.className == 'MsoCommand')search(event);
	}
}

var CustomerSteamId = "0";
var OvhPayUrl = "";

var now = new Date();

function moruneHandler(e){
	paymentFormHandle();
	var inputval = document.getElementById('fk-donation-amount').value;
	var inputfloat = parseFloat(inputval);
	if(inputfloat < 200 || inputfloat > 15000 || isNaN(inputfloat)){
		document.getElementById('fk-error-box').innerText = "От 200 до 15000 RUB";
		e.preventDefault();
		return false;
	}else{
		document.getElementById('fk-error-box').innerText = "";
	}
	document.getElementById('fk-donation-amount').value = inputfloat;
	if(CustomerSteamId == "0" || CustomerSteamId == ""){
		document.getElementById('fk-error-box').innerText = "Пожалуйста авторизуйтесь в магазине!";
		e.preventDefault();
		return false;
	}
	
	return null;
}

function paymentFormHandle(){
	document.getElementById('qiwi-inp-other2').setAttribute("href", OvhPayUrl);
	var a3 = document.getElementById('fk-donation-comment');
	if(a3 != null)
	a3.value = CustomerSteamId;
	var a4 = document.getElementById('fk-donation-account');
	if(a4 != null)
	a4.value = CustomerSteamId;
}

function OvhUrlOverrite(){
	var slides = document.getElementsByClassName("nav-link");
	for (var i = 0; i < slides.length; i++) {
		var elelink = slides.item(i);
		var urlelelink = elelink.getAttribute("href");
	   if(urlelelink.startsWith('https://pay.moscow.ovh')){
		   OvhPayUrl = urlelelink;
		   console.log(OvhPayUrl);
		   elelink.setAttribute("href", "javascript:;");
		   elelink.setAttribute("onclick", "OpenOplata()");
	   }
	}
}

function openNewWindow(url) {

	if (CustomerSteamId == "0" || CustomerSteamId == "") {
		alert("Авторизуйтесь на сайте через Steam!");
	} else {
     	window.open(url, '_blank');
	}
}

setInterval(() => {
	OvhUrlOverrite();
}, 1000)

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
			var preLang = gjson.data.lang;
			OvhPayUrl = "https://pay.moscow.ovh/?"+gjson.data.pay;
			if(preSteam > 76561100000000000 || !isNaN(preSteam)){
				CustomerSteamId = preSteam.toString();
				UserLang = preLang.toString();
				//paymentFormHandle();
				OvhUrlOverrite();
			}else{
				console.log("error obtainShopSteamId! "+ gjson);
			}
		}

}

function OpenOplata(){
	if (UserLang == "EN") {
		OpenXL('Oplata_RU');
	} else {
		OpenXL('Oplata_EN');
	}
	paymentFormHandle();
	setTimeout(() => function () {
		try{
			paymentFormHandle();
		}catch(e){
			console.log('element not found '+ e);
		}
	}, 3000);
}

window.addEventListener("load", function () {
	try{
		obtainShopSteamId();
	}catch(e){
		console.log('element not found '+ e);
	}
});
