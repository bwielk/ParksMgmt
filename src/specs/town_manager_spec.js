import assert from 'assert';
import TownManager from '../town_manager.js';
import Tree from '../tree.js';
import Street from '../street.js';
import TreeType from '../treeType_enum.js';
import Town from '../town.js';
import Park from '../park.js';

describe("TownManagerTest", () =>{

	let townManager;
	let tree1;
	let tree2;
	let tree3;
	let tree4;
	let street;
	let townToAdd;
	
	beforeEach(() =>{
		townManager = new TownManager(new Town("Stoke", "ST"), new Town("Burgh", "EH"));
		tree1 = new Tree("POL123", TreeType.WILLOW, 24, 2018);
		tree2 = new Tree("POL234", TreeType.OAK, 230, 2010);
		tree3 = new Tree("PIL455", TreeType.OAK, 234, 2011);
		tree4 = new Tree("PIJ234", TreeType.BEECH, 234, 2014);
	});

	it("should have a town name", () =>{
		let towns = townManager.getTowns();
		assert.equal("Stoke", towns[0].getTownName());
		assert.equal("Burgh", towns[1].getTownName());
	});

	it("should be able to query a town Stoke", () =>{
		let resultTown = townManager.queryATownByName("Stoke");
		assert.equal("Stoke", resultTown.getTownName());
	});

	it("should be able to query a town Burgh", () =>{
		let resultTown = townManager.queryATownByName("Burgh");
		assert.equal("Burgh", resultTown.getTownName());
	});

	it("should return null if no town found having entered a wrong name", () =>{
		let resultTown = townManager.queryATownByName("Edinburgh");
		assert.equal(null, resultTown);
	});

	it("should be able to query a town Burgh by postcode", () =>{
		let resultTown = townManager.queryATownByPostcode("EH");
		assert.equal("Burgh", resultTown.getTownName());
	});

	it("should be able to query a town Stoke by postcode", () =>{
		let resultTown = townManager.queryATownByPostcode("ST");
		assert.equal("Stoke", resultTown.getTownName());
	});

	it("should return null if no town found having entered a wrong postcode", () =>{
		let resultTown = townManager.queryATownByPostcode("EK");
		assert.equal(null, resultTown);
	});

	it("should be able to add more towns to an existing list", () =>{
		townToAdd = new Town("Hugney", "HU");
		townManager.addTown(townToAdd);
		townToAdd = new Town("Partchew", "PA");
		townManager.addTown(townToAdd);
		assert.equal(4, townManager.getTowns().length);
	});

	it("should only add object of type Town when adding a new town", () =>{
		townManager.addTown("FakeTown");
		townManager.addTown(tree1, tree2, tree3, tree4);
		townManager.addTown(2344);
		assert.equal(2, townManager.getTowns().length);
	});

	it("should be able to query a park by its name", () =>{
		let townStoke = townManager.queryATownByName("Stoke");
		townStoke.parks.push(new Park("Blaise's Park"));
		townStoke.parks.push(new Park("John's Park"));
		assert.equal(2, townStoke.parks.length);
		let queriedPark = townManager.queryAParkByName("Blaise's Park");
		assert.equal("Blaise's Park", queriedPark.parkName);
	});

	it("should return null if there is no park", () =>{
		townManager.queryATownByName("Burgh").parks.push(new Park("Tom's Park"));
		let queriedPark = townManager.queryAParkByName("Thomas' Park");
		assert.equal(null, queriedPark);
	})
})