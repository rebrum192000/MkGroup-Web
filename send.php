<?php
$name = $_POST['name'];
$tel = $_POST['tel'];

mail("rebrum1920@mail.ru", "Заявка с сайта", "Имя:".$name.". Телефон: ".$tel,"From: wordpress@bytovka02.ru \r\n")
?>

<script>
	window.location.replace("https://bytovka02.ru/main/");
</script>
