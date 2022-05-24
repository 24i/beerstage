<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\View;

class DataController extends Controller
{
    
    public function store(Request $request)
    {
        $data = $request->all();

        DB::table('data')->updateOrInsert([
            'id' => $data['id'],
            'data' => json_encode($data)
        ]);
    }

    public function retrieve()
    {
        return null;
    }

}
