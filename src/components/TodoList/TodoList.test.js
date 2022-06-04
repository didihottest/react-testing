import { screen, render } from '@testing-library/react'
import TodoList from './TodoList'
import userEvent from '@testing-library/user-event'

test("the page should render 3 name initial value, input field, and add button", () => {
  render(<TodoList />)

  // const name1 = screen.getByText("Name 1")
  // expect(name1).toBeInTheDocument()
  // const name2 = screen.getByText("Name 2")
  // expect(name2).toBeInTheDocument()
  // const name3 = screen.getByText("Name 3")
  // expect(name3).toBeInTheDocument()

  const items = screen.getAllByText(/Name/)
  // console.log(items.length)
  expect(items.length).toEqual(3)

  const button = screen.getByText("Add")
  expect(button).toBeInTheDocument()

  const input = screen.getByLabelText(/item/i)
  expect(input).toBeInTheDocument()
})


test("it should add a new item when user type in input and submit it", () => {
  render(<TodoList />)

  // check if the input field and add button is rendered
  const button = screen.getByText("Add")
  expect(button).toBeInTheDocument()
  const input = screen.getByLabelText(/item/i)
  expect(input).toBeInTheDocument()
  // type in the input
  const name = "Ninda"
  userEvent.type(input, name)
  // click add button
  userEvent.click(button)
  // check if the new item is added to the item list
  expect(screen.getByText(name)).toBeInTheDocument()
})