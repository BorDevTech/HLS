import * as CUR from "@chakra-ui/react";
import * as CUI from "@chakra-ui/icons";
import { useRef } from "react";

function EditableInputControls() {
  const inputRef = useRef<HTMLInputElement>(null);

  function EditableControls() {
    const {
      isEditing,
      getSubmitButtonProps,
      getCancelButtonProps,
      getEditButtonProps,
    } = CUR.useEditableControls();

    return isEditing ? (
      <CUR.ButtonGroup justifyContent="center" size="sm">
        <CUR.IconButton
          aria-label="Submit"
          icon={<CUI.CheckIcon />}
          {...getSubmitButtonProps()}
        />
        <CUR.IconButton
          aria-label="Cancel"
          icon={<CUI.CloseIcon />}
          {...getCancelButtonProps()}
        />
      </CUR.ButtonGroup>
    ) : (
      <CUR.Flex justifyContent="center">
        <CUR.IconButton
          aria-label="Edit"
          icon={<CUI.EditIcon />}
          {...getEditButtonProps()}
        />
      </CUR.Flex>
    );
  }
  return EditableControls();
}
export default EditableInputControls;
