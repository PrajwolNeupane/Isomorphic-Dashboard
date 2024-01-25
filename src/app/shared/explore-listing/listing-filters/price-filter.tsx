import { useEffect, useState } from 'react';
import { RadioGroup } from '@/components/ui/radio-group';
import { Button } from '@/components/ui/button';
import { AdvancedRadio } from '@/components/ui/advanced-radio';
import { PiMinus } from 'react-icons/pi';
import { Select } from '@/components/ui/select';
import { useMedia } from '@/hooks/use-media';
import { InitialStateType, noMaximumData, noMinimumData } from './filter-utils';
import { useIsMounted } from '@/hooks/use-is-mounted';

const advanceRadioStyles = {
  className:
    'bg-transparent py-0 duration-100 [&_.rizzui-advanced-checkbox]:px-1 [&_.rizzui-advanced-checkbox:hover]:border-0 [&_.rizzui-advanced-checkbox:hover]:bg-primary/[0.05] [&_.rizzui-advanced-checkbox]:min-h-[unset] [&_.rizzui-advanced-checkbox]:min-w-[unset] [&_.rizzui-advanced-checkbox]:rounded-none [&_.rizzui-advanced-checkbox]:border-0 [&_.rizzui-advanced-checkbox]:bg-transparent [&_.rizzui-advanced-checkbox]:text-center [&_.rizzui-advanced-checkbox]:text-gray-900 [&_input:checked~.rizzui-advanced-checkbox]:text-gray-0 dark:[&_input:checked~.rizzui-advanced-checkbox]:text-gray-900 [&_.rizzui-advanced-checkbox]:duration-100 [&_input:checked~.rizzui-advanced-checkbox]:bg-primary',
  inputClassName:
    '[&:checked~.rizzui-advanced-checkbox]:border-0 [&:checked~.rizzui-advanced-checkbox]:ring-0',
};

export default function PriceFilter({
  state,
  applyFilter,
  setOpen,
}: {
  state: InitialStateType;
  applyFilter: (query: string, value: any) => void;
  setOpen?: any;
}) {
  const [pricing, setPricing] = useState('last-price');
  const [price, setPrice] = useState<number[]>([0, 100000]);
  const isWide = useMedia('(min-width: 1537px)', false);
  const isMounted = useIsMounted();

  useEffect(() => {
    if (typeof state.price === 'string') {
      setPrice(state.price?.split(',').map((n: string) => +n));
    }
    if (state.pricing && typeof state.pricing === 'string') {
      setPricing(state.pricing);
    }
  }, [state.price, state.pricing]);

  useEffect(() => {
    isMounted && applyFilter('pricing', pricing);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pricing]);

  return (
    <>
      <RadioGroup
        value={pricing}
        setValue={setPricing}
        className="grid grid-cols-2 items-center overflow-hidden rounded-md border border-gray-300 text-center [&>label:last-of-type>span]:border-0"
      >
        <AdvancedRadio
          name="pricing"
          value="last-price"
          {...advanceRadioStyles}
        >
          List Price
        </AdvancedRadio>
        <AdvancedRadio
          name="pricing"
          value="monthly-payment"
          {...advanceRadioStyles}
        >
          Monthly Payment
        </AdvancedRadio>
      </RadioGroup>
      <div className="mt-5 grid grid-cols-[1fr_12px_1fr] items-center gap-3">
        <Select
          selectClassName=""
          label="Minimum"
          labelClassName="text-start"
          placeholder="No min"
          options={noMinimumData}
          value={price[0]}
          onChange={(value: number) => {
            setPrice((prev) => [value, prev[1]]);
            !isWide && applyFilter('price', [value, price[1]]);
          }}
          getOptionValue={(option) => option.value}
          displayValue={(selected) =>
            noMinimumData?.find((nmin) => nmin.value === selected)?.label ?? ''
          }
        />
        <PiMinus className="relative top-3 w-3 flex-shrink-0" />
        <Select
          selectClassName=""
          label="Maximum"
          labelClassName="text-start"
          placeholder="No max"
          options={noMaximumData}
          value={price[1]}
          onChange={(value: number) => {
            setPrice((prev) => [prev[0], value]);
            !isWide && applyFilter('price', [price[0], value]);
          }}
          getOptionValue={(option) => option.value}
          displayValue={(selected) =>
            noMaximumData?.find((nmax) => nmax.value === selected)?.label ?? ''
          }
        />
      </div>
      {isWide && (
        <Button
          onClick={() => {
            setOpen(false);
            applyFilter('price', price);
          }}
          className="mt-5 w-full rounded-md dark:bg-gray-50 dark:text-white"
        >
          Apply
        </Button>
      )}
    </>
  );
}
