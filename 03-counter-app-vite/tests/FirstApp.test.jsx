import { FirstApp } from '../src/FirstApp';
import { getByTestId, render } from '@testing-library/react';

describe('Pruebas en <FirstApp/>', () => {

  /* test('debe hacer match con el snapshot', () => {
    const title = 'Hoy soy Test';
    const { container } = render(<FirstApp title={title} />);
    expect(container).toMatchSnapshot();
  }) */
  /*  test('debe mostrar el título en un h1', () => {
     const title = 'Hola, Soy Vegeta';
     const {  getByText, getByTestId } = render(<FirstApp title={title} />);
       expect( getByText(title)).toBeTruthy();
       expect(getByTestId('test-title').innerHTML).toBe(title);
   }) */

  test('debe mostrar el subtitulo enviado por props', () => {
    const title = 'Hola, Soy Vegeta';
    const subTitle = 'Soy un subtitulo';
    const { getAllByText } = render(<FirstApp title={title} subTitle={subTitle} />);
    expect(screen.getAllByText(subTitle).length).toBe(2);
  })
})