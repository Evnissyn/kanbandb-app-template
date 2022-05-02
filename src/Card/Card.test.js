import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import Card from './Card';

const newCard = render(<Card newTitle="A New Title" newStatus="Todo" newDetails="New Details" />);

test('Card: Create New', () => {
  const { getByText } = newCard;
  expect(getByText('A New Title')).toBeInTheDocument();
  expect(getByText('Todo')).toBeInTheDocument();
  expect(getByText('New Details')).toBeInTheDocument();

  // console.log('getByText things', getByText, getByText.title);
  // const { getByText } = render(<Card />);
  // const linkElement = getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});

// CARD TITLE TEST

test('Card: Title: Enable Edit', () => {
});

test('Card: Title: User Input', () => {
});

test('Card: Title: Save Changes', () => {
});

// CARD STATUS TESTS

test('Card: Status: Enable Edit', () => {
});

test('Card: Status: User Input', () => {
});

test('Card: Status: Save Changes', () => {
});

// CARD DETAILS TESTS

test('Card: Details: Enable Edit', () => {
});

test('Card: Details: User Input', () => {
});

test('Card: Details: Save Changes', () => {
});
