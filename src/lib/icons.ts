import {
  LuCode,
  LuServer,
  LuDatabase,
  LuNetwork,
  LuLayers3,
  LuWrench,
  LuBriefcaseBusiness,
  LuBadgeCheck,
  LuMail,
  LuPhone,
  LuMapPin,
  LuDownload,
  LuArrowRight,
  LuArrowUp,
  LuExternalLink,
  LuMenu,
  LuX,
  LuChevronDown,
  LuUsers,
} from "react-icons/lu";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import type { IconType } from "react-icons";

export const icons: Record<string, IconType> = {
  code: LuCode,
  server: LuServer,
  database: LuDatabase,
  network: LuNetwork,
  layers: LuLayers3,
  tools: LuWrench,
  briefcase: LuBriefcaseBusiness,
  badge: LuBadgeCheck,
  mail: LuMail,
  phone: LuPhone,
  mapPin: LuMapPin,
  download: LuDownload,
  arrowRight: LuArrowRight,
  arrowUp: LuArrowUp,
  externalLink: LuExternalLink,
  menu: LuMenu,
  close: LuX,
  chevronDown: LuChevronDown,
  users: LuUsers,
  github: FaGithub,
  linkedin: FaLinkedinIn,
};

/** Resolves an iconKey to its component, falling back to LuCode so a typo
 *  never crashes the render — it just shows a generic icon. */
export function getIcon(key: string): IconType {
  return icons[key] ?? LuCode;
}