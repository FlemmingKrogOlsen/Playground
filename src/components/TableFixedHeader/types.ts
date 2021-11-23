type row = {
    title: string;
    data: string[];
};

export type tableDataType = {
    headers: string[];
    rows: row[];
};

type colors = {
    backgroundColor?: string;
    textColor?: string;
}

export type configType = {
    maxRows?: number;
    backgrondColor?: string;
    captionTextColor?: string;
    header?: colors,
    body?: {
        odd?: colors,
        even?: colors,
        hover?: colors,
    },
    footer?: {
        textColor?: string;
    },
};

interface IProps {
    caption: string;
    footer?: string;
    data: tableDataType;
    config?: configType;
}

export default IProps;