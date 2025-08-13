<?php

namespace App\Http\Controllers;

use App\Models\Hiley;
use App\Models\ProfileHistory ;
use App\Models\ProjectOptions ;
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
        $user = auth()->user();
        $tablenameID = ProjectOptions::select('id')
            ->where('project_tablename', 'hileys')->first();

        $newHiley = new Hiley();

        $newHiley->user_id = $user['id'] ;
        $newHiley->pilediameter =  $request->pilediameter ??   0;
        $newHiley->pilelength =  $request->pilebasearea ??   0;
        $newHiley->weighthammer  =    $request->weighthammer ??   0;
        $newHiley->weightanvil  =    $request->weightanvil ??   0;
        $newHiley->weighthelmet  =    $request->weighthelmet ??   0;
        $newHiley->pileunitweightt  =    $request->pileunitweightt ??   0;
        $newHiley->pilebasearea  =    $request->pilebasearea ??   0;
        $newHiley->piletotalweight  =    $request->piletotalweight ??   0;
        $newHiley->weightpileanvilhelmet  =    $request->weightpileanvilhelmet ??   0;
        $newHiley->freefallheight  =    $request->freefallheight ??   0;
        $newHiley->efficiencyfall  =    $request->efficiencyfall ??   0;
        $newHiley->effectiveheight  =    $request->effectiveheight ??   0;
        $newHiley->finalpenetration  =    $request->finalpenetration ??   0;
        $newHiley->coefficientrestitution  =    $request->coefficientrestitution ??   0;
        $newHiley->efficiencyblow  =    $request->efficiencyblow ??   0;
        $newHiley->potentialenergyhammer  =    $request->potentialenergyhammer ??   0;
        $newHiley->drivingforce  =    $request->drivingforce ??   0;
        $newHiley->stresspilesdrivingforce  =    $request->stresspilesdrivingforce ??   0;
        $newHiley->elasticcompresion  =    $request->elasticcompresion ??   0;
        $newHiley->elasticcompresionpile  =    $request->elasticcompresionpile ??   0;
        $newHiley->quake  =    $request->quake ??   0;
        $newHiley->totaltempcompression  =    $request->totaltempcompression ??   0;
        $newHiley->ultimatedrivingresistance  =    $request->ultimatedrivingresistance ??   0;
        $newHiley->strengthreductionfator  =    $request->strengthreductionfator ??   0;
        $newHiley->designpileload  =    $request->designpileload ??   0;

        $newHiley->save();

        $newprojectHistory = new ProfileHistory();

        $newprojectHistory->user_id = $user['id'] ;
        $newprojectHistory->project_id =$newHiley->id ;
        $newprojectHistory->projecttable_id = $tablenameID['id'];
        $newprojectHistory->project_name = $request->projectname ??  'New Hiley Project' ;
        $newprojectHistory->save();

        // ✅ Redirect to results page and pass the result
        return  redirect()->route('hileyformula.hileyformula') ;
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        //
        $hileyprojects =  Hiley::where ('id', '=', $id)->get();

        // If you want JSON (pure AJAX)
        if (request()->wantsJson()) {
            return response()->json($hileyprojects);
        }

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
    public function hileyformula(Request $request): Response
    {
        $user = $request->user();
        $profileHistory = ProfileHistory::where('user_id', '=', $user->id)->get();


        return Inertia::render('Piles/Hileyformula', [
            'status' => session('status'),
            'result' => $profileHistory,
        ]);
    }

    public function testpage(Request $request){


        $user = auth()->user();
        $tablenameID = ProjectOptions::select('id')
        ->where('project_tablename', 'hileys')->first();

        $newHiley = new Hiley();

        $newHiley->user_id = $user['id'] ;
        $newHiley->pilediameter =  $request->pilediameter ??   0;
        $newHiley->pilelength =  $request->pilebasearea ??   0;
        $newHiley->weighthammer  =    $request->weighthammer ??   0;
        $newHiley->weightanvil  =    $request->weightanvil ??   0;
        $newHiley->weighthelmet  =    $request->weighthelmet ??   0;
        $newHiley->pileunitweightt  =    $request->pileunitweightt ??   0;
        $newHiley->pilebasearea  =    $request->pilebasearea ??   0;
        $newHiley->piletotalweight  =    $request->piletotalweight ??   0;
        $newHiley->weightpileanvilhelmet  =    $request->weightpileanvilhelmet ??   0;
        $newHiley->freefallheight  =    $request->freefallheight ??   0;
        $newHiley->efficiencyfall  =    $request->efficiencyfall ??   0;
        $newHiley->effectiveheight  =    $request->effectiveheight ??   0;
        $newHiley->finalpenetration  =    $request->finalpenetration ??   0;
        $newHiley->coefficientrestitution  =    $request->coefficientrestitution ??   0;
        $newHiley->efficiencyblow  =    $request->efficiencyblow ??   0;
        $newHiley->potentialenergyhammer  =    $request->potentialenergyhammer ??   0;
        $newHiley->drivingforce  =    $request->drivingforce ??   0;
        $newHiley->stresspilesdrivingforce  =    $request->stresspilesdrivingforce ??   0;
        $newHiley->elasticcompresion  =    $request->elasticcompresion ??   0;
        $newHiley->elasticcompresionpile  =    $request->elasticcompresionpile ??   0;
        $newHiley->quake  =    $request->quake ??   0;
        $newHiley->totaltempcompression  =    $request->totaltempcompression ??   0;
        $newHiley->ultimatedrivingresistance  =    $request->ultimatedrivingresistance ??   0;
        $newHiley->strengthreductionfator  =    $request->strengthreductionfator ??   0;
        $newHiley->designpileload  =    $request->designpileload ??   0;

        $newHiley->save();

        $newprojectHistory = new ProfileHistory();

        $newprojectHistory->user_id = $user['id'] ;
        $newprojectHistory->project_id =$newHiley->id ;
        $newprojectHistory->project_table = 'hileys';
        $newprojectHistory->project_name = $request->projectname ??  'New Hiley Project' ;
        $newprojectHistory->save();

        // ✅ Redirect to results page and pass the result
        return Inertia::render('Piles/Hileyformula_results', [
            'result' => $newHiley->toArray()
        ]);
    }
}
