import ButtonCopyClipboard from "components/Button/ButtonCopyClipboard";
import DetailsSummary from "components/DetailsSummary";
import { Editor, EditorItem } from "layout/nested.pages";

const text = `<DetailsSummary 
  title="Title Text" 
  open={false}
>
  Content goes here
</DetailsSummary>`;

const DetailsSummaryPage = () => (
  <>
    <DetailsSummary title="Title Text" open={true}>
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
    </DetailsSummary>
    <Editor>
      <EditorItem>
        <pre>{text}</pre>
      </EditorItem>
      <ButtonCopyClipboard text={text} />
    </Editor>
  </>
);

export default DetailsSummaryPage;
