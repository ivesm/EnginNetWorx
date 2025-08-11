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
        Schema::create('profilehistory', function (Blueprint $table) {
            $table->id();
            $table->integer('user_id')->index()->comment('this is the user ID');
            $table->integer('project_id')->index()->comment('this is the Project ID');
            $table->integer('projecttable_id')->index()->comment('this is the Project ID');
            $table->string('project_name');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('profilehistory');
    }
};
