
function distanceFromHqInBlocks(pickUpLocation) {
    if (pickUpLocation >= 42) {
        return pickUpLocation - 42;
    } else if (pickUpLocation < 42) {
        return (pickUpLocation - 42) * -1;
    }
}

distanceFromHqInBlocks(43)
distanceFromHqInBlocks(50)
distanceFromHqInBlocks(34)


function distanceFromHqInFeet(pickUpLocation) {
  return distanceFromHqInBlocks(pickUpLocation) * 264; 
}

distanceFromHqInFeet(43)
distanceFromHqInFeet(50)
distanceFromHqInFeet(34)

function distanceTravelledInFeet(start, destination) {
    if (start > destination) {
        return (destination - start) * -264; 
    } else if (destination > start) {
        return (destination - start) * 264;
    }
} 

distanceTravelledInFeet(43, 48)
distanceTravelledInFeet(50, 60)
distanceTravelledInFeet(34, 28)

function calculatesFarePrice(start, destination) {
    if ((start - destination) * -264 < 400 || (destination - start) * 264 < 400) {
        return 0;
    } else if (start > destination && (start - destination) * 264 >= 400 && (start - destination) * 264 <= 2000) {
        return (((start - destination) * 264) - 400) / 50;
    } else if (destination > start && (destination - start) * 264 >= 400 && (destination - start) * 264 <= 2000) {
        return (((destination - start) * 264) - 400) / 50;
    } else if ((start - destination) * -264 > 2000 && (start - destination) * -264 <= 2500) { 
        return 25;
    } else if ((destination - start) * 264 > 2000 && (destination - start) * 264 <= 2500)  {
        return 25;
    } else if (destination > start && (destination - start) * 264 > 2500) {
        return 'cannot travel that far';
    } else if (start > destination && (start - destination) * 264 > 2500) {
        return 'cannot travel that far';
    }
}

calculatesFarePrice(43, 44)
calculatesFarePrice(34, 32)
calculatesFarePrice(50, 58)
calculatesFarePrice(34, 24)