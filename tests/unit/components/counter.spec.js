import { shallowMount } from '@vue/test-utils'
import Counter from '@/components/Counter.vue'

describe('Counter Component', ()=>{
  // test('should do match with the snapshot', ()=>{
  //   const wrapper = shallowMount( Counter )

  //   expect( wrapper.html() ).toMatchSnapshot()
  // })

  test('should render h2 tag with "Counter" by default', ()=>{
    const wrapper = shallowMount( Counter )
    
    expect( wrapper.find('h2').exists() ).toBeTruthy()
    
    const title = wrapper.find('h2').text()
    
    expect(title).toBe('Counter')
  })
  
  test('should be 100 by default on <p> tag', ()=>{
    const wrapper = shallowMount( Counter )
    
    const pTag = wrapper.find('[data-testid="counter"]').text();
    
    expect( pTag ).toBe('100');
  })
  
  test('Should increment counter value by one, and decrement by one twice', async ()=>{
    const wrapper = shallowMount( Counter )
    const increment = wrapper.find('[data-testid="increaseBtn"]')
    const decrement = wrapper.find('[data-testid="decreaseBtn"]')
    
    await increment.trigger('click')
    
    let value = wrapper.find('[data-testid="counter"]').text()
    expect( value ).toBe('101')
    
    await decrement.trigger('click')
    await decrement.trigger('click')
    value = wrapper.find('[data-testid="counter"]').text()
    expect( value ).toBe('99')
  })
})