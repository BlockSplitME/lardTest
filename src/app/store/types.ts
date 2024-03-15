type BaseType = {
    id: number,
    title: string,
    slug: string
}

type Staff_tag = BaseType & { color: string}

type Country = BaseType & { icon: string}

type Position = Omit<BaseType, 'slug'>

type Type_contract = BaseType

type Gender = BaseType

type EmployeeType = {
    full_name: string,
    inn: string,
    tag: Staff_tag,
    address: string,
    date_birth?: string,
    age?: number,
    type_contract: Type_contract,
    gender: Gender,
    country: Country,
    position: Position
}

export {
    BaseType,
    Staff_tag, 
    Country, 
    Position, 
    Type_contract, 
    Gender, 
    EmployeeType
}