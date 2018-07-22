class Street{
	constructor(streetName){
		this.streetName = streetName;
		this.trees = [];
	}

	getName(){
		return this.streetName;
	}

	getTrees(){
		return this.trees;
	}
}

export default Street;