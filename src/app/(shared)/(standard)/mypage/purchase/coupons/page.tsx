'use client';

import { FormProvider, useForm } from 'react-hook-form';

import ScriptX from '@/assets/icons/script-x.svg';
import OutlinedButton from '@/components/atoms/OutlinedButton/OutlinedButton';
import Input from '@/components/molecules/Input/Input';
import EmptyState from '@/components/organisms/EmptyState/EmptyState';
import useRegisterCoupon from '@/hooks/api/member/useRegisterCoupon';

import * as S from './page.styled';
import SettingGroup from '../../notification/_components/SettingGroup/SettingGroup';

export default function Coupons() {
  const methods = useForm({
    mode: 'onSubmit',
    defaultValues: { coupon: '' },
  });

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    setError,
    formState: { errors, isValid },
  } = methods;

  const { registerCoupon, isLoading, isError, error, isSuccess } = useRegisterCoupon();

  const onSubmit = (data: { coupon: string }) => {
    if (data.coupon.trim()) {
      registerCoupon(data.coupon.trim(), {
        onSuccess: () => {
          reset();
        },
        onError: (error: Error) => {
          setError('coupon', { message: error.message || '쿠폰 등록에 실패했습니다.' });
        },
      });
    }
  };

  return (
    <>
      <FormProvider {...methods}>
        <S.CouponForm onSubmit={handleSubmit(onSubmit)}>
          <Input
            label=''
            inputSize='md'
            placeholder='쿠폰 코드 입력'
            error={errors.coupon?.message}
            {...register('coupon')}
          />

          <OutlinedButton
            size='sm'
            color='primary'
            label={isLoading ? '등록 중...' : '등록'}
            interactionVariant='normal'
            type='submit'
          />
        </S.CouponForm>
      </FormProvider>

      <SettingGroup title='쿠폰 목록'>
        <EmptyState icon={<ScriptX />} />
      </SettingGroup>
    </>
  );
}
