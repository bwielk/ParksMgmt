import Town from './town.js';

class TownManager{

	constructor(...townsToManage){
		this.townsToManage = [];
		townsToManage.forEach(currentTown => this.townsToManage.push(new Town(currentTown)));
	}

	getTownNames(){
		return this.townsToManage;
	}

	queryATownByName(townToQuery){
		for(const town of this.townsToManage){
			console.log(town);
			if(town.townName === townToQuery){
				return town;
			}
		}
		return null;
	}

	// addTreeToAPark(park, tree, parkLane, sector){

	// }
}

export default TownManager;
