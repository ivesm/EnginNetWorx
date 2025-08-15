<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('hileys', function (Blueprint $table) {
            $table->increments('id');// Record Id

            $table->integer('user_id')->index()->comment('this is the user ID');
            $table->float('pilediameter')->comment('this is the Pile Diameter');
            $table->float('pilelength')->comment('this is the Pile Length');
            $table->float('weighthammer')->comment('this is the Weight of hammer');
            $table->float('weightanvil')->comment('this is the anvil');
            $table->float('weighthelmet')->comment('this is the Weight of helmet');
            $table->float('pileunitweightt')->comment('this is the Pile unit weight');
            $table->float('pilebasearea')->comment('this is the Pile base area');
            $table->float('piletotalweight')->comment('this is the Pile total weight');
            $table->float('weightpileanvilhelmet')->comment('this is the Weight of pile, anvil, & helmet');
            $table->float('freefallheight')->comment('this is the Free fall height of hammer');
            $table->float('efficiencyfall')->comment('this is the Efficiency of fall');
            $table->float('effectiveheight')->comment('this is the Effective height of fall');
            $table->float('finalpenetration')->comment('this is the Final set or penetration per blow -- mean of final 10 blows --');
            $table->float('coefficientrestitution')->comment('this is the Coefficient of restitution');
            $table->float('efficiencyblow')->comment('this is the Efficiency of the blow');
            $table->float('potentialenergyhammer')->comment('this is the Potential Energy of hammer om Free fall');
            $table->float('drivingforce')->comment('this is the driving force');
            $table->float('stresspilesdrivingforce')->comment('this is the Stress in Piles due to Driving Force');
            $table->float('elasticcompresion')->comment('this is the Elastic compression of pile head / dolly / packing');
            $table->float('elasticcompresionpile')->comment('this is the Elastic compression of pile');
            $table->float('quake')->comment('this is the Quake of the ground beneath pile');
            $table->float('totaltempcompression')->comment('this is the Total Temporary Compression');
            $table->float('ultimatedrivingresistance')->comment('this is the Ultmate Driving resistance');
            $table->float('strengthreductionfator')->comment('this is the Strength Reduction Factor');
            $table->float('designpileload')->comment('this is the Desin Pile Load');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('hileys');
    }
};
