import { FC } from "react";
import { Table, Container, Caption, Wrapper } from "./styled";
import IProps from "./types";
import { mergeDeep } from "../../helpers/mergeDeep";
import { defaultConfig } from "./defaultConfig";

const TableFixedHeader: FC<IProps> = ({ caption, footer, data, config }) => {
  const mergedConfig = mergeDeep(defaultConfig, config || {});
  return (
    <Wrapper color={mergedConfig.backgrondColor}>
      <Caption color={mergedConfig.captionTextColor}>{caption}</Caption>
      <Container config={mergedConfig}>
        <div>
          <Table config={mergedConfig}>
            <thead>
              <tr>
                {data.headers.map((item, index) => (
                  <th key={index}>{item}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.rows.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item.title}</td>
                    {item.data.map((item, index) => {
                      return <td key={index}>{item}</td>;
                    })}
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan={data.headers.length}>{footer}</td>
              </tr>
            </tfoot>
          </Table>
        </div>
      </Container>
    </Wrapper>
  );
};

export default TableFixedHeader;
