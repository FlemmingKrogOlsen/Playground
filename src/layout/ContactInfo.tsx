import styled from "styled-components";
import { contactInfo } from "data/contactInfo";

const Image = styled.img`
  margin-left: 0.5rem;
  display: inline-block;
  vertical-align: middle;
  &:hover {
    filter: drop-shadow(0px 0px 3px rgba(255, 255, 255, 0.75));
  }
`;
const ContactInfo = () => (
  <div>
    {contactInfo.map((contact) => (
      <a key={contact.id} href={contact.url} rel="noreferrer" target="_blank">
        <Image src={`/Playground/` + contact.image} alt={contact.imageAlt} />
      </a>
    ))}
  </div>
);

export default ContactInfo;
