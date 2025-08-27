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

export const linksMetaData: ILinkMetaData[] = [
  {
    title: "Dashboard",
    icon: Home,
    link: "/dashboard",
  },
  {
    title: "Schedule",
    icon: CalendarMonth,
    link: "/schedule",
  },
  {
    title: "Courses",
    icon: LocalLibrary,
    link: "/courses",
  },
  {
    title: "Gradebook",
    icon: School,
    link: "/gradebook",
  },
  {
    title: "Performance",
    icon: TrendingUp,
    link: "/performance",
  },
  {
    title: "Announcement",
    icon: Campaign,
    link: "/announcement",
  },
];
