class Rover {
    constructor(position) {
        this.position = position;
        this.mode = "NORMAL";
        this.generatorWatts = 110;
    }

    receiveMessage(message) {
        let response = {};
        response["message"] = message.name;
        response["results"] = [];


            for (let command of message.commands) {
                let commandObject = {};

                if (command.commandType === "STATUS_CHECK") {
                    commandObject["completed"] = true;
                    commandObject["roverStatus"] = {
                        mode: this.mode,
                        generatorWatts: this.generatorWatts,
                        position: this.position
                    };
                } else if (command.commandType === "MODE_CHANGE") {
                    this.mode = command.value;
                    commandObject["completed"] = true;
                } else if (command.commandType === "MOVE") {
                    if (this.mode === "NORMAL") {
                        this.position = command.value;
                        commandObject["completed"] = true;
                    }
                    commandObject["completed"] = false;
                }
                response["results"].push(commandObject);
            }
        

        return response;
    }
}

module.exports = Rover;