import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import Field from './Field';

test('Field: Create New', () => {
  const newField = render(<Field label="Title" newValue="Next Step" />);
  const { getByText, getByTitle } = newField;
  expect(getByText('Title')).toBeInTheDocument();
  expect(getByText('Next Step')).toBeInTheDocument();
  expect(getByTitle('editTitle')).toBeInTheDocument();

  // console.log('getByText things', getByText, getByText.title);
  // const { getByText } = render(<Field />);
  // const linkElement = getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});

test('Field: Enable Edit', () => {
  const newField = render(<Field label="Title" newValue="Next Step" />);
  const { getByTitle, getByPlaceholderText, findByRole } = newField;
  
  fireEvent.click((getByTitle('editTitle')));
  expect(getByTitle('saveTitle')).toBeInTheDocument();
  expect(getByTitle('cancelEditTitle')).toBeInTheDocument();
  expect(getByPlaceholderText('Next Step')).toBeInTheDocument();

  expect(screen.getByRole('form')).toHaveFormValues({
    userValue: ''
  });
});

test('Field: User Input', () => {
  const newField = render(<Field label="Title" newValue="Next Step" />);
  const { getByTitle, getByPlaceholderText, getByLabelText } = newField;
  
  fireEvent.click((getByTitle('editTitle')));
  fireEvent.change(getByPlaceholderText('Next Step'), {target: {value: 'Last Step'}})

  expect(screen.getByRole('form')).toHaveFormValues({
    userValue: 'Last Step'
  });
});

test('Field: Cancel Changes', () => {
  const newField = render(<Field label="Title" newValue="Next Step" />);
  const { getByText, getByTitle } = newField;
  
  fireEvent.click((getByTitle('editTitle')));
  fireEvent.change(getByPlaceholderText('Next Step'), {target: {value: 'Last Step'}})
  fireEvent.click((getByTitle('cancelEditTitle')));

  expect(getByText('Next Step')).toBeInTheDocument();
  expect(getByTitle('editTitle')).toBeInTheDocument();
});

test('Field: Save Changes', () => {
  const newField = render(<Field label="Title" newValue="Next Step" />);
  const { getByTitle, getByPlaceholderText, findByRole } = newField;
  fireEvent.click((getByTitle('editTitle')));
  fireEvent.change(getByPlaceholderText('Next Step'), {target: {value: 'Last Step'}})
  fireEvent.click((getByTitle('saveTitle')));

  expect(getByText('Last Step')).toBeInTheDocument();
  expect(getByTitle('editTitle')).toBeInTheDocument();  
});
