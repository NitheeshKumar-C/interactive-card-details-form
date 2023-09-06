console.log('Hello world!');
$('#card-number').text('0000 0000 0000 0000');
$('#name').text('Name');
$('#month').text('00');
$('#year').text('00');
$('#cvc').text('000');

$('#cn-input').val('');
$('#name-input').val('');
$('#month-input').val('');
$('#year-input').val('');
$('#cvc-input').val('');

$('#name-input').on('input', function () {
	$('#name').text($('#name-input').val());
	document.getElementById('name-err').style.visibility = 'hidden';
	if ($('#name-input').val() == '') {
		$('#name').text('Name');
	}
});

document.getElementById('cn-input').addEventListener('input', function (eve) {
	// console.log(eve)
	var cn = $('#cn-input').val();
	var cnNumber = cn.replace(/\s/g, '');
	if (
		cnNumber.length % 4 == 0 &&
		cnNumber.length < 13 &&
		eve.inputType != 'deleteContentBackward' && (eve.data >=0 && eve.data <= 9)
	) {
		var cn = $('#cn-input').val(cn + ' ');
	}
	$('#card-number').text($('#cn-input').val());
	document.getElementById('cn-err').style.visibility = 'hidden';
	if ($('#cn-input').val() == '') {
		$('#card-number').text('0000 0000 0000 0000');
	}
});

$('#month-input').on('input', function () {
	$('#month').text($('#month-input').val());
	document.getElementById('mmyy-err').style.visibility = 'hidden';
	if ($('#month-input').val() == '') {
		$('#month').text('00');
	}
});

$('#year-input').on('input', function () {
	$('#year').text($('#year-input').val());
	document.getElementById('mmyy-err').style.visibility = 'hidden';
	if ($('#year-input').val() == '') {
		$('#year').text('00');
	}
});

$('#cvc-input').on('input', function () {
	$('#cvc').text($('#cvc-input').val());
	document.getElementById('cvc-err').style.visibility = 'hidden';
	if ($('#cvc-input').val() == '') {
		$('#cvc').text('000');
	}
});

function validate() {
	var validationStatus = true;
	if ($('#name-input').val() == '') {
		document.getElementById('name-err').style.visibility = 'visible';
		validationStatus = false;
	}
	if ($('#cn-input').val().length != 19) {
		if ($('#cn-input').val() == '') {
			document.getElementById('cn-err').style.visibility = 'visible';
			document.getElementById('cn-err').innerHTML = "Can't be blank";
		} else {
			document.getElementById('cn-err').style.visibility = 'visible';
			document.getElementById('cn-err').innerHTML =
				'Card number should be 16 digits';
		}
		validationStatus = false;
	}

	if ($('#year-input').val() == '' || $('#month-input').val() == '') {
		document.getElementById('mmyy-err').style.visibility = 'visible';
		document.getElementById('cn-err').innerHTML = "Can't be blank";
		validationStatus = false;
	}
	if ($('#month-input').val() > 12) {
		document.getElementById('mmyy-err').style.visibility = 'visible';
		document.getElementById('mmyy-err').innerHTML = 'Incorrect month';
		validationStatus = false;
	}
	if ($('#cvc-input').val().length != 3) {
		if ($('#cvc-input').val() == '') {
			document.getElementById('cvc-err').style.visibility = 'visible';
			document.getElementById('cn-err').innerHTML = "Can't be blank";
		} else {
			document.getElementById('cvc-err').style.visibility = 'visible';
			document.getElementById('cvc-err').innerHTML = 'CVC should be 3 digit';
		}
		validationStatus = false;
	}
	if (validationStatus) {
		$('#input-area').css('display', 'none');
		$('#sucessful').css('display', 'flex');
	}
}
