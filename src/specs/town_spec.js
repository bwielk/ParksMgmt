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

	it("park should be stored by towns managed by a town manager", () =>{
		townManager.addParkToTown("Stoke", park1);
		let result = townManager.queryATownByName("Stoke").getParkByName("Victoria Park");
		assert.equal("Victoria Park", result.parkName);
	})

})