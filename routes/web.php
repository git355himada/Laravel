<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

// 一覧
Route::get('member/index', 'MemberController@index')->name('member.index');
// 新規登録画面
Route::get('create', 'MemberController@create')->name('member.create');
// 登録処理
Route::post('store', 'MemberController@store')->name('member.store');
// 詳細画面
Route::get('show/{id}', 'MemberController@show')->name('member.show');
// 編集画面
Route::get('edit/{id}', 'MemberController@edit')->name('member.edit');
// 更新画面
Route::post('update/{id}', 'MemberController@update')->name('member.update');
// 削除機能
Route::post('destroy/{id}', 'MemberController@destroy')->name('member.destroy');
Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
