import React, { useState } from 'react';
import { MeuContexto } from './context';
 
export const MeuProvedorDeContexto = ({ children }) => {
  const [valor, setValor] = useState('Valor inicial');
 
  // Atualizando a função setter para realmente atualizar o valor
  const atualizarValor = (novoValor) => {
    setValor(novoValor);
  };
 
  return (
    <MeuContexto.Provider value={{ valor, setValor: atualizarValor }}>
        {children}
    </MeuContexto.Provider>
  );
};