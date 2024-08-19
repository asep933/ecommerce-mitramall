<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Category;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Product extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'description',
        'price',
        'stock',
        'category_id',
        'image_url'
    ];

    protected $with = 'category';

    public function category(): BelongsTo
    {
        return $this->belongsTo(Category::class);
    }
}
