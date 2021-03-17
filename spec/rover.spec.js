const Rover = require('../rover.js');
const Message = require('../message.js');
const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.


describe("Rover class", function() {

    it("constructor sets position and default values for mode and generatorWatts", function() {
        let rover = new Rover(90210);
        expect(rover.position).toEqual(90210);
        expect(rover.mode).toEqual('NORMAL');
        expect(rover.generatorWatts).toEqual(110);
    });

    it("response returned by receiveMessage contains name of message", function() {
        let rover = new Rover(90210);
        let test = new Message("TEST", []);
        expect(rover.receiveMessage(test).message).toEqual(test.name)
    });

    it("response returned by receiveMessage includes two results if two commands are sent in the message", function() {
        let test = new Message("TEST", [new Command("STATUS_CHECK")], [new Command("STATUS_CHECK")]);
        let rover = new Rover(90210);
        expect(rover.receiveMessage(test).results.length).toEqual(test.commands.length)
    });

    it("responds correctly to status check command", function() {
        let test = new Message("TEST", [new Command("STATUS_CHECK")]);
        let rover = new Rover(90210);
        expect(rover.receiveMessage(test).toIncludeKey())
    });

    it("", function() { });

    it("", function() { });

    it("", function() { });

});
