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
	
	beforeEach(() =>{
		townManager = new TownManager("Stoke", "Burgh");
		tree1 = new Tree("POL123", TreeType.WILLOW, 24, 2018);
		tree2 = new Tree("POL234", TreeType.OAK, 230, 2010);
		tree3 = new Tree("PIL455", TreeType.OAK, 234, 2011);
		tree4 = new Tree("PIJ234", TreeType.BEECH, 234, 2014);
	});

	it("should have a town name", () =>{
		let towns = townManager.getTownNames();
		assert.equal("Stoke", towns[0].getTownName());
		assert.equal("Burgh", towns[1].getTownName());
	});

	it("should be able to query a town", () =>{
		let resultTown = townManager.queryATownByName("Stoke");
		assert.equal("Stoke", resultTown.getTownName());
	})

	it("should be able to add streets to towns", () =>{
		street = new Street("Iona Street");
	})
})


