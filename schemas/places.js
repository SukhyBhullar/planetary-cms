import { GiPlanetConquest } from "react-icons/md";

export default {
  name: "places",
  title: "Places",
  type: "document",
  icon: GiPlanetConquest,
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      description: "Name of the place",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 100,
      },
    },
    {
      name: "subTitle",
      title: "Sub Title",
      type: "string",
      description: "Description of the place",
    },
    {
      name: "travelAction",
      title: "Travel Action",
      type: "travelAction",
      description: "Action for traveling",
    },
  ],
  preview: {
    select: { title: "name" },
  },
};
