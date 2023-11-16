//Array of Objets//
const quiz = [
  {
    q: 'Citer l^organe et fluide biologique suivant qui n^appartient pas à la première ligne de défense de l^organisme: ',
    options:['Ganglion lymphatique', 'Poils', 'Salive', 'Système lacrymal', 'Peau et muqueux'],
    answer: 1
  },
  {
    q: 'Citer l^item qui est faux pour les caractéristiques des lymphocytes T ',
    options:['Ils ont des durées de vie très courtes', 'Les lymphocytes T sont très peu recirculants dans le sang périphérique', 'En microscopie électronique, leur membrane paraît lisse, noyau dense et cytoplasme très fin', 'Dans les milieux de culture adéquats, les lymphocytes T se transforment en lymphoblastes', 'ils expriment à leur surface toutes les classes d^immunoglobulines'],
    answer: 3
  },
  {
    q: 'Citer les cellules qui sont des cellules non auxiliaires du système immunitaire ',
    options: ['Keratocytes', 'Mastocytes', 'Hématies', 'Cellules Langerhans', 'Cellule dendritique'],
    answer: 2
  },
  {
    q: 'Citer un item qui est faux, pour les activités de macrophage',
    options: ['Est une cellule présentatrice d^antigène', 'Est capable d^absorber les pathogènes', 'Est capable de tuer des bactéries', 'Synthétise des immunoglobulines', 'Synthétise les interleukine'],
    answer: 3
  },
  {
    q: 'Parmi les propositions suivantes, indiquez celle(s) qui est exacte(s). L^histamine est ' ,
    options: ['Le produit de décarboxylation de molécules amine carboxylé', 'Un vasoconstricteur puissant', 'Un produit de transamination de l^histidine', 'Un produit libéré lors du processus inflammatoire', 'Un non stimulant des sécrétions de l^estomac'],
    answer: 3
  },
  {
    q: 'Indiquez la réponse fausse. Le thymus',
    options: ['Est un organe lymphoïde périphérique', 'Est un organe lymphoïde primaire ou central', ' Augmente de taille jusqu^à la puberté puis reste à la même volume chez le sujet âgé', 'Permet la différenciation des lymphocytes T', 'Contient des thymocytes dont la différenciation n’est pas contrôlée par les cellules '],
    answer: 0
  },
  {
    q: 'Citer la fonction de macrophage, qui est juste',
    options: ['Induction de la réponse inflammatoire', 'Pas de recrutement cellulaire', 'N’a pas fait la présentation de peptide', 'Action non immédiate en immunité naturelle', 'N’a pas réagi à l’action des pathogènes'],
    answer: 0
  },
  {
    q: ' Citer les caractéristiques de lymphocytes B, qui est juste:',
    options: ['Existe des récepteurs à l’antigène BCR sur la membrane', 'Contient des molécules membranaires CD3CD4, CD3CD8', 'Entre 40-50% en nombre de lymphocytes sanguins', 'Présentatrice des immunoglobuline', 'Présentatrice d’autres molécules membranaires'],
    answer: 0
  },
  {
    q: 'Citer une des caractéristiques de la fonction immunitaire de lymphocytes T',
    options: ['Reconnaissance de l’antigène spécifique par le récepteur BCR', 'Pas de régulation de la réponse immune', 'Fonction effectrice.', 'Pas de présentatrice de peptides', 'Pas de mémoire immunologique'],
    answer: 2
  },
  {
    q: 'Le rôle de lymphocyte T4 ou CD4 au cours d’une réponse immunitaire, citer l’item qui est juste',
    options: ['Rôle cytotoxique (CTL) càd il sécrète une substance capable de lyser les organismes ', 'Rôle de régulation au cours d’une réponse cellulaire', 'Rôle de régulation au cours d’une réponse à la fois cellulaire et humoral', ' Rôle d’éliminer les corps étrangers par sécrétion des lymphokines', 'Rôle de présentatrice de l’antigène aux autres cellules du système immunitaire'],
    answer: 2
  },
  {
    q: ' L’item faux pour la définition de la fonction fondamentale du système immunitaire :',
    options: ['Reconnaître les molécules étrangères à l’organisme - Définir le soi et le non soi', 'Assurer la défense du soi et éliminer le non soi', 'Discriminer spécifiquement et sélectivement les moléculaires étrangères et les molécules ', 'Stocker l’information avant de définir le soi et le non soi', 'constitutives de son propre organisme.'],
    answer: 3
  },
  {
    q: ' Parmi les cellules sous mentionnées,citer celles qui participent au système immunitaire par son action d^opsonisation sur l^antigène ?',
    options: ['Les plaquettes', ' Les lymphocytes (B)', 'Les polynucléaires neutrophiles', 'Les hématies', 'Les lymphocytes (T)'],
    answer: 2
  },
  {
    q: ' Le système immunitaire est composé de cellules spécialisées et d’effecteur moléculaire ou molécules plasmatiques, quelles sont les cellules qui ne libèrent pas les interleukines dans les organes et le sang plasmatique ?',
    options: ['Plaquettes', ' Cellules blanches du système hématopoïétique', 'Lymphocytes (B)', 'Macrophages', 'Cellules dendritique'],
    answer: 0
  },
  {
    q: 'Citer une des cellules suivante qui n’appartient pas à la population cellulaire du système immunitaire ?',
    options: ['Hématie', ' Globules blanches', 'Cellules dendritiques', 'Lymphocytes B/T', 'Monocytes/Macrophage'],
    answer: 0
  },
  {
    q: ' Donner une réponse fausse, les Monocytes/Macrophage :',
    options: ['Ont pour origine l’organe lymphoïde secondaire ;', 'N’a pas secrété les chemiokines', 'Présentent l’antigène aux lymphocytes (B) et (T)', 'Ont pour rôle l’opsonisation', 'Ont pour rôle la digestion de pathogènes'],
    answer: 1
  },
  {
    q: 'Citer une phrase fausse, le siège de la réponse immunitaire s’effectue au niveau',
    options: ['Moelle osseuse', 'Ganglion lymphatique', 'Organes lymphoïdes uro-genitaux', 'Organes lymphoïdes diffuses', 'Organe lymphoïde secondaire'],
    answer: 0
  },
  {
    q: 'Citer l’item qui est juste, le thymus est:',
    options: ['Siège de différentiation des hématies', 'Organe lymphoïde secondaire', 'Siège de l’hématopoïèse', 'Siège de lymphopoïèse', 'Siège de différenciation lymphocyte (B)'],
    answer: 3
  },
  {
    q: 'Citer une phrase qui est fausse, les organes-et tissu composants du tissu lymphoïdes secondaire ',
    options: ['Ganglions lymphatiques', 'Plaque de Peyer', 'Moelle osseuse', 'Courant lymphatique', 'Tissu lymphoïde pulmonaire diffus'],
    answer: 2
  },
  {
    q: 'Les monocytes, citer une phrase juste :',
    options: ['Sont produits dans le thymus', 'Incapable de migrer sur un site inflammatoire', 'Sont porteurs d’immunoglobuline', 'Peuvent sécréter des quantités importantes de cytokines', 'Peuvent sécréter des quantités importantes d’immunoglobuline'],
    answer: 3
  },
  {
    q: 'Par définition le terme d’antigène désigne toute espèce moléculaire d’origine biologique ',
    options: ['Pain', 'Vermicelle', 'Poussières', 'Riz', 'Virus respiratoire H1N'],
    answer: 4
  },
  {
    q: 'Citer la fonction immunologique des interleukines, citer une phrase qui est fausse :',
    options: ['Assurer un rôle dans le développement d’une réponse immunitaire en contrôlant l’activation des lymphocytes T et B', 'Assurer la communication entre les plusieurs types de cellules (lymphocytes T)', 'Avoir la propriété d’agents inhibiteurs immunologiques seuls', 'Maintenant sont très utilisés en thérapeuthies', 'Avoir la propriété d’agents inhibiteurs immunologiques et assurer la communication entre les cellules'],
    answer: 2
  },
  {
    q: ' L’immunité naturelle qui fait intervenir quelques un des composants cellulaires du système ',
    options: ['Les monocytes ayant pour rôle dans l’immunité spécifique', 'Les macrophages ayant pour rôle dans l’immunité naturelle', 'Les polynucléaires neutrophiles ayant pour rôle dans l’immunité naturelle ', 'Les lymphocytes (B) ayant pour rôle dans l’immunité spécifique', 'Les lymphocytes (T) ayant pour rôle dans l’immunité spécifique'],
    answer: 0
  },
  {
    q: 'Citer une phrase qui est fausse, les différentes phases de la phagocytose sont',
    options: ['Ingestion', 'Adhérence', 'Attractive', 'Digestion', 'Libération'],
    answer: 4
  },
    {
    q: 'Citer une phrase qui est fausse. Les interleukines ont comme principales sources ',
    options: ['Les lymphocytes B', 'Les lymphocytes B1 et B2', 'Les plaquettes', 'Les lymphocytes T helper', 'Les plasmocytes.'],
    answer: 2
  },
  {
    q: 'Citer les différents types de cellules mettant en jeu dans l’immunité non spécifique ou immunité naturelle ? Citer l’item juste ?',
    options: ['Les lymphocytes T8', 'Les lymphocytes T4', 'Les polynucléaires', 'Les cellules de Langerhan ', 'Les plasmocytes'],
    answer: 2
  },
  {
    q: 'Citer les différents types de cellules mettant en jeu dans l’immunité spécifique type immunité cellulaire ? Citer les items justes ?',
    options: ['Les lymphocytes (B)', 'Les polynucléaires neutrophiles', 'Les lymphocytes CD8', 'Les cellules souches', 'Les plaquettes'],
    answer: 0
  },
  {
    q: 'Citer les différents types de cellules mettant en jeu dans l’immunité spécifique type immunité humorale ? Citer la phrase juste ?',
    options: ['Les lymphocytes CD4', 'Les polynucléaires neutrophiles', 'Les lymphocytes CD8', 'Les plasmocytes', 'Les plaquettes'],
    answer: 3
  },
  {
    q: 'Citer la phrase juste . A propos des réactions allergiques dépendantes des IgE (ou hypersensibilité de type I), on peut affirmer que:',
    options: ['Elles entraînent des manifestions cliniques lors d^un premier contact avec l^antigène', 'Elles impliquent l^activation des macrophages.', 'Elles peuvent être provoquées par la tuberculine', 'Leur diagnostic fait appel à des tests de cultures de bactéries', 'L^hérédité joue un rôle important dans leur survenue du phénomènes allergique'],
    answer: 4
  },
  {
    q: 'Quelle est la proposition exacte de l^interleukine 2:',
    options: ['Est une cytokine sécrétée par les mastocytes', 'Est une cytokine sécrétée par des lymphocytes T CD4+', 'Est sécrétée par les monocytes présentant l^antigène', 'Est activatrice des lymphocytes pro (B) venant de moelle', 'Possède des activités antivirales intrinsèque'],
    answer:  1
  },
  {
    q: 'Parmi les cellules suivantes, indiquer celles qui sont le support de la "mémoire immunologique" ?',
    options: ['Les cellules présentant l^antigène', 'Les macrophages', 'Les lymphocytes T CD8+', 'Les lymphocytes polynucléaires neutrophiles', 'Les mastocytes'],
    answer: 2
  },
  {
    q: 'Parmi les propositions suivantes une seule est exacte. Laquelle? l^immunité à médiation cellulaire ',
    options: ['Le sérum', 'Les lymphocytes (B)', 'Les polynucléaires basophiles', 'Les lymphocytes (T)', 'Les monocyte'],
    answer: 3
  },
  {
    q: 'Quel est le mode d’absorbation de virus ou bactérie par les êtres humains',
    options: ['via l’air', 'Tener la main avec une personne', 'Manger ensemble', 'Soigner les malades', 'Fait le sport ensemble'],
    answer: 0
  },
  {
    q: 'Le rôle de lymphocyte T4 ou CD4 au cours d’une réponse immunitaire, citer l’item qui est juste.',
    options: ['Rôle cytotoxique (CTL) càd il sécrète une substance capable de lyser les organismes étrangers', 'Rôle de régulation au cours d’une réponse cellulaire', 'Rôle de régulation au cours d’une réponse à la fois cellulaire et humorale', 'Rôle d’éliminer les corps étrangers par sécrétion des lymphokine', 'Rôle de présentatrice de l’antigène aux autres cellules du système immunitaire'],
    answer: 2
  },
  {
    q: 'Citer les caractéristiques de la fonction immunitaire de lymphocytes T CD8, qui est juste',
    options: ['Reconnaissance de l’antigène spécifique par le récepteur BCR', 'Pas de régulation de la réponse immune.', 'Fonction effectrice ', 'Présentatrice de peptides.', 'Pas de mémoire immunologique'],
    answer: 2
  },
  {
    q: 'Au cours de la réponse immunitaire, une phrase qui est la phrase juste',
    options: ['Une interaction entre immunité innée et immunité adaptative', 'La réponse cellulaire (T) et (B) sont deux mécanismes totalement indépendants', 'La coopération cellulaire entre T-CD4 et CD8 peut aboutir à une réponse immunitaire non efficace', 'La cellule dendritique est un élément non réactif à l’interface entre immunité innée et adaptative', 'Ne peuvent pas sécréter des quantités importantes de cytokine'],
    answer: 0
  },
  {
    q: 'Les cellules dendritiques? une phrase qui est fausse ?',
    options: ['Prennent source dans le moelle', 'Sont en première lignes pour capter les antigène', 'Participer comme interface entre l’immunité humorale et cellulaire', 'Agit en particulier avec les lymphocytes (B) et (T)', 'Agit en particulier avec les hématie'],
    answer: 4
  },
  {
    q: ' Nature chimique d’un antigène ? Citer une phrase qui est fausse?',
    options: ['Protéine.', 'Polysaccharides', 'Polypeptides', 'Acide aminé', 'Ethanol'],
    answer: 4
  },
  {
    q: 'Citer la définition de l’épitope ou déterminant antigénique qui est fausse ',
    options: ['Est incapable de stimuler une réponse immunitaire', 'Existe seul à la partie externe du virus ou bactérie', 'Peut être utilisé pour produire des tests au laboratoire', 'Sont neutralisés par les cytokines', 'Ont des structures complexes multiépitopique'],
    answer: 0
  },
  {
    q: 'La définition de l’antigène et l’haptène par rapport au corps infectant. Citer l’items qui est juste ',
    options: ['L’haptène constitue tout seul le corps infectant', 'L’antigène et l’haptène sont les constituants de pathogènes infectantes', 'Les macrophages présentent seul l’haptène aux autres cellules du système immunitaires.', 'Les macrophages, les polynucléaires, les monocytes présentent l’haptène aux autres cellules du système immunitaire dans l’organe lymphoïde secondaire.', 'L’antigène constitue seul le corps infectant '],
    answer: 1
  },
  {
    q: 'Quels sont les immunoglobulines qui apparaissent les dernières lors de la réponse immunitaire au cours d’une infection (champignon, parasites, bactéries, virus) ? Citer la phrase qui est juste ',
    options: ['Ig(A)', 'Ig(D)', 'Ig(E)', 'Ig(G)', 'Ig(M)'],
    answer: 3
  },



]
