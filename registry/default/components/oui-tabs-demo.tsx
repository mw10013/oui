"use client";

import { Tab, TabList, TabPanel, Tabs } from "@/registry/default/ui/oui-tabs";

export default function Component() {
  return (
    <Tabs>
      <TabList aria-label="History of Ancient Rome">
        <Tab id="FoR">
          <span>Founding of Rome</span>
        </Tab>
        <Tab id="MaR">
          <span>Monarchy and Republic</span>
        </Tab>
        <Tab id="Emp">
          <span>Empire</span>
        </Tab>
      </TabList>
      <TabPanel id="FoR">
        Arma virumque cano, Troiae qui primus ab oris.
      </TabPanel>
      <TabPanel id="MaR">Senatus Populusque Romanus.</TabPanel>
      <TabPanel id="Emp">Alea jacta est.</TabPanel>
    </Tabs>
  );
}
