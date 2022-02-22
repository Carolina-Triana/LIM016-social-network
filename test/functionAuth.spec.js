// importamos la funcion que vamos a testear
import { createUserWithEmailAndPassword } from '../src/mocks/mocks.js';
import {userCreate} from '../src/firebase/auth.js'

jest.mock('../src/firebase/config.js');

describe('registroFormulario', () => {
  it('deberia ser una funcion', () => {
    expect(typeof userCreate).toBe('function');
  });
  it('Debería poder registrar a un usuario', () => userCreate('usuario@espect.com', '12345678')
    .then(() => {
      expect(createUserWithEmailAndPassword.mock.calls[0][1]).toBe('usuario@espect.com');
      expect(createUserWithEmailAndPassword.mock.calls[0][2]).toBe('12345678');
    }));
});
