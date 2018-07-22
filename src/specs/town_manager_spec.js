import assert from 'assert';
import TownManager from '../town_manager.js';
import Tree from '../tree.js';
import Street from '../street.js';
import TreeType from '../treeType_enum.js';
import Town from '../town.js';

describe("TownManagerTest", () =>{

	let townManager;
	let tree1;
	let tree2;
	let tree3;
	let tree4;
	let street;
	let townToAdd;
	
	beforeEach(() =>{
		townManager = new TownManager(new Town("Stoke", "ST21ER"), new Town("Burgh", "EH120AC"));
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
		let resultTown = townManager.queryATownByPostcode("EH120AC");
		assert.equal("Burgh", resultTown.getTownName());
	});

	it("should be able to query a town Stoke by postcode", () =>{
		let resultTown = townManager.queryATownByPostcode("ST21ER");
		assert.equal("Stoke", resultTown.getTownName());
	});

	it("should return null if no town found having entered a wrong postcode", () =>{
		let resultTown = townManager.queryATownByPostcode("EH66SF");
		assert.equal(null, resultTown);
	});

	it("should be able to add more towns to an existing list", () =>{
		townToAdd = new Town("Hugney", "EH39EH");
		townManager.addTown(townToAdd);
		townToAdd = new Town("Partchew", "PA224LP");
		townManager.addTown(townToAdd);
		assert.equal(4, townManager.getTowns().length);
	});
})


