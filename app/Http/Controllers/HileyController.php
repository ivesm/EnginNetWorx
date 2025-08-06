<?php

namespace App\Http\Controllers;

use App\Models\Hiley;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;
use Inertia\Response;

class HileyController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
        $user = auth()->user();

        print_r("User ");
        print_r("User ".$user->getAuthIdentifierName());
        dd("TEsting" );
        dd($request->all());
        $newHiley = new Hiley();


    }

    /**
     * Display the specified resource.
     */
    public function show(Hiley $hiley)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Hiley $hiley)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Hiley $hiley)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Hiley $hiley)
    {
        //
    }

    public function testpage(Request $request){


        $user = auth()->user();

        echo ($request->user());
        print_r("User ".$user,true);

        dd("Another user" );
        $newHiley = new Hiley();

        dd();
    }
}
