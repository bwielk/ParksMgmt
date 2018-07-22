var assert = require('assert');
import Tree from '../tree.js';
import TreeType from '../treeType_enum.js';

describe("TreeTest", () =>{

	let tree1;
	let tree2;

	beforeEach(() =>{
		tree1 = new Tree("123ABC", TreeType.OAK);
		tree2 = new Tree("345EDF", TreeType.BIRCH);
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
	})
});


