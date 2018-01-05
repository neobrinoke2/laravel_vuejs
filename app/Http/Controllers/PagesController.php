<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PagesController extends Controller
{
	/**
	 * Display the vue for vuejs
	 */
	public function show()
	{
		return view('index');
	}
}
