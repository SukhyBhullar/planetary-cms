import { GiSolarSystem } from "react-icons";

export default {
  name: "solarSystem",
  title: "Solar System",
  type: "document",
  icon: GiSolarSystem,
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      description: "Representation of a solar system",
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
      name: "places",
      title: "Places",
      type: "array",
      description: "Places within system",
      of: [{ type: "reference", to: [{ type: "places" }] }],
    },
  ],
  preview: {
    select: { title: "name" },
  },
};
