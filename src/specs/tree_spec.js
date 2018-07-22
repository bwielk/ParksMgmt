import assert from 'assert';
import Tree from '../tree.js';
import TreeType from '../treeType_enum.js';

describe("TreeTest", () =>{

	let tree1;
	let tree2;

	beforeEach(() =>{
		tree1 = new Tree("123ABC", TreeType.OAK, 123, 1982);
		tree2 = new Tree("345EDF", TreeType.BIRCH, 156, 1999);
	});

	it("should have id number", () => {
		assert.equal("123ABC", tree1.getTreeId());
		assert.equal("345EDF", tree2.getTreeId());
	});

	it("should have tree type", () => {
		assert.equal(TreeType.OAK, tree1.getTreeType());
		assert.equal(TreeType.BIRCH, tree2.getTreeType());
	});

	it("should have height", () => {
		assert.equal(123, tree1.getHeightInCentimeters());
		assert.equal(156, tree2.getHeightInCentimeters());
	});

	it("should have year of planting", () => {
		assert.equal(1982, tree1.getYearOfPlanting());
		assert.equal(1999, tree2.getYearOfPlanting());
	})
});


