export const db_plus_7 = [
  //Question 1 Fermer
  {
    id: 1,
    type: "Fermer",
    Question: "Est-ce que je peux partager mon idée/opinion avec quelqu’un ?",
    Response: true,
    Win: [
      "Chaque enfant a le droit de dire, d’écrire ou même de dessiner ce qu’il pense. Il a donc le droit d’avoir une idée, un avis ou une opinion concernant n’importe quel sujet.",
      "Un enfant a le droit de partager son opinion avec tout le monde tout en respectant certaines consignes.",
    ],
    Failed: "Pas de Chance",
  },
  //Question 2 Ouvert
  {
    id: 2,
    type: "Ouvert",
    Question:
      "Quelles sont les consignes que je dois respecter pour exprimer mon idée/opinion",
    GoodReponse: [
      "Je ne dois pas faire du mal aux autres.",
      "Je ne dois pas créer des problèmes à l’école, dans la maison ou dans la rue.",
      "Je ne dois pas atteindre les droits de l’autre.",
      "Je ne dois pas inciter à la haine, à la violence ou à la discrimination.",
    ],
    BadReponse: [
      "Je dois imposer mon opinion en utilisant la violence.",
      "Je dois crier et parler à haute voix pour exprimer mon avis.",
      "Je ne dois pas écouter les autres quand ils parlent.",
    ],
    Win: "Bravo",
    Faild: "Pas de Chance",
  },
  //Question 3
  {
    id: 3,
    type: "Fermer",
    Response: true,
    Question: "Est-ce que je peux demander une information à quelqu’un",
    Win: [
      "Chaque enfant a le droit de dire, d’écrire ou même de dessiner ce qu’il pense. Il a donc le droit d’avoir une idée, un avis ou une opinion concernant n’importe quel sujet.",
      "Un enfant a le droit de partager son opinion avec tout le monde tout en respectant certaines consignes.",
    ],
    Failed: "Pas de Chance",
  },
  //Question 4
  {
    id: 4,
    type: "Fermer",
    Response: false,
    Question: "Est-ce que je peux avoir un avis différent des autres ",
    Win: [
      "Chaque enfant a le droit de dire, d’écrire ou même de dessiner ce qu’il pense. Il a donc le droit d’avoir une idée, un avis ou une opinion concernant n’importe quel sujet.",
      "Un enfant a le droit de partager son opinion avec tout le monde tout en respectant certaines consignes.",
    ],
    Failed: "Pas de Chance",
  },
  //Question 5
  {
    id: 5,
    type: "Fermer",
    Response: true,
    Question: "Est-ce que je peux avoir un avis différent des autres ",
    Win: [
      "Même derrière un écran, tout ce que je dis est important. Je dois donc toujours faire attention à ce que j’exprime et je dois respecter les mêmes consignes : ne pas faire du mal aux autres, ne pas créer de problèmes et ne pas inciter à la haine et la violence.",
    ],
    Failed: "Pas de Chance",
  },
  //Question 6
  {
    id: 6,
    type: "Fermer",
    Response: false,
    Question:
      "Est-ce que je peux donner mon avis dans les décisions de la maison ",
    Win: [
      "•	Un enfant a le droit de participer à la prise de décision de famille. Il doit être capable d’exprimer son opinion et qu’il soit pris en considération par ses parents.",
    ],
    Failed: "Pas de Chance",
  },
  //Question 7 Ouvert
  {
    id: 7,
    type: "Ouvert",
    Question: "Choisis les situations où tu peux donner ton avis à la maison",
    GoodReponse: [
      "Ce que je vais manger.",
      "Le choix de l’école.",
      "Le choix des habits que je vais porter.",
      "Le choix de la destination du voyager des vacances.",
    ],
    BadReponse: [
      "Les dépenses de la maison.",
      "Les problèmes entre papa et maman.",
    ],
    Win: "Bravo",
    Faild: "Pas de Chance",
  },
  //Question 8
  {
    id: 8,
    type: "Fermer",
    Response: false,
    Question:
      "Est-ce que je peux participer à la prise de décisions politiques qui concernent l’enfant et l’adolescent ",
    Win: [
      "Chaque enfant a le droit de donner son opinion dans des sujets qui le concernent. Cela doit être fait en respectant les mêmes conditions et consignes présentées auparavant, en plus de le faire dans un cadre réglementé.",
    ],
    Failed: "Pas de Chance",
  },
];
export const db_moins_7 = [
  //Question 1
  {
    id: 1,
    Question:
      "Un enfant peut-être frappé par un adulte ou une autre personne ?",
    Response: true,
    Message:
      "Personne n’a le droit de me frapper, et je n’ai pas le droit de frapper les autresLa violence n’est pas la solution !",
    Avatar: "",
  },
  //Question 2
  {
    id: 2,
    Question: "Personne ne peut m’insulter, et je ne dois insulter personne ?",
    Response: false,
    Message: "Personne ne peut m’insulter, et je ne dois insulter personne. !",
    Avatar: "",
  },
  //Question 3
  {
    id: 3,
    Question: "Un enfant peut-être câliné, embrassé par papa et maman ?",
    Response: false,
    Message:
      "Papa et maman peuvent me faire des câlins et des bisous mais je ne dois pas laisser une autre personne me toucher.!",
    Avatar: "",
  },
  //Question 4 
  {
    id: 4,
    Question: "A quels endroits on ne doit pas te toucher ?",
    Response: true,
    Option: ["Mon visage", "Mes fesses", "Mes parties intimes", "Ma poitrine"],
    Message:
      "Personne n’a le droit de me frapper, et je n’ai pas le droit de frapper les autresLa violence n’est pas la solution !",
    Avatar: "",
  },
  //Question 5
  {
    id: 5,
    Question: "Un enfant dois être aimé par papa et maman ?",
    Response: true,
    Message:
      "J’ai le droit d’être aimé par papa et maman sans être mis à l’écart, au petit coin ou encore négligé",
    Avatar: "",
  },
];
