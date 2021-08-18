
describe('Example Component', () => {
  test('Debe de ser mayor a 10', ()=>{
    //arreglar
    let value = 9;

    //Estímulo
    value = value + 2;

    //Observar resultado
    expect(value).toBeGreaterThan(10)
  })
})