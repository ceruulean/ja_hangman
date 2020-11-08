import * as KANA from 'japanese-json';
import * as SOUNDS from './kanasounds.json';

// Create simple jsons out of the big guy
// like this { Kana : Romaji } 
// i.e. {"ん": "n", ... }
const ToRomanji = new Map();
var KatakanaToRomaji = {},   
    HiraganaToRomaji = {},
    RomajiToHiragana = {},
    RomajiToKatakana = {},
    HiraganaToKatakana = {};

function SimplestJSON(JapaneseJSON) {
    for (var parent in JapaneseJSON) {
        if (JapaneseJSON.hasOwnProperty(parent)) {
            var vowels = JapaneseJSON[parent];

            for (var vowel in vowels) {
                if (vowels.hasOwnProperty(vowel)) {
                    var types = vowels[vowel];

                    for (var type in types) {
                        if (types.hasOwnProperty(type)) {
                            var character = types[type];

                            HiraganaToRomaji[character["Hiragana"]] = character["Romaji"];
                            KatakanaToRomaji[character["Katakana"]] = character["Romaji"];
                            RomajiToHiragana[character["Romaji"]]   = character["Hiragana"];
                            RomajiToKatakana[character["Romaji"]]   = character["Katakana"];
                            HiraganaToKatakana[character["Hiragana"]] = character["Katakana"];
                            ToRomanji.set(character["Hiragana"], character["Romaji"]);
                            ToRomanji.set(character["Katakana"], character["Romaji"]);
                        }
                    }
                }
            }
        }
    }
} 



// Create something a bit more complicated, but simpler than the big guy
// i.e. { k : [{ "カ" : "ka"}, ... ], ...}
var RomajiToHiragana = {},
    RomajiToKatakana = {};

function SimpleJSON(JapaneseJSON, RomajiToHiragana, RomajiToKatakana) {
    for (parent in JapaneseJSON) {
        if (JapaneseJSON.hasOwnProperty(parent)) {
            var vowels = JapaneseJSON[parent];

            RomajiToHiragana[parent] = [];
            RomajiToKatakana[parent] = [];

            for (vowel in vowels) {
                if (vowels.hasOwnProperty(vowel)) {
                    var types = vowels[vowel];
                    for (type in types) {
                        if (types.hasOwnProperty(type)) {
                            var character = types[type],
                                tmp1 = character["Romaji"],
                                tmpHiragana = {},
                                tmpKatakana = {};

                             tmpHiragana[character["Romaji"]] = character["Hiragana"];
                             tmpKatakana[character["Romaji"]] = character["Katakana"];

                            RomajiToHiragana[parent].push(tmpHiragana);
                            RomajiToKatakana[parent].push(tmpKatakana);
                        }
                    }
                }
            }
        }
    } 
}

function syllabaries(syllabery){
    return function(alphabet){
        let result = {}
        for (parent in KANA) {
            let sylls = KANA[parent];
            for (let s in sylls) {
                if (s.startsWith('y')) {continue}
                if (sylls[s][syllabery] != undefined){
                    if (!result[parent]) result[parent] = {};
                    result[parent][s] = sylls[s][syllabery][alphabet];
                }
            }
        }
    return result;
    };
}

function getSoundPath(female){
    return function(romanji){
        return SOUNDS.host + "/"
        + SOUNDS.romanji[romanji]
        + "-" + romanji + (female? " (1)" : "") + ".mp3"
    }
}

function getMaleSound(char) {
    let r;
    if (ToRomanji.has(char)){
        r = ToRomanji.get(char)
    } else {
        r = char;
    }
    return getSoundPath()(r);
}

function getFemaleSound(char) {
    let r;
    if (ToRomanji.has(char)){
        r = ToRomanji.get(char)
    } else {
        r = char;
    }
    return getSoundPath(true)(r);
}

function toRomanji(char){
    return ToRomanji.get(char);
}

SimplestJSON(KANA);
const SEION = syllabaries('Seion');
const DAKUON = syllabaries('Dakuon');
const HANDAKUON = syllabaries('Handakuon');

export {
  KatakanaToRomaji,  
    HiraganaToRomaji,
    RomajiToHiragana,
    RomajiToKatakana,
    HiraganaToKatakana,
    HANDAKUON,
    DAKUON,
    SEION,
    getMaleSound,
    getFemaleSound
}