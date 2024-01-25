'use client';

import { Controller, useFormContext } from 'react-hook-form';
import { AdvancedRadio, RadioGroup } from '@/components/ui/advanced-radio';
import cn from '@/utils/class-names';
import { FieldError } from '@/components/ui/field-error';

export default function GetSize({ sizes }: { sizes?: number[] }) {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <Controller
        control={control}
        name="productSize"
        render={({ field: { value, onChange } }) => (
          <RadioGroup
            value={value}
            setValue={onChange}
            className="flex flex-wrap items-center gap-4"
          >
            {sizes?.map((size) => (
              <AdvancedRadio
                key={size}
                value={size}
                className={cn(
                  '[&_.rizzui-advanced-checkbox:hover]:border-primary [&_.rizzui-advanced-checkbox]:min-h-[unset] [&_.rizzui-advanced-checkbox]:min-w-[unset] [&_.rizzui-advanced-checkbox]:px-3 [&_.rizzui-advanced-checkbox]:py-[5px] [&_.rizzui-advanced-checkbox]:font-medium [&_.rizzui-advanced-checkbox]:ring-0',
                  String(size) === String(value) &&
                    '[&_.rizzui-advanced-checkbox]:border-primary [&_.rizzui-advanced-checkbox]:ring-1 [&_.rizzui-advanced-checkbox]:ring-primary'
                )}
              >
                {size}
              </AdvancedRadio>
            ))}
          </RadioGroup>
        )}
      />
      {errors?.productSize && (
        <FieldError
          className="mt-1"
          error={errors?.productSize?.message as string}
        />
      )}
    </>
  );
}
