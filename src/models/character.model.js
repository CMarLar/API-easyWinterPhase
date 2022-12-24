class Character
{
    constructor(house_id, year_id, char_name, age, char_status, isMarried, marriageGlory, courtesyMod, role,character_id=null)
    {
        this.character_id = character_id;
        this.house_id = house_id;
        this.year_id = year_id;
        this.char_name = char_name
        this.age = age;
        this.char_status = char_status;
        this.isMarried = isMarried;
        this.marriageGlory = marriageGlory;
        this.courtesyMod = courtesyMod
        this.role = role;
    }
}

module.exports = {Character};