import { Flex, FlexProps, Text } from "@mantine/core";
import { ControlProps, controlRenderer } from "@ttt-ui/react-hooks-form";
import { IArraySchemaProperty, ISchemaProperty } from "@ttt/json-schema";
import { ReactNode, forwardRef } from "react";
import { getControlProps } from "../getControlProps";

export interface ArrayControlProps
  extends ControlProps<IArraySchemaProperty, FlexProps> {}

export const ArrayControl = forwardRef<HTMLDivElement, ArrayControlProps>(
  (props: ArrayControlProps, ref): ReactNode => {
    const { title, description, name } = getControlProps(props);
    const {
      schema: { items },
    } = props;
    return (
      <Flex ref={ref} {...props}>
        <Text>{title}</Text>
        <Text>{description}</Text>
        {Object.keys(
          items as unknown as Record<string, ISchemaProperty<any>>,
        ).map((key) => {
          const propertyProps = items[key];
          return controlRenderer({
            key,
            ...propertyProps,
            name: `${name}.${key}`,
          });
        })}
      </Flex>
    );
  },
);
