"use client";

import { SliderEx } from "@/registry/default/components/oui-slider-ex";

export default function Component() {
  return (
    <SliderEx
      aria-label="SliderEx"
      defaultValue={[50]}
      maxValue={100}
      step={1}
      isDisabled
    />
  );
}
