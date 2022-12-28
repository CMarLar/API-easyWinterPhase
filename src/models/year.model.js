class Year{

    constructor(year_id,yearNumber,isFirstYear,isLastYear,notes){

        this.year_id = year_id;
        this.yearNumber = yearNumber;
        this.isFirstYear = isFirstYear;
        this.isLastYear = isLastYear;
        this.notes = notes;
    }
}

module.exports = {Year}