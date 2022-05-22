import React from "react";
import { Button } from "@material-ui/core";

function Score({score}) {

return(
<div className="scorepage">
<h3>Your score: {score}</h3>
      <Button variant="contained" color="primary" href="/">Go to Home</Button>
</div>
);
}

export default Score;