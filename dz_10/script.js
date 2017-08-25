var btn = document.getElementById('btn');



btn.addEventListener('click',function () {
	var name = document.getElementById('name').value;
	var login = document.getElementById('login').value;
	var parol = document.getElementById('parol').value;
	var email = document.getElementById('email').value;

	var check_name = document.getElementById('check_name').checked;
	var check_login = document.getElementById('check_login').checked;
	var check_parol = document.getElementById('check_parol').checked;
	var check_email = document.getElementById('check_email').checked;



	function Field() {
		this.show = function () {
			console.log(this.error);
		}
	}

	Field.nameinp = function(text, check){
		var field = new Field();
		var name_regex = /^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$/i;
		field.inputName = text;
			if(check === true){
				if (!name_regex.test(field.inputName)) {
					field.error = 'C ограничением 2-20 символов, которыми могут быть буквы и цифры, первый символ обязательно буква';
				}
			}
		return field;
	};

	Field.logininp = function(text, check){
		var field = new Field();
		field.inputLogin = text;
		if(check === true){
			if(field.inputLogin.length < 3){
				field.error = 'Не корректный логин (меньше 3 букв)';
			}
		}
		return field;
	};

	Field.parolinp = function(text, check){
		var field = new Field();
		var parol_regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/i;
		field.inputParol = text;
		if(check === true){
			if (!parol_regex.test(field.inputParol)) {
				field.error = 'Строчные и прописные латинские буквы, цифры';
			}
		}
		return field;
	};

	Field.emailinp = function(text, check){
		var field = new Field();
		var email_regexp = /[0-9a-zа-я_A-ZА-Я]+@[0-9a-zа-я_A-ZА-Я^.]+\.[a-zа-яА-ЯA-Z]{2,4}/i;
		field.inputEmail = text;
		if(check === true){
			if (!email_regexp.test(field.inputEmail)) {
				field.error = 'Введите правильный Email';
			}
		}
		return field;
	};


	var NameOby = new Field.nameinp(name, check_name);
	var ParolOby = new Field.parolinp(parol, check_parol);
	var LoginOby = new Field.logininp(login, check_login);
	var EmailOby = new Field.emailinp(email, check_email);
	NameOby.show();
	ParolOby.show();
	LoginOby.show();
	EmailOby.show();
});
