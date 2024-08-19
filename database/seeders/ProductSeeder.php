<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Product;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Product::create([
            'title' => 'laptop',
            'description' => 'sebuah laptop dengan harga murah',
            'price' => 7000000.00,
            'stock' => 22,
            'category_id' => 1,
            'image_url' => 'storage/images/products/laptop.jpeg',
        ]);
        Product::create([
            'title' => 'handphone',
            'description' => 'sebuah handphone dengan harga murah',
            'price' => 4000000.00,
            'stock' => 62,
            'category_id' => 1,
            'image_url' => 'storage/images/products/phone.jpeg',
        ]);
        Product::create([
            'title' => 'celana',
            'description' => 'sebuah celana dengan harga murah',
            'price' => 100000.00,
            'stock' => 222,
            'category_id' => 2,
            'image_url' => 'storage/images/products/pants.jpeg',
        ]);
        Product::create([
            'title' => 'topi',
            'description' => 'sebuah topi dengan harga murah',
            'price' => 90000.00,
            'stock' => 2232,
            'category_id' => 2,
            'image_url' => 'storage/images/products/hat.jpeg',
        ]);
        Product::create([
            'title' => 'sunscreen',
            'description' => 'sebuah sunscreen dengan harga murah',
            'price' => 60000.00,
            'stock' => 232,
            'category_id' => 3,
            'image_url' => 'storage/images/products/sunscreen.jpeg',
        ]);
        Product::create([
            'title' => 'mangkok',
            'description' => 'sebuah laptop dengan harga murah',
            'price' => 15000.00,
            'stock' => 253,
            'category_id' => 4,
            'image_url' => 'storage/images/products/bowl.jpeg',
        ]);
        Product::create([
            'title' => 'bola',
            'description' => 'sebuah bola dengan harga murah',
            'price' => 200000.00,
            'stock' => 653,
            'category_id' => 5,
            'image_url' => 'storage/images/products/ball.jpeg',
        ]);
        Product::create([
            'title' => 'sepeda',
            'description' => 'sebuah sepeda lipat dengan harga murah',
            'price' => 150000.00,
            'stock' => 53,
            'category_id' => 5,
            'image_url' => 'storage/images/products/bicycle.jpeg',
        ]);
        
    }
}
