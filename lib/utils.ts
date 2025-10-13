import type { RegistryTag } from "@/registry/registry-tags";
import type { RegistryItem } from "shadcn/schema";
import registry from "@/registry.json";
import { registryTags } from "@/registry/registry-tags";

const components = registry.items as unknown as RegistryItem[];

export const getComponents = (
  selectedTags: RegistryTag[] = [],
): RegistryItem[] => {
  return selectedTags.length
    ? components.filter((component) =>
        selectedTags.every(
          // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
          (tag) => component.meta?.tags?.includes(tag) ?? false,
        ),
      )
    : components;
};

export const getComponentsByNames = (names: string[]): RegistryItem[] => {
  const componentsMap = new Map(components.map((comp) => [comp.name, comp]));

  return names
    .map((name) => componentsMap.get(name))
    .filter((comp): comp is RegistryItem => comp !== undefined);
};

export const getAvailableTags = (
  selectedTags: RegistryTag[],
): RegistryTag[] => {
  if (!selectedTags.length) return [];

  // Get all components that have all the selected tags
  const matchingComponents = components.filter((component) =>
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    selectedTags.every((tag) => component.meta?.tags?.includes(tag) ?? false),
  );

  // Get all unique tags from the matching components
  const availableTags = new Set<RegistryTag>();
  matchingComponents.forEach((component) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    component.meta?.tags?.forEach((tag: RegistryTag) => {
      if (!selectedTags.includes(tag)) {
        availableTags.add(tag);
      }
    });
  });

  return Array.from(availableTags);
};

export const getDisabledTags = (selectedTags: RegistryTag[]): RegistryTag[] => {
  if (!selectedTags.length) return [];

  const availableTags = getAvailableTags(selectedTags);

  return registryTags.filter(
    (tag) => !availableTags.includes(tag) && !selectedTags.includes(tag),
  );
};
