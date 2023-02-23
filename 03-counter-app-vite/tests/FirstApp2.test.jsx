import { FirstApp } from '../src/FirstApp';
import { render, screen } from '@testing-library/react';

describe('Pruebas en <FirstApp/>', () => {
  const title = 'Hola, Soy Vegeta';
  test('debe hacer match con el snapshot', () => {
    const { container } = render(<FirstApp title={title} />);
    expect(container).toMatchSnapshot();
  })

  test('debe mostrar el mensaje de Vegeta', () => {
    render(<FirstApp title={title} />);
    expect(screen.getByText(title)).toBeTruthy();
    //screen.debug(); ver objeto
  })

  test('debe mostrar el titulo en un h1', () => {
    render(<FirstApp title={title} />);
    expect(screen.getByRole('heading', { level: 1 }).innerHTML).toContain(title);
  })

  test('debe mostrar el subtitulo enviado por props', () => {
    const title = 'Hola, Soy Vegeta';
    const subTitle = 'Soy un subtitulo';
    render(<FirstApp title={title} />);
    expect(screen.getByRole('heading', { level: 1 }).innerHTML).toContain(title);
    const { getAllByText } = render(
      <FirstApp
        title={title}
        subTitle={subTitle}
      />);
    expect(getAllByText(subTitle).length).toBe(2);

  })

})