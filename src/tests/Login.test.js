import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router';
import history from '../history'
import axios from '../axios'
import createStore from '../store'
import { TOKEN } from '../constants'
import App from '../App'

jest.mock('../axios');

let store;
beforeEach(() => {
  localStorage.clear()
  store = createStore()
})

test('allows user to login', async () => {
  // preparación
  axios.post.mockResolvedValueOnce({ data: {
    token: "jdjdjdjd",
    user: {
      email: "test@example.com",
      fistName: "Pedro",
      lastName: "Perez"
    }}
  });
  axios.get.mockResolvedValueOnce({ data: { count: 1, page: 1, data: [{ id: "12345", title: "Tarea", completed: false }]}})

  history.push('/login')

  // ejecución
  render(<Provider store={store}><App /></Provider>);

  // validaciones
  await waitFor(() => screen.getByText(/Login/i))
  fireEvent.change(screen.getByTestId('email'), { target: { name: "email", value: "test@example.com" }})
  fireEvent.change(screen.getByTestId('password'), {target: { name: "password", value: "test1234" }})

  const spy = jest.spyOn(history, 'push')
  fireEvent.submit(screen.getByTestId("form"))

  await waitFor(() => {
    expect(localStorage.getItem(TOKEN)).not.toBeFalsy()
    expect(spy).toHaveBeenCalledWith("/")
  })
})

test('shows error when user enters invalid credentials', async () => {
  // preparación
  const error = new Error()
  error.response = { 
    data: {error: 'invalid-credentials', message: 'Credenciales inválidas'},
    status: 401,
    statusText: "Unauthorized"
  }
  axios.post.mockRejectedValueOnce(error);

  history.push('/login')

  // ejecución
  render(<Provider store={store}><App /></Provider>);

  // validaciones
  await waitFor(() => screen.getByText(/Login/i))
  fireEvent.change(screen.getByTestId('email'), { target: { name: "email", value: "test@example.com" }})
  fireEvent.change(screen.getByTestId('password'), {target: { name: "password", value: "test1234" }})

  fireEvent.submit(screen.getByTestId("form"))

  await waitFor(() => {
    expect(localStorage.getItem(TOKEN)).toBeFalsy()

    // verificar que aparezca el error
    expect(screen.getByText(/credenciales inválidas/i)).toBeInTheDocument()
  })
})