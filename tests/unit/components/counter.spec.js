import { shallowMount } from '@vue/test-utils'
import Counter from '@/components/Counter.vue'

describe('Counter Component', ()=>{

  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount( Counter );
  })


  // test('should do match with the snapshot', ()=>{
  //   const wrapper = shallowMount( Counter )

  //   expect( wrapper.html() ).toMatchSnapshot()
  // })

  test('should render h2 tag with "Counter" by default', ()=>{
    
    expect( wrapper.find('h2').exists() ).toBeTruthy()
    
    const title = wrapper.find('h2').text()
    
    expect(title).toBe('Counter')
  })
  
  test('should be 100 by default on <p> tag', ()=>{
    
    const pTag = wrapper.find('[data-testid="counter"]').text();
    
    expect( pTag ).toBe('100');
  })
  
  test('Should increment counter value by one, and decrement by one twice', async ()=>{
    const [decreaseBtn, increaseBtn] = wrapper.findAll('button')
    
    await increaseBtn.trigger('click')
    await increaseBtn.trigger('click')
    await increaseBtn.trigger('click')
    await decreaseBtn.trigger('click')
    await decreaseBtn.trigger('click')
    
    const value = wrapper.find('[data-testid="counter"]').text()
    expect( value ).toBe('101')
  })

  test('should be the start prop default value', () => {
   
    const { start } = wrapper.props()
    const value =  wrapper.find('[data-testid="counter"]').text()

    expect( Number(value) ).toBe(start)

  })


  test('should show title prop', () => {
    const title = 'Hola Mundo!!'
    const wrapper = shallowMount( Counter,{
      props: {
        title
      } 
    });

    expect( wrapper.find('h2').text() ).toBe(title);
  })
})