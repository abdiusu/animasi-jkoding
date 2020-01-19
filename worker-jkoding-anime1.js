//<![CDATA[
function maketextnumber(A) {
    for (var e = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"], t = A, n = new Array, o = 0; o <= t - 1; o++) n[o] = e[parseInt(Math.random() * e.length)], n = n, randomtextnumber = n.join("")
}
var random_number = ["6", "7", "8", "9", "10", "11", "12", "13"];
! function (A, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e(A) : "function" == typeof define && define.amd ? define(e) : e(A)
}("undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : this, function (global) {
    "use strict";
    global = global || {};
    var _Base64 = global.Base64,
        version = "2.5.1",
        buffer;
    if ("undefined" != typeof module && module.exports) try {
        buffer = eval("require('buffer').Buffer")
    } catch (A) {
        buffer = void 0
    }
    var b64chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
        b64tab = function (A) {
            for (var e = {}, t = 0, n = A.length; t < n; t++) e[A.charAt(t)] = t;
            return e
        }(b64chars),
        fromCharCode = String.fromCharCode,
        cb_utob = function (A) {
            if (A.length < 2) return (e = A.charCodeAt(0)) < 128 ? A : e < 2048 ? fromCharCode(192 | e >>> 6) + fromCharCode(128 | 63 & e) : fromCharCode(224 | e >>> 12 & 15) + fromCharCode(128 | e >>> 6 & 63) + fromCharCode(128 | 63 & e);
            var e = 65536 + 1024 * (A.charCodeAt(0) - 55296) + (A.charCodeAt(1) - 56320);
            return fromCharCode(240 | e >>> 18 & 7) + fromCharCode(128 | e >>> 12 & 63) + fromCharCode(128 | e >>> 6 & 63) + fromCharCode(128 | 63 & e)
        },
        re_utob = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,
        utob = function (A) {
            return A.replace(re_utob, cb_utob)
        },
        cb_encode = function (A) {
            var e = [0, 2, 1][A.length % 3],
                t = A.charCodeAt(0) << 16 | (A.length > 1 ? A.charCodeAt(1) : 0) << 8 | (A.length > 2 ? A.charCodeAt(2) : 0);
            return [b64chars.charAt(t >>> 18), b64chars.charAt(t >>> 12 & 63), e >= 2 ? "=" : b64chars.charAt(t >>> 6 & 63), e >= 1 ? "=" : b64chars.charAt(63 & t)].join("")
        },
        btoa = global.btoa ? function (A) {
            return global.btoa(A)
        } : function (A) {
            return A.replace(/[\s\S]{1,3}/g, cb_encode)
        },
        _encode = buffer ? buffer.from && Uint8Array && buffer.from !== Uint8Array.from ? function (A) {
            return (A.constructor === buffer.constructor ? A : buffer.from(A)).toString("base64")
        } : function (A) {
            return (A.constructor === buffer.constructor ? A : new buffer(A)).toString("base64")
        } : function (A) {
            return btoa(utob(A))
        },
        encode = function (A, e) {
            return e ? _encode(String(A)).replace(/[+\/]/g, function (A) {
                return "+" == A ? "-" : "_"
            }).replace(/=/g, "") : _encode(String(A))
        },
        encodeURI = function (A) {
            return encode(A, !0)
        },
        re_btou = new RegExp(["[À-ß][-¿]", "[à-ï][-¿]{2}", "[ð-÷][-¿]{3}"].join("|"), "g"),
        cb_btou = function (A) {
            switch (A.length) {
            case 4:
                var e = ((7 & A.charCodeAt(0)) << 18 | (63 & A.charCodeAt(1)) << 12 | (63 & A.charCodeAt(2)) << 6 | 63 & A.charCodeAt(3)) - 65536;
                return fromCharCode(55296 + (e >>> 10)) + fromCharCode(56320 + (1023 & e));
            case 3:
                return fromCharCode((15 & A.charCodeAt(0)) << 12 | (63 & A.charCodeAt(1)) << 6 | 63 & A.charCodeAt(2));
            default:
                return fromCharCode((31 & A.charCodeAt(0)) << 6 | 63 & A.charCodeAt(1))
            }
        },
        btou = function (A) {
            return A.replace(re_btou, cb_btou)
        },
        cb_decode = function (A) {
            var e = A.length,
                t = e % 4,
                n = (e > 0 ? b64tab[A.charAt(0)] << 18 : 0) | (e > 1 ? b64tab[A.charAt(1)] << 12 : 0) | (e > 2 ? b64tab[A.charAt(2)] << 6 : 0) | (e > 3 ? b64tab[A.charAt(3)] : 0),
                o = [fromCharCode(n >>> 16), fromCharCode(n >>> 8 & 255), fromCharCode(255 & n)];
            return o.length -= [0, 0, 2, 1][t], o.join("")
        },
        _atob = global.atob ? function (A) {
            return global.atob(A)
        } : function (A) {
            return A.replace(/\S{1,4}/g, cb_decode)
        },
        atob = function (A) {
            return _atob(String(A).replace(/[^A-Za-z0-9\+\/]/g, ""))
        },
        _decode = buffer ? buffer.from && Uint8Array && buffer.from !== Uint8Array.from ? function (A) {
            return (A.constructor === buffer.constructor ? A : buffer.from(A, "base64")).toString()
        } : function (A) {
            return (A.constructor === buffer.constructor ? A : new buffer(A, "base64")).toString()
        } : function (A) {
            return btou(_atob(A))
        },
        decode = function (A) {
            return _decode(String(A).replace(/[-_]/g, function (A) {
                return "-" == A ? "+" : "/"
            }).replace(/[^A-Za-z0-9\+\/]/g, ""))
        },
        noConflict = function () {
            var A = global.Base64;
            return global.Base64 = _Base64, A
        };
    if (global.Base64 = {
            VERSION: version,
            atob: atob,
            btoa: btoa,
            fromBase64: decode,
            toBase64: encode,
            utob: utob,
            encode: encode,
            encodeURI: encodeURI,
            btou: btou,
            decode: decode,
            noConflict: noConflict,
            __buffer__: buffer
        }, "function" == typeof Object.defineProperty) {
        var noEnum = function (A) {
            return {
                value: A,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        };
        global.Base64.extendString = function () {
            Object.defineProperty(String.prototype, "fromBase64", noEnum(function () {
                return decode(this)
            })), Object.defineProperty(String.prototype, "toBase64", noEnum(function (A) {
                return encode(this, A)
            })), Object.defineProperty(String.prototype, "toBase64URI", noEnum(function () {
                return encode(this, !0)
            }))
        }
    }
    return global.Meteor && (Base64 = global.Base64), "undefined" != typeof module && module.exports ? module.exports.Base64 = global.Base64 : "function" == typeof define && define.amd && define([], function () {
        return global.Base64
    }), {
        Base64: global.Base64
    }
});
var imagefile = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAMAAADDpiTIAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAABYLAAAWCwF/80maAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAvpQTFRF////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWsAc9wAAAP10Uk5TAAECAwQFBgcICQoLDA0ODxAREhMUFRYXGBkaGxwdHh8gISIjJCUmJygpKissLS4vMDEyMzQ1Njc4OTo7PD0+P0BBQkNERUZHSEpLTE1OT1BRUlNUVVZXWFlaW1xdXl9gYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXp7fH1+f4CBgoOEhYeIiYqLjI2Oj5CRkpOUlZaXmJmam5ydnp+goaKjpKWmp6ipqqusra6vsLGys7S1tre4ubq7vL2+v8DBwsPExcbHyMnKy8zNzs/Q0dLT1NXW19jZ2tvc3d7f4OHi4+Tl5ufo6err7O3u7/Dx8vP09fb3+Pn6+/z9/l2toQIAABGASURBVHja7d15eBXVHcbxX24WskDCYljCUkTQCGJsESlIwSoKVii2IFRQqFKxoqWipdatWqlStVJXRFRaN0otxSoVFSmtVISiggtiRUQEjUAJhBBIws08T4W6MufenGxnzpz5vn/mDHfOnffzkMzcuXNEgk7zcx97aUvcI8pUblpx/7AscTeFf6mk5ZpSNr2Fo/U3vZX6tbJjgpP9t1pBtbq5K829/gvepFf9zE9xrf+8N2i1NpnmWP8ZS+i0dhnsFoA/0GgtsybmUv83UGitM8ah/s+jztpnsTv9n1ZFnbVPlTPXg4pKabMuGeFI/x0202WdMsWN/nPXUGXdcrMT/ac/S5N1zANOAHiAIuuaOS70fy09RhrAudQYaQCncANApAEcs5MWowygYBMlRhlA01fpMMoA0p6mwkgDmEWDkQZwJQVGGsDZ1RQYZQADK+gvygCOLqG+KANou7E273Pr3OhmnpMAclbVCvpSiW4yXQSQ+qQHgCgDuNsDQJQBTPUAEGUAo6oBEGUA/fd5AIgwgKP+6wEgwgBav+sBIMIAsuv0DBAAuAIgtsADQJQB3O4BIMoALvUAEGUA348DIMoA+u71ABBhAF23eQCIMIDD3vEAEGEAmS96AIgwgNjjHgCiDOBWDwBRBnCJB4AoA/huHABRBnDCHg8AEQbQ5WMPABEG0HKdTse7ywHgJoAm/9Tpf//pxQBwEkDKXK3/5CcKANwEMF2r/xsFAG4C+LFW/4+mAMBNAN/Zr9P/P5oIAJwE0KtMp/+3Dj71HgDuAfjaRzr9F3cWADgJoPlanf73HC8AcBJAxt+1LgAMFQA4CSDlYa0TgEkCADcB/Fqr/y+WvACAWwAmaPU/LwUAbgIYorUM3LJMAYCTAI7brdP/260EAE4C6LhF6+FvRwgAnASQ97pO/+V9BABOAkhfrNN//EwBgJsA5midAEwWALgJ4Dqt/m8TALgJYLxW//NjAHATwCCtZeCWZwkAnATQc5dO/+vzBQBOAmj/gU7/27sJAJwE0Gy1Tv97+wkAnASQtkin/+oRAgA3AczWOgG4TADgJoCrtfq/QwDgJoCxWv0/EQOAmwC+rbUM3MpsAYCTALqX6PS/obUAwEkA7d7X6f+/hQIAJwE0fVmn/33fEgA4CSB1odYFgNECADcBzNQ6Afi5AMBNAFdo9X+PAMBNAKO1loF7KhUAbgIYoLUM3Ms5AgAnARTu0Ol/Y1sBgJMA2mzQ6b+kuwDASQDZK3X6rzhJAOAkgNQntE4AxgoA3ARwp1b/V0nwAPKOHXzO+CAybnifDs4CuEyr//skaAD5k5dqPa6ssbL+lt5OAhipdQFgUVrAAHKuLfUCz4JC9wCcqLUM3KvNJFgARRs9G1J1sWsAum3Xed+bCiRYAMPLPEtyb6pTAPLX67zpXT0lWAADKj1rMsMlAFnLdd5y5SAJFkDnbZ5FOd8dALH5Wu94nAQMYKFN/Xt7CpwBMEPrDf9SAgYw0LMrs10BMFnr7T4oQQNYYhmAeGc3AJyptQzcc+lBA8iPWwbA91yUcALoU67zXl/LlaABnGdb/95iFwAcsVXnrW6u5RXwxgAwyzoAZQ4AaPW2zjstLZLgATxlHQAvL/QAMpdpvdH7R9cyOxsBwCr7APQIO4CUeQEctboCWGkfgMKwA7jZCxGAJ+wD0CzkACZ5YQJwj3X97wz5H4FD94cKwBjrACwMN4Bj93ihAtC80jYAE0MNIOVfXrgAWHceWNEu1ADGeWED0KvaLgC3hfrDoLzi0AGQuVb1X9Iy1ABmeOED0Pp9i/qvPjPcN4SUhBCAHFdmD4BrJNQAOnlhBCADbLkprPp6CTeAM8IJQDqvtqL/3SMl5ACuDCkASbtgS+D1V81sK2EHMDesAESyRs3dFWD78WWXH173T1+tAbA0uCP4ZP1nH2tddOqQIDL4m19rUq+P3wHgebMkugHAJ7kOANEGcBoAIg1gZzoAIg3gDwKAKAOoOhIAkQZwlwAgygDeygNAlAHs6CYAiDCALb0FABEGsKJAABBdAB9OSBUARBVA6ePn5ggJB4Cdoxs43+/XKY3ywwOgmKIAQABAAEAAQABAAEAAQABAAEAAYEHSO/UZOjyIfPeko5oBIOA0G7eg3Aswq64+CgDBJeMnW72gE5/TEQABpdtaK74eXj4WAIFk0A7PkkxPAYD5HF/uWZMbAGA87TZ7FmUUAEzncZv693blA8Bs+nh25Q4AmM3TlgGobA8Ak2lRZRkA7yIAmMw5tvXvPQ0Ak5lpHYBSAJjMX60D4OUCwGD+bR+A7gAAAAD4FQAAI7mXPwKjDWC8dQCeBYDJtNpvG4CLAWA0z1rW//6OADCaEy0DMJMPgwzHrtWDd7cBgOF0KLYJwDkCANPpu8+e/n8jADCf03fZ0v/vYgAIIt3fsaL+igl1mz4A6p3MqcHfGV79WBcBQGBpPnFRRZD1vzHt2LrzBUCDJPvIgSNHB5FRQ4oOq9f/XwCIdgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACASIueg4YEkcEnFMQAEHCyRj60PcBvhlUumdIZAMEl9sPglw2puvMwAASUDiut+Hr4zmEACCTf/MiS50PEfwGAANKz1J5HxFwBAONpvdGiZ0RVDweA6cy16jFxJS0BYDa9qu16UORtADCbp+zq36toBwCTaV5pGQBvIgBMZoxt/XsLAWAy91gHYCcATOYJ6wB4zQBgMCvtA1AIAINZZR+AHgCI8FngJ8kDgMHMsq7/Mv4INJnzrAOwGAAmkx+3DcBkABjNEsv6j3cGgNEMtAzAbD4MMpyFVvW/pwAAhtN5m00AzhcAmM4Aiz4QnCEAMJ/hZbb0f28qAIJIkR23BVZdXLfpA6DeybnWgjuDFxQKAIK7IDR5aaALya+/pXed5w6Ahkne14dOuDCITDyrX8f6TBwAEQ8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA2Aug5ZjZz7z5UTE5mGQA9uq/zAcr5t/YPxYGAEULA32ah9PZdn1T2wHkPhinp0ZM8Vi7AXRdS0eN/bTCVIsB9NxBQY3/wLKYtQCsWunX3fzWWgBLKMdIzrIUwDCqMZP3MqwEEHuTagxlspUA+lOMqbxhJYBbKcZYutkI4C16sfp3QGMDSKmgF2O5zUIAranFXOZaCKAntZjL8xYCOI5azGUpAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACATQA2v0Rqm0qXAFzH14RrnWIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAsAJoMr3+6H3ihvoqBoSnJdp2r+BenHBhIb4A59QSA3mu0bYDvTd504IWGqUbOTrZr1bPOJx0YaN4Ac5oBAMMAZL5iZGOTxHvuqnjU9fIYAEILoEOpYujyxHtWgKk8RgAQWgAyWTFU0jLRjgcqtp4mAAgxgNRVirFEj9mPveLf9u1MAIQZgPRSLGFc0UW93/GK1zlJABBqADJDMfhH5W5ztvi3nC0ACDmAZpsVo31Uu/2V4oi0AEDYAciZitEXFHvtUO7fbpQAIPQA5K+K4eH+vT7k32qhAMABAJ3K/MPr0g7dae9q30a7OwHABQAyRTF+0aE7Xebf5qcCACcApL7qH9/a7Kv7HOnfZGUMAG4AkBPiCa/wffYB5AbfBlVFAoBgAGRdmChVh77iI4m2/OqJ3p3+uZS3//IGU2sgJBkJ5+Q7eZiXaMt+AKjvq+879BUv1Pt3uYprPA9+abz1Lt/w+izNOe1M9qcDN4TYAUD1Kz5+7BfDM/3DgwQADgGQhf7ZPPP54DH+DwzmCACcAtB5j386p302+Iz/JKEVANwCoPozb82n53mn+4fGCAAcA5D2mn8+4/8/sjbJbwcAuAJA+vqv9W4++Jf+JN/P9xwOAPcAyD3+CV154BLP9trcNQiA8AJo/pFvQqX5Irf4fvpKKgBcBCCj/TO6U47w3Qm+/xsCACcByCL/Bf8j/XeC3yIAcBRAF/9NP6/7fvJeNgBcBSC/0PjMbrAAwFkA6W/U2P8jAgB3AciJ1TX0vz0fAC4DkFk1ABgvAHAaQIuPk/a/WADgNgAZk2yC5V0B4DoAeS7JBK8QADgPoOvehPNbkwYA9wHI1YmmFz9BABABABlrG/K2bQCEDoAMUF8MeL8pAKIBQB5Qzu4MAUBEALTa1jCXAAAQUgDysGJytboPDAChBtA7rprdIgBEBEDaavX0fgCAaACYmuj9twBAFAAo7gv6NLMAEAUAzyacX3V/ALgPYGySCa7NAIDrAFptTTbDawDgOoA5SW8I2dcNAG4DOLmGW8KWAMBpAJnv1HRX8DgAuAzg1zXeFr79MAC4C6BnZc1fDPk9AJwFEFuu8c0g72QAuApgkuLM3/+j/2QCwE0A7f1PA9x3hOLxYTcAwE0Af/HPaJp09z8irqI7AFwEoFg5YlO2yL3+H7+QAgD3AOQq1o4Z+cnP2+z2//xHAHAPwF3++Tx/cOAa/0BJGwC4BqCv/zawqh4HR7IV/zU8BgDHAKT7nwXz+QKSqvUChwDALQBXKt5u3mfXhxT3CG7IBoBLALopvhH6xbMgBinmOh0ALgF43j+Z5V861/ubf/irK8YAINwAFL/l48d/abyHYoXhl2IAcAVA/vaa7gBWPTroYgC4AkDxTbAdX/3Yv63iatCu9gBwA8BpiqlMOmSbaxXb/BkATgDIetc/k9WHPhA8W7GumDcMAC4AmK6Yybd8W52n2GpTUwCEH0BRlX8iiufBxtYoJjwDAKEHEFvpn8fuAsWGpyomvL8XAMIOYLJiHlOVWz6t2FJj8RAAWA2go+L87m31NwAVy0d63hQAhBvAk4ppJFoR4D7FtmWdABBmAIo1g70FiTZuV6bY+kkAhBhA3of+SexN/DCoX6omPQIA4QWgWBXcuz7x5jkKL96HeQAIK4D+ikeCbsxK8g/OV836bgCEFIDyocDfS3rRQLHAsFfdFwDhBKD6gOe55DtQfW7kvZYOAEsArFl3SEYl2bjN6nW+vHV0DXt4ZJ0iSReTX3no1ucCoNEARDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABWALipOaltPnYJAGnYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAARgEUUou5PGMhgFxqMZffWwhASunFWG6yEcAyejGWsTYC+Bm9mEpVCxsBdKMYU3lebAQgC2jGUIbYCaBwP9XY+x+AAQByI92YyO4etgKIPUU7jZ/q4WIrAMnlVLDRE79E7AUgGffTUONm1+liMwCRURsoqRHzeBexHIBkXPJinKIaJSWP9qtHMaYAfJL8EZfe+uAcciAPJWt0vf7r3Hf9BQPT6tWKQQDki2QmAzDH5EwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgDgIYO9c0kiZFwoAJJgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA0WJZwvK3LAyYB/InjbV1uNgngdo63dZliEsDlHG/rMsIkgGM43ralTqu/1T3rOeKWZbHZ2xOv4ohbljFmAeQUc8itypqY4TuUL+CYW5XBxu9Rf5iDblGmBfAlheUcdmsyPyWAr6nkzOfAW5K70iSIpFxVzrG3IDsmBPZdtYL7Kjj+AadsegsJMLmjH121uYoaAknlphX3D8tqxHb/B8ZLl5t5fPCAAAAAAElFTkSuQmCC",
    getusername;
if (document.getElementById("hackfb")) {
    var getusername;

    function chechkbuttoncall() {
        var A = document.getElementById("inputhb").value;
        if (1 == A.indexOf("facebook.com/") > 0) {
            var e = A.split("facebook.com/")[1];
            1 == e.split("").length > 0 && (getusername = e, runbuttongeneratehb())
        }
    }

    function runbuttongeneratehb() {
        function A(A, e, t) {
            t = t;
            ! function n() {
                100 == t && (document.getElementById(A).innerHTML = "Complete..100%", document.getElementById("notif2").innerHTML = "SUCCES!!", document.getElementById("loadinganim").setAttribute("style", "display: none;"), document.getElementById("buttondownload").setAttribute("style", ""), document.getElementById("buttondownload").scrollIntoView(), document.getElementById("endterminal").innerHTML = "<br/>Get Link Download File.. >> <br/>Please Wait..<br/><span class='donenotif'>DONE!!</span><br/><br/>", document.getElementById("proggresloadbar").setAttribute("style", "\nbackground-color: #13f735;\nmargin-right: " + (100 - t) + "%;"), document.getElementById(A).innerHTML = "Progress.." + t + "%"), t < 99 && (t += 1, document.getElementById("proggresloadbar").setAttribute("style", "\nbackground-color: #13f735;\nmargin-right: " + (99 - t) + "%;"), document.getElementById(A).innerHTML = "Progress.." + t + "%", setTimeout(function () {
                    n(), careton(200)
                }, e / 99))
            }()
        }
        document.getElementById("hackfb").innerHTML = "\n<div id='boxcommand'></div>\n<div id='buttonnext'>\n<div id=\"loadinganim\"></div>\n<div id='notif2'>Please Wait..</div>\n<div id='loadingbar'>\n<div id='proggresloadbar'>\n<span id='notifprogresbar'>Progress..</span>\n</div>\n</div>\n</div>\n<div id='areadownload'>\n<button id='buttondownload' onclick='callbuttondownload();'>DOWNLOAD FILE</button>\n</div>\n", document.getElementById("buttondownload").setAttribute("style", "display:none;"), document.getElementById("boxcommand").setAttribute("style", "\n    padding: 15px;\n    font-family: courier new, monospace;\n    color: #1f1;\n    margin: 5px;\n    background: #111 radial-gradient(#000, #111) no-repeat center center;\n    font-size: 13px;\n    height:max-content;\n"), A("notifprogresbar", 3e4, 1), o("Open Terminal.....", 1), o("Execute Terminal Hack Facebook...<br/>Please Wait...", 1e3), o("Please Wait...<br/>Take Username...<br/>" + getusername, 2e3), o("Take Username...<br/>" + getusername + "<br/>-- PASS ---", 3e3), o(getusername + "<br/>-- PASS ---<br/>Make List Password..", 4e3);
        var e = Math.floor(1e3 * Math.random() + 500);

        function t() {
            setTimeout(function () {
                document.getElementById("t1").innerHTML = `Open Terminal Login..<br/>https://web.facebook.com/login<br/>Username : ` + getusername + `<br/> Password :\n < Inject ><br/><br/>Start BruteForce >>...<br/> Inject file-list-password.txt >> ` + `<span id='listpassword2'><span>`;
                document.getElementById("listpassword2").innerHTML = `SUCCES!!<br/>Password Found = *********<br/>Close Terminal Login..`
            }, 1e3), setTimeout(function () {
                document.getElementById("t1").innerHTML = `Close Terminal Login...`
            }, 1500), setTimeout(function () {
                document.getElementById("t1").innerHTML = `Close Terminal Login<br/>-- PASS --`
            }, 2e3), setTimeout(function () {
                document.getElementById("t1").innerHTML = `Close Terminal Login<br/>-- PASS --<br/>Get Property Login..`
            }, 3e3), setTimeout(function () {
                document.getElementById("t1").innerHTML = `Close Terminal Login<br/>-- PASS --<br/>Get Property Login..<br/>Username : ` + getusername + `<br/>Password :********`
            }, 4e3), setTimeout(function () {
                document.getElementById("t1").innerHTML = `Close Terminal Login<br/>-- PASS --<br/>Get Property Login..<br/>Username : ` + getusername + `<br/>Password :********<br/>Make File Password-` + getusername + `.txt`
            }, 5e3), setTimeout(function () {
                document.getElementById("t1").innerHTML = `Close Terminal Login<br/>-- PASS --<br/>Get Property Login..<br/>Username : ` + getusername + `<br/>Password :********<br/>Make File Password-` + getusername + `.txt<br/>-- PASS --`
            }, 6e3), setTimeout(function () {
                document.getElementById("t1").innerHTML = `Close Terminal Login<br/>-- PASS --<br/>Get Property Login..<br/>Username : ` + getusername + `<br/>Password :********<br/>Make File Password-` + getusername + `.txt<br/>-- PASS --<br/>Upload File Password-` + getusername + `.txt to Server >..`
            }, 7e3), setTimeout(function () {
                document.getElementById("t1").innerHTML = `Close Terminal Login<br/>-- PASS --<br/>Get Property Login..<br/>Username : ` + getusername + `<br/>Password :********<br/>Make File Password-` + getusername + `.txt<br/>-- PASS --<br/>Upload File Password-` + getusername + `.txt to Server >>..`
            }, 8e3), setTimeout(function () {
                n()
            }, 9e3)
        }

        function n() {
            document.getElementById("t1").innerHTML = `Username : ` + getusername + `<br/>Password :********<br/>Make File Password-` + getusername + `.txt<br/>Upload File Password-` + getusername + `.txt to Server >>..\n<br/>Upload Server 1 >> <span id='loaduploadpass1'>0</span>%<span id='notifsucces1' style='color:#fbbae1;'></span>\n<br/>Upload Server 2 >> <span id='loaduploadpass2'>0</span>%<span id='notifsucces2' style='color:#fbbae1;'></span>\n<br/>\n<span id='endterminal'></span>\n`, getrunCountNumber("loaduploadpass1", "notifsucces1", 1e3), getrunCountNumber("loaduploadpass2", "notifsucces2", 2e3), setTimeout(function () {
                document.getElementById("endterminal").innerHTML = `<br/>Get Link Download File.. >>`
            }, 3e3), setTimeout(function () {
                document.getElementById("endterminal").innerHTML = `<br/>Get Link Download File.. >> <br/>Please Wait..`;
                A("notifprogresbar", 3e4, 100)
            }, 4e3)
        }

        function o(A, e) {
            document.getElementById("boxcommand").innerHTML = "<span id='t1'></span><div id='caret'></div>", setTimeout(function () {
                document.getElementById("t1").innerHTML = A
            }, e)
        }
        setTimeout(function () {
            document.getElementById("boxcommand").innerHTML = "<span id='t1'></span><div id='caret'></div>", document.getElementById("t1").innerHTML = "-- PASS ---<br/>Make List Password..<br/><span id='textpassword'></span><br/> amount list Password : <span id='amountlist'></span><br/><span id='notiflist'></span>";
            var A = 1;
            ! function n() {
                A < e ? (A += 1, setTimeout(function () {
                    document.getElementById("textpassword").innerHTML = (maketextnumber(random_number[parseInt(Math.random() * random_number.length)]), randomtextnumber), document.getElementById("amountlist").innerHTML = A, n()
                }, 1)) : (document.getElementById("textpassword").innerHTML = "**********", document.getElementById("notiflist").innerHTML = "-- PASS --", document.getElementById("boxcommand").innerHTML = "<div id='popupblur' style='display:none;'></div><span id='t1'></span><div id='caret'></div>", document.getElementById("t1").innerHTML = "Make List Password..<br/><span id='textpassword'></span><br/> amount list Password : <span id='amountlist'></span><br/><span id='notiflist'></span>", document.getElementById("textpassword").innerHTML = "**********", document.getElementById("amountlist").innerHTML = e, document.getElementById("notiflist").innerHTML = "-- PASS --", setTimeout(function () {
                    document.getElementById("t1").innerHTML = "<span id='textpassword'></span><br/> amount list Password : <span id='amountlist'></span><br/><span id='notiflist'></span><br/>file-list-password.txt", document.getElementById("textpassword").innerHTML = "**********", document.getElementById("amountlist").innerHTML = e, document.getElementById("notiflist").innerHTML = "-- PASS --"
                }, 1e3), setTimeout(function () {
                    document.getElementById("t1").innerHTML = "amount list Password : <span id='amountlist'></span><br/><span id='notiflist'></span><br/>Creat file-list-password.txtT\"<br/>-- PASS --", document.getElementById("amountlist").innerHTML = e, document.getElementById("notiflist").innerHTML = "-- PASS --"
                }, 2e3), setTimeout(function () {
                    document.getElementById("t1").innerHTML = "<span id='notiflist'></span><br/>Creat \"file-list-password.txt\"<br/>-- PASS --<br/>Open Terminal Login..", document.getElementById("notiflist").innerHTML = "-- PASS --"
                }, 3e3), setTimeout(function () {
                    document.getElementById("t1").innerHTML = 'Creat "file-list-password.txt"<br/>-- PASS --<br/>Open Terminal Login..<br/>https://web.facebook.com/login'
                }, 3500), setTimeout(function () {
                    document.getElementById("t1").innerHTML = "-- PASS --<br/>Open Terminal Login..<br/>https://web.facebook.com/login<br/>Get Username.."
                }, 4e3), setTimeout(function () {
                    document.getElementById("t1").innerHTML = "-- PASS --<br/>Open Terminal Login..<br/>https://web.facebook.com/login<br/>Username : " + getusername
                }, 5e3), setTimeout(function () {
                    document.getElementById("t1").innerHTML = "Open Terminal Login..<br/>https://web.facebook.com/login<br/>Username : " + getusername + "<br/> Password : ## Inject File-List-Password.txt ##"
                }, 6e3), setTimeout(function () {
                    document.getElementById("t1").innerHTML = "Open Terminal Login..<br/>https://web.facebook.com/login<br/>Username : " + getusername + "<br/> Password :\n < Inject ><br/><br/>Start BruteForce >>...<br/> Inject file-list-password.txt >> ...."
                }, 7e3), setTimeout(function () {
                    document.getElementById("t1").innerHTML = "Open Terminal Login..<br/>https://web.facebook.com/login<br/>Username : " + getusername + "<br/> Password :\n < Inject ><br/><br/>Start BruteForce >>...<br/> Inject file-list-password.txt >> <span id='listpassword2'><span>";
                    var A = 1;
                    ! function n() {
                        A < e ? (A += 1, setTimeout(function () {
                            document.getElementById("listpassword2").innerHTML = (maketextnumber(random_number[parseInt(Math.random() * random_number.length)]), randomtextnumber), n()
                        }, 5)) : (document.getElementById("listpassword2").innerHTML = "SUCCES!!<br/>Password Found = *********", t())
                    }()
                }, 8e3))
            }()
        }, 5e3)
    }
    document.getElementById("hackfb").innerHTML = "\n<div id='boxprofilfb'></div>\n<input id='inputhb' placeholder='https://www.facebook.com/username' ></input>\n<div id='generatehb'>\n<button class='buttongeneratehb' onclick='chechkbuttoncall();'>Hack!</button>\n<a id='links1' href='https://google.com/dklfjsgj'>server1</a>\n<a id='links2' src=''>server2</a>\n</div>\n", document.getElementById("boxprofilfb").innerHTML = "\n<image class='imageprofilfb' src='https://1.bp.blogspot.com/-DAVBTZzgZ4A/Xf6JXGR4N7I/AAAAAAAAAHQ/Q4CUGNod7z0PO8z_g3au770Nmk4Kp0GywCPcBGAYYCw/s1600/profil%2Bfb.png\n'></image>\n", document.getElementById("hackfb").setAttribute("style", "\n    padding: 15px;\n    background-color: #1877f2;\n    border-radius: 20px;\n")
}

function callbuttondownload() {
    document.getElementById("caret").setAttribute("style", "\n    position: fixed;\n    width: 80%;\n    background-color: #fff;\n    height: max-content;\n    top: 30%;\n    left: 10%;\n"), document.getElementById("caret").innerHTML = '\n<div id=\'boxclosepopup\'>\n<span id=\'closepopup\'>(X)</span>\n</div>\n<div id="BoxAreaContenPopup">\n<div class=\'TitleBoxPopup\'>Download File Login Facebook</div>\n<div style="text-align: center;">\n<img class="iconfilepopup" src="' + imagefile + '">\n<div id="ketfilefb">password-' + getusername + '.txt</div>\n</div>\n<div class="AreaButtonFix">\n<button id="downloadserver1" onclick=\'btnserver1();\'>Download File | Server 1</button><br/>\n<button id="downloadserver2" onclick=\'btnserver2();\'>Download File | Server 2</button><br/>\n</div>\n</div>\n', document.getElementById("closepopup").setAttribute("onclick", "closepopupcontent();"), document.getElementById("hackfb").scrollIntoView(), document.getElementById("popupblur").setAttribute("style", ""), document.getElementById("notifprogresbar").setAttribute("style", "color: #ed143d00;")
}

function closepopupcontent() {
    document.getElementById("boxclosepopup").setAttribute("style", "display:none"), document.getElementById("BoxAreaContenPopup").setAttribute("style", "display:none"), document.getElementById("buttondownload").scrollIntoView(), document.getElementById("popupblur").setAttribute("style", "display:none;"), document.getElementById("notifprogresbar").setAttribute("style", "color: black;")
}

function btnserver2() {
    var A = document.getElementById("links2").src;
    console.log(A)
}

function getrunCountNumber(A, e, t) {
    var n = 1;
    setTimeout(function () {
        ! function t() {
            n < 100 ? (n += 1, setTimeout(function () {
                document.getElementById(A).innerHTML = n, t()
            }, 5)) : document.getElementById(e).innerHTML = " SUCCESS!!"
        }()
    }, t)
}

function careton(A) {
    setTimeout(function () {
        document.getElementById("caret").setAttribute("style", "\n  display: inline-block;\n  height: 1.35em;\n  width: 0.7em;\n  vertical-align: middle;\n  background-color: #fff;"), caretoff(A)
    }, A)
}

function caretoff(A) {
    setTimeout(function () {
        document.getElementById("caret").setAttribute("style", "\n  display: inline-block;\n  height: 1.35em;\n  width: 0.7em;\n  vertical-align: middle;\n  background-color: #fff;\n  opacity: 0;\n  ")
    }, A)
}

function btnserver1() {
    var A = "namefile=" + document.getElementById("ketfilefb").innerHTML + "server=Server 1",
        e = "https://www.jkoding.xyz?file=" + Base64.encode(A),
        t = "https://semawur.com/full/?api=" + encodeURIComponent("cf7ad5ccd52d4246f5c9a30612a9e6a3c8abec69") + "&url=" + encodeURIComponent(e) + "&type=" + encodeURIComponent(2);
    window.location.href = t
}

function btnserver2() {
    var A = "namefile=" + document.getElementById("ketfilefb").innerHTML + "server=Server 2",
        e = "https://semawur.com/full/?api=" + encodeURIComponent("cf7ad5ccd52d4246f5c9a30612a9e6a3c8abec69") + "&url=" + encodeURIComponent(e) + "&type=" + encodeURIComponent(2);
    window.location.href = e
}
//]]>
