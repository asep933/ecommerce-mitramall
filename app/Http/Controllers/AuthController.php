<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use App\Models\User;
use Inertia\Inertia;

class AuthController extends Controller
{
    public function registerPage()
    {
        return Inertia::render('SignUp');
    }

    public function loginPage()
    {
        return Inertia::render('SignIn');
    }

    public function register(Request $request): RedirectResponse
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:30',
            'email' => 'required|email|unique:users,email',
            'password' => 'required|min:4'
        ]);

        if($validator->fails()) {
           return back()->withErrors($validator->fails());
        }

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => $request->password,
        ]);

        $request->session()->regenerate();

        Auth::login($user);

        return redirect()->route('dashboard')->with('success', 'successfully registered');;
    }

    public function login(Request $request): RedirectResponse
    {
        $credentials = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required'],
        ]);
 
        if (Auth::attempt($credentials)) {
            $request->session()->regenerate();
 
            return redirect()->route('dashboard')->with('success', 'successfully login');
        }
 
        return back()->withErrors([
            'email' => 'The provided credentials do not match our records.',
        ])->onlyInput('email');
    }

    public function logout(Request $request): RedirectResponse
    {
        Auth::logout();
     
        $request->session()->invalidate();
     
        $request->session()->regenerateToken();
     
        return redirect()->route('dashboard')->with('success', 'successfully logout');;
    }
}