var curcontent = new Array();

curcontent["rules"] = {
	xhead: 'Правила',
	xcon: '<div class="xbox_custom_rules"><ul><p class="MsoNormal"><span>Информация</span></p>\
<p><li>Незнание правил не освобождает Вас от ответственности.</li></p>\
<p><li>Зайдя на сервер Вы автоматически соглашаетесь со всеми нижеперечисленными пунктами правил.</li></p>\
<p><li>Вы несете ответственность за все свои аккаунты. Получив бан на одном аккаунте - Вы получите его и на последующих аккаунтах. То же самое будет если на одном из ваших аккаунтах имеется EAC блокировка.</li></p>\
<p><li>Если Вы уже были замечены с читами / макросами на другом сервере / проекте и на вас есть пруфы - мы имеем право забанить Вас без проверки.</li></p>\
<p><li>Администрация не компенсирует игровые ценности, утраченные по причине вашей ошибки, серверных лагов, багов игры или контактом с нарушителями.</li></p>\
<p><li>Запрещена продажа или реклама Читов/Макросов.</li></p>\
<p><li>Запрещено выдавать себя за Администратора, модератора или проверяющего.</li></p>\
<p><li>Администрация сама выбирает наказание для игрока в зависимости от степени нарушения и обстоятельств. Нарушитель может получить как предупреждение, так и перманентный бан на всех серверах.</li></p>\
<p class="MsoNormal"><span>Геймплей</span></li></p>\
<p><li>Запрещено использовать/хранить/распространять читы/макросы или любое другое ПО, позволяющие получить преимущество над другими игроками. Наличие покупки или подписки приравнивается к хранению стороннего ПО.</li></p>\
<p><li>Запрещена игра с читерами/макросниками.</li></p>\
<p><li>Запрещено использование багов с целью или без цели получения преимущества над другими игроками.</li></p>\
<p><li>Запрещено использование услуг читеров.</li></p>\
<p class="MsoNormal"><span>Нарушение лимита игроков в команде</span></li></p>\
<p><li>Нельзя жить больше положенного максимума в одном доме.</li></p>\
<p><li>Нельзя устраивать альянсы и перемирия с соседями если в сумме вас больше указанного в названии сервера максимума.</li></p>\
<p><li>Частая смена тиммейта будет считаться за нарушения правила о лимите.</li></p>\
<p><li>Нельзя рейдить и антирейдить в 1+/2+/3+ (подсад, доп.люди на обороне и вообще любое кооперирование направленное против других игроков).</li></p><br>\
<p class="MsoNormal"><span>Игровой Чат</span></li></p>\
<p><li>Запрещены ссылки в чате на сторонние сервисы и сайты.</li></p>\
<p><li>Запрещен флуд (многократное повторение бессмысленных фраз, символов) или многократное отправление одинаковых фраз за короткий промежуток времени.</li></p>\
<p><li>Запрещено продавать или делать вид что вы продаёте читы/макросы.</li></p>\
<p><li>Запрещено байтить игроков на вылет или выход с сервера.</li></p>\
<p><li>Запрещено продавать игровые ценности за реальную валюту (RMT).</li></p>\
<p><li>Администрация оставляет за собой право выдать мут игроку в чате если тот ведёт себя неадекватно или флудит одинаковыми сообщениями.</li></p>\<br>\
<p class="MsoNormal"><span>Проверки</span></li></p>\
<p><li>Проверки проходят только через программу «DISCORD». Каждый игрок на нашем проекте, в обязательном порядке должен иметь эту программу на своём пк (или хотя-бы аккаунт, чтобы зайти в дискорд через браузер).</li></p>\
<p><li>Вы имеете полное право отказаться проходить проверку, но в этом случае Вы и ваши тиммейты будут заблокированы.</li></p>\
<p><li>Так-же отказом от проверки будет считаться выход с сервера или предоставление некорректных контактных данных.</li></p>\
<p><li>Игнор вызова на проверку увенчается блокировкой, игнором так-же считается если игрок отправил свой дискорд, но заявку не принимает.</li></p>\
<p><li>При согласии на проверку вы разрешаете устанавливать сторонние программы нужные администрации для проверки вашего PC.</li></p>\
<p><li>Выход с сервера во время вызова на проверку увенчается блокировкой.</li></p>\
<p><li>Запрещено чистить ПК перед проверкой.</li></p>\
</ul><div class="unban" style="background: white; border-radius: 10px; padding: 20px;"><p class="MsoNormal" style="font-weight: bold; margin-bottom: 5px;">Возможность разблокровки</p><span>Через месяц после блокировки можно подать апелляцию, но, только в случае если бан был получен не за читы или макросы. Писать апелляцию нужно в личные сообщения группы: <a href="https://vk.com/rustepsilon">vk.com/rustepsilon</a></span></div></div></div>'
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
			curcontent["block"].xcon += '<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/metal.facemask.png">\
										<div class="kit-item__quantity block-lvl-'+ (i + 1) +'"></div></div></div>';
			else
			curcontent["block"].xcon += '<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/'+ BlockListArrays[i][b] +'.png">\
										<div class="kit-item__quantity block-lvl-'+ (i + 1) +'"></div></div></div>';
		}
		curcontent["block"].xcon += '</div>';
	}
	curcontent["block"].xcon += '</div>\<br></i></div>';
}