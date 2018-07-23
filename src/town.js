class Town{

	constructor(townName, postcode){
		this.townName = townName;
		this.postcode = postcode;
		this.parks = [];
		this.streets = [];
	}

	getTownName(){
		return this.townName;
	}

	getTownPostcode(){
		return this.postcode;
	}
}

export default Town;