<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProjectOptions extends Model
{
    //
    use HasFactory;

    // Optional: specify the table name if it doesn't follow Laravel's naming convention
    protected $table = 'projectoptions';

    // Optional: specify the primary key if it's not `id`
    protected $primaryKey = 'id';

    // Optional: indicate if the primary key is auto-incrementing
    public $incrementing = true;

    protected $fillable = [
        'project_tablename',
    ];
}
