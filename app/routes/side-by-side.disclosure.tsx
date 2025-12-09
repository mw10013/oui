"use client";

import {
  SideBySidePage,
  SideBySideSection,
} from "@/components/side-by-side-page";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/registry/default/ui/accordion";
import * as Oui from "@/registry/default/ui/oui-index";
import * as Rac from "react-aria-components";

export function AccordionSingle() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

export function OuiDisclosureSingle() {
  return (
    <Oui.Disclosure className="w-full">
      <Oui.DisclosureHeading>
        <Oui.DisclosureButton>Is it accessible?</Oui.DisclosureButton>
      </Oui.DisclosureHeading>
      <Oui.DisclosurePanel>
        Yes. It adheres to the WAI-ARIA design pattern.
      </Oui.DisclosurePanel>
    </Oui.Disclosure>
  );
}

export function AccordionMultiple() {
  return (
    <Accordion type="multiple" className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>Product Information</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>
            Our flagship product combines cutting-edge technology with sleek
            design. Built with premium materials, it offers unparalleled
            performance and reliability.
          </p>
          <p>
            Key features include advanced processing capabilities, and an
            intuitive user interface designed for both beginners and experts.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Shipping Details</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>
            We offer worldwide shipping through trusted courier partners.
            Standard delivery takes 3-5 business days, while express shipping
            ensures delivery within 1-2 business days.
          </p>
          <p>
            All orders are carefully packaged and fully insured. Track your
            shipment in real-time through our dedicated tracking portal.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Return Policy</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>
            We stand behind our products with a comprehensive 30-day return
            policy. If you're not completely satisfied, simply return the item
            in its original condition.
          </p>
          <p>
            Our hassle-free return process includes free return shipping and
            full refunds processed within 48 hours of receiving the returned
            item.
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

export function OuiDisclosureMultiple() {
  return (
    <Rac.DisclosureGroup className="w-full">
      <Oui.Disclosure id="item-1">
        <Oui.DisclosureHeading>
          <Oui.DisclosureButton>Product Information</Oui.DisclosureButton>
        </Oui.DisclosureHeading>
        <Oui.DisclosurePanel>
          <div className="flex flex-col gap-4 text-balance">
            <p>
              Our flagship product combines cutting-edge technology with sleek
              design. Built with premium materials, it offers unparalleled
              performance and reliability.
            </p>
            <p>
              Key features include advanced processing capabilities, and an
              intuitive user interface designed for both beginners and experts.
            </p>
          </div>
        </Oui.DisclosurePanel>
      </Oui.Disclosure>
      <Oui.Disclosure id="item-2">
        <Oui.DisclosureHeading>
          <Oui.DisclosureButton>Shipping Details</Oui.DisclosureButton>
        </Oui.DisclosureHeading>
        <Oui.DisclosurePanel>
          <div className="flex flex-col gap-4 text-balance">
            <p>
              We offer worldwide shipping through trusted courier partners.
              Standard delivery takes 3-5 business days, while express shipping
              ensures delivery within 1-2 business days.
            </p>
            <p>
              All orders are carefully packaged and fully insured. Track your
              shipment in real-time through our dedicated tracking portal.
            </p>
          </div>
        </Oui.DisclosurePanel>
      </Oui.Disclosure>
      <Oui.Disclosure id="item-3">
        <Oui.DisclosureHeading>
          <Oui.DisclosureButton>Return Policy</Oui.DisclosureButton>
        </Oui.DisclosureHeading>
        <Oui.DisclosurePanel>
          <div className="flex flex-col gap-4 text-balance">
            <p>
              We stand behind our products with a comprehensive 30-day return
              policy. If you're not completely satisfied, simply return the item
              in its original condition.
            </p>
            <p>
              Our hassle-free return process includes free return shipping and
              full refunds processed within 48 hours of receiving the returned
              item.
            </p>
          </div>
        </Oui.DisclosurePanel>
      </Oui.Disclosure>
    </Rac.DisclosureGroup>
  );
}

export default function RouteComponent() {
  return (
    <SideBySidePage
      title="Disclosure"
      sourceHref="https://github.com/mw10013/oui/blob/main/app/routes/side-by-side.disclosure.tsx"
    >
      <SideBySideSection
        title="Single"
        shadcn={<AccordionSingle />}
        oui={<OuiDisclosureSingle />}
      />
      <SideBySideSection
        title="Multiple"
        shadcn={<AccordionMultiple />}
        oui={<OuiDisclosureMultiple />}
      />
    </SideBySidePage>
  );
}
