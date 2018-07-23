import Town from './town.js';
import Park from './park.js';
import Street from './street.js';

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

	queryAParkByName(nameOfaParkToQuery){
		for(const town of this.townsToManage){
			for(const park of town.parks){
				if(park.parkName === nameOfaParkToQuery){
					return park;
				}
			}
		}
		return null;
	}

	queryAStreetByName(nameOfAStreetToQuery){
		for(const town of this.townsToManage){
			for(const street of town.streets){
				if(street.streetName === nameOfAStreetToQuery){
					return street;
				}
			}
		}
		return null;
	}

	addTown(townToAdd){
		if(!(townToAdd instanceof Town)){
			return;
		};
		let townFoundByPostcode = this.queryATownByPostcode(townToAdd.getTownPostcode());
		let townFoundByName = this.queryATownByName(townToAdd.getTownName());
		if(!townFoundByName && !townFoundByPostcode){
			this.townsToManage.push(townToAdd);
		};
	}

	addParkToTown(parkToAdd, nameOfaTownAcceptingANewPark){
		if(!(parkToAdd instanceof Park)){
			return;
		}
		let town = this.queryATownByName(nameOfaTownAcceptingANewPark);
		if(!this.queryAParkByName(parkToAdd.parkName)){
			town.parks.push(parkToAdd);
		}
	}

	addStreetToTown(streetToAdd, nameOfATownAcceptingANewStreet){
		if(!(streetToAdd instanceof Street)){
			return;
		}
		let town = this.queryATownByName(nameOfATownAcceptingANewStreet);
		if(!this.queryAStreetByName(streetToAdd.streetName)){
			town.streets.push(streetToAdd);
		}
	}
}


export default TownManager;
