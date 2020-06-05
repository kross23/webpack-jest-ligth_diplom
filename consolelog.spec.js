import consolelog from './src/modules/consolelog';
describe('тестим сонсольлог', () => {
it ('ждем строку вебпак настроен',() =>{
    expect(consolelog()).toBe('вебпак настроен');
});
});
// функции теста assert 
// также expect 