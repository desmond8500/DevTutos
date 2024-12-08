# [Galaxy Dimension](readme.md)

## Changer de langue

En mode installateur :

51 puis 17 puis 3

## Programmation de zone

52 (Programmation entrées)

| Entree | Numero | champ |
| :-- | :-- | :-- |
| Finale | 01 | champ |
| Intrusion | 03 | champ |
| Panique | 13 | champ |
| Libre | 18 | champ |
| Incendie | 19  | champ |


## Exclure la ligne téléphonique

56 (Communications) -> 10 (Défaut de ligne / line fail)

Désacctiver 1 2 et 3

## Tempo de sortie

51 (Paramètres) -> 04 (Tempo de sortie) -> 20 -> ENT

## Tempo d'entrée'

51 (Paramètres) -> 05 (Tempo d'entrée') -> 20 -> ENT


## Convertion de texte en chiffres

<div style="margin-top: 15px;">
    <label for="textInput">Entrez un texte :</label>
    <div class="input" >
        <input id="textInput" maxlenght="16" v-model="textInput" />
        <button @click="conv">Convertir</button>
    </div>
    <div>
        {{ texto  }}
    </div>
</div>

<script>
export default {
  data() {
    return {
      input: '',
      texto: '',
      textInput: '',
      result: '',
      wordsToNumbers: [
        { letter: 'a', code: 13 },
        { letter: 'b', code: 14 },
        { letter: 'c', code: 15 },
        { letter: 'd', code: 16 },
        { letter: 'e', code: 18 },
        { letter: 'é', code: 18 },
        { letter: 'è', code: 18 },
        { letter: 'f', code: 19 },
        { letter: 'g', code: 20 },
        { letter: 'h', code: 22 },
        { letter: 'i', code: 23 },
        { letter: 'j', code: 24 },
        { letter: 'k', code: 25 },
        { letter: 'l', code: 26 },
        { letter: 'm', code: 27 },
        { letter: 'n', code: 28 },
        { letter: 'o', code: 31 },
        { letter: 'p', code: 33 },
        { letter: 'q', code: 34 },
        { letter: 'r', code: 35 },
        { letter: 's', code: 36 },
        { letter: 't', code: 37 },
        { letter: 'u', code: 38 },
        { letter: 'v', code: 40 },
        { letter: 'w', code: 41 },
        { letter: 'x', code: 42 },
        { letter: 'y', code: 44 },
        { letter: 'z', code: 45 },
        { letter: ' ', code: 10 },
        { letter: "0", code: "00" },
        { letter: '1', code: "01" },
        { letter: '2', code: "02" },
        { letter: '3', code: "03" },
        { letter: '4', code: "04" },
        { letter: '5', code: "05" },
        { letter: '6', code: "06" },
        { letter: '7', code: "07" },
        { letter: '8', code: "08" },
        { letter: '9', code: "09" },
      ]
    };
  },
  methods: {
    conv(){
        // this.input = this.textInput.toLowerCase();
        // if (input.length > 16) {
        //     this.input = this.input.slice(0, 16);
        // }
        // const words = this.input;
        const words = this.textInput.toLowerCase();
        let elements = Array.from(words);
        this.texto = this.textToInt(elements);
    },

    findElement(letter) {
        return  this.wordsToNumbers.find(
            el => el.letter.toLowerCase() === letter.toLowerCase());
    },

    textToInt(text){
        let letter = '';
        let resultat = [];
        text.forEach(element => {
            letter = this.findElement(element);
            resultat.push(letter.code);
        })
        return resultat;
    },

  }
};
</script>
