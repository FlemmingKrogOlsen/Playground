import { useState } from "react";
import styled from "styled-components";
import { CustomTable } from "components/CustomTable";
import Section from "components/Section";
import Spinner from "components/Spinner";
import isMobile from "helpers/isMobile";
import { data, headers } from "./data";
import { SpaceEvenly } from "layout/nested.pages";

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
    <Section title="User Table" component={isMobile() ? "" : <Select />}>
      {data ? (
        <CustomTable
          headers={headers}
          data={data}
          state={data ? true : false}
          skeletonRows={10}
          sortBy={sortBy}
        />
      ) : (
        <SpaceEvenly>
          <Spinner />
        </SpaceEvenly>
      )}
    </Section>
  );
};

export default CustomTablePage;
