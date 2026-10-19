export const STATUTS = [
  { value: 'existant', label: 'existe déjà' },
  { value: 'creation', label: 'est en création' },
]

export const REGIONS = [
  'Auvergne-Rhône-Alpes',
  'Bourgogne-Franche-Comté',
  'Bretagne',
  'Centre-Val de Loire',
  'Corse',
  'Grand Est',
  'Hauts-de-France',
  'Île-de-France',
  'Normandie',
  'Nouvelle-Aquitaine',
  'Occitanie',
  'Pays de la Loire',
  'Provence-Alpes-Côte d’Azur',
  'Outre-mer',
]

export const TAILLES = [
  { value: 'xs', label: 'Moins de 50' },
  { value: 's', label: '50 à 150' },
  { value: 'm', label: '150 à 300' },
  { value: 'l', label: 'Plus de 300' },
]

export const BESOINS = [
  { value: 'materiel', label: 'Matériel' },
  { value: 'equipements', label: 'Terrain et équipements' },
  { value: 'emploi', label: 'Emploi' },
  { value: 'formation', label: 'Formation' },
  { value: 'jeunes', label: 'Jeunes' },
  { value: 'feminines', label: 'Féminines' },
  { value: 'creation', label: 'Création du club' },
]

export const TYPES = [
  { value: 'public', label: 'Aides publiques' },
  { value: 'federation', label: 'Fédération et ligue' },
]

const ALL_STATUTS = ['existant', 'creation']
const ALL_TAILLES = ['xs', 's', 'm', 'l']
const NATIONAL = 'national'

// Aides d'exemple pour le POC. `montantMax` sert au tri, `regions: NATIONAL` = toute la France.
export const AIDES = [
  {
    id: 'coup-envoi',
    nom: 'Fonds Coup d’envoi',
    organisme: 'Fédération française de football',
    type: 'federation',
    regions: NATIONAL,
    statuts: ['creation'],
    tailles: ALL_TAILLES,
    besoins: ['creation', 'materiel'],
    montant: 'Jusqu’à 3 000 €',
    montantMax: 3000,
    dateLimite: '2027-03-31',
    usage: 'Financer les premières dépenses d’un club qui se lance : ballons, maillots, chasubles, petit matériel d’entraînement.',
    conditions: [
      'Club créé depuis moins de 2 ans',
      'Affiliation à la fédération en cours ou obtenue',
      'Au moins une équipe engagée en compétition dans l’année',
    ],
  },
  {
    id: 'pass-equipement',
    nom: 'Pass Équipement Club',
    organisme: 'Agence nationale du sport',
    type: 'public',
    regions: NATIONAL,
    statuts: ['existant'],
    tailles: ALL_TAILLES,
    besoins: ['equipements', 'materiel'],
    montant: 'Jusqu’à 20 000 €',
    montantMax: 20000,
    dateLimite: '2027-02-15',
    usage: 'Rénover ou équiper les installations : vestiaires, éclairage, buts, filets, abris de touche.',
    conditions: [
      'Association sportive affiliée depuis au moins 1 an',
      'Projet cofinancé par la commune ou le département',
      'Devis détaillés à fournir',
    ],
  },
  {
    id: 'emploi-sportif',
    nom: 'Emploi Sportif Local',
    organisme: 'Service départemental à la jeunesse et aux sports',
    type: 'public',
    regions: NATIONAL,
    statuts: ['existant'],
    tailles: ['s', 'm', 'l'],
    besoins: ['emploi'],
    montant: 'Jusqu’à 12 000 € par an',
    montantMax: 12000,
    dateLimite: '2027-01-31',
    usage: 'Aider le club à créer un poste salarié : éducateur, agent de développement ou coordinateur sportif.',
    conditions: [
      'Club de plus de 50 licenciés',
      'Contrat d’au moins 24 heures par semaine',
      'Projet de développement du club sur 2 ans',
    ],
  },
  {
    id: 'foot-feminin',
    nom: 'Programme Foot au Féminin',
    organisme: 'Fédération française de football',
    type: 'federation',
    regions: NATIONAL,
    statuts: ALL_STATUTS,
    tailles: ALL_TAILLES,
    besoins: ['feminines', 'materiel'],
    montant: 'Jusqu’à 5 000 €',
    montantMax: 5000,
    dateLimite: '2027-04-30',
    usage: 'Lancer ou développer une section féminine : équipements, journées découverte, encadrement.',
    conditions: [
      'Créer une nouvelle équipe féminine ou augmenter le nombre de licenciées',
      'Désigner une personne référente pour la section',
    ],
  },
  {
    id: 'bourse-educateurs',
    nom: 'Bourse Éducateurs Diplômés',
    organisme: 'Ligue régionale de football',
    type: 'federation',
    regions: NATIONAL,
    statuts: ALL_STATUTS,
    tailles: ALL_TAILLES,
    besoins: ['formation'],
    montant: 'Jusqu’à 1 500 € par personne',
    montantMax: 1500,
    dateLimite: '2026-12-15',
    usage: 'Prendre en charge les frais de formation des éducateurs et des dirigeants bénévoles.',
    conditions: [
      'Être licencié dans un club affilié',
      'S’inscrire à une formation reconnue par la ligue',
    ],
  },
  {
    id: 'coup-de-pouce',
    nom: 'Coup de pouce associatif',
    organisme: 'Conseil départemental',
    type: 'public',
    regions: NATIONAL,
    statuts: ALL_STATUTS,
    tailles: ['xs', 's'],
    besoins: ['materiel', 'jeunes'],
    montant: 'Jusqu’à 2 500 €',
    montantMax: 2500,
    dateLimite: '2027-01-15',
    usage: 'Soutenir les petits clubs pour leurs achats de matériel et leurs actions auprès des jeunes.',
    conditions: [
      'Club de moins de 150 licenciés',
      'Siège du club dans le département',
    ],
  },
  {
    id: 'ville-sportive',
    nom: 'Aide Ville active et sportive',
    organisme: 'Mairie de la commune du club',
    type: 'public',
    regions: NATIONAL,
    statuts: ALL_STATUTS,
    tailles: ALL_TAILLES,
    besoins: ['materiel', 'jeunes', 'creation'],
    montant: 'Jusqu’à 1 500 €',
    montantMax: 1500,
    dateLimite: '2027-06-30',
    usage: 'Subvention de fonctionnement pour les associations sportives de la commune.',
    conditions: [
      'Siège du club dans la commune',
      'Bilan de l’année précédente à fournir (sauf club en création)',
    ],
  },
  {
    id: 'bretagne-terrains',
    nom: 'Terrains Bretagne Sport',
    organisme: 'Région Bretagne',
    type: 'public',
    regions: ['Bretagne'],
    statuts: ['existant'],
    tailles: ALL_TAILLES,
    besoins: ['equipements'],
    montant: 'Jusqu’à 50 000 €',
    montantMax: 50000,
    dateLimite: '2027-05-31',
    usage: 'Rénover un terrain ou créer un terrain synthétique en partenariat avec la commune.',
    conditions: [
      'Projet porté avec la commune propriétaire du terrain',
      'Terrain ouvert aux scolaires',
    ],
  },
  {
    id: 'occitanie-jeunes',
    nom: 'Occitanie Jeunes Pousses',
    organisme: 'Région Occitanie',
    type: 'public',
    regions: ['Occitanie'],
    statuts: ALL_STATUTS,
    tailles: ALL_TAILLES,
    besoins: ['jeunes', 'formation'],
    montant: 'Jusqu’à 8 000 €',
    montantMax: 8000,
    dateLimite: '2027-03-15',
    usage: 'Développer l’école de foot : encadrement, stages vacances, formation des jeunes arbitres.',
    conditions: [
      'Au moins une équipe de moins de 13 ans',
      'Éducateur diplômé ou en formation',
    ],
  },
  {
    id: 'idf-solidaires',
    nom: 'Clubs Solidaires Île-de-France',
    organisme: 'Région Île-de-France',
    type: 'public',
    regions: ['Île-de-France'],
    statuts: ['existant'],
    tailles: ['m', 'l'],
    besoins: ['jeunes', 'emploi'],
    montant: 'Jusqu’à 15 000 €',
    montantMax: 15000,
    dateLimite: '2027-02-28',
    usage: 'Financer des projets éducatifs et l’emploi dans les clubs qui accueillent beaucoup de jeunes.',
    conditions: [
      'Club de plus de 150 licenciés',
      'Projet éducatif écrit',
    ],
  },
  {
    id: 'hdf-demarrage',
    nom: 'Démarrage Club Hauts-de-France',
    organisme: 'Région Hauts-de-France',
    type: 'public',
    regions: ['Hauts-de-France'],
    statuts: ['creation'],
    tailles: ALL_TAILLES,
    besoins: ['creation', 'materiel'],
    montant: 'Jusqu’à 4 000 €',
    montantMax: 4000,
    dateLimite: '2027-06-30',
    usage: 'Accompagner la création d’un club : premiers équipements et frais administratifs.',
    conditions: [
      'Association déclarée en préfecture',
      'Siège du club dans la région',
    ],
  },
  {
    id: 'grand-est-ligue',
    nom: 'Fonds de soutien Ligue Grand Est',
    organisme: 'Ligue du Grand Est de football',
    type: 'federation',
    regions: ['Grand Est'],
    statuts: ['existant'],
    tailles: ALL_TAILLES,
    besoins: ['materiel', 'jeunes'],
    montant: 'Jusqu’à 3 500 €',
    montantMax: 3500,
    dateLimite: '2026-12-31',
    usage: 'Aider les clubs de la ligue à renouveler leur matériel et à accueillir de nouveaux jeunes.',
    conditions: [
      'Club affilié à la Ligue du Grand Est',
      'Être à jour de ses cotisations',
    ],
  },
  {
    id: 'ara-proximite',
    nom: 'Équipements sportifs de proximité',
    organisme: 'Région Auvergne-Rhône-Alpes',
    type: 'public',
    regions: ['Auvergne-Rhône-Alpes'],
    statuts: ['existant'],
    tailles: ALL_TAILLES,
    besoins: ['equipements'],
    montant: 'Jusqu’à 30 000 €',
    montantMax: 30000,
    dateLimite: '2027-04-15',
    usage: 'Construire ou rénover des équipements : vestiaires, club-house, éclairage économe en énergie.',
    conditions: [
      'Projet cofinancé par la collectivité propriétaire',
      'Travaux non commencés au moment de la demande',
    ],
  },
  {
    id: 'na-feminines',
    nom: 'Elles jouent en Nouvelle-Aquitaine',
    organisme: 'Ligue de football Nouvelle-Aquitaine',
    type: 'federation',
    regions: ['Nouvelle-Aquitaine'],
    statuts: ALL_STATUTS,
    tailles: ALL_TAILLES,
    besoins: ['feminines', 'formation'],
    montant: 'Jusqu’à 4 000 €',
    montantMax: 4000,
    dateLimite: '2027-01-31',
    usage: 'Former des éducatrices et développer les équipes féminines des clubs de la région.',
    conditions: [
      'Club affilié à la ligue',
      'Au moins une éducatrice en formation dans l’année',
    ],
  },
  {
    id: 'outre-mer-avenir',
    nom: 'Sport Avenir Outre-mer',
    organisme: 'Ministère des Outre-mer',
    type: 'public',
    regions: ['Outre-mer'],
    statuts: ALL_STATUTS,
    tailles: ALL_TAILLES,
    besoins: ['jeunes', 'materiel', 'equipements'],
    montant: 'Jusqu’à 10 000 €',
    montantMax: 10000,
    dateLimite: '2027-03-01',
    usage: 'Soutenir les clubs ultramarins : matériel, petits équipements et déplacements des jeunes.',
    conditions: [
      'Siège du club dans un territoire d’Outre-mer',
      'Projet tourné vers les moins de 18 ans',
    ],
  },
]

export const labelOf = (list, value) => list.find((item) => item.value === value)?.label ?? value

export const regionsLabel = (aide) =>
  aide.regions === NATIONAL ? 'Toute la France' : aide.regions.join(', ')

export const formatDate = (iso) =>
  new Date(`${iso}T00:00:00`).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })

export const coversRegion = (aide, region) => aide.regions === NATIONAL || aide.regions.includes(region)

export const byMontantDesc = (a, b) => b.montantMax - a.montantMax

// Aides correspondant aux réponses du questionnaire, montant le plus élevé en premier.
export function matchAides(answers) {
  const types = answers.type === 'both' ? ['public', 'federation'] : [answers.type]
  return AIDES.filter(
    (aide) =>
      aide.statuts.includes(answers.statut) &&
      coversRegion(aide, answers.region) &&
      aide.tailles.includes(answers.taille) &&
      types.includes(aide.type) &&
      aide.besoins.some((besoin) => answers.besoins.includes(besoin)),
  ).sort(byMontantDesc)
}
