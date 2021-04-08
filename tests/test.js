const fb = require('../fizzbuzz')

// test('Sanity check', () => {
//     expect(2+2).toBe(4)
// })

// FIZZ
test('FIZZ', () => {
    expect(fb.FIZZ).toBe('fizz')
})

// BUZZ
test('BUZZ', () => {
    expect(fb.BUZZ).toBe('buzz')
})

// FIZZBUZZ
test('FIZZBUZZ', () => {
    expect(fb.FIZZBUZZ).toBe('fizzbuzz')
})

// isFizzy
test('isFizzy', () => {
    expect(fb.isFizzy(3)).toBe(true)
    expect(fb.isFizzy(4)).toBe(false)
})

// isBuzzy
test('isBuzzy', () => {
    expect(fb.isBuzzy(5)).toBe(true)
    expect(fb.isBuzzy(3)).toBe(false)
})

// fizzyBuzzy
test('fizzyBuzzy', () => {
    expect(fb.fizzyBuzzy(3)).toBe('fizz')
    expect(fb.fizzyBuzzy(5)).toBe('buzz')
    expect(fb.fizzyBuzzy(15)).toBe('fizzbuzz')
})

// fizzBuzz
test('fizzBuzz', () => {
    const result = fb.fizzBuzz(100)
    expect(result.count).toBe(100)
})
