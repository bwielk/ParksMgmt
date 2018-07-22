class Tree{
	constructor(treeID, treeType){
		this.treeID = treeID;
		this.treeType = treeType.valueOf();
	}

	getTreeId(){
		return this.treeID;
	}

	getTreeType(){
		return this.treeType;
	}
}

export default Tree;