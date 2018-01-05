<!doctype html>
<html lang="{{ app()->getLocale() }}">
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title>Laravel</title>
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.13/semantic.min.css">
		<style>
			.main {
				margin-top: 50px;
			}
			.router-link-active {
				background-color: #EEE;
			}
		</style>
	</head>
	<body>
		<div id="app">
			<div class="ui fixed inverted menu">
				<div class="ui container">
					<router-link :to="{name: 'root'}" class="header item">Accueil</router-link>
					<router-link :to="{name: 'a'}" class="item">A</router-link>
					<router-link :to="{name: 'b'}" class="item">B</router-link>
					<router-link :to="{name: 'c'}" class="item">C</router-link>
				</div>
			</div>
			<div class="main">
				<div class="ui container">
					<router-view></router-view>
				</div>
			</div>
		</div>
		<script src="{{ asset('js/app.js') }}"></script>
	</body>
</html>
