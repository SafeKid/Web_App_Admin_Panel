import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { lighten, makeStyles, withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import DeleteIcon from '@material-ui/icons/Delete';
import FilterListIcon from '@material-ui/icons/FilterList';
import Search from "@material-ui/icons/Search";
import firebase from "../../config/firebase.js";
// core components
import CustomInput from "components/CustomInput/CustomInput.js";
import carfix from "assets/img/coverpage.jpg";
import  "views/Image.css"
import MaterialTable from 'material-table';

function createData(date, cname, pname, age, sno, phoneNo,user) {
  return { date, cname, pname, age, sno, phoneNo,user};
}

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

// const rows = [
//   createData('2020-02-01','Ameesha Siriwardhana', 'Ayesha Perera', 14,'S01', '0778974562','dfjdhfjdfhdj'),
//   createData('2020-03-09','Nayomi De Silva', 'Amaya Fonseka', 12,'S02', '0778596325','ghdfghdfghd'),
//   createData('2020-04-04','Disney Fernando', 'Akila Wijesinghe', 14,'S03', '0708945623','reryueyrueu'),
//   createData('2020-05-07','Nirmal Ayeshana', 'Ayoma Bandara', 15,'S04', '0718945623','wyteytryery'),
//   createData('2020-06-05','Anuj Samaranayake', 'Sidath Samaranayake', 13, 'S05','0758945623','yetryetyety'),
//   createData('2020-02-17','Thilan Awishka', 'Nayana Nishavi', 14,'S06', '0778496315','hdgfhghegrhe'),
//   createData('2020-07-09','Nirmal Ariyarathne', 'Nayani De Silva', 16,'S07', '0764512345','gerehrgrhegrh'),
//   createData('2020-02-05','Anne Perera', 'Monashi Perera', 12,'S08', '0775522359','grheghejehr')
// ];



function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  { id: 'date', numeric: false, disablePadding: true, label: 'Registered Date' },
  { id: 'cname', numeric: true, disablePadding: true, label: 'Child Name' },
  { id: 'pname', numeric: true, disablePadding: true, label: 'Parent Name' },
  { id: 'age', numeric: true, disablePadding: false, label: 'Child Age' },
  { id: 'sno', numeric: true, disablePadding: false, label: 'Serial Number' },
  { id: 'phoneNo', numeric: true, disablePadding: false, label: 'Parent Mobile' },
  { id: 'user', numeric: true, disablePadding: false, label: 'Email' },
];

function EnhancedTableHead(props) {
  const { classes, onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>     
      <TableRow>
    <TableCell padding="checkbox">
          <Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{ 'aria-label': 'select all desserts' }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'default'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            {/* <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            > */}
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </span>
              ) : null}
            {/* </TableSortLabel> */}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const useToolbarStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
  },
  highlight:
    theme.palette.type === 'light'
      ? {
          color: theme.palette.secondary.main,
          backgroundColor: lighten(theme.palette.secondary.light, 0.85),
        }
      : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.dark,
        },
  title: {
    flex: '1 1 100%',
  },
}));

const EnhancedTableToolbar = (props) => {
  const classes = useToolbarStyles();
  const { numSelected } = props;

  return (
    <Toolbar
      className={clsx(classes.root, {
        [classes.highlight]: numSelected > 0,
      })}
    >
      {numSelected > 0 ? (
        <Typography className={classes.title} color="inherit" variant="subtitle1" component="div">
          {numSelected} selected
        </Typography>
      ) : (
        <Typography className={classes.title} variant="h4" id="tableTitle" component="div">
          <b><br/>Device Registration</b>
        </Typography>
      )}

      {/* {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <IconButton aria-label="filter list">
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      )} */}
    </Toolbar>
    
  );
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  paper: {
    width: '95%',
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
}));

export default function EnhancedTable() {
  const classes = useStyles();
  
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [allRows, setAllRows] = React.useState([]);
  const [rows, setRows] = React.useState([]);
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  React.useEffect(() => { fetchData() }, []);

  function fetchData() {
    firebase.database().ref('Confirmations').on('value', (snapshot) => {
      let rows = [];
      setRows([]);
      setSelected([]);

      if(snapshot.exists()) {
        snapshot.forEach((confirmationData) => {
          let confirmation = confirmationData.val();
          confirmation.date = confirmationData.key;
          rows.push(confirmation);
          
          setRows([]);
          setRows(rows);
          setAllRows(rows);
        })
      }
    })
  }

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.date);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleConfirm = () => {
    const selectedRows = rows.filter((row) => selected.includes(row.date));
    
    selectedRows.forEach((row) => {
      const date = row.date;
      delete row.date;
      firebase.database().ref('Devices').child(date).set(row)
        .then(() => firebase.database().ref('Confirmations').child(date).remove()
        .then(()=>alert("Accepted")));
      
    })

  };
  
  const handleDelete = () =>{
    const selectedRows = rows.filter((row) => selected.includes(row.date));

    selectedRows.forEach((row) => {
      firebase.database().ref('Confirmations').child(row.date).remove()
      .then(()=>alert("Rejected"));
    })
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const searchData = (value) => {
    const filteredData = allRows.filter(row => {
      const searchTerm = `${row.cname} ${row.pname} ${row.age} ${row.sno} ${row.phoneNo} ${row.user}`;
      const searchValue = value.toUpperCase();
      return searchTerm.toUpperCase().indexOf(searchValue) > -1;
    })
    setRows(filteredData);
  }

  const isSelected = (date) => selected.indexOf(date) !== -1;

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  return (
    <div
    className="App"
    style={{
      backgroundImage: `url(${carfix})`
    }}>
    {/* <div className={classes.root}> */}
      <Paper className={classes.paper} id="Transparent">
        <EnhancedTableToolbar numSelected={selected.length} />
        <div className={classes.searchWrapper} id="Search">
        <CustomInput
          formControlProps={{
            className: classes.margin + " " + classes.search
          }}
          inputProps={{
            placeholder: "Search",
            onChange: (e) => searchData(e.target.value)
          }}
        />
        <Button color="white" aria-label="edit" justIcon round>
          <Search />
        </Button>
        </div>
        <br/>
        <TableContainer>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}
            aria-label="enhanced table"
          >
         
            <EnhancedTableHead
              classes={classes}
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.date);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <StyledTableRow
                      hover
                      onClick={(event) => handleClick(event, row.date)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.date}
                      selected={isItemSelected}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          checked={isItemSelected}
                          inputProps={{ 'aria-labelledby': labelId }}
                        />
                      </TableCell>
                      <TableCell component="th" id={labelId} scope="row" padding="none">
                        {row.date}
                      </TableCell>
                      <StyledTableCell align="right">{row.cname}</StyledTableCell>
                      <StyledTableCell align="right">{row.pname}</StyledTableCell>
                      <StyledTableCell align="right">{row.age}</StyledTableCell>
                      <StyledTableCell align="right">{row.sno}</StyledTableCell>
                      <StyledTableCell align="right">{row.phoneNo}</StyledTableCell>
                      <StyledTableCell align="right">{row.user}</StyledTableCell>
                       </StyledTableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height: (dense ? 33 : 43) * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer><br/>
        <div className="button">
        <Button variant="contained" color="secondary" onClick = {handleConfirm}>Confirm</Button></div>
       <div className="button"> <Button variant="contained" color="secondary" onClick = {handleDelete}>Delete</Button></div>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
      <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Dense padding"
      />
    {/* </div> */}
    </div>
  );
}

// import React from "react";
// // @material-ui/core components
// import { makeStyles } from "@material-ui/core/styles";
// import InputLabel from "@material-ui/core/InputLabel";
// // core components
// import GridItem from "components/Grid/GridItem.js";
// import GridContainer from "components/Grid/GridContainer.js";
// import CustomInput from "components/CustomInput/CustomInput.js";
// import Button from "components/CustomButtons/Button.js";
// import Card from "components/Card/Card.js";
// import CardHeader from "components/Card/CardHeader.js";
// import CardAvatar from "components/Card/CardAvatar.js";
// import CardBody from "components/Card/CardBody.js";
// import CardFooter from "components/Card/CardFooter.js";
// import carfix from "assets/img/baby.jpg";
// import  "views/Image.css"

// import avatar from "assets/img/faces/marc.jpg";
// import avatar1 from "assets/img/faces/face2.jpg";
// import avatar2 from "assets/img/faces/face3.jpg";
// import avatar3 from "assets/img/faces/man1.jpg";
// import avatar4 from "assets/img/faces/face5.jpg";
// import avatar5 from "assets/img/faces/man3.jpg";
// const styles = {
//   cardCategoryWhite: {
//     color: "rgba(255,255,255,.62)",
//     margin: "0",
//     fontSize: "14px",
//     marginTop: "0",
//     marginBottom: "0"
//   },
//   cardTitleWhite: {
//     color: "#FFFFFF",
//     marginTop: "0px",
//     minHeight: "auto",
//     fontWeight: "300",
//     fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
//     marginBottom: "3px",
//     textDecoration: "none"
//   }
// };

// const useStyles = makeStyles(styles);

// export default function UserProfile() {
//   const classes = useStyles();
//   return (
//     <div
//     className="App1"
//     style={{
//       backgroundImage: `url(${carfix})`
//     }}>
//     <div>
//       <span>
//       <GridContainer>
//         <GridItem xs={12} sm={6} md={3}>
//           <Card profile>
//             <CardAvatar profile>
//               <a href="#pablo" onClick={e => e.preventDefault()}>
//                 <img src={avatar} alt="..." />
//               </a>
//             </CardAvatar>
//             <CardBody profile>
//               <h4 className={classes.cardTitle}>Victor Fernando</h4>
//               <p className={classes.description}>
//                 Child Name: Nirmal Fernando<br/>
//                 Child Age: 15 <br/>
//                 Child Gender: Male<br/>
//                 Parent Mobile: 0778945612
//               </p>
//               <Button color="primary" round >
//                 Confirm
//               </Button> 
//               <Button color="primary" round>
//                 Delete
//               </Button>
//             </CardBody>
//           </Card>
//         </GridItem>
 
//         <GridItem xs={12} sm={6} md={3}>
//           <Card profile>
//             <CardAvatar profile>
//               <a href="#pablo" onClick={e => e.preventDefault()}>
//                 <img src={avatar1} alt="..." />
//               </a>
//             </CardAvatar>
//             <CardBody profile>
//               <h4 className={classes.cardTitle}>Victor Fernando</h4>
//               <p className={classes.description}>
//                 Child Name: Nirmal Fernando<br/>
//                 Child Age: 15 <br/>
//                 Child Gender: Male<br/>
//                 Parent Mobile: 0778945612
//               </p>
//               <Button color="primary" round >
//                 Confirm
//               </Button> 
//               <Button color="primary" round>
//                 Delete
//               </Button>
//             </CardBody>
//           </Card>
//         </GridItem>

//         <GridItem xs={12} sm={6} md={3}>
//           <Card profile>
//             <CardAvatar profile>
//               <a href="#pablo" onClick={e => e.preventDefault()}>
//                 <img src={avatar2} alt="..." />
//               </a>
//             </CardAvatar>
//             <CardBody profile>
//               <h4 className={classes.cardTitle}>Victor Fernando</h4>
//               <p className={classes.description}>
//                 Child Name: Nirmal Fernando<br/>
//                 Child Age: 15 <br/>
//                 Child Gender: Male<br/>
//                 Parent Mobile: 0778945612
//               </p>
//               <Button color="primary" round >
//                 Confirm
//               </Button> 
//               <Button color="primary" round>
//                 Delete
//               </Button>
//             </CardBody>
//           </Card>
//         </GridItem>

//         <GridItem xs={12} sm={12} md={3}>
//           <Card profile>
//             <CardAvatar profile>
//               <a href="#pablo" onClick={e => e.preventDefault()}>
//                 <img src={avatar3} alt="..." />
//               </a>
//             </CardAvatar>
//             <CardBody profile>
//               <h4 className={classes.cardTitle}>Victor Fernando</h4>
//               <p className={classes.description}>
//                 Child Name: Nirmal Fernando<br/>
//                 Child Age: 15 <br/>
//                 Child Gender: Male<br/>
//                 Parent Mobile: 0778945612
//               </p>
//               <Button color="primary" round >
//                 Confirm
//               </Button> 
//               <Button color="primary" round>
//                 Delete
//               </Button>
//             </CardBody>
//           </Card>
//         </GridItem>
//       </GridContainer>
//       <GridContainer>
        
//       <GridItem xs={12} sm={12} md={3}>
//           <Card profile>
//             <CardAvatar profile>
//               <a href="#pablo" onClick={e => e.preventDefault()}>
//                 <img src={avatar4} alt="..." />
//               </a>
//             </CardAvatar>
//             <CardBody profile>
//               <h4 className={classes.cardTitle}>Victor Fernando</h4>
//               <p className={classes.description}>
//                 Child Name: Nirmal Fernando<br/>
//                 Child Age: 15 <br/>
//                 Child Gender: Male<br/>
//                 Parent Mobile: 0778945612
//               </p>
//               <Button color="primary" round >
//                 Confirm
//               </Button> 
//               <Button color="primary" round>
//                 Delete
//               </Button>
//             </CardBody>
//           </Card>
//         </GridItem>
        
//         <GridItem xs={12} sm={12} md={3}>
//           <Card profile>
//             <CardAvatar profile>
//               <a href="#pablo" onClick={e => e.preventDefault()}>
//                 <img src={avatar5} alt="..." />
//               </a>
//             </CardAvatar>
//             <CardBody profile>
//               <h4 className={classes.cardTitle}>Victor Fernando</h4>
//               <p className={classes.description}>
//                 Child Name: Nirmal Fernando<br/>
//                 Child Age: 15 <br/>
//                 Child Gender: Male<br/>
//                 Parent Mobile: 0778945612
//               </p>
//               <Button color="primary" round >
//                 Confirm
//               </Button> 
//               <Button color="primary" round>
//                 Delete
//               </Button>
//             </CardBody>
//           </Card>
//         </GridItem>
//         </GridContainer>
//       </span>
//     </div>
//     </div>
//   );
// }

