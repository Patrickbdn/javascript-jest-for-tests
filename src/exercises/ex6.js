// Fonction pour afficher les résultats
function displayResult(message) {
    const resultsElement = document.getElementById('test-results');
    resultsElement.textContent += message + '\n';
  }
  
  // 1. Fonction pour trouver la valeur maximale dans un tableau
  function findMax(arr) {
    if (arr.length === 0) return null;
    return Math.max(...arr);
  }
  
  displayResult("1. Test de la fonction findMax valeurs en double:");
  displayResult(`Tableau [1, 3, 5, 2, 4] : ${findMax([1, 3, 5, 2, 4])}`);
  displayResult(`Tableau [-1, -5, -2] : ${findMax([-1, -5, -2])}`);
  displayResult(`Tableau vide [] : ${findMax([])}`);
  
  // 2. Fonction pour supprimer les valeurs en double d'un tableau
  function removeDuplicates(arr) {
    return [...new Set(arr)];
  }
  
  displayResult("\n2. Test de la fonction removeDuplicates supprime les valeurs en double:");
  displayResult(`Tableau [1, 2, 2, 3, 4, 4, 5] : ${removeDuplicates([1, 2, 2, 3, 4, 4, 5])}`);
  displayResult(`Tableau ['a', 'b', 'a', 'c', 'b'] : ${removeDuplicates(['a', 'b', 'a', 'c', 'b'])}`);
  displayResult(`Tableau [1, 1, 1, 1] : ${removeDuplicates([1, 1, 1, 1])}`);
  
  // 3. Fonction pour vérifier si un tableau inclut une valeur spécifique
  function includesValue(arr, value) {
    return arr.includes(value);
  }
  
  displayResult("\n3. Test de la fonction includesValue Inclue une valeur:");
  displayResult(`Tableau [1, 2, 3, 4, 5] inclut 3 : ${includesValue([1, 2, 3, 4, 5], 3)}`);
  displayResult(`Tableau [1, 2, 3, 4, 5] inclut 6 : ${includesValue([1, 2, 3, 4, 5], 6)}`);
  displayResult(`Tableau vide [] inclut 1 : ${includesValue([], 1)}`);
  
  // 4. Fonction pour trier un tableau de nombres par ordre croissant
  function sortAscending(arr) {
    return [...arr].sort((a, b) => a - b);
  }
  
  displayResult("\n4. Test de la fonction sortAscending tri par ordre croissant:");
  displayResult(`Tableau [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5] : ${sortAscending([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5])}`);
  displayResult(`Tableau [-3, 0, 3, -1, 1] : ${sortAscending([-3, 0, 3, -1, 1])}`);
  displayResult(`Tableau [10, 5, 8, 3] : ${sortAscending([10, 5, 8, 3])}`);