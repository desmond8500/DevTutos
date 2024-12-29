# [Onity](readme.md)

## Description

Il faut utiliser le lien de téléchargement pour avoir la dernière version du logiciel, les licences, docs etc

Pour la formation nous avons pris la version 2.1 independent (FrontDesk)

## Installation comme serveur

1. Choix du type d'installation (station ou serveur)
   1. Si on choisi le serveur il faudra :
      1. Copier la clé de licence
      2. le coller dans _server_envkey_
      3. puis save keys
      4. puis faire un get d'une licence ou de la prélicence
2. Charger le fichier de licence
3. choix de la langue
4. Identifiant et mot de passe (le mot de passe c'est les trois derniers mots du lien _a4gg6-rv5q2-7ekmo_ )
5. Nouvel organigramme

Le Firewall peut bloquer l'installation *services - onportal - Connexion - compte local - appliquer - redemmarer le service*

## Connexion

* Identifiant: onitytech
* password: a4gg6-rv5q2-7ekmo

## backups

Le logiciel fait des sauvegardes de l'installation en cours dans un dossier du pc *D:\Onity\OnPortal\FrontDeskClient\Backup*

## Configuration des chambres

Menu / Organigramme

1. Table Horaire
   1. Ajouter
   2. Nommer puis sauvegarder (Par défaut c'est H24)
2. Type de passe
   1. Ajouter
   2. Nom et description
3. Profil Serrure
   1. activer carte de programmation
   2. aciver l'ouverture avec la privacité
   3. Chambres
      1. Créer les chambres
   4. Organigramme
      1. Choisir le type de cartes qui ont accès à la chambre

* _Carte programmation_ permet de programmer des cartes manuellement
* _Show low battery_ n'est pas activé pour les hotels
* _Privacité_ à activer pour les chambres

## Type de chambre

* Chambre
* Foyer = tout le monde avec une carte valide a accès
* Selective = on peut selectionner les portes
  * un menu carte autaurisés apparait
  * on selectionne les chambres ou les profils
* Suite
* En lien
* Groupe de suite

## Finlaisation de la configuration

1. Menu orgnigramme
2. Terminer
3. Donner le nombre de serrures finaux prévus
4. On finalise une seule fois sauf si le nombre prévisionnel est dépassé.

## Ajouter un encodeur

1. Menu configuration
2. Scanner

## Ajouter des cartes

* Le checkin ecrase les cartes précédentes

## Désinstaller et reinstaller Onportal

Dans le dossier onPortal lancer le fichier *PostUnistallCleanup* puis relancer le service onPortal

## Connexion en tant que client

* Identifiant / password / nom du serveur / numéro de port

## Initiamlisation de serrure

1. Maintenance
2. Intilisation
3. Choisir une serrure
4. Initialiser

## Roles

1. Security

Lorsqu'on annule une carte staff et qu'on en crée une autre toutes les cartes du profils seront inactive

## Sources

* [Lien de téléchargement](https://www.onity.net/portal/35/a4gg6-rv5q2-7ekmo)

## Onity Flasher

1. Arreter le service onportal
2. Dans le dossier front desk client