import { expect, describe, it } from "vitest";
import { render, fireEvent } from "@testing-library/vue";
import UpdateTransactionModal from "../../src/components/transaction/UpdateTransactionModal.vue";

describe("UpdateTransactionModal", () => {
  const transaction = { id: 1, userInput: "Transaction 1", amount: 100 };

  it("renders update modal correctly", async () => {
    const { getByText, getByLabelText } = render(UpdateTransactionModal, {
      props: {
        transaction,
      },
    });

    const updateText = getByText("Update Transaction?");
    const textInput = getByLabelText("Text");
    const amountInput = getByLabelText("Amount");

    expect(updateText).toBeTruthy();
    expect(textInput.value).toBe("Transaction 1");
    expect(amountInput.value).toBe("100");
  });

  it("closes modal on close button click", async () => {
    const { getByText, emitted } = render(UpdateTransactionModal, {
      props: {
        transaction,
      },
    });

    const closeButton = getByText("×");
    await closeButton.click();

    expect(emitted().close).toHaveLength(1);
  });

  it("emits updated transaction on update button click", async () => {
    const { getByText, getByLabelText, emitted } = render(
      UpdateTransactionModal,
      {
        props: {
          transaction,
        },
      },
    );

    const textInput = getByLabelText("Text");
    await fireEvent.update(textInput, "Updated Transaction");

    const amountInput = getByLabelText("Amount");
    await fireEvent.update(amountInput, "200");

    const updateButton = getByText("Update");
    await updateButton.click();

    expect(emitted().submit).toHaveLength(1);
    expect(emitted().submit[0][0]).toEqual({
      id: 1,
      userInput: "Updated Transaction",
      amount: 200,
    });
  });
});
