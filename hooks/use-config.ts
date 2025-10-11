import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";

interface Config {
  packageManager: "npm" | "yarn" | "pnpm" | "bun";
}

const configAtom = atomWithStorage<Config>("config", {
  packageManager: "pnpm",
});

export function useConfig() {
  return useAtom(configAtom);
}
