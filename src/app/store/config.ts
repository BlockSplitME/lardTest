import { Country, Gender, Position, Type_contract, Staff_tag } from './types'

export const Genders = new Map<number, Gender>([
    [0, {id: 0, title: "Женский", slug: "Ж"}],
    [1, {id: 1, title: "Мужской", slug: "М"}],
])

export const Countries = new Map<number, Country>([
    [0, {id: 0, title: "Россия", slug: "RU", icon: '@/shared/assets/countryIcons/RU.png'}],
    [1, {id: 1, title: "Таджикистан", slug: "TJ", icon: '@/shared/assets/countryIcons/TJ.png'}],
    [2, {id: 2, title: "Узбекистан", slug: "UZ", icon: '@/shared/assets/countryIcons/UZ.png'}]
])

export const Positions = new Map<number, Position>([
    [0, {id: 0, title: "Промышленный альпинист"}],
    [1, {id: 1, title: "Токарь"}],
    [2, {id: 2, title: "Пекарь"}]
])

export const Type_contracts = new Map<number, Type_contract>([
    [0, {id: 0, title: "Трудовой договор", slug: "ТД"}],
    [1, {id: 1, title: "ГПХ", slug: "ГПХ"}],
    [2, {id: 2, title: "Самозанятый", slug: "СМЗ"}],
    [3, {id: 3, title: "Кандидат", slug: "Кандидат"}],
])

export const Staff_tags = new Map<number, Staff_tag>([
    [0, {id: 0, title: "Проблемные", slug: "Проблемные", color: "yellow"}],
    [1, {id: 1, title: "Критические", slug: "Критические", color: "red"}],
    [2, {id: 2, title: "Есть замечания", slug: "Есть замечания", color: "blue"}],
    [3, {id: 3, title: "Выполнено", slug: "Выполнено", color: "green"}]
])
