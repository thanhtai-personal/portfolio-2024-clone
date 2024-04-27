import { TimeInput, TimeInputProps } from "@mantine/dates";
import { IStringSchemaProperty } from "@ttt/json-schema";
import { ControlProps, useFormError } from "@ttt-ui/react-hooks-form";
import { forwardRef } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { getControlProps } from "../getControlProps";

export interface TimeControlProps
  extends ControlProps<IStringSchemaProperty, TimeInputProps> {}

export const TimeControl = forwardRef<HTMLInputElement, TimeControlProps>(
  (props: TimeControlProps, ref) => {
    const { control, formState } = useFormContext();
    const getError = useFormError(formState);

    return (
      <Controller
        control={control}
        name={props.name!}
        render={({ field }) => (
          <TimeInput
            {...getControlProps(props, true)}
            {...field}
            ref={ref}
            error={props.name && getError(props.name)}
          />
        )}
      />
    );
  },
);
