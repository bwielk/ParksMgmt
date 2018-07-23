import TownManager from '../town_manager.js';
import Town from '../town.js';
import Street from '../street.js';
import Park from '../park.js';
import assert from 'assert';

describe("TownTest", () =>{

	let park1;
	let park2;
	let townManager;

	beforeEach(() =>{
		townManager = new TownManager(new Town("Stoke", "ST"), new Town("Burgh", "EH"));
		park1 = new Park("Victoria Park");
		park2 = new Park("Albert Park");
	});

	it("streets should be stored by towns managed by a town manager", () =>{
		townManager.addStreetToTown(new Street("Worcester Street", "EH321UH"), "Burgh");
		townManager.addStreetToTown(new Street("Manchester Street", "EH331UJ"), "Burgh");
		let result = townManager.queryATownByName("Burgh");
		assert.equal(2, result.streets.length);
	});

	it("parks should be stored by towns managed by a town manager", () =>{
		townManager.addParkToTown(park1, "Stoke");
		let result = townManager.queryATownByName("Stoke");
		console.log(result);
		assert.equal("Victoria Park", result.parks[0].parkName);
	})

})