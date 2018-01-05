<template>
	<div>
		<table class="ui celled table">
			<thead>
				<tr>
					<th rowspan="2">Nom</th>
					<th rowspan="2">Pseudo</th>
					<th rowspan="2">Email</th>
					<th colspan="4">Adresse</th>
				</tr>
				<tr>
					<th>Rue</th>
					<th>Suite</th>
					<th>Ville</th>
					<th>Code postale</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="user in users" :key="user">
					<td>{{ user.name }}</td>
					<td>{{ user.username }}</td>
					<td>{{ user.email }}</td>
					<td>{{ user.address.street }}</td>
					<td>{{ user.address.suite }}</td>
					<td>{{ user.address.city }}</td>
					<td>{{ user.address.zipcode }}</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				users: []
			}
		},
		mounted () {
			this.$http.get('http://jsonplaceholder.typicode.com/users').then((response) => {
				this.users = response.data
			}, (response) => {
				console.log('error')
			})
		}
	}
</script>