import React from "react";

import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CommentForm from "../components/CommentForm";

describe("CommentForm", () => {
  let func;
  let container;
  beforeEach(() => {
    func = jest.fn();
    ({ container } = render(<CommentForm onSubmit={func} />));
  });
  it("has h2 heading", () => {
    expect(
      screen.getByRole("heading", { level: 2, name: "Post a Comment" })
    ).toBeInTheDocument();
  });
  it("changes the state when the author input is changed", () => {
    let input = screen.getByRole("textbox", { name: "Your Name" });
    userEvent.type(input, "Srdjan");
    expect(input.value).toEqual("Srdjan");
  });
  it("changes the state when the author input is changed", () => {
    let inputBody = screen.getByRole("textbox", { name: "Your Comment" });
    fireEvent.change(inputBody, { target: { value: "My Comment" } });
    expect(inputBody.value).toEqual("My Comment");
  });
  it("calls onSubmit when form is submitted", () => {
    const form = container.querySelector("form");
    fireEvent.submit(form);
    expect(func.mock.calls.length).toEqual(1);
  });
  it("calls onSubmit when form is submitted and comment is passed to it as the argument", () => {
    const form = container.querySelector("form");
    let inputAuthor = screen.getByRole("textbox", { name: "Your Name" });
    let inputBody = screen.getByRole("textbox", { name: "Your Comment" });
    fireEvent.change(inputAuthor, { target: { value: "Srdjan" } });
    fireEvent.change(inputBody, { target: { value: "My Comment" } });

    let comment = {
      author: inputAuthor.value,
      body: inputBody.value,
    };

    fireEvent.submit(form);
    expect(func.mock.calls.length).toEqual(1);
    expect(func.mock.calls[0][0]).toEqual(comment);
  });
});
