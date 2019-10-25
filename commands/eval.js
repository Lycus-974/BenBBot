exports.run = async (client,message,args) => {

    function clean(text) {
        if (typeof text === "string") 
          return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
        return text;
    }

    if (message.author.id !== "136546902408691712") return undefined; //sécurise la commande, en vérifiant que ça soit bien moi qui l'execute
    const code = args.join (" ");
    const evaled = eval(code);
    const cleanCode = await clean(evaled);
    message.channel.send(cleanCode, { code : "js" });
};

exports.help = {
  name: "eval"
};