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

    /*    echo("User ".$user);
        echo "<br>" ;echo "<br>" ;
        echo("Request : ".$request);echo "<br>" ;echo "<br>" ;
        echo("pilediameter : ".$request->pilediameter);echo "<br>" ;echo "<br>" ;
        echo("pilebasearea : ".$request->pilebasearea);echo "<br>" ;echo "<br>" ;
*/
        $newHiley = new Hiley();

        $newHiley->user_id = $user['id'] ;
        $newHiley->pilediameter = $request->pilediameter ;
        $newHiley->pilelength = $request->pilebasearea ;
        $newHiley->weighthammer = 22 ;
        $newHiley->weightanvil = 22 ;
        $newHiley->weighthelmet = 22 ;
        $newHiley->pileunitweightt = 22 ;
        $newHiley->pilebasearea = 22 ;
        $newHiley->piletotalweight = 22 ;
        $newHiley->weightpileanvilhelmet = 22 ;
        $newHiley->freefallheight = 22 ;
        $newHiley->efficiencyfall = 22 ;
        $newHiley->effectiveheight = 22 ;
        $newHiley->finalpenetration = 22 ;
        $newHiley->coefficientrestitution = 22 ;
        $newHiley->efficiencyblow = 22 ;
        $newHiley->potentialenergyhammer = 22 ;
        $newHiley->drivingforce = 22 ;
        $newHiley->stresspilesdrivingforce = 22 ;
        $newHiley->elasticcompresion = 22 ;
        $newHiley->elasticcompresionpile = 22 ;
        $newHiley->quake = 22 ;
        $newHiley->totaltempcompression = 22 ;
        $newHiley->ultimatedrivingresistance = 22 ;
        $newHiley->strengthreductionfator = 22 ;
        $newHiley->designpileload = 22 ;

        $newHiley->save();


        $result = [
            'value' => 123,
            'message' => 'Processing complete!',
        ];

        // ✅ Redirect to results page and pass the result
        return Inertia::render('ResultsPage', [
            'result' => $result
        ]);

        dd();
    }
}
