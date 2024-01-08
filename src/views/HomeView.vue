<template>
  <header class="py-4  bg-black" style="border-bottom:1px solid silver ;">
    <div class="container flex items-center justify-center">
      <h1 class="text-3xl  text-center font-bold text-white">{{ $t("title") }}</h1>
    </div>
  </header>
 <section>
   <div class="container sm:w-full md:w-full flex justify-center flex-col gap-2">
      <div class="btns flex items-center w-full gap-4 justify-center">
        <button @click="lotinKril" id="lotinkril"
         class="active:scale-95 group bg-white focus:bg-black text-center focus:text-white flex items-center justify-between gap-4 rounded-lg border border-current w-full px-1 py-4 text-black transition-colors hover:bg-white active:bg-black">
          <span
            class="font-medium text-cente w-full transition-colors group-active:text-white">
            Lotin-Kril
          </span>
        </button>

        <button @click="krilLotin" id="krillotin"
          class="active:scale-95 group bg-black focus:bg-black text-center focus:text-white flex items-center justify-between gap-4 rounded-lg border border-current w-full px-1 py-4 text-white transition-colors hover:bg-white  active:bg-black">
     <span
              class="font-medium text-cente w-full transition-color  group-hover:text-black group-active:text-white">
              Крил-Лотин
            </span>
        </button>
      </div>
      <div class="texts flex items-center justify-center gap-3">
        <div class="texarea w-full flex  flex-col gap-1">
          <div class="actions flex items-center justify-between">
            <div class="tex">
              <label for="OrderNotes" class="block text-sm font-medium">{{ $t("text") }} </label>
            </div>
              <span class="flex items-center justify-end mr-2">
                <!-- delete SVG -->
            <svg  @click="clearTextareaValue" class="active:scale-95 hover:scale-105 cursor-pointer" clip-rule="evenodd" fill="gray" width="25" height="25" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m4.015 5.494h-.253c-.413 0-.747-.335-.747-.747s.334-.747.747-.747h5.253v-1c0-.535.474-1 1-1h4c.526 0 1 .465 1 1v1h5.254c.412 0 .746.335.746.747s-.334.747-.746.747h-.254v15.435c0 .591-.448 1.071-1 1.071-2.873 0-11.127 0-14 0-.552 0-1-.48-1-1.071zm14.5 0h-13v15.006h13zm-4.25 2.506c-.414 0-.75.336-.75.75v8.5c0 .414.336.75.75.75s.75-.336.75-.75v-8.5c0-.414-.336-.75-.75-.75zm-4.5 0c-.414 0-.75.336-.75.75v8.5c0 .414.336.75.75.75s.75-.336.75-.75v-8.5c0-.414-.336-.75-.75-.75zm3.75-4v-.5h-3v.5z" fill-rule="nonzero"/></svg>
          </span>
          </div>
          <textarea id="OrderNotes" autofocus v-model="texarea" :rows="15" @input="() => {
            if (lotinKrill) {
              lk()
            } else if (krilLotinn) {
              kl()
            }
          }"
            class=" w-full h-full border rounded-lg border-gray-200 align-top shadow-lg sm:text-sm"
            :placeholder="$t('placeholder')"></textarea>
          <span class="w-full text-white flex justify-end">
            <p>{{ c }}/5000</p>
          </span>
        </div>
        <div class="texarea w-full flex justify-center flex-col gap-1" style="transform: translateY(-13px);">
          <div class="tex flex items-center justify-between">
            <label for="OrderNotes" class="block text-sm font-medium"> {{ $t("result") }} </label>
            <span class="flex items-center justify-end mr-2">
          <!-- Copy SVG -->
          <svg @click="copyText"  fill="gray" class="transition-opacity active:scale-95 hover:scale-105 cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="45" height="24" viewBox="0 0 24 24"><path d="M22 6v16h-16v-16h16zm2-2h-20v20h20v-20zm-24 17v-21h21v2h-19v19h-2z"/></svg>
          <!-- Edit SVG -->
    <!-- <svg @click="editResult" clip-rule="evenodd" fill="gray" class="cursor-pointer" width="25" height="25" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m11.25 6c.398 0 .75.352.75.75 0 .414-.336.75-.75.75-1.505 0-7.75 0-7.75 0v12h17v-8.75c0-.414.336-.75.75-.75s.75.336.75.75v9.25c0 .621-.522 1-1 1h-18c-.48 0-1-.379-1-1v-13c0-.481.38-1 1-1zm-2.011 6.526c-1.045 3.003-1.238 3.45-1.238 3.84 0 .441.385.626.627.626.272 0 1.108-.301 3.829-1.249zm.888-.889 3.22 3.22 8.408-8.4c.163-.163.245-.377.245-.592 0-.213-.082-.427-.245-.591-.58-.578-1.458-1.457-2.039-2.036-.163-.163-.377-.245-.591-.245-.213 0-.428.082-.592.245z" fill-rule="nonzero"/></svg> -->
        </span>
          </div>
          <textarea id="Result" :rows="15"
            class=" w-full border rounded-lg border-gray-200 align-top shadow-lg sm:text-sm" v-model="result"
            disabled></textarea>
        </div>
      </div>
    </div>
  </section>
  <footer class="p-4 shadow-inner flex items-center justify-center bg-slate-900">
   <div class="container flex gap-5 items-center justify-center">
     <h2 class="text-2xl font-bold text-white">07/01/2024</h2>
     <h1 class="text-3xl font-bold text-white">{{ $t("autor") }}</h1>
   </div>
   <div class="svg flex items-center justify-center gap-2">
    <!-- telegram -->
   <svg width="24px" class="hover:scale-110" height="24px" fill="white" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"><path id="telegram-5" d="M12,0c-6.627,0 -12,5.373 -12,12c0,6.627 5.373,12 12,12c6.627,0 12,-5.373 12,-12c0,-6.627 -5.373,-12 -12,-12Zm0,2c5.514,0 10,4.486 10,10c0,5.514 -4.486,10 -10,10c-5.514,0 -10,-4.486 -10,-10c0,-5.514 4.486,-10 10,-10Zm2.692,14.889c0.161,0.115 0.368,0.143 0.553,0.073c0.185,-0.07 0.322,-0.228 0.362,-0.42c0.435,-2.042 1.489,-7.211 1.884,-9.068c0.03,-0.14 -0.019,-0.285 -0.129,-0.379c-0.11,-0.093 -0.263,-0.12 -0.399,-0.07c-2.096,0.776 -8.553,3.198 -11.192,4.175c-0.168,0.062 -0.277,0.223 -0.271,0.4c0.006,0.177 0.125,0.33 0.296,0.381c1.184,0.354 2.738,0.847 2.738,0.847c0,0 0.725,2.193 1.104,3.308c0.047,0.139 0.157,0.25 0.301,0.287c0.145,0.038 0.298,-0.001 0.406,-0.103c0.608,-0.574 1.548,-1.461 1.548,-1.461c0,0 1.786,1.309 2.799,2.03Zm-5.505,-4.338l0.84,2.769l0.186,-1.754c0,0 3.243,-2.925 5.092,-4.593c0.055,-0.048 0.062,-0.13 0.017,-0.188c-0.045,-0.057 -0.126,-0.071 -0.188,-0.032c-2.143,1.368 -5.947,3.798 -5.947,3.798Z"/>
  </svg>
   <!-- instagram -->
   <svg xmlns="http://www.w3.org/2000/svg" class="hover:scale-110" fill="white" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 7.082c1.602 0 1.792.006 2.425.035 1.627.074 2.385.845 2.46 2.459.028.633.034.822.034 2.424s-.006 1.792-.034 2.424c-.075 1.613-.832 2.386-2.46 2.46-.633.028-.822.035-2.425.035-1.602 0-1.792-.006-2.424-.035-1.63-.075-2.385-.849-2.46-2.46-.028-.632-.035-.822-.035-2.424s.007-1.792.035-2.424c.074-1.615.832-2.386 2.46-2.46.632-.029.822-.034 2.424-.034zm0-1.082c-1.63 0-1.833.007-2.474.037-2.18.1-3.39 1.309-3.49 3.489-.029.641-.036.845-.036 2.474 0 1.63.007 1.834.036 2.474.1 2.179 1.31 3.39 3.49 3.49.641.029.844.036 2.474.036 1.63 0 1.834-.007 2.475-.036 2.176-.1 3.391-1.309 3.489-3.49.029-.64.036-.844.036-2.474 0-1.629-.007-1.833-.036-2.474-.098-2.177-1.309-3.39-3.489-3.489-.641-.03-.845-.037-2.475-.037zm0 2.919c-1.701 0-3.081 1.379-3.081 3.081s1.38 3.081 3.081 3.081 3.081-1.379 3.081-3.081c0-1.701-1.38-3.081-3.081-3.081zm0 5.081c-1.105 0-2-.895-2-2 0-1.104.895-2 2-2 1.104 0 2.001.895 2.001 2s-.897 2-2.001 2zm3.202-5.922c-.397 0-.72.322-.72.72 0 .397.322.72.72.72.398 0 .721-.322.721-.72 0-.398-.322-.72-.721-.72z"/></svg>
   <!-- Facebook -->
   <svg xmlns="http://www.w3.org/2000/svg" class="hover:scale-110" fill="white" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 10h-2v2h2v6h3v-6h1.82l.18-2h-2v-.833c0-.478.096-.667.558-.667h1.442v-2.5h-2.404c-1.798 0-2.596.792-2.596 2.308v1.692z"/></svg>
   </div>
  </footer>
</template>
<script setup>
import Swal from 'sweetalert2'
import { ref, reactive, toRaw } from 'vue';
const texarea = ref("")
const result = ref("")
const lotinKrill = ref(true)
const krilLotinn = ref(false)
let c = 0
const data = {
  'A': 'А',
  'B': 'Б',
  'D': 'Д',
  'E': 'Е',
  'F': 'Ф',
  'G': 'Г',
  'H': 'Ҳ',
  'I': 'И',
  'J': 'Ж',
  'K': 'К',
  'L': 'Л',
  'M': 'М',
  'N': 'Н',
  'O': 'О',
  'P': 'П',
  'Q': 'Қ',
  'R': 'Р',
  'S': 'С',
  'T': 'Т',
  'U': 'У',
  'V': 'В',
  'X': 'Х',
  'Y': 'Й',
  'Z': 'З',
  'Sh': 'Ш',
  'Ch': 'Ч',
  'O\'': 'Ў',
  'G\'': 'Ғ',
  'Yo': 'Ё',
  'Yu': 'Ю',
  'Ya': 'Я',
  'sh': 'ш',
  'ch': 'ч',
  'o\'': 'ў',
  'g\'': 'ғ',
  'yo': 'ё',
  'yu': 'ю',
  'ya': 'я',
  "a": "a",
  "b": "б",
  "s": "c",
  "d": "д",
  'e': "э",
  "f": "ф",
  "g": "г",
  "h": "х",
  "i": "и",
  "j": "ж",
  "k": "к",
  "l": "л",
  "m": "м",
  "n": "н",
  "o": "о",
  "p": "п",
  "q": "қ",
  "r": "р",
  "s": "с",
  "t": "т",
  "u": "у",
  "v": "в",
  "x": "х",
  "y": "й",
  "z": "з",
  "ch": "ч",
  "'": "ъ",
  "’": "ъ",
  "sh": "ш",
  " ": " ",
  "c": "c",
  "C": "C",
  "w": "w",
  "W": "W",
  ",": ",",
  ".": ".",
  "?": "?",
  "!": "!",
  "-": "-",
  "(": "(",
  ")": ")",
  "[": "[",
  "]": "]",
  "{": "{",
  "}": "}",
  "<": "<",
  ">": ">",
  "/": "/",
  "*": "*",
  "%": "%",
  "^": "^",
  "&": "&",
  "$": "$",
  "#": "#",
  "@": "@",
  "`": "`",
  '"': '"',
  "«": "«",
  "»": "»",
  "No": "No",
  "—": "—",
  "–": "–",
  "“": "“",
  "”": "”",
  "„": "„",
  "‘": "‘",
}

const datakril = {
  'А': 'A',
  'Б': 'B',
  'Д': 'D',
  'Е': 'E',
  'Ф': 'F',
  'Г': 'G',
  "Ц": "Ts",
  "Ч": "Ch",
  'Ҳ': 'H',
  'И': 'I',
  'Ж': 'J',
  'К': 'K',
  'Л': 'L',
  "Ю": "Yu",
  "Я": "Ya",
  "Ё": "Yo",
  "Ғ": "G'",
  "Ш": "Sh",
  'М': 'M',
  'Н': 'N',
  'О': 'O',
  'П': 'P',
  'Қ': 'Q',
  'Р': 'R',
  'С': 'S',
  'Т': 'T',
  'У': 'U',
  'В': 'V',
  'Х': 'X',
  'Й': 'Y',
  'З': 'Z',
  "a": "a",
  'б': 'b',
  'с': 'c',
  'д': 'd',
   "e": "e",
  'э': 'e',
  'ф': 'f',
  'г': 'g',
  'х': 'h',
  'и': 'i',
  'ж': 'j',
  'к': 'k',
  'л': 'l',
  'м': 'm',
  'н': 'n',
  'о': 'o',
  'п': 'p',
  'қ': 'q',
  'р': 'r',
  'с': 's',
  "ў":"o\'",
  'т': 't',
  'у': 'u',
  'в': 'v',
  'х': 'x',
  'й': 'y',
  'з': 'z',
  'ч': 'ch',
  "ю": "yu",
  "я": "ya",
  "ь": "'",
  "ё": "yo",
  'ъ': "'",
  'ш': 'sh',
  "ц": "ts",
  ' ': ' ',
  'c': 'c',
  'C': 'C',
  'w': 'w',
  'W': 'W',
  ',': ',',
  '.': '.',
  '?': '?',
  '!': '!',
  '-': '-',
  '(': '(',
  ')': ')',
  '[': '[',
  ']': ']',
  '{': '{',
  '}': '}',
  '<': '<',
  '>': '>',
  '/': '/',
  '*': '*',
  '%': '%',
  '^': '^',
  '&': '&',
  '$': '$',
  '#': '#',
  '@': '@',
  '`': '`',
  '"': '"',
  '«': '«',
  '»': '»',
  'No': 'No',
  '—': '—',
  '–': '–',
  '“': '“',
  '”': '”',
  '„': '„',
}

const lk = () => {
     let s = texarea.value.length
  c = s
  if (texarea.value.length > 5000) {
    Swal.fire({
      title: 'Xatolik!',
      text: 'Kiritilgan hariflar soni 100 tadan oshiq!',
      icon: 'error',
      confirmButtonText: 'Cool'
    });

  } else {
    localStorage.setItem("lotin", texarea.value)
    // result.value = localStorage.getItem("lotin");
    let k = ""
    for (let i = 0; i < texarea.value.length; i++) {
      const letter = texarea.value[i];

      for (const key in data) {
        if (key == letter) {
          k += letter
        }
        if (k.includes('sh')) {
          k = k.replace('sh', 'ш')
        }
        if (k.includes('Sh')) {
          k = k.replace('Sh', 'Ш')
        }
        if (k.includes('SH')) {
          k = k.replace('SH', 'Ш')
        }
        if (k.includes('ch')) {
          k = k.replace('ch', 'ч')
        }
        if (k.includes('Ch')) {
          k = k.replace('Ch', 'Ч')
        }
        if (k.includes('CH')) {
          k = k.replace('CH', 'Ч')
        }
        if (k.includes('ya')) {
          k = k.replace('ya', 'я')
        }
        if (k.includes('Ya')) {
          k = k.replace('Ya', 'Я')
        }
        if (k.includes('yu')) {
          k = k.replace('yu', 'ю')
        }
        if (k.includes('Yu')) {
          k = k.replace('Yu', 'Ю')
        }
        if (k.includes('yo')) {
          k = k.replace('yo', 'ё')
        }
        if (k.includes('Yo')) {
          k = k.replace('Yo', 'Ё')
        }
        if (k.includes('g\'')) {
          k = k.replace('g\'', 'ғ')
        }
        if (k.includes('G\'')) {
          k = k.replace('G\'', 'Ғ')
        }
        if (k.includes('ts')) {
          k = k.replace('ts', 'ц')
        }
        if (k.includes('Ts')) {
          k = k.replace('Ts', 'Ц')
        }
        if (k.includes('o\'')) {
          k = k.replace('o\'', 'ў')
        }
        if (k.includes('O\'')) {
          k = k.replace('O\'', 'Ў')
        }
        if (k.includes('O\`')) {
          k = k.replace('O\`', 'Ў')
        }
      }
    }

    for (let e = 0; e < texarea.value.length; e++) {
      for (const key in data) {
        if (key == texarea.value[e]) {
          k = k.replace(texarea.value[e], data[key])

        }
      }
    }
    result.value = k
  }
}
const kl = () => {
    let s = texarea.value.length
  c = s
  if (texarea.value.length > 5000) {
    Swal.fire({
      title: 'Xatolik!',
      text: 'Kiritilgan hariflar soni 100 tadan oshiq!',
      icon: 'error',
      confirmButtonText: 'Cool'
    });

  } else {
    localStorage.setItem("lotin", texarea.value)
    let k = ""
    for (let i = 0; i < texarea.value.length; i++) {
      const letter = texarea.value[i];

      for (const key in datakril) {
        if (key == letter) {
          k += letter
        }
        if (k.includes('ш')) {
          k = k.replace('ш', 'sh')
        }
        if (k.includes('Ш')) {
          k = k.replace('Ш', 'Sh')
        }
        if (k.includes('Ч')) {
          k = k.replace('Ч', 'Ch')
        }
        if (k.includes('ч')) {
          k = k.replace('ч', 'ch')
        }
        if (k.includes('ю')) {
          k = k.replace('ю', 'yu')
        }
        if (k.includes('ў')) {
          k = k.replace('ў', 'o\'')
        }
        if (k.includes('ў')) {
          k = k.replace('ў', 'o\'')
        }
        if (k.includes('ц')) {
          k = k.replace('ц', 'ts')
        }
        if (k.includes('ғ')) {
          k = k.replace('ғ', 'g\'')
        }
        if (k.includes('Ғ')) {
          k = k.replace('Ғ', 'G\'')
        }
        if (k.includes('Ц')) {
          k = k.replace('Ц', 'Ts')
        }
        if (k.includes('Ю')) {
          k = k.replace('Ю', 'Yu')
        }
        if (k.includes('Я')) {
          k = k.replace('Я', 'Ya')
        }
        if (k.includes('я')) {
          k = k.replace('я', 'ya')
        }
        if(k.includes('ю')){
          k = k.replace('ю', 'yu')
        }
        if(k.includes('Ё')){
          k = k.replace('Ё', 'Yo')
        }
        if(k.includes("ё")){
          k = k.replace("ё", "yo")
        }
        if (k.includes('')) {
          
        }
      }
    }

    for (let e = 0; e < texarea.value.length; e++) {
      for (const key in datakril) {
        if (key == texarea.value[e]) {
          k = k.replace(texarea.value[e], datakril[key])
        }
        // else if (key !== texarea.value[e]) {
        //   k =texarea.value
        // }
      }
    }
    result.value = k
    
  }
}
const clearTextareaValue = () => {
  document.querySelector("#Result").disabled = true
  texarea.value = ""
  result.value = ""
  c = 0
}

const lotinKril = () => {
  localStorage.setItem("letter", "LK")
  // location.reload();
  clearTextareaValue()
  lotinKrill.value = true
  krilLotinn.value = false
  console.log(lotinKrill.value, "LK");
  console.log(krilLotinn.value ,"KL"); 
  document.querySelector('#lotinkril').style.background = 'white';
  document.querySelector('#lotinkril').style.color = '#000';
  document.querySelector('#krillotin').style.background = '';
  document.querySelector('#krillotin').style.color = '';
}
const krilLotin = () => {
  localStorage.setItem("letter", "KL")
  //  location.reload();
  clearTextareaValue()
  lotinKrill.value = false
  krilLotinn.value = true
  console.log(lotinKrill.value, "lk");
  console.log(krilLotinn.value ,"kl");
  document.querySelector('#lotinkril').style.background = 'transparent';
  document.querySelector('#lotinkril').style.color = '#fff';
  document.querySelector('#krillotin').style.background = 'white';
  document.querySelector('#krillotin').style.color = '#000';
}
const copyText = () => {
  if (result.value === "") {
    Swal.fire({
      position: "center",
      icon: "error",
      title: "Maydon bo'sh",
      showConfirmButton: false,
      timer: 1500
    });
  } else {
    navigator.clipboard.writeText(result.value)
      document.querySelector("#Result").disabled = true
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Nusxalash amalga oshirildi",
      showConfirmButton: false,
      timer: 1500
    });
  }
}

const editResult = () => {
  console.log(656);
  document.querySelector("#Result").disabled=false
}

</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Alfa+Slab+One&family=Alkatra&family=Anton&family=Bebas+Neue&family=Bruno+Ace+SC&family=Cabin&family=Cormorant&family=Lunasima&family=Merienda&family=Roboto:wght@700&family=Salsa&family=Teko&family=Young+Serif&display=swap');
section{
  /* background: url(https://www.suck.uk.com/binary_data_seo/fridgefonts-closeup1-matt_24262.jpg); */
  background-color: black;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  object-fit: cover;
  padding: 59.5px 0;
  height: 100vh;
  color: #fff;
}
svg{
  transition: all .2s linear;
  cursor: pointer;
}
.container {
  width: 1200px;
  margin: 0 auto;
  font-family: 'Salsa', cursive;
}
textarea{
  background: rgb(44, 44, 44);
  color: #fff;
  backdrop-filter: blur(15px);
  outline: none;
}
@media screen and (min-width: 300px) and (max-width:400px) {
  .container {
    width: 100%;
    display: flex;
    gap: 30px;
    flex-direction: column;
  }

  .container .texts {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 20px;
    justify-content: center;
    flex-direction: column;
  }

  .container .texts .texarea {
    width: 100%;
  }

  .container .texts .btns {
    width: 50%;
  }
}

@media screen and (min-width: 400px) and (max-width:600px) {
  .container {
    width: 100%;
    gap: 30px;
    display: flex;
    flex-direction: column;
  }

  .container .texts {
    display: flex;
    align-items: center;
    gap: 20px;
    justify-content: center;
    flex-direction: column;
  }

  .container .texts .texarea {
    width: 100%;
  }

  .container .texts .btns {
    width: 50%;
  }
}

@media screen and (min-width: 600px) and (max-width:800px) {
  .container {
    width: 100%;
    display: flex;
    gap: 30px;
    flex-direction: column;
  }

  .container .texts {
    display: flex;
    align-items: center;
    gap: 20px;
    justify-content: center;
    flex-direction: column;
  }

  .container .texts .texarea {
    width: 100%;
  }

  .container .texts .btns {
    width: 50%;
  }
}
</style>
