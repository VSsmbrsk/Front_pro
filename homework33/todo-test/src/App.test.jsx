import { render, screen, fireEvent } from "@testing-library/react";
import { expect } from "vitest";
import TodoList from "./App";

beforeEach(() => {
  localStorage.clear();
});

test("page has TODO heading", () => {
  render(<TodoList />);

  expect(screen.getByText(/todo/i)).toBeInTheDocument();
});

test("input accepts letters and numbers", () => {
  render(<TodoList />);

  const input = screen.getByPlaceholderText(/new task/i);

  fireEvent.change(input, { target: { value: "Task123" } });

  expect(input).toHaveValue("Task123");
});

test("shows error when input text is too short", async () => {
  render(<TodoList />);

  const input = screen.getByPlaceholderText(/new task/i);

  fireEvent.change(input, { target: { value: "123" } });
  fireEvent.blur(input);

  expect(await screen.findByText(/too short/i)).toBeInTheDocument();
});

test("does not add empty todo", () => {
  render(<TodoList />);

  const button = screen.getByRole("button", { name: /додати/i });

  fireEvent.click(button);

  const items = screen.queryAllByRole("listitem");
  expect(items.length).toBe(0);
});

test("adds new todo after submit", async () => {
  render(<TodoList />);

  const input = screen.getByPlaceholderText(/new task/i);
  const button = screen.getByRole("button", { name: /додати/i });

  fireEvent.change(input, { target: { value: "New Task" } });
  fireEvent.click(button);

  const todo = await screen.findByText("New Task");
  expect(todo).toBeInTheDocument();
});

test("checkbox toggles completed state", async () => {
  render(<TodoList />);

  const input = screen.getByPlaceholderText(/new task/i);
  const button = screen.getByRole("button", { name: /додати/i });

  fireEvent.change(input, { target: { value: "Complete me" } });
  fireEvent.click(button);

  const checkbox = await screen.findByRole("checkbox");
  fireEvent.click(checkbox);

  const todoText = screen.getByText("Complete me");
  const todoItem = todoText.closest("li");

  expect(todoItem).toHaveStyle("text-decoration: line-through");
});

test("deletes a todo item", async () => {
  render(<TodoList />);

  const input = screen.getByPlaceholderText(/new task/i);
  const button = screen.getByRole("button", { name: /додати/i });

  fireEvent.change(input, { target: { value: "Delete me" } });
  fireEvent.click(button);

  const deleteButton = await screen.findByRole("button", { name: /видалити/i });
  fireEvent.click(deleteButton);

  const todoItems = screen.queryByText("Delete me");
  expect(todoItems).not.toBeInTheDocument();
});

test("page have button", () => {
  render(<TodoList />);

  const button = screen.getByRole("button", { name: /додати/i });
  expect(button).toBeInTheDocument();
});
