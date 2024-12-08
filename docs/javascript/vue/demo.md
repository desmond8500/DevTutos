# [Demo](readme.md)

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
