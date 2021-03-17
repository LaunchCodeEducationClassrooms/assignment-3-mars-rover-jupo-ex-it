class Rover {
    constructor(position) {
        this.position = position;
        this.mode = 'NORMAL';
        this.generatorWatts = 110
    }
    receiveMessage(message) {
        let results = [];

        for (const command of message.commands) {
            if (command.commandType === "MOVE") {
                if (this.mode === "LOW_POWER") {
                    result.push({ completed: false })
                } else {
                    this.position = command.value
                    results.push({ completed: true })
                };
            };
            if (command.commandType === "STATUS_CHECK") {
                results.push({ completed: true, roverStatus: this.mode, generatorWatts: this.generatorWatts, position: this.position })
            };
        }
        return { message: message.name, results }
    }
}

module.exports = Rover;