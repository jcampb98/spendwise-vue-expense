import { expect, describe, it } from "vitest";
import { render, fireEvent } from "@testing-library/vue";
import "@testing-library/jest-dom";
import AddTransaction from "../../src/components/transaction/AddTransaction.vue";

describe("AddTransaction", () => {
  it("submits the form with correct data", async () => {
    const { getByLabelText, getByText, emitted } = render(AddTransaction);

    const textInput = getByLabelText("Text");
    await fireEvent.update(textInput, "Test Transaction");

    const amountInput = getByLabelText(
      "Amount (negative - expense, positive - income)",
    );
    await fireEvent.update(amountInput, "100");

    const submitButton = getByText("Add Transaction?");
    await submitButton.click();

    expect(emitted().userSubmitted).toHaveLength(1);
    expect(emitted().userSubmitted[0][0]).toEqual({
      userInput: "Test Transaction",
      amount: 100,
    });
  });
});
