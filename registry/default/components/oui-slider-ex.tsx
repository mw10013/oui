"use client";

import { Label } from "@/registry/default/ui/oui-label";
import { Link } from "@/registry/default/ui/oui-link";
import {
  Slider,
  SliderOutput,
  SliderThumb,
  SliderTrack,
} from "@/registry/default/ui/oui-slider";
import { Text } from "@/registry/default/ui/oui-text";
import * as Rac from "react-aria-components";

export interface SliderExProps extends Rac.SliderProps {
  label?: React.ReactNode;
}

export function SliderEx({ label, ...props }: SliderExProps) {
  return (
    <Slider {...props}>
      <div className="flex items-center justify-between gap-2">
        {label && typeof label === "string" ? <Label>{label}</Label> : label}
        <SliderOutput />
      </div>
      <SliderTrack>
        <SliderThumb />
      </SliderTrack>
    </Slider>
  );
}

export default function Component() {
  return (
    <div className="grid gap-2">
      <Label>SliderEx</Label>
      <Text slot="description">
        A reusable wrapper for{" "}
        <Link
          href="https://react-spectrum.adobe.com/react-aria/Slider.html"
          underline="always"
        >
          Slider
        </Link>{" "}
        — see{" "}
        <Link
          href="https://oui.mw10013.workers.dev/filter?tags=slider-ex"
          underline="always"
        >
          Uses
        </Link>
        .
      </Text>
    </div>
  );
}
