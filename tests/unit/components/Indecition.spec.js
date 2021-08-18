import { shallowMount } from '@vue/test-utils';
import Indecition from '@/components/Indecition.vue';

describe('Indecition Component', ()=>{
  let wrapper;
  let clgSpy; //estan pendientes de cualquier suceso que yo quiera

  beforeEach(()=>{
    wrapper = shallowMount ( Indecition )

    clgSpy = jest.spyOn( console, 'log' )
  })

  test('Should do match with snapshot', ()=>{
    expect( wrapper.html() ).toMatchSnapshot()
  })

  test('Should make anything when type on input (console.log)', async()=>{
    const input = wrapper.find('input')
    await input.setValue('Hola mundo')

    expect( clgSpy ).toHaveBeenCalled()
  })

  test('should run fetch when type "?"', ()=>{

  })

  test('test getAnswer success', ()=>{

  })

  test('test getAnswer fail', ()=>{

  })
})