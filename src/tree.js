class Tree{
	constructor(treeID, treeType, heightInCentimeters, yearOfPlanting){
		this.treeID = treeID;
		this.treeType = treeType.valueOf();
		this.heightInCentimeters = heightInCentimeters;
		this.yearOfPlanting = yearOfPlanting;
	}

	getTreeId(){
		return this.treeID;
	}

	getTreeType(){
		return this.treeType;
	}

	getHeightInCentimeters(){
		return this.heightInCentimeters;
	}

	getYearOfPlanting(){
		return this.yearOfPlanting;
	}
}

export default Tree;