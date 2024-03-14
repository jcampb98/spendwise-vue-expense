import { expect, test } from "vitest";
import { render } from "@testing-library/vue";
import IncomeExpenses from "../../src/components/income/IncomeExpenses.vue";

vitest("renders income and expenses correctly", async () => {
  const income = 1000;
  const expenses = 500;

  const { getByText } = render(IncomeExpenses, {
    props: {
      income,
      expenses,
    },
  });

  const incomeElement = getByText(`+£${income}`).innerHTML;
  const expensesElement = getByText(`-£${expenses}`).innerHTML;

  expect(incomeElement).toEqual("+£1000");
  expect(expensesElement).toEqual("-£500");
});
