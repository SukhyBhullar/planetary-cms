import { GiPlanetConquest } from "react-icons/md";

export default {
  name: "places",
  title: "Places",
  type: "object",
  icon: GiPlanetConquest,
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      description: 'Name of the place',
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
        description: 'Description of the place',
    }
  ]
};
