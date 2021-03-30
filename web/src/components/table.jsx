import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


const useStyles = makeStyles({
  root: { width: '80%'},
  table: {
    minWidth: 650,
    height: '50px'
  },
});

export function BasicTable(props) {
  const classes = useStyles();


  const columns = (props) => {
    const data = props.data
    console.log(data)
    return (
      data.map((row) => (
        <TableRow key={row.employee_id}>
          <TableCell align="right">{row.employeeid}</TableCell>
          <TableCell align="right">{row.sleepavg}</TableCell>
          <TableCell align="right">{row.exerciseavg}</TableCell>
          <TableCell align="right">{row.socialavg}</TableCell>
          <TableCell align="right">{row.workavg}</TableCell>
        </TableRow>)))
  }

  const loading = () => {
    return (
      <div>Loading</div>
    )
  }

   const loadColumns = (props) => {
    if (props.data && props.data.length) {
      return columns(props)
    }
    else { return loading() }
  }


  return (

    <Table className={classes.root} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>Employee ID</TableCell>
          <TableCell align="right">Average Sleeping time</TableCell>
          <TableCell align="right">Average time exercising</TableCell>
          <TableCell align="right">Average social time</TableCell>
          <TableCell align="right">Average working time</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {loadColumns(props)}
      </TableBody>
    </Table>
  );
}