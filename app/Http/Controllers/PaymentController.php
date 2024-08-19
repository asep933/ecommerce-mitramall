<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Midtrans\Config;
use Midtrans\Snap;

class PaymentController extends Controller
{
    public function __construct()
    {
        Config::$serverKey = config('midtrans.server_key');
        Config::$isProduction = config('midtrans.is_production');
        Config::$isSanitized = config('midtrans.is_sanitized');
        Config::$is3ds = config('midtrans.is_3ds');
    }

    public function createToken(Request $request)
    {
        $validated = $request->validate([
            'products' => 'required|array',
            'quantities' => 'required|array'
        ]);

        $products = $request->products;
        $quantities = $request->quantities;
        $total_price = 0;

        $item_details = [];

        foreach ($products as $index => $product) {
            $item_details[] = [
                'id' => $product['id'],
                'price' => $product['price'],
                'quantity' => $quantities[$index],
                'name' => $product['title'],
            ];
            $total_price += $product['price'] * $quantities[$index];
        }

        $params = [
            'transaction_details' => [
                'order_id' => rand(),
                'gross_amount' => $total_price
            ],
            'item_details' => $item_details,
            'credit_card' => [
                'secure' => true
            ],
            // 'customer_details' => [
            //     'first_name' => $request->first_name,
            //     'last_name' => $request->last_name,
            //     'email' => $request->email,
            //     'phone' => $request->phone,
            // ],
        ];

        $snapToken = Snap::getSnapToken($params);

        return inertia('Order', [
            'token' => $snapToken,
            'products' => $item_details,
            'totalPrice' => $total_price 
        ]);
    }

    public function notification()
    {
        return redirect()->to_route('dashboard');
    }
}
