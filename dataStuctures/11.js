function getDateDifference(earlier, later) {
    return (later - earlier) / (1000 * 3600 * 24);
    }
    var startDate = new Date('2017-01-01');
    var endDate = new Date('2017-01-07');
    var result = getDateDifference(startDate, endDate);
    
    console.log(result);