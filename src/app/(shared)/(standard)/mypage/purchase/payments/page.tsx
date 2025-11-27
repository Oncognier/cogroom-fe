import { PaymentList } from './_components/PaymentList/PaymentList';
import { PaymentMethod } from './_components/PaymentMethod/PaymentMethod';
import SettingGroup from '../../notification/_components/SettingGroup/SettingGroup';

export default function Payments() {
  return (
    <>
      <SettingGroup title='결제 수단'>
        <PaymentMethod />
      </SettingGroup>

      <PaymentList />
    </>
  );
}
