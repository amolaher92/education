<?php
/**
 * The Artisan command
 * @command make:migration
 * @description to generate database migration, each migration filename contains a timestamp
 * @script  php artisan make:migration create_sample_table
 * @extra like to specify the custom path for the generated migration use --path
 */

$artisanDatabaseCommand = [
    'php artisan make:migration create_sample_table',
    'php artisan make:migration create_sample_table --path',
    'php artisan schema:dump',
    'php artisan schema:dump --prune',
    'php artisan migrate',
    'php artisan migrate::status',
    'php artisan migrate --force',
    'php artisan migrate::rollback',
    'php artisan migrate::rollback --step=5',
    'php artisan migrate::reset',
    'php artisan migrate::refresh',
    'php artisan migrate::refresh --seed',
    'php artisan migrate::fresh',
    'php artisan migrate::fresh --seed',
    ''

];

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSampleTable extends Migration
{
    /**
     * The database connection that should be used by the migration
     * @var string
     */
    protected $connection = 'mysql';

    /**
     * Run the migrations
     * @return void
     */
    public function up()
    {
        Schema::create('sample', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('city');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations
     * @return void
     */
    public function down()
    {
        Schema::drop('sample');
    }
}