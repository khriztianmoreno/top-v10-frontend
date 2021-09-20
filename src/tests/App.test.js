import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
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

test('renders register component', () => {
  history.push('/register')
  render(<Provider store={store}><App /></Provider>);
  expect(screen.getByText(/Register/i)).toBeInTheDocument();
});

test('renders login component', () => {
  history.push('/login')
  render(<Provider store={store}><App /></Provider>);
  expect(screen.getByText(/Login/i)).toBeInTheDocument();
})

test('redirects to login if not authenticated', () => {
  history.push('/')
  render(<Provider store={store}><App /></Provider>);
  expect(screen.getByText(/Login/i)).toBeInTheDocument();
})

test('renders root if authenticated', async () => {
  // preparación
  axios.get.mockResolvedValueOnce({ data: {
      email: "test@example.com",
      fistName: "Pedro",
      lastName: "Perez"
    }
  });
  axios.get.mockResolvedValueOnce({ data: { count: 1, page: 1, data: [{ title: "A", completed: false, id: "1234"}] } })

  localStorage.setItem(TOKEN, "123355")
  history.push('/')

  // ejecución
  render(<Provider store={store}><App /></Provider>);
  await waitFor(() => expect(screen.queryAllByTestId("task-item")).toHaveLength(1))

  // validaciones (asserts)
  expect(screen.getByText(/Lista de Tareas/i)).toBeInTheDocument()
})

// Tipos de pruebas
// 1. Que las rutas rendericen los componentes correctos
// 2. La renderización y el comportamiento de componentes.
// Si utilizan Redux:
// 3. La función reductora.
// 4. Los actions creators.

// Mocks - simular un objeto o una función
// Fakes - crear un objeto similar que provee una funcionalidad diferente.
// Spies - se utiliza para validar llamados a funciones.
// Stubbing - 