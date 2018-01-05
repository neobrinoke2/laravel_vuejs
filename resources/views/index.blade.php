<!doctype html>
<html lang="{{ app()->getLocale() }}">
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title>Laravel</title>
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.13/semantic.min.css">
		<style>
			.ui.inverted.menu {
				border-radius: 0px;
			}
			.router-link-active {
				background-color: #EEE;
			}
		</style>
	</head>
	<body>
		<div id="app">
			<header class="ui inverted menu">
				<div class="ui container">
					<router-link :to="{name: 'root'}" class="header item">Accueil</router-link>
					<router-link :to="{name: 'user.index'}" class="item">Liste des utilisateurs</router-link>
				</div>
			</header>
			<main class="ui container">
				<router-view></router-view>
				<div class="ui dimmer" :class="{active: loading}">
					<div class="ui loader"></div>
				</div>
			</main>
		</div>
		<script src="http://code.jquery.com/jquery-latest.min.js"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.13/semantic.min.js"></script>
		<script src="{{ asset('js/app.js') }}"></script>
	</body>
</html>
