'use client';

import PaymentTabSelect from '../_components/PaymentTabSelect/PaymentTabSelect';
import * as SS from '../page.styled';
import PaymentManagement from './PaymentManagement';

export default function PaymentManagementPage() {
  return (
    <SS.PaymentContainer>
      <SS.TabHeader>
        <PaymentTabSelect />
      </SS.TabHeader>
      <PaymentManagement />
    </SS.PaymentContainer>
  );
}
