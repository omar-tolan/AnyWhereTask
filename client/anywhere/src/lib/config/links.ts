import {
  Home,
  CalendarMonth,
  Campaign,
  School,
  LocalLibrary,
  TrendingUp,
} from "@mui/icons-material";

export type ILinkMetaData = {
  title: string;
  icon: any;
  link: string;
};

export const getLinksMetaData = (t: (key: string) => string): ILinkMetaData[] => [
  {
    title: t("navlinks.Dashboard"),
    icon: Home,
    link: "/dashboard",
  },
  {
    title: t("navlinks.Schedule"),
    icon: CalendarMonth,
    link: "/schedule",
  },
  {
    title: t("navlinks.Courses"),
    icon: LocalLibrary,
    link: "/courses",
  },
  {
    title: t("navlinks.Gradebook"),
    icon: School,
    link: "/gradebook",
  },
  {
    title: t("navlinks.Performance"),
    icon: TrendingUp,
    link: "/performance",
  },
  {
    title: t("navlinks.Announcement"),
    icon: Campaign,
    link: "/announcement",
  },
];