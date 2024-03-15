import {reactive, readonly} from 'vue'
import { Genders, Countries, Positions, Type_contracts, Staff_tags } from './config';
import { EmployeeType, BaseType } from './types'

class Employees {
    employees: EmployeeType[];
    constructor() {
        this.employees = []
    };
    addEmployee(full_name: string, inn: string,  address: string,
                tagId: number, genderId: number, countryId: number, positionId: number,
                date_birth?: string) {

        let gender = Genders.get(genderId)
        let tag = 
        let employee: EmployeeType = {full_name: full_name, inn: inn, address: address, gender: Genders.get(genderId)!}

    };
    getTypeContactId() {

    };
    getGenderId() {

    };
    getCountryId() {

    };
    getPositionId() {

    };
}

function filterById(obj: Map<BaseType>, param: number): BaseType {
    return obj. .filter(item => item.id == param);
}

function addEmployee() {

}


export const store = reactive({
    idEmployee: 0,
    employees: new Employees(),
    Genders,
    Countries,
    Positions,
    Type_contracts,
    Staff_tags
})