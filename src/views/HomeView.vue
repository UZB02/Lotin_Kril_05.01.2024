<template>
  <header class="py-4 shadow-md">
    <div class="container flex items-center justify-center">
      <h1 class="text-3xl text-center font-bold text-indigo-600">{{ $t("title") }}</h1>
    </div>
  </header>
 <section>
   <div style="padding: 50px 10px;" class="container sm:w-full md:w-full flex justify-center flex-col gap-2">
      <div class="btns flex items-center w-full gap-4 justify-center">
        <button @click="lotinKril" id="lotinkril"
          class="group focus:bg-indigo-600 text-center focus:text-white flex items-center justify-between gap-4 rounded-lg border border-current w-full px-1 py-2 text-indigo-600 transition-colors hover:bg-indigo-600  active:bg-indigo-500">
          <span
            class="font-medium text-cente w-full transition-colors group-hover:text-white  group-hover:text-indigo-600 group-active:text-indigo-500">
            Lotin-Kril
          </span>

          <span
            class="shrink-0 rounded-full border border-current bg-white p-2 text-indigo-600 group-active:text-indigo-500">
            <svg class="h-5 w-5 rtl:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
        </button>

        <button @click="krilLotin" id="krillotin"
          class="group flex items-center justify-between gap-4 rounded-lg border border-current w-full px-1 py-2 text-indigo-600 transition-colors hover:bg-indigo-600 focus:bg-indigo-600 focus:text-white active:bg-indigo-500">
     <span
              class="font-medium text-cente w-full transition-colors group-hover:text-white  group-hover:text-indigo-600 group-active:text-indigo-500">
              Крил-Лотин
            </span>
          <span
            class="shrink-0 rounded-full border border-current bg-white p-2 text-indigo-600 group-active:text-indigo-500">
            <svg class="h-5 w-5 rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
        </button>
      </div>
      <div class="texts flex items-center justify-center gap-3">
        <div class="texarea w-full flex  flex-col gap-1">
          <div class="actions flex items-center justify-between">
            <div class="tex">
              <label for="OrderNotes" class="block text-sm font-medium text-gray-700">{{ $t("text") }} </label>
            </div>
              <span class="flex items-center justify-end">
                <!-- delete SVG -->
            <svg  @click="clearTextareaValue" class="cursor-pointer" clip-rule="evenodd" fill="gray" width="25" height="25" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m4.015 5.494h-.253c-.413 0-.747-.335-.747-.747s.334-.747.747-.747h5.253v-1c0-.535.474-1 1-1h4c.526 0 1 .465 1 1v1h5.254c.412 0 .746.335.746.747s-.334.747-.746.747h-.254v15.435c0 .591-.448 1.071-1 1.071-2.873 0-11.127 0-14 0-.552 0-1-.48-1-1.071zm14.5 0h-13v15.006h13zm-4.25 2.506c-.414 0-.75.336-.75.75v8.5c0 .414.336.75.75.75s.75-.336.75-.75v-8.5c0-.414-.336-.75-.75-.75zm-4.5 0c-.414 0-.75.336-.75.75v8.5c0 .414.336.75.75.75s.75-.336.75-.75v-8.5c0-.414-.336-.75-.75-.75zm3.75-4v-.5h-3v.5z" fill-rule="nonzero"/></svg>
            <!-- Copy SVG -->
      <!-- <svg @click="copyText" fill="gray" class="cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 24 24"><path d="M22 6v16h-16v-16h16zm2-2h-20v20h20v-20zm-24 17v-21h21v2h-19v19h-2z"/></svg> -->
          </span>
          </div>
          <textarea id="OrderNotes" v-model="texarea" :rows="15" @input="() => {
            if (lotinKrill) {
              lk()
            } else if (krilLotinn) {
              kl()
            }
          }"
            class=" w-full h-full border rounded-lg border-gray-200 align-top shadow-lg sm:text-sm"
            :placeholder="$t('placeholder')"></textarea>
          <span class="w-full flex justify-end">
            <p>{{ c }}/100</p>
          </span>
        </div>
        <div class="texarea w-full flex justify-center flex-col gap-1" style="transform: translateY(-13px);">
          <div class="tex flex items-center justify-between">
            <label for="OrderNotes" class="block text-sm font-medium text-gray-700"> {{ $t("result") }} </label>
            <span class="flex items-center justify-end">
          <!-- Copy SVG -->
          <svg @click="copyText"  fill="gray" class="cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="45" height="24" viewBox="0 0 24 24"><path d="M22 6v16h-16v-16h16zm2-2h-20v20h20v-20zm-24 17v-21h21v2h-19v19h-2z"/></svg>
          <!-- Edit SVG -->
    <svg @click="editResult" clip-rule="evenodd" fill="gray" class="cursor-pointer" width="25" height="25" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m11.25 6c.398 0 .75.352.75.75 0 .414-.336.75-.75.75-1.505 0-7.75 0-7.75 0v12h17v-8.75c0-.414.336-.75.75-.75s.75.336.75.75v9.25c0 .621-.522 1-1 1h-18c-.48 0-1-.379-1-1v-13c0-.481.38-1 1-1zm-2.011 6.526c-1.045 3.003-1.238 3.45-1.238 3.84 0 .441.385.626.627.626.272 0 1.108-.301 3.829-1.249zm.888-.889 3.22 3.22 8.408-8.4c.163-.163.245-.377.245-.592 0-.213-.082-.427-.245-.591-.58-.578-1.458-1.457-2.039-2.036-.163-.163-.377-.245-.591-.245-.213 0-.428.082-.592.245z" fill-rule="nonzero"/></svg>
        </span>
          </div>
          <textarea id="Result" :rows="15"
            class=" w-full border rounded-lg border-gray-200 align-top shadow-lg sm:text-sm" v-model="result"
            disabled></textarea>
        </div>
      </div>
    </div>
 </section>
 <footer class="p-4 shadow-inner">
  <div class="container flex gap-5 items-center justify-center">
    <h2 class="text-2xl font-bold text-indigo-600">07/01/2024</h2>
    <h1 class="text-3xl font-bold text-indigo-600">{{ $t("autor") }}</h1>
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
  if (texarea.value.length > 100) {
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
        if (k.includes('yu')) {
          k = k.replace('yu', 'ю')
        }
        if (k.includes('yo')) {
          k = k.replace('yo', 'ё')
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
        if (k.includes('o\'')) {
          k = k.replace('o\'', 'ў')
        }
        if (k.includes('o\`')) {
          k = k.replace('o\`', 'ў')
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
  if (texarea.value.length > 100) {
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
        if (k.includes('я')) {
          k = k.replace('я', 'ya')
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
  location.reload();
  clearTextareaValue()
  lotinKrill.value = true
  krilLotinn.value = false
  console.log(lotinKrill.value, "LK");
  console.log(krilLotinn.value ,"KL"); 
  document.querySelector('#lotinkril').style.background = 'blue';
  document.querySelector('#lotinkril').style.color = '#fff';
  document.querySelector('#krillotin').style.background = '';
  document.querySelector('#krillotin').style.color = '';
}
const krilLotin = () => {
  localStorage.setItem("letter", "KL")
   location.reload();
  clearTextareaValue()
  lotinKrill.value = false
  krilLotinn.value = true
  console.log(lotinKrill.value, "lk");
  console.log(krilLotinn.value ,"kl");
  document.querySelector('#lotinkril').style.background = '';
  document.querySelector('#lotinkril').style.color = '';
  document.querySelector('#krillotin').style.background = 'blue';
  document.querySelector('#krillotin').style.color = '#fff';
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
.container {
  width: 1200px;
  margin: 0 auto;
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
