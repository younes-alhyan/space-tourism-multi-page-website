export const navItems = ["home", "destination", "crew", "technology"] as const;
export type NavItem = (typeof navItems)[number];
