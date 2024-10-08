import resolveLinks from "../../plugins/utils/resolveLinks";

export default (pagePath, config) => {
  const linklists = {
    main: [
      {
        title: "Home",
        url: "/index.html",
      },
      {
        title: "Archive",
        url: "/about.html",
      },
      {
        title: "Contact",
        url: "/Contact.html",
      },
    ],
  };
  return resolveLinks(linklists, pagePath, config);
};
