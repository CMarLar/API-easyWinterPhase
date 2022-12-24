class House
{
    constructor(house_name, activeChar, holding_name,familyCharacteristic,shield,house_id=null)
    {
        this.house_id = house_id;
        this.house_name = house_name;
        this.activeChar = activeChar;
        this.holding_name = holding_name;
        this.familyCharacteristic = familyCharacteristic;
        this.shield = shield;

    }
}

module.exports = {House};