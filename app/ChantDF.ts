export type Chant = {
  id: string;
  title: string;
  lyrics: string;
  type: string;
};

const rawChants = [
  {
    id: "1",
    title: "001- Gloire à Dieu notre Créateur",
    lyrics: `1.
    Gloire à Dieu notre Créateur !
    Gloire à Christ le Rédempteur !
    Gloire à l’Esprit Consolateur !
    Louange et gloire au Dieu Sauveur !`,
  },
  {
    id: "2",
    title: "002- Grand Dieu nous te bénissons",
    lyrics: `1.
    Grand Dieu, nous te bénissons,
    Nous célébrons tes louanges!
    Éternel, nous t'exaltons,
    De concert avec les anges;
    Et prosternés devant toi,
    Nous t’adorons, ô grand Roi!
        (bis, 2 lignes)

    2.
    Les saints et les bienheureux,
    Les trônes et les puissances,
    Toutes les vertus des cieux,
    Disent tes magnificences
    Proclamant dans leurs concerts
    Le Grand Dieu de l'Univers.
    (bis, 2 lignes)

    3.\nSauve ton peuple, Seigneur,
    Et bénis ton héritage;
    Que ta gloire et ta splendeur
    Soient à jamais son partage,
    Conduis-le par ton amour
    Jusqu’au céleste séjour! 
        (bis, 2 lignes)

    4.\nGloire soit au Saint-Esprit!
    Gloire soit à Dieu le Père!
    Gloire soit à Jésus-Christ,
    Notre Sauveur, notre Frère!
    Son immense charité
    Dure à perpétuité.
      (bis, 2 lignes)`,
  },
  {
    id: "3",
    title: "003- Adorons le Père",
    lyrics: `1.\nAdorons le Père
    Au plus haut des cieux,
    La sainte lumière
    Qui brille en tous lieux.
    Proclamons sa grâce,
    Le pardon divin,
    L’amour efficace,
    Le bonheur sans fin.

    2.\nCélébrons la gloire
    Du puissant Sauveur;
    Chantons la victoire
    Du grand Rédempteur!
    Il vint sur la terre
    Pour nous secourir;
    Plus tendre qu’un frère,
    Il voulut mourir.

    3.\nViens, céleste flamme,
    Messager divin,
    Viens, montre à notre âme,
    Jésus, le chemin!
    Descends à cette heure
    Dans nos cœurs joyeux;
    Qu’ils soient ta demeure,
    Esprit glorieux!`,
  },
  {
    id: "4",
    title: "004- On n’adore pas encore",
    lyrics: `1.\nOn n’adore – Pas encore
    Quand on chante à l’Eternel.
    Pour lui plaire – C’est peu faire
    Que de monter à Béthel.
    Dieu regarde – Si l’on garde
    Le cœur autant que l’autel.

    2.\nQui s’excuse – Et n’accuse
    Que le prochain devant toi,
    Par son culte, – Fait insulte
    Seigneur, à ta sainte loi.
    Ah! Qu’il sorte – Et remporte
    Ses offrandes avec soi.

    3.\nDivin Maître, – Fais-nous être
    Un peuple d’adorateurs!
    Ta louange, – Chère à l’ange,
    Est la gloire des pécheurs.
    Quand des larmes – Sont nos armes,
    Ton amour nous rend vainqueurs.`,
  },
  {
    id: "5",
    title: "005- Que tout genoux fléchisse",
    lyrics: `1.\nQue tout genoux fléchisse\nDevant ta majesté,\nEt qu'aujourd'hui je puisse\nLâcher ma volonté. (bis, 2 lignes)
    2.\nOui, devant toi je plie,\nJe me courbe, ô mon Roi,\nJe pleure et m'humilie,\nEt c'est un don de toi. (bis, 2 lignes)
    3.\nQue tout ce qui s'élève\nEn moi soit abaissé!\nQue mon cœur, de ton glaive,\nS'il le faut, soit percé! (bis, 2 lignes)
    4.\nMourir, mais c'est renaître\nEt vivre désormais.\nOh! Courbe tout mon être\nA tes pieds pour jamais! (bis, 2 lignes)`,
  },
  {
    id: "6",
    title: "006- Agneau de Dieu",
    lyrics: `Agneau de Dieu, par tes langueurs
    Tu pris sur toi notre misère,
    Et tu nous fis, pour Dieu, ton Père,
    Et rois et sacrificateurs.
    Ensemble aussi nous te rendons
    Honneur, gloire et magnificence,
    Force, pouvoir, obéissance,
    Et dans nos cœurs nous t’adorons,
    Amen! Amen! Seigneur, Amen!`,
  },
  {
    id: "7",
    title: "007- Jésus Jésus",
    lyrics: `1.\nJésus, Jésus, Jésus, Jésus,
    Seul nom que mon cœur aime,
    Je voudrais ne prononcer plus
    Qu’un seul mot, ce nom même.

    2.\nJésus, Jésus, ce nom si beau,
    C’est celui dont les anges,
    Prosternés autour de l’Agneau,
    Remplissent leurs louanges.

    3.\nJésus, Jésus, Jésus, Jésus,
    Bientôt, mon cœur qui t’aime,
    Auprès de Toi ne dira plus
    Qu’un seul mot, ton nom même.`,
  },
  {
    id: "8",
    title: "008- Dans les cieux",
    lyrics: `1.\nDans les cieux et sur la terre,
    Il n’est aucun nom plus doux,
    Aucun que mon cœur préfère
    Au nom de Christ mort pour nous.

    Refrain:\nQuel beau nom (bis)
    Porte l’Oint de l’Eternel!
    Quel beau nom (bis)
    Que celui d’Emmanuel!

    2.\nQuelque grand que soit un homme,
    Qu’il soit prince ou qu’il soit roi,
    De quelque nom qu’on le nomme,
    Jésus est plus grand pour moi.

    4.\nDans les maux, Jésus soulage,
    Il guérit l'esprit froissé;
    Il ranime le courage
    Du cœur le plus oppressé.`,
  },
  {
    id: "9",
    title: "009- Du Rocher de Jacob",
    lyrics: `1.\nDu Rocher de Jacob\nToute l’œuvre est parfaite.\nCe que sa bouche a dit,\nSa main l’accomplira.\nAlléluia ! Alléluia! (bis)\nCar il est notre Dieu, (ter)\nNotre haute retraite!
   
    2.\nC’est pour l’éternité\nQue le Seigneur nous aime:\nSa grâce en notre cœur\nJamais ne cessera.\nAlléluia ! Alléluia! (bis)\nCar il est notre espoir, (ter)\nNotre bonheur suprême.
   
    3.\nDe tous nos ennemis\nIl sait quel est le nombre;\nSon bras combat pour nous\nEt nous délivrera.\nAlléluia ! Alléluia! (bis)\nLes méchants devant lui (ter)\nS’enfuiront comme l’ombre.
    
    4.\nLouons donc l’Eternel,\nNotre Dieu, notre Père!\nLe Seigneur est pour nous:\nContre nous qui sera?\nAlléluia ! Alléluia! (bis)\nTriomphons en Jésus, (ter)\nEt vivons pour lui plaire.`,
  },
  {
    id: "10",
    title: "010- Mon cœur joyeux",
    lyrics: `1.\nMon cœur joyeux, plein d’espérance,\nS’ élève à toi, mon Rédempteur!\nDaigne écouter avec clémence\nUn pauvre humain faible et pécheur.\nEn toi seul est ma confiance,\nEn toi seul est tout mon bonheur.
    
    2.\nLe jour, je marche à ta lumière;\nLa nuit, je repose en ton sein;\nDès le matin, à ma prière,\nTu viens éclairer mon chemin;\nEt chaque soir, ô mon bon Père,\nTu prépares mon lendemain.
    
    3.\nJe vois ainsi venir le terme\nDe mon voyage en ces bas lieux,\nEt j’ai l’attente vive et ferme\nDu saint héritage des cieux:\nSur moi, si la tombe se ferme,\nJ’en sortirai victorieux.`,
  },
  {
    id: "11",
    title: "011- Chantons du Sauveur la tendresse",
    lyrics: `1.\nChantons du Sauveur la tendresse:
    Sur la croix il est mort pour nous.
    Il remplit nos cœurs d’allégresse,
    Au ciel il nous invite tous.
    
    Refrain:\nJe veux, (oui, je veux)\nChanter (mon Sauveur)\nJe veux dire à tous mon bonheur.\nChantons (le Sauveur), (bis)\nChantons l’amour du Rédempteur!
    
    2.\nChantons du Sauveur la puissance:\nC’est lui qui brisa nos liens.\nPerdus, sans Dieu, sans espérance,\nIl nous racheta, nous fit siens.\n\n[Refrain]
    
    3.\nChantons, remplis de confiance!\nChantons sans peur du lendemain,\nEn paix, gardés par sa puissance,\nConduits chaque jour par sa main.`,
  },
  {
    id: "12",
    title: "012- Ton nom soit à jamais béni",
    lyrics: `1.\nTon nom soit à jamais béni,\nDieu d’amour. (bis)\nMerci pour ton don infini,\nDieu d’amour. (bis)\nL’amour rayonne sur ta face,\nLibrement tu veux faire grâce,\nPour nous ton cœur a de la place,\nDieu d’amour. (bis)
    2.\nTon rôle d’angoisse est rempli,\nO Sauveur. (bis)\nPar ta mort tout est accompli,\nO Sauveur. (bis)\nPlus dévoué qu’un tendre frère,\nPrenant sur toi notre misère,\nTu nous ramènes à ton Père,\nO Sauveur. (bis)
    3.\nQui voudrait s’éloigner de toi\nA jamais? (bis)\nEt demeurer sans Dieu, sans foi,\nA jamais? (bis)\nAcceptons tous ce don suprême,\nVenons à Celui qui nous aime ;\nSon salut restera le même\nA jamais? (bis)`,
  },
  {
    id: "13",
    title: "013- A toi nos transports d’allégresse",
    lyrics: `1.
A toi nos transports d’allégresse,
A toi, Seigneur, nos plus beaux chants,
A toi nos rêves de jeunesse,
A toi les fleurs de nos printemps!

Refrain:
Gloire, honneur, sagesse et puissance
Au Dieu qui nous a tant aimés,
Richesse, force, obéissance
A l’Agneau qui nous a sauvés!

2.
A toi nos élans juvéniles,
Nos frais bonheurs, nos saints désirs,
Les gerbes de nos champs fertiles,
Nos durs labeurs, nos purs loisirs!

3.
Sois le centre de notre vie,
Vis au tréfonds de notre cœur,
Et toujours notre âme affranchie
Chantera son Libérateur.`,
  },
  {
    id: "14",
    title: "014- Dans le pays de la gloire",
    lyrics: `1.
Dans le pays de la gloire éternelle,
Dans ce beau ciel où l’on ne souffre plus!
Te contempler, abrité sous ton aile,
C’est le bonheur que je rêve, ô Jésus!
[Refrain]
Gloire à jamais, gloire à Jésus! (bis)
Auprès de lui, je ne pécherai plus!
Oh ! gloire à jamais, gloire à toi, Jésus!

2.
Quand tu m’auras, dans ta grâce infinie,
Fait une place au milieu des élus,
Tout mon bonheur, et ma gloire, et ma vie
Sera toujours de te louer, Jésus!

3.
Mes bien-aimés partageront ma gloire,
Dans ton ciel où l’on se quitte plus.
Mais pour mon cœur la suprême victoire
Sera d’avoir ton sourire, ô Jésus!
`,
  },
  {
    id: "15",
    title: "015- Que ne puis-je",
    lyrics: `1.
Que ne puis-je, ô mon Dieu,
Dieu de ma délivrance,
Remplir de ta louange
Et la terre et les cieux,
Les prendre pour témoins
De ma reconnaissance,
Et dire au monde entier
Combien je suis heureux.

2.
Heureux quand je te parle,
Et que de ma poussière,
Je fais monter vers Toi
Mon hommage ou mon vœu,
Avec la liberté
D’un fils devant son père,
Et le saint tremblement
D’un pécheur devant Dieu.

3.
Heureux, lorsque assailli
Par l'ange de la chute,
Prenant la croix pour arme
Et l'agneau pour Sauveur
Je triomphe à genoux
Et sors de cette lutte
Vainqueur mais tout meurtri
Tout meurtri mais vainqueur!

4.
Heureux, toujours heureux!
J’ai le Dieu fort pour Père,
Pour frère, Jésus-Christ,
Pour conseil, l’Esprit-Saint :
Que peut ôter l’enfer,
Que peut donner la terre
A qui jouit du ciel
Et du Dieu trois fois saint?`,
  },
  {
    id: "16",
    title: "016- Oui je veux te bénir",
    lyrics: `1.
Oui, je veux te bénir
Et chanter ta clémence!
Hélas ! Seigneur, je t’avais irrité;
Mais tu m’as d’un regard
Rendu ta bienveillance,
En me lavant de mon iniquité.(bis)

2.
Le Dieu fort est ma paix,
Il est ma délivrance;
De mon esprit il bannit la frayeur;
Je veux donc en Lui seul
Mettre ma confiance,
Et donner gloire à mon Libérateur.(bis)

3.
Venez, enfants de Dieu!
Puisez, pleins d’allégresse,
L’eau du salut à la source des eaux;
Racontez les bienfaits,
Proclamez la promesse
De l’Eternel qui guérit tous vos maux.(bis)

4.
Nous te célébrons
Seigneur dans nos cantiques
Nous qui savons jusqu'où va ton amour
Tu fais pour tes enfants
Des choses magnifiques
Nous bénirons ton saint nom chaque jour. (bis)

5.
Gloire au Dieu trois fois saint,
Que l'Eglise révère!
Oui, gloire au Père, au Fils, au Saint-Esprit
Gloire à toi, cher Sauveur
Dans les cieux sur la terre!
Gloire à jamais, Gloire à Toi Jésus-Christ! (bis)

`,
  },
  {
    id: "17",
    title: "017- Oh quel bonheur de le connaître",
    lyrics: `1.
Oh! quel bonheur de le connaître
L'Ami qui ne saurait changer
De l'avoir ici-bas pour Maître
Pour défenseur et pour berger

Refrain:
Chantons, chantons d'un cœur joyeux
Le grand amour du Rédempteur
Qui vint à nous du haut des cieux
Et nous sauva du destructeur

2.
Dans la misère et l'ignorance
Nous nous débattions sans espoir
La mort au cœur, l'âme en souffrance
Quand à nos yeux Il se fit voir

3.
Il nous apporta la lumière
La victoire et la liberté
L'ennemi mordit la poussière
Pour toujours Satan fut dompté

4.
Vers l'avenir marchons sans crainte
Et sans souci du lendemain
Pas à pas, nos pieds dans l'empreinte
Des ses pieds sur notre chemin
`,
  },
  {
    id: "18",
    title: "018- Je l'ai trouvé",
    lyrics: `1.
Je l’ai trouvé, je l’ai trouvé
Le bonheur ineffable!
Je suis sauvé, je suis sauvé,
Oh ! joie inexprimable!
Tous mes péchés sont effacés;
Le sang de Christ me lave.
Les jours des larmes sont passés:
Je ne suis plus esclave!

2.
Oh ! quel bonheur! Oh! quel bonheur!
D’avoir Jésus pour Maitre !
O mon Sauveur, mon seul Sauveur,
A toi seul je veux être!
Tu vins briser, puissant Vainqueur,
Du mal la tyrannie,
Affranchissant mon pauvre cœur,
Et me donnant la vie!

3.
Dans ton amour, tu m'as cherché,
Errant bien loin du Père!
Tu m'as sauvé de mon péché.
Tu fis de moi ton frère:
Et maintenant, et pour jamais,
Sous ton joug je me plie:
Je ne puis vivre désormais
Jésus que de ta vie!

4.
Ah laissez-moi chanter mon Roi;
Oui, qu’à genoux, je chante!
Jésus n’est-il pas tout pour moi?
Gloire à sa croix sanglante!
Sans se lasser, jour après jour,
Il m’aime, il m’aime encore…
Comment répondre à tant d’amour?
Je crois, j’aime et j’adore!`,
  },
  {
    id: "19",
    title: "019- Le nom de Jésus est si doux!",
    lyrics: `1.
Le nom de Jésus est si doux!
De Dieu désarmant le courroux,
Il nous appelle au rendez-vous,
Précieux nom de Jésus!

Refrain:
Jésus! Béni soit ton nom!
Jésus! Oh ! Merveilleux don!
Jésus! Suprême rançon,
Sois adoré pour toujours.

2.
J’aime ce nom dans le chagrin,
Il me soutient sur le chemin,
Sa musique est un son divin,
Précieux nom de Jésus!

3.
J’aime le nom de mon Sauveur,
Car Lui seul connait tout mon cœur,
Lui seul me rend plus que vainqueur:
Précieux nom de Jésus!

4.
Et si parfois j’ai succombé,
Si dans le mal je suis tombé,
Son nom puissant m'a relevé:
Précieux nom de Jésus!

5.
Et lorsqu’avec Lui je serai,
Et lorsqu’enfin je Le verrai,
Alors sans fin je redirai:
Précieux nom de Jésus!
`,
  },
  {
    id: "20",
    title: "020- A Celui qui nous a lavés",
    lyrics: `1.
A Celui qui nous a lavés,
Qui nous a tant aimés,
Par son sang nous a rachetés,
Soit gloire, gloire, gloire,
Louange à jamais!

2.
Chantons le cantique nouveau
A l’honneur de l’Agneau,
Qui sortit vainqueur du tombeau,
Oui, gloire, gloire, gloire,
Louange à jamais!

3.
Adorons le Triomphateur,
Jésus, notre Sauveur,
Sur tous ses ennemis vainqueur,
Oui, gloire, gloire, gloire,
Louange à jamais!

4.
Du ciel bientôt il reviendra,
Et tout œil le verra,
Le monde entier l’adorera,
Oui, gloire, gloire, gloire,
Louange à jamais!`,
  },
  {
    id: "21",
    title: "021- L’Éternel seul est Seigneur",
    lyrics: `1.
L’Eternel seul est Seigneur;
Seul il est dominateur (bis)
Sur les peuples de la terre;
Il est maitre souverain (bis)
Des ouvrages que sa main
Pour sa gloire a voulu faire.

2.
Mais quel bienheureux mortel
Au saint mont de l’Eternel (bis)
Aura le droit paraitre?
Et quel homme, ô puissant Roi! (bis)
Pour demeurer avec Toi
Assez juste pourrait être?

3.
C’est l’homme qui, dans son cœur,
Par ton Esprit, ô Seigneur! (bis)
Hait du péché les souillures;
Qui, fuyant la fausseté, (bis)
Te sert en sincérité,
Levant vers toi des mains pures.

4.
Oui, cet homme recevra,
De son Dieu qu’il cherchera, (bis)
Le salut et la justice.
Oui, tes enfants, à jamais, (bis)
Seigneur, trouveront ta paix
Et la lumière propice.`,
  },
  {
    id: "22",
    title: "022- Mon cœur Te cherche au point",
    lyrics: `1.
Mon cœur Te cherche au point du jour,
O Jésus, mon Ami suprême!
Toi qui m’as tant aimé, je T’aime,
Et je vis de Ton amour.

Refrain:
Mon âme est attachée à Toi,
Et Tu fais Ta demeure en moi,
Je sens Ton cœur battre en mon cœur,
Et Ta présence est mon bonheur.

2.
Pour moi, sur la terre étranger,
Ton amour vaut mieux que la vie.
Jésus, pour mon âme ravie,
N’es-Tu pas le bon Berger?

3.
Devant Ton merveilleux amour,
En T’adorant, mon âme heureuse,
Triomphe et célèbre, joyeuse,
Tes bontés de chaque jour!
`,
  },
  {
    id: "23",
    title: "023- Béni soit le jour",
    lyrics: `1.
Béni soit le jour où j’ai fait
Choix de Jésus pour Maitre;
Je veux célébrer le bienfait
Qui vient de m’apparaitre.
Heureux jour (bis)
Où j’ai connu tout son amour!
Sauvé par son divin secours,
Je me donne à Lui pour toujours,
Heureux jour (bis)
Où j’ai connu tout son amour!

2.
O divine compassion!
Le Bien-Aimé du Père
Lui-même a payé ma rançon
Sur la croix du Calvaire.
De la mort (bis)
Jésus-Christ a vaincu l’effort.
Mon âme accepte avec transport
Le salut qu’offre le Dieu fort.
De la mort (bis)
Jésus-Christ a vaincu l’effort.

3.
Dans son amour, il m’a cherché
Quand je fuyais sa face;
Il s’est chargé de mon péché,
Par Lui j’ai trouvé grâce.
Tout joyeux (bis)
Je veux le redire en tous lieux;
Mes chants monteront jusqu’aux cieux
S’unir aux chants des bienheureux,
Tout joyeux (bis)
Je veux le redire en tous lieux.

4.
Maintenant, à ton rédempteur,
Consacré sans partage,
Repose près de Lui, mon cœur,
A l’abri de l’orage,
Sans regrets, (bis)
Loin du monde et de ses attraits,
Goûtant la véritable paix
Qui vient combler tous mes souhaits;
Sans regrets, (bis)
Loin de ce qu’autrefois j’aimais.`,
  },
  {
    id: "24",
    title: "024- Hosanna béni soit",
    lyrics: `1.
Hosanna! Béni soit
Le Sauveur débonnaire
Qui vers nous, plein d’amour,
Descend du sein du Père!
Béni soit le Seigneur,
Qui vient des plus hauts cieux
Apporter aux humains,
Un salut glorieux! (bis)

2.
Hosanna! Béni soit
Le Prince de la vie!
Que de joie, en son nom,
Notre âme soit ravie!
Qu’en des accents nouveaux
Elle éclate aujourd’hui.
Que tout enfant de Dieu
Tressaille devant Lui. (bis)

3.
Hosanna! Béni soit
Cet Ami charitable
Que le plus grand pécheur
Va trouver favorable!
Humble et sans apparat,
Sous notre humanité
Il a voilé l’éclat
De sa divinité. (bis)

4.
Hosanna! Béni soit
Jésus notre justice!
Pour nous, pauvres pécheurs,
Il s’offre en sacrifice;
Ce fils du Dieu Très-Haut,
Ce puissant Roi des rois,
Pour nous ouvrir le ciel
Vient mourir sur la croix. (bis)

5.
Hosanna! Rachetés,
Peuple libre et fidèle,
Répétez: Hosanna!
Pleins d’une ardeur nouvelle;
C’est votre hymne d’amour,
C’est votre chant de paix:
Que ce chant parmi vous
Retentisse à jamais! (bis)`,
  },
  {
    id: "25",
    title: "025- Vers Toi monte notre hommage",
    lyrics: `1.
Vers Toi monte notre hommage,
Fils de Dieu, puissant Sauveur,
Qui demeures d’âge en âge
Le refuge du pécheur.

Refrain:
Loué soit ton amour,
Loués soient à jamais
Ton nom, Jésus,
Ta gloire et tes bienfaits;
Loué soit ton amour,
Loués soient à jamais
Ton nom, ta gloire et tes bienfaits;

2.
De Toi vient la délivrance:
Tu payas notre rançon.
C’est en Toi qu’est l’espérance,
La paix et la guérison.

3.
Oh! qu’heureux sous ta bannière
Est le peuple racheté
Qui marche, dans ta lumière,
Vers la céleste cité.

4.
Par ta divine Parole
Tu l’enseignes, tu l’instruis,
Et, par l’Esprit qui console,
Sûrement tu le conduis.
`,
  },
  {
    id: "26",
    title: "026- Je chanterai Seigneur",
    lyrics: `1.
Je chanterai, Seigneur,
Tes œuvres magnifiques,
Ton auguste pouvoir,
Ta suprême grandeur;
Aux concerts de tes saints
J’unirai les cantiques
Que pour toi me dicte mon cœur.(bis)

2.
Oh! que de l’Eternel
La parole est féconde!
L’univers fut jadis
L’ouvrage de sa voix;
Il dit … les éléments,
Le ciel, la terre et l’onde
Du néant sortent à la fois. (bis)

3.
Le monde passera;
Ce superbe édifice
Un jour s’ébranlera
Jusqu’en ses fondements.
Ta sagesse, grand Dieu,
Ta bonté, ta justice
Subsisteront dans tous les temps. (bis)`,
  },
  {
    id: "27",
    title: "027- Dieu fort et grand!",
    lyrics: `1.
Dieu fort et grand!
Tu vois toute ma vie,
Tu m’as connu,
Tu m’as sondé des cieux:
Où puis-je fuir
Ta science infinie?
Eternel Roi,
Tu me suis en tous lieu. (bis 4 lignes)

2.
Soit que je marche
Ou bien que je m’arrête,
Voici, Seigneur!
Tu te tiens près de moi;
Et, pour parler
Quand ma langue s’apprête,
Tout mon dessein
Est déjà devant toi. (bis 4 lignes)

3.
Vivant ou mort,
Dans les cieux, sur la terre,
Ceint de lumière
Ou ceint d’obscurité,
Partout ta main
Peut me saisir, ô Père!
Partout sur moi
Ton œil est arrêté. (bis 4 lignes)

4.
Que ta pensée
Est donc mystérieuse!
Je n’en saurais
Mesurer la hauteur;
A mes regards
Ton œuvre est merveilleuse,
Et, confondu,
J’adore ta grandeur. (bis 4 lignes)

5.
Connaitre, ô Dieu!
Ton amour, ta puissance,
Sur mon sentier
Voir briller ta splendeur,
Fonder sur toi
Toute mon espérance,
Sont les seuls biens
Que désire mon cœur. (bis 4 lignes)`,
  },
  {
    id: "28",
    title: "028- Mon seul appui",
    lyrics: `1.
  Mon seul appui, c’est l’Ami Céleste,
Jésus seul! Jésus seul!
Les ans s’en vont, cet Ami me reste,
Jésus seul! Jésus seul!

Refrain:
Cet Ami connait mes alarmes,
Son amour guérit ma douleur;
Sa main essuie toutes mes larmes,
Doux Sauveur! Doux Sauveur!

2.
Tout mon désir, c’est de Le connaitre,
Jésus seul! Jésus seul!
Et que sa paix remplisse mon être,
Jésus seul! Jésus seul!

3.
Dans le danger, toujours il me garde,
Jésus seul! Jésus seul!
Dans mes soucis, à Lui je regarde,
Jésus seul! Jésus seul!
[Refrain]`,
  },
  {
    id: "29",
    title: "029- Jésus ô nom qui surpasse!",
    lyrics: `1.
Jésus, ô nom qui surpasse
Tout nom qu’on puisse exalter!
Que jamais je ne me lasse,
Nom béni, de te chanter!
Seule clarté qui rayonne
Sur les gloires du saint lieu,
Seul nom dont l’écho résonne
Dans le cœur même de Dieu!

2.
Jésus, c’est l’Amour suprême
De son trône descendu,
Qui ceint de son diadème
Le front de l’homme perdu.
C’est le Roi qui s’humilie
Pour vaincre le révolté ;
C’est la divine folie,
Dans la divine bonté.

3.
Qui pleura sur ceux qui pleurent?
C’est Lui, l’homme méprisé!
Qui mourut pour ceux qui meurent?
C’est Lui, l’homme au cœur brisé!
De son sang et de ses larmes
Il arrosa son chemin,
Et c’est par ces seules armes
Qu’il sauva le genre humain.

4.
Jésus, par qui Dieu pardonne,
Roi d’épines couronné,
Que le monde t’abandonne,
A toi mon cœur s’est donné!
Ta mort est ma délivrance,
Je suis heureux sous ta loi,
O Jésus, mon espérance,
Quelle autre aurais–je que toi?`,
  },
  {
    id: "30",
    title: "030- Gloire gloire à l'Éternel!",
    lyrics: `1.
Gloire, gloire à l’Eternel!
Qu'un cantique solennel (bis)
De nos cœurs monte à son trône.
Quand il crée, oh! Qu’il est grand! (bis)
Qu’il est juste en punissant,
Qu’il est bon quand il pardonne.

2.
Il commande… et le néant
Tressaille au premier accent (bis)
De sa parole vivante;
Et des astres radieux (bis)
Sa main jette dans les cieux
La poussière étincelante.

3.
Il accuse, et le pécheur,
Devant cet Accusateur (bis)
Sent sa profonde misère,
Et s’écrie, en son effroi: (bis)
Montagnes, tombez sur moi,
Cachez-moi de sa colère!

4.
Mais l’âme à qui le Seigneur
S’est donné pour Rédempteur (bis)
Goûte une paix ineffable:
Objet d’un si grand amour (bis)
Elle se donne en retour
A ce Sauveur adorable.

5.
O Dieu! que tes rachetés
Toujours chantent les bontés (bis)
De Celui qui leur pardonne!
Gloire, gloire à l’Eternel! (bis)
Ce cantique solennel
Montera jusqu’à son trône!`,
  },
  {
    id: "31",
    title: "031- Jésus je voudrais mieux",
    lyrics: `1.
Jésus, je voudrais mieux connaître,
Mieux saisir ta grâce efficace,
L’amour qui mes péchés efface;
Qui sur la croix mourut pour moi.
Mieux connaître Jésus, (bis)
L’amour qui mes péchés efface
Qui sur la croix mourut pour moi.

2.
Jésus, je voudrais mieux connaître,
Mieux suivre ta volonté sainte,
L’amour qui seul bannit la crainte
Quand en mon cœur il est vainqueur.
Mieux connaître Jésus, (bis)
L’amour qui seul bannit la crainte
Quand en mon cœur il est vainqueur.

3.
Jésus, je voudrais mieux connaître,
Mieux sentir de ton Saint-Esprit,
La puissance qui m’affranchit,
Qui me console, et qui m’instruit
Mieux connaître Jésus, (bis)
La puissance qui m’affranchit,
Qui me console, et qui m’instruit.

4.
Jésus, je voudrais mieux connaître,
Mieux contempler mon héritage:
La joie qui sera le partage
Des rachetés, tes bien-aimés.
Mieux connaître Jésus, (bis)
La joie qui sera le partage
Des rachetés, tes bien-aimés.`,
  },
  {
    id: "32",
    title: "032- Oui ton amour est un amour",
    lyrics: `1.
Oui, ton amour est un amour sublime;
Il est plus haut que la plus haute cime
Et que l’azur insondable des cieux.
Comment pourrais-je, ô Dieu! Vers cet abîme
Lever les yeux?

2.
Oh! Quel amour! Il m’entoure, il m’inonde;
C’est une mer calme, pure, profonde,
Et sur ses bords est assise ma foi.
Vaste océan, que murmure ton onde?
« Pour toi, pour toi! »

3.
Oui, c’est pour moi, je le crois et j’adore,
O Christ Sauveur! Qu’il retentisse encore
Ce mot divin, ce mot de ton amour!
Redis-le moi, jusqu’à la douce aurore
De ton retour.

4.
Et quand luira cette aurore bénie,
Quand, à Jésus plus tendrement unie,
Mon âme, enfin, mon âme le verra,
D’elle vers Lui ma louange infinie
S’élèvera!`,
  },
  {
    id: "33",
    title: "033- Vers toi Seigneur",
    lyrics: `1.
Vers toi, Seigneur, que notre hymne s’élève;
C’est le parfum du soir que nous t’offrons.
Pour que ce jour en ta grâce s’achève,
Vois à tes pieds s’incliner tous nos fronts.

2.
La nuit descend; une douce rosée
Baigne la terre après les feux du jour…
O bon Sauveur, que notre âme épuisée
Retrouve aussi la vie en ton amour!

3.
Veuille détruire en nous ce qui t’offense;
Daigne effacer nos fautes de ce jour;
Et qu’en ta paix retrouvant l’innocence,
Nous soyons prêts, ô Christ, pour ton retour!
    `,
  },
  {
    id: "34",
    title: "034- Quand finira le combat de la foi",
    lyrics: `1.
Quand finira le combat de la foi,
Quand aux rayons de la nouvelle aurore
Mes yeux verront le Sauveur que j'adore
Ah! Ce sera le triomphe pour moi.

Refrain:
Jour de victoire et de bonheur!
Mes yeux verront mon Rédempteur,
Loin du péché, de la mort, de l'erreur…
O jour de victoire et de bonheur!

2.
Dans ton palais, ô mon bien-aimé Roi
Tu daigneras m'accorder une place…
Être à tes pieds et contempler ta face:
Je ne veux pas d'autre gloire pour moi.

3.
Là, je verrai, groupés autour de toi,
Ceux que jamais autrefois sur la terre;
Mais ton sourire, ô Prince de lumière,
Sera le ciel pour eux comme pour moi!`,
  },
  {
    id: "35",
    title: "035- Par tous les saints glorifié",
    lyrics: `1.
Par tous les saints glorifié,
Jésus inspire leurs louanges,
Plus belle que le chant des anges,
Gloire à l'Agneau, (bis)
Gloire à l'Agneau sacrifié!

2.
C'est par Lui qu'est justifié
Tout pécheur qui demande grâce.
Prêtes et rois devant sa face,
Chantons l'Agneau, (bis)
Chantons l'Agneau sacrifié!

3.
Par le Père magnifié,
Tout l'univers lui rend hommage.
L'Agneau règnera d'âge en âge.
Gloire à l'Agneau, (bis)
Gloire à l'Agneau sacrifié.

4.
Par ton Esprit vivifié,
Je veux jusqu'à ma dernière heure,
Chanter l'amour qui seul demeure:
Gloire à l'Agneau, (bis)
Gloire à l'Agneau sacrifié.`,
  },
  {
    id: "36",
    title: "036- Mon Sauveur m’aime",
    lyrics: `1.
Mon Sauveur m'aime,
Quel ferme appui pour ma foi!
L'amour suprême
Descend vers moi!
Dieu vint sur la terre
Vivre en homme de douleur;
Voyant ma misère,
Il m'ouvre son coeur.

Refrain:
Jésus! Jésus! Qui peut sonder ton amour?
Jésus! Jésus! Je t'aime en retour.

2.
Mon Sauveur m'aime
Malgré mon indignité,
Toujours le même,
Plein de pitié!
Il voit ma souffrance,
Il enlève mon souci;
Son amour immense
Est mon sûr abri.

3.
Mon Sauveur m'aime
Comme un joyau précieux
Du diadème
Qu'il porte aux cieux.
Sa vie éternelle,
Il partage avec moi,
Sa gloire immortelle,
Il offre à ma foi.
`,
  },
  {
    id: "37",
    title: "037- Ô Seigneur ô Sauveur",
    lyrics: `1.
O Seigneur, ô Sauveur,
Que nos lèves te louent,
Mais qu'avec nos accents
Nos oeuvres soient d'accord!
Si, par nos actions,
Nos coeurs te désavouent,
Dans nos chants les plus beaux.
Tout est vain, tout est mort. (bis)

2.
Tu naquis pour servir,
Et servir fut ta gloire;
Servir est à jamais
Le sceau de tes enfants.
Qui fait peu t'aime peu;
Qui se borne à te croire,
Ne te croit point encore,
O Sauveur des croyants. (bis)

3.
Mourut-il avec Christ
Au rocher du Calvaire,
L'amour pieux et tendre,
Asile du malheur?
Non, l'amour y naquit,
Et dès lors sur la terre,
Comme on cherche un trésor,
Il cherche la douleur.

4.
Que de maux, de périls,
Et de besoins m'appellent!
Que de frères, d'amis,
Dieu jette dans mes bras!
Que d'oeuvres à fonder,
Que d'oeuvres qui chancellent…
Travaillons: le loisir
N'appartient qu'aux ingrats. (bis)`,
  },
  {
    id: "38",
    title: "038- Voici Noël ô douce nuit",
    lyrics: `1.
Voici Noël, o douce nuit
L'étoile est là qui nous conduit
Allons donc tous avec les mages
Porter à Jésus nos hommages
Car l'enfant nous est né
Le fils nous est donné

2.
Voici Noël! Oh! Quel beau jour
Jésus est né! Quel grand amour
C'est pour nous qu'il vient sur la terre
Qu'il prend sur lui notre misère
Un sauveur nous est né
Le fils nous est donné

3.
Voici Noël! Ah, d'un seul cœur
Joignons nos voix au divin chœur
Qui proclame au ciel les louanges
De celui qu'annoncent les anges
Oui, l'enfant nous est né
Le fils nous est donné

4.
Voici Noël! Ne craignons pas
Car Dieu nous dit : « Paix ici-bas
Bienveillance envers tous les hommes»
Pour nous aussi, tels que nous sommes
Un sauveur nous est né
Le fils nous est donné`,
  },
  {
    id: "39",
    title: "039- Il est né le Roi du monde",
    lyrics: `1.
Il est né le Roi du monde,
Le Christ, le Libérateur!
Que la terre au ciel réponde
D'une voix, d'un même coeur.

Refrain
Dans l'étable misérable,
Contemplez ce nouveau né!
A la terre, ô mystère,
Dieu Lui-même s'est donné!

2.
A tes pieds, Roi sans couronne,
Jésus, nous courbons nos fronts.
Ta crèche est pour nous un trône,
C'est là que nous t'adorons.

3.
En notre âme vient renaître,
O Christ, elle a soif de toi!
Elle veut t'avoir pour Maître,
Humble enfant, glorieux Roi!
[Refrain]`,
  },
  {
    id: "40",
    title: "040- Dans les champs le berger veille",
    lyrics: `1.
Dans les champs le berger veille
Aux approche du matin,
Quand la brise à son oreille,
Apporte un écho lointain.
Et tandis que tout rayonne
D'un soudaine clarté,
Plus forte la voix résonne
Du fond de l'immensité.
Gloire à Dieu dans les hauts cieux,
Paix aux hommes en tous lieux!
Le Rédempteur et le Maître
Qu'attendaient vos coeurs pieux,
Dans la crèche vient de naître:
Gloire à Dieu dans les hauts cieux!

2.
Bergers, pourrez-vous comprendre
L'amour du Dieu tout-puissant,
Qui, pour vous, daigne descendre
A n'être qu'un faible enfant,
Un enfant que la souffrance
Saisira dès le berceau,
Qui marchera sans défense
Vers la croix et le tombeau?
Gloire à dieu dans les hauts cieux,
Paix au hommes en tous lieux!
Pour sauver l'âme coupable
Le verbe victorieux,
Naît dans un pauvre étable:
Gloire à Dieu dans les hauts cieux!

3.
En chantant l'hymne nouvelle
L'ange au ciel s'est envolé,
Et sous la voûte éternelle
Le berger reste isolé;
Mais, ravi du saint mystère,
Son coeur murmure tout bas:
“Si l'ange a quitté la terre,
Le Sauveur ne sen vas pas!”
Gloire à Dieu dans les hauts cieux,
Paix aux hommes en tous lieux!
Pour cet enfant dans ses langes,
Pour ce don si précieux,
Chantons tous, comme les anges:
Gloire à Dieu dans les hauts cieux!`,
  },
  {
    id: "41",
    title: "041- Écoutez un saint cantique",
    lyrics: `1.
Écoutez! Un saint cantique
Vient d’éclater dans les cieux:
C’est un hymne magnifique,
C’est un chant simple et joyeux.
Les voix parcourant l’espace,
Disent aux humains surpris:
« La loi fait place à la grâce,
Et Moïse à Jésus-Christ. »

2.
La promesse est accomplie,
Le salut nous est donné:
En Christ, Dieu réconcilie
Sa justice et sa bonté.
L’heure de la délivrance
Pour les captifs a sonné;
C’est la nouvelle alliance:
L’enfant Jésus nous est né.

3.
Et, soudain, perçant le voile
Du firmament ténébreux,
L’éclat nouveau d’une étoile
Vers Juda jette ses feux.
Les Mages, à sa lumière,
Accourent de l’Orient;
Et pour rendre gloire au Père,
Ils vont adorer l’Enfant

4.
Ce Jésus est notre Frère,
Il a vécu parmi nous;
Il a pris notre misère,
Pécheurs, il est mort pour nous.
Sa charité nous enlace,
Il veut régner sur nos cœurs;
Sachons accepter sa grâce:
Jésus, sois notre Sauveur!`,
  },
  {
    id: "42",
    title: "042- Terre chante de joie",
    lyrics: `1.
Terre, chante de joie!
Celui que Dieu t'envoie,
Le Christ est né!
Oui, chante, ô race humaine!
C'est pour briser ta chaîne
Et pour t'ouvrir le ciel
Qu'Il t'est donné!

2.
Ton Seigneur et ton Maître,
Pour toi, voulut connaître
La pauvreté;
Mais rien n'est comparable
A ce lieu misérable
Où rayonne, de Dieu,
La charité.

3.
Cette crèche est un temple
Où la foi te contemple,
O Roi des rois!
Car c'est là que commence
Le sacrifice immense
Que tu dois achever
Sur une croix!

4.
Ah! Fais qu'à ton école,
Loin du monde frivole,
Enfant Sauveur
Dans l'amour qui pardonne,
S'humilie et se donne,
J'apprenne le secret
Du vrai bonheur!`,
  },
  {
    id: "43",
    title: "043- Salut blanche étoile",
    lyrics: `1.
Salut, blanche étoile,
Au plus haut du ciel!
Rayonne sans voile,
Splendeur de Noël!
Venez, tendre enfance,
Qu’un chant d’espérance (bis 2 lignes)
De vos cœurs s’élance
Jusqu’à l’Eternel!

2.
Ardente jeunesse,
Louez le Seigneur!
Tremblante vieillesse,
N’ayez point de peur!
Dieu même, ô mystère!
Se fait notre Frère, (bis 2 lignes)
Et vient sur la terre
Sauver le pécheur.

3.
Le fils adorable,
Lui, le Roi des rois,
Nait dans une étable,
Meurt sur une croix:
Sa grâce fidèle
Pardonne au rebelle.. (bis 2 lignes)
Jésus nous appelle:
Ecoutons sa voix !

4.
Salut, blanche étoile,
Au plus haut du ciel!
Rayonne sans voile,
Splendeur de Noël!
Pour l’âme qui t’aime,
Ta clarté suprême (bis 2 lignes)
Est le doux emblème
Du jour éternel!`,
  },
  {
    id: "44",
    title: "044- Jésus est né!",
    lyrics: `1.
Jésus est né! Venez, bergers et Mages;
Anges du ciel, portez-lui vos hommages;
Oui, gloire aux cieux! Paix en tous lieux!

2.
Voilà l'enfant qui doit sauver le monde;
Quel doux éclat et quelle paix profonde
Rayonne autour – Du Dieu d'amour.

3.
Il a voulu, pour notre délivrance,
Naître ignoré, pauvre et sans apparence;
Humble aussi, allons à Lui.

4.
Tout ce qui plaît à ce Roi débonnaire,
C'est un coeur pur, formé par la prière;
A toi ce coeur, - O bon Sauveur!

5.
A toi ce coeur, et qu'il te glorifie,
Non pour un jour, mais pour toute la vie;
Il est à toi, - Sois-en le Roi!
    `,
  },
  {
    id: "45",
    title: "045- Sur la paille fraîche",
    lyrics: `1.
Sur la paille fraîche
Dort l'enfant si beau;
Un pauvre crèche
Lui sert de berceau.
De l'azur céleste
L'Étoile a souri
A l'Enfant qui reste
Si tard endormi.

2.
Voilà que l'ânesse
Réveille l'enfant!
Mais Lui, la caresse
Tout en souriant.
Cher Jésus, je t'aime!
Prends mon petit coeur
Et veille toi-même
Sur moi, doux Seigneur!

3.
Près, plus près encore
De mon petit lit
Du soir à l'aurore
Car j'ai peur, la nuit!
Bénis, frère tendre
Les autres petits…
Viens bientôt nous prendre
Dans ton paradis.`,
  },
  {
    id: "46",
    title: "046- Quelle est au ciel",
    lyrics: `1.
Quelle est au ciel cette brillante étoile
Vers l'Orient jetant un feu nouveau?
Jamais encore aucun astre aussi beau
Des sombres nuits n'avait percé le voile.

2.
Vers Bethléem, dans la sainte Judée,
Elle répand ses célestes lueurs;
Elle y conduit de vrais adorateurs
De qui la foi sur le Christ est fondée.

3.
Ils ont trouvé le berceau du Messie.
Dans une crèche, un enfant ignoré
Dort humblement, de bergers entouré;
C'est l'Oint de Dieu, le Prince de la vie.

4.
Divin Jésus, étoile matinière,
De tes rayons viens éclairer nos yeux;
Viens nous conduire au chemin glorieux
Que ton amour nous traça sur la terre.`,
  },
  {
    id: "47",
    title: "047- J'ai découvert dans la vallée",
    lyrics: `1.
J’ai découvert dans la vallée,
Où j’avançais le front penché,
Une humble fleur dissimulée
Dans le feuillage desséché.

Refrain
Céleste Fleur que Dieu fit naître
Pour consoler l’humanité,
Fils de Marie, humble et doux Maître,
Revêts-nous de ta pureté!

2.
A genoux parmi les épines
Je cueillis la suave fleur,
Car toujours les grâces divines
S’offrent à nous dans la douleur.

3.
J’emportai la plante admirable;
Mon cœur en fut tout parfumé,
Et dans mon logis misérable,
Par elle tout fut transformé.

4.
Je la garde, elle est toujours belle,
Et rien ne saura la flétrir.
J’irai dans la tombe avec elle:
Avec elle on ne peut mourir.
`,
  },
  {
    id: "48",
    title: "048- Portant sa croix il monte",
    lyrics: `1.
Portant sa croix, il monte
Le sinistre coteau
Dans l'opprobre et la honte,
Muet comme un agneau.
Ce Sauveur débonnaire,
Pour le pécheur mortel,
Va trouver au Calvaire,
La mort d'un criminel.

2.
Sur cette croix sanglante,
Sous le divin courroux,
Regarde, âme tremblante,
L'Agneau souffrant pour nous.
Il porte sur sa tête
Nos péchés odieux;
Il veut payer ta dette,
Pour t'introduire aux cieux.

3.
Oh! Charité profonde!
Insondable grandeur!
Le Créateur du monde
Veut être ton Sauveur.
Ainsi, plus de détresse,
Jésus est recours!
Il est ta forteresse!
Il t'aime pour toujours!`,
  },
  {
    id: "49",
    title: "049- Ô Christ J'ai vu ton agonie",
    lyrics: `1.
O Christ! J'ai vu ton agonie
Et mon âme a frémi d'horreur!
Oui, tu viens de perdre la vie,
Et c'est pour moi, pauvre pécheur.

2.
A ta mort, la nature entière
Se répand en cris de douleur;
Le soleil cache sa lumière,
Les élus pleurent leur Sauveur.

3.
Que ta mort, ô sainte Victime,
Soit toujours présente à nos yeux!
Ton sang peut seul laver le crime!
Seul il peut nous ouvrir les cieux.

4.
O Christ! Ta charité profonde
Touche et pénètre notre coeur;
Tu meurs pour les péchés du monde;
Toi seul es notre Dieu Sauveur!`,
  },
  {
    id: "50",
    title: "050- Pécheurs voyez l'agneau du Père",
    lyrics: `1.
Pécheurs, voyez l'Agneau du Père
Sur le bois,
Sur le bois de la croix.
Pour nous il rend l'âme au Calvaire,
Sur le bois,
Sur le bois de la croix.
J'entends son cris d'agonie,
Je vois sa souffrance infinie!
Ta mort, Jésus, sera ma vie.
Oui, je crois
A Jésus mort en croix! (bis 2 lignes)

2.
Ton sang, Jésus, seul purifie;
Du pécheur
Tu peux laver le coeur.
Ta voix d'amour m'offre la vie;
Du pécheur
Tu peux laver le coeur.
De Golgotha de ta voix crie;
C'est pour vous que j'offre ma vie!
O Christ! J'entends ta voix chérie;
Bon Sauveur,
Je te donne mon coeur. (bis 2 lignes)

3.
Agneau de Dieu, près de ton Père,
Souviens-toi
D'un pécheur tel que moi!
O Christ! Souviens-toi du Calvaire;
Souviens-toi
D'un pécheur tel que moi!
Pour moi fut ton agonie;
Pour moi fut ta peine infinie!
A toi sera toute ma vie;
O mon Roi!
O Christ, je suis à toi. (bis 2 lignes)`,
  },
  {
    id: "51",
    title: "051- Sur cette Terre ô divin Frère",
    lyrics: `1.
Sur cette Terre, O divin Frère!
Jésus, tu vins subir la mort,
De moi, coupable et misérable,
Tu voulus partager le sort.

2.
Ta voix bénie donne la vie,
C'est pour sauver que tu souffris.
Ton sacrifice est ma justice:
Pour les pécheurs tu répondis.

3.
Ce saint mystère que je révère,
Oh! Je ne pourrais le sonder!
Pour tout comprendre, il faut attendre,
Mais, Rédempteur! Je puis t'aimer.`,
  },
  {
    id: "52",
    title: "052- Mortels voulez-vous savoir",
    lyrics: `1.
Mortels, voulez-vous savoir
Quel est mon unique espoir,
Ma sagesse et ma science,
Mon trésor, ma récompense? (bis)
C'est Jésus crucifié.
C'est Jésus, (bis)
C'est Jésus crucifié.

2.
Quelle est l'ancre de ma foi?
De mon coeur, quelle est la loi?
Quel est mon seul sacrifice,
Ma sainteté, ma justice? (bis)
C'est Jésus crucifié.
C'est Jésus, (bis)
C'est Jésus crucifié.

3.
De mon esprit languissant,
Qui fait cesser le tourment?
Dans la peine et la souffrance,
Qui soutient ma confiance? (bis)
C'est Jésus crucifié.
C'est Jésus, (bis)
C'est Jésus crucifié.

4.
Quel est celui don't la mort
Me prépare un nouveau sort?
Quel est cet Ami fidèle
Qui sans cesse à Lui m'appelle? (bis)
C'est Jésus glorifié.
C'est Jésus, (bis)
C'est Jésus glorifié.`,
  },
  {
    id: "53",
    title: "053- Obscur et pauvre au monde",
    lyrics: `1.
Obscur et pauvre au monde présenté.
Nous le voyons sans éclat, sans beauté,
Ce Roi des rois, ce Fils du Père,
Vit ici-bas dans la misère.

Refrain:
Il s'est chargé de toutes nos langueurs,
Et sur la croix a porté nos douleurs, (bis)

2.
Mon Dieu, mon Dieu! Pourquoi m'as-tu laissé?
Tel est le cris de son coeur angoissé.
Puis, Seigneur, il baisse la tête,
Et ta justice est satisfaite.

3.
Seigneur Jésus, que nous avons percé,
Dans notre coeur par la foi sois placé;
Car ta mort, qui nous justifie,
Par la foi devient notre vie.
`,
  },
  {
    id: "54",
    title: "054- À la croix où mourut mon Sauveur",
    lyrics: `1.
A la croix où mourut mon Sauveur,
Je suis venu, brisé de douleur;
Là son sang purifia mon coeur:
A son nom la gloire! (ter)
Là son sang purifia mon coeur:
A son nom la gloire!

2.
Quelle merveille! Il vint me sauver
Quand de sa croix je me fus chargé,
En moi Jésus vint pour demeurer:
A son nom la gloire! (ter)
En moi Jésus vint pour demeurer:
A son nom la gloire!

3.
O fontaine effaçant le péché,
Donnant la vie au coeur desséché!
Là, Jésus me retient attaché:
A son nom la gloire! (ter)
Là, Jésus me retient attaché:
A son nom la gloire!

4.
Pauvre âme, viens aux pieds du Sauveur,
A la source ouverte à tout pécheur,
Viens t'y plonger, trouver le bonheur:
A son nom la gloire! (bis)
Viens t'y plonger, trouver le bonheur:
A son nom la gloire!

`,
  },
  {
    id: "55",
    title: "055- Christ immolé sur la colline",
    lyrics: `1.
Christ, immolé sur la colline
Et cloué sur la croix,
Méprisé, couronné d’épines
Je te couronne Roi.

Refrain:
Pour me rappeler Gethsémani,
Pour me rappeler ton agonie,
pour me rappeler ton corps meurtri
Conduis-moi vers la croix

2.
Montre- moi ton tombeau si sombre
Où les femmes pleuraient,
Où les anges de Dieu, sans nombre,
Veillaient et te gardaient

3.
Quand au jardin, toujours humide,
j’entre en portant mon don,
Oh, montre-moi le tombeau vide
M’assurant le pardon.

4.
Porter ma croix! Seigneur, que j’aime
A le faire pour toi.
Je veux gouter la coupe même
Que tu vidas pour moi.

`,
  },
  {
    id: "56",
    title: "056- Agneau de Dieu",
    lyrics: `1.
Agneau de Dieu,
Messager de la grâce,
Je veux entendre ta voix,
Le langage de la croix:

Solo:
Pour toi je fus livré,
Méprisé, maltraité,
Battu, meurtri, blessé,
Pour ton iniquité.

2.
Agneau de Dieu,
Messager de la grâce,
J'ai péché, je viens à toi,
Je t'invoque, réponds-moi!

Solo:
Pour toi je fus brisé,
D'épines couronné,
De tous abandonné,
Frappé pour ton péché.

3.
Agneau de Dieu,
Messager de la grâce,
Oh! Fais passer sur mon coeur
Tout ton sang, divin Sauveur!

Solo:
Mon côté fut percé,
Et mon sang fut versé;
Dans ce sang, ton passé,
Pécheur, est effacé.

4.
Agneau de Dieu,
Messager de la grâce,
Je me confie et je crois;
Ton pardon, je le reçois!

Solo:
Sur l'enfant racheté
Qui fait ma volonté,
Je mets ma sainteté,
Ma divine beauté!
`,
  },
  {
    id: "57",
    title: "057- Un regard sur ta croix sanglante",
    lyrics: `1.
Un regard sur ta croix sanglante,
Jésus, fait déborder mon cœur
D’amour et de douleur poignante,
D’amour et d’éternel bonheur.

2.
Tu seras seul toute ma gloire,
Car tout ce dont je me vantais
M’empêcherait encor de croire
Qu’en ta mort seule j’ai la paix.

3.
Te donnerais-je quelques larmes,
Quelques soupirs et quelque amour?
Devant ta croix, je rends les armes:
Prends-moi tout entier dès ce jour.

4.
A tes pieds, mon Sauveur, je jette
Ce que mon cœur aime le plus;
Oui, prends mon idole secrète;
Tu seras mon trésor, Jésus!`,
  },
  {
    id: "58",
    title: "058- J'entends ta douce voix",
    lyrics: `1.
J'entends ta douce voix,
Jésus, je viens à Toi.
Je viens, ô Sauveur, lave-moi,
Dans le sang de ta croix!

Refrain:
Jésus, Roi des rois,
Qui mourus pour moi,
Je veux mourir avec Toi,
Avec Toi sur la croix.

2.
J'entends ta douce voix,
Qui me dit: “Crois en moi!”
Je crois, Seigneur, soutiens ma foi,
Tiens-moi près de ta croix!

3.
J'entends ta douce voix,
Elle pénètre en moi
Et me dit d'aimer comme Toi
De l'amour de la croix.

4.
J'entends ta douce voix,
Toi qui mourus pour moi,
Seigneur, que je m'unisse à Toi
Dans la mort, par la foi!
[Refrain]


`,
  },
  {
    id: "59",
    title: "059- Pour quel péché",
    lyrics: `1.
Pour quel péché, Jésus, pour quel offense
A-t-on sur Toi prononcé la sentence?
Ah! Qu'as-tu fais, innocente victime?
Quel est ton crime?

2.
Qui peut t'avoir attiré ce supplice?
C'est moi, Seigneur! Oui, c'est mon injustice:
De ces tourments où ton amour t'expose
Je suis la cause.

3.
Pour me sauver, sacrifice adorable!
Le maître meurt pour l'esclave coupable,
Le bon berger pour sa brebis chérie
Donne sa vie.

`,
  },
  {
    id: "60",
    title: "060- Rédempteur adorable",
    lyrics: `1.
Rédempteur adorable,
Sur la croix attaché,
Traité comme un coupable,
Brisé pour mon péché,
Ton angoisse suprême,
Ta douleur, ton tourment
Me disent : «Vois, je t’aime,
J’ai pris ton châtiment.»

2.
Abandonné du Père,
Dans mon âme troublé,
Buvant la coupe amère
Pour ton iniquité,
De l’éternelle flamme,
Mon amour te sauva,
Je mourus pour ton âme,
Pécheur, à Golgotha!

3.
Le sang de mes blessures,
Ma couronne de Roi,
Toutes ces meurtrissures,
Comprends-le, c’est pour toi!
J’ai subi ta souffrance,
J’ai porté ta langueur;
Contemple en assurance
Ton grand Libérateur ! »

4.
Ton amour me réclame,
Me voici, cher sauveur!
Prends mon corps et mon âme
Pour prix de ta douleur.
Oui, mon âme ravie,
Désormais ne veut plus
Que vivre de ta vie,
A ta gloire, ô Jésus!`,
  },
  {
    id: "61",
    title: "061- Jésus Agneau de Dieu",
    lyrics: `1.
Jésus, Agneau de Dieu!
Du sang de l’alliance
Répandu sur la croix
Pour de pauvres pécheurs,
Jusqu’à la fin des temps
Durera ta puissance,
Et tous les rachetés
Seront plus que vainqueurs.

2.
Le brigand converti
Trouva dans ce refuge
Une pleine espérance
A ses derniers moments;
Coupable comme lui,
Tremblant devant mon juge,
C’est là que j’ai cherché
La fin de mes tourments.

3.
Dans la sainte cité
Par mon Dieu préparée,
Je chanterai l’amour
Et le nom glorieux
Du berger qui chercha
Sa brebis égarée,
Et la prit dans ses bras
Pour la porter aux cieux.

`,
  },
  {
    id: "62",
    title: "062- Regarde âme angoissée",
    lyrics: `1.
Regarde, âme angoissée,
Au mourant du Calvaire;
Regarde à Christ sur la croix élevé!
C’est là qu’est ton Sauveur,
Contemple-le, mon frère;
Un seul regard, et sois sauvé!
Regarde et croix!
La vie et le pardon descendent du Calvaire.
Oh! regarde, regarde à la croix!

2.
Pourquoi fut-Il frappé
Par les foudres divines?
Pourquoi fut-il sur le bois attaché?
Pourquoi son front sacré
Fut-il meurtri d’épines,
Sinon pour toi, pour ton péché?
Regarde et crois!
Pour lui la mort, pour toi les promesses divines;
Oh! regarde, regarde à la croix!

3.
Tu ne peux effacer
Par ton sang, par tes larmes,
Ton long oubli de la divine loi;
Pour vivre et triompher,
Il n’est pas d’autres armes
Que l’humble regard de la foi!
Regarde et crois!
Jésus, divin soleil, dissipera tes larmes;
Oh! regarde, regarde à la croix!`,
  },
  {
    id: "63",
    title: "063- En contemplant la croix bénie",
    lyrics: `1.
En contemplant la croix bénie
Où mourut le Prince de paix,
Tout mon orgueil, mes biens, ma vie,
Sont abandonnés à jamais!

Refrain:
Oh! Sur la croix son sang fut versé,
Il fut là crucifié!
Maintenant, il vit dans mon cœur
Où tout est paix, parfait bonheur.

2.
Que toujours je me glorifie
Dans ta mort seule, ô mon Sauveur;
Tout autre but je sacrifie
Pour suivre l’Homme de douleur.

3.
Oh! Regardez tous sa couronne,
Ses mains, ses pieds pour nous percés,
D’où coule un fleuve qui nous donne
Pardon, paix, joie et sainteté.

4
Su je possédais tout le monde,
Ce serait un don trop petit;
Amour divin, grâce profonde,
Tout est à toi dès aujourd’hui.


`,
  },
  {
    id: "64",
    title: "064- Apporte sur le calvaire",
    lyrics: `1.
Apporte sur le Calvaire
Tes pesants fardeaux,
Là, tu trouveras, mon frère,
Le repos.

2.
« C’est moi, c’est moi qui console! »
Quelle est cette voix?
D’où viens-tu, douce parole?
« De la croix! »

3.
«Regarde ma main percée,
Mon côté sanglant,
Pour toi, pauvre âme angoissée,
Cœur tremblant! »

4.
« Voilant mes splendeurs divines
Sous l’horrible affront,
Pour toi saignent les épines
Sur mon front! »

5.
Ah! Quand même, pour te suivre,
Il faille souffrir,
Pour toi, Sauveur, je veux vivre
Et mourir!

6.
Car tu soutiendras ma tête
Dans les grandes eaux,
M’ouvrant, après la tempête,
Le repos.

`,
  },

  {
    id: "65",
    title: "065- Jésus par ton sang précieux",
    lyrics: `1.
Jésus, par ton sang précieux,
Enlève mon iniquité
Regarde-moi du haut des cieux,
Dis-moi que tu m’as pardonné…
J’ai longtemps erré cœur rebelle
Mais j’entends ta voix qui m’appelle

Au pied de ta croix maintenant,
Tout confus, brisé, je me rends

Blanc, plus blanc que neige, (bis)
Lave dans le sang de l’Agneau,
Je serai plus blanc que la neige

2.
Oh, le fardeau de mon péché,
Dieu très saint, est trop grand pour moi!
Je veux en être délivré,
A cette heure, oh !révèle-toi!
Jésus vient soit ma délivrance, 
Seul tu peux calmé ma souffrance,
Au pied de ta croix maintenant
Tout confus, brisé, je me rends.

Blanc, plus blanc que neige (bis)
Lavé dans le sang de l’Agneau,
Je serai plus blanc que la neige!

3.
Oh! Jésus, ton sang précieux
A lavé mon iniquité,
Oui, tu m’as répondu des cieux,
Ton amour m’a tout pardonné!
Je te contemple et je puis croire
Qu’en toi j’ai complète victoire.
Au pied de ta croix maintenant,
Je me relevé triomphant!

Blanc, plus blanc que neige (bis)
Lavé dans le sang de l’Agneau,
Mon cœur est plus blanc que la neige

`,
  },
  {
    id: "66",
    title: "066- Chef couvert de blessures",
    lyrics: `1.
Chef couvert de blessures,
Meurtri par nous, pécheurs,
Chef accablé d'injures,
D'opprobres, de douleurs,
Des splendeurs éternelles
Naguère environné,
C'est d'épines cruelles
Qu'on te voit couronné!

2.
C'est ainsi que tu paies
Le prix de ma rançon.
Tes langueurs et tes plates,
Voilà ma guérison.
Mon âme criminelle
Est à tes pieds, Seigneur;
Daigne jeter sur elle
Un regard de faveur.

3.
Au sein de ma misère,
Sauvé par ton amour,
Pour toi que puis-je faire?
Que t'offrir en retour?
Ah! Du moins, Dieu suprême,
Prends à jamais mon coeur:
Qu'il te serve et qu'il t'aime,
Plein d'une sainte ardeur.

4.
Pour ta longue agonie,
Pour ta mort sur la croix,
Je veux toute ma vie
Te louer, Roi des rois!
Ta grâce est éternelle,
Et rien jusqu'à la fin
Ne pourra, Dieu fidèle,
Me ravir de ta main.`,
  },
  {
    id: "67",
    title: "067- Christ est ressuscité",
    lyrics: `1.
Christ est ressuscité,
Qu’en des chants joyeux
Son triomphe en tous lieux
Soit exalté!

Refrain:
A toi la gloire et l’honneur,
O Sauveur, ô puissant Rédempteur!
Du sépulcre tu sortis vainqueur,
Prince de vie et Prince de paix.
Gloire à toi (ter), gloire à jamais

2.
Christ est ressuscité,
Cherche en Lui toujours,
O peuple racheté,
Force et secours!

3.
Christ est ressuscité!
Par Lui nous vivrons
Et dans l’éternité
Nous régnerons!


`,
  },
  {
    id: "68",
    title: "068- À toi la gloire Ô ressuscité",
    lyrics: `1.
A toi la gloire,
O ressuscité!
A toi la victoire
Pour l'éternité!
Brillant de lumière,
L'ange est descendu,
Il roule la pierre
Du tombeau vaincu.
[Refrain]
A toi la gloire, O Ressuscité!
A toi la victoire Pour l'éternité!

2.
Vois-le paraître!
C'est lui, c'est Jésus,
Ton Sauveur, ton Maître!
Oh! ne doute plus!
Sois dans l'allégresse,
Peuple du Seigneur,
Et redis sans cesse:
Que Christ est vainqueur.

3.
Craindrais-je encore?
Il vit à jamais,
Celui que j'adore,
Le Prince de paix;
Il est ma victoire,
Mon puissant soutien,
Ma vie et ma gloire :
Non, je ne crains rien!
`,
  },
  {
    id: "69",
    title: "069- Brisant ses liens funèbres alléluia",
    lyrics: `1.
Brisant ses liens funèbres, Alléluia!
Christ est sorti des ténèbres, Alléluia!
Le ciel, la terre ont chanté: Alléluia!
Jésus est ressuscité! Alléluia!

2.
Les soldats, le sceau, la pierre, Alléluia!
N’ont pu Le garder en terre; Alléluia!
Et c’est pour nous qu’aujourd’hui, Alléluia!
Le ciel s’ouvre devant Lui! Alléluia!

3.
Il vit, notre Roi de gloire! Alléluia!
Sépulcre, où est ta victoire? Alléluia!
Il a détruit sans effort, Alléluia!
La puissance de la mort, Alléluia!

4.
Puisque ta mort fut suivie, Alléluia!
Du triomphe de la vie, Alléluia!
Je veux, ô mon divin Roi, Alléluia!
Mourir et naître avec Toi! Alléluia!`,
  },
  {
    id: "70",
    title: "070- Le sauveur est ressuscité",
    lyrics: `1.
Le Sauveur est ressuscité! (bis)
Alléluia! L'enfer succombe.
Plein de gloire et de majesté,
Jésus triomphe de la tombe!

2.
Âmes en deuil, ne pleurez pas! (bis)
Jésus est votre délivrance;
Dans la nuit sombre du trépas,
Il fait rayonner l'espérance.

3.
Oui, gloire à Toi, mon Rédempteur! (bis)
Qu'à ton nom tout genou fléchisse,
Et que la terre, ô mon Sauveur,
Pour t'adorer au ciel s'unisse.`,
  },
  {
    id: "71",
    title: "071- Oui pour son peuple Jésus prie",
    lyrics: `1.
Oui, pour son peuple Jésus prie;
Prêtons l’oreille à ses soupirs;
Qu’à sa voix notre âme attendrie
Réponde par de saints désirs.
Dans les hauts lieux, brillant de gloire,
Il est entré victorieux,
Et sur l’autel expiatoire
Il offre son sang précieux.

2.
Oui, pour nos âmes Jésus prie;
Dans cet instant, ô charité!
Il plaide, il intercède, il crie
Pour nous, qui l’avons contristé.
A son enfant, auprès du père,
Son cœur obtient un doux pardon,
Et pour l’aider dans sa misère,
Sa voix réclame un nouveau don.

3.
Oui, pour les tiens, Jésus, tu pries;
Qu’il nous est doux de le savoir!
Ainsi, Seigneur, tu nous convies
A mettre en toi tout notre espoir.
Sous le parfum de ta prière
Fais-nous marcher, remplis d’ardeur
Pour te bénir, notre âme entière
S’élève à Toi, puissant Sauveur!`,
  },
  {
    id: "72",
    title: "072- Chantons chantons sans cesse",
    lyrics: `1.
Chantons, chantons sans cesse
La bonté du Seigneur!
Qu’une sainte allégresse
Remplisse notre cœur!
Un salut éternel
Est descendu du ciel
Nous avons un Sauveur! (bis)

2.
Vers le trône de grâce
Si nous levons les yeux,
Nous rencontrons la face
D’un Sauveur glorieux.
Il est notre avocat;
Pour les siens, il combat,
Toujours victorieux! (bis)

3.
Bientôt, vêtu de gloire,
Du ciel il reviendra…
Consommant sa victoire,
Il nous affranchira;
Et son heureux enfant,
Avec lui triomphant
Tel qu’il est le verra. (bis)

4.
Pour diriger la voie
De tous ses rachetés,
Dans leur cœur il envoie
Ses célestes clartés:
Son Esprit nous conduit,
Sa grâce nous instruit
Des saintes vérités. (bis)`,
  },
  {
    id: "73",
    title: "073- Qui me relève dans mes chutes",
    lyrics: `1.
Qui me relève dans mes chutes?
C’est Jésus-Christ!
Qui combat pour moi dans mes luttes?
C’est Jésus-Christ!
Jésus a parlé, je veux croire
Que je puis lutter pour sa gloire,
Car mon bouclier, ma victoire,
C’est Jésus-Christ!

2.
Je vais à mon Père, et ma voie
C’est Jésus-Christ!
Je suis bienheureux, et ma joie
C’est Jésus-Christ!
Et si, même dans la souffrance,
Mon cœur me parle d’espérance,
C’est que j’ai mis ma confiance
En Jésus-Christ!

3.
Sauvé, je ne me glorifie
Qu’en Jésus-Christ!
Pour la terre et le ciel, ma vie
C’est Jésus-Christ!
Bientôt, adieu, choses mortelles!
Loin de vous je prendrai des ailes
Vers les demeures éternelles,
Vers Jésus-Christ!`,
  },
  {
    id: "74",
    title: "074- Ô cieux unissez-vous",
    lyrics: `1.
O cieux, unissez-vous
Aux transports de la terre;
Eglise du Seigneur,
Renouvelle tes chants;
Et qu’en de saints accents, (bis)
De tous les cœurs pieux
S’élève la prière.

2.
Jésus vient de monter
Au séjour de la gloire.
Ses travaux sont finis:
Son peuple est racheté;
Et ceint de majesté, (bis)
Il entre aux lieux très-hauts
Avec cri de victoire.

3.
A la droite de Dieu
Sa place est préparée.
Là notre humanité
S’assied avec pouvoir.
Oh! qui peut concevoir (bis)
Que de cette grandeur
Elle soit honorée!

4.
Tu règnes, ô Jésus,
Dans la toute-puissance.
Sur le monde vaincu
Ton sceptre est souverain;
L’empire est dans ta main; (bis)
Et tu remplis les cieux
De ta magnificence.

5.
En toi, Fils du Très-Haut,
Réside notre vie.
On ne voit point encor
Ce qu’un jour nous serons;
Mais quand nous te verrons, (bis)
Tu nous revêtiras
D’une gloire infinie.`,
  },
  {
    id: "75",
    title: "075- Jésus est notre Ami suprême",
    lyrics: `1.
Jésus est notre Ami suprême
Oh! quel amour!
Mieux qu’un tendre frère, il nous aime;
Oh! quel amour!
Ici parents, amis, tout passe;
Le bonheur parait et s’efface;
Son cœur seul jamais ne se lasse…
Oh! quel Amour!

2.
Il est notre vie éternelle;
Oh! quel Amour!
Célébrons son œuvre immortelle;
Oh! quel Amour!
Par son sang, notre âme est lavée,
Au désert il l’avait trouvée;
Dans son bercail il l’a sauvée;
Oh! quel Amour

3.
Seigneur Jésus, fais-nous comprendre
Tout ton amour!
Dans nos cœurs, oh! Daigne répandre
Tout ton amour!
Que cet amour soit notre vie!
Qu’à jamais notre âme ravie
Savoure une joie infinie
En ton amour !`,
  },
  {
    id: "76",
    title: "076- Lorsque dans ma souillure",
    lyrics: `1.
Lorsque dans ma souillure,
Sans bonheur et sans paix,
Dans une voie impure,
Loin de Dieu je marchais,
Tout l’amour du Calvaire
A moi s’est révélé,
Terrassant l’adversaire,
Brisant mon cœur souillé.

Refrain
L’amour de Jésus m’est doux.
Chaque jour il m’est plus doux;
Amour qui me presse
D’inviter sans cesse,
Tous au divin rendez-vous.

2.
Cet amour fort et tendre
De mon divin Sauveur,
Oh ! Je le veux répandre
Partout avec ardeur,
Parmi tous ceux dont l’âme
Lutte et soupire encor
Sous l’esclavage infâme
Du péché, de la mort.

3.
Quand la foi, l’espérance
Passeront pour jamais,
De Christ, l’amour immense
Nous remplira de paix;
Objets de sa tendresse,
Les phalanges d’élus
Répéteront sans cesse
Tout l’amour de Jésus.
[Refrain]`,
  },
  {
    id: "77",
    title: "077- Oh que ton joug est facile!",
    lyrics: `1.
Oh! que ton joug est facile!
Oh! Combien j’aime ta loi!
Dieu saint, Dieu de l’Evangile,
Elle est toujours devant moi.
De mes pas c’est la lumière,
C’est le repos de mon cœur;
Mais, pour la voir tout entière,
Ouvre mes yeux, bon Sauveur! (bis 2 lignes)

2.
Non, ta loi n’est point pénible
Pour quiconque est né de Toi;
Toute victoire est possible
A qui combat avec foi.
Seigneur, dans ta forteresse,
Aucun mal ne m’atteindra:
Si je tremble en ma faiblesse,
Ta droite me soutiendra. (bis 2 lignes)

3.
D’un triste et rude esclavage
Affranchi par Jésus-Christ,
J’ai part à ton héritage
Au secours de ton Esprit.
Au lieu d’un Maître sévère,
Prêt à juger et punir,
Je sers le plus tendre Père,
Toujours prêt à me bénir. (bis 2 lignes)

4.
Dieu qui guides, qui consoles,
J’ai connu que le bonheur
C’est de garder tes paroles,
Et je les serre en mon cœur.
Fais-moi marcher dans ta voie
Et me plaire en tes statuts:
Si je cherche en Toi ma joie,
Je ne serai pas confus. (bis 2 lignes)

`,
  },
  {
    id: "78",
    title: "078- Saisis ma main craintive",
    lyrics: `1.
Saisis ma main craintive
Et conduis-moi;
Fais que toujours je vive
Plus près de Toi.
Sans Toi, mon tendre Père,
Pour me guider,
Je ne sais sur la terre
Comment marcher.

2.
Que ta main me dispense
Joie ou douleur,
Paisible en ta présence
Garde mon cœur;
En Toi pour toute chose,
Se confiant,
A tes pieds se repose
Ton faible enfant.

3.
Quand la nuit la plus noire
Te voilerait,
Ton bras jusqu’à la gloire
Me porterait.
Saisis ma main craintive
Et conduis-moi;
Fais que toujours je vive
Plus près de Toi!`,
  },
  {
    id: "79",
    title: "079- Dieu lui-même ô mystère!",
    lyrics: `1.
Dieu lui-même, ô mystère!
Descendant sur la terre,
A voulu se vêtir de notre infirmité
Chétif et misérable,
Il naît dans une étable…

Refrain:
Nous dirons son amour
pendant l’éternité. (bis)

2.
Sur une croix infâme
Voyez-le rendre l’âme,
De ses propres bourreaux portant l’iniquité;
Pour briser notre chaîne
Il subit notre peine…

3.
Comme on sort d’un vain rêve,
Il s’éveille…il se lève...
Tressaillez, cieux et terre: il est ressuscité!
Il nous ouvre la voie,
Il nous donne sa joie…

4.
Rentré dans la lumière,
A la droite du Père,
Il conserve envers nous la même charité;
Pour nous venir en aide
Sans cesse il intercède…
[Refrain]`,
  },
  {
    id: "80",
    title: "080- Quel ami fidèle et tendre",
    lyrics: `1.
Quel ami fidèle et tendre
Nous avons en Jésus-Christ!
Toujours prêt à nous entendre,
A répondre à notre cri!
Il connaît nos défaillances,
Nos chutes de chaque jour,
Sévère en ses exigences,
Il est riche en son amour.

2.
Quel ami fidèle et tendre
Nous avons en Jésus-Christ!
Toujours prêt à nous comprendre,
Quand nous sommes en souci!
Disons-lui toutes nos craintes,
Ouvrons-lui tout notre cœur.
Bientôt ses paroles saintes
Nous rendront le vrai bonheur.

3.
Quel ami fidèle et tendre
Nous avons en Jésus-Christ!
Toujours prêt à nous défendre
Quand nous presse l’ennemi
Il nous suit dans la mêlée,
Nous entoure de ses bras,
Et c’est lui qui tient l’épée,
Qui décide des combats.

4.
Quel ami fidèle et tendre
Nous avons en Jésus-Christ!
Toujours prêt à nous apprendre
A vaincre en comptant sur lui!
S’il nous voit vrais et sincères
A chercher la sainteté,
Il écoute nos prières
Et nous met en liberté.

5.
Quel ami fidèle et tendre
Nous avons en Jésus-Christ!
Bientôt Il viendra nous prendre
Pour être au ciel avec lui.
Suivons donc l’étroite voie
En comptant sur son secours.
Bientôt nous aurons la joie
De vivre avec lui toujours!`,
  },
  {
    id: "81",
    title: "081- Ami tendre et secourable",
    lyrics: `1.
Ami tendre et secourable,
Jésus, mon divin Berger,
Que ta grâce est admirable
Pour le pauvre péager!
Plus sa misère est profonde,
Plus il se sent grand pécheur,
Plus en lui ta grâce abonde,
Plus il te croit son Sauveur.

2.
Ami tendre et secourable,
Jésus, mon divin Berger,
Je suis aussi misérable
Que le pauvre péager.
Plus que lui je suis indigne
D’élever mes yeux vers toi;
Mais dans ta faveur insigne,
Ton cœur a pitié de moi.

3.
Ami tendre et secourable
Jésus, mon divin Berger,
Envers le plus grand coupable,
Ton amour ne peut changer.
Plus sa douleur est profonde,
Plus il se sent grand pécheur,
Plus en lui ta grâce abonde,
Plus il t’aime, ô bon Sauveur!`,
  },
  {
    id: "82",
    title: "082- Je ne sais pourquoi",
    lyrics: `1.
Je ne sais pourquoi, dans sa grâce,
Jésus m’a tant aimé,
Pourquoi par son sang il efface
Ma dette, mon péché.

Refrain:
Mais, je sais qu’en Lui j’ai la vie,
Il m’a sauvé dans son amour;
Et gardé par sa main meurtrie,
J’attends l’heure de son retour.

2.
Je ne sais comment la lumière
Eclaire tout mon cœur,
Comment j'ai compris ma misère
Et reçus mon Sauveur !

3.
Je ne sais quelle est la mesure
De joie et de douleur
Que pour moi, faible créature,
Réserve mon Sauveur.

4.
Je ne sais quand de la victoire
L’heure enfin sonnera,
Quand l’Agneau, l’Epoux dans sa gloire,
Avec Lui me prendra
`,
  },
  {
    id: "83",
    title: "083- Tiens dans ta main",
    lyrics: `1.
Tiens dans ta main,
Ta main puissante et forte,
Ton faible enfant
Qui seul ne peut marcher.
Vers Toi, Seigneur,
Tout mon désir se porte,
Sur mon chemin
Garde-moi de broncher!

2.
Tiens dans ta main
Tous les jours de ma vie,
Qu’ils soient des jours
De peine ou de bonheur;
Que de t’aimer,
Soit toute mon envie,
Que je sois à
Toi, Jésus, mon Sauveur!

3.
Tiens dans ta main
Ma main parfois tremblante,
Quand vient l’épreuve
Et ses jours de douleur.
Donne à ma foi,
Souvent si chancelante,
Plus de douceur,
De paix et de ferveur!

4.
Tiens dans ta main
Mon âme toute entière ;
Révèle-moi,
Jésus, tout ton amour;
Sois mon rocher,
Mon ancre, ma lumière,
Mon Roi, mon Maître,
O Jésus, chaque jour!

`,
  },
  {
    id: "84",
    title: "084- Jésus mis à mort pour moi",
    lyrics: `1.
Jésus, mis à mort pour moi,
Je cherche un refuge en toi!
Que ton sang, que l’onde pure
Découlant de ta blessure,
Otant mon iniquité,
Me rendent la liberté!

2.
Tous les travaux de mes mains
Pour te plaire seraient vains.
Lors même qu’en ma détresse
Mes pleurs couleraient sans cesse,
Ils ne sauraient me laver:
Toi seul peux et veux sauver!

3.
Seigneur, je n’apporte rien;
Ta croix seule est mon soutien.
Souillé, je viens à la source
Où les péchés sont lavés
Et les pécheurs sont sauvés!

4.
Qu’en toi je vive ici-bas!
Que je meure entre tes bras!
Et que, vers ton ciel splendide
Prenant mon essor rapide,
Jésus, mis à mort pour moi,
Je trouve un refuge en toi!`,
  },
  {
    id: "85",
    title: "085- Redites-moi l’histoire",
    lyrics: `1.
Redites-moi l’histoire
De l’amour de Jésus;
Parlez-moi de la gloire
Qu’il promet aux élus.
J’ai besoin qu’on m’instruise,
Car je suis ignorant,
Qu’à Christ on me conduise
Comme un petit enfant.

Refrain:
Redites-moi l’histoire (ter)
De l’amour de Jésus!

2.
Redites-moi l’histoire
De la crèche à la croix;
Eveillez ma mémoire,
Oublieuse parfois.
Cette histoire si belle,
Dites-la simplement;
Elle est toujours nouvelle;
Répétez-la souvent.

3.
Redites-moi l’histoire
De mon divin Sauveur;
C’est Lui dont la victoire
Affranchit le pécheur.
Ce glorieux message
Oh! redites-le moi,
Lorsque je perds courage,
Lorsque faiblit ma foi.

4.
Redites-moi l’histoire,
Quand le monde trompeur
Me vend sa vaine gloire
Au prix de mon bonheur.
Et quand, loin de la terre,
Je prendrai mon essor,
En fermant la paupière,
Que je l’entende encor!
`,
  },
  {
    id: "86",
    title: "086- Suivez suivez l’Agneau",
    lyrics: `1.
Suivez, suivez l’Agneau
Jusqu’au soir de la vie;
Vers un gras pâturage
Il mène son troupeau.
Au bonheur des élus
Sa grâce vous convie;
Suivez toujours,
Suivez toujours l’Agneau!

2.
Suivez-le sans frayeur,
Au jour de la tristesse;
Déposez dans son sein
Votre pesant fardeau;
Suivez-le dans la paix,
Au jour de l’allégresse;
Suivez toujours,
Suivez toujours l’Agneau!

3.
Mais, suivez-le partout.
Le Berger qui vous mène
Vous aime, et ne saurait
Egarer son troupeau.
Oui, le joug du Seigneur
Est une douce chaîne.
Suivez toujours
Suivez toujours l’Agneau!

4.
Suivez-le sans broncher;
Le chemin solitaire
Doit vous conduire un jour
Au céleste repos.
Mais pour le suivre au ciel,
Suivez-le sur la terre.
Suivez toujours,
Suivez toujours l’Agneau!`,
  },
  {
    id: "87",
    title: "087- Toujours ta divine présence",
    lyrics: ` 1.
Toujours ta divine présence
Jette un rayon sur mon chemin;
Et, le coeur joyeux, je m'avance;
Je n'ai pas peur du lendemain.

Refrain
Où tu voudras, je veux te suivre;
Agneau de Dieu, conduis mes pas.
Vivre sans Toi, ce n'est pas vivre;
Je ne puis être où tu n'es pas.

2.
Oh! Que jamais rien ne me voile
Ton doux regard, bien-aimé Roi!
Dans le danger, brillante Étoile,
Garde mes yeux fixés sur Toi.

3.
Auprès de Toi, la vie est belle,
C'est le bonheur, la liberté,
C'est une jeunesse éternelle,
C'est le ciel, la félicité!`,
  },
  {
    id: "88",
    title: "088- Jésus est au milieu de nous",
    lyrics: `1.
Jésus est au milieu de nous,
Son regard s’abaisse sur nous,
Sa douce voix, l’entendez-vous?
Je veux vous bénir tous! (bis)
Sa douce voix, l’entendez-vous?
Je veux vous bénir tous!

2.
Jésus est au milieu de nous,
Son regard s’abaisse sur nous
Sa douce voix, l’entendez-vous?
Je veux vous sauver tous! (bis)
Sa douce voix, l’entendez-vous?
Je veux vous sauver tous!

3.
Jésus est au milieu de nous,
Son regard s’abaisse sur nous,
Sa douce voix, l’entendez-vous?
Oh! je vous aime tous! (bis)
Sa douce voix, l’entendez-vous?
Oh! je vous aime tous!

`,
  },
  {
    id: "89",
    title: "089- Il me conduit douce pensée!",
    lyrics: `1.
Il me conduit, douce pensée!
Repos pour mon âme lassée!
En tous lieux son regard me suit,
Et par la main il me conduit.

Refrain:
Il me conduit, il me conduit!
Désormais pour Lui je veux vivre;
Brebis fidèle, je veux suivre
Le Bon Berger qui me conduit.

2.
Jésus sur moi veille sans cesse;
Dans la joie et dans la tristesse,
Dans le jour comme dans la nuit,
Pas à pas sa main me conduit.

3.
Comme un rempart, il me protège,
Il me préserve de tout piège;
Loin de moi l’ennemi s’enfuit
Quand par la main Christ me conduit.

4.
Quand mon heure sera sonnée,
Mon œuvre ici-bas terminée,
Je dirai, dans la sombre nuit:
Je ne crains point, il me conduit!
[Refrain]`,
  },
  {
    id: "90",
    title: "090- Le fils de Dieu vint sur la terre",
    lyrics: `1.
Le fils de Dieu vint sur la terre
Mourir pour moi, car il m’aimait;
Est-il de plus profond mystère,
D’amour plus grand et plus parfait?

Refrain:
Jésus m’a tant aimé (bis)
Il fut pour moi crucifié,
Jésus m’a tant aimé.

2.
Pour jamais ton sang pur efface
Mes péchés, mon iniquité;
Et tu fais de moi, par ta grâce,
Un enfant de l’éternité.

Refrain:
Jésus m’a tant aimé (bis)
Il fut pour moi ressuscité,
Jésus m’a tant aimé.

3.
Tu connais toute ma carrière,
Tu me conduis jour après jour
Je marche à ta pure lumière,
Toujours gardé par ton amour.

Refrain:
Jésus m’a tant aimé (bis)
Il fut pour moi glorifié,
Jésus m’a tant aimé.

4.
Jésus-Christ est toujours le même,
Il sauve encor parfaitement,
Qui que tu sois, ce Sauveur t’aime:
Viens, cœur brisé, viens confiant.

[Refrain]
Jésus m’a tant aimé (bis)
Il fut pour moi crucifié,
Jésus m’a tant aimé.`,
  },
  {
    id: "91",
    title: "091-  J’ai quitté le ciel pour toi",
    lyrics: `1.
J’ai quitté le ciel pour toi,
J’ai connu ta misère extrême;
Perdu, mourant loin de moi
Ignorant mon amour suprême.

Refrain:
Je suis ton Sauveur, ton Ami,
Reviens à moi dans ta tristesse;
Oh! sois sauvé dès aujourd’hui,
Et tu chanteras d’allégresse.

2.
J’ai vécu, pécheur, pour toi
J’ai souffert l’angoisse profonde;
N’ai-je pas été le Roi
Rejeté, méprisé du monde?

3.
J’ai subi la croix pour toi,
Je suis mort pour ta délivrance;
Si tu voulais croire en moi,
Je te remplirais de puissance.

4.
Je vis maintenant pour toi,
Là-haut dans la maison du Père;
Oh! Viens, suis-moi par la foi,
Oui, jusqu’à ton heure dernière.`,
  },
  {
    id: "92",
    title: "092- Jésus au nom saint et doux",
    lyrics: `1.
Jésus, au nom saint et doux,
Qui voulus porter pour nous
Le poids du divin courroux,
Nos âmes t’implorent.

2.
Par le jour où tu fléchis
Sous l’opprobre et le mépris,
Par la mort que tu souffris,
Nos âmes t’implorent

3.
Par l’heure où Gethsémané
T’a vu gémir prosterné,
Et des tiens abandonné,
Nos âmes t’implorent.

4.
Par la coupe de douleur,
Que tu bus pour nous, Seigneur,
Par ta sanglante sueur,
Nos âmes t’implorent.

5.
Par ton corps qui fut percé,
Et sur la croix exposé,
Par ton sang pour nous versé,
Nos âmes t’implorent.`,
  },
  {
    id: "93",
    title: "093- Douce clarté",
    lyrics: `1.
Douce clarté,
Dans la nuit qui m’enserre,
Dirige-moi!
La route est noire,
Et longue et solitaire,
Dirige-moi!
Brille à mes pieds; je ne demande pas
A voir de loin: guide-moi pas à pas!

2.
Ah! Je n’ai pas
Toujours désiré d’être
Conduit par toi;
Mais aujourd’hui
J’ai retrouvé mon Maitre:
Dirige-moi!
Je reconnais mes fautes du passé,
O Dieu, pardonne au pèlerin lassé!

3.
N’étais-je pas,
Même en mais jours de doute,
Conduit par Toi?
Ravins, Torrents,
En vain barrent ma route:
Dirige-moi !
Jusqu’à l’aurore ou me seront rendus
Mes bien-aimés, un instant disparus!

`,
  },
  {
    id: "94",
    title: "094- Comme un phare sur la plage",
    lyrics: `1.
Comme un phare sur la plage,
Perçant l’ombre de la nuit,
L’amour de Dieu, dans l’orage,
Cherche l’homme et le conduit.

Refrain:
O Sauveur! que ta lumière
Resplendisse sur les flots,
Et, vers le ciel, qu’elle éclaire
Et sauve les matelots.

2.
Nulle étoile n’étincelle
Pour vous guider, ô nochers!
Qui gardera la nacelle
Des écueils et des rochers?

3.
Dans la nuit qui m’environne,
De ton amour, ô Jésus!
Que par moi l’éclat rayonne
Aux yeux des marins perdus!

`,
  },
  {
    id: "95",
    title: "095- T’aimer ô Sauveur charitable",
    lyrics: `  1.
T’aimer, ô Sauveur charitable,
C’est de mon cœur l’ardent désir;
Seigneur, ta grâce est redoutable
A qui ne veut pas la saisir (bis 2 lignes)

2.
Tu m’aimas d’un amour immense,
O Christ! Que je t’aime à mon tour,
Et n’aspire à d’autre science
Que de connaitre ton amour (bis 2 lignes)

3.
Christ! Pour moi tu donnas ta vie,
Et, dépouillant ta majesté,
Tu revêtis l’ignominie,
Car tu m’aimas d’éternité (bis 2 lignes)

4.
Fais que mon âme aussi réponde
A tant de biens reçus de Toi,
Pour qu’en mon cœur ta grâce abonde
Reste, ô Jésus, reste avec moi. (bis 2 lignes)

5.
Céleste maison paternelle,
Quand s’ouvriront tes portes d’or?
Quand, vers toi, patrie éternelle,
Pourrons-nous prendre notre essor? (bis 2 lignes)

6.
O Seigneur, en ce jour suprême
Ton enfant saisira ta main,
Car Toi seul es toujours le même,
Fidèle hier, aujourd’hui, demain. (bis 2 lignes)`,
  },
  {
    id: "96",
    title: "096- Bon Sauveur Berger fidèle",
    lyrics: `1.
Bon Sauveur, Berger fidèle,
Garde-nous par ton amour;
Et de ta main paternelle
Nous conduise chaque jour.

Refrain:
Béni sois-tu, tendre Maître,
Jésus, nous sommes à Toi,
À toi seul nous voulons être,
Béni sois-tu, notre Roi !

2.
Toi qui nous reçus par grâce,
Bien que faibles et pêcheurs,
Par ta puissance efficace
Purifie encore nos cœurs.

3.
Seigneur, nous voulons te plaire,
T'obéir, garder ta loi;
Oh! pour cela daigne faire
Que nous vivions par la foi!

`,
  },
  {
    id: "97",
    title: "097- Je connais un guide infaillible",
    lyrics: `1.
Je connais un guide infaillible
Qui, constamment, veille sur moi;
Sur ses pas je poursuis, paisible
La sainte course de la foi

Refrain:
Conduit par toi, céleste guide
Je me dirige vers les cieux,
Et mon sentier, sous ton égide,
Devient toujours plus radieux.

2.
Parfois ma route est fort obscure,
Sans un seul rayon lumineux,
Mais quand mon pauvre cœur murmure,
Mon guide me soutient des cieux.

3.
Quand au dehors, Satan m’assaille,
Quand au dedans tout est bien noir,
Mon guide au fort de la bataille,
Me dit: « mets en moi ton espoir! »

4.
Ainsi, tout le long de la route,
Hier, aujourd’hui, jusqu’à la fin,
Près du guide, je ne redoute,
Ni pleurs, ni chute, ni chagrin
[Refrain]`,
  },
  {
    id: "98",
    title: "098- Jésus soit avec vous à jamais",
    lyrics: `1.
Jésus soit avec vous à jamais,
Vous guidant avec sagesse,
Vous entourant de tendresse,
Vous remplissant toujours de sa paix!

Refrain:
Avec vous, toujours avec vous!
Oui, qu’il soit tous les jours avec vous!
Avec vous, toujours avec vous
Jusqu’au jour du dernier rendez-vous!

2.
Avec vous au milieu du danger,
A l’heure de la détresse,
Qu’il soit votre forteresse,
Qu’il soit toujours votre Bon Berger!

3.
Avec vous quand votre ciel est bleu,
Comme au jour de la tempête,
Que son Cœur soit la retraite
Où vous retrouvez la paix de Dieu!

4.
Enfin, dans le dernier des combats,
Pour échanger cette terre
Contre la maison du Père,
Que Jésus vous porte dans ses bras!
`,
  },
  {
    id: "99",
    title: "099- Tenons nos lampes prêtes",
    lyrics: `1.
Tenons nos lampes prêtes,
Chrétiens, préparons-nous
Pour l’heure où les trompettes
Annonceront l’Epoux.

Refrain:
Qu’à répondre on s’empresse,
Hosanna! Hosanna!
Et qu’avec allégresse
On chante: Alléluia! (bis)

2.
Voici déjà les anges,
Avec eux les élus,
Unissant leurs louanges
En l’honneur de Jésus.

3.
Voici Jésus Lui-même,
Puissant, victorieux!
De son pur diadème
L’éclat remplit les cieux.

4.
Venez, bénis du Père,
Qui m’avez attendu;
Entrez dans la lumière,
Le ciel vous est rendu`,
  },
  {
    id: "100",
    title: "100- Il va venir le Seigneur que j’adore",
    lyrics: `1.
Il va venir, le Seigneur que j’adore;
Bientôt sa voix retentira du ciel
A mes regards l’horizon de se colore
Des purs rayons du soleil éternel.

Refrain:
Gloire à toi seul, Seigneur Jésus!
Gloire à jamais, gloire à ton nom!
De ton beau ciel, je ne sortirai plus
Et pour toujours j’exalterai ton nom.

2.
Qu’autour de moi s’élève la tempête,
Je suis en paix, car tu veilles sur moi;
Je puis, ô mon Sauveur, lever la tête,
Tu vas venir me prendre auprès de toi.

3.
Maison du Père, où ton amour m’appelle,
Sainte Cité, demeure des élus,
Les lieux qu’éclaire une gloire éternelle
Me sont ouverts par toi-même, ô Jésus`,
  },
  {
    id: "101",
    title: "101- Viens, ô Jésus, ton Église t'appelle",
    lyrics: `1.
Viens, ô Jésus, ton Église t'appelle;
Viens établir ton règne glorieux!
Nous t'attendons:
Descends du haut des cieux!
Tu l'as promis, et tu seras fidèle. (bis)

2.
Ne laisse pas plus longtemps notre terre
Livrée au mal, à la haine, à l'erreur:
N'entends-tu point
Le cri de sa douleur?
Ah! Dans sa nuit fais briller ta lumière! (bis)

3.
Nos faibles mains se lassent de combattre,
Nos tristes coeurs se lassent d'espérer
Viens sans regard,
Oh! Viens nous délivrer:
Notre courage est si prompt à s'abattre! (bis)

4.
Hâte, ô Jésus, l'heure de la victoire!
Parais bientôt, Étoile du matin!
Aube du jour
Où le mal prendra fin
Anéanti par l'éclat de ta gloire! (bis)`,
  },
  {
    id: "102",
    title: "102- Voir mon Sauveur face à face",
    lyrics: `1.
Voir mon Sauveur face à face
Voir Jésus dans sa beauté,
Ô joie! Ô suprême grâce!
Bonheur! Félicité!

Refrain:
Oui, dans ta magnificence
Je te verrai, divin Roi!
Pour toujours en ta présence
Je serai semblable à Toi!

2.
Ta gloire est encor voilée,
Ah d'un voile ensanglante!…
Bientôt sera révélée
Ton ineffable beauté!

3
Oh! quels transports d'allégresse,
Quand tes yeux baissés sur moi,
Me diront avec tendresse:
Je mourus aussi pour toi!
`,
  },
  {
    id: "103",
    title: "103- Lorsque devant l’Agneau",
    lyrics: `1.
Lorsque devant l'Agneau,
S'ouvrira le grand Livre
Où sont inscrits les noms
Des coupables absous,
Dans le ciel, pour jamais
Nous aurons droit de vivre;
Sous le regard de Dieu,
Le repos sera doux.

Refrain:
Serez-vous avec nous
Au divin rendez-vous?
(bis)

2.
Nous serons tous assis
À la table du Maître,
Jouissant du Bonheur
Des amis de l'Époux;
Comme Il nous a connus,
Nous pourrons le connaître;
Sous le regard de Dieu,
L'amour sera bien doux.

3.
Du revoir éternel
Nous connaîtrons les charmes;
Pour ne plus les quitter,
Nous retrouverons tous
Les amis dont la mort
Nous coûta tant de larmes!
Sous le regard de Dieu,
Le revoir sera doux.

4.
Ouvrez, ouvrez vos cœurs
Aux appels de la grâce;
Aux délices du Ciel,
Dieu vous incite tous.
Quel que soit le péché
Le sang de Christ l'efface;
Sous le regard de Dieu,
Le pardon est bien doux.



`,
  },
  {
    id: "104",
    title: "104- Du ciel bientôt Jésus va revenir!",
    lyrics: `1.
Du ciel, bientôt, Jésus va revenir!
Si c'était aujourd'hui?
Tous, radieux, nous le verrons venir!
Si c'était aujourd'hui?
Alors tous les saints à sa vue,
Ses enfants sûrs de la venue,
Iront avec lui sur la nue!
Si c'était aujourd'hui?

Refrain:
Gloire! Gloire! Jésus revient bientôt!…
Gloire! Gloire! Nous le couronnerons!…
Gloire! Gloire! Et bous l'adorerons!
Gloire! Gloire! Jésus revient bientôt!…

2.
Dans ce beau ciel, le mal ne sera plus!…
Si c'était aujourd'hui!…
Plus de douleur, le regard de Jésus!
Si c'était aujourd'hui?
Notre âme après ce jour soupire!…
Mais déjà la nuit se retire,
Le grand matin va bientôt luire!
Si c'était aujourd'hui?…

3.
Oh! que Jésus trouve en nous des cœur droits,
S'il revient aujourd'hui!
Veillant, priant, dociles à sa voix,
S'il revient aujourd'hui!
Avons-nous tous cette assurance
D'être enlevés en sa présence,
Dans le séjour de sa puissance!
S'il revient aujourd'hui!

`,
  },
  {
    id: "105",
    title: "105- En expirant le Rédempteur",
    lyrics: `1.
En expirant, le rédempteur
Laissa, don suprême,
À son peuple un Consolateur:
Dieu lui-même.

2.
Dans tous les cœurs l'Hôte divin
Veut prendre une place
Et personne n'implore en vain
Cette grâce.

3.
Sans se lasser, sa douce voix
Console ou châtie;
Et tout bas nous chante parfois
La patrie.

4.
Toutes nos vertus sont le fruit
Dont il est la sève
Il commence l'œuvre et c'est lui
Qui l'achève.

5.
Esprit de lumière et de paix
Ah! que dès cette heure,
Nos cœurs deviennent à jamais
Ta demeure.

`,
  },
  {
    id: "106",
    title: "106- Saint-Esprit notre Créateur",
    lyrics: `1.
Saint-Esprit, notre Créateur
Et notre grand Consolateur,
Rend-toi le Maître de nos âmes!
Esprit du Dieu de vérité.
Éclaire-nous par ta clarté
Et nous embrase de tes flammes!
Esprit de Jésus notre Roi,
Soumets-nous à ta douce loi.

2.
Humilie et change nos cœurs;
Règle notre vie et nos mœurs;
Produis en nous la repentance
Une parfaite humilité,
Une sincère charité
Une constante patience
Opère en nous tous puissamment
Et fais-nous vivre saintement.

3.
Répands dans nos âmes ta paix;
Daigne inspirer tous nos projets;
Imprime en nos cœurs ta parole;
Triomphe de nos passions;
Dans toutes nos afflictions
Exauce-nous et nous console;
Soutiens-nous dans tous nos combats;
Redresse et conduis tous nos pas.
`,
  },
  {
    id: "107",
    title: "107- Rends-toi Maître de nos âmes",
    lyrics: `1.
Rends-toi Maître de nos âmes,
Esprit saint, Esprit d'amour!
Et de tes divines flammes
Embrasse-nous en ce jour!

Refrain:
Oh! viens, Esprit de Dieu!
Fais-nous sentir ta présence,
Revêts-nous de ta puissance
Et baptise-nous de feu!
Esprit de Dieu! Baptise-nous de feu!

2.
Saint-Esprit de la promesse,
Qui nous scellas de ton sceau,
Dévoile-nous la richesse
De l'héritage d'en haut.

3.
Forme-nous pour le service
De notre divin Sauveur;
À ses pieds, en sacrifices,
Nous apportons notre cœur

4.
Esprit de vie et de gloire,
Conduis-nous de jour en jour
Et de victoire en victoire
Jusqu'au céleste séjour.

`,
  },
  {
    id: "108",
    title: "108- Promesse du Père",
    lyrics: `1.
Promesse du Père
Esprit glorieux
Toi dont la lumière
Dessille les yeux!

Refrain:
Veuille sur nous descendre,
Saint Consolateur!
En nos cœurs viens répandre
L'amour du Sauveur.

2.
Ranime le zèle
Du cœur triste et las;
Du pied qui chancelle
Raffermis les pas.

3.
Comble notre attente
En nous fais jaillir
La source abondante
Qui ne peut tarir.

4.
Viens vivre en notre âme,
Esprit de Jésus!
Que ta sainte flamme
Ne pâlisse plus!
`,
  },
  {
    id: "109",
    title: "109-  O Saint-Esprit Esprit de vie",
    lyrics: `1.
Ô Saint-Esprit, Esprit de vie,
De lumière et de foi,
Source de puissance infinie
Dans ma faiblesse, à toi je crie:
Accomplis tout en moi!

2.
J'ai compris que, sans ta présence,
Tout est sombre ici-bas.
Je veux, dans chaque circonstance
Me placer sous ta dépendance:
Tu me dirigeras.

3.
Conduis-moi, selon ta promesse,
En toute vérité.
Sois mon secours, sois ma sagesse;
Fais que je marche sans faiblesse
À ta sainte clarté.

4.
Inspire-moi chaque prière;
Garde-moi de l'erreur;
Éclaire-moi de ta lumière,
Viens transformer ma vie entière:
En tout rends-moi vainqueur!

`,
  },
  {
    id: "110",
    title: "110- Saint-Esprit que ta clarté",
    lyrics: `1.
Saint-Esprit, que ta clarté
Vienne briller sur nos cœurs,
Et que ses rayons vainqueurs
Chassent toute obscurité.

2.
Saint-Esprit, ô vérité!
Guide infaillible et divin,
Montre-nous le droit chemin,
Courbe notre volante.

3.
Saint-Esprit, Consolateur,
Viens calmer tous nos effrois
Apaise, à ta douce voix,
La révolte et la douleur.

4.
Saint-Esprit, ô Toi qui sais
Combien chancellent nos pas,
Ne nous abandonne pas,
Et conduis-nous dans la paix.

5.
Saint-Esprit, Libérateur,
Dont la puissance est pour tous
À jamais délivre-nous
Des liens de l'oppresseur.

`,
  },
  {
    id: "111",
    title: "111- Viens o Créateur de nos âmes",
    lyrics: `1.
Viens, ô Créateur de nos âmes,
Esprit-Saint, Dieu de vérité!
Remplis nos cœurs des pures flammes
De ton ardente charité!

2.
Verse en nos âmes tes lumières,
Verse ton amour dans nos cœurs;
Prête l'oreille à nos prières,
Et comble-nous de tes faveurs.

3.
Viens, et rend-nous vainqueurs du monde;
Écarte tous nos ennemis,
Et de la paix la plus féconde,
Que nos triomphes soient suivis!

`,
  },
  {
    id: "112",
    title: "112- Romps-nous le pain de vie",
    lyrics: `1.
Romps-nous le pain de vie!
Que ta bonté
Seigneur, nous rassasie
De vérité!
Amour qui nous fait vivre,
Révèle-toi!
Parle dans le saint livre.
À notre foi!

2.
Ô toi dont la clémence
Créa du pain
Pour une foule immense
Mourant de faim.
Vois, ton peuple se presse
Autour de Toi…
Secours notre détresse
Et notre foi!

3.
C'est de ta chair meurtrie,
Verbe puissant!
C'est de ta chair meurtrie,
C'est de ton sang.
Que notre âme doit vivre…
Ah! donne-toi
Par l'Esprit et le Livre
À notre foi!

4.
Tu bénis tes apôtres,
Puis, à leur tour,
Ils portèrent à d'autres
Ton grand amour…
Ô Parole féconde,
Que notre foi
T'offre à ce pauvre monde
Qui meurt sans Toi!

`,
  },
  {
    id: "113",
    title: "113- Ta Parole est un beau jardin",
    lyrics: `1.
Ta Parole est un beau jardin.
En gerbes embaumées,
J'y moissonne chaque matin,
Des fleurs par toi semées.

Refrain:
J'aime ta Parole, Seigneur,
Tu me donnes par elle,
Richesses, lumière, bonheur,
Et victoire éternelle!

2.
Seigneur, ta Parole est pour moi
La mine pleine d'ombre,
Où je découvre par la foi,
Des diamants sans nombre!

3.
Pareille à la voûte des cieux,
Lumineuse et profonde,
Ta Parole brille à mes yeux
Dans la nuit de ce monde

4.
Ta Parole est un chœur puissant
Aux pures harmonies,
Où, dans un hymne ravissant,
Mille voix sont unies.

5.
Par elle, un céleste aliment
Renouvelle mon être:
Manne divine, pur froment,
Chair et sang de mon Maître!

`,
  },
  {
    id: "114",
    title: "114- Livre Sain céleste Livre",
    lyrics: `1.
Livre Saint, céleste Livre,
Mon plus précieux trésor,
Guide sur que j'aime à survivre,
Tu vaux plus que beaucoup d'or.
C'est toi, Bible bien-aimée,
Qui me montres le Sauveur.
Tu peux à l'âme affamée
Procurer le vrai bonheur,

2.
Ô puissante et sainte Épée,
Marteau brisant les archers,
Par toi, mon âme frappée
A pleuré sur ses péchés.
Oui, dans toutes mes détresses,
Dans mes larmes, ma douleur,
Par tes divines promesses,
Tu viens consoler mon cœur.

`,
  },
  {
    id: "115",
    title: "115- Pour triompher dans les combats",
    lyrics: `1.
Pour triompher les combats,
Quelle est notre force ici-bas?
Quelle est la divine lumière,
Qui nous dirige et nous éclaire
Dans la nuit sombre de l'erreur?
C'est la Parole du Seigneur.

2.
Quel est le glaive à deux tranchants
Dont les coups sont assez puissants
Pour briser l'arme la plus dure,
Et, malgré la plus forte armure,
Pour pénétrer jusques au cœur?
C'est la Parole du Seigneur.

3.
Quel est le vent impétueux
Qui mugit et descend des cieux,
Et dont la voix grave et sévère,
Semblable à celle du tonnerre,
Fait trembler l'âme du pécheur?
C'est la Parole du Seigneur.

4.
Quel est ce chant suave et doux
Qui, d'en haut venant jusqu'à nous,
Parle de grâce et de clémence,
Réveille en nos cœurs l'espérance,
Et calme partout la douleur?
C'est la Parole du Seigneur.

`,
  },
  {
    id: "116",
    title: "116- La Parole du Seigneur",
    lyrics: `1.
La Parole du Seigneur
Est la source jaillissante,
Où peut toujours notre cœur
Étancher sa soif ardente.
Mon Dieu, du Livre sacré
Répands la grâce infinie;
Conduis tout cœur altéré
À la fontaine de vie.

2.
C'est un flambeau dans la main,
De sa splendeur vive et pure,
Éclairant notre chemin
À travers la nuit obscure.
Oh! de ce divin flambeau,
Seigneur, sur notre carrière,
Chaque jour, jusqu'au tombeau,
Fais rayonner la lumière!

3.
C'est un grain de sénevé
Que l'Esprit de Dieu féconde;
Car, à peine a-t-il levé,
Qu'il envahit tout le monde.
Que le moindre grain planté
De la divine semence,
Ici, pour l'éternité,
Fructifie en abondance!

`,
  },
  {
    id: "117",
    title: "117- Divine Parole",
    lyrics: `1.
Divine Parole
Qui soutiens ma foi,
Ta clarté console,
Viens briller en moi.
Lorsqu'un voile sombre
S'étend sur mon cœur,
Tu dissipes l'ombre
D'un rayon vainqueur.

Refrain
Divine Parole,
Qui soutiens ma foi
Ta clarté console,
Viens briller en moi.

2.
Message si tendre
Du Sauveur en croix,
Qu'il est doux d'entendre
Ces mots: Viens et crois!
Par son sacrifice,
Ineffable don,
La loi, la justice
Font place au pardon.

3.
Que ce triste monde
T'écoute en tout lieu,
Ô Bible, et réponde
À l'appel de Dieu!
Que toute âme humaine
Par toi trouve enfin,
En brisant sa chaîne,
Le bonheur sans fin!
`,
  },
  {
    id: "118",
    title: "118- C’est un Rempart Que Notre Dieu",
    lyrics: `1.
C'est un rempart que notre Dieu,
Une invincible armure,
Un défenseur victorieux,
Une aide prompte et sûre.
L'Ennemi, contre nous,
Redouble de courroux:
Vaine colère!
Que pourrait l'Adversaire?
L'Éternel détourne ses coups.

2.
Seuls, nous bronchons à chaque pas
Quand l'Ennemi nous presse.
Mais un héros pour nous combat
Et nous soutient sans cesse.
Quel est ce défenseur?
C'est toi, divin Sauveur,
Dieu des armées!
Tes tribus opprimées
Connaissent leur libérateur.
`,
  },
  {
    id: "119",
    title: "119- Sur Toi je me repose",
    lyrics: `1.
Sur Toi je me repose,
Ô Jésus, mon Sauveur!
Faut-il donc autre chose
Pour un pauvre pécheur?
Conduit par ta lumière,
Gardé par ton amour,
Vers la maison du Père,
Marchant de jour en jour…

Refrain:
Sur Toi je me repose,
Ô Jésus, mon Sauveur!
Faut-il donc autre chose
Pour un pauvre pécheur?

2.
Ah! ma misère est grande,
Mais tu m'as pardonné;
Sainte et vivante offrande,
Pour moi, tu t'es donné;
Et de toute souillure,
Par le sang de ta croix,
Mon âme devient pure;
Tu l'as dit, je le crois!

3.
Moi-même en sacrifice
Immolé désormais,
Seigneur, à ton service
Me voici pour jamais!
Qu'importe ma faiblesse,
Puisque je t'appartiens?
Tu n'as point de richesse
Qui ne soit pour les tiens.

4.
En Toi j'ai la victoire,
La paix, la liberté;
À Toi je rendrai gloire
Durant l'éternité.
Si du bonheur qui passé
La source doit tarir,
C'est assez de ta grâce
Pour vivre et pour mourir.

`,
  },
  {
    id: "120",
    title: "120- Reste avec nous",
    lyrics: `1.
Reste avec nous,
Seigneur, le jour décline,
La nuit s'approche
Et nous menace tous;
Nous implorons ta présence divine;
Reste avec nous, Seigneur,
Reste avec nous!

2.
En toi nos cœur
Ont salué leur Maître,
En toi notre âme
A trouvé son Époux;
À ta lumière, elle se sent renaître;
Reste avec nous, Seigneur,
Reste avec nous!

3.
Dans nos combats,
Si ta main nous délaisse,
Satan vainqueur
Nous tiendra sous ses coups;
Que ta puissance arme notre faiblesse
Reste avec nous, Seigneur,
Reste avec nous!

4.
Sous ton regard,
La joie est sainte et bonne;
Près de ton cœur
Les pleurs même sont doux;
Soit que ta main nous frappe ou nous couronne
Reste avec nous, Seigneur,
Reste avec nous!

5.
Et quand, au bout
De ce pèlerinage,
Nous partirons
Pour le grand rendez-vous;
Pour nous guider dans ce dernier passage,
Reste avec nous, Seigneur,
Reste avec nous!

`,
  },
  {
    id: "121",
    title: "121- Ne crains rien je t'aime!",
    lyrics: `1.
Ne crains rien, je t'aime!
Je suis avec toi!
Promesse suprême,
Qui soutient ma foi.
La sombre vallée
N'a plus de terreur;
L'âme consolée,
Je marche avec mon Sauveur.

Refrain
Non, jamais tout seul! (bis)
Jésus, mon Sauveur, me garde,
Jamais ne me laisse seul.
Non, jamais tout seul! (bis)
Jésus, mon Sauveur, me garde,
Je ne suis jamais tout seul.

2.
L'aube matinière
Ne luit qu'aux beaux jours;
Jésus, ma lumière,
M'éclaire toujours!
Quand je perds de vue
L'astre radieux,
À travers la nue,
Jésus me montre les cieux!

3.
Les dangers accourent,
Subtils, inconnus;
De près, ils m'entourent,
Plus près est Jésus,
Qui, dans le voyage,
Me redit: «C'est moi!
Ne crains rien, courage!
Je suis toujours avec toi!»

`,
  },
  {
    id: "122",
    title: "122-  Je lève les yeux vers les monts",
    lyrics: `1.
Je lève les yeux vers les monts que j'aime
D'où peut me venir ici le secours?
Le secours me vient de l'Éternel même,
Du Dieu qui créa les nuits et les jours.

2.
Pourra-t-il souffrir que ton pied chancelle?
Ton gardien peut-il sommeiller jamais?
Non, il ne dort pas, le gardien fidèle,
Celui qui maintient Israël en paix.

3.
Pour toi, L'Éternel est une retraite;
Il te sert à droite et d'ombre et d'appui.
Le soleil ne peut frapper sur ta tête,
Ni la lune à l'heure où le jour a fui.

4.
Il te gardera de tout mal possible,
Il garde ton âme, il garde tes jours;
Il te gardera! Rentre ou sors paisible!
L'Éternel sur toi veillera toujours.

`,
  },
  {
    id: "123",
    title: "123-  En Christ seul est mon espérance",
    lyrics: `1.
En Christ seul est mon espérance;
Sa justice est mon assurance.
Il est devant Dieu mon appui;
Je n'en veux point d'autre que lui.

Refrain:
Jésus est ma retraite sûre,
Le Rocher en qui je m'assure. (bis)

2.
Tout autre asile est périssable,
Tout autre appui n'est que du sable.
Qui n'a posé ce fondement
Travaille et souffre vainement.

3.
Lorsque sur moi s'abat l'orage,
Sa croix ranime mon courage.
Quand tout faiblit autour de moi,
Sa présence soutient ma foi.

4.
Et quand la dernière tempête
Fondra, terrible, sur ma tête,
Comme lui, vainqueur de la mort,
J'entrerai radieux au port.

`,
  },
  {
    id: "124",
    title: "124- La foi fait tomber sous nos yeux",
    lyrics: `1.
La foi fait tomber sous nos yeux
Les plus fortes murailles;
La foi nous rend victorieux
Et gagne les batailles. (bis)

2.
La foi nous ouvre les trésors
De la toute-puissance;
Les plus faibles deviennent forts
Sous sa sainte influence. (bis)

3.
Protégés par ce bouclier,
Nous n'avons nulle crainte.
Qui sait en Dieu se confier
Du mal brave l'atteinte. (bis)

4.
Que n'ont pas souffert les héros
Dont nous suivons la trace!
Que de dangers, que de travaux,
Mais quelle sainte audace! (bis)

5.
Quand la foi vit au fond de cœur
Et nourrit l'espérance,
On est, par l'amour de Sauveur,
Joyeux dans la souffrance. (bis)

`,
  },
  {
    id: "125",
    title: "125- Es-tu lassé rempli de tristesse?",
    lyrics: `1.
Es-tu lassé, rempli de tristesse?…
Dis tout à Jésus! (bis)
Son cœur est ouvert à ta voix sans cesse
Oh! Dis tout à Jésus!

Refrain:
Dis tout à Jésus!
Oh! Dis-Lui tout!
Combien son accueil est doux.
Il peut comprendre,
Il aime à t'entendre:
Dis-Lui simplement tout!

2.
Il voit tes yeux rougis par les larmes:
Dis tout à Jésus! (bis)
Il connaît ton cœur, Il sait tes alarmes.
Oh! Dis tout à Jésus!

3.
Si ton passé surgit comme une ombre:
Dis tout à Jésus! (bis)
Il peut effacer tes péchés sans nombre.
Oh! Dis tout à Jésus!

4.
Et pour demain ce que tu redoutes:
Dis tout à Jésus! (bis)
Il est près de toi le long de la route.
Oh! Dis tout à Jésus!

`,
  },
  {
    id: "126",
    title: "126- Quand le vol de la tempête",
    lyrics: `1.
Quand le vol de la tempête
Vient assombrir ton ciel bleu,
Au lieu de baisser la tête,
Compte les bienfaits de Dieu.

Refrain:
Compte les bienfaits de Dieu,
Mets les tous devant tes yeux,
Tu verras en adorant
Combien le nombre en est grand!

2.
Quand sur la route glissante
Tu chancelles sous ta croix,
Pense à cette main puissante
Qui t'a béni tant de fois.

3.
Si tu perds dans le voyage
Plus d'un cher et doux trésor,
Pense au divin héritage
Qui là-haut te reste encore.

4.
Bénis donc, bénis sans cesse
Ce Père qui chaque jour
Répand sur toi la richesse
De son merveilleux amour.

`,
  },
  {
    id: "127",
    title: "127- Oh! Croyez que Dieu vous donne",
    lyrics: `1.
Oh! Croyez que Dieu vous donne
Tout ce qu'il promet,
Un Sauveur qui vous pardonne,
Un Sauveur parfait,
Un Sauveur plein de puissance
Sur la terre et dans les cieux,
Un Sauveur dont la présence
Seule rend heureux.

2.
Ce Sauveur vous fera vivre
Comme il a vécu,
Vous pourrez partout le suivre
Sans être vaincu.
Jusqu'au bout dans la mêlée
Son bras vous protégera,
Et dans la sombre vallée
Il vous conduira.

3.
Oh! Jésus, dis-leur toi même
Que ta forte main
Fait passer celui qui t'aime
Par un sûr chemin,
Que tu veux de toute chute
Préserver ton faible enfant,
Pour qu'il sorte de la lutte
Pur et triomphant.

4.
Oui, Seigneur, malgré l'orage
Et malgré la nuit,
Nous voulons prendre courage,
Forts de ton appui,
Et joyeux, pleins d'assurance,
Nous avancer vers le ciel,
En saluant à l'avance
Le jour éternel.

`,
  },
  {
    id: "128",
    title: "128- Bientôt bientôt nous comprendrons",
    lyrics: `1.
Bientôt, bientôt nous comprendrons
Tous les pourquoi de nos alarmes,
Et celui de tant de nos larmes,
Bientôt, bientôt nous comprendrons.

Refrain:
En attendant, de notre Père,
Saisissons la divine main.
Aujourd'hui même et puis demain,
Confions-nous en sa lumière.
Oui, bientôt, nous le bénirons,
Bientôt, bientôt nous comprendrons.

2.
Nous saurons pourquoi notre ciel
Un jour s'est voilé d'un nuage,
Et fut troublé par un orage
Qui nous parut alors cruel.

3.
Pourquoi tel désir de nos cœurs,
Telle douce et chère espérance
Soudain fut changée en souffrance,
Bientôt, nous le saurons, ailleurs.

`,
  },
  {
    id: "129",
    title: "129- Une nacelle en silence",
    lyrics: `1.
Une nacelle en silence
Vogue sur un lac d'azur;
Tout doucement elle avance
Sous un ciel tranquille et pur;
Mais soudain le vent s'élève,
Chassant un nuage noir,
Les vagues qu'il soulève
Font trembler, car c'est le soir. (bis 2 lignes)

2.
Grande est alors la détresse
Des voyageurs éperdus;
Grande est aussi leur faiblesse,
Leur foi ne les soutient plus.
Mais il en est Un qui veille
Sur eux tous, bien qu'endormi;
Ah! faudra-t-il qu'on l'éveille?
N'est-il plus leur tendre Ami? (bis 2 lignes)

3.
«Maître, es-tu donc insensible?
Tu le vois, nous périssons!
Tout miracle t'est possible,
Sauve-nous, nous t'en prions!»
D'eux aussitôt il s'approche,
Puis, il dit au vent: «Tais-toi!»
Et tendrement leur reproche
D'avoir eu si peu de foi. (bis 2 lignes)

4.
Ainsi souvent, dans la vie,
L'orage assombrit nous cœurs,
Bien que pour nous Jésus prie,
Prêt à calmer nos terreurs.
Comptons mieux sur sa tendresse,
Son cœur ne saurait changer:
De sa brebis en détresse
Il est toujours le Berger. (bis 2 lignes)

`,
  },
  {
    id: "130",
    title: "130- Il est un roc séculaire",
    lyrics: `1.
Il est un roc séculaire,
Que Dieu, pour mon cœur lassé,
Comme un abri tutélaire,
Au sein des flots a placé.

Refrain:
Mon rocher, ma forteresse,
Mon asile protecteur,
Mon recours dans la détresse,
C'est Jésus, le Rédempteur!

2.
À mes pieds l'océan gronde;
Le vent siffle autour de moi…
Sur Christ, mon rocher, je fonde
Mon espérance et ma foi.

3.
En vain l'ouragan fait rage,
Et nulle clarté ne luit,
Paisible au sein de l'orage,
J'attends l'aube après la nuit.

4.
Jouet de l'onde agitée,
Cet abri, l'as-tu trouvé?
Viens, pauvre âme tourmentée,
Au rocher qui m'a sauvé!

`,
  },
  {
    id: "131",
    title: "131- Sur les pas du Saint Modèle",
    lyrics: `1.
Sur les pas du Saint Modèle,
Nous marchons, comptant sur Lui,
Et son cœur toujours fidèle
Nous accorde son appui.
Il connaît notre faiblesse;
Lui toujours demeure fort,
Et nous livre avec largesse
Le meilleur de son trésor.

2.
Il nous donne sa vaillance
Pour monter vers les sommets;
Si l'un tombe en défaillance,
De ce faible Il vient plus près.
Sur le bord du précipice
Il nous tient plus fortement.
C'est ainsi que nul n'y glisse
Qui sur Lui compte vraiment.

3.
Avec nous venez sans crainte
Sur les pas de ce Sauveur;
Suivrons tous la route sainte,
Car déjà c'est le bonheur.
Et plus haut, plus loin des plaines,
Avec Lui montons toujours,
Car ses mains sont toujours pleines
Pour qui veut son grand secours.

`,
  },
  {
    id: "132",
    title: "132- Espère en Dieu quand la nuit sombre",
    lyrics: `1.
Espère en Dieu quand la nuit sombre
Voile le ciel et l'horizon;
Jamais là-haut ne règne l'ombre,
Là-haut t'attend une maison.
Espère en Dieu quand la tempête
Contre la nef jette ses flots.
Un mot vainqueur déjà s'apprête,
À commander paix et repos.

2.
Espère en Dieu quand la souffrance
Brisant ton corps, trouble ton cœur.
Chez Lui jamais l'indifférence
Ne le distrait de ton malheur.
Espère en Dieu quand sonne l'heure
D'abandonner les biens d'en-bas.
Crois aux trésors de sa demeure,
Car son amour t'ouvre ses bras.

3.
Espère en Dieu quand on t'oublie
Ou qu'on te raille avec dédain.
Pour te sauver, jamais ne plie!
Va plutôt seul sur ton chemin.
Espère en Dieu quand ton pied glisse
Sous les efforts du Tentateur.
Saisis la main libératrice
Qui te rendra toujours vainqueur.


`,
  },
  {
    id: "133",
    title: "133- Sois sans alarmes sans frayeur",
    lyrics: `1.
Sois sans alarmes, sans frayeur,
Dieu prendra soin de toi;
Il est ton Père et ton Sauveur,
Dieu prendra soin de toi.

Refrain:
Dieu prendra soin de toi,
Dans le chemin, jusqu'à la fin,
Il prendra soin de toi,
Tous les jours, jusqu'à la fin.

2.
Dans les jours de l'adversité,
Dieu prendra soin de toi;
Lorsque pour toi, tout est danger,
Dieu prendra soin de toi.

3.
Si tu es seul, découragé,
Dieu prendra soin de toi;
Il est toujours ton Bon Berger,
Dieu prendra soin de toi.

4.
Ne crains donc pas le lendemain,
Dieu prendra soin de toi;
Pas à pas, ta main dans sa main,
Dieu prendra soin de toi.

`,
  },
  {
    id: "134",
    title: "134- La voix du Seigneur m’appelle",
    lyrics: `1.
La voix du Seigneur m'appelle:
Prends ta croix, et viens, suis-moi!
Je réponds: «Sauveur fidèle,
Me voici, je suis à toi !»

Refrain:
Jusqu' au bout, je veux te suivre,
Dans les bons, les mauvais jours;
À Toi pour mourir et vivre,
À Toi, Jésus, pour toujours!

2.
Mais le chemin du Calvaire
Est étroit et périlleux,
C'est un chemin solitaire,
Difficile et ténébreux.

3.
Il faut quitter ceux qu'on aime,
Savoir être mal jugé,
Endurer l'injure même,
Du monde être méprise.

4.
Oui, perdre sa propre vie,
Consentir à n'être rien,
N'avoir qu'une seule envie:
Aimer Jésus, le seul bien!8

5.
Jésus donne grâce et gloire
Pour le suivre pas à pas,
A2vec lui, joie et victoire,
Paix et bonheur ici-bas!

`,
  },
  {
    id: "135",
    title: "135- Comme une tige légère",
    lyrics: `1.
Comme une tige légère
S'incline au souffle du vent,
Qu'ainsi mon âme, ô mon Père,
Plie à ton commandement. (bis)

2.
Ma volonté, c'est la tienne;
Ordonne; j'attends ta voix;
Oui Seigneur, quoiqu'il m'advienne,
Je suis soumis à tes lois. (bis)

3.
Je t'aime, quoi que tu fasses!
Donne, ôte, rends ou reprends;
Tous tes ordres sont des grâces
Pour tes bienheureux enfants. (bis)

4.
Oh! détache de la terre
Tous mes désirs, tous mes vœux!
T'amer, te servir, mon Père,
Ah! c'est déjà vivre aux cieux! (bis)
`,
  },
  {
    id: "136",
    title: "136- Tout joyeux bénissons le Seigneur",
    lyrics: `1.
Tout joyeux bénissons le Seigneur,
Chantons et célébrons ses louanges,
Adorons avec foi le Sauveur,
Nous joignant aux célestes phalanges.

Refrain:
Gloire à Dieu!
Gloire à Dieu!
Que ce chant retentisse en tout lieu;
(bis)

2.
Dieu, dans son incomparable amour,
Du ciel envoya son Fils unique,
Et la terre et les cieux, dans ce jour,
S'unissent pour chanter ce cantique.

3.
Le châtiment qui produit la paix,
Jésus-Christ l'a subi pour mon âme;
Il voulut expier nos forfaits,
En mourant, lui, sur le bois infâme.

4.
Nous voulons en retour, bon Sauveur,
T'aimer par-dessus tout autre chose;
Forme ton amour dans notre cœur,
Et puis, de chacun de nous, dispose!

`,
  },
  {
    id: "137",
    title: "137- Mon corps, mon cœur, mon âme",
    lyrics: `1.
Mon corps, mon cœur, mon âme
Ne m'appartiennent plus;
Ton amour les réclame;
Ils sont à toi, Jésus!

Refrain:
Reçois mon sacrifice,
Il est sur ton autel!
Esprit, Esprit, descends!
J'attends le feu du ciel.

2.
En toi je me confie,
Je m'abandonne à Toi;
Ton sang me purifie
Et ta grâce est ma Loi.

3.
Consacre mon offrande,
Mets ton sceau sur mon cœur!
Le sceau que je demande
C'est ton Esprit, Seigneur.
`,
  },
  {
    id: "138",
    title: "138- A toi mon Dieu ! je me donne",
    lyrics: `1.
À toi, mon Dieu! je me donne
Je me donne tout entier!
Ton amour est ma couronne,
Ta force est mon bouclier.

2.
Je te donne mes journées,
Mes succès ou mes revers;
Je te donne mes années,
Mes printemps et mes hivers.

3.
Mes désirs, avec leur flamme
Que tu peux seul apaiser,
Et les rêves de mon âme,
Que tu veux réaliser.

4.
Toutes les fleurs de ma route,
Viens les cueillir de ta main;
Tous les pleurs, goutte après goutte,
Les recueillir dans ton sein.

5.
Dans la joie ou la souffrance
Je veux te suivre en tout lieu;
Toute ma vie à l'avance,
Je te l'apporte, ô mon Dieu!

`,
  },
  {
    id: "139",
    title: "139- Entre tes mains j'abandonne",
    lyrics: `1.
Entre tes mains, j'abandonne
Tout ce que j'appelle mien.
Oh! ne permets à personne
Seigneur, d'en reprendre rien!

Refrain:
Oui, prends tout, Seigneur (bis)
Entre tes mains j'abandonne
Tout avec bonheur.

2.
Je n'ai pas peur de te suivre
Sur le chemin de la croix
C'est pour toi que je veux vivre,
Je connais, j'aime ta voix.

3.
Tu connais mieux que moi-même
Tous les besoins de mon cœur
Et pour mon bonheur suprême,
Tu peux me rendre vainqueur.

4.
Prends mon corps et prends mon âme;
Que tout en moi soit à Toi!
Que par ta divine flamme
Tout mal soit détruit en moi.

`,
  },
  {
    id: "140",
    title: "140-  Mon cœur tressaille à ta voix",
    lyrics: `1.
Mon cœur tressaille à ta voix,
Bon Sauveur, conduit mes pas.
Je suis tes divines lois
En m'appuyant sur ton bras.

Refrain:
Guide, ô Sauveur!
Tous mes pas en ces bas lieux,
Jusqu'au jour où ta faveur
Enfin m'ouvrira les cieux.

2.
Seul, je ne puis avancer,
Je vois l'abîme et j'ai peur;
Tremblant, mon pied peut glisser
Sous l'œil d'un monde moqueur.

3.
Mon refuge, c'est toi seul.
Si, débordant, le mal vient
Couvrir tout de don linceul,
À toi mon âme appartient.

4.
À travers la sombre nuit,
Les dangers, les grandes eaux,
Ton amour seul me conduit
Vers le glorieux repos.

`,
  },
  {
    id: "141",
    title: "141- A Jésus je m'abandonne",
    lyrics: `1.
À Jésus je m'abandonne:
Ce qu'il me dit, je le crois,
Et je prends ce qu'il me donne,
La couronne avec la croix.

Refrain:
Compter sur lui d'heure en heure,
Tant que dure le combat;
Que l'on vive ou que l'on meure,
Compter sur lui, tout est là. (bis 2 lignes)

2.
Que si l'ennemi se montre,
Mon cœur n'en est point troublé;
Avec Christ à sa rencontre
Je puis aller sans trembler.

3.
Suis-je en paix? Vers la lumière
Mon chant s'élève, attendri,
Pour se changer en prière
Si l'horizon s'assombrit.

4.
Qu'on m'approuve ou qu'on me blâme,
Et demain comme aujourd'hui,
Je ne veux quoiqu'on réclame,
Jamais compter que sur Lui.

`,
  },
  {
    id: "142",
    title: "142- Au pied de la croix sanglante",
    lyrics: `1.
Au pied de la croix sanglante
Où tu t'es donné pour moi,
Mon âme émue et tremblante,
Ô Jésus, se livre à Toi.

Refrain:
Le parfait bonheur, (bis)
C'est de mettre
Tout mon être
À tes pieds, Seigneur!

2.
Me voici pour ton service,
Je ne garde rien pour moi,
Sur l'autel de sacrifice
Je me place par la foi.

3.
Prends, Seigneur, ma vie entière,
Mets sur moi ton divin sceau;
Fais d'un fils de la poussière,
Un enfant du Dieu très haut.

4.
À la gloire, aux biens de monde,
Je renonce pour jamais;
Que le Saint-Esprit m'inonde
De ta joie et de ta paix!

5.
Si ma faiblesse est bien grande,
Ta force est plus grande encore,
Ô Jésus, qu'elle me rende
Fidèle jusqu'à la mort!

6.
Ô félicité suprême!
Ta grâce est mon bouclier,
Et je t'appartiens, je t'aime,
Toi qui m'aimas le premier.

`,
  },
  {
    id: "143",
    title: "143- Jésus doux Maître",
    lyrics: `1.
Jésus, doux Maître - Règne sur moi
Soumets mon être - Sois-en le Roi;
Je suis l'argile - Toi, le Potier,
Rends-moi docile - Ton prisonnier

2.
Jésus, lumière - Pénètre en moi,
Éprouve, éclaire - Ma faible foi;
Plus blanc que neige - Rend-moi, Seigneur
Et de tout piège- Garde mon cœur.

3.
Ô Jésus, source - De guérison,
Sois dans ma course - Santé, pardon;
Par ta puissance - Protège-moi;
Par ra présence - Révèle-toi

4.
Je m'abandonne - Jésus à toi;
Détruis, pardonne - Tout mal en moi.
Remplis mon âme - De ton Esprit,
Et qu'Il m'enflamme - Et jour et nuit!

`,
  },
  {
    id: "144",
    title: "144- Qu'il fait bon à ton service",
    lyrics: `1.
Qu'il fait bon à ton service,
Jésus, mon Sauveur!
Qu'il est doux le sacrifice
Que t'offre mon cœur!

Refrain:
Prends, Ô Jésus, prends ma vie,
Elle est toute à toi!
Et dans ta grâce infinie,
Du mal garde-moi!

2.
Mon désir, mon vœu suprême,
C'est la sainteté!
Rien je ne veux et je n'aime
Que ta volonté!

3.
Comme l'ange au vol rapide,
Je veux te servir,
Les yeux fixés sur mon guide,
Toujours obéir!

4.
Travail, douleur et souffrance,
Non, je ne crains rien!
Toi, Jésus, mon Espérance,
Voilà mon seul bien!

5.
Ensemble donc vers la gloire,
Marchons en avant!
Chantant l'hymne de victoire,
Toujours triomphant!

`,
  },
  {
    id: "145",
    title: "145- Pour toi seul en qui j’espère",
    lyrics: `1.
Pour Toi seul, en qui j'espère,
Pour Toi seul, d'un cœur joyeux,
Je fais monter de la terre
Mon cantique vers les cieux.
Pour Toi seul, (bis)
Oui, mon Sauveur, Toi seul.

2.
À Toi seul, sainte Victime,
Agneau mis à part pour moi,
Dont le sang lava mon crime,
À Toi seul s'attend ma foi,
À Toi seul, (bis)
Oui, mon Sauveur, Toi seul.

3.
À Toi seul dans la détresse,
À toi seul j'aurai recours,
À toi seul, ma forteresse,
Le Rocher de mon secours,
À Toi seul (bis)
Oui, mon Sauveur, à Toi seul.

`,
  },
  {
    id: "146",
    title: "146- Jusqu'à la mort",
    lyrics: `1.
Jusqu'à la mort,
Nous te serons fidèles,
Jusqu'à la mort,
Tu seras notre Roi;
Sous ton drapeau,
Jésus, tu nous appelles;
Nous y mourons
En luttant avec foi!

Refrain:
Jusqu'à la mort!
C'est notre cri de guerre,
Le libre cri d'un peuple racheté;
Jusqu'à la mort,
Nous aurons pour bannière
Ta croix sanglante,
Ô Christ ressuscité!

2.
Pour toi, Jésus,
On est heureux de vivre;
Tous les chemins
Avec toi semblent doux.
Agneau de Dieu,
Qui ne voudrait te suivre
Jusqu'à la mort,
Toi qui mourus pour nous?

3.
Jusqu'à la mort,
Soumis à ta puissance,
Nous voulons vivre
Et mourir sous tes lois,
Toi qui pour nous
Poussas l'obéissance
Jusqu'à la mort,
Et la mort de la croix.

4.
Mais, ô Sauveur!
Tu sais notre faiblesse;
Nous tomberons
Sûrement en chemin
Si tu ne viens
Accomplir ta promesse:
Jusqu'à la mort,
Nous tenir par la main.

5.
Que ton Esprit
Nous guide et nous anime!
Et que sa flamme,
Embrasant tous nos coeurs,
Nous devenions
Par toi, sainte victime,
Sur la mort même
Un peuple de Vainqueurs!`,
  },
  {
    id: "147",
    title: "147- Marchons avec joie",
    lyrics: `1.
Marchons avec joie
Dans le bon chemin,
Dans l'étroite voie
Du bonheur sans fin.
Laissons en arrière
Les biens d'ici-bas;
Prions notre Père
De guider nos pas.
Comptant sur sa grâce,
Remplis de sa paix,
Que rien n'embarrasse
Nos pas désormais.

2.
Si rude est la route,
Glissant le sentier,
Le Seigneur écoute
Qui le sait prier.
Il est la lumière,
Le Libérateur
Du coeur qui n'espère
Qu'en son Dieu-Sauveur.
Sa toute-puissance
Défend le croyant;
Son amour immense
Sauve son enfant.

3.
Et quand sonne l'heure
De quitter ces lieux,
Il a pour demeure
Le palais des cieux!
Vêtements de gloire,
D'immortalité,
Palmes de victoire
Pour l'éternité!
Voilà ce que donne
Le Seigneur Jésus!
Voilà la couronne
De tous les élus.`,
  },
  {
    id: "148",
    title: "148-  Mon Dieu, Plus Près De Toi",
    lyrics: `1.
Mon Dieu, plus près de Toi,
Plus près de Toi!
C'est le mot de ma foi:
Plus près de Toi!
Dans le jour où l'épreuve
Déborde comme un fleuve,
Garde-moi près de Toi,
Plus près de Toi!

2.
Plus près de Toi, Seigneur,
Plus près de Toi!
Tiens-moi dans ma douleur,
Tout près de Toi!
Alors que la souffrance
Fait son oeuvre en silence,
Toujours plus près de Toi,
Seigneur, tiens-moi!

3.
Plus près de Toi, toujours,
Plus près de Toi!
Donne-moi ton secours,
Soutiens ma foi!
Que Satan se déchaîne,
Ton amour me ramène
Toujours plus près de Toi,
Plus près de Toi!

4.
Mon Dieu, plus près de Toi!
Dans le désert
J'ai vu, plus près de Toi,
Ton ciel ouvert.
Pèlerin, bon courage!
Ton chant brave l'orage.
Mon Dieu, plus près de Toi,
Plus près de Toi!`,
  },
  {
    id: "149",
    title: "149- Mon Jésus, je t’aime",
    lyrics: `1.
Mon Jésus, je t'aime,
Je Te sais à moi,
Je fuis les plaisirs de
Ce monde pour Toi.
Sauveur qui fait grâce
A tout coeur repentant,
Si jamais je T'aime,
C'est bien maintenant.

2.
Je T'aime, car Toi,
Le premier, Tu m'aimas;
Je T'aime pour la croix
Où Tu Te donnas,
Et pour les épines
Sur Ton front sanglant,
Si jamais je T'aime,
C'est bien maintenant.

3.
Je T'aimerai dans la vie
Et dans la mort;
Oui, je T'aimerai
Jusqu'à la fin encore,
Et tout bas, je dirai
Le mot consolant:
Si jamais je T'aime,
C'est bien maintenant.

4.
Dans la gloire et le
Bonheur de Ton palais,
Je T'adorerai, Jésus,
Plus que jamais;
De l'Église en triomphe
Éclate ce chant:
Si jamais je T'aime,
C'est bien maintenant.`,
  },
  {
    id: "150",
    title: "150- Miséricorde insondable",
    lyrics: `1.
Miséricorde insondable!
Dieu peut-il tout pardonné?
Absoudre un si grand coupable,
Et mes péchés oubliés?

Refrain:
Jésus, je viens! Je viens à Toi!
Tel que je suis, je viens à Toi!
Jésus, je viens, je viens à Toi!
Tel que je suis, prends-moi.

2.
Longtemps j'ai, loin de sa face,
Provoqué son saint courroux,
Fermé mon coeur à sa grâce,
Blessé le sien devant tous.

3.
O Jésus! À Toi je cède,
Je veux être libéré;
De tout péché qui m'obsède
Être à jamais délivré.

4.
Alléluia! Plus de doute,
Mon fardeau est enlevé;
Pour le ciel je suis en route,
Heureux pour l'éternité`,
  },
  {
    id: "151",
    title: "151- Sans Jésus, je ne peux vivre",
    lyrics: `1.
Sans Jésus, je ne peux vivre,
Je n'ose faire un seul pas;
C'est lui seul que je veux suivre
Pour lui seul vivre ici-bas!
[Refrain]
Et mon coeur n'a rien à craindre,
Puisque tu me conduira:
Je te suivrai sans me plaindre
En m'appuyant sur ton bras.

2.
Ton amour et ta promesse
Remplissent mon coeur de foi;
Si je ne suis que faiblesse,
Je puis être fort en toi.

3.
Enlève toute amertume,
Tout orgueil et lâcheté;
Que l'amour divin consume
Tout mon être racheté.

4.
Dans la nuit la plus profonde,
Quand Satan veux m'assaillir,
Quand l'orage au désert gronde,
Ton bras vient me secourir.

5.
Revêtu de ta puissance,
Baptisé par ton Esprit,
J'annonce le délivrance
A tout coeur brisé, contrit.`,
  },
  {
    id: "152",
    title: "152-  Jésus, je te suivrai partout",
    lyrics: `1.
Jésus, je te suivrai partout, (bis)
Soit dans la tristesse,
Soit dans l'allégresse,
Jésus, je te suivrai partout!

2.
Jésus, je te suivrai toujours! (bis)
Si l'épreuve abonde,
Ta paix est profonde,
Jésus, je te suivrai toujours!

3.
Je te suivrai dès aujourd'hui! (bis)
Mon âme affranchie,
Vivra de ta vie,
Je te suivrai dès aujourd'hui!

4.
Je te suivrai jusques au bout! (bis)
Si pour moi tu plaides,
Seigneur, si tu m'aides,
Je te suivrai jusques au bout.

`,
  },
  {
    id: "153",
    title: "153- Jésus à toi j'appartiens",
    lyrics: ` 1.
Jésus, à toi j'appartient pour jamais;
Viens en mon âme habiter désormais;
Divine Parole,
Brise toute idole!
[Refrain]
Par ton Saint-Esprit
Rends-moi (pur comme toi! (ter)
Par ton Saint-Esprit
Rends-moi pur comme toi!

2.
Jésus, du ciel où ton trône est assis,
Montre la route à mes pas indécis.
Je te sacrifie
Mon coeur et ma vie.

3.
Tu veux, Seigneur, un coeur sanctifié;
Donne-le moi, divin Crucifié!
Seigneur, quand serai-je
Plus blanc que la neige?


`,
  },
  {
    id: "154",
    title: "154- Prends ma vie, elle doit être",
    lyrics: `1.
Prends ma vie, elle doit être
A Toi seul, ô divin Maître.
Que sur le flot de mes jours,
Ton regard brille toujours!

2.
Que mes mains à ton service
S'offrent pour le sacrifice,
Qu'à te suivre pas à pas
Mes pieds ne faiblissent pas!

3.
Prends ma voix et qu'elle chante
Ta grâce auguste et touchante;
Par mes lèvres que ton nom
Parle aux pécheurs de pardon!

4.
Que mon esprit s'illumine
De ta sagesse divine;
Prends mon argent et mon or
Et toi seul, sois mon trésor!

5.
Que ma volonté devienne
La servante de la tienne;
Fais ton trône de mon coeur:
Il t'appartient, bon Sauveur!

6.
Qu'ainsi mon amour répande
A tes pieds son humble offrande;
Prends-moi, dès mes premier jours!
Tout à toi seul, pour toujours!`,
  },
  {
    id: "155",
    title: "155- O jour béni, jour de victoire",
    lyrics: `1.
O jour béni, jour de victoire
Que je ne saurais oublier
J'ai vu, j'ai vu le Roi de gloire
Apparaissant sur mon sentier
Sa beauté, sa gloire infinie
De tous les côtés m'entourait
Son regard, qui porte la vie
Sur ma pauvre âme s'abaissait

2.
Son manteau couvrait ma misère
Ses bras me serraient sur son cœur
Il me portait dans sa lumière
Loin du péché, de la douleur
De sa main essuyant mes larmes
Il me parlait de son amour
«Viens mon enfant, sois sans alarmes
Je te prends à Moi sans retour»

3.
Et je suis dans cette retraite
Dont je ne sortirai jamais
Et je goûte une paix parfaite
Où ma foi s'abreuve à longs traits
Non, tout ceci n'est point un rêve
Mais la grande réalité
C'est un jour nouveau qui se lève
Qui doit durer l'éternité

4.
En avant donc, avec courage
Avec espoir, avec bonheur
Je me consacre sans partage
À mon Dieu, mon Roi, mon Sauveur
Il dit à mon âme ravie
Ne t'occupe plus que de moi
Et je dirigerai ta vie
Et je m'occuperai de toi

5.
Il a saisi mes mains tremblantes
J'ai dit amen à ce contrat
Il étend ses mains bénissantes
C'est en effet Lui qui combat
Et les yeux fermés, je m'avance
Tranquille, sur le droit chemin
J'entonne un chant de délivrance
Il peut tout, car je ne suis rien
    `,
  },
  {
    id: "156",
    title: "156- Abandonne ta vie",
    lyrics: `1.
Abandonne ta vie,
Tes craintes et tes voeux,
A la grâce infinie
Du Souverain des cieux.
Lui, qui trace la route
Aux monde comme aux vents,
Conduira sans nul doutes,
Les pas de ses enfants.

2.
Qu'il soit ton espérance
Aux bons, aux mauvais jours;
Qu'il soit dans la souffrance,
Ton unique recours.
Dis-lui toutes tes peines,
Remets-lui tes douleurs;
Il a brisé tes chaînes,
Il séchera tes pleurs.

3.
Espère, âme angoissée,
Espère en ton Sauveur!
Il connaît ta pensée,
Il a lu dans ton coeur.
Il est l'amour suprême,
Il est le vrai chemin;
Viens à Lui, car il t'aime,
Viens! Il te tend la main.

4.
A ta voix qui m'appelle,
Je répondrai, Seigneur,
Je veux, humble et fidèle,
Te consacrer mon coeur.
Pour moi plus de tristesse!
Je vivrai par la foi,
En célébrant sans cesse
Le bonheur est à toi.`,
  },
  {
    id: "157",
    title: "157- Veille au matin",
    lyrics: `1.
Veille au matin,
Quand un ciel sans nuage
Semble annoncer
Un jour calme et serein;
C'est dans ton coeur
Que peut gronder l'orage
Qui fait tomber le pèlerin.
[Refrain]
Veille au matin, veille le soir,
Veille et prier toujours.

2.
Veille à midi,
Quand les bruits de la terre
Font oublier
Le céleste séjours;
Trouve un instant
Pour être solitaire
Dans la prière et dans l'amour.

3.
Veille le soir,
Quand se fait le silence;
Pense aux bienfaits
De ton céleste Ami,
Cherche avec soin
Sa divine présence,
Verse en son coeur tout ton souci.

4.
Veille toujours,
En tous lieux, à toute heure,
Car l'ennemi
Te guette à chaque instant,
Pour se glisser
Dans la sainte demeure
Où doit régner le Tout-Puissant.`,
  },
  {
    id: "158",
    title: "158- La croix que Dieu me donnee",
    lyrics: `1.
La croix que Dieu me donne
A porter ici-bas,
Est jointe à la couronne
Qui ne flétrit pas.
Celui qui me l'impose
Se nomme mon Sauveur;
Sur lui je me repose;
Il est mon défenseur.

2.
Le premier, sur lui-même
Il a charger la croix;
Après Lui, puisqu'il m'aime,
Dois-je en craindre le poids?
Jésus, en qui j'espère
Et qui la prit sur Lui,
Me la rendra légère;
Il est mon sûr appui.

3.
C'est Lui don't la sagesse
Me trace mon chemin,
Lui qui, dans ma faiblesse,
Me tend toujours la main.
C'est Lui qui renouvelle
Ma force chaque jour;
Jamais ce Dieu fidèle
N'a trompé mon amour.

4.
Prends donc, prends sans tristesse,
O mon âme, ta croix!
Du Seigneur la sagesse
En mesure le poids.
La douleur qu'Il t'envoie
Bientôt disparaîtra.
D'une éternelle joie,
Ton Dieu te comblera.

`,
  },
  {
    id: "159",
    title: "159- Ah! Donne à mon âme",
    lyrics: `1.
Ah! Donne à mon âme
Plus de sainteté…
Plus d'ardente flamme,
De sérénité,
Plus de confiance
Pour rester debout,
Plus de patience
Pour supporter tout.

2.
Fais que je contemple
Sans cesse l'Agneau,
Son vivant exemple,
Sa croix, son tombeau,
Sa grâce fidèle,
Son immense amour,
Sa gloire éternelle,
Son prochain retour.

3.
Jésus, à mes larmes,
Tu veux compatir;
De toutes tes armes,
Viens me revêtir;
Par plus de prière.
De zèle et de foi.,
Que dans la lumière,
Je marche avec joie!

4.
Donne, à ton service,
Un coeur plus joyeux,
Prompt au sacrifice,
Toujours sous tes yeux,
Qui chante et qui tremble,
Humble en sa ferveur,
Un coeur qui ressemble
Au tien, mon Sauveur.`,
  },
  {
    id: "160",
    title: "160- Humblement prosterné, Seigneur",
    lyrics: `1.
Humblement prosterné, Seigneur,
Devant ta majesté,
Je viens implorer la faveur
D'un coeur purifié.

Refrain:
Je veux un coeur nouveau,
Le baptême d'en haut,
De feu, de foi, de charité,
Un coeur régénéré.

2.
Un coeur patient, humble et joyeux,
Un coeur semblable au tien,
Un coeur content, toujours heureux,
Un coeur aimant le bien.

3.
Un coeur aimant ta volonté,
Vrai, droit, prêt à servir,
Un coeur soumit, plein de bonté,
Un coeur sachant souffrir.`,
  },
  {
    id: "161",
    title: "161- Comme une terre altérée",
    lyrics: `
    1.
Comme une terre altérée
Soupire après l'eau du ciel,
Nous appelons la rosée
De ta grâce, Emmanuel!

Refrain:
Fraîches, fraîches rosées,
Descendez sur nous tous!
Ô divine ondées,
Venez, arrosez-nous!

2.
Descends, ô pluie abondante,
Coule à flots dans notre coeur,
Donne à l'âme languissante
Une nouvelle fraîcheur.

3.
Ne laisse en nous rien d'aride
Qui ne soit fertilisé;
Que le coeur le plus avide
Soit pleinement arrosé!

4.
Oui, que les désert fleurissent
Sous tes bienfaisantes aux;
Que les lieux secs reverdissent
Et portant des fruits nouveaux.
[Refrain]`,
  },
  {
    id: "162",
    title: "162- Seigneur, à ton regard de flamme",
    lyrics: `1.
Seigneur, à ton regard de flamme
Rien ne t'est couvert, rien n'est caché;
Qu'il pénètre au fond de notre âme,
Et qu'il juge en nous le péché,
Qu'il juge le péché!

2.
Sonde nos coeurs et nos pensées,
Nos plus intimes souvenirs,
Nos oeuvres présentes, passées,
Sondes nos plus secrets désirs,
Nos plus secrets désirs!

3.
Qu'à la lumière tout paraisse
Pour que tout soit purifié,
Et qu'en nous ton Esprit ne laisse
Rien qui ne soit sanctifié,
Vraiment sanctifié!

4.
Alors, brûlant d'un nouveau zèle,
Seigneur, nous pourrons t'obéir.
Oh! Que la vie est grande et belle
Pour ceux qui veulent te servir,
Qui veulent te servir!`,
  },
  {
    id: "163",
    title: "163- Jésus, ta sainte présence",
    lyrics: `1.
Jésus, ta sainte présence
Est la source du bonheur.
Dans la joie et la souffrance
Elle est le repos du coeur.

Refrain:
Fais briller sur moi ta face,
O Jésus, Agneau de Dieu!
A tes pieds, c'est là ma place,
Près de Toi, mon ciel est bleu.

2.
Sur celui qui te contemple
Descend un rayon divin;
Tu fais de son coeur ton temple,
Ton doigt pointe son chemin.

3.
Ah! Que mon âme ravie
Te rencontre, ô mon Sauveur!
Car ton regard c'est la vie,
C'est la richesse du coeur.

4.
Il faut aussi ta présence
Pour ton service, ô Jésus!
Car elle est une puissance
Pour relever les perdus!

5.
Quand, dans l'étendue immense,
O Jésus, tu paraîtras,
C'est encore par ta présence
Que tu nous attireras!`,
  },
  {
    id: "164",
    title: "164- Plus haut, plus haut!",
    lyrics: `1.
Plus haut, plus haut!
C'est le cri de ma foi:
S'il faut courber
La tête sous le glaive,
Je veux encore
Que mon âme s'élève
Plus près de Toi, mon Dieu,
Plus près de Toi!

2.
Lorsque la nuit
Se fait autour de moi,
Quand j'erre seul
Dans le désert immense,
Que de mon âme
Encore ce cri s'élance:
Plus près de Toi, mon Dieu,
Plus près de Toi!

3.
Prends, ô mon coeur,
Les ailes de la foi,
Vole au-dessus
Des monts et des vallées,
Chante, au travers
Des plaines étoilées:
Plus près de Toi, mon Dieu,
Plus près de Toi!

4.
Quand tu viendras,
O mon céleste Roi,
Me recueillir
Dans ta pure lumière,
Que je redise
A mon heure dernière:
Plus près de Toi, mon Dieu,
Plus près de Toi!`,
  },
  {
    id: "165",
    title: "165- Oui, Jésus, c’est vers Toi",
    lyrics: `1.
Oui, Jésus, c'est vers Toi,
Toujours plus haut!
Que s'élève ma foi,
Toujours plus haut
Libre de tout lien,
Poursuivant le seul bien,
Mon regard sur le tien,
Toujours plus haut!

2.
Oui, c'est là mon soupir,
Toujours plus haut!
Tu connais mon désir,
Toujours plus haut!
Perçant l'obscurité,
Montre-moi ta clarté,
Ta divine beauté,
Toujours plus haut!

3.
Marche, me dit Jésus,
Toujours plus haut!
Oh! N'arrête plus,
Toujours plus haut!
Bientôt, je reviendrai,
Et te délivrerai,
Oui, je t'introduirai
Chez Moi, là-haut!`,
  },
  {
    id: "166",
    title: "166- Lutte quand l'Esprit de grâce",
    lyrics: `1.
Lutte quand l'Esprit de grâce
T'attire et te convertit;
Que ton coeur se débarrasse
De tout secret interdit!
Ne reste pas en chemin!
Coeur qui doute n'obtient rien:
Lutte bien! (bis)

2.
Lutte pour brûler de zèle,
Pour que, le premier amour
T'arrache au monde infidèle,
T'en détache sans retour.
Ne t'accorde aucun répit;
Persévère jour et nuit:
Lutte bien! (bis)

3.
Lorsque la perle est gagnée,
Ne crois pas que, désormais,
La lutte soit terminée,
Le mal détruit pour jamais.
Défie-toi de ton coeur;
Ne regarde qu'au Sauveur!
Veille bien! (bis)

4.
Un coeur fidèle et sincère
Aime Christ, hait le péché,
Pleure et combat sur la terre,
A soif de l'éternité.
Soldat de Christ, lutte encore!
Dans le ciel est ton trésor:
Lutte bien! (bis)`,
  },
  {
    id: "167",
    title: "167- J'ai trouvé, j'ai trouvé la voie",
    lyrics: `1.
J'ai trouvé, j'ai trouvé la voie
Qui conduit au repos du coeur;
J'ai trouvé la paix et la joie
En Jésus, le Libérateur.
O mes compagnons de misère,
Ensemble invoquons son secours:
Il m'attend que notre prière,
Le Sauveur qui sauve toujours. (bis 2 lignes)

2.
Par son sang, sa miséricorde
Efface nos iniquités;
Par son Esprit, qu'Il nous accorde,
Il guérit nos infirmités;
Et plus le mal incurable,
Et plus les fardeaux semblent lourds,
Plus Il se montre secourable,
Le Sauveur qui sauve toujours. (bis 2 lignes)

3.
Hélas! Ma trop longue ignorance
Ne connaissait auparavant,
Dans la lutte ou dans la souffrance,
Qu'un Sauveur qui sauve souvent;
Mais de ma pauvre et triste vie
J'ai vu se transformer le cours,
Depuis que mon coeur se confie
Au Sauveur qui sauve toujours. (bis 2 lignes)

4.
Il est ma force et ma victoire,
L'Ami qui me guide en tout lieu;
Il est ma lumière et ma gloire;
Il est mon frère; Il est mon Dieu.
Soit que je vive ou que je meure,
Il est mon unique recours…
Tu me sauveras d'heure en heure,
O Sauveur qui sauves toujours! (bis 2 lignes)`,
  },
  {
    id: "168",
    title: "168- A tes pieds, ô divin Maître",
    lyrics: `1.
A tes pieds, ô divin Maître,
Je me place avec bonheur!
Et t'adorant, je veux être
Ton disciple, ô mon Sauveur!
Parle! J'ai soif de t'entendre;
Parle! Je n'ai qu'un désir:
Que ta voix puissante et tendre
A mon coeur se fasse ouïr. (bis 4 lignes)

2.
Faites place, ô voix humaines,
A la voix de mon Sauveur!
Penseurs vains et choses vaines,
Eloignez-vous de mon coeur!
Tous les bruits, faites silence!
Toi, mon Maître, parle-moi!
Recueille en ta présence,
Mon âme n'entend que Toi. (bis 4 lignes)

3.
Parle-moi, témoin fidèle!
Découvre-moi le trésor
De ta sagesse éternelle;
Parle, ô Maître, parle encore.
Ta Parole, c'est la vie,
C'est la lumière et la paix;
A ton école bénie
Je veux rester à jamais. (bis)

4.
Parle, et pour que je comprenne
Ton enseignement divin,
Dans ta grâce souveraine,
Instruit-moi par le Esprit-Saint.
Parle et pour que j'obéisse
A tes ordres aussitôt,
Forme-moi pour ton service,
Pour te suivre, saint Agneau! (bis 4 lignes)`,
  },
  {
    id: "169",
    title: "169- Je dois voyager au monde",
    lyrics: `1.
Je dois voyager au monde
Comme un esquif sur les eaux,
Et la tempête qui gronde
Déjà fait mugir les flots.


Refrain:
Christ est ma vie, 
Il est mon Roi.
Toujours Il prie 
Notre Père pour moi.

2.
Il m'a donné la boussole
Qui, sans erreur, pointe au port:
C'est sa vivante Parole;
Avec elle, point de mort.

3.
Si le vent m'est favorable,
Si mon ciel est clair et pur,
Ce pilote charitable
Me dit: «Veille! Rien n'est sûr!»

4.
Et si vient le sombre orage,
Si tout semble menaçant,
Mon pilote m'encourage
De son regard tout-puissant.

5.
Je ne crains donc ni naufrage,
Ni pirates, ni récif;
J'ai déjà reçu le gage
Du salut de mon esquif.`,
  },
  {
    id: "170",
    title: "170- Mon Sauveur, je voudrais être",
    lyrics: `1.
Mon Sauveur, je voudrais être
Un fleur de tes parvis,
Briller pou Toi seul, ô Maître,
Puisque par Toi seul je vis;
Dans le silence répandre,
Le parfum de ton amour;
Dans la nuit obscure, attendre
L'aurore de ton retour.

2.
Mon Sauveur, je voudrais être
Sur le sentier ténébreux,
Un faible reflet, ô Maître,
De ton éclat radieux;
Luire sur la sombre route
Des coeur perdus loin de Toi,
Dissiper la nuit de doute
Par la clarté de la Foi.

3.
Mon Sauveur, je voudrais être
Comme un écho de ta voix
Pour proclamer, ô doux Maître,
Le Mystère de ta croix.
Pour parler de délivrance
A ceux qu'assaille la mort,
Pour consoler la souffrance
Et montrer à tous le port.

`,
  },
  {
    id: "171",
    title: "171- Seigneur, sanctifie",
    lyrics: `1.
Seigneur, sanctifie
Nos jours, nos moments;
Fais que notre vie
T’honore en tout temps.
Que ta présence,
Au milieu de nous,
L’heureuse influence
Nous pénètre tous.

2.
Nous voulons sans cesse
Marcher par la foi,
Et, dans la détresse,
Regarder à toi.
Heureux qui repose
Sur son bras puissant!
On a toute chose
En te possédant.

`,
  },
  {
    id: "172",
    title: "172- Comme un cerf altéré brame",
    lyrics: `1.
Comme un cerf altéré brame
Après le courant des eaux,
Ainsi soupire mon âme,
Seigneur, après tes ruisseaux,
Elle a soif du Dieu vivant,
Et s'écrie en le suivant:
O mon Dieu, quand donc sera-ce
Que mes yeux verront ta face?

2.
Pour pain je n'ai que mes larmes,
Et nuit et jour en tout lieu,
Lorsqu'en mes dures alarmes
On me dit: Que fait ton Dieu?
Je regrette la saison
Où j'allais en ta maison
Chantant avec les fidèles
Tes louanges immortelles.

3.
Mais quel chagrin te dévore?
Mon âme rassure-toi:
Espère en Dieu, car encore
Il sera loué de moi.
C'est son regard seulement
Qui guérira mon tourment:
Mon Dieu, je sens que mon âme
D'un ardent désir de pâme.

4.
Tous les flots de ta colère
Seigneur, sur moi, ont passé;
Mais par ta grâce, j'espère
Qu'enfin l'orage a cessé.
Le jour tu me conduiras,
Et la nuit tu me feras
Chanter, d'une âme ravie,
Ton saint nom, Dieu de ma vie.

5.
Mais quel chagrin te dévore?
Mon âme, rassure-toi:
Espère en Dieu, car encore
Il sera loué de moi.
Un regard dans sa faveur,
Me dit qu'Il est mon Sauveur;
Et c'est aussi Lui, mon âme,
Qu'en tous mes maux je réclame.

`,
  },
  {
    id: "173",
    title: "173- Repose ton âme",
    lyrics: `1.
Repose ton âme
Dans la sainteté,
De ton Dieu proclame
La fidélité;
La sainte Parole
Dont il te nourrit
Condamne et console,
Blesse, mais guérit.

2.
Repose ton âme
Dans la sainteté,
Ne crains ni le blâme,
Ni l'adversité;
Tout près de ton guide,
La main dans sa main,
Le désert aride
Fleurira soudain.

3.
Repose ton âme
Dans la sainteté,
L'Esprit Saint réclame
Ton activité;
Jésus, par sa grâce,
Demeurant en toi,
Choisira ta place
Pour l'oeuvre du Roi.

4.
Repose ton âme
Dans la sainteté,
Entretiens la flamme
De la charité.
En suivant le Maître
Doux, humble de coeur,
Tu feras connaître,
Sa grâce au pécheur.

5.
Repose ton âme
Dans la sainteté,
Quand la foule acclame
La mondanité;
Pense à la couronne
Promise au vainqueur.
Va, le ciel l'ordonne,
Servir ton Sauveur!

`,
  },
  {
    id: "174",
    title: "174- Pleine paix, Jésus en ta présence",
    lyrics: `1.
Pleine paix, Jésus en ta présence,
Pleine paix, soutenu par ta main,
Pleine paix, gardé par ta puissance,
Pleine paix, tout le long du chemin.

Refrain:
Parfaite paix, douce paix, (bis)
Même en marchant
Dans la plus sombre nuit.
Jésus, mon Sauveur,
Me dit: Sois sans peur!
Je suis la lumière de qui me suit.

2.
Pleine paix, dans mon pèlerinage,
Pleine paix, malgré le dur exil,
Pleine paix, si l'ennemi fait rage,
Pleine paix, quel que soit le péril.

3.
Pleine paix, au fort de la bataille,
Pleine paix, dans les difficultés,
Pleine paix, lorsque Satan m'assaille,
Pleine paix, sur les flots agités.

`,
  },
  {
    id: "175",
    title: "175- Comme un fleuve immense",
    lyrics: `1.
Comme un fleuve immense
Est la paix de Dieu.
Parfaite elle avance
Vainqueur en tout lieu;
Parfaite elle augmente
Constamment son cours;
Parfaite sa pente
S'abaisse toujours.

Refrain:
Selon ta promesse, 
O Jésus, mon Roi,
Je trouve sans cesse 
Paix parfaite en toi.

2.
Tu traces ma voie:
J'y marche avec toi!
L'épreuve et la joie
Me viennent de toi!
Cadran de nos vies,
Marque, chaque jour,
Les heures bénies
Du soleil d'amour!

3.
Océan de gloire,
Paix de mon Sauveur!
Gage de victoire!
Trésor de bonheur!
Ta grâce infinie,
Coulant nuit et jour,
Inonde ma vie
De vagues d'amour!`,
  },
  {
    id: "176",
    title: "176- C'est à l'ombre de tes ailes",
    lyrics: `1.
C'est à l'ombre de tes ailes
Qu'est le vrai repos;
Là plus de douleurs cruelles,
Là plus d'angoisses mortelles,
Là plus d'écrasants fardeaux:
C'est le vrai repos! (bis 2 lignes)

Refrain:
Vrai repos, paix parfaite et bonheur
Sous les ailes du Seigneur! (bis 2 lignes)

2.
C'est à l'ombre de tes ailes
Qu'on trouve la paix…
Les oiseaux dans leurs nids frêles,
Sous les plumes maternelles,
Ne s'épouvante jamais:
Ils dorment en paix! (bis 2 lignes)

3.
C'est à l'ombre de tes ailes
Qu'est le vrai bonheur.
Toutes choses sont nouvelles,
Et c'est la vie éternelle,
Que d'être près de ton coeur:
C'est le vrai bonheur! (bis 2 lignes)`,
  },
  {
    id: "177",
    title: "177- Jésus me demande d'être",
    lyrics: `1.
Jésus me demande d'être
Un rayon de soleil,
Qui gaîment fasse connaître
Son amour sans pareil.

Refrain:
Un rayon de joie,
Un doux rayon de soleil
Que Jésus envoie!
Oh! Quel bonheur sans pareil!

2.
Jésus me demande d'être
Un rayon bienfaisant,
Comme un reflet de ce Maître
Aimable et complaisant.

3.
Oui, Seigneur, donne-moi d'être
Comme un rayon d'espoir,
Paraissant à la fenêtre
Quand le ciel est tout noir.

4.
Oh! Que m'oubliant moi-même,
Je ne m'efforce plus
Que d'être pour ceux que j'aime,
Un reflet de Jésus.

5.
Que partout mon gai sourire
Et ma joyeuse humeur
Soit un baume à qui soupire
Et réjouisse en coeur

Refrain
Que Jésus m'emploie
Et qu'Il me rende pareil
Aux rayons de joie,
Aux doux rayons du soleil!`,
  },
  {
    id: "178",
    title: "178- Par ce chemin solitaire",
    lyrics: `1.
Par ce chemin solitaire,
Voyageurs, où courez-vous?
Une couronne immortelle
Que Christ prépara pour nous.
Par delà plaines cimes,
Vers ces demeures sublimes,
Vers ces demeures sublimes,
Amis, venez avec nous! (bis 2 lignes)

2.
Dans cette terre nouvelle,
Voyageurs, qu'espérez-vous?
Une couronne immortelle
Que Christ mérita pour nous.
Là, toujours en sa présence,
Plus de larmes, de souffrance,
Plus de larmes, de souffrance,
Amis, venez avec nous! (bis 2 lignes)

3.
Bien faible est votre cortège:
Quels dangers affrondez-vous?
Le Tout-Puissant nous protège
Et son Ange est avec nous.
L'Éternel est notre égide;
Nous avons Jésus pour guide,
Nous avons Jésus pour guide,
Amis, venez avec nous! (bis 2 lignes)

4.
Trouverons-nous de la place?
Ce bonheur est-il pour nous?
Venez! En ce jour de grâce,
Le ciel est ouvert pour tous.
A la source de la vie
Dieu lui-même vous convie,
Dieu lui-même vous convie;
Amis, venez avec nous! (bis 2 lignes)`,
  },
  {
    id: "179",
    title: "179- Paix, paix parfaite",
    lyrics: `1.
Paix, paix parfaite
En Jésus le Sauveur,
Parfaite paix,
Même pour moi, pécheur!

2.
Paix, paix parfaite!
Où sont tous mes péchés?…
Le sang de Christ
Les a tous effacés!

3.
Paix, paix parfaite!
Au fort de ma douleur
L'amour de Christ
Met la joie en mon coeur!

4.
Paix, paix parfaite!
En face de la mort,
Car mon Sauveur
Est Maître de mon sort!

5.
Paix, paix parfaite!
En Christ, ô doux espoir!
Le triste « adieu »
Se change en « au revoir! »

6.
Paix, paix parfaite
En notre Emmanuel,
Paix sur la terre
Et gloire dans le ciel!`,
  },
  {
    id: "180",
    title: "180- Torrents d'amour et de grâce",
    lyrics: `1.
Torrents d'amour et de grâce,
Amour du Sauveur en croix!
A ce grand fleuve qui passe,
Je m'abandonne et je crois.

Refrain:
Je crois à ton sacrifice,
O Jésus, Agneau de Dieu,
Et, couvert par ta justice,
J'entrerai dans le saint lieu.

2.
Ah! Que partout se répande
Ce fleuve à la grande voix;
Que tout l'univers entende
L'appel qui vient de la croix!

3.
Que toute âme condamnée
Pour qui tu versas ton sang,
Soit Père ramenée
Par ton amour tout-puissant.`,
  },
  {
    id: "181",
    title: "181- Quel repos céleste",
    lyrics: `1.
Quel repos céleste,
Jésus, d'être à Toi!
A toi pour la mort et la vie,
Dans les jours mauvais
De chanter avec foi:
Tout est bien, ma paix est infinie!

Refrain:
Quel repos, (ter) quel céleste repos!

2.
Quel repos céleste!
Mon fardeau n'est plus!
Libre par le sang du Calvaire,
Tous mes ennemis,
Jésus les a vaincus,
Gloire et louanges à Dieu notre Père!

3.
Quel repos céleste!
Tu conduis mes pas,
Tu me combles de tes richesse,
Dans ton grand amour,
Chaque jour tu sauras
Déployer envers moi tes tendresses.

4.
Quel repos céleste,
Quand enfin, Seigneur,
Auprès de Toi, j'aurai ma place,
Après les travaux,
Les combats, la douleur,
A jamais je pourrai voir ta face!`,
  },
  {
    id: "182",
    title: "182- J’ai dans mon cœur une mélodie",
    lyrics: `1.
J'ai dans mon coeur une mélodie
Qui me vient de mon Sauveur;
C'est une joie intense et bénie
Qui vient réjouir mon coeur.

Refrain:
Dans mon coeur chante une mélodie,
Douce mélodie, céleste harmonie;
Dans mon coeur chante une mélodie
A la gloire du Sauveur.

2.
C'est à la croix que je l'ai trouvée
Dans l'amour de mon Sauveur.
C'est mon âme qu'il a rachetée
Du fardeau de sa douleur.

3.
Depuis ce temps, mon âme joyeuse
Chante un doux refrain d'amour;
Elle est paix, elle est si heureuse,
Qu'elle redit nuit et jour

`,
  },
  {
    id: "183",
    title: "183- Mort avec Christ d'une mort",
    lyrics: `1.
Mort avec Christ d'une mort volontaire,
Je vis au ciel déjà sur cette terre;
En attendant son glorieux retour,
Je suis gardé par Lui de jour en jour.

Refrain:
Jour après, gardé par ton amour,
Jour après jour à l'abri de ton aile;
C'est le repos et la vie éternelle…
Je t'appartiens, ô Sauveur, pour toujours!

2.
Il n'est douleur que son coeur ne partage,
Il n'est fardeaux dont Il ne me soulage;
Il n'est de pleurs qu'Il ne daigne tarir,
Il n'est de maux qu'Il ne puisse guérir.

3.
A mes soupirs s'incline son oreille;
Lorsque je dors, près de moi son coeur veille;
Quand pour toujours mes yeux se fermeront,
Ses bras puissants au ciel me porteront.
`,
  },
  {
    id: "184",
    title: "184- Je la connais cette joie excellente",
    lyrics: `1.
Je la connais cette joie excellente,
Que ton Esprit, Jésus, met dans un coeur;
Je suis heureux, oui, mon âme est contente
Puisque je sais qu'en toi j'ai mon Sauveur.

2.
Tu m'as aimé, moi, vile créature,
Jusqu'à t'offrir en victime pour moi;
Ton propre sans a lavé ma souillure,
Et par ta mort je suis vivant pour toi.

3.
Que puis-je donc désirer sur la terre,
Puisque je suis l'objet de ton amour;
Puisque ta grâce, ô Sauveur débonnaire,
Dès le matin me prévient chaque jour?

4.
Ah! Que mon âme, en parcourant sa voie,
S'égaye, ô Dieu, dans ta communion,
Et que mon coeur, plein de force en ta joie,
De ton Esprit garde en paix l'onction!

`,
  },
  {
    id: "185",
    title: "185- Jamais Dieu ne délaisse",
    lyrics: `1.
Jamais Dieu ne délaisse
Qui se confie en Lui;
Si le monde m'oppresse
Jésus est mon appui.
Ce Dieu tendre et fidèle
Garde en sa paix les siens
Pour la vie éternelle,
Et les comble de biens.

2.
Je veux, sachant qu'Il m'aime,
Me remettre à ses soins;
Beaucoup mieux que moi-même
Il connaît mes besoins.
Ce Dieu plein de tendresse,
Confondrait-Il ma foi?
Non! Plus le mal me presse
Plus Il est près de moi.

3.
Seigneur, par l'efficace
Du sang versé pour moi,
Accorde-moi la grâce
De vivre tout pour toi!
C'est la vie éternelle
Déjà dès ici-bas,
Jusqu'au jour qui m'appelle
A passer dans tes bras.

`,
  },
  {
    id: "186",
    title: "186- Le Tout-Puissant est mon Berger",
    lyrics: `1.
Le Tout-Puissant est mon Berger;
Son amour me fait vivre;
II n’est disette ni danger
Dont Il ne me délivre.

2.
Chaque matin Il me conduit
Près des sources d’eau vive,
Et je m’endors, quand vient la nuit,
Sous sa garde attentive.

3.
Je m’égarais, folle brebis,
Mais tu suivis ma trace!
Et dans tes bras tu me repris,
Amour que rien ne lasse!

4.
Et maintenant, je ne veux plus
Sans toi marcher une heure;
Pour vivre et mourir, ô Jésus,
Sous ta croix je demeure.

5.
Car seule elle me guidera
Dans le sombre passage;
Mon âme, ô Sauveur, bénira
Ton amour d’âge en âge!`,
  },
  {
    id: "187",
    title: "187- Je vis d'espérance",
    lyrics: `1.
Je vis d'espérance,
D'amour et de foi,
Et mon chant s'élance
Vers Toi, divin Roi.
Grande est ma faiblesse,
Mon indignité;
Mais dans ta tendresse,
Tu m'as racheté.

Refrain:
Oui, mon coeur chante,
Mon âme est contente;
Mon Jésus est tout mon bien,
Je ne craindrai rien! (bis 4 lignes)

2.
Oh! Quelle tendresse,
Quel immense amour!
Cet amour me presse
D'aimer à mon tour:
Aimer, c'est te suivre
Et c'est t'obéir.
Aimer, oui, c'est vivre
Et s'épanouir.

3.
Que le coeur en fête
La nuit et le jour
Toujours je reflète
Ton immense amour!
L'amour qui rayonne,
Te gagnant les coeurs,
Voilà la couronne
Au front des vainqueurs!`,
  },
  {
    id: "188",
    title: "188- T’aimer Jésus! te connaître",
    lyrics: `1.
T’aimer Jésus! te connaître,
Se reposer sur ton sein,
T’avoir pour son Roi, son Maître,
Pour son breuvage et son pain;
Savourer en paix ta grâce;
De ta mort, puissant Sauveur,
Goûter la sainte efficace,
Quelle ineffable douceur!

2.
O bonheur inexprimable!
J’ai l’Eternel pour berger:
Toujours tendre et secourable,
Son cœur ne saurait changer.
Dans sa charité suprême,
Il descendit ici-bas
Chercher sa brebis qu’il aime,
Et la prendre dans ses bras.

3.
Il donna pour moi sa vie,
Il me connaît par mon nom;
A sa table il me convie,
J’ai ma place en sa maison.
Il veut bien, de ma faiblesse,
De tous mes maux s’enquérir
Qu’il est bon! Il veut sans cesse
Me pardonner, me guérir.

4.
Rien, ô Jésus, que ta grâce,
Rien que ton sang précieux,
Qui seul mes péchés efface,
Ne me rend saint, juste, heureux,
Ne me dites autre chose,
Sinon qu’il est mon Sauveur
L’auteur, la source et la cause
De mon éternel bonheur!

`,
  },
  {
    id: "189",
    title: "189- Oui, selon ta promesse",
    lyrics: `1.
Oui, selon ta promesse,
O Jésus, mon Sauveur,
J'ai trouvé l'allégresse
Auprès de la douleur,
Le rayon qui rassure
Dans la plus sombre nuit,
Un baume à la blessure,
Dans l'épreuve un appui;
Un baume à la blessure,
Dans l'épreuve un appui.

2.
Dans le désert aride,
Et sous un ciel brûlant,
Une eau fraîche et limpide
Du rocher jaillissant,
L'ombre de la nuée
Abritant le chemin,
La céleste rosée
Qui remplace le pain.
La céleste rosée
Qui remplace le pain.

3.
Jésus, mon Roi, mon Maître,
N'es-tu pas tout pour moi?
La source de mon être,
Le rocher de ma foi,
Le soleil qui m'éclaire,
Le ciel qui me sourit,
L'eau qui me désaltère,
Le pain qui me nourrit!
L'eau qui me désaltère,
Le pain qui me nourrit!

`,
  },
  {
    id: "190",
    title: "190- Joie au ciel!",
    lyrics: `1.
Joie au ciel!
Écoutez, écoutez ces cantiques:
Le prodigue est de retour!
Il revient, il revient,
Ouvrez-vous, saint portiques!
Il revient, affamé de pardon et d'amour.
Debout sur la route,
Son Père l'attend:
« C'est lui, plus de doute,
Voici mon enfant! »
Plein de tendresse,
Il court, il presse
Dans ses bras le fils repentant.
Joie au ciel!
Écoutez, écoutez ces cantiques:
Le prodigue est de retour!

2.
Joie au ciel!
Écoutez, écoutez sa prière,
Car il pleure et se repent:
« J'ai péché, j'ai péché
Contre toi, tendre Père,
Et je n'ose espérer d'être encore ton enfant. »
Le Père s'écrie:
« Mon fils est sauvé!
Il vient à la vie,
Il est retrouvé! »
Le fils écoute,
Et son coeur doute
Qu'un si beau jour se soit levé.
Joie au ciel!
Écoutez, écoutez sa prière,
Car il pleure et se repent.

3.
Joie au ciel!
« Apportez des vêtements de fête
Pour le voyageur lassé.
Qu'au banquet de l'amour
Ma demeure s'apprête
Et dans son chants joyeux 
Oublions le passé!
Oui, que tout s'efface,
Qu'il ne reste plus
Mémoire ni trace
Des jours disparus.
Au fils que j'aime,
Aujourd'hui même,
Mon coeur et mes biens sont rendus. »
Joie au ciel!
« Apportez des vêtements de fête
pour le voyageur lassé. »

`,
  },
  {
    id: "191",
    title: "191- Maître, entends-tu la tempête",
    lyrics: `1.
Maître, entends-tu la tempête
Et ses terrible accents!
Parle, Seigneur, et l'arrête;
Sauve, sauve tes enfants!
Mais aucun bruit ne n'éveille;
Il dort et nous périssons.
A nos cris prête l'oreille,
Sauve-nous, nous t'en prions!


Refrain:
Il parle aux flots en démence:
Paix vous soit!
La mer, les vents font silence;
Paix vous soit! Paix vous soit!
Il est notre délivrance;
Paix vous soit!

2.
Maître, mon coeur qui chancelle
Traverse les grandes eaux,
Et l'orage, à ma nacelle,
Livre de rudes assauts.
Oh! Qui verra ma détresse?
D'où me viendra le secours?
A Toi, Seigneur, je m'adresse,
C'est à Toi que j'ai recours.

3.
Maître, l'onde est apaisée,
Le doute a quitté mon coeur,
Et mon âme consolée
A retrouvé son Sauveur.
Oh! Prends dans ta main ma vie,
Jusques au jours de ma mort!
En Toi seul je me confie;
Tu me conduiras au port.

`,
  },
  {
    id: "192",
    title: "192- Jésus, Ami de mon âme",
    lyrics: `1.
Jésus, Ami de mon âme,
Sauve-moi des grandes eaux!
C'est toi seul que je réclame,
En toi j'ai le vrai repos.

Refrain:
Ta puissance est efficace,
Ton amour est infini;
En toi seul j'ai toute grâce,
Tu seras mon ferme appui.

2.
Ton nom seul est saint et juste,
Je ne suis qu'iniquité;
En Toi, Rédempteur auguste,
Tout est grâce et sainteté.

3.
Garde, ô Jésus, ma nacelle,
Viens la guider vers le port;
Puis, dans ton amour fidèle,
Reçois mon âme à la mort.
`,
  },
  {
    id: "193",
    title: "193- Moment si doux de la prière,",
    lyrics: `1.
Moment si doux de la prière,
Où Dieu, m'élevant jusqu'à lui,
Se révèle à moi comme un Père,
Comme un Sauveur, comme un appui;
Oh! Oui, je t'aime, heure bénie.
Je te désire avec ardeur,
Car déjà souvent dans la vie,
Tu m'as sauvé du tentateur. (bis 2 lignes)

2.
Doux moment de paix, heure sainte,
Où, sur les ailes de la foi,
Mon coeur s'élève sans contrainte,
Je ne saurais vivre sans toi.
Sois donc toujours toute ma joie,
Tout mon refuge et mon secours,
Et que jamais Dieu ne me voie
Passer sans toi l'un de mes jours! (bis 2 lignes)

`,
  },
  {
    id: "194",
    title: "194- Jésus te confie",
    lyrics: `1.
Jésus te confie
Une oeuvre d'amour,
Utile et bénie
Jusqu'à son retour;
Cette sainte tâche,
Veux-tu l'accomplir
Pour Lui, sans relâche,
Sans jamais faiblir?

Refrain:
Prie, agis, jour après jour,
Sans broncher, suis ton Sauveur avec amour;
Soit fidèle, obéissant,
Et le Maître rendra ton travail puissant.

2.
Va chercher ton frère,
Esclave enlacé,
Las de sa misère,
De son noir passé;
Arrache son âme
Au plaisir trompeur,
Le salut proclame,
En Christ, ton Sauveur.

3.
Va vers la jeunesse,
Que le tentateur
Veut leurrer sans cesse,
Loin du vrai bonheur;
Combattant le doute,
Parle-lui d'amour;
Montre-lui la route
Du ciel, saint séjour.

4.
Va vers ceux qui meurent
Sans Dieu, sans espoir;
Dis à ceux qui pleurent
Quand tout semble noir:
« Jésus donne vie,
Bonheur, joie et paix
A qui se confie
En Lui, pour jamais. » 

`,
  },
  {
    id: "195",
    title: "195- J'ai soif de ta présence",
    lyrics: `1.
J'ai soif de ta présence,
Divin chef de ma foi;
Dans ma faiblesse immense
Que ferais-je sans Toi?

Refrain:
Chaque jour, à chaque heure,
Oh! J'ai besoin de toi;
Viens, Jésus, et demeure
Auprès de moi.

2.
Pendant les jours d'orage,
D'obscurité, d'effroi,
Quand faiblit mon courage,
Que ferais-je sans Toi?

3.
O Jésus, ta présence,
C'est la vie et la paix;
La paix dans la souffrance,
Et la vie à jamais.

`,
  },
  {
    id: "196",
    title: "196- Mon Dieu, mon Père",
    lyrics: `1.
Mon Dieu, mon Père,
Écoute-moi,
Car ma prière
S'élève à toi.
En Jésus-Christ,
Tu nous l'as dit,
Je puis, Seigneur,
T'ouvrir mon coeur.
Ah! Fais-moi grâce,
Dieu tout-puissant!
Tourne ta face
Vers ton enfant.

2.
Viens, je te prie,
Change mon coeur;
Guide ma vie
Loin de l'erreur.
Mon seul désir
Est de choisir
La bonne part
Sous ton regard.
Que mon offense
Ne lasse plus
Ta patience,
Seigneur Jésus!

3.
Fais-moi comprendre
Ta charité
Et bien entendre
Ta vérité.
Oui, que ta main,
Sur mon chemin,
Soit, ô Dieu fort,
Mon seul support!
Que ta puissance
Soit chaque jour
Ma délivrance,
O Dieu d'amour!

4.
Rends-moi fidèle
Par ton secours,
Et sous ton aile
Tiens-moi toujours;
Loin du danger,
O Bon Berger!
Conduis mes pas
Jusqu'au trépas.
Vois ma faiblesse
Et me soutiens
Par ta tendresse:
Je t'appartiens.
`,
  },
  {
    id: "197",
    title: "197- Seigneur, du sein de la poussière",
    lyrics: `1.
Seigneur, du sein de la poussière,
Mon âme crie à Toi:
O Dieu, descends dans ma prière!
Que je te sente en moi.

2.
Je ne veux plus l'ombre qui passe,
L'image qui pâlit;
Mais la substance de ta grâce,
Toi-même, ton Esprit!

3.
C'est assez et trop se répandre
En long et vague espoir;
Je veux te parler et t'entendre,
Te toucher et te voir.

4.
Je veux brûler, mais de ta flamme,
Luire, mais de ton jour,
De ton âme, animer mon âme,
Aimer de ton amour.

5.
Voilà le seul bien que j'envie,
Que j'implore, ô mon Roi!
Ne plus vivre que de ta vie,
Que par Toi, que pour Toi!`,
  },
  {
    id: "198",
    title: "198- Que faut-il faire",
    lyrics: `1.
Que faut-il faire
Quand l'adversaire
Se dresse soudain devant mes pas,
Lançant ses flèches,
Ouvrants des brèches,
M'entraînant où je ne voudrais pas?

Refrain:
Dis tout à Jésus, dis tout à Jésus,
Tu ne peux porter seul tes fardeaux;
Dis tout à Jésus, dis tout à Jésus,
C'est lui qui donne le vrai repos.

2.
Quand la misère,
L'épreuve amère,
Sont la part, Seigneur, de ton enfant;
Que puis-je faire,
Comment te plaire
Sur ce chemin si sombre et glissant?

3.
Quand dans mon âme
La sainte flamme
De ton Esprit s'éteint lentement,
Puis-je encore croire
A la victoire?
Mon coeur, hélas! Est indifférent!

4.
Quand la faiblesse,
Quand la tristesse
Me voilent la face de Jésus,
Le sanctuaire
De la prière
Est-il ouvert aux pauvres vaincus?

`,
  },
  {
    id: "199",
    title: "199- O Dieu de vérité",
    lyrics: `1.
O Dieu de vérité,
Pour qui seul je soupire,
Unis mon cœur à Toi
Par de forts et doux nœuds!
Je me lasse d’ouïr,
Je me lasse de lire,
Mais non pas de te dire:
C’est Toi seul que je veux! (bis 2 lignes)

2.
Parle seul à mon cœur,
Et qu’aucune prudence,
Qu’aucun autre docteur
Ne m’explique tes lois;
Que toute créature,
En ta sainte présence,
S’impose le silence
Et laisse agir ta voix! (bis 2 lignes)

3.
Tiens-toi près de mon âme,
Et, dans ma solitude,
Viens remplir de ta paix
Le vide de mon cœur.
Dissipe mes ennuis
Et toute inquiétude,
Et que ma seule étude
Soit de t’aimer, Seigneur! (bis 2 lignes)

4.
Tu me réponds, mon Dieu!
Mais encore des nuages
Me voilent tes splendeurs,
Céleste Vérité!
Que ne puis-je bientôt,
Sur de plus purs rivages,
Par delà tous les âges
Contempler ta beauté! (bis 2 lignes)`,
  },
  {
    id: "200",
    title: "200- Toi qui disposes de toutes choses",
    lyrics: `1.
Toi qui disposes de toutes choses
Et nous les donnes chaque jour,
Reçois, ô Père, notre prière
De reconnaissance et d’amour.

2.
Le don suprême, que ta main sème,
C’est notre pardon, c’est ta paix;
Et ta clémence, trésor immense,
Est le plus grand de tes bienfaits.

3.
Que, par ta grâce, l’instant qui passe
Serve à nous rapprocher de Toi!
Et qu’à chaque heure, vers ta demeure
Nos cœurs s’élèvent par la foi!

`,
  },
  {
    id: "201",
    title: "201- Parle, parle, Seigneur",
    lyrics: `1.
Parle, parle, Seigneur,
Ton serviteur écoute:
Je dis ton serviteur,
Car enfin je le suis;
Je le suis, je veux l’être,
Et marcher dans ta route,
Et les jours et les nuits. (bis 3 lignes)

2.
Remplis-moi d’un esprit
Qui me fasse comprendre
Ce qu’ordonnent de moi
Tes saintes volontés,
Et réduis mes désirs
Au seul désir d’entendre
Tes hautes vérités. (bis 3 lignes)

3.
Parle, parle, ô mon Dieu!
Ton serviteur fidèle
Pour écouter ta voix
Réunit tous ses sens,
Et trouve les douceurs
De la vie éternelle
En tes divins accents. (bis 3 lignes)

4.
Parle, pour consoler
Mon âme inquiétée;
Parle, pour la conduire
A quelque amendement;
Parle, afin que ta gloire,
Ainsi plus exaltée,
Croisse éternellement! (bis 2 lignes)`,
  },
  {
    id: "202",
    title: "202- Je m’approche de Toi",
    lyrics: `1.
Je m’approche de Toi, (bis)
Source de vie, (bis)
Mon Sauveur, bénis-moi!

2.
Fais silence en mon cœur, (bis)
Viens et me parle, (bis)
O mon divin Sauveur!

3.
Rends-moi conforme à Toi, (bis)
Divin Modèle, (bis)
Mets ton image en moi!

4.
Rends-moi bouillant, Seigneur (bis)
Pour ton service, (bis)
Que je parte en vainqueur!

5.
Et, quand tu reviendras, (bis)
Dans tes milices, (bis)
Tu me retrouveras!

`,
  },
  {
    id: "203",
    title: "203- Seigneur, ce que je réclame",
    lyrics: `1.
Seigneur, ce que je réclame,
C’est ce riche don d’amour!
Que cette céleste flamme
En moi brûle nuit et jour!
Cet amour, si fort, si tendre,
Amour qui supporte tout,
Qui ne veut pas se défendre,
Prêt à souffrir jusqu’au bout.

2.
Pour les autres il s’oublie,
Il ne peut être envieux,
Tout éloge l’humilie,
Jamais il n’est orgueilleux.
Cet amour peut vaincre et fondre
Les cœurs méchants, durs, glacés;
Ils ne peuvent rien répondre,
L’amour les a terrassés.

3.
Devant la vaste souffrance
Qui s’étend de jour en jour,
Il faut un remède immense,
Il faut un immense amour.
Que jusqu’à la mort, fidèle,
Priant, luttant en tout lieu,
Ma vie entière révèle
L’amour sublime de Dieu!`,
  },
  {
    id: "204",
    title: "204- Le cri de mon âme",
    lyrics: `1.
Le cri de mon âme
S’élève vers Toi;
Elle te réclame,
Jésus, pour son Roi.
Ton joug est facile,
Ton fardeau léger;
Sur mon cœur docile,
Règne, ô Bon Berger!

2.
Trop longtemps le monde
Trompa mes désirs.
Changeants comme l’onde
Sont tous ses plaisirs.
Sa joie est frivole,
Tout est vanité;
Seule, ta Parole
Est la vérité.

3.
Parole éternelle,
O Christ Rédempteur,
Prends-moi sous ton aile,
Habite en mon cœur.
Dans la nuit profonde,
Tiens-moi par la main;
Lumière du monde,
Luis sur mon chemin!

4.
Source de l’eau vive,
Pain venu des cieux,
Que par Toi je vive
Paisible et joyeux!
Quand luira l’aurore
Du jour éternel,
Que je vive encore
Pour Toi, dans le ciel!`,
  },
  {
    id: "205",
    title: "205- O Toi qui donnes la vie",
    lyrics: `1.
O Toi qui donnes la vie,
A Tes pieds je veux m’asseoir
Comme s’asseyait Marie
A l’heure douce du soir. (bis 2 lignes)

2.
Mon être entier Te réclame;
Tout n’est que faiblesse en moi;
Viens Te pencher sur mon âme,
Elle a tant besoin de Toi! (bis 2 lignes)

3.
Maître, à Tes pieds je m’incline,
Je T’appartiens sans retour,
Verse en moi Ta paix divine,
Répands en moi Ton amour! (bis 2 lignes)`,
  },
  {
    id: "206",
    title: "206- Dans l’abime de misères",
    lyrics: `1.
Dans l’abime de misères
Où j’expirais loin de toi
Ta bonté, Dieu de mes pères,
Descendit jusques à moi,
Tu parlas: mes yeux s’ouvrirent,
A mes regards éperdus
Tes secrets se découvrirent;
J’étais mort, et je vécus.

2.
Plus haut que toute pensée,
Ta main étendit les cieux;
Tu veux: leur voûte embrasée
Se peuple de nouveaux feux.
Mais privés d’aimer, de croire
Tous ces cieux et leur splendeur
Ne valent pas pour ta gloire
Un seul soupir d’un seul cœur.

3.
Esprit du Dieu que j’adore,
Ah! forme en moi ce soupir,
Ce feu qui n’a point encore
Réchauffé mon repentir!
Qu’à l’amour mon cœur se livre,
Et, qu’il répète à jamais:
Aimer, aimer, voilà vivre;
Fais-mois vivre, ô Dieu de paix!`,
  },
  {
    id: "207",
    title: "207- Dans le jardin où j’aime entrer",
    lyrics: `1.
Dans le jardin où j’aime entrer
A l’heure douce de l’aurore,
Je me rends seul pour rencontrer
Celui que mon âme adore.

Refrain:
Il marche avec moi,
Mon Sauveur, mon Roi,
Il me dit que je suis à Lui;
Il est mon soutien,
Il est tout mon bien,
Mon salut, mon divin appui.

2.
Il parle, et dans mon cœur, sa voix
Fait naître une joie infinie,
Les oiseaux même, au fond du bois,
Suspendent leur mélodie.

3.
Le don que tu cherches, Seigneur,
Meilleur que les fruits de la terre,
C’est l’offrande de tout mon cœur;
Elle, seule, peut te plaire.
`,
  },
  {
    id: "208",
    title: "208- Viens m’apprendre à t’aimer",
    lyrics: `1.
Viens m’apprendre à t’aimer,
C’est en toi qu’est la vie,
En toi qu’est le bonheur
Et la félicité.
Jésus, étends sur moi
Ta main, ta main meurtrie,
Et dis-mois: J’ai souffert,
J’ai porté ton péché.

2.
Vois, je suis à tes pieds,
Je pleure et m’humilie,
A l’ombre de ta croix
Je me tiens prosterné.
Que ton divin amour
Me retienne et me lie,
Et m’apprenne à t’aimer,
Toi qui m’as tout donné.

3.
Que ton sang répandu
M’ôte toute souillure,
Viens me donner un cœur
Qui ressemble à ton cœur.
Rends-moi participant
De ta sainte nature,
Je ne veux que toi seul
Pour Maitre et pour Vainqueur.

4.
Je ne t’apporte rien
Qu’un pauvre cœur qui souffre
De ne pouvoir t’offrir
Que son trop faible amour.
En venant me chercher
Et me tirer du gouffre,
Tu m’as sauvé, Seigneur,
Me voici dès ce jour!

`,
  },
  {
    id: "209",
    title: "209- Souvent, Seigneur, en sa détresse,",
    lyrics: `1.
Souvent, Seigneur, en sa détresse,
Un pauvre pécheur ne t’adresse
Pour prières que des soupirs.
Vers lui, plein d’amour, tu t’inclines;
Quoiqu’il se taise, tu devines
Le secret de tous ses désirs.

2.
Mais, ô Dieu! ces élans le l’âme,
Ce cri d’un cœur qui te réclame,
Je ne les trouve pas en moi:
Toujours occupé de la terre,
Quoique de tout je désespère,
Je ne sais m’élever à Toi.

3.
Mon cœur se tait comme la lyre,
Dont Saul a, dans son délire,
Interrompu les doux accords.
Seigneur, fais-en vibrer les cordes,
Pour que de tes miséricordes
Je parle avec de saints transports.

4.
Mais quoi! ce désir que j’éprouve,
Ce souhait qu’en mon cœur je trouve,
Ne me viendraient-ils pas de Dieu?
Je disais: Dicte ma prière!
Et tu m’avais, ô tendre Père,
Déjà dicté ce premier vœu.

5.
Désormais donc, ô Dieu suprême!
Pourquoi chercherais-je en moi-même
La prière qu’il faut t’offrir?
J’attends toute sainte pensée
Du ciel, d’où descend la rosée
Que le soleil doit recueillir.`,
  },
  {
    id: "210",
    title: "210- Plus que vainqueurs!",
    lyrics: `1.
Plus que vainqueurs! Telle est notre devise
Plus que vainqueurs, bien que persécutés;
Car la victoire à la fois fut acquise
Par le Sauveur qui nous a rachetés. (bis 2 lignes)

2.
Suivons le Christ jusque sur le Calvaire;
Ayons toujours sa mort devant les yeux;
Si nous souffrons avec Lui sur la terre,
Nous règnerons avec Lui dans les cieux. (bis 2 lignes)

3.
Osons braver les injures du monde,
Pour confesser le beau nom de Jésus.
Que sur Lui seul tout notre espoir se fonde
Et notre espoir ne sera pas confus. (bis 2 lignes)

4.
Amis, croyons au pouvoir invisible
Que le Sauveur a caché dans sa croix;
Saisissons-la comme une arme invincible
Pour triompher au nom du Roi des rois. (bis 2 lignes)`,
  },
  {
    id: "211",
    title: "211- Travaillons et luttons!",
    lyrics: `1.
Travaillons et luttons!
Nous sommes au Seigneur,
Suivons l’étroit sentier
Qui conduit à la vie!
Jésus marche avec nous,
Avançons sans frayeur,
Il nous garde, et son bras
Toujours nous fortifie.
[Refrain]
Travaillons et luttons, (bis)
Soyons prêts et prions,
Bientôt le Maitre va venir!

2.
Travaillons et luttons!
Que les cœurs affligés,
Les perdus loin de Dieu
Retrouvent l’espérance!
Vers la croix, dirigeons
Leurs regards angoissés,
Pressons-les d’accepter
Jésus, leur délivrance.

3.
Travaillons et luttons!
Il nous appelle tous,
Le champ nous est ouvert
Et la moisson est grande!
Pour servir notre Chef,
Ne pensons plus à nous,
En avant vers le but!
Le Maitre le demande.

4.
Travaillons et luttons!
Sans jamais nous lasser,
De notre Rédempteur
Elevons la bannière
Fidèles jusqu’au bout
Sachons persévérer,
Le repos nous attend
Dans la pleine lumière!`,
  },
  {
    id: "212",
    title: "212- Debout, sainte cohorte,",
    lyrics: `1.
Debout, sainte cohorte,
Soldats du Roi des rois!
Tenez d’une main forte
L’étendard de la croix.
Au sentier de la gloire
Jésus-Christ nous conduit;
De victoire en victoire
II mène qui Ie suit.

2.
Debout pour la bataille!
Partez, n’hésitez plus;
Pour que nul ne défaille
Regardez à Jésus.
De l’armure invincible,
Soldats, revêtez-vous!
Le triomphe est possible
Pour qui lutte à genoux.

3.
La trompette résonne:
Debout, vaillants soldats!
L’immortelle couronne
Est Ie prix des combats.
Si I’ennemi fait rage,
Soyez fermes et forts;
Redoublez de courage
S’il redouble d‘efforts.

4.
Debout, debout encore!
Luttez jusqu’au matin.
Déjà brille I’aurore
A I’horizon lointain.
Bientôt, jetant nos armes
Aux pieds du Roi des rois,
Les chants après les larmes,
Le trône après la croix!`,
  },
  {
    id: "213",
    title: "213- Triomphant, chantons d'allégresse",
    lyrics: `1.
Triomphant, chantons d'allégresse,
Réjouissons-nous devant Dieu!
Qu'un chant de louanges sans cesse
A sa gloire monte en tout lieu!

Refrain:
Triomphe, triomphe,
Tressaille de gloire en ton Dieu!
Triomphe, triomphe,
Tressaille de joie en ton Dieu!

2.
Chantons à Celui qui s'avance
Dans les cieux, les cieux éternels!
Il fait entendre avec puissance
Sa voix, c'est le Dieu d'Israël!

3.
Il donne à son peuple victoire,
Puissance, force, liberté,
A notre Dieu rendons la gloire,
Louons sa sainte majesté!

4.
De concert avec les saints anges
Faisons retentir notre voix,
Chantons à jamais les louanges
De l'Agneau divin mis en croix.`,
  },
  {
    id: "214",
    title: "214- C'est Jésus, quand je chancelle",
    lyrics: `1.
C'est Jésus, quand je chancelle
Seul en mon chemin,
Qui vient prendre ma main frêle
Dans sa forte main.

Refrain:
Tenu par sa main, (bis)
Oui, je suis, quand je chancelle,
Tenu par sa main.

2.
Il connaît bien ma faiblesse,
Mon indignité,
Mais Il me bénit sans cesse;
Grande est sa bonté!

Refrain:
Grande est sa bonté! (bis)
Il supplée à ma faiblesse;
Grande est sa bonté!

3.
J'ai dans ma misère extrême
Les yeux sur Jésus.
Je suis assuré qu'Il m'aime,
Que faut-il de plus?

Refrain:
Les yeux sur Jésus, (bis)
Gloire à son amour suprême!
Que faut-il de plus!

4.
Ton sang, sur la croix bénie
A coulé pour moi,
Et je ne me glorifie
Qu'en toi, divin Roi!

Refrain:
Oui, ce n'est qu'en Toi, (bis)
Que j'ai le salut, la vie,
O Jésus, mon Roi!

`,
  },
  {
    id: "215",
    title: "215- Au combat de la vie",
    lyrics: `1.
Au combat de la vie,
Conscrits et vétérans,
Le Seigneur nous convie:
Soldats, serrons nos rangs!
Qu'au divin Capitaine
Notre coeur soit uni:
La victoire est certaine
Sous son drapeau béni.

2.
La croix est sa bannière,
Son beau nom est Jésus;
Des armes de lumière
Il revêt ses élus.
Son Esprit les enflamme
Au plus fort des combats;
Son âme est dans leur âme,
Sa force est dans leur bras.

3.
Jeunesse ardente et fière,
Jeunesse au coeur vaillant,
Donne-toi tout entière
Au Sauveur tout-puissant!
Soumise à sa loi pure,
Tu mettras sous tes pieds,
Tes péchés, ta souillure,
Par sa mort expiés.

4.
Par sa grâce infinie
Il guérira tes maux;
Et, la lutte finie,
Après bien de travaux,
Sur ton front qui rayonne
D'espoir et de clarté,
Il mettra la couronne
De l'immortalité!`,
  },
  {
    id: "216",
    title: "216- Le signal de la victoire",
    lyrics: `1.
Le signal de la victoire
Déjà brille aux cieux;
La couronne de la victoire
Paraît à nos yeux.

Refrain:
Je viens, combattez encore!
Dit Jésus à tous.
Oui, mon Sauveur, je t'implore,
Je lutte à genoux.

2.
Que l'ennemi, plein de rage,
Redouble ses coups,
Nous ne perdons point courage:
Christ est avec nous.

3.
Suivons, amis, la bannière
Du Sauveur en croix,
Et que notre armée entière
Se range à sa voix.

4.
Rude et longue est la mêlée:
Voici le secours!
Dans nos mains prenons l'épée
Qui vainquit toujours!`,
  },
  {
    id: "217",
    title: "217- A moi, les cœurs braves!",
    lyrics: `1.
« A moi, les cœurs braves! »
A dit le Vainqueur
Qui rompt les entraves
Du pauvre pécheur.
« Noble est la carrière:
Qui veut y courir?
Et, sous ma bannière,
Combattre et mourir? »

Refrain:
A toi, divin Maitre, mon cœur et mon bras:
Jésus, je veux être un de tes soldats !

2.
L’ennemi fait rage:
Je sens ses fureurs;
Comme un bruit d’orage,
J’entends ses clameurs,
Quand Satan déchaine
Tous ses alliés:
Mais ce flot de haine
Expire à tes pieds

3.
Ma couronne est prête:
Tu m’as racheté!
Ma justice est faite
De ta sainteté.
Ta grâce infinie
Couvre mes péchés;
A ta croix bénie
Ils sont attachés.

4.
Après tant de luttes,
Lassés mais vainqueurs,
Relevés des chutes,
Guéris des douleurs,
Gardés sous ton aile,
Nous irons goûter
La paix éternelle,
Et pourrons chanter:

Refrain:
A toi les couronnes de tous les élus!
C’est toi qui leur donnes ton ciel, ô Jésus!
`,
  },
  {
    id: "218",
    title: "218- Plus le mal est pressant,",
    lyrics: `1.
Plus le mal est pressant,
Plus ma misère est grande,
Plus l’abime est profond
Et béant sous mes pas,
Plus le péril extrême
Un prompt secours demande,
Plus je me réfugie,
O Jésus, dans tes bras!

2.
Parmi tous les dangers,
C’est Toi qui me rassures,
Contre tous les assauts,
C’est Toi mon bouclier;
C’est Toi, si je faiblis,
Qui guéris mes blessures;
Pour pouvoir tout, sur Toi
Je n’ai qu’à m’appuyer.

3.
Tu m’as associé,
Jésus, à ta victoire;
Mets ta force en mon bras,
Mets ta flamme en mon cœur!
Oui, viens par mon triomphe,
Ajouter à ta gloire,
Combattre par mes mains
Et me rendre vainqueur.

4.
Tu me donnes toujours
Selon ma confiance,
Quand j’ai tout demandé,
N’ai-je pas tout reçu?
Avec Toi, tout triomphe
Est assuré d’avance:
Quand on est sûr de vaincre,
On a déjà vaincu.

`,
  },
  {
    id: "219",
    title: "219- A celui qui sera vainqueur,",
    lyrics: `1.
A celui qui sera vainqueur,
Et qui me glorifie,
Je donnerai, dit le Seigneur,
Au ciel l’arbre de vie!

Refrain:
Victoire, force, honneur et louanges,
Gloire, gloire, puissance à toi, Jésus!

2.
Un caillou blanc, un nom nouveau,
Et la manne cachée,
Lui seront donnés par l’Agneau,
Sa promesse est scellée!

3.
Revêtu d’un vêtement blanc,
Resplendissant de gloire!
Sera celui qui par le sang
Remporta la victoire!

4.
Avec Christ, celui qui vaincra
S’assiéra sur son trône,
Et de ses mains il recevra
L’immortelle couronne.`,
  },
  {
    id: "220",
    title: "220- Sûr de la victoire,",
    lyrics: `1.
Sûr de la victoire,
Soldat du Seigneur,
Marche, chante: « Gloire! »
Tu seras vainqueur.
Le grand Capitaine
Qui va devant toi
Te la rend certaine;
Combats avec foi.

Refrain:
Oui, la victoire, - Tu l’auras!
Chante donc : « Gloire! » - Tu verras
Ton adversaire - Fort, vaillant
Couché par terre – A l’instant!

2.
L’ennemi s’avance
Redoublant le pas
Et, plein d’assurance,
Ne s’arrête pas;
Mais, Christ va combattre,
Reste près de Lui;
Déjà pour l’abattre,
Son épée a Lui.

Refrain:
Et, la victoire, - Tu l’auras!
Chante donc : « Gloire! » - Tu verras
Ton adversaire - Fort, vaillant
Couché par terre – A l’instant!

3.
Dieu tient la couronne
Promise au vainqueur;
C’est Lui qui la donne
Avec le bonheur;
Bientôt sur ta tête
Il va la poser;
Dans sa paix parfaite
Tu vas reposer.

Refrain:
Car la victoire, - Tu l’auras!
Chante donc : « Gloire! » - Tu verras
Ton adversaire - Fort, vaillant
Couché par terre – A l’instant!

`,
  },
  {
    id: "221",
    title: "221- La croix reste debout,",
    lyrics: `1.
La croix reste debout,
Alléluia! (bis)
Elle domine tout,
Alléluia! (bis)
C'est en vain que la haine
Contre elle se déchaîne:
Lumineuse et sereine
La croix reste debout!

Refrain:
Alléluia! Alléluia!
Au plus fort des combats,
Alléluia! Alléluia!
La croix ne recule pas!

2.
Sur elle en Golgotha,
Alléluia! (bis)
Le fils de Dieu monta.
Alléluia! (bis)
Amour incomparable!
Ce Sauveur adorable,
Pour l'homme misérable,
Mourut en Golgotha.

3.
Soldats du Roi des rois,
Alléluia! (bis)
Portons partout sa croix!
Alléluia! (bis)
Car tous ceux qu'il délivre
Sous la croix doivent vivre,
Sur la croix doivent suivre
Jésus le Roi des rois.

`,
  },
  {
    id: "222",
    title: "222- Il est une sainte guerre,",
    lyrics: `1.
Il est une sainte guerre,
Il est un combat divin,
Entre le ciel et la terre,
Entre le mal et le bien.

2.
Certaine est notre victoire,
Luttons sans crainte et sans peur;
Nous combattons pour la gloire
De Jésus, le Rédempteur.

3.
La justice est notre armure,
La foi, notre bouclier,
La vérité, pour ceinture,
Doit à jamais nous lier.

4.
C’est une épée invincible
Qu’on voit briller dans nos mains,
C’est la Parole infaillible
Du Dieu Sauveur des humains.

5.
Sous la bannière immortelle
Les cœurs en haut, nous marchons;
De la patrie éternelle
Pas à pas nous approchons.

6.
Après la lutte suprême
La couronne nous attend;
Jésus la mettra Lui-même
Sur le front du combattant!`,
  },
  {
    id: "223",
    title: "223- Voyez l’étendard céleste",
    lyrics: `1.
Voyez l’étendard céleste
Qui s’agite au vent!
C’est un secours manifeste;
Frères, en avant!

Refrain:
« Tenez ferme, car j’avance, »
Amis répondons:
« O Jésus, notre espérance,
Par toi nous vaincrons! »

2.
Satan, Prince de ce monde,
Redouble ses coups;
Notre faiblesse est profonde;
Que deviendrons-nous?

3.
Sur la montagne prochaine
Sonnent les clairons…
Au nom du grand Capitaine
Nous triompherons!

4.
Le combat est long, peut-être,
Elevons nos cœurs!
Avec Jésus notre Maître,
Nous serons vainqueurs!`,
  },
  {
    id: "224",
    title: "224- Honneur aux vaillants, aux braves",
    lyrics: `1.
Honneur aux vaillants, aux braves,
Aux soldats de Dieu,
Qui, même chargés d’entraves,
Luttent en tout lieu.

Refrain:
Jésus-Christ leur donne
Un cœur libre et fort,
Et leur promet la couronne
Quand viendra la mort.

2.
Qu’on les raille ou les immole,
Fermes jusqu’au bout,
On les voit devant l’idole,
Seuls rester debout!

3.
Joignant l’amour au courage,
Ces nobles lutteurs
Du monde qui les outrage
Sont les bienfaiteurs.

4.
Ils s’en vont…et l’on oublie
Leurs noms, leurs combats,
Mais leur sublime folie
Ne périra pas!
`,
  },
  {
    id: "225",
    title: "225- Qu’ils sont beaux",
    lyrics: `1.
Qu’ils sont beaux sur les montagnes
Les pieds de tes serviteurs,
Qui parcourent les campagnes,
Prêchant la grâce aux pécheurs!
O délicieuse vie
D’un serviteur de Jésus,
Qui pour son Maître s’oublie,
En annonçant ses vertus!

2.
Libre de toute autre chaîne,
Le chrétien qui sert son Dieu,
Dans la souffrance et la peine
Suit son modèle en tout lieu.
Il faut qu’en vivante offrande
Il s’offre pour son Sauveur:
C’est là ce que Dieu demande
D’un fidèle serviteur.

3.
Dites au cœur débonnaire
Que Christ est sa guérison,
Et que sa mort salutaire
Détruit le mortel poison.
Annoncez au cœur timide,
Au pécheur contrit, brisé,
Que Christ fait d’un cœur aride
Un cœur de grâce arrosé.

4.
Au cœur accablé de peines
Qui tremble au seul nom de mort,
Au captif chargé de chaînes
Qui n’attend qu’un triste sort,
Dites que Dieu, dans sa grâce,
Donna son Fils au pécheur,
Et que sa mort efficace
Nous mérita sa faveur.

`,
  },
  {
    id: "226",
    title: "226- Semons dès l'aurore",
    lyrics: `1.
Semons dès l'aurore, (bis)
Quand le soleil luit, (bis)
Et semons encore
Lorsque vient la nuit;
Dieu peut faire éclore
La fleur et le fruit.

Refrain:
Bon courage, amis! (bis)
Nous irons joyeux
Cueillir les épis. (bis 3 lignes)

2.
Semons sur le Maître, (bis)
Parlons du Sauveur, (bis)
Semons, car peut-être
Un pauvre pécheur
Par nous pourra naître
Au seul vrai bonheur.

3.
La tâche est immense, (bis)
Et dur le terrain, (bis)
Mais, bonne espérance!
Nul travail n'est vain;
De Dieu la puissance
Fait germer le grain.

`,
  },
  {
    id: "227",
    title: "227- Dès que l’aube dépose",
    lyrics: `1.
Dès que l’aube dépose
Ses perles sur les fleurs,
Dès que s’ouvre la rose
Aux brillantes couleurs,
Dès que l’ombre s’efface
Devant le jour qui luit,
A l’œuvre, le temps passe!
A l’œuvre avant la nuit!

2.
Quand le soleil inonde
Et remplit le ciel bleu,
Illuminant le monde
De ses rayons de feu,
A l’œuvre, sans relâche,
A l’œuvre, le jour fuit!
Si pénible est la tâche,
Bientôt viendra la nuit!

3.
A cette heure indécise
Où le jour disparaît,
Où murmure la brise
A travers la forêt,
Quand le couchant se dore
Et que s’éteint le bruit,
Frères, à l’œuvre encore!
Voici, voici, la nuit!

`,
  },
  {
    id: "228",
    title: "228- Publiez bien haut la grande",
    lyrics: `1.
Publiez bien haut la grande nouvelle:
Le ciel est ouvert à tout être humain!
La route est tracée, un guide fidèle
Vous conduira par la main.

Refrain:
Le salut pour tous, le salut par grâce,
A tous est offert, à tous est donné.
Oh! Venez, pécheurs,
Venez, le temps passe,
Et vous serez pardonnés.

2.
Publiez bien haut la grande nouvelle:
Le sang de Jésus a tout effacé.
Où que vous soyez, c'est vous qu'Il appelle,
Vous qui l'avez offensé.

3.
Publiez bien haut la grande nouvelle!
Au loin comme au près faites-la courir,
Partout où se trouve une âme rebelle,
Un pécheur à secourir.

`,
  },
  {
    id: "229",
    title: "229- Choeur des bienheureux,",
    lyrics: `1.
Choeur des bienheureux,
Célestes armées,
Chantez, voici l'enfant perdu!
Les portes du ciel
Ne sont fermées,
Il revient, le fils attendu!

Refrain:
Gloire, gloire à Dieu dans les hauts cieux!
Quels doux accords retentissent!
Que nos voix s'unissent
A ces chants joyeux:

2.
« J'ai trouvé mon fils! »
Dit le tendre Père
En l'embrassant avec amour.
« D'un manteau royal
Couvrez sa misère,
Et que tout chante son retour. »

3.
Frères, accourez
Au Dieu qui vous aime!
Debout encore sur le seuil,
Il vous fait entendre
Un appel suprême
Et vous réserve un doux accueil!


`,
  },
  {
    id: "230",
    title: "230- Ecoutez l’appel du Berger!",
    lyrics: `1.
Ecoutez l’appel du Berger!
Il sait ses brebis en danger;
Il les appelle avec amour,
Espérant toujours leur retour.

Refrain:
Cherchons-les! Cherchons-les!
Savons-nous le prix d’une âme?
Cherchons-les! Cherchons-les!
Le bon Berger les réclame.

2.
Mourant de froid, de soif, de faim,
Les brebis appellent en vain.
Jésus nous veut pour les sauver:
Qui va l’aider à les trouver!

3.
Ne peut-il pas compter sur nous?
Ne voulons-nous pas aller tous
Dire à tous ceux qui sont perdus
Que nous les voulons pour Jésus?`,
  },
  {
    id: "231",
    title: "231- La voix de Christ nous appelle;",
    lyrics: `1.
La voix de Christ nous appelle;
Il est temps de s’éveiller:
La moisson est vaste et belle!
Qui veut pour moi travailler?
C’est ton Sauveur, ô mon frère,
Dont l’appel s’adresse a toi;
Réponds- lui d’un cœur sincère:
«Me voici, maitre, prends-moi! »

2.
Sans franchir les mers bruyantes,
Tu peux annoncer Jésus.
Que d’âmes insouciantes,
De cœurs souffrants et perdus!
Autour de nous l’œuvre est grande,
Mais petite est notre foi.
A Jésus qui nous commande
Répondons: « Maitre, aide- moi! »

3.
Si d’un sublime langage
Tu n’as pas reçu le don,
Tu peux rendre témoignage
Qu’en Jésus est le pardon;
A ton frère, tu peux dire
Ce que Christ a fait pour toi.
Pour que lui-même t’inspire,
Dis-Lui: « Maitre, enseigne-moi! »

4.
Mais que nul ne nous entende
Dire encor: « Je ne puis rien! »
Lorsque Jésus nous commande
De faire et d’aimer le bien.
Poursuivons l’œuvre bénie
Avec zèle, amour et foi,
Puis, notre tâche finie,
Nous dirons: « Maitre, prends-moi! »

`,
  },
  {
    id: "232",
    title: "232- Messagers du grand Roi.",
    lyrics: `1.
Messagers du grand Roi.
Proclamons avec foi
La joyeuse nouvelle
De la vie éternelle,
Annonçons au pécheur
L'amour du Dieu Sauveur,
Montrons la croix du Rédempteur!
Ambassadeurs de Jésus-Christ,
Par la puissance de l'Esprit,
Offrez la paix de Dieu,
Publiez le salut
Au monde rebelle et perdu!

2.
Vous parlerez pour moi,
Tel est l'ordre du Roi;
Avec joie et courage
Délivrons son message:
Pécheurs, répentez-vous,
Dieu vous appelle tous,
Tombez, tombez à ses genoux.
Ambassadeurs de Jésus-Christ,
Par la puissance de l'Esprit,
Offrez la paix de Dieu
Publiez le salut
Au monde rebelle et perdu!

3.
Écoute notre voix,
Pécheur, viens à la croix
Et là, dans la poussière,
Dis à Dieu ta misère
Jésus te recevra,
Le sang de Golgotha,
Le sang de Christ te lavera.
Et racheté de Jésus-Christ,
Par la puissance de l'Esprit,
Tu dira: Gloire à Dieu,
J'étais mort et perdu,
Il m'a donné son grand salut!

`,
  },
  {
    id: "233",
    title: "233- Annonçons partout le dernier Message",
    lyrics: `1.
Annonçons partout le dernier Message
Du Seigneur Jésus revenant des cieux;
Dans le mon entier, rendons témoignage
Au Roi saint et glorieux

Refrain:
Annonçons partout la bonne nouvelle:
Jésus réunit tous ses rachetés;
Il vient leur donné la vie éternelle.
Oh! Publions ses bontés.

2.
Annonçons partout le dernier Message:
Le Seigneur Jésus vient sécher nos pleurs
Briser les liens de notre esclavage,
Mettre un terme à nos douleurs.

3.
Annonçons partout le dernier Message:
Bientôt nous verrons la sainte Cité.
Gloire à notre Dieu! Chrétiens, bon courage!
Car voici l'éternité

`,
  },
  {
    id: "234",
    title: "234- Sur mon chemin l'éternité s'avance",
    lyrics: `1.
Sur mon chemin l'éternité s'avance;
Pour moi le temps fait un pas aujourd'hui.
Mais le Seigneur m'abandonné l'espérance;
Elle subsiste et repose sur Lui.

2.
Combien de fois, et des ans des heures
Mes yeux lassés ont mesuré le cours!
« O Dieu, disais-je, ouvre-moi ces demeures
Où dans ton sein je vivrai pour toujours. »

3.
Mais, c'est à toi de régler ma carrière;
Je te désire, et ne murmure pas;
Car, je le sais, à mon heure dernière
Je trouverai mon refuge en tes bras.

4.
Aux jours mauvais, si mon âme chancelle,
Si mes genoux fléchissent en chemin,
Viens de ma foi ranimer l'étincelle;
Tends-moi du ciel ta secourable main.`,
  },
  {
    id: "235",
    title: "235- Avançons-nous joyeux, toujours joyeux,",
    lyrics: `1.
Avançons-nous joyeux, toujours joyeux,
Vers le pays des esprits bienheureux.
Vers la demeure où Jésus pour nous prie.
Marchons joyeux, c'est là notre patrie.
Avançons-nous joyeux, toujours joyeux,
Vers le pays des esprits bienheureux.

2.
Des chants d'amour retentissent aux cieux
Quels doux concerts! Harpes des bienheureux,
Nous entendrons votre sainte harmonie
Quand nous aurons atteint notre patrie.
Avançons-nous joyeux, toujours joyeux,
Vers le pays des esprits bienheureux.

3.
Ton aiguillon, ô mort, tu ne l'as plus!
Tombeau, déjà nous ne te craignons plus;
Sur toi Jésus remporta la victoire;
Il nous ouvrit le chemin de la gloire.
Lui-même dit: « Accourez tous joyeux
Vers le pays des esprits des bienheureux. »`,
  },
  {
    id: "236",
    title: "236- Nous voguons vers un beau rivage",
    lyrics: `1.
Nous voguons vers un beau rivage
Que Jésus nous prépara;
Nous ne craignons aucun naufrage,
Sa grâce nous conduira.

Refrain:
Viens avec nous, la voile est prête;
Frère, viens, que rien ne t'arrête.
Plus d'ouragan, de tempête,
Au séjour du Dieu d'amour. (bis 2 lignes)

2.
Pour notre céleste patrie
Voici l'heure du départ;
A venir Jésus te convie;
Demain il serait trop tard.

3.
Sur cette rive hospitalière
Dieu réunit ses enfants;
Après les luttes de la terre,
Nous aurons grossir leurs rangs.

4.
Devant nous, de la cité sainte
Bientôt va s'ouvrir le port;
De nos coeur bannissant la crainte,
Chantons dans un saint transport:`,
  },
  {
    id: "237",
    title: "237- Gémissant sous l'esclavage,",
    lyrics: `1.
Gémissant sous l'esclavage,
Dans la sombre nuit,
Amis, reprenez courage:
Déjà l'aube lui.

Refrain:
Oh! Joyeuse espérance!
Voici la délivrance!
Nous connaissons la puissance
De notre grand Libérateur,
Et nous vous disons: Confiance!
Venez, donnez-Lui votre coeur!

2.
Que de larmes, que de chutes
Dans la sombre nuit!
Voici la fin de vos luttes:
Déjà l'aube luit.

3.
Prenant en dégoût la vie,
Coeurs découragés!
Que pourrait votre énergie,
Pauvres naufragés?

4.
Luit, qui fit tomber nos chaînes
Et nous affranchit,
Voit aussi vos luttes vaines
Dans la sombre nuit…

Refrain:
Oh! Joyeuse espérance!
Voici la délivrance!
Croyez donc à la puissance
De notre grand Libérateur,
Et venez avec confiance;
Venez, donnez-Lui votre coeur!

`,
  },
  {
    id: "238",
    title: "238- J'apportai ma détresse à Jésus;",
    lyrics: `1.
J'apportai ma détresse à Jésus;
Mon péché, ma tristesse ne sont plus.
Combien douce à mon âme fut sa voix,
Quand, sur le bois infâme de la croix,
Il murmura: « Je t'aime,
Et j'expire pour toi;
Pécheur, aujourd'hui même,
Tu vivras avec moi! »

2.
Quand mon âme est lassée, au Sauveur
J'élève ma pensée et mon coeur.
Je le vois: plus de larmes dans mes yeux!
Je suis libre d'alarmes et joyeux.
Sa force en ma faiblesse
S'accomplit tous les jours;
Nul fardeau ne m'oppresse
Car Il est mon recours.

3.
Viens à Jésus, mon frère, aujourd'hui.
Avec ta peine amère, viens à Lui.
Le Fils de Dieu t'appelle; viens et crois!
Pourquoi rester rebelle à sa voix?
La voix qui fit le monde
Te supplie, ô pécheur.
Que ton âme réponde
Et trouve le bonheur.

`,
  },
  {
    id: "239",
    title: "239- Possèdes-tu, pauvre pécheur",
    lyrics: `1.
Possèdes-tu, pauvre pécheur,
La vive et joyeuse espérance?
As-tu trouvé, plein d’assurance,
Un appui ferme pour ton cœur?

Refrain:
Pour moi, j’ai mon Sauveur,
Mon Sauveur, mon Sauveur!
Pour moi, j’ai mon Sauveur,
En Lui, j’ai mis ma confiance.

2.
Quand ton esprit est abattu,
Quand ta vaine gaîté s’envole,
Quelle voix alors te console?
Et pour ami, qui donc as-tu?

Refrain:
Pour moi, j’ai mon Sauveur,
Mon Sauveur, mon Sauveur!
Pour moi, j’ai mon Sauveur,
Oh! Qu’elle est douce sa parole!

3.
De ton présent, de ton passé,
Quand tu sens la triste folie,
Quand tu prends en dégoût la vie,
Qui soutient ton cœur oppressé?

Refrain:
Pour moi, j’ai mon Sauveur,
Mon Sauveur, mon Sauveur!
Pour moi, j’ai mon Sauveur,
Sa grâce au repos me convie.

4.
Et quand la nuit de l’avenir
Sur toi déjà jette son voile,
Quand l’horizon pour toi se voile,
D’où le jour te peut-il venir?

Refrain:
Pour moi, j’ai mon Sauveur,
Mon Sauveur, mon Sauveur!
Pour moi, j’ai mon Sauveur,
Du matin, la brillante Etoile!

5.
Oh! si tu voulais dans les bras
De Jésus aussi prendre place!
Si tu voulais saisir sa grâce !…
Viens à Lui, frère, et tu vivras!

Refrain:
Pour moi, j’ai mon Sauveur,
Mon Sauveur, mon Sauveur!
Pour moi, j’ai mon Sauveur,
Heureux qui contemple sa face!

`,
  },
  {
    id: "240",
    title: "240- Proclamez par tout le monde",
    lyrics: `1.
Proclamez par tout le monde
Que Jésus est Roi,
Il est Roi, (bis)
Et que partout on réponde,
Le coeur plein d'émoi:
Il est Roi, (bis)
En tout lieu faites connaître
Qu'Il règne à jamais,
Et que ce grand Dieu, ce Maître,
Est le Roi de paix!
Proclamez son nom sublime!
Criez à tous vents
Qu'Il règne sur les abîmes
Et les flots mouvants!

Refrain:
Proclamez par tout le monde
Que Jésus est Roi,
Il est Roi, (bis)
Et que partout on réponde,
Le coeur plein d'émoi:
Il est Roi! (bis)

2.
Proclamez par tout le monde
Que Jésus est Roi,
Il est Roi, (bis)
Et que partout on réponde,
Le coeur plein d'émoi:
Il est Roi! (bis)
A ceux que la vie accable
Dites qu'aujourd'hui
Il reçoit le misérable
Qui regarde à Lui.
A toute âme qui succombe
Dites qu'Il est fort!
A ceux qui vont vers la tombe,
Qu'Il vainquit la mort.

3.
Proclamez par tout le monde
Que Jésus est Roi,
Il est Roi, (bis)
Et que partout on réponde,
Le coeur plein d'émoi:
Il est Roi! (bis)
Parcourez monts et campagnes,
Villes et déserts!
Que l'Esprit vous accompagne
Dans tout l'univers.
Bravez les fureurs, la haine,
Bravez les mépris
Pour que toute langue humaine
Répète ce cri:`,
  },
  {
    id: "241",
    title: "241- Seigneur, que la terre entière",
    lyrics: `1.
Seigneur, que la terre entière
S'éveille à ta grande voix,
Et se lève à la lumière
Qui rayonne de ta croix,
Qui rayonne de ta croix!

Refrain:
Après la nuit viens l'aurore:
Voici l'heure du réveil.
Que toute âme, ô divin soleil,
Te contemple et t'adore!
Après la nuit vient l'aurore:
Voici l'heure du réveil.
Que toute âme, ô divin soleil,
Te contemple et t'adore!

2.
Ton sang lave notre crime
Et dissipe nos remord;
En mourant, sainte Victime,
Tu fais renaître les morts,
Tu fais renaître les morts.

3.
Arrache à l'enfer sa proie,
Tout-puissant Ressuscité!
Sème à pleine main la joie
Sur ce monde dévasté,
Sur ce monde dévasté.

4.
Que la source soit tarie
De vos pleurs, vous qui pleurez,
Par l'espoir de la patrie
Où bientôt vous entrerez,
Où bientôt vous entrerez!

5.
Erreur, péché, nuit mortelle,
Fuyez dans le noir passé!
Pour moi la vie éternelle
Par Jésus a commencé,
Par Jésus a commencé.`,
  },
  {
    id: "242",
    title: "242- Le temps est court",
    lyrics: `1.
Le temps est court pour accomplir la tâche
Envers soi-même, envers l'humanité.
Il faut agir sans trêve et sans relâche,
Il faut semer pour l'immortalité.

Refrain:
Car doucement, mais sûrement,
Ma barque vogue au port.
Je m'en vais vers les cieux,
Je m'en vais vers mon Dieu;
Car doucement, mais sûrement,
Ma barque vogue au port,
J'entends déjà l'écho
Des chants de l'autre bord.

2.
Le temps est court pour dépouiller notre âme
De tout fardeau provenant du péché,
Et ranimer en elle enfin la flamme,
Autel divin d'un coeur humble et brisé.

3.
Le temps est court pour aider notre frère;
Tendons-lui donc la main d'amour, de foi.
Oh! Pardonnons, et semons sur la terre
Le grain qui meurt et qui renaît cent fois.

4.
Le temps est court, les vagues de la vie
Auront bientôt poussé ma barque au port.
Que d'âmes souffrant loin de la patrie,
Indiquons-leur l'unique entrée au port.`,
  },
  {
    id: "243",
    title: "243- Voyez, voyez! Les voici!",
    lyrics: `1.
Voyez, voyez! Les voici!
Tous les peuples sont ici:
C'est la croix qui les attire…
Les pécheurs, les malheureux,
Tous viennent grandir l'empire
Du Christ qui mourut pour eux.

2.
Voyez, voyez! Les voici!
En foule accourent ici:
De leurs cités innombrables
Les mystérieux Chinois,
Et les Hindous misérables…
Tous regardent vers la croix.

3.
Voyez, voyez! Les voici!
Lentement s'approche aussi
L'Africain noir et sauvage.
Aux pieds du Crucifié,
Son long et dur esclavage
Sera bientôt oublié!

4.
Voyez, voyez! Les voici!
Les enfants du Nord transi,
Les fils de la steppe aride;
L'heure est sonné en tout lieu;
Le coeur de l'homme est avide
De te voir, ô Fils de Dieu!

5.
Voyez, voyez! Les voici!
Tous sont réunis ici!
C'est la famille immortelle,
Et tous chante d'un seul coeur
Cette hymne toujours nouvelle:
Gloire, gloire au Rédempteur!

`,
  },
  {
    id: "244",
    title: "244- O Seigneur Éternel",
    lyrics: `1.
O Seigneur Éternel,
Une nouvelle année
Par ta grande bonté
Nous est encor donnée.
Ah ! donne-nous aussi
D’y vivre par la foi,
Et de la consacrer
Uniquement à Toi.

2.
Que ce soit pour nous tous
Un an de bienveillance!
De grâce, de progrès,
D’amour, de délivrance!
Que notre âme, docile
A ta puissante voix,
Jésus, trouve la paix
A l’ombre de ta croix!

3.
Nos jours sont en tes mains,
Notre course est bornée,
Et plusieurs sont entrés
Dans leur dernière année.
Veillons donc et prions,
Et s’il faut déloger,
Nous irons, pleins de joie
Auprès du bon Berger.

4.
Puissions-nous, rachetés
Par ton grand sacrifice,
Scellés de ton Esprit,
Couverts de ta justice,
Nous réjouis en Toi,
Garder le bon dépôt!
Oui, Seigneur Jésus, viens!
Oui, Seigneur, viens bientôt.`,
  },
  {
    id: "245",
    title: "245- Dans la paix de Dieu",
    lyrics: `1.
Place pour toi, pécheur, Jésus t'appelle
Au grand festin de la vie éternelle.


Refrain:
Place pour toi! pécheur, viens par la foi!

2.
Du grand banquet la salle est préparée;
Dans son amour, Dieu t'en donne l'entrée.

3.
Dans son palais, où sa gloire rayonne,
Aux malheureux Il offre une couronne.

4.
La nuit s'approche, Oh! Que rien ne s'arrête,
Là-haut ton Père à t'accueillir s'apprête.

5.
Entre, il est temps!… Lorsque l'heure est sonnée
Plus de pardon pour l'âme condamnée.

Refrain:
O cri d'effroi! Plus de place pour toi!
`,
  },
  {
    id: "246",
    title: "246- Entends-tu le chant joyeux",
    lyrics: `1.
Entends-tu le chant joyeux?
Jésus sauve aujourd’hui!
Il retentit en tous lieux:
Jésus sauve aujourd’hui!
C’est un cri de délivrance,
Un cantique d’espérance,
Qui remplit l’espace immense:
Jésus sauve aujourd’hui!

2.
Partout élève la voix:
Jésus sauve aujourd’hui!
Vaillant héraut de la croix,
Jésus sauve aujourd’hui!
A parler, Jésus t’appelle
Répands au loin la nouvelle,
En connais-tu de plus belle?
Jésus sauve aujourd’hui!

3.
Répète au pécheur contrit:
Jésus sauve aujourd’hui!
Ceux que le mal asservit,
Jésus sauve aujourd’hui!
Va jusqu’à l’île lointaine,
Briser du captif la chaîne,
Redire aux cœurs dans la peine:
Jésus sauve aujourd’hui!

4.
Jusqu’aux confins des déserts,
Jésus sauve aujourd’hui!
Jusque par delà les mers,
Jésus sauve aujourd’hui!
Que d’un pôle à l’autre pôle
Coure la sainte parole
Qui relève, instruit, console:
Jésus sauve aujourd’hui!`,
  },
  {
    id: "247",
    title: "247- Sentinelle vigilante",
    lyrics: `1.
« Sentinelle vigilante,
Qu'en est-il donc de la nuit?
Dis à l'âme somnolente
Que déjà le matin luit! »

Refrain:
La nuit passe, le matin du grand jour luit!
Sentinelle, sois au poste jour et nuit! (bis)

2.
Les gardes sur la muraille
Nous l'ont dit, entendez-vous?
Au loin gronde la bataille,
Tout est sombre autour de nous.

3.
Point de repos, de relâche,
Rachetés de l'Éternel.
Travaillez à votre tâche,
Car Jésus revient du ciel!

`,
  },
  {
    id: "248",
    title: "248- Venez au Sauveur qui vous aime",
    lyrics: `1.
Venez au Sauveur qui vous aime,
Venez, Il a brisé vos fer;
Il veut vous recevoir Lui-même,
Ses bras vous sont ouverts.

Refrain:
Oh! Quel beau jour, Sauveur fidèle,
Quand, nous appuyant sur ton bras,
Dans la demeure paternelle
Nous porterons nos pas!

2.
Venez, pécheurs, Il vous appelle,
Le bonheur est dans son amour.
Ah! Donnez-lui ce coeur rebelle,
Donnez-le sans retour.

3.
Le temps s'enfuit, l'heure s'écoule,
Qui sait si nous vivrons demain?
Jésus est ici dans la foule;
Ah! Saisissez sa main!

`,
  },
  {
    id: "249",
    title: "249- Regarde à Jésus, c’est la vie",
    lyrics: `1.
Regarde à Jésus, c’est la vie,
Contemple sa mort sur la croix;
Accepte de sa main meurtrie
Ton salut, ô mon frère, et crois.

2.
Mets en Lui seul ta confiance,
Crois à la force de son bras,
Il te donnera sa puissance,
Et par son Esprit tu vaincras.

3.
Cette paix que ton cœur réclame
Se trouve à l’ombre de la croix;
C’est un sûr abri pour ton âme
Que t’offre encor le Roi des rois.

4.
Regarde à Jésus, c’est la vie
Saisis ton salut éternel,
C’est à l’âme la plus flétrie
Qu’il ouvre la porte du ciel.

`,
  },
  {
    id: "250",
    title: "250- Connais- tu cette cité,",
    lyrics: `1.
Connais- tu cette cité,
La cité céleste?
Dans ses murs tout est clarté,
Plus d’ombre funeste.
Pèlerins et voyageurs,
Ici-bas dans les douleurs,
Toujours ce trésor nous reste,
La cité céleste.

2.
Connais- tu cette cité,
La cite bénie?
Où tout est félicité,
Sublime harmonie.
L’Agneau seul est son soleil,
Et son éclat sans pareil
Illumine et vivifie
La cité bénie.

3.
D’or, de perles et d’azur
Est notre patrie!
Connais-tu le fleuve pur,
L’arbre de la vie?
Plus de fardeaux à jamais,
Pour les élus tout est paix!
De Dieu la cité chérie
C’est notre patrie.

4.
O Salem, repos si doux,
Mon cœur te désire!
Après son Chef, son Epoux,
L’Eglise soupire!
Etre à toujours devant toi,
Mon Seigneur ! mon divin Roi!
Pour te chanter et te dire:
Mon cœur te désire.

`,
  },
  {
    id: "251",
    title: "251- Je ne sais pas le jour",
    lyrics: `1.
Je ne sais pas le jour
Où je verrai mon Roi,
Mais je sais qu’Il me veut
Dans sa sainte demeure ;
La lumière vaincra
Les ombres à cette heure;
Ce sera la gloire pour moi…

Refrain:
Ce sera la gloire pour moi…(bis)
La lumière vaincra
Les ombres à cette heure :
Ce sera la gloire pour moi.

2.
Je ne sais quels seront
Les chants des bienheureux,
Les accents, les accords
Des hymnes angéliques,
Mais je sais que, joignant
Ma voix aux saints cantiques,
Bientôt j’adorerai comme eux…

Refrain:
Bientôt j’adorerai comme eux…(bis)
Mais je sais que, joignant
Ma voix aux saints cantiques,
Bientôt j’adorerai comme eux.

3.
Je ne sais quel sera
Le palais éternel,
Mais je sais que mon âme
Y sera reconnue.
Un regard de Jésus
Sera ma bienvenue.
Pour moi, pour moi s’ouvre le ciel…

Refrain:
Pour moi, pour moi s’ouvre le ciel…(bis)
Un regard de Jésus
Sera ma bienvenue.
Pour moi, pour moi s’ouvre le ciel.

`,
  },
  {
    id: "252",
    title: "252- Seigneur, donne-moi des ailes",
    lyrics: `1.
Seigneur, donne-moi des ailes
Pour m’élever par la foi
Jusqu’aux rives éternelles,
Où je vivrai près de Toi.
C’est là-haut qu’est ma patrie.

Refrain:
Là-haut, là-haut, je trouve mon Sauveur.
Ensemble aux sources de la vie
Abreuvons tous notre cœur.

2.
Loin du monde et de ses charmes,
Du péché, de la douleur,
Loin des pleurs et des alarmes,
Je veux m’élever, Seigneur.
C’est là-haut qu’est ma patrie.

3.
Fais-moi des ailes de flamme
Pour porter en ces bas lieux
Ton salut aux pauvres âmes
Qui périssent loin des cieux.
Mais là-haut j’ai ma patrie.

[Refrain]`,
  },
  {
    id: "253",
    title: "253- Plus de pleurs, plus de faux sourire",
    lyrics: `1.
Plus de pleurs, plus de faux sourire
Sur l'autre bord! (bis)
Plus de terreurs, plus de délire,
Plus de luttes, plus de martyre,
Après la mort! (bis)
[Refrain]
Repos, amour au doux séjour!
De ta venue, ô Christ, hâte le jour!

2.
Plus de foudre, plus de nuage
Sur l'autre bord; (bis)
Plus de fleurs que brise l'orage,
Plus de bonheurs qui font naufrage,
Après la mort! (bis)

3.
Plus d'hiver, plus de froide bise
Sur l'autre bord; (bis)
Plus d'adieux où le coeur se brise,
Plus d'amis que le temps divise,
Après la mort! (bis)

4.
Bientôt, Seigneur, ce soir peut-être,
Sur l'autre bord, (bis)
De loin nous te verrons paraître
Pour nous recueillir, tendre Maître,
Avant la mort! (bis)`,
  },
  {
    id: "254",
    title: "254- Au ciel est la maison du Père",
    lyrics: `1.
Au ciel est la maison du Père,
Étincelante de beauté;
Tout en elle est gloire et lumière,
Ineffable félicité.

Refrain:
Vers le ciel, (bis)
Nous marchons vers le ciel.
C'est au ciel, (bis)
Qu'est notre héritage éternel.

2.
Là le bonheur est sans mélange,
Là le péché ne règne plus;
C'est l'amour et c'est la louange,
C'est la présence de Jésus.

3.
Dans nos fatigues sur la terre,
Dans nos combats et nos douleurs,
C'est toi, douce maison du Père
Que cherchent nos yeux et nos coeurs.

4.
Jours de peine ou jours d'allégresse,
Douce brise ou vents orageux,
Poussez-nous, poussez-nous sans cesse
Vers notre demeure des cieux.
`,
  },
  {
    id: "255",
    title: "255- Un jour je cesserai mes chants",
    lyrics: `1.
Un jour je cesserai mes chants,
Ma voix sera silencieuse…
Mais avec les saints triomphants,
Psalmodiera mon âme heureuse.

Refrain:
Je Le verrai, Lui, tel qu'Il est,
Jésus, le Rédempteur parfait! (bis 2 lignes)

2.
Un jour, je devrai sans retour
Quitter ma terresse demeure…
Mais l'entrée au divin séjour
Me sera donnée à cette heure.

3.
Un jour l'obscurité viendra,
La mort froide et silencieuse…
Mais là-haut Jésus me prendra
Dans sa lumière radieuse.

4.
Ce jour viendra, jour glorieux,
C'est là ma joyeuse assurance…
Seigneur, tiens-moi prêt pour les cieux,
Je mets en toi mon espérance.`,
  },
  {
    id: "256",
    title: "256- Contempler mon Dieu sur son trône,",
    lyrics: `1.
Contempler mon Dieu sur son trône,
Vivre avec Jésus dans le ciel,
Jeter à ses pieds ma couronne,
C’est là le bonheur éternel.

Refrain:
Dans le ciel (bis)
Vivre avec Jésus dans le ciel,
Dans le ciel (bis)
C’est là le bonheur éternel

2.
Unir ma voix aux chœurs des anges,
Bénir, louer Emmanuel,
Chanter à jamais ses louanges,
C’est là le bonheur éternel.

3.
Jouir d’une paix infinie,
Revoir mes amis dans le ciel,
Posséder l’immortelle vie,
C’est là le bonheur éternel.

4.
Retrouver les saints dans la gloire,
Près du trône de l’Éternel
Célébrer la même victoire,
C’est là le bonheur éternel.
`,
  },
  {
    id: "257",
    title: "257- Étranger sur la terre",
    lyrics: `1.
Étranger sur la terre,
Je marche avec bonheur
Vers la maison du Père,
Vers la maison où m'attend le Seigneur. (bis 2 lignes)

Refrain:
Oh! Quand sera-ce
Que, face à face,
Pour toujours près de toi,
Je te verrai, mon Roi!

2.
C'est là qu'au choeur des anges,
Pendant l'éternité,
J'unirai mes louanges
Pour donner gloire à ses fidélité. (bis 2 lignes)

3.
C'est là, devant le trône,
Qu'avec tous les élus
Je prendrai ma couronne,
Pour la jeter à tes pieds, ô Jésus! (bis 2 lignes)

4.
Ainsi, plein d'allégresse,
Conduit par ton amour,
Je veux marcher sans cesse
O mon Sauveur, vers ton divin séjour. (bis 2 lignes)`,
  },
  {
    id: "258",
    title: "258- Pour moi chrétien, la terre est un exil",
    lyrics: `1.
Pour moi chrétien, la terre est un exil
Mais tout est bien. (bis)
Il faut marcher de péril en péril;
Mais tout est bien. (bis)
Pourquoi les pleurs, la terreur ou l'ennui?
Christ est à moi demain comme aujourd'hui;
Au ciel bientôt je serai tout à lui.
Oui, tout est bien. (bis)

2.
Larmes, travail, deuil, tristesse ici-bas
Mais tout est bien. (bis)
De Canaan j'approche à chaque pas;
Oui, tout est bien. (bis)
En vain le monde et son charme trompeur
Dans ses liens veut retenir mon coeur;
J'avance en paix, les yeux sur mon sauveur,
Oui, tout est bien. (bis)

3.
Encore un jour, et j'atteindrai le but;
Oui, tout est bien. (bis)
Et je verrai le pays du salut;
Oui, tout est bien. (bis)
Encore un jour, le monde va passer.
O pèlerin, marche sans te lasser;
Bientôt en Dieu tu vas te reposer.
Oui, tout est bien. (bis)`,
  },
  {
    id: "259",
    title: "259- Frère, quand ton âme est lassée",
    lyrics: `1.
Frère, quand ton âme est lassée,
Oh! Pense au royaume des cieux!
Élève, élève ta pensée
Vers ce séjour des bienheureux.

Refrain:
Vers les cieux, (bis)
Oh! Pense au royaume des cieux.
Vers les cieux, (bis)
Oh! Pense au royaume des cieux.

2.
Ce royaume, c'est ta patrie,
Jésus-Christ t'en fit citoyen;
Elle ne peut être ravie,
Marche donc en paix, ô chrétien.

3.
Là-haut s'épanouit la vie
Au sein de l'immortalité.
La justice, au bonheur unie,
Fleurit toute l'éternité.

Refrain:
Dans les cieux, (bis)
Oh! Pense au royaume des cieux!
Dans les cieux, (bis)
Oh! Pense au royaume des cieux.

4.
Quelques jours d'épreuves encore,
Et puis, traversant le tombeau,
Tu verras resplendir l'aurore
D'un jour sans fin, d'un jour nouveau.

Refrain:
Dans les cieux, (bis) `,
  },
  {
    id: "260",
    title: "260- Oh! Quel beau jour, où, devant sa face",
    lyrics: `1.
Oh! Quel beau jour, où, devant sa face,
Tous tes rachetés apparaîtront,
Tu verras resplendir l'aurore
D'un jour sans fin, d'un jour nouveau.

Refrain:
Nombreux comme le sable des plages! (bis)
Oh! Que ce sera beau,
Lorsque nous irons là-haut,
Aussi nombreux que le sable des plages!

2.
Je la vois, cette armée innombrable,
Ses rangs reflétant l'éclat des cieux,
Tressaillant d'un bonheur ineffable,
Sur le seuil du séjour radieux.

3.
De son trône éclatant de lumière,
J'entends la douce voix du Seigneur:
« Venez, vous bien-aimés de mon Père,
La couronne est à chaque vainqueur. »

4.
Puis, au sein du vaste océan d'anges,
Nos cohortes déversent leurs flots;
L'univers tremble au son des louanges;
Plus de combats, de pleurs, de sanglots.


 `,
  },
  {
    id: "261",
    title: "261- L’aube naît, sourit et passe",
    lyrics: `1.
L’aube naît, sourit et passe;
De ses feux, le Roi du jour
Inonde un instant l’espace
Pour disparaître à son tour.
Mais, dans la nuit solennelle,
Un désir s’éveille en moi:
Quand luira l’aube éternelle?
Divin Soleil, lève-toi!

2.
Ici-bas, toute espérance;
Cache derrière elle un deuil;
Toute joie, une souffrance
Et toute vertu, l’orgueil.
Mais au ciel, bonheur suprême!
Au ciel, plus d’espoirs déçus!
Je verrai le Dieu que j’aime,
Et ne l’offenserai plus.

3.
Ah! déchire tous les voiles
Qui te cachent à mes yeux,
Et d’étoiles en étoiles
Monteront mes chants joyeux!
Mais qu’ici-bas j’abandonne
Mon âme à tes douces lois,
Qu’en attendant la couronne,
Je sache porter la croix.

`,
  },
  {
    id: "262",
    title: "262- Serrons nos rangs autour de notre Maître",
    lyrics: `1.
Serrons nos rangs autour de notre Maître,
Soyons unis, la victoire est à nous!
Par notre amour, faisons à tous connaître
De notre Dieu combien le joug est doux.

Refrain:
Frères, frères, son nom est amour;
Frères, frères, aimons-nous toujours!

2.
C'est par amour qu'Il entra dans nos âmes
C'est par amour qu'Il lave nos péchés;
Nous embrasant d'une céleste flamme,
Que son amour nous retienne attachés.

3.
Amour, amour! Insondable mystère
Qui nous unit, et tous ensemble à Dieu!
Amour, amour! Si doux sur cette terre,
Amour, amour! Oh! Que sera-ce aux cieux!

`,
  },
  {
    id: "263",
    title: "263- Ah! Qu’il est beau de voir des frères",
    lyrics: `1.
Ah! Qu’il est beau de voir des frères
D’un même amour unis entre eux!
Esprit de Dieu, tu les éclaires,
Tu les embrases de tes feux.
Leurs chants pieux et leurs prières
Comme un encens montent aux cieux. (bis 2 lignes)

2.
O Rédempteur, en ta présence,
Dans ta sainte communion,
Ils savourent la jouissance
D’une céleste affection.
Aussi leurs cœurs en assurance
T’offrent leur adoration. (bis 2 lignes)

3.
Dans tous les lieux la même vie
Anime tous tes rachetés,
Partout leur âme est réjouie
De tes douces gratuités.
Oui, ton Eglise est enrichie
De tes magnifiques bontés. (bis 2 lignes)

4.
Répands sur nous, Dieu charitable!
Ton Esprit de grâce et de paix.
Accueillis à la même table
Et goûtant les mêmes bienfaits;
Qu’un amour saint et véritable
Nous unisse en toi pour jamais. (bis 2 lignes)`,
  },
  {
    id: "264",
    title: "264- Béni soit le lien",
    lyrics: `1.
Béni soit le lien
Qui nous unit en Christ,
Le saint amour, l'amour divin
Que verse en nous l'Esprit!

2.
Au ciel, vers notre Dieu,
Avec joie et ferveur,
S'élèvent nos chants et vœux,
Parfum doux au Seigneur.

3.
Nous mettons en commun
Nos fardeaux, nos labeurs;
En Jésus nous ne sommes qu'un
Dans la joie et les pleurs!

4.
Si nous devons bientôt
Quitter ces lieux bénis,
Nous nous retrouverons là-haut,
Pour toujours réunis.`,
  },
  {
    id: "265",
    title: "265- Voici de tes enfants",
    lyrics: `1.
Voici de tes enfants,
Seigneur, une poignée.
Seuls, nous ne pouvons rien
Contre tes ennemis,
Mais, au contact du mal
Notre âme est indignée;
Nous voulons voir ta cause
En tous les cœurs gagnée
Et sous ton étendard
Le monde entier soumis.

2.
Nous avons dans nos cœurs
Une vive espérance,
Oui, nous croyons aux temps
Glorieux et nouveaux
Où nul ne connaîtra
Ni larmes, ni souffrance,
Et nous voulons hâter
Ce jour de délivrance:
O Dieu, daigne bénir
Nos vœux et nos travaux!

3.
Viens, et nous te suivrons,
O notre Capitaine!
Viens, et de ton Esprit
Par Toi-même embrasés,
Unis dans ton amour,
Nous marcherons sans peine.
La victoire avec Toi
Nous paraîtra certaine,
Les sentiers les plus durs
Nous deviendrons aisés!`,
  },
  {
    id: "266",
    title: "266- O Seigneur, bénis la parole",
    lyrics: `1.
O Seigneur, bénis la parole
Que nous venons d’ouïr.
Ne permets pas qu’elle s’envole
De notre souvenir!

2.
Jaloux de ta sainte influence,
Trop souvent le Malin
Accourt, et ravit la semence
Que répandit ta main.

3.
Trop souvent elle est sans racine
En un terrain pierreux;
Le soleil vient: elle décline
Sous l’ardeur de ses feux.

4.
Trop souvent les soucis du monde
Ou ses biens sans valeur
Détruisant sa vertu féconde,
L’étouffent dans le cœur.

5.
Ah! plutôt que ton Evangile
S’emparant de nos cœurs,
Ces quelques grains en donnent mille
A ta gloire, ô Seigneur!`,
  },
  {
    id: "267",
    title: "267- Unissons nos cœurs et nos voix",
    lyrics: `1.
Unissons nos cœurs et nos voix
Pour célébrer le Roi de rois
Qui mourut pour nous sur la croix,
Victime expiatoire!

Refrain:
Béni soit le jour de Seigneur,
Jour de triomphe et de bonheur!
Que partout monte en son honneur
Un hymne de victoire!

2.
Il vit, Il est ressuscité!
Rayonnant d’immortalité!
Du sépulcre Il est remonté
Vers son trône, de gloire!

3.
Du haut de son trône, Il sourit
Au pécheur qui pleure contrit:
Et la clarté de son Esprit
Dissipe la nuit noire.


`,
  },
  {
    id: "268",
    title: "268- Oh! que ton service est aimable",
    lyrics: `1.
Oh! que ton service est aimable,
Seigneur, mon Dieu, mon Rédempteur!
Oh! qu’il m’est cher et désirable!
Il est ma joie et ma douceur.
Mon âme ici dans le silence
En t’adorant trouve ta paix;
Et ton Esprit, de ta présence,
Me fait sentir les saints effets.

2.
Puissant Sauveur, tu te rappelles
Que tu promis d’être en tout lieu
Où quelques-uns de tes fidèles
S’assemblent au nom de leur Dieu.
Nous sommes donc devant ta face:
Oui, tu nous vois, tu nous entends;
Ah! que le regard de ta grâce
Repose sur nous tes enfants!

3.
Quoi! je me trouve en ta lumière!
Tes yeux, ô mon Dieu, sont sur moi;
Ton oreille entend ma prière
Et mon chant monte jusqu’à Toi!
Oh! quels transports donne à mon âme
Le sentiment de ta bonté!
Ah! que mon cœur aussi s’enflamme
Des saints feux de ta charité.

4.
Oui, dans mon âme je t’adore,
Mon Dieu, mon Seigneur, mon rocher
Je t’ai trouvé, je veux encore
De ton regard me rapprocher.
Quel autre au ciel pourrait me plaire
Que toi, mon fidèle Sauveur?
Quel autre pourrait sur la terre
Répondre aux besoins de mon cœur?`,
  },
  {
    id: "269",
    title: "269- Jour du Seigneur",
    lyrics: `1.
Jour du Seigneur,
J'ouvre mon coeur
A ta douce lumière:
Jour solennel,
A l'Éternel
Consacre ma prière.

2.
Dieu tout-puissant,
Dieu bienfaisant,
J'ai besoin de ta grâce.
Éclaire-moi,
Soutiens ma foi;
Je viens chercher ta face.

3.
Ta vérité,
Ta charité,
Brillent dans ta Parole.
Seule elle instruit,
Guide et conduit
Notre âme, et la console.

4.
J'entends ta voix;
Tes saintes lois
Ne sont pas difficiles.
Viens les graver,
Les conserver
Dans des âmes dociles.

5.
Que ton Esprit,
O Jésus-Christ,
Règne seul en notre âme!
Que ton amour,
Et nuit et jour,
L'embrase de sa flamme!
`,
  },
  {
    id: "270",
    title: "270- L'astre à l'horizon descend",
    lyrics: `1.
L'astre à l'horizon descend,
Sur les monts l'ombre s'étend,
Veillons pendant que la nuit
Au ciel allume sans bruit
Ses lampes d'or.

Refrain:
Gloire, gloire à l'Éternel,
Au Dieu de paix,
Sur la terre et dans le ciel
Tout te loue, Emmanuel,
Pour tes bienfaits.

2.
Tandis que s'éteint le jour,
La prière, ô Dieu d'amour,
Vers ton saint trône voilé,
Au fond du ciel étoilé,
Prend son essor.

3.
Dans ton Église, en tous lieux,
Seigneur, sous les vastes cieux,
Rassemble tous tes enfants;
Rends-les courageux, vaillants
Sous ton drapeau.

4.
Quand tu reviendra, Jésus,
Quand le mal ne sera plus,
Tu feras luire à nos yeux
L'aube du jour radieux
Qui luit là-haut.`,
  },
  {
    id: "271",
    title: "271- Rois des rois, Eternel, mon Dieu!",
    lyrics: `1.
Rois des rois, Eternel, mon Dieu!
Que ton tabernacle est un lieu
Sur tous les autres lieux aimable!
Mon cœur languit, mes sens ravis
Ne respirent que tes parvis
Et que ta présence adorable;
Mon âme, vers Toi s’élevant,
Cherche ta face, ô Dieu vivant!

2.
Hélas! Seigneur, le moindre oiseau
L’hirondelle ou le passereau,
Trouve son nid et sa retraite;
Et moi, dans mes ennuis mortels,
Je languis loin de tes autels;
C’est en vain que je m’y souhaite.
Heureux qui peut, dans ta maison,
Te louer en toute saison!

3.
Qui veut en Toi se confier
T’a pour soleil, pour bouclier;
Tu donnes la grâce et la gloire;
Tu couronnes l’intégrité
D’honneur et de félicité,
Au-delà de ce qu’on peut croire.
Oh ! mille et mille fois heureux
Celui qui t’adresse ses vœux!`,
  },
  {
    id: "272",
    title: "272- Jour de repos, jour du Seigneur",
    lyrics: `1.
Jour de repos, jour du Seigneur,
Nos âmes te bénissent
Quand, après six jours de labeur,
Tous nos travaux finissent.
Laisse là tes outils,
Tes calculs, tes soucis,
O foule humaine!
Dieu rompt ta lourde chaîne;
Tu peux ployer tes bras meurtris.

2.
De ce jour qui fait tant d’heureux,
Sachons donner une heure
Aux malades, aux malheureux,
A ceux dont le cœur pleure.
Nous aurons imité
La sainte activité
De notre Maître,
O saint jour, tu dois être
La fête de la charité!

3.
Qu’on s’en souvienne pour t’aimer,
O Dieu, plein de clémence,
Et, dans tous les cœurs, pour semer
La divine semence!
Dans les temples remplis
D’auditeurs recueillis,
Qu’on fasse entendre
Ton appel doux et tendre
Aux pécheurs sauvés par ton Fils!`,
  },
  {
    id: "273",
    title: "273- Qu’aujourd’hui toute la terre",
    lyrics: `1.
Qu’aujourd’hui toute la terre
S’égaie au nom du Seigneur;
Qu’à Dieu monte sa prière,
Par Jésus, le Rédempteur.

2.
Qu’aujourd’hui son Evangile
En tous lieux soit publié;
Qu’à porter son joug facile
Tout pécheur soit convié!

3.
Qu’aujourd’hui remplis de joie
A la voix de l’Eternel,
Bien des cœurs trouvent la voie
Qui, d’ici, conduit au ciel!

4.
Qu’aujourd’hui, comme Marie,
A tes pieds, ô mon Sauveur,
Je t’écoute et je te prie
Et te reçoive en mon cœur!`,
  },
  {
    id: "274",
    title: "274- Toi dont l’âme est tourmentée",
    lyrics: `1.
Toi dont l’âme est tourmentée
Aux approches de la mort,
Toi dont la nef ballottée
Ne sait où trouver le port,
Regarde à travers tes larmes,
Ce phare, qui tant de fois
A brillé dans tes alarmes:
C’est la croix! C’est la croix!

2.
O toi qu’assaille le doute,
Toi que le monde a séduit,
Toi qui marches sur la route
Dans la nuit et vers la nuit,
Même en doutant, prie, adore
Celui qui meurt sur le bois;
Regarde, oh! regarde encore
Vers la croix ! Vers la croix!

3.
Sur la croix où Christ expire,
La mort succombe avec lui:
C’en est fait de son empire,
Le jour de la vie a lui!
Péchés, doutes et souffrance
Demeurent cloués au bois:
O sublime délivrance
De la croix! De la croix!

4.
A tes pieds, ô croix bénie,
Signe auguste et méprisé
De triomphe et d’agonie,
J’apporte mon cœur brisé.
Désormais, sois ma bannière!
Je veux vivre sous tes lois
Et mourir sous ta lumière,
Sainte croix! Sainte croix!`,
  },
  {
    id: "275",
    title: "275- Oh! Viens à moi, ton Sauveur et ton frère",
    lyrics: `1.
Oh! Viens à moi, ton Sauveur et ton frère,
Je donnerai, pèlerin, à ton coeur,
Tous mes trésors au lieu de ta misère
Et mon repos au sein de ton labeur!

Refrain:
Oh! Viens à moi! (ter)
Mon repos est pour toi. (ter)

2.
La paix pour toi, et plus d'inquiétude!
Tout tes péchés, oh! Viens les déposer
Devant la croix, remède à toute chute,
Viens sur mon coeur, enfin, te reposer!

Refrain;
Oh! Viens à moi! (ter)
Ma paix, elle est pour toi. (ter)

3.
Accours vers Moi, si tu te sens coupable
Si du péché tu crains le châtiment;
Ne sais-tu pas, vérité redoutable,
Qu'après la mort suivra le jugement?

Refrain:
Oh! Viens à moi! (ter)
Mon pardon est pour toi! (ter)`,
  },
  {
    id: "276",
    title: "276- Voici, je me tiens",
    lyrics: `1.
Voici, je me tiens
A la porte de l’âme,
Je frappe sans cesse
Avec divin espoir.
Si quelqu’un m’entend,
S’il m’ouvre et me réclame,
Chez lui j’entrerai,
J’y souperai ce soir.

Refrain:
Ouvre, ouvre- moi !
Si quelqu’un m’ouvre la porte,
Je soupe avec lui ce soir (bis 2 lignes)

2.
Je frappe au matin,
Quand toute la nature
Nous parlons d’un Père
Et tendre la nature et tout-puissant.
Je frappe à midi,
Quand la moisson est mûre,
Révélant l’amour
D’un Dieu si prévoyant.`,
  },
  {
    id: "277",
    title: "277- Sans un Dieu puissant pour Père,",
    lyrics: `1.
Sans un Dieu puissant pour Père,
Que ferez-vous? (bis)
Sans un Dieu Sauveur pour Frère,
Que ferez-vous? (bis)
Pécheurs, l'âme est immortelle,
Sans Dieu que deviendra-t-elle?
Voici l'heure solennelle:
Que ferez-vous? (bis)

2.
Possédez-vous un refuge?
Que ferez-vous? (bis)
En présence du grand Juge,
Que ferez-vous? (bis)
Vieillards que la mort talonne,
Jeunes gens que rien m'étonne,
Pécheurs que la mort moissonne,
Que ferez-vous? (bis)

3.
Frères, reprenez courage,
Espérez tous! (bis)
Jésus apporte un message,
Il est pour vous. (bis)
Que la mort se change en fête,
Christ a payé votre dette!
Pour célébrer sa conquête,
Unissons-nous, et chantons tous:

4.
Par l'amour de Dieu le Père,
Je suis sauvé! (bis)
Par le sang de Christ, mon Frère,
Je suis lavé! (bis)
Plus de douleur, plus de plainte,
Plus de chagrin, de contrainte.
Chante, mon coeur! Sois sans crainte!
Je suis sauvé! (bis)`,
  },
  {
    id: "278",
    title: "278- Venez à Celui qui pardonne",
    lyrics: `1.
Venez à Celui qui pardonne
Aux pécheurs qui n’espéraient plus!
C’est aux plus pauvres qu’il se donne.
Il peut sauver les plus perdus.
Son sang, répandu pour le monde,
Peut seul effacer et blanchir;
Ce que l’océan, sous son onde,
Ne ferait pas même pâlir!

2.
Venez à Celui qui relève
Ceux qu’on vit descendre si bas
Que leur salut paraît un rêve
Dont on rit et qu’on ne croit pas.
Sur la pécheresse qui pleure,
Il imprima son sceau divin;
Le brigand, à la dernière heure,
N’implora pas sa grâce en vain.

3.
Venez à Celui qui console
Les inconsolables douleurs.
Venez apprendre à son école
L’art divin de sécher les pleurs.
Comme il a répandu des larmes,
Il peut aussi les essuyer;
Et la douleur lui rend les armes,
Car il a souffert le premier.
`,
  },
  {
    id: "279",
    title: "279- À genoux devant toiSi vous saviez quel Sauveur je possède!",
    lyrics: `1.
Si vous saviez quel Sauveur je possède!
Il est l'ami le plus tendre de tous;
Pour moi devant le Père Il intercède:
Oh! Je voudrais qu'Il fût aussi pour vous!

Refrain:
Mon Sauveur vous aime;
Ah! Cherchez en Lui
Votre ami suprême,
Votre seul appui!

2.
Si vous saviez la paix douce et profonde
Que le Sauveur en mon âme apporta!
Pour cette paix que peut donne le monde?
Elle jaillit pour vous de Golgotha.

3.
Si vous saviez quelle douce espérance
Le Dieu de paix fait rayonner des cieux!
Combien sa voix sait calmer la souffrance
Et son regard rendre le coeur joyeux!

4.
Quand vous saurez combien Jésus vous aime,
Quand vous saurez combien son joug est doux,
Ne gardez pas ce trésor pour vous-même,
Mais avec moi, dites autour de vous:`,
  },
  {
    id: "280",
    title: "280- De Jésus, entends-tu la voix",
    lyrics: `1.
De Jésus, entends-tu la voix,
Divin appel d'amour?
O mon frère, Il s'adresse à toi,
Divin appel d'amour!
Doux message de grâce,
Christ tes péchés efface:

Refrain:
Joyeux appel, divin appel,
Divin appel d'amour! (bis 2 lignes)

2.
Il t'appelle encore, ô pécheur!
Divin appel d'amour!
Viens, mon fils, viens à ton Sauveur:
Divin appel d'amour!
Son amour te réclame,
Il veut guérir ton âme;

3.
A sa voix, qui peut résister?
Divin appel d'amour!
Il s'est donné pour nous sauver,
Divin appel d'amour!
O Jésus, notre Maître,
A toi nous voulons être;`,
  },
  {
    id: "281",
    title: "281- Sans fruit, sans fruit!",
    lyrics: `1.
Sans fruit, sans fruit!
Passé détruit,
Regrets, tourments stériles,
Combats vainement soutenus,
Voeux formés et jamais tenus,
Tant d'efforts inutiles
Sans un seul fruit! (bis)

2.
Sans fruit, sans fruit!
Être réduit,
A vivre sur la terre
Sans loi, sans but; s'user, vieillir,
Semer le vent, ne recueillir
Que trouble et misère,
Sans un seul fruit! (bis)

3.
Toujours sans fruit!
Voici la nuit;
Jésus, le divin Maître,
Sur son tribunal est monté.
Aux yeux de ce Juge irrité,
Comment oser paraître
Sans un seul fruit! (bis)`,
  },
  {
    id: "282",
    title: "282- Écoutez la Bonne Nouvelle,",
    lyrics: `1.
Écoutez la Bonne Nouvelle,
Vous qui n'espérez plus!
Dieu donne la vie éternelle
Par le sang de Jésus.

Refrain:
Amour divin, amour sublime!
Pour nous le Roi des rois
Quitta les cieux, sainte victime,
Et mourut sur la croix.

2.
La coupe amère de souffrance
Que le Rédempteur
Est la coupe de délivrance
Pour le pauvre pécheur.

3.
Il a remporté la victoire
Pour nous rendre vainqueurs,
Plutôt qu'au ciel, Il met sa gloire
A vivre dans nos coeurs.

4.
Pourquoi, mon frère, craindre encore?
Vers Christ, lève les yeux!
Sur nous, Il fait briller l'aurore
Du matin glorieux.
`,
  },
  {
    id: "283",
    title: "283- Demain, peut-être",
    lyrics: `1.
Demain, peut-être,
Je te croirai,
Et pour mon Maître
Je te prendrai.
Ainsi, quand Dieu l'invite,
L'âme réponds: « Attends! »
Ah! Pécheur, entre vite!
Viens, il est temps!

2.
Demain, peut-être,
Plus de pardon!
Quoi! Méconnaître
Un pareil don!
Dieu t'offre, dans sa grâce,
Le bonheur des élus;
Avant que l'heure passe,
Viens à Jésus!

3.
Demain, peut-être,
Du châtiment
Tu vas connaître
L'affreux tourment.
Jésus t'appelle, Il t'aime;
Il est le seul chemin;
Viens, c'est l'instant suprême!
Pourquoi demain?`,
  },
  {
    id: "284",
    title: "284- Quelqu'un frappe à votre porte:",
    lyrics: `1.
Quelqu'un frappe à votre porte:
Ouvrez-Lui! Ouvrez-Lui aujourd'hui!
C'est le ciel qu'il vous apporte:
Ouvrez-Lui! Ouvrez-Lui aujourd'hui!
Chez vous Il veut prendre place;
Ouvrez avant qu'Il se lasse!
Le temps presse, le temps passe;
Ouvrez-Lui! Ouvrez-Lui aujourd'hui!

2.
Ouvrez! C'est lui qui pardonne:
Ouvrez-Lui! Ouvrez-Lui aujourd'hui!
Acceptez tous ceux qu'il donne:
Ouvrez-Lui! Ouvrez-Lui aujourd'hui!
Sa main va briser vos chaînes:
Ses promesses sont certaines;
Bientôt finiront vos peines:
Ouvrez-Lui! Ouvrez-Lui aujourd'hui!

3.
Seul Il ôte les souillures:
Ouvrez-Lui! Ouvrez-Lui aujourd'hui!
Seul Il guérit les blessures:
Ouvrez-Lui! Ouvrez-Lui aujourd'hui!
Quand la mort va vous surprendre,
Seul Il pourra vous défendre,
Et sous son aile vous prendre:
Ouvrez-lui! Ouvrez-Lui aujourd'hui!`,
  },
  {
    id: "285",
    title: "285- Où cherchez-vous le bonheur",
    lyrics: `1.
Où cherchez-vous le bonheur,
Dans ce monde où tout passe?
Avez-vous en votre coeur
Pour Jésus une place?
A votre porte il se tient;
Sans se lasser, il revient…
Pour Jésus, votre Sauveur,
N'avez-vous point de place?

Refrain:
N'avez-vous point de place (bis)
Pour Jésus, votre Sauveur,
N'avez-vous point de place?

2.
S'Il a souffert, c'est pour vous,
Oh! Merveilleuse grâce!
Lorsqu'Il luttait à genoux,
Dieu lui voilant sa face!
Ah! De sa sublime croix,
N'entendez-vous pas la voix,
Qui vous dit: Pauvre pécheur,
N'as-tu donc point de place?

3.
Si le monde a votre coeur,
Croyez-vous donc qu'Il fasse
Jusqu'au bout votre bonheur?
Vous savez que tout passe!
Oh! Pendant qu'il est temps,
Écoutez les doux accents
De la voix du grand Vainqueur,
Et faites-lui donc place!`,
  },
  {
    id: "286",
    title: "286- Pécheur, je voudrais te guérir",
    lyrics: `1.
Pécheur, je voudrais te guérir;
J'ai vu tes larmes, ta souffrance,
Mais pour avoir la délivrance,
Il faut apprendre à m'obéir.
Voici, je me tiens à la porte,
Je suis ton Maître et ton Sauveur;
C'est le bonheur que je t'apporte:
Ne veux-tu pas m'ouvrir ton coeur?

2.
Sais-tu que je suis né pour toi,
Que pour toi j'ai donné ma vie?
Ton coeur est-il l'hôtellerie
Sans place, même pour ton Roi?
Souvent, année après année,
Chez toi j'ai frappé, mais en vain.
Voici le soir de la journée,
Ne veux-tu pas m'ouvrir enfin?

3.
N'auras-tu pas besoin de moi,
Bientôt, dans la nuit éternelle?
Dès aujourd'hui, viens sous mon aile,
Je serai tout, oui, tout pour toi.
Le temps rapidement t'emporte;
Pourquoi renvoyer à demain?
Trop tard, un jour, devant ma porte,
Tu frapperas peut-être, en vain…

4.
Si tu n'as pas besoin de Moi,
Écoute, obéis sans comprendre:
Jusques à quand devrai-je attendre?
Ton Seigneur a besoin de toi.
Voici, je me tiens à la porte.
Je suis ton Maître et ton Sauveur;
C'est le bonheur que je t'apporte;
Ne veux-tu pas m'ouvrir ton coeur?`,
  },
  {
    id: "287",
    title: "287- Viens au Père qui t'appelle",
    lyrics: `1.
Viens au Père qui t'appelle,
Oh! Reviens à la maison!
Voici, l'heure est solennelle,
Où Dieu t'offre son pardon.

Refrain:
Aujourd'hui, viens à Lui!
Ah! Pourquoi tarderais-tu?
Aujourd'hui, viens à Lui,
Viens, reçois son grand salut!

2.
Trop longtemps dans la misère,
Tu vécus sans vrai bonheur!
Se peut-il que tu préfères,
Fuir encore loin du Sauveur?

3.
Ah! Ton âme est angoissée!
En vain tu chercheras la paix;
Par sa croix qui fut dressée,
Christ la donne et pour jamais.

4.
A Jésus dis ta souffrance,
Parle-Lui de ton péché,
Mets en Lui ton espérance,
Car en Lui Dieu t'a cherché.`,
  },
  {
    id: "288",
    title: "288- Viens, âme qui pleures",
    lyrics: `1.
Viens, âme qui pleures,
Viens à ton Sauveur;
Dans tes tristes heures,
Dis-lui ta douleur…
Dis tout bas ta plainte
Au Seigneur Jésus…
Parle-lui sans crainte,
Et ne pleure plus.

2.
Dis tout à ce frère,
A ce tendre ami,
Ton épreuve amère,
Ton deuil, ton souci
Il aime, il console
Les cœurs abattus ;
Crois à sa parole,
Et ne pleure plus!

3.
Dis à d’autres âmes
Ployant sous le faix,
Que tu les réclames
Pour le Dieu de paix.
Calme leurs alarmes,
Montre-leur Jésus;
Va sécher leurs larmes,
Et ne pleure plus!`,
  },
  {
    id: "289",
    title: "289- O vous qui n’avez pas la paix",
    lyrics: `1.
O vous qui n’avez pas la paix,
Venez, Jésus la donne,
Pure, profonde et pour jamais,
Venez, Jésus, pardonne.
Quand Jésus remplit un cœur,
Il déborde de bonheur,
Et l’effroi ne l’atteint plus:
Gloire, gloire à Jésus!

2.
Vous qui tombez à chaque pas,
Venez, Jésus délivre;
Celui qui se jette en ses bras
Peut à toujours le suivre.
Quand Jésus remplit un cœur,
Il déborde de bonheur,
Car il ne chancelle plus:
Gloire, gloire à Jésus!

3.
Vous qui tremblez sous la terreur
Que la mort vous inspire,
Venez, votre Libérateur
A détruit son empire!
Avec Lui nous revivrons,
Avec Lui nous régnerons,
Et la mort ne sera plus:
Gloire, gloire à Jésus!`,
  },
  {
    id: "290",
    title: "290- Entends-tu? Jésus t'appelle",
    lyrics: `1.
Entends-tu? Jésus t'appelle;
Viens, ô pécheur, Il t'attend…
A cette voix si fidèle
Tu résista trop souvent.

Refrain:
Laisse entrer le Roi de gloire;
Ouvre ton coeur à Jésus!
Laisse entrer le Roi de gloire,
Hâte-toi, ne tarde plus.

2.
Pour le péché, pour le monde,
Tu trouves place en ton coeur…
Point pour le Sauveur du monde,
Rien pour l'Homme de douleur!

3.
Jésus frappe, Il frappe encore;
Ouvre à ton Libérateur,
Et pour toi luira l'aurore
Du véritable bonheur.

4.
Aujourd'hui, c'est jour de grâce;
Ne compte pas sur demain.
Pendant que ton Sauveur passe,
Saisis sa puissante main!`,
  },
  {
    id: "291",
    title: "291- Venez, coeurs souffrants et meurtris",
    lyrics: `1.
Venez, coeurs souffrants et meurtris;
Au Médecin de l'âme.
Par Jésus vous serez guéris;
Que votre voix l'acclame:

Refrain:
Nom célébré par les élus,
Adoré par les anges,
Thème éternel de nos louanges,
Jésus! Jésus! Jésus!

2.
En Christ nous sommes pardonnés;
C'est la Bonne Nouvelle.
Par Lui les cieux nous sont donnés,
Et la vie éternelle.

3.
Vous tous qui souffrez isolés,
Venez, Jésus vous aime;
Pour le troupeaux des désolés,
Il s'est offert Lui-même.

4.
D'un seul coeur, d'une seule voix,
Exaltons sa victoire;
Et, dans le ciel, du Roi des rois
Nous redirons la gloire.`,
  },
  {
    id: "292",
    title: "292- Jésus t'appelle, oh! Viens et vois",
    lyrics: `1.
Jésus t'appelle, oh! Viens et vois
Ton Sauveur cloué sur la croix;
Pour toi, le Souverain des cieux
Vint verser son sang précieux.

Refrain:
Jésus sauve, Jésus sauve,
Jésus sauve aujourd'hui,
Tous ceux qui viennent, (bis)
Tous ceux qui viennent à Lui. (bis 4 lignes)

2.
Jésus t'appelle: oh! Cette voix,
N'a-t-elle aucun charme pour toi?
Ne veux-tu donc pas revenir
A Celui qui veut te bénir?

3.
Jésus t'appelle, Il te connaît;
Tu fus rebelle, Il le savait
Il veut purifier ton coeur
Et te donner le vrai bonheur.

4.
Jésus t'appelle, oh! Réponds-Lui;
Que ton coeur s'ouvre à ton Ami;
Pour te sauver, Il vint mourir,
Il veut t'aimer et te bénir!`,
  },
  {
    id: "293",
    title: "293- Viens à Jésus, Il t’appelle",
    lyrics: `1.
Viens à Jésus, Il t’appelle;
Il t’appelle aujourd’hui;
Trop longtemps tu fus rebelle,
Aujourd’hui, viens à Lui!

2.
Jésus t’aime, Jésus t’aime,
Jésus t’aime aujourd’hui.
Malgré ta misère extrême,
Aujourd’hui, viens à Lui!

3.
Il pardonne, Il pardonne
Il pardonne aujourd’hui.
Reçois le salut qu’il donne;
Aujourd’hui, viens à Lui.`,
  },
  {
    id: "294",
    title: "294- Coeurs fatigués et lassés du péché",
    lyrics: `1.
Coeurs fatigués et lassés du péché,
Assez souffert! Assez cherché!
Je puis donner la paix et le repos,
Me charger de vos fardeaux.

Refrain:
Venez à Lui…(bis)
Venez à Jésus,
Venez à Jésus aujourd'hui!

2.
Venez tous, pécheurs condamnés par la loi,
Venez à moi! Venez à moi!
Vous recevrez en vos coeurs dès ce jour
Le pardon du Dieu d'amour.

3.
Vous qui souffrez, par le mal asservis,
Soyez par moi, tous affranchis,
Oh! Venez tous, travaillés et chargés,
Et vous serez soulagés.

`,
  },
  {
    id: "295",
    title: "295- Tel que je suis, sans rien à moi",
    lyrics: `1.
Tel que je suis, sans rien à moi,
Sinon ton sang versé pour moi,
Et ta voix qui m’appelle à toi,
Agneau de Dieu, je viens! je viens!

2.
Tel que je suis, bien vacillant,
En proie au doute à chaque instant,
Lutte au dehors, crainte au dedans,
Agneau de Dieu, je viens! je viens!

3.
Tel que je suis, ton cœur est prêt
A prendre le mien tel qu’il est,
Pour tout changer, Sauveur parfait!
Agneau de Dieu, je viens! je viens!

4.
Tel que je suis, ton grand amour
A tout pardonné sans retour,
Je veux être à toi dès ce jour;
Agneau de Dieu, je viens! je viens!`,
  },
  {
    id: "296",
    title: "296- Seigneur, je n'ai rien à t'offrir",
    lyrics: `1.
Seigneur, je n'ai rien à t'offrir
Qu'un coeur fatigué de souffrir,
Et qui, sans toi, ne peut guérir:
Je n'ai que ma misère.

Refrain:
Prends-moi tel que je suis,
Sans vertus, sans appuis,
Tel que je suis, tel que je suis,
O mon céleste Frère!

2.
J'ai transgressé ta sainte loi;
Le péché vainqueur règne en moi;
Pour me présenté devant Toi,
Je n'ai que ma souillure.

Refrain:
Prends-moi tel que je suis,
Sans vertus, sans appuis,
Tel que je suis, tel que je suis,
Lave mon âme impure!

3.
Faible est ma chair, faible est mon coeur;
Pour repousser le tentateur,
O mon divin Libérateur!
Je n'ai que ma faiblesse.

Refrain:
Prends-moi tel que je suis,
Sans vertus, sans appuis,
Tel que je suis, tel que je suis,
Subviens à ma détresse!

4.
Ton sang versé me blanchira,
Ton Saint-Esprit m'affranchira,
Ta richesse m'enrichira,
O mon céleste Maître!

Refrain:
Prends-moi, faible et pécheur,
Sans vertus ni vigueur;
O mon Sauveur,
Rends-moi vainqueur,
Et tel que je dois être!`,
  },
  {
    id: "297",
    title: "297- Tel que je suis, pécheur rebelle",
    lyrics: `1.
Tel que je suis, pécheur rebelle,
Au nom du sang versé pour moi,
Au nom de ta voix qui m’appelle,
Jésus je viens à Toi!

2.
Tel que je suis, dans ma souillure,
Ne cherchant nul remède en moi,
Ton sang lave mon âme impure;
Jésus, je viens à Toi!

3.
Tel que je suis, avec mes lutes,
Mes craintes, ma timide foi,
Avec mes doutes et mes chutes,
Jésus, je viens à Toi!

4.
Tel que je suis, je me réclame
De ta promesse, par la foi;
Au ciel tu recevras mon âme;
Jésus, je viens à Toi!

5.
Tel que je suis, ton sacrifice
A ma place accomplit la loi;
Justifié par ta justice,
Jésus, je viens à Toi!

6.
Tel que je suis, Dieu me convie,
O mon Sauveur, pour être à Toi;
A Toi dans la mort, dans la vie;
Jésus je viens à Toi!`,
  },
  {
    id: "298",
    title: "298- On frappe,on frappe,entends-tu?",
    lyrics: `1.
On frappe…on frappe…entends-tu?
Passant, qui donc cherches-tu?
Pourquoi, voyageur étrange,
A ma porte es-tu venu?
N’es-tu pas quelque saint ange
Sur la terre descendu?

2.
C’est Moi, c’est Moi, ton Sauveur!
Je veux entrer dans ton cœur.
Pourquoi me laisser attendre?
Ouvre, c’est un bienfaiteur
Qui chez toi s’offre à répandre
Tous les trésors du bonheur.

3.
Vraiment! vraiment! c’est sa voix!
C’est Lui! c’est Lui! je le vois.
Oh! ta grâce est la plus forte,
Mon Sauveur, je te reçois!
Je ne puis fermer la porte
Quand tu me montres ta croix!`,
  },
  {
    id: "299",
    title: "299- Roc séculaire,Frappé pour moi",
    lyrics: `1.
Roc séculaire, - Frappé pour moi
Sur le Calvaire, - Je viens à Toi.
Tu sais mais chutes, - O mon Sauveur!
Tu vois mes luttes – Et ma douleur.

Refrain:
Roc séculaire – Frappé pour moi
Sur le Calvaire, - Je viens à Toi.

2.
Oh! Purifie, - Lave, Seigneur,
Et sanctifie – Mon pauvre coeur.
Ma main tremblante – Ne t'offre rien;
Ta croix sanglante – Est mon seul Bien.

3.
Dans la détresse, - Sois mon berger,
Ma forteresse – Dans le danger.
Et qu'à toute heure, - Que chaque jour
Mon coeur demeure – En ton amour.`,
  },
  {
    id: "300",
    title: "300- C’est toi, Jésus!",
    lyrics: `1.
C’est toi, Jésus!
Que recherche mon âme;
A te trouver
Se bornent mes souhaits;
C’est ton regard
Que sur moi je réclame;
Rends-moi, Seigneur,
Rends-moi ta douce paix.

2.
Longtemps j’errai
Dans les sentiers du monde,
Ne connaissant
Ni ton nom ni ta loi;
Tu me cherchas
En cette nuit profonde,
Et, pour toujours,
M’en tiras par la foi.

3.
De ton amour
La voix se fit entendre;
J’appris alors
Que tu m’as racheté,
Et ton Esprit
A Mon Cœur fit comprendre
Ce qu’est pour nous,
O Dieu! Ta charité!

4.
Prends donc pitié
De ma grande misère!
Soumets mon cœur,
Brise sa dureté.
A Golgotha
Mon âme te fut chère:
Je compte, ô Dieu !
Sur ta fidélité.`,
  },
  {
    id: "301",
    title: "301- Est-il bien vrai, Seigneur",
    lyrics: `1.
Est-il bien vrai, Seigneur,
Qu’un fils de la poussière
A ton festin d’amour,
Par toi soit invité ?
Pour titre à tes faveurs,
Je n’ai que ma misère;
Mon seul droit,
C’est ta charité (bis 2 lignes)

2.
Je viens donc, altéré
De pardon, de justice,
Recevoir de ta main
Les symboles touchants
Qui retracent ici
Ton sanglant sacrifice
Au souvenir
De tes enfants. (bis 2 lignes)

3.
Toi qui m’as tant aimé,
Qui lavas ma souillure,
Qui, dans mon cœur troublé
Fis descendre la paix,
O Jésus, pain du ciel,
Deviens ma nourriture,
Et qu’en Toi,
Je vive à jamais! (bis 2 lignes)

4.
Qui, Seigneur, en Toi seul
Je veux trouver ma vie;
J’ai vécu trop longtemps
Du monde et du péché;
A ta brebis lassée
Ouvre la bergerie,
Et dans ton sein
Tiens-moi caché. (bis 2 lignes)`,
  },
  {
    id: "302",
    title: "302- Bien loin de toi, mon Père",
    lyrics: `1.
Bien loin de toi, mon Père,
J’ai dissipé mes biens;
Dans ma douleur amère,
Je reviens, je reviens.

2.
Vois, mon âme est souffrante,
Et mon corps épuisé;
Saisis ma main tremblante,
Guéris mon cœur brisé!

3.
La honte et la misère
Ont sillonné mon front;
J’ai péché, tendre Père,
J’implore ton pardon !

4.
Non, je ne suis pas digne
D’être appelé ton fils;
De tes grâces, indigne,
J’ai méconnu le prix.

5.
Traite-moi, je te prie,
Comme ton serviteur;
Mon passé m’humilie,
Grâce pour moi, pécheur!

6.
Mais, que vois-je à cette heure?
Père, ô Père, c’est Toi!
Du seuil de ta demeure,
Tu t’avances vers moi!

7.
O bonheur! Tu me donnes
Le baiser paternel,
O bonheur! Tu pardonnes:
Et tu m’ouvres le ciel!`,
  },
  {
    id: "303",
    title: "303- Seigneur, tu donnes ta grâce",
    lyrics: `1.
Seigneur, tu donnes ta grâce
Au cœur qui regarde à Toi.
Ah! Que sa douce efficace
Se répande aussi sur moi!
Oui, sur moi (bis)
Se répande aussi sur moi!

2.
Père tendre et secourable.
Je fus rebelle à ta loi;
Quoiqu’impure et misérable,
Oh! pardonne et bénis-moi!
Bénis-moi (bis)
Oh! pardonne et bénis-moi.

3.
Rédempteur toujours propice,
Je veux m’attacher à Toi;
J’ai faim, j’ai soif de justice:
Je t’appelle, réponds-moi!
Réponds-moi! (bis )
Je t’appelle, réponds-moi!

4.
Saint-Esprit, souffle de vie,
Viens en mon cœur par la foi!
Dans le sang qui purifie,
De tout péché lave-moi!
Lave-moi (bis)
De tout péché lave-moi!

5.
Par ton amour, ô bon Père,
Par le sang versé pour moi,
Par l’Esprit qui seul opère,
Dieu trois fois saint, sauve-moi!
Sauve-moi (bis)
Dieu trois fois saint, sauve-moi!`,
  },
  {
    id: "304",
    title: "304- Je suis à toi, gloire à ton nom suprême!",
    lyrics: `1.
Je suis à toi, gloire à ton nom suprême!
O mon Sauveur, je fléchis sous ta loi.
Je suis à toi, je t’adore, je t’aime;
Je suis à toi. (bis)

2.
J’errais perdu dans les sentiers du doute,
Le vide au cœur et la mort devant moi,
Lorsque tu vins resplendir sur ma route;
Je suis à toi. (bis)

3.
Jadis j’étais sous l’empire du monde,
Mais aujourd’hui Jésus-Christ est mon Roi,
Ton joug est doux et ta paix est profonde;
Je suis à toi. (bis)

4.
En te trouvant j’ai trouvé toute chose,
Et ce bonheur m’est venu par la foi.
C’est sur ton sein qu’en paix je me repose;
Je suis à toi. (bis)

5.
Nul ne saurait m’effacer de ton livre;
Nul ne saurait me soustraire à ta loi.
C’est ton regard qui fait mourir et vivre;
Je suis à toi. (bis)`,
  },
  {
    id: "305",
    title: "305- Source féconde, - Salut du monde",
    lyrics: `1.
Source féconde, - Salut du monde,
Le sang de Christ est répandu.
Ce divin frère, - Sur le Calvaire,
Est mort pour l'homme perdu.

Refrain:
Oui, je puis croire, - Oui, je veux croire
Que Jésus-Christ est mort pour moi!
Sa mort sanglante – Et triomphante
Me rend libre par la foi.

2.
En Jésus joie! – il est la voie
Qui nous mène toujours au but.
Jésus pardonne, - Il n'est personne
Qu'Il repousse du salut.

3.
Jour mémorable – Pour le coupable!
Le malfaiteur près de Jésus
Trouve sa grâce, - Sainte, efficace,
Sa part avec les élus.

4.
Du fils la fête – Est toujours prête;
Le festin de noce est pour nous.
Il nous invite, - Entrons de suite,
Goûtons son accueil si doux.`,
  },
  {
    id: "306",
    title: "306- Le ciel était voilé",
    lyrics: `1.
Le ciel était voilé,
La route était obscure;
Voyageur désolé,
J’errais à l’aventure.
Chaque arbre du chemin
Etait une menace,
Et je cherchais en vain
La porte de la Grâce. (bis)

2.
Enfin, las et transi,
Je tombai sur la route
En disant: « C’est ici
Que je mourrai sans doute! »
Quand un rayon des cieux,
Pour moi perçant l’espace,
Vint montrer à mes yeux
La porte de la Grâce. (bis)

3.
Mais je doutais encore:
Se peut-il, ô merveille,
Que seule, quand tout dort,
La grâce toujours veille?
« Pitié! Je vais mourir! »
Murmurai-je à voix basse.
Et je la vis s’ouvrir,
La porte de la Grâce! (bis)

4.
Et je vis sur le seuil,
Debout dans la lumière,
Jésus!- Quel doux accueil
Il fit à ma misère!
« Je t’attendais; pourquoi, »
Dit-il, « pauvre âme lasse,
Viens-tu si tard? C’est Moi,
C’est Moi qui suis la Grâce! » (bis)`,
  },
  {
    id: "307",
    title: "307- Quelle assurance, je suis sauvé!",
    lyrics: `1.
Quelle assurance, je suis sauvé!
Quel avant-goût du ciel m'est donné!
Né de l'Esprit, baptisé de feu,
Créé de nouveau, je vis pour Dieu.

Refrain:
C'est mon cantique, c'est mon histoire!
Alléluia! Je chante à sa gloire!
Gloire! Alléluia! Gloire au Sauveur!
Gloire éternelle à mon Rédempteur!

2.
Quelle assurance, je suis joyeux!
Déjà mon nom est inscrit aux cieux!
L'amour céleste remplit mon coeur
Depuis mon abandon au Sauveur!

3.
Quelle assurance, je suis en paix!
La paix de Jésus dure à jamais!
Plein de sa bonté, de son amour,
Tout prêt pour son glorieux retour.`,
  },
  {
    id: "308",
    title: "308- Jésus, du fardeau de la loi",
    lyrics: `1.
Jésus, du fardeau de la loi,
Par toi mon âme est libérée;
Pour toujours elle est délivrée
De ce qui causait son effroi.

Refrain:
Libre en regardant au Calvaire,
Libre par ta mort salutaire,
Libre, car j’entendis ta voix,
Libre par le sang de ta croix.

2.
O Bonheur! Il est éternel!
Le Salut que Jésus me donne!
Et son amour qui me pardonne
M’ouvrira la porte du ciel!

3.
Dieu m’aime, je suis son enfant;
En sa fidélité j’espère;
Dans tous les combats de la terre
Il veut me rendre triomphant.
`,
  },
  {
    id: "309",
    title: "309- Voici Jésus, notre Sauveur",
    lyrics: `1.
Voici Jésus, notre Sauveur,
Qui nous ouvre une porte.
« Suis-moi! » dit-Il
A tout pécheur,
De sa voix tendre et forte.

Refrain:
Seigneur Jésus, j'espère en Toi,
La porte est ouverte pour moi,
Pour moi, pour moi, est ouverte pour moi!

2.
La porte est ouverte à tous ceux
Qui cherche paix et joie;
Elle introduit les malheureux
Sur la céleste voie.

3.
La sainte croix du Rédempteur
Vient éclairer la route;
Sous cette croix, plus de terreur,
D'angoisse, ni de doute.

4.
Répondons au divin appel
Avec reconnaissance,
Et vers le séjour éternel
Marchons en assurance!`,
  },
  {
    id: "310",
    title: "310- Sans attendre, Je veux tendre",
    lyrics: `1.
Sans attendre, - Je veux tendre
Au bonheur promis;- Qui s’élance
Qui s’avance - Obtiendra le prix
De mon Dieu je suis l’enfant,
Et c’est Lui qui me défend.
Donc en route! - Point de doute
Le but est si grand!

2.
Près du trône, - La couronne
Attend le vainqueur. - Nulle trêve!
Qu’on se lève! – A dit le Seigneur.
D’obéir, soyons heureux;
Point de tièdes, de peureux;
Qui se lasse, - Perd sa place
Au banquet des cieux !

3.
D’un pas ferme, - Jusqu’au terme
Il faut s’avancer! - Dieu m’observe,
Qu’il préserve, - mon pied de glisser!
Que ce monde et ses attraits
Ne me séduisent jamais!
Si sa haine, se déchaine,
Que je sois en paix!

4.
Dieu de grâce, - Que ta face
Luise en mon chemin! - Père tendre,
Viens me prendre, - Par ta forte main!
Toute puissance est à Toi,
Subviens à ma faible foi;
Ma victoire, c’est ta gloire
O Mon Dieu, mon Roi!`,
  },
  {
    id: "311",
    title: "311- Seigneur Jésus, céleste Frère",
    lyrics: `1.
Seigneur Jésus, céleste Frère,
Bénis-nous en ce jour;
Toi qui descendis sur la terre
Pour montrer Ton amour
Sur ces époux fais pour toujours
Rayonner ta lumière,
Et qu’elle éclaire le chemin
Devant les pèlerins.

2.
Ils ont en Toi leur espérance,
Jésus, parfait Sauveur.
Sois leur gardien, leur délivrance,
Leur puissant protecteur.
Répands sur eux le vrai bonheur
Par ta sainte présence.
Seigneur, exauce maintenant
Les vœux de tes enfants.`,
  },
  {
    id: "312",
    title: "312- Éternel, répands Ta paix",
    lyrics: `1.
Sur ces époux, à jamais.
Éternel, répands ta paix
Comble-les de tes bienfaits,
Accomplis tous leurs souhaits!

Refrain:
Viens, Seigneur, à cette heure,
Fais en eux ta demeure!
Répands en leurs cœurs chaque jour,
Ton amour! ton amour!

2.
Dieu puissant, Dieu souverain,
Daigne prendre par la main
Et conduire au bon chemin
Ces époux jusqu’à la fin.

3.
Que toujours unis en Toi,
Toujours scellés dans la foi,
Ils gardent la sainte loi
De Jésus, leur divin Roi.`,
  },
  {
    id: "313",
    title: "313- Epoux chrétiens, que le ciel vous sourie",
    lyrics: `1.
Epoux chrétiens, que le ciel vous sourie
Dans ce beau jour où vous être unis;
Pour vous, ici, chacun de nos cœurs prie.
Soyez heureux, amis, soyez bénis!

2.
Oh! que Jésus, dont la douce présence
Voulut orner les noces de Cana,
Préside encor, dans sa condescendance,
A ce bonheur que Lui-même donna!

3.
Qu’il ait chez vous un autre Béthanie,
Où l’on accueille avec empressement
Son cœur aimant, sa parole bénie,
Où l’on s’entr aime, à ses pieds, doucement.`,
  },
  {
    id: "314",
    title: "314- Ah! Pourquoi l'amitié",
    lyrics: ` 1.
Ah! Pourquoi l'amitié
Gémirait-elle encore
Sur ceux qui dans exil
Comme nous dispersés,
D'un jour consolateur
Ont vu briller l'aurore,
Et que vers Canaan
Dieu lui-même a poussés?
Affranchis avant nous
Du mal qui nous dévore,
Ils ne sont pas perdus,
Ils nous ont devancés. (bis 2 lignes)

2.
Oh! Combien ici-bas
Pesait à leur faiblesse
Ce fardeau de chagrins,
Sur leur tête amassés!
Et que leur pauvre coeur
Comptait avec tristesse
Tant d'heures, tant de jours
Dans la douleur passés!
Nouveau-nés de la tombe,
Et parés de jeunesse,
Elles ne sont pas perdus,
Ils nous ont devancés. (bis 2 lignes)

3.
Puisse la même foi
Qui consola leur vie,
Nous ouvrir les sentiers
Que leurs pas ont pressés,
Et, dirigeant nos pas
Vers la sainte patrie
Où leur bonheur s'accroît
De leurs travaux passés,
Nos rendre ces objets
De tendresse et d'envie,
Qui ne sont pas perdu,
Mais nous ont devancés. (bis 2 lignes)

4.
Quand le bruit de tes flots,
L'aspect de ton rivage,
O Jourdain! Nous diront:
« Vos travaux ont cessés, »
Au pays du salut,
Conquis par son courage,
Jésus nous recevra,
Triomphants et lassés,
Près de ces compagnons
D'exil et d'héritage,
Qui ne sont pas perdu,
Mais nous ont devancés. (bis 2 lignes)`,
  },
  {
    id: "315",
    title: "315- Dors, bien-aimé(e), ton heure est terminée",
    lyrics: `1.
Dors, bien-aimé(e), ton heure est terminée,
Voici pour toi le soir de la journée.
Du grand repos l'heure est enfin sonnée,
A Dieu, mon frère (ma soeur), à Dieu!

2.
Si nous t'aimons, Christ t'aime davantage,
Il t'a conduit dans ton pèlerinage,
Il te soutient dans le sombre passage,
A Dieu, mon frère (ma soeur), à Dieu!

3.
Âme fidèle, entre dans la patrie
D'où la souffrance est à jamais bannie;
Bois à longs traits au fleuve de la Vie,
A Dieu, mon frère (ma soeur), à Dieu!

4.
Sublime espoir! Jésus-Christ va paraître;
Pour saluer le retour de son Maître,
Ton corps, bientôt, glorieux va renaître,
A Dieu, mon frère (ma soeur), à Dieu!`,
  },
  {
    id: "316",
    title: "316- Nous mourrons, mais pour renaître",
    lyrics: `1.
Nous mourrons, mais pour renaître;
La mort n'est qu'un doux sommeil;
Bientôt, Jésus va paraître:
Ce sera le grand réveil!
Des profondeurs de l'abîme,
De la tombe, noir séjour,
De la plaine et de la cime,
Tous se lèveront un jour!

Refrain:
Nous mourrons, mais pour renaître;
La mort n'est qu'un doux sommeil,
Bientôt Jésus va paraître;
Ce sera le grand réveil!

2.
Tu pleures, ô tendre mère;
Tu vis ton enfant mourir,
Ta douce fleur éphémère,
Un souffle a su la flétrir…
Mais si ta douleur est vive,
Crois, espère au Dieu d'amour,
Ta fleur vit, il la cultive,
Il veut te la rendre un jour!

3.
Nous mourrons, mais pour renaître,
Et, quittant le froid tombeau,
Nous saluerons notre Maître
Au seuil d'un monde nouveau,
La mort, délaissant sa proie,
Fuira devant Son retour,
Et de l'éternelle joie,
Pour nous brillera le jour!`,
  },
  {
    id: "317",
    title: "317- Non, ce n’est pas mourir",
    lyrics: `1.
Non, ce n’est pas mourir
Que d’aller vers son Dieu
Et que de dire adieu
A cette sombre terre,
Pour entrer au séjour
De la pure lumière.

2.
Non, ce n’est pas mourir
Que de monter au ciel,
Au repos éternel,
A la gloire ineffable,
Après tous les combats
D’un monde périssable!

3.
Non, ce n’est pas mourir
Que d’adorer Jésus
Au milieu des élus,
Célébrant sa victoire,
Et d’être couronné
D’allégresse et de gloire!

`,
  },
  {
    id: "318",
    title: "318- Qui sont ces gens au radieux visage",
    lyrics: `1.
Qui sont ces gens au radieux visage
Que, par delà les flots tumultueux,
Je vois là-bas, sur le rivage,
S'assembler pour monter aux cieux?

Refrain:
Des palmes à la main,
Et couronnés de gloire,
Ils vont chantant
Le cantique nouveau:
« Heureux qui par la foi
Remporta la victoire,
Lavé dans le sang de l'Agneau! »

2.
Ce sont des rois, jadis pauvres esclaves,
Dont Jésus-Christ a fait tomber les fers;
Libres enfin de leurs entraves,
Ils vont régner sur l'univers.

3.
Aux jours mauvais, aux heures solennelles,
Pendant l'épreuve ou la tentation,
Toujours ils restèrent fidèles
A leur noble vocation.

4.
Qu'ils sont heureux! L'épreuve est terminée.
Du triste mal ils ne souffriront plus,
Et désormais leur destinée
C'est de régner avec Jésus!`,
  },
  {
    id: "319",
    title: "319- Il est là-haut!",
    lyrics: `1.
Il est là-haut!
Nous nous courbons, ô Père!
Car mieux que nous
Tu sais ce qu'il nous faut.
Le pèlerin
A fini sa carrière,
Il n'est point là
Sous le marbre ou la pierre:
Il est là-haut! Il est là-haut!

2.
Il est là-haut!
Car, soldat sous les armes,
Il a vaincu
Lors du dernier assaut!
Il est heureux,
Loin des maux, des alarmes;
Et nous chantons,
Au travers de nos larmes:
Il est là-haut! Il est là-haut!

3.
Il est là-haut!
Dans la sainte lumière,
Il resplendit,
Sans ombre, sans défaut;
Il nous attend
Dans les parvis du Père.
Oh! Quel revoir,
Lorsqu'on dira sur terre:
Ils sont là-haut! Ils sont là-haut!

`,
  },
  {
    id: "320",
    title: "320- Soldats de Christ et Haïtiens",
    lyrics: `1.
Soldats de Christ et Haïtiens,
Du ciel nous sommes citoyens;
Dans la Parole du Seigneur,
Nous trouvons le seul vrai bonheur.

Refrain:
Sauve, Seigneur, bénis
Notre chère Haïti!
Petite nation,
Avance vers Sion,
A Dieu consacre-toi
Fais de Jésus ton Roi,
Sauve, Seigneur,
Bénis notre chère Haïti!

2.
Soldats de Christ et Haïtiens!
Soyons unis à tous les siens,
Car dans le Testament Nouveau,
Il nous a marqués de son sceau.

3.
Compatriotes Haïtiens,
Du ciel devenez citoyens.
Chantez avec nous désormais:
Haïti pour Christ à jamais!`,
  },
  {
    id: "321",
    title: "321- O Dieu de nos aïeux",
    lyrics: `1.
O Dieu de nos aïeux,
Daigne entendre nos vœux
Pour la Patrie.
Toi qui brisas nos fers,
Que la terre chérie
Jamais par des revers
Ne soit flétrie!

2.
Oui, tout brûlants d’ardeur,
Nous t’implorons, Seigneur,
Pour la Patrie!
Maintiens-la dans ses droits,
Sois sa force, sa vie,
Et, qu’à tes saintes lois,
La foi la lie!

3.
Père, Fils, Saint-Esprit,
Trinite que tout craint,
Vois la Patrie!
Parle, et que converti
Par ta voix obéie
Chaque enfant d’Haïti
Te glorifie!`,
  },
  {
    id: "322",
    title: "322- Nous te présentons cet enfant",
    lyrics: `1.
Nous te présentons cet enfant
Que ta grâce a donné;
Divin Jésus, Sauveur puissant,
Bénis ce nouveau-né.

2.
Qu'il ait part au règne éternel
Acquis par ton trépas;
Et que ton amour paternel
L'y prépare ici-bas!

3.
Qu'Il soit régénéré par Toi,
O tendre Rédempteur;
Qu'il vive et marche sous la loi
Du saint Consolateur!

4.
Que, formé par le Saint-Esprit,
Comme les vrais croyants,
Il se consacre à Jésus-Christ
Dès ses plus jeunes ans!

5.
Qu'il marche humblement ici-bas
En citoyen des cieux,
Suivant le Sauveur pas à pas
Avec un coeur joyeux!`,
  },
  {
    id: "323",
    title: "323- Nul enfant n’est trop petit",
    lyrics: `1.
Nul enfant n’est trop petit
Pour la route étroite,
Quand le Seigneur l’y conduit,
Marchant à sa droite.
Même le plus jeune cœur
Peut être un temple au Seigneur. (bis 2 lignes)

2.
Ce sont aussi les petits
Que Jésus convie,
Et dont les noms sont écrits
Au Livre de vie,
Dans les parvis éternels,
Dieu reçoit ceux qui sont tels. (bis 2 lignes)

3.
Puis, dans les concerts des cieux,
Les voix enfantines
Uniront leurs chants joyeux
Aux hymnes divines.
Petits et grands, d’un seul cœur,
Loueront alors le Seigneur (bis 2 lignes)`,
  },
  {
    id: "324",
    title: "324- Je suis la lumière",
    lyrics: `1.
« Je suis la lumière »
A dit le Seigneur;
Avec moi, mon frère,
Ouvre-lui ton coeur.

Refrain:
Le monde est plein d'ombre;
Brillons, brillons bien,
Toi dans ton coin sombre
Et moi dans le mien.

2.
Si la pure flamme
Parfois baisse un peu,
Veillons sur notre âme,
Ravivons le feu.

3.
Quand le jour se voile
Au clair firmament,
La plus humble étoile
Brille doucement.`,
  },
  {
    id: "325",
    title: "325- Il est un Ami fidèle",
    lyrics: `1.
Il est un Ami fidèle
Qui chérit les enfants,
Sans se lassé, appelle
Les petits et les grands,
Qui sur eux à toute heure
Se penche, plein d’amour,
Un Ami qui demeure
Le même chaque jour…

2.
Il est un riant rivage
Où nous attend Jésus,
Où le bruit de l’orage
Ne nous troublera plus.
Là cessent nos alarmes;
Tout sera joie et paix;
Plus de péché, les larmes
N’y couleront jamais.

3.
Il existe une couronne
Pour les enfants pieux,
Qui pour toujours rayonne
Et resplendit sur eux,
Céleste diadème
Aux éclatants fleurons
Que le Seigneur Lui-même
Posera sur leurs fronts!

4.
Il est un divin cantique
Aux sons mélodieux
Que le chœur angélique
Entonne dans les cieux;
Ce chant suave et tendre
En l’honneur de l’Agneau,
Qu’il fera bon l’entendre!
C’est de tous le plus beau!`,
  },
  {
    id: "326",
    title: "326- Oh! Que ta main paternelle",
    lyrics: `1.
Oh! Que ta main paternelle
Me bénisse à mon coucher!
Et que ce soit sous ton aile
Que je dorme, ô mon Berger! (bis)

2.
Veuille effacer, par ta grâce,
Les péchés que j'ai commis,
Et que ton Esprit me fasse
Obéissant et soumis! (bis)

3.
Fais reposer sous ta garde
Mes amis et mes parents,
Et que ton oeil les regarde,
De ton ciel, petits et grands! (bis)

4.
Que ta faveur se déploie
Pour consoler l'affligé;
Donne au pauvre un peu de joie,
Au malade la santé! (bis)

5.
Seigneur, j'ai fais ma prière;
Sous ton aile je m'endors,
Heureux de savoir qu'un Père
Plein d'amour veille au dehors! (bis)`,
  },
  {
    id: "327",
    title: "327- Quel bonheur quand, faisant trêve",
    lyrics: `1.
Quel bonheur quand, faisant trêve
Un moment à nos labeurs,
L’aube du saint jour se lève
Dans le ciel et dans nos cœurs!
Dès le matin, plus légère,
L’âme s’élève au Seigneur
Sur l’aile de la prière :
Quel bonheur ! quel bonheur!

2.
L’été, la nature en fête
Elève ensuite sa voix;
On l’entend, où qu’on s’arrête,
Dans les champs et dans les bois.
L’oiseau, la fleur, le brin d’herbe
Chante aussi bien son Auteur
Que la montagne superbe.
Quel bonheur! quel bonheur!

3.
L’hiver, voici la demeure
Du pauvre et l’orphelin,
Ou l’on a froid, ou l’on pleure:
Oh! prenons-en le chemin!
A soulager la souffrance,
A faire en leur triste cœur
Luire un rayon d’espérance,
Quel bonheur! quel bonheur!

4.
Le soir, quand la lampe brille
On lit ou l’on cause un peu,
Puis le père de famille
Ouvre le livre de Dieu;
Et, sous la garde invisible
De son ange protecteur,
Le foyer s’endort paisible.
Quel bonheur! quel bonheur!`,
  },
  {
    id: "328",
    title: "328- Chaque jour de ma vie",
    lyrics: `1.
Chaque jour de ma vie,
Je veux dire au Seigneur:
Apprends-moi, je te prie,
A te donner mon cœur.

2.
Dès que le jour commence,
Je veux dire au Seigneur:
Tiens-moi dans ta présence,
Mon Dieu, mon Rédempteur!

3.
Souvent dans la journée,
Je veux dire au Seigneur:
Toi qui me l’as donnée,
Sois-en le bienfaiteur.

4.
Et quand vient la nuit sombre,
Je veux dire au Seigneur:
Tu me vois sous ton ombre,
Garde-moi ta faveur.`,
  },
  {
    id: "329",
    title: "329- Dans mon âme un beau soleil brille",
    lyrics: `1.
Dans mon âme un beau soleil brille;
Son rayon doux et joyeux
Répand un éclat qui scintille;
C'est le sourire de Dieu.

Refrain:
Oh! Quel beau soleil dans mon âme!
Il éclaire, il illumine tout,
A ses rayons mon coeur s'enflamme,
Et je vais chantant partout.

2.
Mon coeur était plein de ténèbres
Quand parut un jour nouveau,
Au loin, fuyez ombres funèbres,
Devant un soleil si beau!

3.
Nuages des plaintes, du doute,
Gaîment je vous dis adieu!
Voici resplendir sur ma route
Le soleil dans un ciel bleu!

4.
O mon coeur, éclate en louanges,
Pour toi le soleil a lui;
Je serai parmi les phalanges
Qui loueront Dieu jour et nuit!`,
  },
  {
    id: "330",
    title: "330- Qui dit au soleil sur la terre",
    lyrics: `1.
Qui dit au soleil sur la terre
D’éclairer tout homme en tout lieu,
Et qui donne aux nuits leur mystère?
C’est l’Eternel, c’est notre Dieu! (bis)

2.
Le bluet et le ciel superbe,
Qui les a teints d’un si beau bleu?
Qui verdit l’émeraude et l’herbe ?
C’est l’Eternel, c’est notre Dieu! (bis)

3.
Quand nous pleurons, qui nous console?
Qui veille sur nous en tout lieu?
Qui nous soutient par sa Parole ?
C’est l’Eternel, c’est notre Dieu! (bis)

4.
Et, lorsque notre âme immortelle
A la terre aura dit adieu,
Qui nous recevra sous son aile?
C’est l’Eternel, c’est notre Dieu! (bis)

5.
Et, lorsque notre âme immortelle
A la terre aura dit adieu,
Qui nous recevra sous son aile?
C’est l’Eternel, c’est notre Dieu! (bis)`,
  },
  {
    id: "331",
    title: "331- Deux mains pour servir le Maître",
    lyrics: `1.
Deux mains pour servir le Maître,
Deux pieds pour aller partout
Dire à tous: nous voulons être
Au bon Sauveur humble et doux.

Refrain:
Seigneur, prends toute ma vie,
Mon coeur et ma volonté;
Que jamais je ne t'oublie,
Dieu de grâce et de bonté!

2.
Deux oreilles pour entendre
Le vrai message du ciel;
La mémoire pour apprendre
Les leçons de l'Éternel.

3.
Deux yeux pour lire le Livre
Qu'il faut aimer toujours plus;
C'est le pain qui nous fait vivre,
Qui nous rend forts en Jésus.

4.
Un coeur pour être le trône,
Où doit régner le Seigneur,
Une vie qui se donne
Toute entière au Créateur.`,
  },
  {
    id: "332",
    title: "332- J'accours et me rends au Seigneur!",
    lyrics: `1.
J'accours et me rends au Seigneur!
Bénissant son pourvoir suprême,
Je viens recevoir le baptême,
Rempli de zèle et de ferveur! (bis)

2.
Assistez donc, Anges des Cieux.
Soyez témoins de ma promesse!
Elle me remplit d'allégresse,
Et désormais je suis heureux! (bis)

3.
Jésus l'a prescrit aux humains,
S'y soumettant aussi lui-même,
Dans les flots reçut le baptême:
Quel exemple pour les Chrétiens! (bis)

4.
Accourez donc, ô coeurs fervents,
Que remplit la foi de ses flammes;
Élevez donc vers Dieu vos âmes,
Et soyez désormais constants! (bis)

5.
L'Éternel au sein des élus
Bénira votre ardeur sublime;
En reniant toujours le crime,
Marchez au sentier des vertus. (bis)`,
  },
  {
    id: "333",
    title: "333- Je suis libreAh! Rentrons au bercail",
    lyrics: `1.
Ah! Rentrons au bercail
Dans le sein du Seingneur,
Célébrons l'Éternel
Plein de zèle et d'ardeur,
Exaltons son saint nom,
Entonnons ses louanges,
Et chantons ses bienfaits,
De même que les anges!

2.
Fidèles, un moment
Suspendons nos travaux;
Portons nos pas tremblants,
Approchons vers ces eaux
Où Jésus, radieux,
Étant plongé lui-même
Au monde entier donna
L'exemple du baptême!

3.
O chrétiens, pratiquez
Et soutenez la loi,
Soutenez dignement
Le drapeau de la foi:
Dieu veut nous voir entrer,
Combattre dans la lice,
Pour atteindre le but
Fondé par sa justice.

4.
A travers les périls,
Ne les redoutant pas,
Sur l'obstacle sans cesse
Affermissez vos pas;
Imitez le Sauveur
En son brûlant passage,
Car lui-même en nos coeurs
A gravé son image.

5.
Le phare bienfaiteur
Brille dans le lointain,
L'Éternel vous prépare
Un triomphe certain;
Marchez, persévérez
Au milieu des tempêtes,
Le mystique laurier
Couronnera vos têtes.`,
  },
  {
    id: "334",
    title: "334- Accourez au baptême",
    lyrics: `1.
Accourez au baptême,
A ces eaux salutaires,
Accourez, ô chrétiens,
Fidèles et fervents,
Et que vos saints accents (bis)
Retentissent dans l’air,
Ainsi que vos prières !

2.
Ah ! louez le Seigneur,
Ce Dieu bon, tutélaire,
Qui vous accorde, en Père,
Un bien si précieux ;
Et que vos cœurs joyeux, (bis)
En sortant de cette onde,
Adorent votre Père !

3.
Chrétiens, souvenez-vous
Que Jésus-Christ lui-même
Y fut plongé par Jean ;
Satisfait, glorieux,
Il vit s’ouvrir les cieux, (bis)
Alors qu’au sein des flots
Il reçut le baptême.

4.
Telle qu’une rapide,
Une invisible flamme,
Qui d’ici-bas s’élance
Au céleste séjour,
Cet acte heureux d’amour (bis)
Va porter jusqu’a Dieu
L’hommage de notre âme.

5.
Oui, Dieu grave lui-même
Aux portes éternelles
Ce zèle, cette foi,
Ces pieux sentiments ;
Et sa grâce en torrents (bis)
Coule toujours sur ceux
Qui lui restent fidèles.`,
  },
  {
    id: "335",
    title: "335- Je viens, Seigneur, à ce baptême",
    lyrics: `1.
Je viens, Seigneur, à ce baptême,
Où tu descendis avant moi,
Heureux de mourir à moi-même,
Afin de vivre comme toi.

2.
Aux plaisirs, aux gloires du monde,
Je dis un éternel adieu;
Je livre aux profondeurs de l’onde
Tout ce qui déplait à mon Dieu.

3.
Après tant d’erreurs et de chutes,
Tant de péchés et de remords,
Je renonce a mes vaines luttes
Et me réfugie en ta mort.

4.
C’est pour moi que tu l’as soufferte,
Victime sainte, Agneau très doux!
Pour moi ton âme fut offerte
Et ton corps meurtri par les clous.

5.
A ton baptême, à ton calice,
Je veux avoir part en ce jour
Et goûter, dans le sacrifice,
La douceur de ton grand amour!`,
  },
];

// Fonction pour assigner un type dynamique
const assignType = (id: string): string => {
  const numericId = parseInt(id, 10);

  if (numericId >= 1 && numericId <= 37) {
    return "Adoration Et Louange";
  } else if (numericId >= 38 && numericId <= 47) {
    return "Noël";
  } else if (numericId >= 48 && numericId <= 66) {
    return "Jésus-Christ, sa mort";
  } else if (numericId >= 67 && numericId <= 70) {
    return "Jésus-Christ,sa résurrection & son ascension";
  } else if (numericId >= 71 && numericId <= 98) {
    return "Jésus-Christ, son oeuvre continuelle";
  } else if (numericId >= 99 && numericId <= 104) {
    return "Jésus-Christ, son retour";
  } else if (numericId >= 105 && numericId <= 111) {
    return "Saint-Esprit";
  } else if (numericId >= 112 && numericId <= 117) {
    return "La parole";
  } else if (numericId >= 118 && numericId <= 133) {
    return "Confiance et Assurance";
  } else if (numericId >= 134 && numericId <= 158) {
    return "Consécration et persévérance";
  } else if (numericId >= 159 && numericId <= 172) {
    return "La sanctification";
  } else if (numericId >= 173 && numericId <= 192) {
    return "Paix et Bonheur du racheté";
  } else if (numericId >= 193 && numericId <= 209) {
    return "La prière";
  } else if (numericId >= 210 && numericId <= 224) {
    return "Combat et Victoire";
  } else if (numericId >= 225 && numericId <= 249) {
    return "Évangélisation";
  } else if (numericId >= 250 && numericId <= 261) {
    return "Le Ciel";
  } else if (numericId >= 262 && numericId <= 265) {
    return "Amour Fraternel";
  } else if (numericId >= 266 && numericId <= 273) {
    return "Le Culte et Dimanche";
  } else if (numericId >= 274 && numericId <= 294) {
    return "Appel";
  } else if (numericId >= 295 && numericId <= 302) {
    return "Repentance";
  } else if (numericId >= 303 && numericId <= 310) {
    return "Le Salut par la Foi";
  } else if (numericId >= 311 && numericId <= 313) {
    return "Mariage";
  } else if (numericId >= 314 && numericId <= 319) {
    return "Enterrements";
  } else if (numericId >= 320 && numericId <= 321) {
    return "Chants Nationaux";
  } else if (numericId >= 322 && numericId <= 331) {
    return "Les enfants";
  } else if (numericId >= 332 && numericId <= 335) {
    return "Le Baptême";
  } else {
    return "Inconnu";
  }
};
// Ajout des types aux chants dans le tableau chantsF
const chantsF: Chant[] = rawChants.map((chant) => ({
  ...chant,
  type: assignType(chant.id),
}));
export default chantsF;
// Fonction pour rechercher les chants par type
const searchByType = (type: string): Chant[] => {
  return chantsF.filter((chant) => chant.type === type);
};
const categoryMap = {
  AdorationEtLouange: chantsF.filter(
    (song) => song.type === "AdorationEtLouange"
  ),
};
