---
title: 'Filtres publicitaires AdGuard'
taxonomy:
    category:
        - docs
visible: true
---

- [Introduction](#introduction)
- [Politique relative aux filtres AdGuard](#politique-relative-aux-filtres-adguard)
- [Contribuer aux filtres AdGuard](#contribuer-aux-filtres-adguard)
  - [Signaler des problèmes](#signaler-des-problèmes)
  - [Suggérer des règles de filtrage](#suggérer-des-règles-de-filtrage)
  - [Autres moyens de contribuer](#autres-moyens-de-contribuer)
- [Filtres AdGuard](#filtres-adguard)

<a name="introduction"></a>
## Introduction

Cet article concerne les filtres que nous créons pour être utilisés dans AdGuard et d'autres logiciels de blocage de publicités (par exemple, uBlock Origin). Chaque filtre représente un ensemble de règles au format texte qui sont utilisées par les applications et programmes AdGuard pour filtrer la publicité et le contenu menaçant la vie privée (comme les bannières, les pop-ups, les trackers etc.). Les règles spécifiques à un segment particulier d'Internet (filtre allemand, filtre russe, etc.), ou servant un objectif spécifique (filtre pour les médias sociaux, filtre de protection contre le pistage, etc.) sont combinées dans une liste - le filtre - et peuvent être activées/désactivées en une seule fois.

<a name="policy"></a>
## Politique relative aux filtres AdGuard

Notre politique de filtrage est disponible [ici](https://kb.adguard.com/general/adguard-filter-policy).

<a name="contribute"></a>
## Contribuer aux filtres AdGuard

Nous avons la chance d'avoir une communauté qui non seulement aime AdGuard, mais qui donne aussi en retour. De nombreuses personnes se portent volontaires de diverses manières pour améliorer l'expérience des autres utilisateurs avec AdGuard, et vous pouvez les rejoindre ! De notre côté, nous ne pouvons qu'être heureux de récompenser les membres les plus actifs de la communauté. Alors, que pouvez-vous faire ?

### Signaler des problèmes

Nous comptons sur la communauté pour nous faire part des problèmes liés à nos filtres. De cette façon, nous pouvons être plus efficaces avec notre temps et garder les filtres constamment mis à jour. Pour soumettre un rapport, veuillez utiliser cet [outil de rapport web](https://agrd.io/report).

### Suggérer des règles de filtrage

Vous trouverez de nombreux problèmes ouverts dans le [GitHub filter repository](https://github.com/AdguardTeam/AdguardFilters/issues). Chacune fait référence à un problème avec un site Web - une publicité manquée, un faux positif, etc. - choisissez-en une et suggérez vos propres règles dans les commentaires. Les ingénieurs des filtres AdGuard examineront vos suggestions, et s'ils les trouvent correctes, vos règles seront ajoutées aux filtres AdGuard.

Voici la [documentation officielle](https://kb.adguard.com/general/how-to-create-your-own-ad-filters) sur la syntaxe des règles de filtrage AdGuard. Vous devrez la lire avant de pouvoir créer vos propres règles de filtrage.

### Autres moyens de contribuer

Voici [une page dédiée](https://adguard.com/contribute.html) pour les personnes désireuses de contribuer à AdGuard d'une autre manière.


<a name="filters"></a>
## Filtres AdGuard

* **Filtre de base** — supprime les publicités des sites Web dont le contenu est en anglais. Basé à l'origine sur [EasyList](https://easylist.to/) et modifié par nos soins. [Voir les règles](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_2_English/filter.txt)
* **Filtre de protection du suivi** — liste complète de divers compteurs en ligne et outils d'analyse du web. Utilisez-la pour masquer vos actions en ligne et éviter tout suivi. [Voir les règles](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_3_Spyware/filter.txt)
* **Filtre de suivi des URL** — améliore la confidentialité en supprimant les paramètres de suivi des URL. Lorsqu'un utilisateur choisit de bloquer les paramètres de suivi en mode furtif, ce filtre est activé automatiquement. [Voir les règles](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_17_TrackParam/filter.txt)
* **Filtre pour les médias sociaux** — supprime les nombreux boutons "J'aime" et "Tweet" et autres intégrations de médias sociaux sur les sites web populaires. [Voir les règles](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_4_Social/filter.txt)
* **Annoyances filter** —  bloque les éléments irritants sur les pages Web, notamment les avis de cookies, les widgets de tiers et les fenêtres contextuelles (à l'exception des éléments de médias sociaux). Inspiré de la Fanboy Annoyances List, mais ne la reproduit pas. [Voir les règles](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_14_Annoyances/filter.txt)
* **Filtre débloquant les annonces de recherche et les autopromotions** — débloque les publicités qui peuvent être utiles aux utilisateurs. Pour en savoir plus sur ce filtre, consultez [cette page](https://kb.adguard.com/en/general/search-ads-and-self-promotion). [Voir les règles](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_10_Useful/filter.txt)
* **Filtre russe** — supprime les publicités des sites Web en russe. Initialement basé sur le filtre [RU AdList](https://code.google.com/p/ruadlist/), il a ensuite été développé de manière totalement indépendante. Actuellement, il reste très peu d'intersections avec RU AdList. [Voir les règles](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_1_Russian/filter.txt)
* **Filtre allemand** — supprime les publicités des sites web en allemand. Basé à l'origine sur le filtre [EasyList Germany](https://easylist.to/) et modifié ultérieurement par nos soins en fonction des plaintes des utilisateurs. [Voir les règles](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_6_German/filter.txt)
* **Filtre français** — supprime les publicités des sites web en français. Basé à l'origine sur le filtre [Liste FR](https://forums.lanik.us/viewforum.php?f=91) et modifié ultérieurement par nos soins en fonction des plaintes des utilisateurs. [Voir les règles](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_16_French/filter.txt)
* **Filtre japonais** — supprime les publicités des sites web en japonais. Basé à l'origine sur le filtre [Fanboy's Japanese](https://www.fanboy.co.nz/fanboy-japanese.txt), nous l'avons ensuite modifié en fonction des plaintes des utilisateurs. [Voir les règles](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_7_Japanese/filter.txt)
* **Filtre néerlandais** — supprime les publicités des sites web en néerlandais. Basé à l'origine sur le filtre [EasyList Dutch](https://easylist.to/) et modifié ultérieurement par nos soins en fonction des plaintes des utilisateurs. [Voir les règles](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_8_Dutch/filter.txt)
* **Filtre espagnol/portugais** — supprime les publicités des sites Web en espagnol et en portugais. Basé à l'origine sur le filtre [Fanboy's Spanish/Portuguese](https://www.fanboy.co.nz/fanboy-espanol.txt), il a été modifié par la suite en fonction des plaintes des utilisateurs. [Voir les règles](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_9_Spanish/filter.txt)
* **Filtre turc** — supprime les publicités des sites web en turc. Créé par nous en fonction des plaintes des utilisateurs. [Voir les règles](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_13_Turkish/filter.txt)
* **Filtre chinois** — supprime les publicités des sites web en chinois. Basé à l'origine sur le filtre [EasyList China](http://abpchina.org/forum/forum.php), il a été modifié par la suite en fonction des plaintes des utilisateurs. [Voir les règles](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_224_Chinese/filter.txt)
* **Filtre expérimental** — sert à tester certaines nouvelles règles de filtrage qui peuvent potentiellement causer des conflits et perturber le fonctionnement des sites web. Si ces règles sont acceptées sans problème, elles sont ajoutées aux filtres principaux. [Voir les règles](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_5_Experimental/filter.txt)
* **Filtre pour publicités mobiles** — bloque les publicités sur les appareils mobiles. Contient tous les réseaux publicitaires mobiles connus. [Voir les règles](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_11_Mobile/filter.txt)
* **Filtre DNS** — composé de plusieurs autres filtres (AdGuard Base filter, Filtre médias sociaux, Filtre logiciels espions, Filtre publicités mobiles, EasyList et EasyPrivacy) et simplifié spécifiquement pour être mieux compatible avec le blocage des publicités au niveau DNS. Ce filtre est utilisé par les serveurs DNS d'AdGuard pour bloquer les publicités et le suivi. Pour en savoir plus sur le blocage au niveau DNS, visitez le site suivant [cette page](https://adguard.com/adguard-dns/overview.html). [Voir les règles](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_15_DnsFilter/filter.txt)
