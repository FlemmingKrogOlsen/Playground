import { Image } from './styles'

interface IContactProps {
  id: number
  url: string
  image: string
  imageAlt: string
}

const contactInfo: IContactProps[] = [
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
]

const Contact = () => {
  return (
    <>
      {
        contactInfo.map((contact) => {
          return (
            <a key={contact.id} href={contact.url} rel="noreferrer" target="_blank">
              <Image src={`/Playground/` + contact.image} alt={contact.imageAlt} />
            </a>
          )
        })
      }
    </>
  );
}

export default Contact