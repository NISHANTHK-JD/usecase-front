import Table from "react-bootstrap/Table";

function ViewLoans() {

  const viewloan = [
      {
        loanId: 1,
        loanType: "eduaction",
        loanAmount: "200000",
        date: "10-05-2002",
        rateOfInterest: 5,
        durationOfLoan: 2,
        userid: 1,
      }, 
      {
        loanId: 2,
        loanType: "homeloan",
        loanAmount: "4000000",
        date: "10-05-2002",
        rateOfInterest: 5,
        durationOfLoan: 2,
        userid: 1,

      },
      {
            loanId: 3,
            loanType: "carloan",
            loanAmount: "500000",
            date: "03-07-2003",
            rateOfInterest: 4,
            durationOfLoan: 3,
            userid: 1,
    
      }
    ];

  return (
    <div className="">
    <h1>Loans</h1>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>loanId</th>
          <th>loanType</th>
          <th>loanAmount</th>
          <th>date</th>
          <th>rateOfInterest</th>
          <th>durationOfLoan</th>
          <th>userid</th>
        </tr>
      </thead>
      <tbody>
        {
            viewloan.map( row => (
                <tr key={row.loanId}>
                    <td>{row.loanId}</td>
                    <td>{row.loanType}</td>
                    <td>{row.loanAmount}</td>
                    <td>{row.date}</td>
                    <td>{row.rateOfInterest}</td>
                    <td>{row.durationOfLoan}</td>
                    <td>{row.userid}</td>
                </tr>
            ))
        }
      </tbody>
    </Table>
    </div>
  );
}


export default ViewLoans;
