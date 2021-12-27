import { useState } from "react";
import styled from "styled-components";
import { CustomTable } from "components/CustomTable";
import Section from "components/Section";
import Spinner from "components/Spinner";
import isMobile from "helpers/isMobile";
import { data, headers } from "./data";
import { Editor, EditorItemLarge, SpaceEvenly } from "layout/nested.pages";
import ButtonCopyClipboard from "components/Button/ButtonCopyClipboard";

const SortSelector = styled.div`
  b {
    padding-right: 5px;
    color: white;
  }
  select {
    color: black;
    border-radius: 7px;
    padding: 2px 0px;
  }
`;

const text = `const headers = ${JSON.stringify(headers, null, 2)};
  
const data = ${JSON.stringify(data, null, 2)};

<CustomTable
  headers={headers}
  data={data}
  state={data ? true : false}
  sortBy={sortBy}
/>
  
  `;

const CustomTablePage = () => {
  const [sortBy, setSortBy] = useState<string>("name");

  const Select = () => {
    return (
      <SortSelector>
        <b>Sort by</b>
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          {headers &&
            headers.map((item, index) => {
              return (
                <option key={index} value={item.sortName}>
                  {item.title?.replace("<br/>", " ")}
                </option>
              );
            })}
        </select>
      </SortSelector>
    );
  };

  return (
    <>
      <Section title="User Table" component={isMobile() ? "" : <Select />}>
        {data ? (
          <CustomTable
            headers={headers}
            data={data}
            state={data ? true : false}
            sortBy={sortBy}
          />
        ) : (
          <SpaceEvenly>
            <Spinner />
          </SpaceEvenly>
        )}
      </Section>
      <Editor>
        <EditorItemLarge>
          <pre>{text}</pre>
        </EditorItemLarge>
        <ButtonCopyClipboard text={text} />
      </Editor>
    </>
  );
};

export default CustomTablePage;
