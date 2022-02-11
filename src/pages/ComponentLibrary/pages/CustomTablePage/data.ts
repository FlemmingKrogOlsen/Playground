import { IHeader } from "components/CustomTable/types";

export const headers: Array<IHeader> = [
  {
    title: "User ID",
    name: "id",
    align: "left",
    headerAlign: "left",
    sortName: "id",
    width: "15%",
  },
  {
    title: "User Name",
    name: "name",
    align: "left",
    headerAlign: "left",
    sortName: "name",
    width: "25%",
  },
  {
    title: "User Age",
    name: "age",
    align: "left",
    headerAlign: "left",
    sortName: "age",
    width: "15%",
  },
  {
    title: "User Address",
    name: "address",
    align: "left",
    headerAlign: "left",
    sortName: "address",
    width: "45%",
  },
];

export const data = [
  {
    id: 1,
    name: "John Smith",
    age: 32,
    address: "New York No. 1 Lake Park",
  },
  {
    id: 2,
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
  },
  {
    id: 3,
    name: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
  },
  {
    id: 4,
    name: "Jim Red",
    age: 32,
    address: "London No. 2 Lake Park",
  },
];
