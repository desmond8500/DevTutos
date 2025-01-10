# [Zones](readme.md)

## General Zones

Une zone générale permet de relier les périphériques d'entrée et de sortie. Lorsqu'un périphérique d'entrée est activé, toute zone générale de sa carte de zone sera actif, et tout périphérique de sortie ayant une zone générale active dans sa carte sera actif. Les zones générales peuvent être utilisées comme arguments
dans les équations logiques.  

La zone Z000 est une zone d'alarme générale : les points listant Z000 dans leur plan de zone participent à une alarme générale.  

Le panneau prendra en charge jusqu'à 1 000 zones générales, désignées de Z0 à Z999. Les zones générales peuvent être utilisées dans CCBE applications lorsqu'un numéro de nœud est saisi avant le numéro de zone.

## Logic Zone

Une zone logique est constituée d'une équation logique. Chaque fois que l'équation logique devient vraie, tous les points de sortie mappés sur la zone logique s’activera.
Le panneau prendra en charge jusqu'à 1 000 zones logiques, désignées de ZL1 à ZL1000. Les zones logiques peuvent être utilisées dans CCBE applications lorsqu'un numéro de nœud est saisi avant le numéro de zone.

## Trouble Zone

Une trouble zone consiste en une équation problématique. Chaque fois que l'équation du problème devient vraie, tous les points de sortie mappés au la zone problématique s’activera.
Le panneau prendra en charge jusqu'à cent zones problématiques, désignées de ZT001 à ZT100. Les zones à problèmes peuvent être utilisées dans Applications CCBE lorsqu'un numéro de nœud est saisi avant le numéro de zone.
REMARQUE : Les zones à problèmes ne peuvent être utilisées que dans les applications CCBE entre les FACP  NFS2-3030, NFS-3030 et NFS-640. Les zones à problèmes ne seront pas activer avec d'autres combinaisons.

## Releasing Zone

Une zone de relâchement est utilisée pour contrôler une opération de relâchement.
Le panneau prendra en charge jusqu'à dix zones de déclenchement, désignées de ZR00 à ZR09.

## Zones Spéciales

| Zone | Description |
| :-- | :-- |
| ZF0 | Permet d'activer le positive active sequence |
| ZF11 | When the drill key is pushed or drill/alarm signal is performed, ZF11 will go active. ZF11 will go to normal after a 5 second delay |
| ZF12 | When the acknowledge key is pushed, or a block or event acknowledge is performed, ZF12 will go active. After a five-second delay, ZF12 will go to normal. |
| ZF13 | When the signal silence key is pushed or a signal silence is performed, ZF13 will go active. After a five-second delay, ZF13 will go to normal |
| ZF14 | When the system reset key is pushed or a system reset is performed, ZF14 will go active. After a ten- second delay, ZF14 will go to normal. |

### Positive Active Sequence (PAS)

S'il est activé en cas d'alarme le systeme se met automatiquement en alarme lorsqu'il n'est pas acquitté au bout de 15s.  
Il est doit être ajouté sur les détecteurs et les modules concernés.  
Pour le DVC nous devons ajouter une zone en positive sequence dans l'équation de niveau.