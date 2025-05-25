// Itération avec Async/Await
async function iterateWithAsyncAwait(array) {
  for (const value of array) {
    console.log(value);
    await new Promise((resolve) => setTimeout(resolve, 1000));
  }
}

// Tâche 02 : En attente d'un appel
async function awaitCall() {
  // Simulation d'un appel API avec un délai
  const response = await new Promise((resolve) =>
    setTimeout(() => resolve({ data: "Données de l'API reçues !" }), 1000)
  );
  console.log(response.data);
}

//Tâche 03 : Gestion des erreurs et enchaînement Async/Await
// Version avec gestion d'erreurs
async function awaitCall() {
    try {
        const response = await new Promise((resolve, reject) => 
            setTimeout(() => {
                const success = Math.random() > 0.2; // 80% de succès
                success ? resolve({ data: "Données reçues !" }) : reject("API indisponible");
            }, 1000)
        );
        console.log(response.data);
    } catch (error) {
        console.error("Erreur lors de l'appel API :", error);
    }
}

// Enchaînement de fonctions asynchrones
async function firstAsync() {
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log("Première fonction terminée");
}

async function secondAsync() {
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log("Deuxième fonction terminée");
}

async function thirdAsync() {
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log("Troisième fonction terminée");
}

async function chainedAsyncFunctions() {
    await firstAsync();
    await secondAsync();
    await thirdAsync();

}

//Tâche 04 : Requêtes simultanées
async function concurrentRequests() {
    const [response1, response2] = await Promise.all([
        fetch('https://jsonplaceholder.typicode.com/posts/1'),
        fetch('https://jsonplaceholder.typicode.com/posts/2')
    ]);
    const data1 = await response1.json();
    const data2 = await response2.json();
    console.log("Résultats combinés :", { data1, data2 });
}

//Tâche 05 : Appels parallèles
async function parallelCalls(urls) {
    const responses = await Promise.all(urls.map(url => 
        fetch(url).then(res => res.json())
    ));
    console.log("Toutes les réponses :", responses);
}

// Exemple d'utilisation :
const urls = [
    'https://jsonplaceholder.typicode.com/posts/1',
    'https://jsonplaceholder.typicode.com/posts/2',
    'https://jsonplaceholder.typicode.com/posts/3'
]