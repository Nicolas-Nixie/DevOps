import '@testing-library/dom'
import App from '../components/App'
import { render , screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { act } from 'react-dom/test-utils'
import Categories from '../components/Categories'
import React, { useState as useStateMock } from 'react';


test('test if we have All choice in select',() => { 
  render(<Categories 
    categories={['classique', 'extérieur', 'plante grasse', 'graines']}
    setActiveCategory={() => console.log('setActiveCategory')}
    activeCategory={''} 
    />)
  expect(screen.getAllByRole('option').length).toBe(5)
})


test('test if select work', () => {

 const component = render(<Categories 
    categories={['classique', 'extérieur', 'plante grasse', 'graines']}
    setActiveCategory={() => console.log('setActiveCategory')}
    activeCategory={'graines'} 
    />)

  
  act(() => {
    userEvent.selectOptions(
      // Find the select element, like a real user would.
      component.getByRole('combobox'),
      // Find and select the Ireland option, like a real user would.
      component.getByRole('option', { name : 'graines'}),
    
    );
  });
  
  expect(component.getByRole('option', {name : 'graines'}).selected).toBe(true)

})



test('test reset button', () => {
  render(<Categories 
    categories={['classique', 'extérieur', 'plante grasse', 'graines']}
    setActiveCategory={() => console.log('setActiveCategory')}
    activeCategory={''} 
    />)

  act(() => {
    userEvent.selectOptions(
      // Find the select element, like a real user would.
      screen.getByRole('combobox'),
      // Find and select the Ireland option, like a real user would.
      screen.getByRole('option', { name: 'graines' }),
    )
    userEvent.click(screen.getByText('Réinitialiser'));
  });

  expect(screen.getByRole('option', { name: '---' }).selected).toBe(true)

})


      