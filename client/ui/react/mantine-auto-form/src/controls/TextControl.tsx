import { TextInput, TextInputProps } from "@mantine/core";
import { IStringSchemaProperty } from "@ttt/json-schema";
import { ControlProps, useFormError } from "@ttt-ui/react-hooks-form";
import { ReactNode } from "react";
import { useFormContext } from "react-hook-form";
import { getControlProps } from "../getControlProps";

export interface TextControlProps
  extends ControlProps<IStringSchemaProperty, TextInputProps> {}

export const TextControl = (props: TextControlProps): ReactNode => {
  const { register, formState } = useFormContext();
  const getError = useFormError(formState);
  return (
    <TextInput
      {...getControlProps(props, true)}
      {...register(props.name!)}
      error={props.name && getError(props.name)}
    />
  );
};
