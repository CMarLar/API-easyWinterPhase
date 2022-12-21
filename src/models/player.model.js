class Player
{
    constructor(house_id, campaign_id, player_name, winterPhaseDone,player_id=null)
    {
        this.player_id = player_id;
        this.house_id = house_id;
        this.campaign_id = campaign_id;
        this.player_name = player_name
        this.winterPhaseDone = winterPhaseDone;

    }
}

module.exports = {Player};