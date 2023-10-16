import { ChangeLettersPipe } from './change-letters.pipe';

describe('ChangeLettersPipe', () => {
  let pipe: ChangeLettersPipe;

  beforeEach(() => {
    pipe = new ChangeLettersPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('transforms "para un tipo de contraseña" to "p4r4 9n t1p0 d3 c0ntr4s3ñ4"', () => {
    const input = 'para un tipo de contraseña';
    const output = 'p4r4 9n t1p0 d3 c0ntr4s3ñ4';
    expect(pipe.transform(input)).toEqual(output);
  });

  it('transforms "AEIOUaeiouÁÉÍÓÚáéíóúÜü" to "43O09o99"', () => {
    const input = 'AEIOUaeiouÁÉÍÓÚáéíóúÜü';
    const output = '43O09o99';
    expect(pipe.transform(input)).toEqual(output);
  });

  it('transforms empty string to empty string', () => {
    const input = '';
    const output = '';
    expect(pipe.transform(input)).toEqual(output);
  });

  it('transforms null to empty string', () => {
    const input = null;
    const output = '';
    expect(pipe.transform(input)).toEqual(output);
  });

  it('transforms undefined to empty string', () => {
    const input = undefined;
    const output = '';
    expect(pipe.transform(input)).toEqual(output);
  });
});