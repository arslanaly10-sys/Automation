import {
  PhoneIcon, FunnelIcon, CalendarDotsIcon, ArrowsClockwiseIcon, StarIcon, PlugIcon, FilesIcon, GaugeIcon,
} from "@phosphor-icons/react/dist/ssr";
import type { Service } from "@/lib/content";

const map = {
  phone: PhoneIcon, funnel: FunnelIcon, calendar: CalendarDotsIcon, repeat: ArrowsClockwiseIcon,
  star: StarIcon, plug: PlugIcon, files: FilesIcon, gauge: GaugeIcon,
};

export function ServiceIcon({ name, size = 22 }: { name: Service["icon"]; size?: number }) {
  const Icon = map[name];
  return <Icon aria-hidden="true" size={size} weight="duotone" />;
}
