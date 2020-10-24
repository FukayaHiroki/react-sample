import { Button, TableCell, TableRow } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Product = ({ id, title, description, price }) => {
  return (
    <>
      <StyledTableRow key={id}>
        <StyledTableCell align="center">
          <Link to={`/products/${id}`}>{title}</Link>
        </StyledTableCell>

        <StyledTableCell align="center">{description}</StyledTableCell>
        <StyledTableCell align="center">{price}</StyledTableCell>
        <StyledTableCell align="center">
          <Link to={`/products/image/${id}`}>
            <Button variant="contained" color="primary">
              画像編集
            </Button>
          </Link>
        </StyledTableCell>
      </StyledTableRow>
    </>
  );
};

// style
const StyledTableCell = styled(TableCell)`
    backgroundcolor: theme.palette.common.black,
    color: theme.palette.common.white,
  `;

const StyledTableRow = styled(TableRow)`
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  `;

export default Product;
