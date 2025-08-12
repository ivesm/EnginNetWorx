<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\HileyController;

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');


Route::get('/testing', function () {
    return Inertia::render('Test/Test');
})->middleware(['auth', 'verified'])->name('testing');

Route::get('/testing_tab', function () {
    return Inertia::render('Test/Test_tabs');
})->middleware(['auth', 'verified'])->name('testing_tab');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::get('/profilehistory', [ProfileController::class, 'history'])->name('profile.history');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

// HileyFormula
Route::middleware('auth')->group(function () {
    Route::get('/hiley', [HileyController::class, 'edit'])->name('hiley.edit');
    Route::patch('/hiley', [HileyController::class, 'update'])->name('hiley.update');
    Route::delete('/hiley', [HileyController::class, 'destroy'])->name('hiley.destroy');
    Route::post('/process-hiley', [HileyController::class, 'store'])->name('hiley.store');
    Route::post('/testing', [HileyController::class, 'testpage'])->name('hiley.test');
    Route::get('/hileyformula', [HileyController::class, 'hileyformula'])->name('hiley.hileyformula');
});




require __DIR__.'/auth.php';
