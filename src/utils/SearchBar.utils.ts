enum CategoryNameEnum {
  Meubles,
  Electromenager,
  Multimédia,
  Exterieur,
  Papeterie,
  Telephone,
  Informatique,
  GrandeDistribution,
  Bricolage,
  Culture,
  Sport,
  Bebe,
  BienEtre,
  Vehicule,
  Jouets,
}

export namespace SearchBarUtils {
  export function getCategoryName(idCategory: CategoryNameEnum) {
    const dict_mapping = {
      0: "Meubles",
      1: "Électroménager",
      2: "Multimédia",
      3: "Exterieur",
      4: "Papeterie",
      5: "Téléphone",
      6: "Informatique",
      7: "Grande distribution",
      8: "Bricolage",
      9: "Culture",
      10: "Mode",
      11: "Sport",
      12: "Bébé",
      13: "Bien être",
      14: "Véhicule",
      15: "Jouets",
    };

    return dict_mapping[idCategory];
  }
}
