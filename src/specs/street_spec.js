import assert from 'assert';
import Street from '../street.js';
import Tree from '../tree.js';
import TreeType from '../treeType_enum.js';
import ParkManager from '../park_manager.js';

describe('StreetTest', () =>{

	let street1;
	let street2;
	let tree1;
	let tree2;
	let tree3;
	let tree4;

	beforeEach(() =>{
		street1 = new Street("Dickson Street");
		street2 = new Street("Montgomery Street");
		tree1 = new Tree("TREE1", TreeType.WILLOW, 199, 1998);
		tree2 = new Tree("TREE2", TreeType.OAK, 201, 2000);
		tree3 = new Tree("TREE3", TreeType.BEECH, 219, 2002);
		tree4 = new Tree("TREE4", TreeType.OAK, 220, 2003);
	});

	it("should have name", () =>{
		assert.equal("Dickson Street", street1.getName());
		assert.equal("Montgomery Street", street2.getName());
	})
})