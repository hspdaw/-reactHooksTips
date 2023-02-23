import { CounterApp } from '../src/CounterApp';
import { fireEvent, getByRole, render, screen } from '@testing-library/react';

describe('Pruebas en <CounterApp/>', () => {

    const value = 100;

/*     test('debe hacer match con el snapshot', () => {
        const { container } = render(<CounterApp value={value} />);
        expect(container).toMatchSnapshot();
    })

    test('debe mostrar el valor inicial de 100 <CounterApp  value={100} />', () => {
        render(<CounterApp value={value} />);
        expect(screen.getByText(value)).toBeTruthy();
    })



    test('debe incrementar con el botón + 1', () => {
        //inicializar el sujeto de pruebas
        render(<CounterApp value={value} />);
        fireEvent.click(screen.getByText('+1'));
        //fireEvent.click(screen.getByText('-1'));
        expect(screen.getAllByText('101')).toBeTruthy();
       // expect(screen.getAllByText('99')).toBeTruthy();
    }) */


    test('debe funcionar el botón de reset', () => {
        render(<CounterApp value={value} />);
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByText('Reset'));     
        //Otra forma de acceder al objeto fireEvent.click(screen,getByRole('button', {name:'btn-reset'}))
        expect(screen.getAllByText('100')).toBeTruthy();

    })


})