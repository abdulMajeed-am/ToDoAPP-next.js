import { render, screen, fireEvent, within } from "@testing-library/react";
import TodoApp from "./TodoApp"; 

test('renders the TodoApp component correctly', () => {
    render(<TodoApp />);
    expect(screen.getByText(/todolist/i)).toBeInTheDocument();
});

test('deletes an item from the list', () => {
  render(<TodoApp />);
  
  fireEvent.change(screen.getByPlaceholderText(/enter a task/i), { target: { value: 'Task to delete' } });
  fireEvent.click(screen.getByText(/add/i));

  const taskToDelete = screen.getByText(/task to delete/i).closest("li");

  const deleteButton = within(taskToDelete).getByRole("button", { name: /delete/i });

  fireEvent.click(deleteButton);

  expect(screen.queryByText(/task to delete/i)).toBeNull();
});


test('clears the input after adding a task', () => {
    render(<TodoApp />);
    const inputElement = screen.getByPlaceholderText(/enter a task/i);
    fireEvent.change(inputElement, { target: { value: 'New Task' } });
    fireEvent.click(screen.getByText(/add/i));
    expect(inputElement.value).toBe('');
});


