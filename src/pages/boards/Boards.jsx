import React, { useState } from 'react';
import styled from '@emotion/styled';
import { columnsFromBackend  } from './KanbanData';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import TaskCard from './TaskCard';
import Add from '../../components/AddCardmodel/Add';

const Container = styled.div`
display: flex;
color:"transperent";
margin-top:1.3%;
`;

const TaskList = styled.div`
 
  min-height: 100px;
  display: flex;
  
  flex-direction: column;
  background: transperent;
  min-width: 351px;
  border-radius: 5px;
  color:"green"
  padding: 15px ;
  margin-left:5%
`;

const TaskColumnStyles = styled.div`
  margin: 8px;
  display: flex;
  width: 100%;
  min-height: 80vh;
  color:"black"
  background: rgba(0,0,0,0.59);
`;

const Title = styled.span`
  color: #White;
 margin-left:34%;
  padding: 2px 10px;
  border-radius: 5px;
 
  align-self: flex-start;
  
`;

const Board= () => {
  const [modalOpened,setModalOpened] = useState(false)
  const [columns, setColumns] = useState(columnsFromBackend);


  const onDragEnd = (result, columns, setColumns) => {
    if (!result.destination) return;
    const { source, destination } = result;
    if (source.droppableId !== destination.droppableId) {
      const sourceColumn = columns[source.droppableId];
      const destColumn = columns[destination.droppableId];
      const sourceItems = [...sourceColumn.items];
      const destItems = [...destColumn.items];
      const [removed] = sourceItems.splice(source.index, 1);
      destItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...sourceColumn,
          items: sourceItems,
        },
        [destination.droppableId]: {
          ...destColumn,
          items: destItems,
        },
      });
    } else {
      const column = columns[source.droppableId];
      const copiedItems = [...column.items];
      const [removed] = copiedItems.splice(source.index, 1);
      copiedItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...column,
          items: copiedItems,
        },
      });
    }
  };
  return (
    <DragDropContext
      onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
    >
      <Container >
        <TaskColumnStyles >
          {Object.entries(columns).map(([columnId, column], index) => {
            return (
              <Droppable key={columnId} droppableId={columnId}>
                {(provided, snapshot) => (
                  <TaskList
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                  >
                    
                    <div>
                    <Title>{column.title}</Title>
                   
                    <Add    visible={modalOpened} onClose={()=>setModalOpened(false)}/>
                    </div>
                    
                    {column.items.map((item, index) => (
                      <TaskCard key={item} item={item} index={index} />
                    ))}
                    {provided.placeholder}
                  </TaskList>
                )}
              </Droppable>
            );
          })}
        </TaskColumnStyles>
      </Container>
    </DragDropContext>
  );
};

export default Board;
