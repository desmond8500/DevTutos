# [Equations](readme.md)

## Description

Les équations logiques et de problèmes peuvent définir des relations complexes entre les périphériques d'entrée et de sortie.
Le FACP prend en charge jusqu'à 1 000 équations logiques, chacune désignée par un numéro de zone logique de
ZL1 à ZL1000. Il prend également en charge jusqu'à 100 zones à problèmes, chacune désignée par un problème
Numéro de zone de ZT001 à ZT100. Une fois créées, ces équations peuvent être incluses dans
Mappage des zones d'entrée/sortie.

1. Les équations commenceront toujours par une fonction logique. L'ensemble de fonctions est répertorié ci-dessous.
2. Les équations comporteront un maximum de 80 caractères, parenthèses et virgules comprises.
3. Les équations logiques et de problèmes peuvent avoir un maximum de 10 fonctions logiques, sauf si un délai
fonction est utilisée : une fonction de temporisation doit être la seule fonction dans son équation.
4. Les équations sont évaluées après que tous les autres appareils ont été évalués.
5. Une équation logique peut être utilisée comme argument dans une autre équation logique, ou comme un problème
L'équation peut être utilisée dans une autre équation de problème, uniquement si l'équation utilisée a déjà été
évalué; c'est-à-dire que seules les zones dont le numéro est inférieur à celui de la zone en cours de modification peuvent être
utilisés comme arguments.
6. Une fonction logique peut avoir un maximum de 20 arguments (y compris les adresses de début et de fin).
7. La durée maximale du retardateur est de 23 heures, 59 minutes et 59 secondes (23:59:59).
8. Systèmes compatibles avec les notifications de masse : les zones logiques doivent être écrites de manière conditionnelle pour garantir une bonne
suppression d'événements. Reportez-vous au manuel de notification de masse pour plus d'informations.
9. Appareils CO Monitor : Un appareil portant l'ID de type « CO Monitor » ne doit pas être utilisé dans la logique.
équations. Pour inclure un moniteur de CO dans une équation logique, utilisez les zones mappées au moniteur de CO
dans l'équation

## Fonctions logiques

### AND Operator

Nécessite que chaque argument soit actif.
Exemple : ET(Z02,Z05,L2D12)
Les trois arguments de l'équation doivent être actifs pour que la zone logique soit activée

### OR Operator

Nécessite que tout argument soit actif
Exemple : OU(Z02,Z05,L2D12)
Si l'un des trois arguments de l'équation est actif, la zone logique sera activée.

### Not Operator

Inverse l'état de l'argument (activé à désactivé OU désactivé à activé).
Exemple : NON(Z02)
La zone logique restera activée jusqu'à ce que l'argument s'active.
Si l'argument s'active, la zone logique se désactivera.

### ONLY1 operator

Nécessite qu’un seul argument soit actif.
Exemple : SEULEMENT1(Z02,Z05,Z09)
Si un seul des arguments est activé, la zone logique sera activée.

### ANYX operator

Nécessite que le nombre d'arguments spécifié par le nombre précédant les arguments soit actif.
Exemple : ANYX(2,Z02,Z05,Z09)
Si deux arguments ou plus sont en alarme, le point de sortie sera activé.
Le montant X peut être une valeur comprise entre 1 et 9

### XZONE operator

Nécessite que toute combinaison de deux ou plusieurs périphériques d'entrée programmés pour une zone soit active
Exemple : XZONE(Z02)
Si une combinaison de deux ou plusieurs périphériques initiateurs qui ont été mappés à ce logiciel
zone entre en alarme, puis les sorties mappées à cette zone s'activeront

### RANGE operator

Chaque argument compris dans la plage doit être conforme aux exigences de la fonction gouvernante.
La limite de plage est de 20 arguments consécutifs.
Exemple : AND(RANGE(Z1,Z20))
Les zones 1 à 20 doivent toutes être actives pour activer la zone logique

## Fonctions temporelles

Le panneau prend en charge trois fonctions basées sur le temps : DEL, SDEL et TIM. Des règles particulières s'appliquent à un
équation contenant une fonction basée sur le temps :
• Une seule fonction basée sur le temps peut être utilisée dans une équation.
• La fonction basée sur le temps ne doit apparaître qu'une seule fois, comme première entrée de l'équation.
• Il ne peut pas être imbriqué entre parenthèses dans l'équation.
• Les fonctions logiques peuvent être utilisées dans une équation qui commence par un DEL ou SDEL basé sur le temps.
fonction : ils doivent toutefois apparaître entre parenthèses à la suite de la fonction temporelle.
Les délais et les durées sont au format 24 heures (HHMMSS) ; la plage autorisée est de 00:00:00 à
23:59:59.

### Fonction DEL

Utilisé pour un fonctionnement différé.
Exemple : DEL(HH.MM.SS, HH.MM.SS,AND(L1M1,L1M140))
• Le premier HH.MM.SS est le temps de retard, le deuxième HH.MM.SS est le temps de durée. Si le
argument - AND(L1M1,L1M140) - dans l'exemple ci-dessus activé, la fonction devient
vrai après que l'argument a été actif pendant le délai, et continue d'être vrai pendant le
durée tant que l'argument reste actif. Si l'argument devient inactif pendant le
le temps de retard ou la durée, la fonction redevient fausse et le chronométrage commencerait tout
à nouveau s'il est réactivé.
• Si une durée de zéro est entrée (00.00.00), l'équation sera évaluée comme vraie lorsque le délai
le délai expire si l’argument reste actif pendant toute la période de retard.
• Si aucune durée ou délai n'est spécifié, alors la fonction suivra l'argument d'entrée,
indiquant vrai lorsqu'il est actif et faux lorsqu'il est inactif. DEL prend la valeur false
à la réinitialisation.

### Fonction SDEL

A latched version of the DEL function.
Example: SDEL(HH.MM.SS, HH.MM.SS,L1M140)
• The first HH.MM.SS is the delay time, the second HH.MM.SS is the duration time. If the
argument (L1M140 in the example above) activates, the function becomes true after the
delay time, and will remain active for the duration even if the argument becomes inactive
during either the delay or duration time.
• If delay time of zero is entered (00.00.00), the equation will evaluate true as soon as the
argument (L1M140) activates and will remain that way for the specified duration, even if
the argument becomes inactive during that time.
• If no duration or delay time is specified, then the argument will not deactivate until reset,
even if the argument becomes inactive

## Sources

* []()