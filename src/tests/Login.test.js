import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import history from '../history'
import axios from '../axios'
import createStore from '../store'
import Login from '../Login'

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

  history.push('/login')

  // ejecución
  render(<Provider store={store}><Login /></Provider>);

  // validaciones
  await waitFor(() => screen.getByText(/Login/i))
  fireEvent.change(screen.getByTestId('email'), { target: { name: "email", value: "test@example.com" }})
  fireEvent.change(screen.getByTestId('password'), {target: { name: "password", value: "test1234" }})

  const spy = jest.spyOn(history, 'push')
  fireEvent.submit(screen.getByTestId("form"))

  await waitFor(() => expect(spy).toHaveBeenCalledWith("/"))
})