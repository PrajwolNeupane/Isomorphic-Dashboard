'use client';

import { RadioGroup } from '@/components/ui/radio-group';
import { useLayout } from '@/hooks/use-layout';
import { LAYOUT_OPTIONS } from '@/config/enums';
import HydrogenIcon from '@/layouts/hydrogen-icon';
import HeliumIcon from '@/layouts/helium-icon';
import LithiumIcon from '@/layouts/lithium-icon';
import BerylliumIcon from '@/layouts/beryllium-icon';
import RadioBox from '@/components/settings/radio-box';
import DrawerBlock from '@/components/settings/drawer-block';

const layoutOptions = [
  {
    icon: HydrogenIcon,
    value: LAYOUT_OPTIONS.HYDROGEN,
  },
  {
    icon: HeliumIcon,
    value: LAYOUT_OPTIONS.HELIUM,
  },
  {
    icon: LithiumIcon,
    value: LAYOUT_OPTIONS.LITHIUM,
  },
  {
    icon: BerylliumIcon,
    value: LAYOUT_OPTIONS.BERYLLIUM,
  },
];

export default function LayoutSwitcher() {
  const { layout, setLayout } = useLayout();

  return (
    <DrawerBlock title="Layout">
      <RadioGroup
        value={layout}
        setValue={(selectedLayout: any) => setLayout(selectedLayout)}
        className="grid grid-cols-2 gap-4 sm:grid-cols-3"
      >
        {layoutOptions.map((item) => (
          <RadioBox
            key={item.value}
            value={item.value}
            className="h-auto"
            contentClassName="p-0 [&_.radio-active]:ring-primary/0 peer-checked:ring-0 border-0 ring-0 peer-checked:border-0 peer-checked:[&_.radio-active]:ring-primary/100 [&_.radio-active]:ring-2 peer-checked:text-primary"
          >
            <span className="radio-active mb-3 inline-flex rounded-lg capitalize ring-offset-4 ring-offset-gray-0 dark:ring-offset-gray-100">
              <item.icon aria-label={item.value} className="h-[92px] w-full" />
            </span>
            <span className="inline-block w-full text-center">
              {item.value}
            </span>
          </RadioBox>
        ))}
      </RadioGroup>
    </DrawerBlock>
  );
}
