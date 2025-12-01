"use client";

import {
  Slider,
  SliderOutput,
  SliderThumb,
  SliderTrack,
} from "@/registry/default/ui/oui-slider";

export default function Component() {
  return (
    <Slider aria-label="SliderEx" defaultValue={[50]} maxValue={100} step={1}>
      <div className="flex items-center justify-between gap-2">
        <SliderOutput />
      </div>
      <SliderTrack>
        <SliderThumb />
      </SliderTrack>
    </Slider>
  );
}
