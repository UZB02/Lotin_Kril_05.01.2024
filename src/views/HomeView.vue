<template>
  <div class="container xs:bg-yellow-500 sm:w-full md:w-full h-screen flex justify-center flex-col gap-20">
    <div class="texts flex items-center justify-center gap-3">
      <div class="texarea w-1/2 h-60 p-4">
        <label for="OrderNotes" class="block text-sm font-medium text-gray-700">Maksimal belgilar soni: 100 ta </label>
        <textarea id="OrderNotes" v-model="texarea" @input="textareaValue"
          class="mt-2 w-full h-full border p-3 rounded-lg border-gray-200 align-top shadow-lg sm:text-sm" rows="4"
          placeholder="Lotin harflarida matn kiriting"></textarea>
        <span class="w-full flex justify-end">
          <p>{{ c }}/100</p>
        </span>
      </div>
      <div class="btns flex items-center w-1/4 gap-4 flex-col justify-center">
        <button @click="lotinKril" id="lotinkril"
          class="group focus:bg-indigo-600 focus:text-white flex items-center justify-between gap-4 rounded-lg border border-current w-full px-1 py-2 text-indigo-600 transition-colors hover:bg-indigo-600  active:bg-indigo-500">
          <span
            class="font-medium transition-colors group-hover:text-white  group-hover:text-indigo-600 group-active:text-indigo-500">
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
          <span class="font-medium transition-colors group-hover:text-white"> Kril-Lotin </span>

          <span
            class="shrink-0 rounded-full border border-current bg-white p-2 text-indigo-600 group-active:text-indigo-500">
            <svg class="h-5 w-5 rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
        </button>
      </div>
      <div class="texarea w-1/2 h-60  p-4">
        <label for="OrderNotes" class="block text-sm font-medium text-gray-700"> Natija </label>

        <textarea id="OrderNotes"
          class="mt-2 w-full h-full p-3 border rounded-lg border-gray-200 align-top shadow-lg sm:text-sm" rows="4"
          v-model="result" disabled></textarea>
      </div>
    </div>
    <div class="buttons flex items-center justify-between">
      <!-- Base -->

      <button @click="clearTextareaValue"
        class="inline-block rounded border border-red-600 bg-red-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-red-600  active:text-red-500"
        href="/download">
        Tozalash
      </button>

      <button @click="copyText"
        class="inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none  active:text-indigo-500"
        href="/download">
        Nusxalash
      </button>

    </div>
  </div>
</template>
<script setup>
import Swal from 'sweetalert2'
import { ref, reactive, toRaw } from 'vue';
const texarea = ref(null)
const result = ref("")
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
  "'": "'",
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
  "’": "’",
}
// const dataKril = {
//   'А',
//   'Б',
//   'Д',
//   'Е',
//   'Ф',
//   'Г',
//   'Ҳ',
//   'И',
//   'Ж',
//   'К',
//   'Л',
//   'М',
//   'Н',
//   'О',
//   'П',
//   'Қ',
//   'Р',
//   'С',
//   'Т',
//   'У',
//   'В',
//   'Х',
//   'Й',
//   'З',
//   'Ў',
//   'Ғ',
//   'Ш',
//   'Ч',
//   "Ў",
//   "Ғ",
//   'Ё',
//   'Ю',
//   'Я',
//   'ў',
//   'ғ',
//   'ш',
//   'ч',
//   "ў",
//   "ғ",
//   'ё',
//   'ю',
//   'я',
//   "a",
//   "б",
//   "c",
//   "д",
//   "э",
//   "ф",
//   "г",
//   "х",
//   "и",
//   "ж",
//   "к",
//   "л",
//   "м",
//   "н",
//   "о",
//   "п",
//   "қ",
//   "р",
//   "с",
//   "т",
//   "у",
//   "в",
//   "х",
//   "й",
//   "з",
//   "ч"
//   "ъ",
//   "ш"
// }
const textareaValue = () => {
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
        if (k.includes('O\'')) {
          k = k.replace('O\'', 'Ў')
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
};


const clearTextareaValue = () => {
  texarea.value = ""
  result.value = ""
  c = 0
}

const lotinKril = () => {
  document.querySelector('#lotinkril').style.background = 'blue';
  document.querySelector('#lotinkril').style.color = '#fff';
  document.querySelector('#krillotin').style.background = '';
  document.querySelector('#krillotin').style.color = '';
  textareaValue()
}
const krilLotin = () => {
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
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Nusxalash amalga oshirildi",
      showConfirmButton: false,
      timer: 1500
    });
  }
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
    background-color: yellow;
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
