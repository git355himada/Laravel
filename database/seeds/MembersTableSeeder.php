<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
class MembersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('members')->insert(
            [
              [
                'name'=>'shimada',
                'telephone'=>'xxxx-xxxxx',
                'email'=>'shimada@example.com',
                'created_at'=>now(),
                'updated_at'=>now(),
              ],

              ]
        );
    }
}
