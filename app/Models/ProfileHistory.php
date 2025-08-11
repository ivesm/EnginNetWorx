<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProfileHistory extends Model
{
    //
//
    use HasFactory;

    // Optional: specify the table name if it doesn't follow Laravel's naming convention
    protected $table = 'profilehistory';

    // Optional: specify the primary key if it's not `id`
    protected $primaryKey = 'id';

    // Optional: indicate if the primary key is auto-incrementing
    public $incrementing = true;

    protected $fillable = [
        'user_id' ,
        'project_id',
        'projecttable_id',
        'project_name',
    ];


}
