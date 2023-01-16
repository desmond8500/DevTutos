# Véritas 8

[Retour]()

## Codes par défaut

| Role | Code |
|:--|:--|
| Technicien | 1234 |
| Master | 4321 |

## Armer/désarmer le système

code + `TOTAL`  
code + `RAZ`

Mettre le code simplement permet d'arrêter l'alarme et de voir la zone en défaut

## Réinitialiser le système

1234 + `PROG` + 07 + `PROG`

## Changement de code personnel

code + `PROG` + 60 + code

## Ajouter un code utilisateur utilisateur

| # | Role | code |
|:--|:--|:--|
| 1 | Master | 61 |
| 2 | Technicien | 62 |
| 3 | User | 63 |
| 4 | User | 64 |
| 5 | User | 65 |
| 6 | User | 66 |
| 7 | User | 67 |
| 8 | User | 68 |

Exemple : 4321 + `PROG` + 63 + code + `PROG` = user 3  

## Visualiser le numero d'utiliasteur

code + `PROG` + 69

## Visualiser le niveau d'habilité

code + `PROG` + 79

## Habiliter un code utilisateur

4321 + `PROG` + 73 + 1 + `PROG` = type user 1  
4321 + `PROG` + 74 + 1 + `PROG` = type user 1  
4321 + `PROG` + 75 + 1 + `PROG` = type user 1  
4321 + `PROG` + 76 + 1 + `PROG` = type user 1  
4321 + `PROG` + 77 + 1 + `PROG` = type user 1  
4321 + `PROG` + 78 + 1 + `PROG` = type user 1

## Temporisations

1234 + `PROG` + 31 + temps mn (15s) pour la temporisation en sortie totale  
1234 + `PROG` + 32 + temps mn (15s) pour la temporisation en sortie partielle  
1234 + `PROG` + 33 + temps mn (15s) pour la temporisation en entrée totale  
1234 + `PROG` + 34 + temps mn (15s) pour la temporisation en entrée partielle

## Types de zones

2 = Exclue  
3 = Immédiate  
6 = Entrée / Sortie  
7 = Panique

## Types de codes

1 = Utilisateur  
2 = Technicien  
5 = Maitre utilisateur
