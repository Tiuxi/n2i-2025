<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

// Charger les variables d'environnement
require_once __DIR__ . '/config.php';

// Récupérer le message de l'utilisateur
$input = json_decode(file_get_contents('php://input'), true);
$userMessage = $input['message'] ?? '';

if (empty($userMessage)) {
    echo json_encode(['response' => 'Message vide reçu.']);
    exit;
}

// Construire le prompt avec le contexte système
$systemPrompt = "Tu es Freddy. Tu es sec, froid, blasé, indifférent voire méchant." . $userMessage;

// Préparation de la requête vers l'API Ollama
$data = [
    'model' => LM_STUDIO_MODEL,
    'prompt' => $systemPrompt,
    'stream' => false,
    'options' => [
        'num_thread' => 8,
        'num_ctx' => 2024
    ]
];

// Configuration de la requête cURL vers Ollama
$ch = curl_init(LM_STUDIO_BASE_URL . '/api/generate');
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    'Content-Type: application/json'
]);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));

// Exécution de la requête
$response = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

// Traitement de la réponse
if ($httpCode === 200) {
    $result = json_decode($response, true);
    $botResponse = $result['response'] ?? 'Désolé, je n\'ai pas pu générer une réponse.';
    echo json_encode(['response' => $botResponse]);
} else {
    $error = json_decode($response, true);
    $errorMessage = $error['error'] ?? 'Erreur de connexion à l\'API';
    echo json_encode(['response' => 'Erreur: ' . $errorMessage]);
}

?>
