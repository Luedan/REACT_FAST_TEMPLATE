import { DataGridProps } from "@mui/x-data-grid";
import { BoxUI } from "../../atoms/box/box";
import { TableUI } from "../../atoms/table/table";
import { BoxProps } from "@mui/material";
import { forwardRef } from "react";
import { CustomToolbarUI } from "../customToolbar/customToolbar";

type TableUIProps = {
  tableProps: DataGridProps;
  boxProps?: BoxProps;
  showToolbar?: boolean;
};
export const TableProUI = forwardRef<HTMLDivElement, TableUIProps>(
  ({ tableProps, boxProps, showToolbar = false }, ref) => {
    return (
      <BoxUI {...boxProps} ref={ref}>
        <TableUI
          {...tableProps}
          slots={{
            ...tableProps.slots,
            ...(showToolbar ? { toolbar: CustomToolbarUI } : {}),
          }}
        />
      </BoxUI>
    );
  }
);
