import ButtonCopyClipboard from "components/Button/ButtonCopyClipboard";
import InfoCard from "components/InfoCard";
import { Editor, EditorItem } from "layout/nested.pages";

const text = `<InfoCard header="InfoCard Title">
  Content goes here
</InfoCard>
`;

const InfoCardPage = () => (
  <>
    <InfoCard header="InfoCard Title">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit corrupti
      dolorem ipsam quas reiciendis neque earum reprehenderit nulla sunt
      cupiditate ducimus deserunt libero tempore magnam quasi sed, laboriosam
      possimus corporis molestiae nostrum pariatur alias praesentium.
      Accusantium, ipsa quo deserunt libero esse numquam molestiae qui totam
      perferendis illum cum. Atque blanditiis, laudantium quos nostrum
      consequatur iure fugit eveniet architecto quisquam quod ex esse ab
      accusantium veniam cupiditate illum iusto rerum facere at consequuntur
      explicabo natus mollitia ducimus? Omnis in deserunt perspiciatis similique
      quisquam, rerum consequuntur accusantium facilis, qui amet culpa,
      cupiditate perferendis eius veritatis! Asperiores tempore dolor,
      voluptates accusantium quas quaerat?
    </InfoCard>
    <Editor>
      <EditorItem>
        <pre>{text}</pre>
      </EditorItem>
      <ButtonCopyClipboard text={text} />
    </Editor>
  </>
);

export default InfoCardPage;
