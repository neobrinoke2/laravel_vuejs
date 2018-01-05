<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;

class UserController extends Controller
{
	/**
	 * Return all users in json object.
	 *
	 * @return \Illuminate\Http\Response
	 */
	public function getAll() {
		return User::all();
	}

	/**
	 * Return specified user in json object.
	 *
	 * @param  App\User  $user
	 * @return \Illuminate\Http\Response
	 */
	public function getOne(User $user) {
		return $user;
	}
}
