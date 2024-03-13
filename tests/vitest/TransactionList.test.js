import { expect, describe, it } from 'vitest';
import { render } from '@testing-library/vue';
import TransactionList from "../../src/components/transaction/TransactionList.vue";

describe('TransactionList', () => {
  const transactions = [
    { id: 1, userInput: 'Test123', amount: 500 },
    { id: 2, userInput: 'Test456', amount: -25 },
  ];

  it('renders transactions correctly', async () => {
    const { getByText } = render(TransactionList, {
      props: {
        transactions,
      },
    });

    expect(getByText('Test123', '+£500')).to.exist;
    expect(getByText('Test456', '-£25')).to.exist;
  });
});