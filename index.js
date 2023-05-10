
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
    return Math.abs(destination - start) * 264
} 

distanceTravelledInFeet(43, 48)
distanceTravelledInFeet(50, 60)
distanceTravelledInFeet(34, 28)

function calculatesFarePrice(start, destination) {
    if (Math.abs(destination - start) * 264 < 400) {
        return 0;
    } else if (Math.abs(destination - start) * 264 >= 400 && Math.abs(destination - start) * 264 < 2000) {
        return (Math.abs(destination - start) * 264 - 400) / 50;
    } else if (Math.abs(destination - start) * 264 > 2000 && Math.abs(destination - start) * 264 <= 2500) {
        return 25; 
    } else if (Math.abs(destination - start) * 264 > 2500) {
        return 'cannot travel that far';
    }
}
    

calculatesFarePrice(43, 44)
calculatesFarePrice(34, 32)
calculatesFarePrice(50, 58)
calculatesFarePrice(34, 24)



