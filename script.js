const output = document.getElementById("calculOutput");

// Ajouter les valeurs au champ de sortie
document.querySelectorAll('input[type="button"]').forEach((button) => {
  button.onclick = () => {
    if (button.value !== "=" && button.value !== "C") {
      output.value += button.value;
    }
  };
});

// Fonction pour évaluer et afficher le résultat
function calculerResultat() {
  try {
    output.value = eval(output.value);
  } catch (e) {
    output.value = "Erreur";
  }
}

// Fonction pour réinitialiser l'affichage
function resetCalculatrice() {
  output.value = "";
}

// Associer les fonctions aux boutons "=" et "C"
document.querySelector('input[value="="]').onclick = calculerResultat;
document.querySelector('input[value="C"]').onclick = resetCalculatrice;
