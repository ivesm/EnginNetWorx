<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Hiley extends Model
{
    use HasFactory;

    // Optional: specify the table name if it doesn't follow Laravel's naming convention
    protected $table = 'hileys';

    // Optional: specify the primary key if it's not `id`
    protected $primaryKey = 'id';

    // Optional: indicate if the primary key is auto-incrementing
    public $incrementing = true;

    // Optional: specify the key type if not int
    protected $keyType = 'int';

    // These are the fields that can be mass-assigned
    protected $fillable = [
        'user_id',
        'pilediameter',
        'pilelength',
        'weighthammer',
        'weightanvil',
        'weighthelmet',
        'pileunitweightt',
        'pilebasearea',
        'piletotalweight',
        'weightpileanvilhelmet',
        'freefallheight',
        'efficiencyfall',
        'effectiveheight',
        'finalpenetration',
        'coefficientrestitution',
        'efficiencyblow',
        'potentialenergyhammer',
        'drivingforce',
        'stresspilesdrivingforce',
        'elasticcompresion',
        'elasticcompresionpile',
        'quake',
        'totaltempcompression',
        'ultimatedrivingresistance',
        'strengthreductionfator',
        'designpileload',
    ];

    // Relationships (if applicable) — e.g. assuming each Hiley belongs to a user
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
