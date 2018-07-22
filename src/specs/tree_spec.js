var assert = require('assert');
import {Tree} from '../tree.js';

describe("TreeTest", () =>{

	var tree1;

	beforeEach("Setup", () =>{
		tree1 = new Tree("123ABC");
	}),

	it("should have id number", () => {
	assert.equal("123ABC", tree1.getTreeId());
	})
});


