import React from "react";

import { render, screen, fireEvent } from "@testing-library/react";
import { within } from "@testing-library/dom";
import userEvent from "@testing-library/user-event";
import CommentThread from "../components/CommentThread";

describe("CommentThread", () => {
  const comment = {
    id: "4b2d74e6-7d1a-4ba3-9e95-0f52ee8ebc6e",
    author: "Reed Fisher",
    body: "Sint in in sunt amet.",
    postedAt: 1550488214207,
    replies_count: 3,
    replies: [
      {
        id: "116dbd01-d5f3-4dfb-afeb-f822a9264a5e",
        comment_id: "4b2d74e6-7d1a-4ba3-9e95-0f52ee8ebc6e",
        author: "Kathleen Nikolaus",
        body:
          "Officia suscipit sint sint impedit nemo. Labore aut et quia quasi ut. Eos voluptatibus quidem eius delectus beatae excepturi.",
        postedAt: 1550419941546,
      },
    ],
  };
  let func;
  beforeEach(() => {
    func = jest.fn();
    render(<CommentThread comment={comment} onMoreReplies={func} />);
  });
  // it("has a class parent-comment", () => {
  //   const { container } = render(<CommentThread comment={comment} />);
  //   expect(container.querySelector(".parent-comment")).toBeInTheDocument();
  // });
  it("renders replies", () => {
    let comments = within(screen.getByTestId("replies")).getAllByTestId(
      "comment"
    );
    expect(comments.length).toBe(comment.replies.length);
  });
  it("contains show more replies link", () => {
    let link = screen.getByRole("link", { name: /Show More Replies/ });
    expect(link).toBeInTheDocument();
  });
  it("calls the onMoreReplies function when the link is clicked", () => {
    let link = screen.getByRole("link", { name: /Show More Replies/ });
    fireEvent.click(link, { preventDefault: () => {} });
    expect(func.mock.calls.length).toBe(1);
  });
  it("calls the onMoreReplies function and passes comment id", () => {
    let link = screen.getByRole("link", { name: /Show More Replies/ });
    userEvent.click(link);
    expect(func.mock.calls[0][0]).toBe(comment.id);
  });
});
