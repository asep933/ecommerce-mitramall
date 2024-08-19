<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\CheckoutController;
use App\Http\Controllers\PaymentController;

Route::get('/', [ProductController::class, 'index'])->name('dashboard');
Route::inertia('/about', 'About')->name('about');
Route::inertia('/contact', 'Contact')->name('contact');

Route::middleware('guest')->group(function() {
	Route::get('/sign-up', [AuthController::class, 'registerPage']);
	Route::get('/sign-in', [AuthController::class, 'loginPage']);
});

Route::controller(AuthController::class)->group(function() {
	Route::post('/register-process', 'register')->middleware('guest');
	Route::post('/login-process', 'login')->middleware('guest');
	Route::get('/logout', 'logout')->middleware('auth');
});

Route::controller(CheckoutController::class)->group(function() {
	Route::get('/cart', 'create');
});

Route::controller(PaymentController::class)->group(function() {
	Route::post('/order', 'createToken');
	Route::get('/notification', 'notification');
});

Route::resource('/product', ProductController::class);
Route::resource('/category', CategoryController::class);