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
          <TableCell component="th" scope="row">
            {row.employee_id}
          </TableCell>
          <TableCell align="right">{row.employee_name}</TableCell>
          <TableCell align="right">{row.exercise_time}</TableCell>
          <TableCell align="right">{row.sleep_time}</TableCell>
          <TableCell align="right">{row.social_interaction_time}</TableCell>
          <TableCell align="right">{row.work_time}</TableCell>
          <TableCell align="right">{row.occupation}</TableCell>
          <TableCell align="right">{row.work_time}</TableCell>
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
          <TableCell align="right">Employee Name</TableCell>
          <TableCell align="right">Exercise time</TableCell>
          <TableCell align="right">Sleep</TableCell>
          <TableCell align="right">Social</TableCell>
          <TableCell align="right">work_time</TableCell>
          <TableCell align="right">Occupation</TableCell>
          <TableCell align="right">avg_work_time</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {loadColumns(props)}
      </TableBody>
    </Table>
  );
}