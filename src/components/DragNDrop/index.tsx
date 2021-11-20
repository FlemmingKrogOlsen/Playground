import { FC, useState, useRef, ReactElement } from "react";
import { Container, Group, Title, Item } from "./styled";
import { IProps, Drag, Params, ItemData } from "./types";

const DragNDrop: FC<IProps> = ({
  list,
  onListChange,
  groupWidth,
}): ReactElement => {
  const [dragging, setDragging] = useState<boolean>(false);

  const dragItem = useRef<any>(undefined as any);
  const dragNode = useRef<any>(undefined as any);

  const handleDragStart = (e: Drag, params: Params) => {
    dragItem.current = params;
    dragNode.current = e.target;
    dragNode.current.addEventListener("dragend", handleDragEnd);
    setTimeout(() => {
      setDragging(true);
    }, 0);
  };

  const handleDragEnter = (e: Drag, params: Params) => {
    const currentItem: Params = dragItem.current;
    if (e.target !== dragNode.current) {
      onListChange((oldList) => {
        let newList: Array<ItemData> = JSON.parse(JSON.stringify(oldList));
        newList[params.grpI].items.splice(
          params.itemI,
          0,
          newList[currentItem.grpI].items.splice(currentItem.itemI, 1)[0]
        );
        dragItem.current = params;
        return newList;
      });
    }
  };

  const handleDragEnd = () => {
    dragNode.current.removeEventListener("dragend", handleDragEnd);
    dragItem.current = null;
    dragNode.current = null;
    setDragging(false);
  };

  const getStyles = (params: Params) => {
    const currentItem: Params = dragItem.current;
    return (
      currentItem.grpI === params.grpI && currentItem.itemI === params.itemI
    );
  };

  return (
    <Container count={list.length} groupWidth={groupWidth}>
      {list.map((grp, grpI) => {
        return (
          <Group
            key={grp.id}
            onDragEnter={
              dragging && !grp.items.length
                ? (e) => handleDragEnter(e, { grpI, itemI: 0 })
                : undefined
            }
          >
            <Title>{grp.title}</Title>
            {grp.items.map((item, itemI) => {
              return (
                <Item
                  onDragStart={(e) => {
                    handleDragStart(e, { grpI, itemI });
                  }}
                  onDragEnter={
                    dragging
                      ? (e) => {
                          handleDragEnter(e, { grpI, itemI });
                        }
                      : undefined
                  }
                  draggable={true}
                  isDrag={dragging ? getStyles({ grpI, itemI }) : false}
                  key={item.itemId}
                >
                  <div>
                    <p dangerouslySetInnerHTML={{ __html: item.itemContent }} />
                  </div>
                </Item>
              );
            })}
          </Group>
        );
      })}
    </Container>
  );
};

export default DragNDrop;
