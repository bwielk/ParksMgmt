class Town{
	
	constructor(townName, postcode){
		this.townName = townName;
		this.postcode = postcode;
	}

	getTownName(){
		return this.townName;
	}

	getTownPostcode(){
		return this.postcode;
	}
}

export default Town;