<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Category;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Category::create([
            'title' => 'elektronik'
        ]);
        Category::create([
            'title' => 'pakaian & aksesoris'
        ]);
        Category::create([
            'title' => 'kesehatan & kecantikan'
        ]);
        Category::create([
            'title' => 'peralatan rumah tangga'
        ]);
        Category::create([
            'title' => 'olahraga dan outdor'
        ]);
    }
}
