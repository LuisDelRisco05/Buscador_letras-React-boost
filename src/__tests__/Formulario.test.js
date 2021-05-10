import React from 'react';
import {render} from '@testing-library/react';
import Formulario from '../components/Formulario';

test('<Formulario /> Primera prueba Formulario', () => {
    const wrapper = render(<Formulario />);
    wrapper.debug();
})