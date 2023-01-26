import React, { useState } from 'react'
import {
  TableHead,
  TableRow,
  Table as MUiTable,
  TableBody,
  TableCell,
  TableContainer,
} from '@mui/material';
import { useStyles } from './StylesTable';
import Pagination from '@mui/material/Pagination';



export const Table = ({ headers, options }) => {
  const classes = useStyles();
  const [page, setpage] = useState(1)
  const handleChangePage = (event, newPage) => setpage(newPage);


  const handleTableCells = (row) => {
    const createOptions = [];

    headers.map((itemHead) => {
      Object.keys(row).map((itemRow) => {
        if (itemRow === itemHead.key) {
          const newObj = { content: row[itemRow], key: itemHead.key };

          createOptions.push(newObj);

          return createOptions;
        }

        return createOptions;
      });

      return createOptions;
    });

    const optionsTable = createOptions.map((op) => {
      const { content } = op;

      return (
        <TableCell
          padding="none"
          style={{ padding: '16px' }}
          key={`${content}`}
          align="center"
          className={classes.contetTable}
        >
          {content}
        </TableCell>
      );
    });

    return optionsTable;
  };


  return (
    <div >
      <TableContainer>
        <MUiTable aria-label="table">
          <TableHead>
            <TableRow className={classes.headersTable}>
              {headers.map((column) => (
                <TableCell key={column.label} align="center">
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {options?.length !== 0 && options.slice((page - 1) * 10,
              (page - 1) * 10 + 10).map((row, index) =>
                <TableRow
                  hover
                  tabIndex={-1}
                  key={`rowOptions${index * 10}`}
                  className={classes.contetTable}
                >
                  {handleTableCells(row)}
                </TableRow>)}
          </TableBody>
        </MUiTable>
      </TableContainer>
      <Pagination
        count={Math.ceil(options.length / 10)}
        shape="rounded"
        onChange={handleChangePage}
        page={page}
        className={classes.pagination}
      />
    </div>
  )
}
