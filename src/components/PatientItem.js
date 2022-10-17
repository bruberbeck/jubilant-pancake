import React from "react";
import {
  Checkbox,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
} from "@material-ui/core";
import ClearIcon from "@material-ui/icons/Clear";

export function PatientItem({ patient, todoActions }) {
  return (
    <ListItem>
      <ListItemText>{patient.firstName + ' ' + patient.lastName }</ListItemText>
      <ListItemSecondaryAction>
        <IconButton
          edge="end"
          size="small"
          onClick={() => {
            todoActions.deleteTodo(todo);
          }}
        >
          <ClearIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
}
