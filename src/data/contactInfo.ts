type ContactProps = {
  id: number;
  url: string;
  image: string;
  imageAlt: string;
};

export const contactInfo: ContactProps[] = [
  {
    id: 1,
    url: "mailto:flemming@krogolsen.dk",
    image: "/images/email-14-32.png",
    imageAlt: "Email",
  },
  {
    id: 2,
    url: "https://www.linkedin.com/in/flemmingkrogolsen/",
    image: "/images/linkedin-4-32.png",
    imageAlt: "LinkedIn",
  },
  {
    id: 3,
    url: "https://github.com/FlemmingKrogOlsen",
    image: "/images/GitHub-Mark-Light-32px.png",
    imageAlt: "GitHub",
  },
];
