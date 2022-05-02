import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import Card from './Card';

const newCard = render(<Card newTitle="First Step" newStatus="Todo" newDetails="Basic Details" />);

test('Card: Create New', () => {
  const { getByText } = newCard;
  expect(getByText('First Step')).toBeInTheDocument();
  expect(getByText('Todo')).toBeInTheDocument();
  expect(getByText('Basic Details')).toBeInTheDocument();
});

// CARD TITLE TEST

test('Card: Title: Enable Edit', () => {
  const { getByTitle, getByPlaceholderText, findByRole } = newCard;
  
  fireEvent.click((getByTitle('editTitle')));
  expect(getByTitle('saveTitle')).toBeInTheDocument();
  expect(getByTitle('cancelEditTitle')).toBeInTheDocument();
  expect(getByPlaceholderText('First Step')).toBeInTheDocument();

  expect(screen.getByRole('form')).toHaveFormValues({
    userValue: ''
  });
});

test('Card: Title: User Input', () => {
  const { getByTitle, getByPlaceholderText, getByLabelText } = newCard
  
  fireEvent.click((getByTitle('editTitle')));
  fireEvent.change(getByPlaceholderText('First Step'), {target: {value: 'Last Step'}})

  expect(screen.getByRole('form')).toHaveFormValues({
    userValue: 'Last Step'
  });
});

test('Card: Title: Cancel Changes', () => {
  const { getByText, getByPlaceholderText, getByTitle } = newCard;
  
  fireEvent.click((getByTitle('editTitle')));
  fireEvent.change(getByPlaceholderText('First Step'), {target: {value: 'Last Step'}})
  fireEvent.click((getByTitle('cancelEditTitle')));

  expect(getByText('First Step')).toBeInTheDocument();
  expect(getByTitle('editTitle')).toBeInTheDocument();
});

test('Card: Title: Save Changes', () => {
  const { getByTitle, getByPlaceholderText, getByText } = newCard;
  fireEvent.click((getByTitle('editTitle')));
  fireEvent.change(getByPlaceholderText('First Step'), {target: {value: 'Last Step'}})
  fireEvent.click((getByTitle('saveTitle')));

  expect(getByText('Last Step')).toBeInTheDocument();
  expect(getByTitle('editTitle')).toBeInTheDocument();  
});

// CARD STATUS TESTS

test('Card: Status: Enable Edit', () => {
  const { getByTitle, getByPlaceholderText, findByRole } = newCard;
  
  fireEvent.click((getByTitle('editStatus')));
  expect(getByTitle('saveStatus')).toBeInTheDocument();
  expect(getByTitle('cancelEditStatus')).toBeInTheDocument();
  expect(getByPlaceholderText('Todo')).toBeInTheDocument();

  expect(screen.getByRole('form')).toHaveFormValues({
    userValue: ''
  });
});

test('Card: Status: User Input', () => {
  const { getByTitle, getByPlaceholderText, getByLabelText } = newCard
  
  fireEvent.click((getByTitle('editStatus')));
  fireEvent.change(getByPlaceholderText('Todo'), {target: {value: 'Done'}})

  expect(screen.getByRole('form')).toHaveFormValues({
    userValue: 'Done'
  });
});

test('Card: Status: Cancel Changes', () => {
  const { getByText, getByPlaceholderText, getByTitle } = newCard;
  
  fireEvent.click((getByTitle('editStatus')));
  fireEvent.change(getByPlaceholderText('Todo'), {target: {value: 'Done'}})
  fireEvent.click((getByTitle('cancelEditStatus')));

  expect(getByText('Todo')).toBeInTheDocument();
  expect(getByTitle('editStatus')).toBeInTheDocument();
});

test('Card: Status: Save Changes', () => {
  const { getByTitle, getByPlaceholderText, getByText } = newCard;
  fireEvent.click((getByTitle('editStatus')));
  fireEvent.change(getByPlaceholderText('Todo'), {target: {value: 'Done'}})
  fireEvent.click((getByTitle('saveStatus')));

  expect(getByText('Done')).toBeInTheDocument();
  expect(getByTitle('editStatus')).toBeInTheDocument();  
});

// CARD DETAILS TESTS

test('Card: Details: Enable Edit', () => {
  const { getByTitle, getByPlaceholderText, findByRole } = newCard;
  
  fireEvent.click((getByTitle('editDetails')));
  expect(getByTitle('saveDetails')).toBeInTheDocument();
  expect(getByTitle('cancelEditDetails')).toBeInTheDocument();
  expect(getByPlaceholderText('Basic Details')).toBeInTheDocument();

  expect(screen.getByRole('form')).toHaveFormValues({
    userValue: ''
  });
});

test('Card: Details: User Input', () => {
  const { getByTitle, getByPlaceholderText, getByLabelText } = newCard
  
  fireEvent.click((getByTitle('editDetails')));
  fireEvent.change(getByPlaceholderText('Basic Details'), {target: {value: 'Additional Details'}})

  expect(screen.getByRole('form')).toHaveFormValues({
    userValue: 'Additional Details'
  });
});

test('Card: Details: Cancel Changes', () => {
  const { getByText, getByPlaceholderText, getByTitle } = newCard;
  
  fireEvent.click((getByTitle('editDetails')));
  fireEvent.change(getByPlaceholderText('Basic Details'), {target: {value: 'Additional Details'}})
  fireEvent.click((getByTitle('cancelEditDetails')));

  expect(getByText('Basic Details')).toBeInTheDocument();
  expect(getByTitle('editDetails')).toBeInTheDocument();
});

test('Card: Details: Save Changes', () => {
  const { getByTitle, getByPlaceholderText, getByText } = newCard;
  fireEvent.click((getByTitle('editDetails')));
  fireEvent.change(getByPlaceholderText('Basic Details'), {target: {value: 'Additional Details'}})
  fireEvent.click((getByTitle('saveDetails')));

  expect(getByText('Additional Details')).toBeInTheDocument();
  expect(getByTitle('editDetails')).toBeInTheDocument();  
});
