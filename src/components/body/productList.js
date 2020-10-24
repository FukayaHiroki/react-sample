import Container from '@material-ui/core/Container';
import Fab from '@material-ui/core/Fab';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import AddIcon from '@material-ui/icons/Add';
import lodash from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { readProducts } from '../../actions';
import '../../App.css';
import Product from './product';

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.checkError();
    this.props.readProducts();
  }

  checkError() {
    const { status } = this.props.productList;
    if (status) {
      this.props.history.push('/error/' + status);
    }
  }

  renderProducts() {
    return lodash.map(this.props.productList, product => (
      <Product
        key={product.id}
        id={product.id}
        title={product.title}
        description={product.description}
        price={product.price}
        imagePath={product.imagePath}
      />
    ));
  }

  render() {
    const StyledTableCell = withStyles(theme => ({
      head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
      },
      body: {
        fontSize: 14,
      },
    }))(TableCell);

    let result;

    if (Object.keys(this.props.productList).length === 0) {
      result = <h1>検索結果は、0件です</h1>;
    } else {
      result = (
        <Table>
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">
                商品名(詳細ページリンク)
              </StyledTableCell>
              <StyledTableCell align="center">説明</StyledTableCell>
              <StyledTableCell align="center">価格</StyledTableCell>
              <StyledTableCell align="center">画像</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>{this.renderProducts()}</TableBody>
        </Table>
      );
    }

    return (
      <Container>
        {result}
        <Fab>
          <Link to="/products/new">
            <AddIcon />
          </Link>
        </Fab>
      </Container>
    );
  }
}

const mapStateToProps = state => ({ productList: state.products });

const mapDispatchToProps = { readProducts };

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
