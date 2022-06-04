import { render, screen } from '@testing-library/react'
import HelloWorld from './HelloWorld'

test("The page should render hello world", () => {

  render(<HelloWorld />)

  const greeting = screen.queryByText("Hello World")
  expect(greeting).toBeInTheDocument()

  // const greetingByText = screen.getByText("Hello")
})