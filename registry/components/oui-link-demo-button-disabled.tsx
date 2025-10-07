import { buttonClassName } from "@/registry/components/ui/oui-button";
import { Link } from "@/registry/components/ui/oui-link";

export default function Component() {
  return (
    <Link isDisabled href="#" className={buttonClassName({})}>
      Button Link
    </Link>
  );
}
