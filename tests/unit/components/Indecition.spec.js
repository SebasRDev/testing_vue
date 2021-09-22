import { shallowMount } from '@vue/test-utils';
import Indecition from '@/components/Indecition.vue';

describe('Indecition Component', ()=>{

  let wrapper;
  let clgSpy; //Los spy estan pendientes de cualquier suceso que yo quiera

  global.fetch = jest.fn( () => Promise.resolve({ 
    json: () => Promise.resolve({
      answer: 'yes',
      forced: false,
      image: 'https://yesno.wtf/assets/yes/13-c3082a998e7758be8e582276f35d1336.gif'
    })
  }))

  beforeEach(()=>{
    wrapper = shallowMount(Indecition)
    clgSpy = jest.spyOn(console, 'log')
    jest.clearAllMocks()
  })

  test('Should do match with snapshot', ()=>{
    expect( wrapper.html() ).toMatchSnapshot()
  })

  test('Should dont make anything when type on input (console.log)', async()=>{
    const getAnswerSpy = jest.spyOn( wrapper.vm, 'getAnswer' )

    const input = wrapper.find('input')
    await input.setValue('Hola mundo')

    expect( clgSpy ).toHaveBeenCalled()
    expect( getAnswerSpy ).not.toHaveBeenCalled()
  })

  test('should run getAnswer when type "?"', async()=>{
    const getAnswerSpy = jest.spyOn( wrapper.vm, 'getAnswer' )

    const input = wrapper.find('input')
    await input.setValue('Hola mundo?')

    expect(getAnswerSpy).toHaveBeenCalled();
  })

  test('test getAnswer success', async()=>{
    await wrapper.vm.getAnswer()

    const img = wrapper.find('img')

    expect(img.exists()).toBeTruthy()
    expect(wrapper.vm.img).toBe('https://yesno.wtf/assets/yes/13-c3082a998e7758be8e582276f35d1336.gif')
    expect(wrapper.vm.answer).toBe('Si!')

  })

  test('test getAnswer fail', async()=>{

    fetch.mockImplementationOnce( () => Promise.reject('API is down'))

    await wrapper.vm.getAnswer()
    
    const img = wrapper.find('img')

    expect( img.exists() ).toBeFalsy()
    expect(wrapper.vm.answer).toBe('No se pudo cargar del API')

  })
})