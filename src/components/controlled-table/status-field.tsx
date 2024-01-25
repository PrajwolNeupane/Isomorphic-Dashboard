import {
  Select,
  type SelectProps,
  type SelectOption,
} from '@/components/ui/select';

export default function StatusField({
  placeholder = 'Select status',
  ...props
}: SelectProps<SelectOption>) {
  return (
    <Select
      inPortal={false}
      placeholder={placeholder}
      selectClassName="h-9 min-w-[150px]"
      dropdownClassName="p-1.5"
      optionClassName="h-9"
      {...props}
    />
  );
}
