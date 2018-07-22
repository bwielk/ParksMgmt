import Town from './town.js';

class TownManager{

	constructor(...townsToManageList){
		this.townsToManage = [];
		townsToManageList.forEach(currentTown => this.townsToManage.push(currentTown));
	}

	getTowns(){
		return this.townsToManage;
	}

	queryATownByName(townToQuery){
		for(const town of this.townsToManage){
			if(town.getTownName() === townToQuery){
				return town;
			}
		}
		return null;
	}

	queryATownByPostcode(postcodeOfATownToQuery){
		for(const town of this.townsToManage){
			if(town.getTownPostcode() === postcodeOfATownToQuery){
				return town;
			}
		}
		return null;
	}

	addTown(townToAdd){
		let townFoundByPostcode = this.queryATownByPostcode(townToAdd.getTownPostcode());
		let townFoundByName = this.queryATownByName(townToAdd.getTownName());
		if(!townFoundByName && !townFoundByPostcode){
			this.townsToManage.push(townToAdd);
		}
	}
}

export default TownManager;
