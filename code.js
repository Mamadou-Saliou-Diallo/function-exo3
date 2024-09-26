document.getElementById('calculer').addEventListener('click', function() {
    // Récupérer la valeur du champ
    const nombre = parseInt(document.getElementById('nombre').value);
    
    // Fonction pour calculer la factorielle
    function factorielle(n) {
        if (n === 0 || n === 1) return 1;
        let resultat = 1;
        for (let i = 2; i <= n; i++) {
            resultat *= i;
        }
        return resultat;
    }

    // Calculer la factorielle
    const resultat = factorielle(nombre);

    // Afficher le résultat
    document.getElementById('resultat').textContent = `La factorielle de ${nombre} est ${resultat}.`;
});