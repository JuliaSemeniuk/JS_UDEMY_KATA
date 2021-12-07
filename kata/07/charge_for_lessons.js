function calculateCost(time) {
  const hour = 60;
  const costHour = 30;

  const halfHour = 30;
  const costHalfHour = 10;

  const grace = 5;

  const halfHourCounter = Math.floor((time - hour) / halfHour);
  const graceDetecter = time % halfHour;
  console.log("halfHourCounter:", halfHourCounter);
  console.log("graceDetecter:", graceDetecter);

  let totalCost = costHour + halfHourCounter * costHalfHour;
  console.log("total cost: ", totalCost);

  if (time > hour + grace) {
    if (graceDetecter > 5) {
      totalCost += costHalfHour;
      console.log("time: ", time, " cost: ", totalCost);
      return totalCost;
    }
    console.log("time: ", time, " cost: ", totalCost);
    return totalCost;
  }

  console.log("time: ", time, " cost: ", costHour);
  return costHour;
}

//calculateCost(55);

calculateCost(60 + 24); //40
