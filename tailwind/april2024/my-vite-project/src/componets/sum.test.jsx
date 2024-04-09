// const sum = require('./sum');
// test('adds 1 + 2 to equal 3',() => {
//     expect(sum(1,2)).toBe(3)
// });

// test('obbject Assignment',() => {
//     const data = {one:1};
//     data['two'] = 2;
//     expect(data).toEqual({one:1,two:2});
// });

// test('adding Positive Numbers is not zero',() => {
//     for(let i=1;i<10;i++){
//         for(let k=1;i<10;i++){
//             expect(i+k).not.toBe(0);
//         }
//     }
// })


test('there is no I in team', () => {
    expect('team').not.toMatch(/I/);
  });
  
test('but there is a "stop" in Christoph', () => {
    expect('Christoph').toMatch(/stop/);
  });


const shoppingList = [
    'diapers',
    'kleenex',
    'trash bags',
    'paper towels',
    'milk',
  ];
  
test('the shopping list has milk on it', () => {
    expect(shoppingList).toContain('milk');
    expect(new Set(shoppingList)).toContain('milk');
  });