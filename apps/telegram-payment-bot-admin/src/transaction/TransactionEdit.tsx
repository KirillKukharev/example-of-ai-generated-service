import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  SelectInput,
  ReferenceInput,
} from "react-admin";
import { PaymentTitle } from "../payment/PaymentTitle";

export const TransactionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="transactionDate" source="transactionDate" />
        <SelectInput
          source="status"
          label="status"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <ReferenceInput source="payment.id" reference="Payment" label="payment">
          <SelectInput optionText={PaymentTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
