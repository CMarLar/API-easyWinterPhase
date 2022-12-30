class Year{

    constructor(year_id,yearNumber,isFirstYear,isLastYear,notes,campaign_id){

        this.year_id = year_id;
        this.yearNumber = yearNumber;
        this.isFirstYear = isFirstYear;
        this.isLastYear = isLastYear;
        this.notes = notes;
        this.campaign_id = campaign_id;
    }
}

module.exports = {Year}