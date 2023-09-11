
export function textToNumber(text) {
    let alfavit = {
        q: 1,
        w: 2, e: 3, r: 4, t: 5, y: 6, u: 7, i: 8,
        o: 9, p: 10, a: 11, s: 12, d: 13, f: 14,
        g: 15, h: 16, j: 17, k: 18, l: 19, z: 20,
        x: 21, c: 22, v: 23, b: 24, n: 25, m: 26,
        "1": 27, '2': 28, '3': 29, "4": 30, '5': 31,
        '6': 32, '7': 33, '8': 34, '9': 35, '0': 36,' ':37
    }
    let num = 0
    for (let i = 0; i < text.length; i++) {
        num += alfavit[text[i]]
    }
    return num
}
// export { textToNumber }