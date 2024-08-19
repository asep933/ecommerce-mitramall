<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::factory()->create([
            'name' => 'asep supriatna',
            'email' => 'asep93339@gmail.com',
            'password' => Hash::make('admin123'),
        ]);

        $this->call([
            CategorySeeder::class,
            ProductSeeder::class
        ]);
    }
}
