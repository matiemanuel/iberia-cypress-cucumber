class DateUtils {

    today(){
        return new Date();
    }

    addDaysToDate(currentDate, days){
        currentDate.setDate(currentDate.getDate()+days);
        return currentDate;
    }

    formatDateForCalendarLocator(desiredDate) {
      return ".actualDate-"+desiredDate.getDate()+"_"+(desiredDate.getMonth()+1)+"_"+desiredDate.getFullYear();
    }
  
  }
  
  module.exports = new DateUtils();