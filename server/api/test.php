<?php

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

use Square\SquareClient;
use Square\Exceptions\ApiException;

require '../vendor/autoload.php'; // Ensure you have installed the Square SDK via Composer
require_once("../config-url.php");

// Initialize the Square client
$client = new SquareClient([
    'accessToken' => ACCESS_TOKEN,
    'environment' => ENVIRONMENT
]);

try {
    $api_response = $client->getCatalogApi()->listCatalog(null, 'ITEM,IMAGE');

    if ($api_response->isSuccess()) {
        $result = $api_response->getResult();
        // Process the result as needed

        $images = [];
        $items = [];

        // Loop through catalog objects and separate by type
        foreach ($result->getObjects() as $object) {
            if ($object->getType() === 'ITEM') {
                $items[] = $object;
            } elseif ($object->getType() === 'IMAGE') {
                $images[] = $object;
            }
        }

        echo json_encode(
            array(
                'images' => $images,
                'items' => $items
            )
        );
    } else {
        $errors = $api_response->getErrors();
        // Handle the errors as needed
        echo 'Error: ' . json_encode($errors);
    }
} catch (ApiException $e) {
    // Handle the exception as needed
    echo 'Caught exception: ',  $e->getMessage(), "\n";
}
