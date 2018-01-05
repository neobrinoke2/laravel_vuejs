<template>
	<div>
		<table class="ui celled table">
			<thead>
				<tr>
					<th>Nom</th>
					<th>Email</th>
					<th></th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="user in users" :key="user.id">
					<td>{{ user.name }}</td>
					<td>{{ user.email }}</td>
					<td class="collapsing"><button @click.prevent="showUser(user)" class="ui button teal">Détails</button></td>
				</tr>
			</tbody>
		</table>
		<div class="ui modal" id="user_modal" v-if="user">
			<i class="close icon"></i>
			<div class="header">{{ user.name }}</div>
			<div class="image content">
				<div class="description">
					<div class="ui header">We've auto-chosen a profile image for you.</div>
				</div>
			</div>
			<div class="actions">
				<div class="ui black deny button">Nope</div>
				<div class="ui positive right labeled icon button">Yep, that's me<i class="checkmark icon"></i></div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				users: [],
				user: null,
				api: null
			}
		},
		methods: {
			showUser (user) {
				if (this.user == null || this.user.id != user.id) { // check if user is defined and if he is the same as previous
					this.api.get({id: user.id}).then((response) => {
						this.user = response.data
					}, (response) => {
						this.user = {
							name: 'Impossible de trouver l\'utilisateur'
						}
					}).then(() => {
						$('#user_modal').modal('show')
					})
				} else {
					$('#user_modal').modal('show')
				}
			}	
		},
		mounted () {
			this.api = this.$resource('users/{id}', {}, {}, {
				before: () => {
					this.$parent.loading = true
				},
				after: () => {
					this.$parent.loading = false
				}
			})

			this.api.query().then((response) => {
				this.users = response.data
			})
		}
	}
</script>