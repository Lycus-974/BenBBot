const mongoose = require("mongoose");
const { Guild } = require("../model/index.js");

module.exports = client => {
    client.createGuild = async guild => {
        const merged = Object.assign({ _id: mongoose.Types.ObjectId() }, guild);
        const createGuild = await new Guild(merged);
        
        createGuild.save().then(g => console.log(`New guild -> ${g.guildName}`));
    };
    
    client.getGuild = async guild => {
        const data = await Guild.findOne({ guildID: guild.id });
        if (data) return data;
        return client.DEFAULTSETTINGS;  //ligne à verifier car pose pb lorsque la guilde n'est pas connus dans la bdd
    };

    client.updateGuild = async (guild, settings) => {
        let data = await client.getGuild(guild);
        if (typeof data !== "object") data = {};
        for (const key in settings) {
            if (data[key] !== settings[key]) data[key] = settings[key];
        }
        return data.updateOne(settings);
    };
};

